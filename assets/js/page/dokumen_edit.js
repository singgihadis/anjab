$(document).ready(function(){
    load_data();
    $("#dokumen").change(function(e){
        var fileName = e. target. files[0]. name;
        $("label[for='dokumen']").html(fileName);
    });
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var nama = $("#nama").val();
            var is_tampil = "";
            if($("#tampil_ya").is(":checked")){
                is_tampil = "1";
            }else{
                is_tampil = "0";
            }
            var data = new FormData();
            data.append("id", id);
            data.append("nama", nama);
            data.append("is_tampil", is_tampil);
            if($("#dokumen").val() != ""){
                data.append("dokumen", $("#dokumen")[0].files[0]);
            }else{
                data.append("dokumen", "");
            }
            $.ajax({
                type:'post',
                url:'/ajax/dokumen/edit',
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
                        window.location = "/dokumen"
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
        url:'/ajax/dokumen/detail',
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
                if(data['is_tampil'] == "1"){
                    $("#tampil_ya").prop("checked",true);
                }else{
                    $("#tampil_tidak").prop("checked",false);
                }
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}