$(document).ready(function(){
    var cur_year = new Date().getFullYear();
    var html_tahun = "<option value=''>Pilih Tahun</option>";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        if(i == cur_year){
            html_tahun += "<option value='"  + i + "' selected='selected'>" + i + "</option>";
        }else {
            html_tahun += "<option value='" + i + "'>" + i + "</option>";
        }
    }
    $("#tahun").html(html_tahun);
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var tahun = $("#tahun").val()
            var kode = $("#kode").val();
            var uraian = $("#uraian").val();
            var tipe = $("#tipe").val();
            var grup = $("#grup").val();
            var data = new FormData();
            data.append("id", id);
            data.append("tahun", tahun);
            data.append("kode", kode);
            data.append("uraian", uraian);
            data.append("tipe", tipe);
            data.append("grup", grup);
            $.ajax({
                type:'post',
                url:'/ajax/faktor_evjab/edit',
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
                            window.location = "/faktor_evjab";
                        },1000);
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
        url:'/ajax/faktor_evjab/detail',
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
                $("#tahun").val(data['tahun']);
                $("#kode").val(data['kode']);
                $("#uraian").val(data['uraian']);
                $("#tipe").val(data['tipe']);
                $("#grup").val(data['grup']);
        }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}