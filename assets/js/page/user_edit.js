$(document).ready(function(){
    load_data();
    $("#level").change(function(){
        if($("#level").val() == "2"){
            $("#div_opd").show();
        }else{
            $("#div_opd").hide();
        }
    });
    $("#form_update").validate({
        submitHandler:function(){
            var status = $("#status").val();
            if(status == "1"){
                simpan();
            }else{
                $.confirm({
                    title: 'Konfirmasi',
                    content: 'Mengubah status menjadi tidak aktif menyebabkan sesi login di hapus dari user yang bersangkutan. Apa anda yakin untuk melanjutkan ?',
                    buttons: {
                        cancel: {
                            text: 'Batal',
                            action: function(){

                            }
                        },
                        confirm: {
                            text: 'Konfirmasi',
                            btnClass: 'btn-blue',
                            action: function(){
                                simpan();
                            }
                        }
                    }
                });
            }
        }
    });
});
function simpan(){
    $("#form_update").loading();
    var id = $("#id").val();
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#hidden_password").val();
    var level = $("#level").val();
    var nama = $("#nama").val();
    var master_opd_id = $("#master_opd_id").val();
    var jabatan = $("#nama_jabatan").val();
    var status = $("#status").val();
    var data = new FormData();
    data.append("id", id);
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    data.append("level", level);
    data.append("nama", nama);
    data.append("master_opd_id", master_opd_id);
    data.append("jabatan", jabatan);
    data.append("status", status);
    $.ajax({
        type:'post',
        url:'/ajax/user/edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_update").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                window.location = "/user"
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function load_data(){
    $("#form_update").loading();
    var id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/user/detail',
        data:{id:id},
        success:function(resp){
            $("#form_update").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#username").val(data['username']);
                $("#email").val(data['email']);
                $("#level").val(data['level']);
                if(data['level'] == "2"){
                    $("#div_opd").show();
                }else{
                    $("#div_opd").hide();
                }
                $("#nama").val(data['nama']);
                $("#nama_jabatan").val(data['jabatan']);
                $("#status").val(data['status']);
                dropdown_opd(data['master_opd_id']);
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function dropdown_opd(master_opd_id){
    $("#master_opd_id").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/opd',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#master_opd_id").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih OPD</option>";
                $.each(res.data,function(k,v){
                    if(master_opd_id == v['id']){
                        html += "<option value='"  + v['id'] + "' selected>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#master_opd_id").html(html);
                $("#master_opd_id").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#master_opd_id").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}