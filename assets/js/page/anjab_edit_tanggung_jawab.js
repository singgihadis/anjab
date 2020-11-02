$(document).ready(function(){
    get_opd_name();
    tanggung_jawab();
});

function tanggung_jawab(){
    $("#listdata_tanggungjawab").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/tanggung_jawab',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_tanggungjawab").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_tanggung_jawab").html("<tr><td colspan='3'>Data tidak tersedia</td></tr>");
                }
            }else{
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr data-id='" + v['id'] + "'>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td><textarea class='form-control form-control-sm'>" + v['tanggung_jawab'] + "</textarea></td>";
                    html += "</tr>";
                    console.log(html);
                });
                $("#listdata_tanggungjawab").html(html);
            }
        },error:function(){
            $("#listdata_tanggungjawab").loading("stop");
            $("#listdata_tanggungjawab").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function simpan(){
    var param_arr = [];
    $("#listdata_tanggungjawab tr").each(function(){
        var anjab_tugas_pokok_id = $(this).attr("data-id");
        var tanggung_jawab = $(this).find("textarea").val();
        param_arr.push({
            "anjab_tugas_pokok_id":anjab_tugas_pokok_id,
            "tanggung_jawab":tanggung_jawab
        });
    });
    if(param_arr.length > 0){
        $("#listdata_tanggung_jawab").loading();
        var data = new FormData();
        var jabatan_id = $("#jabatan_id").val();
        data.append("jabatan_id", jabatan_id);
        data.append("param_json", JSON.stringify(param_arr));
        $.ajax({
            type:'post',
            url:'/ajax/anjab/tanggung_jawab_update',
            data:data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            success:function(resp){
                $("#listdata_tanggungjawab").loading("stop");
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
                $("#listdata_tanggungjawab").loading("stop");
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