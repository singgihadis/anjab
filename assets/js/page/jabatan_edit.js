var nama_jabatan_atasan = "";
var is_opd_utama = "";
$(document).ready(function(){
    var cur_year = new Date().getFullYear();
    var html_tahun = "<option value=''>Pilih Tahun</option>";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        html_tahun += "<option value='"  + i + "'>" + i + "</option>";
    }
    $("#tahun").html(html_tahun);
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var jabatan_id = $("#jabatan_id").val();
            var jabatan_id_is_bawahannya = $("#jabatan_id option:selected").attr("data-is-bawahannya");
            var tahun = $("#tahun").val();
            var opd = $("#opd").val();
            var kode = $("#kode").val();
            var nama = $("#nama").val();
            var unit = $("#unit").val();
            var jenis_jabatan = $("#jenis_jabatan").val();
            var eselon = $("#eselon").val();
            var golongan = $("#golongan").val();
            var urusan_pemerintahan = $("#urusan_pemerintahan").val();
            var data = new FormData();
            data.append("id", id);
            data.append("jabatan_id", jabatan_id);
            data.append("jabatan_id_is_bawahannya", jabatan_id_is_bawahannya);
            data.append("tahun", tahun);
            data.append("master_opd_id", opd);
            data.append("kode", kode);
            data.append("nama", nama);
            data.append("unit", unit);
            data.append("master_jenis_jabatan_id", jenis_jabatan);
            data.append("master_eselon_id", eselon);
            data.append("master_golongan_id", golongan);
            data.append("master_urusan_pemerintahan_ids", urusan_pemerintahan);
            $.ajax({
                type:'post',
                url:'/ajax/jabatan/edit',
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
                        jml_pegawai_update();
                    }
                },error:function(){
                    $("#form_update").loading("stop");
                    toastr["error"]("Gagal edit data, coba lagi nanti");
                }
            });
        }
    });
});
function jml_pegawai_update(){
    $("#form_update").loading();
    var data = new FormData();
    var input_array = [];
    var jabatan_id = $("#id").val();
    $(".jml_pegawai").each(function(k,v){
        var child_input_array = [];
        child_input_array.push(jabatan_id);
        child_input_array.push($(this).attr("data-master-status-pegawai-id"));
        child_input_array.push($(this).val());
        input_array.push(child_input_array);
    });
    var jml_pegawai = $("#jml_pegawai").val();
    data.append("input_array", JSON.stringify(input_array));
    data.append("jml_pegawai", jml_pegawai);
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/jabatan/jml_pegawai_update',
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
                window.location = "/jabatan";
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function load_data(){
    $("#form_update").loading();
    var id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan/detail',
        data:{id:id},
        success:function(resp){
            $("#form_update").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#tahun").val(data['tahun']);
                $("#kode").val(data['kode']);
                $("#nama").val(data['nama']);
                $("#unit").val(data['unit']);
                $("#opd").val(data['master_opd_id']);
                $("#jml_pegawai").val(data['jml_pegawai']);
                jml_pegawai();
                dropdown_opd(data['master_opd_id'],data['jabatan_id']);
                dropdown_jenis_jabatan(data['master_jenis_jabatan_id']);
                dropdown_eselon(data['master_eselon_id']);
                dropdown_golongan(data['master_golongan_id']);
                dropdown_urusan_pemerintahan(data['master_urusan_pemerintahan_ids']);
            }
        },error:function(){
            $("#form_update").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function dropdown_urusan_pemerintahan(ids){
    $("#urusan_pemerintahan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/urusan_pemerintahan',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    $("#urusan_pemerintahan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var arr_ids = ids.split(",");
                var html = "";
                $.each(res.data,function(k,v){
                    if(arr_ids.length > 0){
                        $.each(arr_ids,function(k2,v2){
                            if(v2 == v['id']){
                                html += "<option value='"  + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                            }else{
                                html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                            }
                        });
                    }else{
                        html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#urusan_pemerintahan").html(html);
                $("#urusan_pemerintahan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#golongan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_golongan(id){
    $("#golongan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/golongan',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#golongan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Golongan</option>";
                $.each(res.data,function(k,v){
                    if(id == v['id']){
                        html += "<option value='"  + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#golongan").html(html);
                $("#golongan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#golongan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_eselon(id){
    $("#eselon").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/eselon',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#eselon").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Eselon</option>";
                $.each(res.data,function(k,v){
                    if(id == v['id']){
                        html += "<option value='"  + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                    }

                });
                $("#eselon").html(html);
                $("#eselon").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#eselon").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_jenis_jabatan(id){
    $("#jenis_jabatan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#jenis_jabatan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Jenis Jabatan</option>";
                $.each(res.data,function(k,v){
                    if(id == v['id']){
                        html += "<option value='"  + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#jenis_jabatan").html(html);
                $("#jenis_jabatan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#jenis_jabatan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_opd(id,jabatan_id){
    $("#opd_nama").val("Memuat Data ...");
    $("#opd_id").val(id);
    $.ajax({
        type:'post',
        url:'/ajax/opd',
        data:{page:"x",nama:"",is_tambah:"1"},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#opd_nama").val("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var nama_opd = "";
                $.each(res.data,function(k,v){
                    if(v['is_opd_utama'] == "1"){
                        nama_jabatan_atasan = v['nama_jabatan'];
                    }
                    if(id == v['id']){
                        nama_opd = v['nama'];
                        is_opd_utama = v['is_opd_utama'];
                        if(v['is_opd_utama'] == "1"){
                            nama_jabatan_atasan = "";
                        }
                    }
                });
                $("#opd_nama").val(nama_opd);
                $("#opd_id").val(id);
                dropdown_jabatan(jabatan_id);
            }
        },error:function(){
            $("#opd_nama").val("");
            $("#opd_id").val(id);
        }
    });
}
function dropdown_jabatan(jabatan_id){
    var level = $("#level").val();
    var tahun = $("#tahun").val();
    var opd = $("#opd").val();
    var id = $("#id").val();
    $("#jabatan_nama").val("Memuat Data ...");
    //if(tahun != "" && opd != ""){
        $.ajax({
            type:'post',
            url:'/ajax/jabatan',
            data:{page:"x",nama:"",master_opd_id:opd,tahun:tahun,master_jenis_jabatan:"2,3,4",max_tingkat:6},
            success:function(resp){
                $("#listdata").loading("stop");
                var res = JSON.parse(resp);
                if(res.is_error){
                    if(res.must_login){
                        window.location = "/logout";
                    }else{
                        if(is_opd_utama != "1"){
                            $("#jabatan_id").html("<option value=''>" + nama_jabatan_atasan + "</option>");
                        }else{
                            $("#jabatan_id").html("<option value=''></option>");
                        }
                    }
                }else{
                    var html = "";
                    if(is_opd_utama != "1"){
                        html = "<option value=''>" + nama_jabatan_atasan + "</option>";
                    }else{
                        html = "<option value=''>&nbsp;</option>";
                    }
                    var bawahannya_match = [id];
                    $.each(res.data,function(k,v){
                        if(v['tingkat'] == 0){
                            var is_bawahannya = "0";
                            if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                is_bawahannya = "1";
                                bawahannya_match.push(v['id']);
                            }
                            if(id != v['id']){
                                if(jabatan_id == v['id']){
                                    if(is_bawahannya == "0"){
                                        html += "<option value='" + v['id'] + "' selected='selected'>-" + v['nama'] + "</option>";
                                    }
                                }else{
                                    if(is_bawahannya == "0"){
                                        html += "<option value='" + v['id'] + "'>-" + v['nama'] + "</option>";
                                    }
                                }
                            }else{
                                html += "<option disabled='disabled' value='" + v['id'] + "'>-" + v['nama'] + "</option>";
                            }
                            var jabatan_id_0 = v['id'];
                            $.each(res.data,function(k,v){
                                if(v['tingkat'] == 1 && jabatan_id_0 == v['jabatan_id']){
                                    var is_bawahannya = "0";
                                    if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                        is_bawahannya = "1";
                                        bawahannya_match.push(v['id']);
                                    }
                                    if(id != v['id']){
                                        if(jabatan_id == v['id']){
                                            if(is_bawahannya == "0"){
                                                html += "<option value='" + v['id'] + "' selected='selected'>--" + v['nama'] + "</option>";
                                            }

                                        }else{
                                            if(is_bawahannya == "0"){
                                                html += "<option value='" + v['id'] + "'>--" + v['nama'] + "</option>";
                                            }

                                        }
                                    }else{
                                        html += "<option disabled='disabled' value='" + v['id'] + "'>--" + v['nama'] + "</option>";
                                    }
                                    var jabatan_id_1 = v['id'];
                                    $.each(res.data,function(k,v){
                                        if(v['tingkat'] == 2 && jabatan_id_1 == v['jabatan_id']){
                                            var is_bawahannya = "0";
                                            if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                                is_bawahannya = "1";
                                                bawahannya_match.push(v['id']);
                                            }
                                            if(id != v['id']){
                                                if(jabatan_id == v['id']){
                                                    if(is_bawahannya == "0"){
                                                        html += "<option value='" + v['id'] + "' selected='selected'>---" + v['nama'] + "</option>";
                                                    }

                                                }else{
                                                    if(is_bawahannya == "0"){
                                                        html += "<option value='" + v['id'] + "'>---" + v['nama'] + "</option>";
                                                    }

                                                }
                                            }else{
                                                html += "<option disabled='disabled' value='" + v['id'] + "'>---" + v['nama'] + "</option>";
                                            }
                                            var jabatan_id_2 = v['id'];
                                            $.each(res.data,function(k,v){
                                                if(v['tingkat'] == 3 && jabatan_id_2 == v['jabatan_id']){
                                                    var is_bawahannya = "0";
                                                    if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                                        is_bawahannya = "1";
                                                        bawahannya_match.push(v['id']);
                                                    }
                                                    if(id != v['id']){
                                                        if(jabatan_id == v['id']){
                                                            if(is_bawahannya == "0"){
                                                                html += "<option value='" + v['id'] + "' selected='selected'>----" + v['nama'] + "</option>";
                                                            }

                                                        }else{
                                                            if(is_bawahannya == "0"){
                                                                html += "<option value='" + v['id'] + "'>----" + v['nama'] + "</option>";
                                                            }

                                                        }
                                                    }else{
                                                        html += "<option disabled='disabled' value='" + v['id'] + "'>----" + v['nama'] + "</option>";
                                                    }
                                                    var jabatan_id_3 = v['id'];
                                                    $.each(res.data,function(k,v){
                                                        if(v['tingkat'] == 4 && jabatan_id_3 == v['jabatan_id']){
                                                            var is_bawahannya = "0";
                                                            if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                                                is_bawahannya = "1";
                                                                bawahannya_match.push(v['id']);
                                                            }
                                                            if(id != v['id']){
                                                                if(jabatan_id == v['id']){
                                                                    if(is_bawahannya == "0"){
                                                                        html += "<option value='" + v['id'] + "' selected='selected'>-----" + v['nama'] + "</option>";
                                                                    }

                                                                }else{
                                                                    if(is_bawahannya == "0"){
                                                                        html += "<option value='" + v['id'] + "'>-----" + v['nama'] + "</option>";
                                                                    }

                                                                }
                                                            }else{
                                                                html += "<option disabled='disabled' value='" + v['id'] + "'>-----" + v['nama'] + "</option>";
                                                            }
                                                            var jabatan_id_4 = v['id'];
                                                            $.each(res.data,function(k,v){
                                                                if(v['tingkat'] == 5 && jabatan_id_4 == v['jabatan_id']){
                                                                    var is_bawahannya = "0";
                                                                    if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                                                        is_bawahannya = "1";
                                                                        bawahannya_match.push(v['id']);
                                                                    }
                                                                    if(id != v['id']){
                                                                        if(jabatan_id == v['id']){
                                                                            if(is_bawahannya == "0"){
                                                                                html += "<option value='" + v['id'] + "' selected='selected'>------" + v['nama'] + "</option>";
                                                                            }

                                                                        }else{
                                                                            if(is_bawahannya == "0"){
                                                                                html += "<option value='" + v['id'] + "'>------" + v['nama'] + "</option>";
                                                                            }

                                                                        }
                                                                    }else{
                                                                        html += "<option disabled='disabled' value='" + v['id'] + "'>------" + v['nama'] + "</option>";
                                                                    }
                                                                    var jabatan_id_5 = v['id'];
                                                                    $.each(res.data,function(k,v){
                                                                        if(v['tingkat'] == 6 && jabatan_id_5 == v['jabatan_id']){
                                                                            var is_bawahannya = "0";
                                                                            if($.inArray(v['jabatan_id'],bawahannya_match) != -1){
                                                                                is_bawahannya = "1";
                                                                                bawahannya_match.push(v['id']);
                                                                            }
                                                                            if(id != v['id']){
                                                                                if(jabatan_id == v['id']){
                                                                                    if(is_bawahannya == "0"){
                                                                                        html += "<option value='" + v['id'] + "' selected='selected'>-------" + v['nama'] + "</option>";
                                                                                    }

                                                                                }else{
                                                                                    if(is_bawahannya == "0"){
                                                                                        html += "<option value='" + v['id'] + "'>-------" + v['nama'] + "</option>";
                                                                                    }

                                                                                }
                                                                            }else{
                                                                                html += "<option disabled='disabled' value='" + v['id'] + "'>-------" + v['nama'] + "</option>";
                                                                            }
                                                                        }
                                                                    });
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    $("#jabatan_id").html(html);
                    $("#jabatan_id").select2({
                        theme: "bootstrap"
                    });
                    $("#jabatan_id").val(jabatan_id);

                }
            },error:function(){
                $("#jabatan_id").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
            }
        });
    //}
}
function jml_pegawai(){
    $("#div_jml_pegawai").loading();
    var jabatan_id = $("#id").val();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan/jml_pegawai',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#div_jml_pegawai").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    html += "<div class='form-group'>";
                    html += "<label>" + v['nama'] + "</label>";
                    html += "<input type='text' class='form-control jml_pegawai' data-master-status-pegawai-id='" + v['master_status_pegawai_id'] + "' id='master_status_pegawai_id_" + v['id'] + "' name='master_status_pegawai_id_" + v['id'] + "' value='" + v['jml'] + "'>";
                    html += "</div>";
                });
                $("#div_jml_pegawai").html(html);
                $(".jml_pegawai").keyup(function(){
                    $(this).val(FormatAngka($(this).val()));
                    hitung_jml_pegawai();
                });
            }
        },error:function(){
            $("#div_jml_pegawai").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function hitung_jml_pegawai(){
    var jml_pegawai = 0;
    $(".jml_pegawai").each(function(k,v){
        var jml = StrToNumber($(this).val());
        jml_pegawai = jml_pegawai + jml;
    });
    $("#jml_pegawai").val(FormatAngka(jml_pegawai));
}