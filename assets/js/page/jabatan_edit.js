$(document).ready(function(){
    var cur_year = new Date().getFullYear();
    var html_tahun = "<option value=''>Pilih Tahun</option>";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        html_tahun += "<option value='"  + i + "'>" + i + "</option>";
    }
    $("#tahun").html(html_tahun);
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
    load_data();
    $("#form_update").validate({
        submitHandler:function(){
            $("#form_update").loading();
            var id = $("#id").val();
            var tahun = $("#tahun").val();
            var opd = $("#opd").val();
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
            data.append("id", id);
            data.append("tahun", tahun);
            data.append("master_opd_id", opd);
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
                    toastr["error"]("Gagal edit data, coba lagi nanti");
                }
            });
        }
    });
});
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
                    window.location = "/login";
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#tahun").val(data['tahun']);
                $("#kode").val(data['kode']);
                $("#nama").val(data['nama']);
                $("#unit").val(data['unit']);
                $("#blud").val(data['blud']);
                $("#pppk").val(data['pppk']);
                $("#kontrak").val(data['kontrak']);
                $("#pns").val(data['pns']);
                $("#phd").val(data['phd']);
                $("#outsourcing").val(data['outsourcing']);
                $("#jml_pegawai").val(data['jml_pegawai']);
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
function dropdown_urusan_pemerintahan(id){
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
                    if(id == v['id']){
                        html += "<option value='"  + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
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
                    window.location = "/login";
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
                    window.location = "/login";
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
                    window.location = "/login";
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
    $("#opd_nama").html("");
    $("#opd_id").val(id);
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
                var nama_opd = "";
                $.each(res.data,function(k,v){
                    if(id == v['id']){
                        nama_opd = v['nama'];
                    }
                });
                $("#opd_nama").val(nama_opd);
                $("#opd_id").val(id);
                dropdown_jabatan(jabatan_id);
            }
        },error:function(){
            $("#opd_nama").html("");
            $("#opd_id").val(id);
        }
    });
}
function dropdown_jabatan(jabatan_id){
    var tahun = $("#tahun").val();
    var opd = $("#opd").val();
    if(tahun != "" && opd != ""){
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
                        $("#jabatan_id").val(jabatan_id);
                    }
                }else{
                    var jabatan_nama = "";
                    $.each(res.data,function(k,v){
                        if(jabatan_id == v['id']){
                            jabatan_nama = v['nama'];
                        }
                    });
                    $("#jabatan_id").val(jabatan_id);
                    $("#jabatan_nama").val(jabatan_nama);
                }
            },error:function(){
                $("#jabatan_id").val(jabatan_id);
            }
        });
    }
}