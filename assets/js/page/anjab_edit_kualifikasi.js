$(document).ready(function(){
    get_opd_name();
    kualifikasi_jabatan_pendidikan_kelengkapan();
    kualifikasi_jabatan_pelatihan_kelengkapan();
    kualifikasi_jabatan_pengalaman_kelengkapan();
});
function kualifikasi_jabatan_pendidikan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pendidikan_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_anjab tr:nth-child(1) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(1) td:nth-child(3)").html(res.persentase + "%");
            }
        },error:function(){
        }
    });
}
function kualifikasi_jabatan_pelatihan_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pelatihan_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_anjab tr:nth-child(2) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(2) td:nth-child(3)").html(res.persentase + "%");
            }
        },error:function(){
        }
    });
}
function kualifikasi_jabatan_pengalaman_kelengkapan(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pengalaman_kelengkapan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_anjab tr:nth-child(3) td:nth-child(3)").html("0%");
                }
            }else{
                $("#listdata_anjab tr:nth-child(3) td:nth-child(3)").html(res.persentase + "%");
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
                    window.location = "/logout";;
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