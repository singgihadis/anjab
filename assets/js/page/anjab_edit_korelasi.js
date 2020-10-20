var is_modal_tambah = false;
var data_korelasi = [];
$(document).ready(function(){
    get_opd_name();
    korelasi();
    $("#form_korelasi").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                tambah();
            }else{
                edit();
            }
        }
    });
});
function korelasi(){
    $("#listdata_korelasi").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_korelasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_korelasi").html("<tr><td colspan='6'>Data tidak tersedia</td></tr>");
                }
            }else{
                data_korelasi = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr data-id='" + v['id'] + "'>";
                    html += "<td>" + no + "</td>";
                    html += "<td>";
                    html += "<a href='javascript:void(0);' onclick='move_up(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-up'></span></a> ";
                    html += "<a href='javascript:void(0);' onclick='move_down(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-down'></span></a>";
                    html += "</td>";
                    html += "<td>" + v['nama_jabatan'] + "</td>";
                    html += "<td>" + v['unit_kerja'] + "</td>";
                    html += "<td>" + v['dalam_hal'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='modal_korelasi(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_korelasi").html(html);
            }
        },error:function(){
            $("#listdata_korelasi").loading("stop");
            $("#listdata_korelasi").html("<tr><td colspan='6'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_korelasi(is_tambah,itu){
    var id = $(itu).attr("data-id");
    var pos = $(itu).attr("data-pos");
    is_modal_tambah = is_tambah;
    $("#modal_korelasi").modal("show");
    if(is_tambah){
        $("#i_nama_jabatan").val("");
        $("#unit_kerja").val("");
        $("#dalam_hal").val("");
    }else{
        var nama_jabatan = data_korelasi[pos]['nama_jabatan'];
        var unit_kerja = data_korelasi[pos]['unit_kerja'];
        var dalam_hal = data_korelasi[pos]['dalam_hal'];
        $("#anjab_korelasi_id").val(id);
        $("#i_nama_jabatan").val(nama_jabatan);
        $("#unit_kerja").val(unit_kerja);
        $("#dalam_hal").val(dalam_hal);
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
                        url:'/ajax/anjab/korelasi_hapus',
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
                                    window.location = "/login";
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                bahan_kerja();
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
    $("#form_korelasi").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var nama_jabatan = $("#i_nama_jabatan").val();
    var unit_kerja = $("#unit_kerja").val();
    var dalam_hal = $("#dalam_hal").val();
    data.append("jabatan_id", jabatan_id);
    data.append("nama_jabatan", nama_jabatan);
    data.append("unit_kerja", unit_kerja);
    data.append("dalam_hal", dalam_hal);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_korelasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_korelasi").modal("hide");
                korelasi();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_korelasi").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function edit(){
    $("#form_korelasi").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var anjab_korelasi_id = $("#anjab_korelasi_id").val();
    var nama_jabatan = $("#i_nama_jabatan").val();
    var unit_kerja = $("#unit_kerja").val();
    var dalam_hal = $("#dalam_hal").val();
    data.append("id", anjab_korelasi_id);
    data.append("jabatan_id", jabatan_id);
    data.append("nama_jabatan", nama_jabatan);
    data.append("unit_kerja", unit_kerja);
    data.append("dalam_hal", dalam_hal);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_korelasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_korelasi").modal("hide");
                korelasi();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_korelasi").loading("stop");
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
                    window.location = "/login";
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
function move_up(order){
    $("#listdata_korelasi").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi_move_up',
        data:{order:order},
        success:function(resp){
            $("#listdata_korelasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                korelasi();
            }
        },error:function(resp){
            $("#listdata_korelasi").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function move_down(order){
    $("#listdata_korelasi").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi_move_down',
        data:{order:order},
        success:function(resp){
            $("#listdata_korelasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                korelasi();
            }
        },error:function(resp){
            $("#listdata_korelasi").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}