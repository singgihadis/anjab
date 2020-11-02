$(document).ready(function(){
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var kode = $("#kode").val();
            var nama = $("#nama").val();
            var tipe = $("#tipe").val();
            var data = new FormData();
            data.append("kode", kode);
            data.append("nama", nama);
            data.append("tipe", tipe);
            $.ajax({
                type:'post',
                url:'/ajax/standar_kompetensi/tambah',
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
                        setTimeout(function(){
                            window.location = "/standar_kompetensi"
                        },500);
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
                }
            });
        }
    });
});