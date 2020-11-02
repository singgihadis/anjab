var is_modal_tambah = true;
var data_kualifikasi_jabatan_pelatihan = [];
$(document).ready(function(){
    $("#form_kualifikasi_pelatihan").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                kualifikasi_jabatan_pelatihan_tambah();
            }else{
                kualifikasi_jabatan_pelatihan_edit();
            }
        }
    });
    get_opd_name();
    kualifikasi_jabatan_pelatihan();
});
function kualifikasi_jabatan_pelatihan(){
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pelatihan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                data_kualifikasi_jabatan_pelatihan = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama_jenis_pelatihan'] + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>";
                    html += "<a href='javascript:void(0);' onclick='modal_pelatihan(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata").html(html);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function hapus(itu){
    $.confirm({
        title: 'Konfirmasi',
        content: 'Apa anda yakin menghapus data ini?',
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
                    var id = $(itu).attr("data-id");
                    var data = new FormData();
                    data.append("id", id);
                    $(itu).parent().parent().loading();
                    $.ajax({
                        type:'post',
                        url:'/ajax/anjab/kualifikasi_jabatan_pelatihan_hapus',
                        data:data,
                        enctype: 'multipart/form-data',
                        cache: false,
                        contentType: false,
                        processData: false,
                        success:function(resp){
                            $(itu).parent().parent().loading("stop");
                            var res = JSON.parse(resp);
                            if(res.is_error){
                                if(res.must_login){
                                    window.location = "/logout";;
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                toastr["success"](res.msg);
                                kualifikasi_jabatan_pelatihan();
                            }
                        },error:function(){
                            $(itu).parent().parent().loading("stop");
                            toastr["error"]("Gagal hapus, coba lagi nanti");
                        }
                    });
                }
            }
        }
    });
}
function kualifikasi_jabatan_pelatihan_tambah(){
    $("#form_kualifikasi_pelatihan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var jenis_pelatihan = $("#jenis_pelatihan").val();
    var nama_pelatihan = $("#nama_pelatihan").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_jenis_pelatihan_id", jenis_pelatihan);
    data.append("nama", nama_pelatihan);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pelatihan_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_kualifikasi_pelatihan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_pelatihan").modal("hide");
                kualifikasi_jabatan_pelatihan();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_kualifikasi_pelatihan").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function kualifikasi_jabatan_pelatihan_edit(){
    $("#form_kualifikasi_pelatihan").loading();
    var anjab_kualifikasi_pelatihan_id = $("#anjab_kualifikasi_pelatihan_id").val();
    var jabatan_id = $("#jabatan_id").val();
    var jenis_pelatihan = $("#jenis_pelatihan").val();
    var nama_pelatihan = $("#nama_pelatihan").val();
    var data = new FormData();
    data.append("id", anjab_kualifikasi_pelatihan_id);
    data.append("jabatan_id", jabatan_id);
    data.append("master_jenis_pelatihan_id", jenis_pelatihan);
    data.append("nama", nama_pelatihan);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pelatihan_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_kualifikasi_pelatihan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_pelatihan").modal("hide");
                kualifikasi_jabatan_pelatihan();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_kualifikasi_pelatihan").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function modal_pelatihan(is_tambah,itu){
    $("#modal_pelatihan").modal({
        show:true
    });
    if(is_tambah){
        is_modal_tambah = true;
        dropdown_jenispelatihan(function(){
            $("#jenis_pelatihan").val("").trigger("change");
            $("#nama_pelatihan").val("");
        });
    }else{
        is_modal_tambah = false;
        var id = $(itu).attr("data-id");
        var pos = $(itu).attr("data-pos");
        var data = data_kualifikasi_jabatan_pelatihan[pos];
        dropdown_jenispelatihan(function(){
            var master_jenis_pelatihan_id = data['master_jenis_pelatihan_id'];
            var nama = data['nama'];
            $("#anjab_kualifikasi_pelatihan_id").val(id);
            $("#jenis_pelatihan").val(master_jenis_pelatihan_id).trigger("change");
            $("#nama_pelatihan").val(nama);
        });
    }
}
function dropdown_jenispelatihan(callback){
    $("#jenis_pelatihan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/jenis_pelatihan',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#jenis_pelatihan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                html += "<option value=''>Pilih Jenis Pelatihan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#jenis_pelatihan").html(html);
                $("#jenis_pelatihan").select2({
                    theme:'bootstrap'
                })
                callback();
            }
        },error:function(){
            $("#jenis_pelatihan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function get_opd_name(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/get_opd_name',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                }
            }else{
                $("#opd_name").html(toTitleCase(res.data[0]['nama']) + " (" + res.data[0]['tahun'] + ")");
                $("#nama_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
            }
        },error:function(){
        }
    });
}