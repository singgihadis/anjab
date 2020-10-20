$(document).ready(function(){
    $("#pendidikan").change(function(){
        $("#pendidikan").valid();
    });
    $("#form_kualifikasi_pendidikan").validate({
        submitHandler:function(){
            kualifikasi_jabatan_pendidikan_update();
        }
    });
    get_opd_name();
    dropdown_pendidikan(function(){
        kualifikasi_jabatan_pendidikan();
    });
});
function dropdown_pendidikan(callback){
    $("#pendidikan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/pendidikan',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#pendidikan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                html += "<option value=''>Pilih pendidikan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#pendidikan").html(html);
                $("#pendidikan").select2({
                    theme:'bootstrap'
                });
                callback();
            }
        },error:function(){
            $("#pendidikan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function kualifikasi_jabatan_pendidikan_update(){
    $("#form_kualifikasi_pendidikan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var pendidikan = $("#pendidikan").val();
    var jurusan = $("#jurusan").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_pendidikan_id", pendidikan);
    data.append("jurusan", jurusan);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pendidikan_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_kualifikasi_pendidikan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_kualifikasi_pendidikan").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function kualifikasi_jabatan_pendidikan(){
    show_localloader();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pendidikan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            hide_localloader();
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#pendidikan").val("").trigger('change');
                    $("#jurusan").val("");
                }
            }else{
                var data = res.data[0];
                $("#pendidikan").val(data['master_pendidikan_id']).trigger('change');
                $("#jurusan").val(data['jurusan']);
            }
        },error:function(){
            hide_localloader();
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