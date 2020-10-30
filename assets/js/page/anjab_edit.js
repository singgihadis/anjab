$(document).ready(function(){
    get_opd_name();
    anjab();
    $("#form_verifikasi").validate({
       submitHandler:function(){
           verifikasi();
       }
    });
});
function modal_verifikasi(){
    $("#modal_verifikasi").modal("show");
}
function anjab(){
    ikhtisiar_kelengkapan();
}
function ikhtisiar_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/ikhtisiar_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(1) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(1) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                kualifikasi_jabatan_kelengkapan();
            }
        },error:function(){
        }
    });
}
function kualifikasi_jabatan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(2) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(2) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                tugas_pokok_kelengkapan();
            }
        },error:function(){
        }
    });
}
function tugas_pokok_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tugas_pokok_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(3) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(3) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                hasil_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function hasil_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/hasil_kerja_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(4) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(4) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                bahan_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function bahan_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/bahan_kerja_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(5) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(5) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                perangkat_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function perangkat_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/perangkat_kerja_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(6) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(6) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                tanggung_jawab_kelengkapan();
            }
        },error:function(){
        }
    });
}
function tanggung_jawab_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tanggung_jawab_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(7) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(7) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                wewenang_kelengkapan();
            }
        },error:function(){
        }
    });
}
function wewenang_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/wewenang_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(8) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(8) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                korelasi_kelengkapan();
            }
        },error:function(){
        }
    });
}
function korelasi_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/korelasi_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(9) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(9) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                kondisi_lingkungan_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function kondisi_lingkungan_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kondisi_lingkungan_kerja_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(10) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(10) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                resiko_bahaya_kelengkapan();
            }
        },error:function(){
        }
    });
}
function resiko_bahaya_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/resiko_bahaya_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(11) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(11) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                syarat_jabatan_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(12) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(12) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");
                prestasi_kerja_diharapkan_kelengkapan();
            }
        },error:function(){
        }
    });
}

function prestasi_kerja_diharapkan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/prestasi_kerja_diharapkan_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_anjab tr:nth-child(13) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(13) td:nth-child(3)").html(round_decimal_places(res.persentase,2,false) + "%");

            }
        },error:function(){
        }
    });
}
function verifikasi(){
    $("#form_verifikasi").loading();
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    var verifikasi = $("#verifikasi").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun,verifikasi:verifikasi},
        success:function(resp){
            $("#form_verifikasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                $("#modal_verifikasi").modal("hide");
                $("#btn_verifikasi").remove();
            }
        },error:function(){
            $("#form_verifikasi").loading("stop");
            toastr["error"]("Gagal melakukan verifikasi, coba lagi nanti");
        }
    });
}
function get_opd_name(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/get_opd_name',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                }
            }else{
                $("#opd_name").html(toTitleCase(res.data[0]['nama']) + " (" + res.data[0]['tahun'] + ")");
                $("#nama_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#mdl_opd").html(toTitleCase(res.data[0]['nama']));
                $("#mdl_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#mdl_tahun").html(res.data[0]['tahun']);
                $("#tahun").val(res.data[0]['tahun']);

               is_verifikasi();
            }
        },error:function(){
        }
    });
}
function is_verifikasi(){
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/is_verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#btn_verifikasi").show();
                }
            }else{
                if(res.data[0]['verifikasi'] != "0"){
                    $("#btn_verifikasi").remove();
                }else{
                    $("#btn_verifikasi").show();
                }
            }
        },error:function(){
        }
    });
}