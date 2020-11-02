$(document).ready(function(){
    $("#level").keyup(function(){
        $("#level").val(FormatAngka($(this).val()));
    });
    $(".summernote").summernote({
        placeholder: 'Isi indikator kompetensi',
        tabsize: 2,
        height: 200
    });
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var master_kamus_kompetensi_skj_id = $("#master_kamus_kompetensi_skj_id").val();
            var level = StrToNumber($("#level").val());
            var indikator_kompetensi = $(".summernote").summernote("code");
            var deskripsi = $("#deskripsi").val();
            var data = new FormData();
            data.append("master_kamus_kompetensi_skj_id", master_kamus_kompetensi_skj_id);
            data.append("level", level);
            data.append("deskripsi", deskripsi);
            data.append("indikator_kompetensi", indikator_kompetensi);
            $.ajax({
                type:'post',
                url:'/ajax/kamus_kompetensi_skj/level/tambah',
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
                            window.location = "/kamus_kompetensi_skj/level/" + master_kamus_kompetensi_skj_id;
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