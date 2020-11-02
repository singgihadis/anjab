$(document).ready(function(){
    $("#level").keyup(function(){
        $("#level").val(FormatAngka($(this).val()));
    });
    $("#nilai").keyup(function(){
        $("#nilai").val(FormatAngka($(this).val()));
    });
    $(".summernote").summernote({
        placeholder: 'Isi ruang lingkup / uraian',
        tabsize: 2,
        height: 200
    });
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var master_faktor_evjab_id = $("#master_faktor_evjab_id").val();
            var id = $("#id").val();
            var level = StrToNumber($("#level").val());
            var nilai = StrToNumber($("#nilai").val());
            var uraian = $(".summernote").summernote("code");
            var dampak = $("#dampak").val();
            var data = new FormData();
            data.append("master_faktor_evjab_id", master_faktor_evjab_id);
            data.append("id", id);
            data.append("level", level);
            data.append("nilai", nilai);
            data.append("uraian", uraian);
            data.append("dampak", dampak);
            $.ajax({
                type:'post',
                url:'/ajax/faktor_evjab/level/edit/' + id,
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
                            window.location = "/faktor_evjab/level/" + master_faktor_evjab_id;
                        },1000);
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal tambah data, coba lagi nanti");
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
        url:'/ajax/faktor_evjab/level/detail',
        data:{id:id},
        success:function(resp){
            $("#form_update").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#level").val(FormatAngka(data['level']));
                $("#nilai").val(FormatAngka(data['nilai']));
                $(".summernote").summernote("code",data['uraian']);
                $("#dampak").val(data['dampak']);
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}