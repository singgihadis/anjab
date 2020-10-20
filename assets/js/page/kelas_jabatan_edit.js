$(document).ready(function(){
    $("#batas_awal").keyup(function(){
        $("#batas_awal").val(FormatAngka($(this).val()));
    });
    $("#batas_akhir").keyup(function(){
        $("#batas_akhir").val(FormatAngka($(this).val()));
    });
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
            var kelas = $("#kelas").val();
            var batas_awal = StrToNumber($("#batas_awal").val());
            var batas_akhir = StrToNumber($("#batas_akhir").val());
            var data = new FormData();
            data.append("id", id);
            data.append("tahun", tahun);
            data.append("kelas", kelas);
            data.append("batas_awal", batas_awal);
            data.append("batas_akhir", batas_akhir);
            $.ajax({
                type:'post',
                url:'/ajax/kelas_jabatan/edit',
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
                            window.location = "/kelas_jabatan";
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
        url:'/ajax/kelas_jabatan/detail',
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
                $("#tahun").val(data['tahun']);
                $("#kelas").val(data['kelas']);
                $("#batas_awal").val(FormatAngka(data['batas_awal']));
                $("#batas_akhir").val(FormatAngka(data['batas_akhir']));
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}