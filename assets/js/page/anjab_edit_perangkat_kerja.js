var is_modal_tambah = false;
var data_perangkat_kerja = [];
$(document).ready(function(){
    get_opd_name();
    perangkat_kerja();
    $("#form_perangkat_kerja").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                tambah();
            }else{
                edit();
            }
        }
    });
});
function perangkat_kerja(){
    $("#listdata_perangkatkerja").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_perangkatkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_perangkatkerja").html("<tr><td colspan='5'>Data tidak tersedia</td></tr>");
                }
            }else{
                data_perangkat_kerja = res.data;
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
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + v['digunakan_dalam_tugas'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='modal_perangkat_kerja(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_perangkatkerja").html(html);
            }
        },error:function(){
            $("#listdata_perangkatkerja").loading("stop");
            $("#listdata_perangkatkerja").html("<tr><td colspan='5'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_perangkat_kerja(is_tambah,itu){
    var id = $(itu).attr("data-id");
    var pos = $(itu).attr("data-pos");
    is_modal_tambah = is_tambah;
    $("#modal_perangkat_kerja").modal("show");
    if(is_tambah){
        $("#nama_perangkat_kerja").val("");
        $("#digunakan_dalam_tugas").val("");
    }else{
        var nama = data_perangkat_kerja[pos]['nama'];
        var digunakan_dalam_tugas = data_perangkat_kerja[pos]['digunakan_dalam_tugas'];
        $("#anjab_perangkat_kerja_id").val(id);
        $("#nama_perangkat_kerja").val(nama);
        $("#digunakan_dalam_tugas").val(digunakan_dalam_tugas);
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
                        url:'/ajax/anjab/perangkat_kerja_hapus',
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
                                perangkat_kerja();
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
    $("#form_perangkat_kerja").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var nama_perangkat_kerja = $("#nama_perangkat_kerja").val();
    var digunakan_dalam_tugas = $("#digunakan_dalam_tugas").val();
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_perangkat_kerja);
    data.append("digunakan_dalam_tugas", digunakan_dalam_tugas);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_perangkat_kerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_perangkat_kerja").modal("hide");
                perangkat_kerja();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_perangkat_kerja").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function edit(){
    $("#form_perangkat_kerja").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var anjab_perangkat_kerja_id = $("#anjab_perangkat_kerja_id").val();
    var nama_perangkat_kerja = $("#nama_perangkat_kerja").val();
    var digunakan_dalam_tugas = $("#digunakan_dalam_tugas").val();
    data.append("id", anjab_perangkat_kerja_id);
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_perangkat_kerja);
    data.append("digunakan_dalam_tugas", digunakan_dalam_tugas);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_perangkat_kerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_perangkat_kerja").modal("hide");
                perangkat_kerja();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_perangkat_kerja").loading("stop");
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
function move_up(order){
    $("#listdata_perangkatkerja").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja_move_up',
        data:{order:order},
        success:function(resp){
            $("#listdata_perangkatkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                perangkat_kerja();
            }
        },error:function(resp){
            $("#listdata_perangkatkerja").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function move_down(order){
    $("#listdata_perangkatkerja").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja_move_down',
        data:{order:order},
        success:function(resp){
            $("#listdata_perangkatkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                perangkat_kerja();
            }
        },error:function(resp){
            $("#listdata_perangkatkerja").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}