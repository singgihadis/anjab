$(document).ready(function(){
    get_opd_name();
    wewenang();
});

function wewenang(){
    $("#listdata_kondisilingkungankerja").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kondisi_lingkungan_kerja',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_kondisilingkungankerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_kondisilingkungankerja").html("<tr><td colspan='3'>Data tidak tersedia</td></tr>");
                }
            }else{
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr data-id='" + v['id'] + "'>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td><textarea class='form-control form-control-sm'>" + v['faktor'] + "</textarea></td>";
                    html += "</tr>";
                });
                $("#listdata_kondisilingkungankerja").html(html);
            }
        },error:function(){
            $("#listdata_kondisilingkungankerja").loading("stop");
            $("#listdata_kondisilingkungankerja").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function simpan(){
    var param_arr = [];
    $("#listdata_kondisilingkungankerja tr").each(function(){
        var master_kondisi_lingkungan_kerja_id = $(this).attr("data-id");
        var faktor = $(this).find("textarea").val();
        param_arr.push({
            "master_kondisi_lingkungan_kerja_id":master_kondisi_lingkungan_kerja_id,
            "faktor":faktor
        });
    });
    if(param_arr.length > 0){
        $("#listdata_kondisilingkungankerja").loading();
        var data = new FormData();
        var jabatan_id = $("#jabatan_id").val();
        data.append("jabatan_id", jabatan_id);
        data.append("param_json", JSON.stringify(param_arr));
        $.ajax({
            type:'post',
            url:'/ajax/anjab/kondisi_lingkungan_kerja_update',
            data:data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            success:function(resp){
                $("#listdata_kondisilingkungankerja").loading("stop");
                var res = JSON.parse(resp);
                if(res.is_error){
                    if(res.must_login){
                        window.location = "/logout";;
                    }else{
                        toastr["error"](res.msg);
                    }
                }else{
                    toastr["success"](res.msg);
                }
            },error:function(){
                $("#listdata_kondisilingkungankerja").loading("stop");
                toastr["error"]("Gagal update data, coba lagi nanti");
            }
        });
    }
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