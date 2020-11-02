var is_modal_tambah = true;
var data_kualifikasi_jabatan_pengalaman = [];
$(document).ready(function(){
    $("#form_kualifikasi_pengalaman").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                kualifikasi_jabatan_pengalaman_tambah();
            }else{
                kualifikasi_jabatan_pengalaman_edit();
            }
        }
    });
    get_opd_name();
    kualifikasi_jabatan_pengalaman();
});
function modal_pengalaman(is_tambah,itu){
    $("#modal_pengalaman").modal({
        show:true
    });
    if(is_tambah){
        is_modal_tambah = true;
        $("#anjab_kualifikasi_pengalaman_id").val("");
        $("#nama_pengalaman").val("");
    }else{
        is_modal_tambah = false;
        var id = $(itu).attr("data-id");
        var pos = $(itu).attr("data-pos");
        var data = data_kualifikasi_jabatan_pengalaman[pos];
        var nama = data['nama'];
        $("#anjab_kualifikasi_pengalaman_id").val(id);
        $("#nama_pengalaman").val(nama);
    }
}
function kualifikasi_jabatan_pengalaman(){
    $("#listdata2").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pengalaman',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata2").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata2").html("<tr><td colspan='3'>" + res.msg + "</td></tr>");
                }
            }else{
                data_kualifikasi_jabatan_pengalaman = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>";
                    html += "<a href='javascript:void(0);' onclick='modal_pengalaman(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata2").html(html);
            }
        },error:function(){
            $("#listdata2").loading("stop");
            $("#listdata2").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
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
                        url:'/ajax/anjab/kualifikasi_jabatan_pengalaman_hapus',
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
                                kualifikasi_jabatan_pengalaman();
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
function kualifikasi_jabatan_pengalaman_tambah(){
    $("#form_kualifikasi_pengalaman").loading();
    var jabatan_id = $("#jabatan_id").val();
    var nama_pengalaman = $("#nama_pengalaman").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_pengalaman);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pengalaman_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_kualifikasi_pengalaman").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_pengalaman").modal("hide");
                kualifikasi_jabatan_pengalaman();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_kualifikasi_pengalaman").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function kualifikasi_jabatan_pengalaman_edit(){
    $("#form_kualifikasi_pengalaman").loading();
    var anjab_kualifikasi_pengalaman_id = $("#anjab_kualifikasi_pengalaman_id").val();
    var nama_pengalaman = $("#nama_pengalaman").val();
    var data = new FormData();
    data.append("id", anjab_kualifikasi_pengalaman_id);
    data.append("nama", nama_pengalaman);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pengalaman_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_kualifikasi_pengalaman").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_pengalaman").modal("hide");
                kualifikasi_jabatan_pengalaman();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_kualifikasi_pengalaman").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
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