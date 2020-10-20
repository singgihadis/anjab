$(document).ready(function(){
    get_opd_name(function(){

    });
});
function get_opd_name(callback){
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
                $("#tahun").val(res.data[0]['tahun']);

                $("#nama_jabatan_cap").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#kode_jabatan_cap").html(res.data[0]['kode_jabatan']);
                $("#tahun_cap").html(res.data[0]['tahun']);
                jenis_jabatan(res.data[0]['master_jenis_jabatan_id']);
                urusan_pemerintahan(res.data[0]['master_jenis_jabatan_id']);
                callback();
            }
        },error:function(){
        }
    });
}
function jenis_jabatan(id){
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan/detail',
        data:{id:id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#jenis_jabatan_cap").html(data['nama']);
            }
        },error:function(){
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function urusan_pemerintahan(ids){
    $.ajax({
        type:'post',
        url:'/ajax/urusan_pemerintahan/nama_list',
        data:{ids:ids},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#jenis_jabatan_cap").html(data['nama']);
            }
        },error:function(){
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}