var data_keterangan_waktu = [];
$(document).ready(function(){
    get_opd_name();
    keterangan_waktu();
});
function keterangan_waktu(){
    $("#listdata_abk").loading();
    $.ajax({
        type:'post',
        url:'/ajax/keterangan_waktu',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata_abk").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    $("#listdata_abk").html("<tr><td colspan='7'>" + res.msg + "</td></tr>");
                }
            }else{
                data_keterangan_waktu = res.data;
                abk();
            }
        },error:function(){
            $("#listdata_abk").loading("stop");
            $("#listdata_abk").html("<tr><td colspan='7'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function abk(){
    $("#listdata_abk").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/abk',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata_abk").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    $("#listdata_abk").html("<tr><td colspan='7'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var last_id = "";
                $.each(res.data,function(k,v){
                    if(last_id != v['id']){
                        last_id = v['id'];
                        html += "<tr>";
                        html += "<td colspan='7'><b>" + v['uraian'] + "</b></td>";
                        html += "</tr>";
                        $.each(res.data,function(k2,v2){
                            if(v['id'] == v2['anjab_tugas_pokok_id']){
                                html += "<tr class='tr_tahapan' data-tugas-pokok-tahapan-id='" + v2['id2'] + "'>";
                                html += "<td>" + v2['uraian_sub'] + "</td>";
                                html += "<td><input type='text' value='" + v2['hasil_kerja'] + "' class='form-control form-control-sm hasil_kerja' /></td>";
                                html += "<td><input type='text' value='" + FormatAngka(v2['jumlah_hasil'], true) + "' class='form-control form-control-sm jumlah_hasil' /></td>";
                                html += "<td><input type='text' value='" + FormatAngka(v2['waktu_penyelesaian'],true) + "' class='form-control form-control-sm waktu_penyelesaian' /></td>";
                                html += "<td>";
                                html += "<select class='form-control form-control-sm satuan_waktu'>";
                                html += "<option value='0' data-jml='0'>Pilih</option>";
                                $.each(data_keterangan_waktu,function(k3,v3){
                                    if(v2['master_keterangan_waktu_id'] == v3['id']){
                                        html += "<option value='" + v3['id'] + "' data-jml='" + v3['jml'] + "' selected>" + v3['nama'] + "</option>";
                                    }else{
                                        html += "<option value='" + v3['id'] + "' data-jml='" + v3['jml'] + "'>" + v3['nama'] + "</option>";
                                    }
                                });
                                html += "</select>";
                                html += "</td>";
                                html += "<td><input type='text' value='" + FormatAngka(v2['waktu_efektif'],true) + "' class='form-control form-control-sm waktu_efektif' readonly /></td>";
                                html += "<td><input type='text' value='" + round_decimal_places(v2['kebutuhan_pegawai'],4,true) + "' class='form-control form-control-sm kebutuhan_pegawai' readonly /></td>";
                                html += "</tr>";
                            }
                        });
                    }
                });
                $("#listdata_abk").html(html);
                total_kebutuhan_pegawai();
                $(".satuan_waktu").select2({
                    theme:"bootstrap",
                    width:'100px'
                });
                $(".satuan_waktu").change(function(){
                    var jml = $(this).find("option:selected").attr("data-jml");
                    $(this).parent().parent().find(".waktu_efektif").val(FormatAngka(jml));
                    var jumlah_hasil = StrToNumber($(this).parent().parent().find(".jumlah_hasil").val());
                    var waktu_penyelesaian = StrToNumber($(this).parent().parent().find(".waktu_penyelesaian").val());
                    var waktu_efektif = StrToNumber($(this).parent().parent().find(".waktu_efektif").val());
                    var kebutuhan_pegawai = 0.0;
                    if(waktu_efektif != 0){
                        kebutuhan_pegawai = (jumlah_hasil * waktu_penyelesaian) / waktu_efektif;
                    }
                    $(this).parent().parent().find(".kebutuhan_pegawai").val(round_decimal_places(kebutuhan_pegawai,4,true));
                    total_kebutuhan_pegawai();
                });
                $(".jumlah_hasil").keyup(function(){
                    var jumlah_hasil = StrToNumber($(this).parent().parent().find(".jumlah_hasil").val());
                    var waktu_penyelesaian = StrToNumber($(this).parent().parent().find(".waktu_penyelesaian").val());
                    var waktu_efektif = StrToNumber($(this).parent().parent().find(".waktu_efektif").val());
                    var kebutuhan_pegawai = 0.0;
                    if(waktu_efektif != 0){
                        kebutuhan_pegawai = (jumlah_hasil * waktu_penyelesaian) / waktu_efektif;
                    }
                    $(this).parent().parent().find(".kebutuhan_pegawai").val(round_decimal_places(kebutuhan_pegawai,4,true));
                    total_kebutuhan_pegawai();
                });
                $(".waktu_penyelesaian").keyup(function(){
                    var jumlah_hasil = StrToNumber($(this).parent().parent().find(".jumlah_hasil").val());
                    var waktu_penyelesaian = StrToNumber($(this).parent().parent().find(".waktu_penyelesaian").val());
                    var waktu_efektif = StrToNumber($(this).parent().parent().find(".waktu_efektif").val());
                    var kebutuhan_pegawai = 0.0;
                    if(waktu_efektif != 0){
                        kebutuhan_pegawai = (jumlah_hasil * waktu_penyelesaian) / waktu_efektif;
                    }
                    $(this).parent().parent().find(".kebutuhan_pegawai").val(round_decimal_places(kebutuhan_pegawai,4,true));
                    total_kebutuhan_pegawai();
                });
                $("#btn_update").click(function(){
                    update();
                });
            }
        },error:function(){
            $("#listdata_abk").loading("stop");
            $("#listdata_abk").html("<tr><td colspan='7'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function total_kebutuhan_pegawai(){
    var total = 0.0;
    $(".tr_tahapan").each(function(k,v){
        var kebutuhan_pegawai = parseFloat($(this).find(".kebutuhan_pegawai").val());
        total = total + kebutuhan_pegawai;
    });
    $("#total_kebutuhan_pegawai").html(round_decimal_places(total,4,true));
    $("#total_kebutuhan_pegawai_pembulatan").html(total.toFixed(0));
}
function update(){
    $("#listdata_abk").loading();
    var jabatan_id = $("#jabatan_id").val();
    var json = [];
    $(".tr_tahapan").each(function(k,v){
        var tugas_pokok_tahapan_id = $(this).attr("data-tugas-pokok-tahapan-id");
        var hasil_kerja = $(this).find(".hasil_kerja").val();
        var jumlah_hasil = StrToNumber($(this).find(".jumlah_hasil").val());
        var waktu_penyelesaian = StrToNumber($(this).find(".waktu_penyelesaian").val());
        var satuan_waktu = StrToNumber($(this).find(".satuan_waktu").val());
        var waktu_efektif = StrToNumber($(this).find(".waktu_efektif").val());
        var kebutuhan_pegawai = $(this).find(".kebutuhan_pegawai").val();
        json.push({
            jabatan_id:jabatan_id,
            anjab_tugas_pokok_tahapan_id:tugas_pokok_tahapan_id,
            hasil_kerja:hasil_kerja,
            jumlah_hasil:jumlah_hasil,
            waktu_penyelesaian:waktu_penyelesaian,
            master_keterangan_waktu_id:satuan_waktu,
            waktu_efektif:waktu_efektif,
            kebutuhan_pegawai:kebutuhan_pegawai
        });
    });

    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("json", JSON.stringify(json));
    $.ajax({
        type:'post',
        url:'/ajax/anjab/abk_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#listdata_abk").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
            }
        },error:function(){
            $("#listdata_abk").loading("stop");
            toastr["error"]("Gagal tambah data, coba lagi nanti");
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
                    window.location = "/logout";
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