$(document).ready(function(){
    get_opd_name();
    ikhtisiar_jabatan();
    $("#form_ikhtisiar").validate({
        submitHandler:function(){
            ikhtisiar_jabatan_update();
        }
    });
});
function ikhtisiar_jabatan(){
    show_localloader();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/ikhtisiar_jabatan',
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
                    $("#ikhtisiar").val("");
                }
            }else{
                var data = res.data[0];
                $("#ikhtisiar").val(data['ikhtisiar']);
            }
        },error:function(){
            hide_localloader();
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function ikhtisiar_jabatan_update(){
    $("#form_ikhtisiar").loading();
    var jabatan_id = $("#jabatan_id").val();
    var ikhtisiar = $("#ikhtisiar").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("ikhtisiar", ikhtisiar);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/ikhtisiar_jabatan_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_ikhtisiar").loading("stop");
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
            $("#form_ikhtisiar").loading("stop");
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