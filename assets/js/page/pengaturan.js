var update_logo = 0;
$(document).ready(function(){
   $("#logo").change(function(e){
        var fileName = e. target. files[0]. name;
        $("label[for='logo']").html(fileName);
    });
    $("#logo_login").change(function(e){
        var fileName = e. target. files[0]. name;
        $("label[for='logo_login']").html(fileName);
    });
    $("#favicon").change(function(e){
        var fileName = e. target. files[0]. name;
        $("label[for='favicon']").html(fileName);
    });
    $("#form_logo").validate({
        submitHandler:function(){
            $("#form_logo").loading();
            var data = new FormData();
            if($("#logo").val() != ""){
                data.append("logo", $("#logo")[0].files[0]);
            }else{
                data.append("logo", "");
            }
            $.ajax({
                type:'post',
                url:'/ajax/pengaturan/logo_edit',
                data:data,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                success:function(resp){
                    $("#form_logo").loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                         if(res.must_login){
                            window.location = "/logout";;
                        }else{
                            toastr["error"](res.msg);
                        }
                    }else{
                        toastr["success"](res.msg);
                        $("img").each(function(){
                           var src = $(this).attr("src");
                            var d = new Date();
                            $(this).attr("src",src + "?v=" + d.getTime());
                        });
                        //$("#logo_alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert' id='logo_alert'> Bila tidak ada perubahan, silahkan hapus cache pada browser anda atau tunggu hingga berganti hari. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
                    }
                },error:function(){
                    $("#form_logo").loading("stop");
                    toastr["error"]("Gagal update logo, coba lagi nanti");
                }
            });
        }
    });
    $("#form_logo_login").validate({
        submitHandler:function(){
            $("#form_logo_login").loading();
            var data = new FormData();
            if($("#logo_login").val() != ""){
                data.append("logo_login", $("#logo_login")[0].files[0]);
            }else{
                data.append("logo_login", "");
            }
            $.ajax({
                type:'post',
                url:'/ajax/pengaturan/logo_login_edit',
                data:data,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                success:function(resp){
                    $("#form_logo_login").loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        if(res.must_login){
                            window.location = "/logout";;
                        }else{
                            toastr["error"](res.msg);
                        }
                    }else{
                        toastr["success"](res.msg);
                        $("img").each(function(){
                            var src = $(this).attr("src");
                            var d = new Date();
                            $(this).attr("src",src + "?v=" + d.getTime());
                        });
                        //$("#logo_login_alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'> Bila tidak ada perubahan, silahkan hapus cache pada browser anda atau tunggu hingga berganti hari. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
                    }
                },error:function(){
                    $("#form_logo_login").loading("stop");
                    toastr["error"]("Gagal update logo, coba lagi nanti");
                }
            });
        }
    });
    $("#form_favicon").validate({
        submitHandler:function(){
            $("#form_favicon").loading();
            var data = new FormData();
            if($("#favicon").val() != ""){
                data.append("favicon", $("#favicon")[0].files[0]);
            }else{
                data.append("favicon", "");
            }
            $.ajax({
                type:'post',
                url:'/ajax/pengaturan/favicon_edit',
                data:data,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                success:function(resp){
                    $("#form_favicon").loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        if(res.must_login){
                            window.location = "/logout";;
                        }else{
                            toastr["error"](res.msg);
                        }
                    }else{
                        toastr["success"](res.msg);
                        $("img").each(function(){
                            var src = $(this).attr("src");
                            var d = new Date();
                            $(this).attr("src",src + "?v=" + d.getTime());
                        });
                        //$("#favicon_alert").html("<div class='alert alert-warning alert-dismissible fade show' role='alert'> Bila tidak ada perubahan, silahkan hapus cache pada browser anda atau tunggu hingga berganti hari. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>");
                    }
                },error:function(){
                    $("#form_favicon").loading("stop");
                    toastr["error"]("Gagal update logo, coba lagi nanti");
                }
            });
        }
    });
});