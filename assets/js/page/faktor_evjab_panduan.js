$(document).ready(function(){
    $(".summernote").summernote({
        placeholder: 'Isi Panduan',
        tabsize: 2,
        height: 500
    });
    load_data();
    $("#form_update").validate({
        ignore:[],
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var panduan = $(".summernote").summernote('code');
            if(panduan != ""){
                var data = new FormData();
                data.append("id", id);
                data.append("panduan", panduan);
                $.ajax({
                    type:'post',
                    url:'/ajax/faktor_evjab/panduan',
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
                                window.location = "/login";
                            }else{
                                toastr["error"](res.msg);
                            }
                        }else{
                            toastr["success"](res.msg);
                            setTimeout(function(){
                                window.location = "/faktor_evjab";
                            },1000);
                        }
                    },error:function(){
                        $("#form_update").loading("stop");
                        toastr["error"]("Gagal edit data, coba lagi nanti");
                    }
                });
            }else{
                toastr["error"]("Panduan harus diisi");
            }

        }
    });
});
function load_data(){
    $("#form_update").loading();
    var id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/faktor_evjab/detail',
        data:{id:id},
        success:function(resp){
            $("#form_update").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#panduan").val(data['panduan']);
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}