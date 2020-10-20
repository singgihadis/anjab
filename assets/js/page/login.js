$(document).ready(function(){
    $("#password").keyup(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#password").blur(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    $("#form_login").validate({
        submitHandler : function(){
            $("#form_login").loading();
            var username = $("#username").val();
            var password = $("#hidden_password").val();
            $.ajax({
                type:'post',
                url:'/ajax/login',
                data:{username:username,password:password},
                success:function(resp){
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        $("#form_login").loading("stop");
                        toastr["error"](res.msg);
                    }else{
                        window.location = "/";
                    }
                },error:function(){
                    $("#form_login").loading("stop");
                    toastr["error"]("Gagal login, coba lagi nanti");
                }
            });
        }
    });
});
