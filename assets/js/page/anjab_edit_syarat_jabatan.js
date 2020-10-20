$(document).ready(function(){
    get_opd_name();
    anjab();
});
function anjab(){
    syarat_jabatan_keterampilan_kerja_kelengkapan();
}
function syarat_jabatan_keterampilan_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_keterampilan_kerja_kelengkapan',
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
                syarat_jabatan_bakat_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_bakat_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_bakat_kerja_kelengkapan',
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
                syarat_jabatan_temperamen_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_temperamen_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_temperamen_kerja_kelengkapan',
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
                syarat_jabatan_minat_kerja_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_minat_kerja_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_minat_kerja_kelengkapan',
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
                syarat_jabatan_upaya_fisik_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_upaya_fisik_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_upaya_fisik_kelengkapan',
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
                syarat_jabatan_kondisi_fisik_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_kondisi_fisik_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_kondisi_fisik_kelengkapan',
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
                syarat_jabatan_fungsi_pekerjaan_kelengkapan();
            }
        },error:function(){
        }
    });
}
function syarat_jabatan_fungsi_pekerjaan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_fungsi_pekerjaan_kelengkapan',
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
            }
        },error:function(){
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
            }
        },error:function(){
        }
    });
}