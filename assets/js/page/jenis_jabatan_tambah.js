$(document).ready(function(){
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var nama = $("#nama").val();
            var tipe = $("#tipe").val();
            var abk = $("#abk").val();
            var data = new FormData();
            data.append("nama", nama);
            data.append("tipe", tipe);
            data.append("abk", abk);
            $.ajax({
                type:'post',
                url:'/ajax/jenis_jabatan/tambah',
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
                        window.location = "/jenis_jabatan"
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
                }
            });
        }
    });
});