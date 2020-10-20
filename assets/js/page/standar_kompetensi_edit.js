$(document).ready(function(){
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var kode = $("#kode").val();
            var nama = $("#nama").val();
            var tipe = $("#tipe").val();
            var data = new FormData();
            data.append("id", id);
            data.append("kode", kode);
            data.append("nama", nama);
            data.append("tipe", tipe);
            $.ajax({
                type:'post',
                url:'/ajax/standar_kompetensi/edit',
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
                            window.location = "/standar_kompetensi"
                        },500);
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
        url:'/ajax/standar_kompetensi/detail',
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
                $("#kode").val(data['kode']);
                $("#nama").val(data['nama']);
                $("#tipe").val(data['tipe']);
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}