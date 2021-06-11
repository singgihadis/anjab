var data_dropdown_satuan_kerja = [];
$(document).ready(function(){
    get_opd_name();
    dropdown_satuan_kerja();
});
function dropdown_satuan_kerja(){
    $("#listdata_hasilkerja").loading();
    var nama = $("#keyword").val();
    $.ajax({
        type:'post',
        url:'/ajax/satuan_kerja',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata_hasilkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_hasilkerja").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                data_dropdown_satuan_kerja = res.data;
                hasil_kerja();
            }
        },error:function(){
            $("#listdata_hasilkerja").loading("stop");
            $("#listdata_hasilkerja").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function hasil_kerja(){
    $("#listdata_hasilkerja").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/hasil_kerja',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_hasilkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_hasilkerja").html("<tr><td colspan='4'>Data tidak tersedia</td></tr>");
                }
            }else{
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    var html_satuan = "";
                    html_satuan += "<select class='form-control form-control-sm'>";
                    html_satuan += "    <option value=''>Pilih Satuan</option>";
                    $.each(data_dropdown_satuan_kerja,function(k1,v1){
                        html_satuan += "    <option value='" + v1['id'] +  "' " + (v['master_satuan_kerja_id'] == v1['id']?"selected":"") + ">" + v1['nama']  +"</option>";
                    });
                    html_satuan += "</select>";

                    html += "<tr data-id='" + v['id'] + "'>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td><textarea class='form-control form-control-sm'>" + v['hasil_kerja'] + "</textarea></td>";
                    html += "<td class='nowrap'>";
                    html += html_satuan;
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata_hasilkerja").html(html);
            }
        },error:function(){
            $("#listdata_hasilkerja").loading("stop");
            $("#listdata_hasilkerja").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function simpan(){
    var param_arr = [];
    $("#listdata_hasilkerja tr").each(function(){
        var anjab_tugas_pokok_id = $(this).attr("data-id");
        var hasil_kerja = $(this).find("textarea").val();
        var master_satuan_kerja_id = $(this).find("select").val();
        param_arr.push({
            "anjab_tugas_pokok_id":anjab_tugas_pokok_id,
            "hasil_kerja":hasil_kerja,
            "master_satuan_kerja_id":master_satuan_kerja_id
        });
    });
    if(param_arr.length > 0){
        $("#listdata_hasilkerja").loading();
        var data = new FormData();
        var jabatan_id = $("#jabatan_id").val();
        data.append("jabatan_id", jabatan_id);
        data.append("param_json", JSON.stringify(param_arr));
        $.ajax({
            type:'post',
            url:'/ajax/anjab/hasil_kerja_update',
            data:data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false,
            success:function(resp){
                $("#listdata_hasilkerja").loading("stop");
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
                $("#listdata_hasilkerja").loading("stop");
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