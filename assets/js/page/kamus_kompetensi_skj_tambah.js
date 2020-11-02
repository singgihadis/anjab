$(document).ready(function(){
    dropdown_standar_kompetensi();
    dropdown_urusan_pemerintahan();
    $("#standar_kompetensi").change(function(){
        $("#standar_kompetensi").valid();
    });
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var standar_kompetensi = $("#standar_kompetensi").val();
            var standar_kompetensi_tipe = $("#standar_kompetensi").find("option:selected").attr("tipe");
            var kode = $("#kode").val();
            var nama = $("#nama").val();
            var uraian = $("#uraian").val();
            var urusan_pemerintahan = $("#urusan_pemerintahan").val();
            var data = new FormData();
            data.append("master_standar_kompetensi_id", standar_kompetensi);
            data.append("master_standar_kompetensi_tipe", standar_kompetensi_tipe);
            data.append("kode", kode);
            data.append("nama", nama);
            data.append("uraian", uraian);
            data.append("master_urusan_pemerintahan_id", urusan_pemerintahan);
            $.ajax({
                type:'post',
                url:'/ajax/kamus_kompetensi_skj/tambah',
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
                            window.location = "/kamus_kompetensi_skj"
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
function dropdown_standar_kompetensi(){
    $("#standar_kompetensi").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/standar_kompetensi',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#standar_kompetensi").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Standar Kompetensi</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "' tipe='" + v['tipe'] + "'>" + v['nama'] + "</option>";
                });
                $("#standar_kompetensi").html(html);
                $("#standar_kompetensi").select2({
                    theme: "bootstrap"
                });
                $("#standar_kompetensi").change(function(){
                    if($(this).find("option:selected").attr("tipe") == "2"){
                        $("#div_urusan_pemerintahan").show();
                    }else{
                        $("#div_urusan_pemerintahan").hide();
                    }
                });
            }
        },error:function(){
            $("#standar_kompetensi").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_urusan_pemerintahan(){
    $("#urusan_pemerintahan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/urusan_pemerintahan',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#urusan_pemerintahan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Urusan Pemerintahan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#urusan_pemerintahan").html(html);
                $("#urusan_pemerintahan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#urusan_pemerintahan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}