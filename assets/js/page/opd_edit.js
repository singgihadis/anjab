$(document).ready(function(){
    $("#is_opd_utama").change(function(){
        $("#jenis_jabatan").val("");
        if($(this).val() == "1"){
            $("#fg_jenis_jabatan").show();
            $("#fg_nama_jabatan").show();
        }else{
            $("#fg_jenis_jabatan").hide();
            $("#fg_nama_jabatan").hide();
        }
    });
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var nama = $("#nama").val();
            var is_opd_utama = $("#is_opd_utama").val();
            var jenis_jabatan = $("#jenis_jabatan").val();
            var nama_jabatan = $("#nama_jabatan").val();
            var data = new FormData();
            data.append("id", id);
            data.append("nama", nama);
            data.append("is_opd_utama", is_opd_utama);
            data.append("jenis_jabatan", jenis_jabatan);
            data.append("nama_jabatan", nama_jabatan);
            $.ajax({
                type:'post',
                url:'/ajax/opd/edit',
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
                        //window.location = "/opd"
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal edit data, coba lagi nanti");
                }
            });
        }
    });
});
function load_data(){
    $("#form_update").loading();
    var id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/opd/detail',
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
                $("#nama").val(data['nama']);
                $("#is_opd_utama").val(data['is_opd_utama']);
                $("#jenis_jabatan").val(data['jenis_jabatan']);
                $("#nama_jabatan").val(data['nama_jabatan']);
                if(data['is_opd_utama'] == "1"){
                    $("#fg_jenis_jabatan").show();
                    $("#fg_nama_jabatan").show();
                }else{
                    $("#fg_jenis_jabatan").hide();
                    $("#fg_nama_jabatan").hide();
                }
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}