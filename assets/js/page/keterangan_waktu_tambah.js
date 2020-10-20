$(document).ready(function(){
    $("#jml").keyup(function(){
        $("#jml").val(FormatAngka($(this).val()));
    });
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var nama = $("#nama").val();
            var jml = StrToNumber($("#jml").val());
            var data = new FormData();
            data.append("nama", nama);
            data.append("jml", jml);
            $.ajax({
                type:'post',
                url:'/ajax/keterangan_waktu/tambah',
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
                        window.location = "/keterangan_waktu"
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
                }
            });
        }
    });
});