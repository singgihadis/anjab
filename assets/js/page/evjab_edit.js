var data_evjab = [];
var data_level = [];
$(document).ready(function(){
    get_opd_name(function(){
        is_verifikasi();
        data_load();
    });
    $("#form_edit").validate({
       submitHandler:function(){
           update();
       }
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var index = $(e.target).parent().index();
        if(index == 0){
            data_load();
        }else if(index == 1){
            tim_analisis();
        }
    });
    $("#form_tim_analisis").validate({
       submitHandler:function(){
           tim_analisis_update();
       }
    });
    $("#form_verifikasi").validate({
        submitHandler:function(){
            verifikasi();
        }
    });
    $("#master_faktor_evjab_level_id").change(function(){
        var k = $(this).find("option:selected").attr("data-k");
        var data = data_level[k];
        $('#summernote').summernote("code",data['uraian']);
        $("#dampak").val(data['dampak']);
    });
});
function modal_verifikasi(){
    $("#modal_verifikasi").modal("show");
}
function verifikasi(){
    $("#form_verifikasi").loading();
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    var verifikasi = $("#verifikasi").val();
    $.ajax({
        type:'post',
        url:'/ajax/evjab/verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun,verifikasi:verifikasi},
        success:function(resp){
            $("#form_verifikasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                $("#modal_verifikasi").modal("hide");
                $("#btn_verifikasi").remove();
            }
        },error:function(){
            $("#form_verifikasi").loading("stop");
            toastr["error"]("Gagal melakukan verifikasi, coba lagi nanti");
        }
    });
}
function tim_analisis_update(){
    $("#form_tim_analisis").loading();
    var jabatan_id = $("#jabatan_id").val();
    var nama_ketua = $("#nama_ketua").val();
    var jabatan_pejabat_bersangkutan = $("#jabatan_pejabat_bersangkutan").val();
    var nama_pejabat_bersangkutan = $("#nama_pejabat_bersangkutan").val();
    var jabatan_pimpinan_unit_kerja = $("#jabatan_pimpinan_unit_kerja").val();
    var nama_pimpinan_unit_kerja = $("#nama_pimpinan_unit_kerja").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("nama_ketua", nama_ketua);
    data.append("jabatan_pejabat_bersangkutan", jabatan_pejabat_bersangkutan);
    data.append("nama_pejabat_bersangkutan", nama_pejabat_bersangkutan);
    data.append("jabatan_pimpinan_unit_kerja", jabatan_pimpinan_unit_kerja);
    data.append("nama_pimpinan_unit_kerja", nama_pimpinan_unit_kerja);
    $.ajax({
        type:'post',
        url:'/ajax/evjab/tim_analisis_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_tim_analisis").loading("stop");
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
            $("#form_tim_analisis").loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
        }
    });
}
function tim_analisis(){
    $("#form_tim_analisis").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/evjab/tim_analisis',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#form_tim_analisis").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    //toastr["error"](res.msg);
                }
            }else{
                var data = res.data[0];
                $("#nama_ketua").val(data['nama_ketua']);
                $("#jabatan_pejabat_bersangkutan").val(data['jabatan_pejabat_bersangkutan']);
                $("#nama_pejabat_bersangkutan").val(data['nama_pejabat_bersangkutan']);
                $("#jabatan_pimpinan_unit_kerja").val(data['jabatan_pimpinan_unit_kerja']);
                $("#nama_pimpinan_unit_kerja").val(data['nama_pimpinan_unit_kerja']);
            }
        },error:function(){
            $("#form_tim_analisis").loading("stop");
            toastr["error"]("Gagal memuat data analisis, coba lagi nanti");
        }
    });
}
function update(){
    $("#form_edit").loading();
    var tahun = $("#tahun").val();
    var jabatan_id = $("#jabatan_id").val();
    var ruang_lingkup = $("#summernote").summernote('code');
    var dampak = $("#dampak").val();
    var master_faktor_evjab_id = $("#master_faktor_evjab_id").val();
    var master_faktor_evjab_level_id = $("#master_faktor_evjab_level_id").val();
    var nilai = $("#master_faktor_evjab_level_id").find("option:selected").attr("data-nilai");
    var data = new FormData();
    data.append("tahun", tahun);
    data.append("jabatan_id", jabatan_id);
    data.append("ruang_lingkup", ruang_lingkup);
    data.append("dampak", dampak);
    data.append("master_faktor_evjab_id", master_faktor_evjab_id);
    data.append("master_faktor_evjab_level_id", master_faktor_evjab_level_id);
    data.append("nilai", nilai);
    $.ajax({
        type:'post',
        url:'/ajax/evjab/update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_edit").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                $("#modal_edit").modal("hide");
                toastr["success"](res.msg);
                data_load();
            }
        },error:function(){
            $("#form_edit").loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
        }
    });
}
function modal_edit(itu){
    $("#modal_edit").modal("show");

    var id = $(itu).attr("data-id");
    var master_faktor_evjab_level_id = "";
    var ruang_lingkup = "";
    var dampak = "";
    if(id != ""){
        $.each(data_evjab,function(k,v){
            if(id == v['id']){
                master_faktor_evjab_level_id = v['master_faktor_evjab_level_id'];
                ruang_lingkup = v['ruang_lingkup'];
                dampak = v['dampak'];
            }
        });
    }
    $('#summernote').summernote({
        height: 200
    });
    $('#summernote').summernote("code",ruang_lingkup);
    $("#dampak").val(dampak);

    var master_faktor_evjab_id = $(itu).attr("data-master-faktor-evjab-id");
    $("#master_faktor_evjab_id").val(master_faktor_evjab_id);
    dropdown_level(master_faktor_evjab_id,master_faktor_evjab_level_id);
}
function dropdown_level(master_faktor_evjab_id,master_faktor_evjab_level_id){
    $("#master_faktor_evjab_level_id").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/faktor_evjab/level',
        data:{page:"x",master_faktor_evjab_id:master_faktor_evjab_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    $("#master_faktor_evjab_level_id").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                data_level = res.data;
                var html = "";
                html += "<option value='' data-nilai='0'>Pilih</option>";
                $.each(res.data,function(k,v){
                    if(master_faktor_evjab_level_id == v['id']){
                        html += "<option value='" + v['id'] + "' data-k='" + k + "' data-nilai='" + v['nilai'] + "' selected>" + FormatAngka(v['level']) + " - " + FormatAngka(v['nilai']) + "</option>";
                    }else{
                        html += "<option value='" + v['id'] + "' data-k='" + k + "' data-nilai='" + v['nilai'] + "'>" + FormatAngka(v['level']) + " - " + FormatAngka(v['nilai']) + "</option>";
                    }
                });
                $("#master_faktor_evjab_level_id").html(html);
            }
        },error:function(err){
            $("#master_faktor_evjab_level_id").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function data_load(){
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    var tipe = $("#tipe").val();
    $.ajax({
        type:'post',
        url:'/ajax/evjab/data',
        data:{jabatan_id:jabatan_id,tahun:tahun,tipe:tipe},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata").html("<tr><td colspan='9'>" + res.msg + "</td></tr>");
                }
            }else{
                data_evjab = res.data;
                var total = 0;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td class='text-center'><a onclick='modal_panduan(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-light'><span class='fa fa-book'></span> Panduan</a></td>";
                    html += "<td>" + v['kode'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td>" + StripTags(v['ruang_lingkup']) + "</td>";
                    html += "<td>" + v['dampak'] + "</td>";
                    html += "<td>" + v['level'] + "</td>";
                    html += "<td>" + v['nilai'] + "</td>";
                    html += "<td class='text-center'><a href='javascript:void(0);' onclick='modal_edit(this)' data-id='" + v['id'] + "' data-master-faktor-evjab-id='" + v['master_faktor_evjab_id'] + "' data-master-faktor-evjab-level-id='" + v['master_faktor_evjab_level_id'] + "' class='btn btn-sm btn-primary'><span class='fa fa-edit'></span></a></td>";
                    html += "</tr>";
                    total = total + parseInt(v['nilai']);
                });
                $("#listdata").html(html);
                $("#total").html(FormatAngka(total));
                kelas_jabatan(total);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='9'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function kelas_jabatan(total){
    $("#kelas_jabatan").loading();
    var tahun = $("#tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/kelas_jabatan',
        data:{page:"x",nama:"",tahun:tahun},
        success:function(resp){
            $("#kelas_jabatan").loading("stop");
            console.log(resp);
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    if(parseInt(v['batas_awal']) <= total && parseInt(v['batas_akhir']) >= total){
                        html = v['kelas'];
                    }
                });
                $("#kelas_jabatan").html(html);
            }
        },error:function(){
            $("#kelas_jabatan").loading("stop");
        }
    });
}
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
                    window.location = "/logout";;
                }else{
                }
            }else{
                $("#opd_name").html(toTitleCase(res.data[0]['nama']) + " (" + res.data[0]['tahun'] + ")");
                $("#nama_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#mdl_opd").html(toTitleCase(res.data[0]['nama']));
                $("#mdl_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#mdl_tahun").html(res.data[0]['tahun']);
                $("#tahun").val(res.data[0]['tahun']);
                var master_jenis_jabatan_id = res.data[0]['master_jenis_jabatan_id'];
                $.ajax({
                    type:'post',
                    url:'/ajax/jenis_jabatan/detail',
                    data:{id:master_jenis_jabatan_id},
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
                            $("#tipe").val(data['tipe']);
                            callback();
                        }
                    },error:function(){
                        toastr["error"]("Gagal memuat data, coba lagi nanti");
                    }
                });
            }
        },error:function(){
        }
    });
}
function modal_panduan(itu){
    var id = $(itu).attr("data-id");
    var panduan = "";
    if(id != ""){
        $.each(data_evjab,function(k,v){
            if(id == v['id']){
                panduan = v['panduan'];
            }
        });
        $("#modal_panduan").modal("show");
        $("#panduan_text").html(panduan);
    }
}
function is_verifikasi(){
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/evjab/is_verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#btn_verifikasi").show();
                }
            }else{
                if(res.data[0]['verifikasi'] != "0"){
                    $("#btn_verifikasi").remove();
                }else{
                    $("#btn_verifikasi").show();
                }
            }
        },error:function(){
        }
    });
}