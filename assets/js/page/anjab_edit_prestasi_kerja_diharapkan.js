var is_modal_tambah = false;
var data_prestasi_kerja_diharapkan = [];
$(document).ready(function(){
    get_opd_name();
    prestasi_kerja_diharapkan();
    $("#form_prestasi_kerja_diharapkan").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                tambah();
            }else{
                edit();
            }
        }
    });
});
function prestasi_kerja_diharapkan(){
    $("#listdata_prestasikerjadiharapkan").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/prestasi_kerja_diharapkan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_prestasikerjadiharapkan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_prestasikerjadiharapkan").html("<tr><td colspan='3'>Data tidak tersedia</td></tr>");
                }
            }else{
                data_prestasi_kerja_diharapkan = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr data-id='" + v['id'] + "'>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='modal_prestasi_kerja_diharapkan(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_prestasikerjadiharapkan").html(html);
            }
        },error:function(){
            $("#listdata_prestasikerjadiharapkan").loading("stop");
            $("#listdata_prestasikerjadiharapkan").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_prestasi_kerja_diharapkan(is_tambah,itu){
    var id = $(itu).attr("data-id");
    var pos = $(itu).attr("data-pos");
    is_modal_tambah = is_tambah;
    $("#modal_prestasi_kerja_diharapkan").modal("show");
    if(is_tambah){
        $("#nama_prestasi").val("");
    }else{
        var nama = data_prestasi_kerja_diharapkan[pos]['nama'];
        $("#anjab_prestasi_kerja_diharapkan_id").val(id);
        $("#nama_prestasi").val(nama);
    }
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
                    $(itu).parent().parent().loading();
                    var id = $(itu).attr("data-id");
                    var data = new FormData();
                    data.append("id", id);
                    $.ajax({
                        type:'post',
                        url:'/ajax/anjab/prestasi_kerja_diharapkan_hapus',
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
                                prestasi_kerja_diharapkan();
                                toastr["success"](res.msg);
                            }
                        },error:function(){
                            $(itu).parent().parent().loading("stop");
                            toastr["error"]("Gagal hapus data, coba lagi nanti");
                        }
                    });
                }
            }
        }
    });

}
function tambah(){
    $("#form_prestasi_kerja_diharapkan").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var nama_prestasi = $("#nama_prestasi").val();
    var penyebab = $("#penyebab").val();
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_prestasi);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/prestasi_kerja_diharapkan_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_prestasi_kerja_diharapkan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_prestasi_kerja_diharapkan").modal("hide");
                prestasi_kerja_diharapkan();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_prestasi_kerja_diharapkan").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function edit(){
    $("#form_prestasi_kerja_diharapkan").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var anjab_prestasi_kerja_diharapkan_id = $("#anjab_prestasi_kerja_diharapkan_id").val();
    var nama_prestasi = $("#nama_prestasi").val();
    data.append("id", anjab_prestasi_kerja_diharapkan_id);
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_prestasi);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/prestasi_kerja_diharapkan_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_prestasi_kerja_diharapkan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_prestasi_kerja_diharapkan").modal("hide");
                prestasi_kerja_diharapkan();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_form_prestasi_kerja_diharapkan").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
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