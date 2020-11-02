$(document).ready(function(){
    $("#password").keyup(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#password").blur(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    dropdown_opd();
    $("#level").change(function(){
        if($("#level").val() == "2"){
            $("#div_opd").show();
        }else{
            $("#div_opd").hide();
        }
    });
    $("#form_update").validate({
       submitHandler:function(){
           $("#form_update").loading();
           var username = $("#username").val();
           var email = $("#email").val();
           var password = $("#hidden_password").val();
           var level = $("#level").val();
           var nama = $("#nama").val();
           var master_opd_id = $("#master_opd_id").val();
           var jabatan = $("#nama_jabatan").val();
           var data = new FormData();
           data.append("username", username);
           data.append("email", email);
           data.append("password", password);
           data.append("level", level);
           data.append("nama", nama);
           data.append("master_opd_id", master_opd_id);
           data.append("jabatan", jabatan);
           $.ajax({
               type:'post',
               url:'/ajax/user/tambah',
               data:data,
               enctype: 'multipart/form-data',
               cache: false,
               contentType: false,
               processData: false,
               success:function(resp){
                   $("#form_update").loading("stop");
                   var res = JSON.parse(resp);
                   if(res.is_error){
                       if(res.must_login){
                           window.location = "/logout";;
                       }else{
                           toastr["error"](res.msg);
                       }
                   }else{
                       toastr["success"](res.msg);
                       window.location = "/user"
                   }
               },error:function(){
                   $("#form_update").loading("stop");
                   toastr["error"]("Gagal tambah data, coba lagi nanti");
               }
           });
       }
    });
});
function dropdown_opd(){
    $("#opd").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/opd',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#filter_opd").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih OPD</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#opd").html(html);
                $("#opd").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#opd").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}