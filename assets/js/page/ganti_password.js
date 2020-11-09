$(document).ready(function(){
    $("#password_lama").keyup(function(){
        $("#hidden_password_lama").val(CryptoJS.MD5($("#password_lama").val()));
    });
    $("#password_lama").blur(function(){
        $("#hidden_password_lama").val(CryptoJS.MD5($("#password_lama").val()));
    });
    $("#hidden_password_lama").val(CryptoJS.MD5($("#password_lama").val()));

    $("#password_baru").keyup(function(){
        $("#hidden_password_baru").val(CryptoJS.MD5($("#password_baru").val()));
    });
    $("#password_baru").blur(function(){
        $("#hidden_password_baru").val(CryptoJS.MD5($("#password_baru").val()));
    });
    $("#hidden_password_baru").val(CryptoJS.MD5($("#password_baru").val()));

    $("#form_ganti_password").validate({
        rules: {
            password_baru: "required",
            konfirmasi_password_baru: {
                equalTo: "#password_baru"
            }
        },
        messages: {
            konfirmasi_password_baru: {
                equalTo: "Konfirmasi password baru harus sama dengan password baru"
            }
        },
        submitHandler:function(){
            update_password_by_user();
        }
    });
});
function update_password_by_user(){
    $("#form_ganti_password").loading();
    var password_lama = $("#hidden_password_lama").val();
    var password_baru = $("#hidden_password_baru").val();
    var data = new FormData();
    data.append("password_lama", password_lama);
    data.append("password_baru", password_baru);
    $.ajax({
        type:'post',
        url:'/ajax/user/update_password_by_user',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_ganti_password").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#form_ganti_password").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}