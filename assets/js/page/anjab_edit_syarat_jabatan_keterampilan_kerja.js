var is_modal_tambah = true;
var data_syarat_jabatan_keterampilan_kerja = [];
$(document).ready(function(){
    $("#form_keterampilan_kerja").validate({
        submitHandler:function(){
            if(is_modal_tambah){
                syarat_jabatan_keterampilan_kerja_tambah();
            }else{
                syarat_jabatan_keterampilan_kerja_edit();
            }
        }
    });
    get_opd_name();
    syarat_jabatan_keterampilan_kerja();
});
function syarat_jabatan_keterampilan_kerja(){
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_keterampilan_kerja',
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
                data_syarat_jabatan_keterampilan_kerja = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['aspek'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td>";
                    html += "<a href='javascript:void(0);' onclick='modal_keterampilan_kerja(false,this)' data-id='" + v['id'] + "' data-pos='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
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
function syarat_jabatan_keterampilan_kerja_tambah(){
    $("#form_keterampilan_kerja").loading();
    var jabatan_id = $("#jabatan_id").val();
    var aspek = $("#aspek").val();
    var uraian = $("#uraian").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("aspek", aspek);
    data.append("uraian", uraian);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_keterampilan_kerja_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_keterampilan_kerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_keterampilan_kerja").modal("hide");
                syarat_jabatan_keterampilan_kerja();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_keterampilan_kerja").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
        }
    });
}
function syarat_jabatan_keterampilan_kerja_edit(){
    $("#form_keterampilan_kerja").loading();
    var anjab_syarat_jabatan_keterampilan_kerja_id = $("#anjab_syarat_jabatan_keterampilan_kerja_id").val();
    var jabatan_id = $("#jabatan_id").val();
    var aspek = $("#aspek").val();
    var uraian = $("#uraian").val();
    var data = new FormData();
    data.append("id", anjab_kualifikasi_pelatihan_id);
    data.append("jabatan_id", jabatan_id);
    data.append("aspek", aspek);
    data.append("uraian", uraian);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_keterampilan_kerja_edit',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_keterampilan_kerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_keterampilan_kerja").modal("hide");
                syarat_jabatan_keterampilan_kerja();
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_keterampilan_kerja").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function modal_keterampilan_kerja(is_tambah,itu){
    $("#modal_keterampilan_kerja").modal({
        show:true
    });
    if(is_tambah){
        is_modal_tambah = true;
        $("#aspek").val("");
        $("#uraian").val("");
    }else{
        is_modal_tambah = false;
        var id = $(itu).attr("data-id");
        var pos = $(itu).attr("data-pos");
        var data = data_syarat_jabatan_keterampilan_kerja[pos];
        $("#aspek").val(data['aspek']);
        $("#uraian").val(data['uraian']);
    }
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