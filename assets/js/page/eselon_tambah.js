$(document).ready(function(){
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var nama = $("#nama").val();
            var kelas = $("#kelas").val();
            var data = new FormData();
            data.append("nama", nama);
            data.append("kelas", kelas);
            $.ajax({
                type:'post',
                url:'/ajax/eselon/tambah',
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
                        window.location = "/eselon"
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
                }
            });
        }
    });
});