var is_modal_tambah = true;
$(document).ready(function(){
    tugas_pokok();
    $("#form_tugas_pokok").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                tugas_pokok_tambah();
            }else{
                tugas_pokok_edit();
            }
        }
    });
    get_opd_name();
});
var data_tugas_pokok = [];
function modal_tugas_pokok(is_tambah,itu){
    $("#modal_tugas_pokok").modal({
        show:true
    });
    if(is_tambah){
        is_modal_tambah = true;
        $("#anjab_tugas_pokok_id").val("");
        $("#uraian_tugas_pokok").val("");
    }else{
        is_modal_tambah = false;
        var id = $(itu).attr("data-id");
        var pos = $(itu).attr("data-pos");
        var data = data_tugas_pokok[pos];
        var uraian = data['uraian'];
        $("#anjab_tugas_pokok_id").val(id);
        $("#uraian_tugas_pokok").val(uraian);
    }
}
function modal_tahapan(itu){
    $("#modal_tahapan").modal({
        show:true
    });
    var id = $(itu).attr("data-id");
    var pos = $(itu).attr("data-pos");
    var uraian = data_tugas_pokok[pos]['uraian'];
    $("#anjab_tugas_pokok_id").val(id);
    $("#tahapan_deskripsi").html((parseInt(pos) + 1) + ". " + uraian);
    tugas_pokok_tahapan();
}
function tugas_pokok_tahapan(){
    $("#listdata_tugaspokok_tahapan").html("");
    $("#listdata_tugaspokok_tahapan").loading();
    var anjab_tugas_pokok_id = $("#anjab_tugas_pokok_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_tahapan',
        data:{anjab_tugas_pokok_id:anjab_tugas_pokok_id},
        success:function(resp){
            $("#listdata_tugaspokok_tahapan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    var html = "";
                    html += "<div class='input-group mb-3'>";
                    html += "        <input type='text' class='form-control' placeholder='Input tahapan tugas pokok'>";
                    html += "        <div class='input-group-append'>";
                    html += "            <button class='btn btn-danger' type='button'><span class='fa fa-remove'></span></button>";
                    html += "        </div>";
                    $("#listdata_tugaspokok_tahapan").html(html);
                }
            }else{
                data_tugas_pokok = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<div class='input-group mb-3'>";
                    html += "        <input type='text' class='form-control' value='" + v['uraian'] + "' placeholder='Input tahapan tugas pokok'>";
                    html += "        <div class='input-group-append'>";
                    html += "            <button onclick='hapus_tahapan_item(this)' class='btn btn-danger' type='button'><span class='fa fa-remove'></span></button>";
                    html += "        </div>";
                    html += "</div>";
                });
                $("#listdata_tugaspokok_tahapan").html(html);
            }
        },error:function(){
            $("#listdata_tugaspokok_tahapan").loading("stop");
            $("#listdata_tugaspokok_tahapan").html("<tr><td colspan='2'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function hapus_tahapan_item(itu){
    $(itu).parent().parent().remove();
}
function simpan_tahapan(){
    var param_arr = [];
    $("#listdata_tugaspokok_tahapan input").each(function(){
        var uraian = $(this).val();
        if(uraian != ""){
            param_arr.push(uraian);
        }
    });
    if(param_arr.length > 0){
        $("#form_tugas_pokok_tahapan").loading();
        var data = new FormData();
        var anjab_tugas_pokok_id = $("#anjab_tugas_pokok_id").val();
        data.append("anjab_tugas_pokok_id", anjab_tugas_pokok_id);
        data.append("uraian_json", JSON.stringify(param_arr));
        $.ajax({
            type:'post',
            url:'/ajax/anjab/tugas_pokok_tahapan_update',
            data:data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            success:function(resp){
                $("#form_tugas_pokok_tahapan").loading("stop");
                var res = JSON.parse(resp);
                if(res.is_error){
                    if(res.must_login){
                        window.location = "/logout";;
                    }else{
                        toastr["error"](res.msg);
                    }
                }else{
                    $("#modal_tahapan").modal("hide");
                    toastr["success"](res.msg);
                }
            },error:function(){
                $("#form_tugas_pokok_tahapan").loading("stop");
                toastr["error"]("Gagal tambah data, coba lagi nanti");
            }
        });
    }
}
function tambah_input_tahapan(){
    var html = "";
    html += "<div class='input-group mb-3'>";
    html += "        <input type='text' class='form-control' placeholder='Input tahapan tugas pokok'>";
    html += "        <div class='input-group-append'>";
    html += "            <button class='btn btn-danger' type='button'><span class='fa fa-remove'></span></button>";
    html += "        </div>";
    html += "</div>";
    $("#listdata_tugaspokok_tahapan").append(html);
}
function tugas_pokok(){
    $("#listdata_tugaspokok").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_tugaspokok").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_tugaspokok").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                data_tugas_pokok = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='move_up(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-up'></span></a> ";
                    html += "<a href='javascript:void(0);' onclick='move_down(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-down'></span></a>";
                    html += "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='javascript:void(0);' onclick='modal_tugas_pokok(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a href='javascript:void(0);' onclick='modal_tahapan(this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-list-ol'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_tugaspokok").html(html);
            }
        },error:function(){
            $("#listdata_tugaspokok").loading("stop");
            $("#listdata_tugaspokok").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function tugas_pokok_tambah(){
    $("#form_tugas_pokok").loading();
    var jabatan_id = $("#jabatan_id").val();
    var uraian_tugas_pokok = $("#uraian_tugas_pokok").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("uraian", uraian_tugas_pokok);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_tugas_pokok").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_tugas_pokok").modal("hide");
                tugas_pokok();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_tugas_pokok").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
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
                    $(itu).parent().parent().loading();
                    var id = $(itu).attr("data-id");
                    var data = new FormData();
                    data.append("id", id);
                    $.ajax({
                        type:'post',
                        url:'/ajax/anjab/tugas_pokok_hapus',
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
                                tugas_pokok();
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
function tugas_pokok_edit(){
    $("#form_tugas_pokok").loading();
    var anjab_tugas_pokok_id = $("#anjab_tugas_pokok_id").val();
    var jabatan_id = $("#jabatan_id").val();
    var uraian_tugas_pokok = $("#uraian_tugas_pokok").val();
    var data = new FormData();
    data.append("id", anjab_tugas_pokok_id);
    data.append("uraian", uraian_tugas_pokok);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_tugas_pokok").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_tugas_pokok").modal("hide");
                tugas_pokok();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_tugas_pokok").loading("stop");
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
function move_up(order){
    $("#listdata_tugaspokok").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_move_up',
        data:{order:order},
        success:function(resp){
            $("#listdata_tugaspokok").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                tugas_pokok();
            }
        },error:function(resp){
            $("#listdata_tugaspokok").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function move_down(order){
    $("#listdata_tugaspokok").loading();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_move_down',
        data:{order:order},
        success:function(resp){
            $("#listdata_tugaspokok").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                tugas_pokok();
            }
        },error:function(resp){
            $("#listdata_tugaspokok").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}