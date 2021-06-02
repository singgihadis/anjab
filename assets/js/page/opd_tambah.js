$(document).ready(function(){
    $("#is_opd_utama").change(function(){
        $("#jenis_jabatan").val("");
        if($(this).val() == "1"){
            $("#fg_jenis_jabatan").show();
            $("#fg_nama_jabatan").show();
        }else{
            $("#fg_jenis_jabatan").hide();
            $("#fg_nama_jabatan").hide();
        }
    });
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var nama = $("#nama").val();
            var is_opd_utama = $("#is_opd_utama").val();
            var jenis_jabatan = $("#jenis_jabatan").val();
            var nama_jabatan = $("#nama_jabatan").val();
            var data = new FormData();
            data.append("nama", nama);
            data.append("is_opd_utama", is_opd_utama);
            data.append("jenis_jabatan", jenis_jabatan);
            data.append("nama_jabatan", nama_jabatan);
            $.ajax({
                type:'post',
                url:'/ajax/opd/tambah',
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
                        window.location = "/opd"
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
                }
            });
        }
    });
});