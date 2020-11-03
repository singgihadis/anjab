$(document).ready(function(){
    var cur_year = new Date().getFullYear();
    var html_tahun = "";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        if(cur_year == i){
            html_tahun += "<option selected value='"  + i + "'>" + i + "</option>";
        }else{
            html_tahun += "<option value='"  + i + "'>" + i + "</option>";
        }
    }
    $("#tahun").html(html_tahun);
    dropdown_opd();
    $("#form_print").validate({
        submitHandler:function(){
            var opd = $("#opd").val();
            var jenis_laporan = $("#jenis_laporan").val();
            var tahun = $("#tahun").val();
            window.open("/rekapitulasi/printdata/" + jenis_laporan + "/" + tahun + "/" + opd,"_blank");
        }
    });
});
function dropdown_opd(){
    $("#opd").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/opd',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#opd").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#opd").html(html);
                $("#opd").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#opd").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}