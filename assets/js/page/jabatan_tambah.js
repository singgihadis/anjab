$(document).ready(function(){
    var cur_year = new Date().getFullYear();
    var html_tahun = "<option value=''>Pilih Tahun</option>";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        html_tahun += "<option value='"  + i + "'>" + i + "</option>";
    }
    $("#tahun").html(html_tahun);
    dropdown_opd();
    dropdown_jenis_jabatan();
    dropdown_eselon();
    dropdown_golongan();
    dropdown_urusan_pemerintahan();
    $("#blud").keyup(function(){
        $("#blud").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#pppk").keyup(function(){
        $("#pppk").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#kontrak").keyup(function(){
        $("#kontrak").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#pns").keyup(function(){
        $("#pns").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#phd").keyup(function(){
        $("#phd").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#outsourcing").keyup(function(){
        $("#outsourcing").val(FormatAngka($(this).val()));
        hitung_jml_pegawai();
    });
    $("#form_update").validate({
       submitHandler:function(){
           $("#form_update").loading();
           var tahun = $("#tahun").val();
           var opd = $("#opd").val();
           var jabatan_id = $("#jabatan_id").val();
           var kode = $("#kode").val();
           var nama = $("#nama").val();
           var unit = $("#unit").val();
           var jenis_jabatan = $("#jenis_jabatan").val();
           var eselon = $("#eselon").val();
           var golongan = $("#golongan").val();
           var urusan_pemerintahan = $("#urusan_pemerintahan").val();
           var blud = StrToNumber($("#blud").val());
           var pppk = StrToNumber($("#pppk").val());
           var kontrak = StrToNumber($("#kontrak").val());
           var pns = StrToNumber($("#pns").val());
           var phd = StrToNumber($("#phd").val());
           var outsourcing = StrToNumber($("#outsourcing").val());
           var jml_pegawai = StrToNumber($("#jml_pegawai").val());
           var data = new FormData();
           data.append("tahun", tahun);
           data.append("master_opd_id", opd);
           data.append("jabatan_id", jabatan_id);
           data.append("kode", kode);
           data.append("nama", nama);
           data.append("unit", unit);
           data.append("master_jenis_jabatan_id", jenis_jabatan);
           data.append("master_eselon_id", eselon);
           data.append("master_golongan_id", golongan);
           data.append("master_urusan_pemerintahan_ids", urusan_pemerintahan);
           data.append("blud", blud);
           data.append("pppk", pppk);
           data.append("kontrak", kontrak);
           data.append("pns", pns);
           data.append("phd", phd);
           data.append("outsourcing", outsourcing);
           data.append("jml_pegawai", jml_pegawai);
           $.ajax({
               type:'post',
               url:'/ajax/jabatan/tambah',
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
                           window.location = "/login";
                       }else{
                           toastr["error"](res.msg);
                       }
                   }else{
                       toastr["success"](res.msg);
                       window.location = "/jabatan"
                   }
               },error:function(){
                   $("#form_update").loading("stop");
                   toastr["error"]("Gagal tambah data, coba lagi nanti");
               }
           });
       }
    });
    $("#opd").change(function(){
        dropdown_jabatan();
    });
    $("#tahun").change(function(){
        dropdown_jabatan();
    });
});
function dropdown_jabatan(){
    var tahun = $("#tahun").val();
    var opd = $("#opd").val();
    if(tahun != "" && opd != ""){
        $("#jabatan_id").html("<option value=''>Memuat Data ...</option>");
        $.ajax({
            type:'post',
            url:'/ajax/jabatan',
            data:{page:"x",nama:"",master_opd_id:opd,tahun:tahun,master_jenis_jabatan:"",max_tingkat:6},
            success:function(resp){
                $("#listdata").loading("stop");
                var res = JSON.parse(resp);
                if(res.is_error){
                    if(res.must_login){
                        window.location = "/login";
                    }else{
                        $("#jabatan_id").html("<option value=''>" + res.msg + "</option>");
                    }
                }else{
                    var html = "<option value=''>&nbsp;</option>";
                    $.each(res.data,function(k,v){
                        if(v['tingkat'] == 0){
                            if(jabatan_id == v['id']){
                                html += "<option value='" + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                            }else{
                                html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                            }
                            var jabatan_id_0 = v['id'];
                            $.each(res.data,function(k,v){
                                if(v['tingkat'] == 1 && jabatan_id_0 == v['jabatan_id']){
                                    if(jabatan_id == v['id']){
                                        html += "<option value='" + v['id'] + "' selected='selected'>-" + v['nama'] + "</option>";
                                    }else{
                                        html += "<option value='" + v['id'] + "'>-" + v['nama'] + "</option>";
                                    }
                                    var jabatan_id_1 = v['id'];
                                    $.each(res.data,function(k,v){
                                        if(v['tingkat'] == 2 && jabatan_id_1 == v['jabatan_id']){
                                            if(jabatan_id == v['id']){
                                                html += "<option value='" + v['id'] + "' selected='selected'>--" + v['nama'] + "</option>";
                                            }else{
                                                html += "<option value='" + v['id'] + "'>--" + v['nama'] + "</option>";
                                            }
                                            var jabatan_id_2 = v['id'];
                                            $.each(res.data,function(k,v){
                                                if(v['tingkat'] == 3 && jabatan_id_2 == v['jabatan_id']){
                                                    if(jabatan_id == v['id']){
                                                        html += "<option value='" + v['id'] + "' selected='selected'>---" + v['nama'] + "</option>";
                                                    }else{
                                                        html += "<option value='" + v['id'] + "'>---" + v['nama'] + "</option>";
                                                    }
                                                    var jabatan_id_3 = v['id'];
                                                    $.each(res.data,function(k,v){
                                                        if(v['tingkat'] == 4 && jabatan_id_3 == v['jabatan_id']){
                                                            if(jabatan_id == v['id']){
                                                                html += "<option value='" + v['id'] + "' selected='selected'>----" + v['nama'] + "</option>";
                                                            }else{
                                                                html += "<option value='" + v['id'] + "'>----" + v['nama'] + "</option>";
                                                            }
                                                            var jabatan_id_4 = v['id'];
                                                            $.each(res.data,function(k,v){
                                                                if(v['tingkat'] == 5 && jabatan_id_4 == v['jabatan_id']){
                                                                    if(jabatan_id == v['id']){
                                                                        html += "<option value='" + v['id'] + "' selected='selected'>-----" + v['nama'] + "</option>";
                                                                    }else{
                                                                        html += "<option value='" + v['id'] + "'>-----" + v['nama'] + "</option>";
                                                                    }
                                                                    var jabatan_id_5 = v['id'];
                                                                    $.each(res.data,function(k,v){
                                                                        if(v['tingkat'] == 6 && jabatan_id_5 == v['jabatan_id']){
                                                                            if(jabatan_id == v['id']){
                                                                                html += "<option value='" + v['id'] + "' selected='selected'>------" + v['nama'] + "</option>";
                                                                            }else{
                                                                                html += "<option value='" + v['id'] + "'>------" + v['nama'] + "</option>";
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
                }
            },error:function(){
                $("#jabatan_id").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
            }
        });
    }
}
function hitung_jml_pegawai(){
    var blud = StrToNumber($("#blud").val());
    var pppk = StrToNumber($("#pppk").val());
    var kontrak = StrToNumber($("#kontrak").val());
    var pns = StrToNumber($("#pns").val());
    var phd = StrToNumber($("#phd").val());
    var outsourcing = StrToNumber($("#outsourcing").val());
    var jml_pegawai = blud + pppk + kontrak + pns + phd + outsourcing;
    $("#jml_pegawai").val(FormatAngka(jml_pegawai));
}
function dropdown_urusan_pemerintahan(){
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
                    window.location = "/login";
                }else{
                    $("#urusan_pemerintahan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
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
function dropdown_golongan(){
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
                    window.location = "/login";
                }else{
                    $("#golongan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Golongan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
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
function dropdown_eselon(){
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
                    window.location = "/login";
                }else{
                    $("#eselon").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Eselon</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
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
function dropdown_jenis_jabatan(){
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
                    window.location = "/login";
                }else{
                    $("#jenis_jabatan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih Jenis Jabatan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
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
function dropdown_opd(){
    $("#filter_opd").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/opd',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#filter_opd").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih OPD</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#opd").html(html);
                $("#opd").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#filter_opd").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}