var is_modal_tambah = false;
var data_resiko_bahaya = [];
$(document).ready(function(){
    get_opd_name();
    resiko_bahaya();
    $("#form_resiko_bahaya").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                tambah();
            }else{
                edit();
            }
        }
    });
});
function resiko_bahaya(){
    $("#listdata_resikobahaya").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_resikobahaya").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_resikobahaya").html("<tr><td colspan='5'>Data tidak tersedia</td></tr>");
                }
            }else{
                data_resiko_bahaya = res.data;
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
                    html += "<td>" + v['penyebab'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='modal_resiko_bahaya(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_resikobahaya").html(html);
            }
        },error:function(){
            $("#listdata_resikobahaya").loading("stop");
            $("#listdata_resikobahaya").html("<tr><td colspan='5'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_resiko_bahaya(is_tambah,itu){
    var id = $(itu).attr("data-id");
    var pos = $(itu).attr("data-pos");
    is_modal_tambah = is_tambah;
    $("#modal_resiko_bahaya").modal("show");
    if(is_tambah){
        $("#nama_resiko_bahaya").val("");
        $("#penyebab").val("");
    }else{
        var nama = data_resiko_bahaya[pos]['nama'];
        var penyebab = data_resiko_bahaya[pos]['penyebab'];
        $("#anjab_resiko_bahaya_id").val(id);
        $("#nama_resiko_bahaya").val(nama);
        $("#penyebab").val(penyebab);
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
                        url:'/ajax/anjab/resiko_bahaya_hapus',
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
                                resiko_bahaya();
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
    $("#form_resiko_bahaya").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var nama_resiko_bahaya = $("#nama_resiko_bahaya").val();
    var penyebab = $("#penyebab").val();
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_resiko_bahaya);
    data.append("penyebab", penyebab);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_resiko_bahaya").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_resiko_bahaya").modal("hide");
                resiko_bahaya();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_resiko_bahaya").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function edit(){
    $("#form_resiko_bahaya").loading();
    var data = new FormData();
    var jabatan_id = $("#jabatan_id").val();
    var anjab_resiko_bahaya_id = $("#anjab_resiko_bahaya_id").val();
    var nama_resiko_bahaya = $("#nama_resiko_bahaya").val();
    var penyebab = $("#penyebab").val();
    data.append("id", anjab_resiko_bahaya_id);
    data.append("jabatan_id", jabatan_id);
    data.append("nama", nama_resiko_bahaya);
    data.append("penyebab", penyebab);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_resiko_bahaya").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_resiko_bahaya").modal("hide");
                resiko_bahaya();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_resiko_bahaya").loading("stop");
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
    $("#listdata_resikobahaya").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya_move_up',
        data:{order:order},
        success:function(resp){
            $("#listdata_resikobahaya").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                resiko_bahaya();
            }
        },error:function(resp){
            $("#listdata_resikobahaya").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function move_down(order){
    $("#listdata_resikobahaya").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya_move_down',
        data:{order:order},
        success:function(resp){
            $("#listdata_resikobahaya").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                resiko_bahaya();
            }
        },error:function(resp){
            $("#listdata_resikobahaya").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}