$(document).ready(function(){
    $("#jml").keyup(function(){
        $("#jml").val(FormatAngka($(this).val()));
    });
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var nama = $("#nama").val();
            var jml = StrToNumber($("#jml").val());
            var data = new FormData();
            data.append("id", id);
            data.append("nama", nama);
            data.append("jml", jml);
            $.ajax({
                type:'post',
                url:'/ajax/keterangan_waktu/edit',
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
                    toastr["error"]("Gagal edit data, coba lagi nanti");
                }
            });
        }
    });
});
function load_data(){
    $("#form_update").loading();
    var id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/keterangan_waktu/detail',
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
                $("#nama").val(data['nama']);
                $("#jml").val(FormatAngka(data['jml']));
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}