var data_kamus_kompetensi_skj = [];
var cur_urusan_pemerintahan_ids = [];
var cur_elm_id = "";
var cur_master_standar_kompetensi_id = "";
var ajax_kamus_kompetensi_skj_level_is_run = false;
$(document).ready(function(){
    get_opd_name(function(){
        is_verifikasi();
        standar_kompetensi();
    });
    $('#tab_persyaratan_jabatan').on('click', function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('.tab_skj').on('shown.bs.tab', function (e) {
        if($(e.target).attr("id") == "tab_standar_kompetensi"){
            standar_kompetensi();
        }else{
            kualifikasi_jabatan_pendidikan();
        }
    });
    $("#form_tambah_kompetensi").validate({
        submitHandler:function(){
            $("#form_tambah_kompetensi").loading();
            var tahun = $("#tahun").val();
            var jabatan_id = $("#jabatan_id").val();
            var master_kamus_kompetensi_skj_id = $("#kamus_kompetensi_skj_urusan_pemerintahan").val();
            var data = new FormData();
            data.append("tahun", tahun);
            data.append("jabatan_id", jabatan_id);
            data.append("master_kamus_kompetensi_skj_id", master_kamus_kompetensi_skj_id);
            data.append("master_kamus_kompetensi_skj_level_id", "");
            $.ajax({
                type:'post',
                url:'/ajax/skj/tambah_skj_urusan_pemerintahan',
                data:data,
                enctype: 'multipart/form-data',
                cache: false,
                contentType: false,
                processData: false,
                success:function(resp){
                    $("#form_tambah_kompetensi").loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        if(res.must_login){
                            window.location = "/login";
                        }else{
                            toastr["error"](res.msg);
                        }
                    }else{
                        $("#modal_kamus_kompetensi_skj_urusan_pemerintahan").modal("hide");
                        toastr["success"](res.msg);
                        skj_urusan_pemerintahan(cur_elm_id,cur_master_standar_kompetensi_id);
                    }
                },error:function(){
                    $("#form_tambah_kompetensi").loading("stop");
                    toastr["error"]("Gagal update data, coba lagi nanti");
                }
            });
        }
    });
    $('#indikator_kinerja_jabatan').summernote({
        height: 200
    });
    $("#form_verifikasi").validate({
        submitHandler:function(){
            verifikasi();
        }
    });
});
function modal_verifikasi(){
    $("#modal_verifikasi").modal("show");
}
function hapus_skj_urusan_pemerintahan(itu,id){
    $.confirm({
        title: 'Konfirmasi',
        content: 'Apa anda yakin menghapus data ini?',
        buttons: {
            cancel: {
                text: 'Batal',
                action: function(){

                }
            },
            confirm: {
                text: 'Konfirmasi',
                btnClass: 'btn-blue',
                action: function(){
                    $(itu).parent().parent().loading();
                    $.ajax({
                        type:'post',
                        url:'/ajax/skj/hapus_skj_urusan_pemerintahan',
                        data:{id:id},
                        success:function(resp){
                            $(itu).parent().parent().loading("stop");
                            var res = JSON.parse(resp);
                            if(res.is_error){
                                if(res.must_login){
                                    window.location = "/login";
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                toastr["success"]("Berhasil menghapus data");
                                skj_urusan_pemerintahan(cur_elm_id,cur_master_standar_kompetensi_id);
                            }
                        },error:function(resp){
                            $(itu).parent().parent().loading("stop");
                            toastr["error"]("Gagal menghapus, coba lagi nanti");
                        }
                    });
                }
            }
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
                    window.location = "/login";
                }else{
                }
            }else{
                $("#opd_name").html(toTitleCase(res.data[0]['nama']) + " (" + res.data[0]['tahun'] + ")");
                $("#nama_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#tahun").val(res.data[0]['tahun']);
                $("#master_urusan_pemerintahan_ids").val(res.data[0]['master_urusan_pemerintahan_ids']);

                $("#mdl_opd").html(toTitleCase(res.data[0]['nama']));
                $("#mdl_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#mdl_tahun").html(res.data[0]['tahun']);

                $("#nama_jabatan_cap").html(toTitleCase(res.data[0]['nama_jabatan']));
                $("#kode_jabatan_cap").html(res.data[0]['kode_jabatan']);
                $("#tahun_cap").html(res.data[0]['tahun']);
                jenis_jabatan(res.data[0]['master_jenis_jabatan_id']);
                urusan_pemerintahan(res.data[0]['master_urusan_pemerintahan_ids']);
                ikhtisiar_jabatan(jabatan_id);
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
                    //toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var arr_urusan_pemerintahan = [];
                $.each(res.data,function(k,v){
                    arr_urusan_pemerintahan.push(toTitleCase(v['nama']));
                });
                $("#urusan_pemerintahan_cap").html(arr_urusan_pemerintahan.join(", "));
            }
        },error:function(){
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function ikhtisiar_jabatan(jabatan_id){
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/ikhtisiar_jabatan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                }
            }else{
                var data = res.data[0];
                $("#ikhtisiar_cap").html(data['ikhtisiar']);
            }
        },error:function(){
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function standar_kompetensi(){
    $("#tab_content_standar_kompetensi").loading();
    $.ajax({
        type:'post',
        url:'/ajax/standar_kompetensi',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#tab_content_standar_kompetensi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#tab_content_standar_kompetensi").html(res.msg);
                }
            }else{
                var html_standar_kompetensi = "";
                html_standar_kompetensi += "<ul class='nav nav-tabs custom' id='standar_kompetensi'>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi += "<li class='nav-item'>";
                    html_standar_kompetensi += "<a class='nav-link " +  (k==0?"active":"") + " tab_standar_kompetensi' data-id='" + v['id'] + "' data-tipe='" + v['tipe'] + "' id='home-tab' data-toggle='tab' href='#tab_standar_kompetensi_" + k + "'>" + toTitleCase(v['nama']) + "</a>";
                    html_standar_kompetensi += "</li>";
                });
                html_standar_kompetensi += "</ul>";

                html_standar_kompetensi += "<div class='tab-content'>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi += "<div class='tab-pane fade show " +  (k==0?"active":"") + "' id='tab_standar_kompetensi_" + k + "'></div>";
                });
                html_standar_kompetensi += "</div>";

                $("#tab_content_standar_kompetensi").html(html_standar_kompetensi);


                var tipe = $('a.tab_standar_kompetensi:first').attr("data-tipe");
                if(tipe == "1"){
                    skj_non_urusan_pemerintahan($('a.tab_standar_kompetensi:first').attr("href").replace("#",""),$('a.tab_standar_kompetensi:first').attr("data-id"));
                }else if(tipe == "2"){
                    skj_urusan_pemerintahan($('a.tab_standar_kompetensi:first').attr("href").replace("#",""),$('a.tab_standar_kompetensi:first').attr("data-id"));
                }
                $('a.tab_standar_kompetensi').on('shown.bs.tab', function (e) {
                    var id = $(e.target).attr("data-id");
                    var elm = $(e.target).attr("href").replace("#","");
                    var tipe = $(e.target).attr("data-tipe");
                    if(tipe == "1"){
                        skj_non_urusan_pemerintahan(elm,id);
                    }else if(tipe == "2"){
                        skj_urusan_pemerintahan(elm,id);
                    }
                });
            }
        },error:function(){
            $("#tab_content_standar_kompetensi").loading("stop");
            $("#tab_content_standar_kompetensi").html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj_urusan_pemerintahan(elm_id,master_standar_kompetensi_id){
    cur_elm_id = elm_id;
    cur_master_standar_kompetensi_id = master_standar_kompetensi_id;
    cur_urusan_pemerintahan_ids = [];
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $("#"  + elm_id).loading();
    $.ajax({
        type:'post',
        url:'/ajax/skj/urusan_pemerintahan',
        data:{jabatan_id:jabatan_id,tahun:tahun,master_standar_kompetensi_id:master_standar_kompetensi_id},
        success:function(resp){
            $("#"  + elm_id).loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    var html_standar_kompetensi_list = "";
                    html_standar_kompetensi_list += "<br><a onclick='modal_kamus_kompetensi_skj_urusan_pemerintahan()' href='javascript:void(0);' class='btn btn-sm btn-primary'><span class='fa fa-plus'></span> Tambah Kompetensi</a>";
                    html_standar_kompetensi_list += "<br><br><table class='table table-striped table-bordered'>";
                    html_standar_kompetensi_list += "<thead>";
                    html_standar_kompetensi_list += "<tr><th>No</th><th>Kompetensi</th><th>Level</th><th>Deskripsi</th><th>Indikator Kompetensi</th><th>Aksi</th></tr>";
                    html_standar_kompetensi_list += "</thead>";
                    html_standar_kompetensi_list += "<tbody>";
                    html_standar_kompetensi_list += "<tr><td colspan='6'>" + res.msg + "</td></tr>";
                    html_standar_kompetensi_list += "</tbody>";
                    html_standar_kompetensi_list += "</table>";
                    $("#"  + elm_id).html(html_standar_kompetensi_list);
                }
            }else{
                data_kamus_kompetensi_skj = res.data;
                var html_standar_kompetensi_list = "";
                html_standar_kompetensi_list += "<br><a onclick='modal_kamus_kompetensi_skj_urusan_pemerintahan()' href='javascript:void(0);' class='btn btn-sm btn-primary'><span class='fa fa-plus'></span> Tambah Kompetensi</a>";
                html_standar_kompetensi_list += "<br><br><table class='table table-striped table-bordered'>";
                html_standar_kompetensi_list += "<thead>";
                html_standar_kompetensi_list += "<tr><th>No</th><th>Kompetensi</th><th>Level</th><th>Deskripsi</th><th>Indikator Kompetensi</th><th>Aksi</th></tr>";
                html_standar_kompetensi_list += "</thead>";
                html_standar_kompetensi_list += "<tbody>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi_list += "<tr id='" + elm_id + "_" + k + "' data-id='" + v['id'] + "'>";
                    html_standar_kompetensi_list += "<td>" + (k + 1) + "</td>";
                    html_standar_kompetensi_list += "<td>" + v['nama'] + "</td>";
                    html_standar_kompetensi_list += "<td style='width:60px;'></td>";
                    html_standar_kompetensi_list += "<td></td>";
                    html_standar_kompetensi_list += "<td></td>";
                    html_standar_kompetensi_list += "<td><a onclick='hapus_skj_urusan_pemerintahan(this," + v['skj_id'] + ")' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></a></td>";
                    html_standar_kompetensi_list += "</tr>";
                    cur_urusan_pemerintahan_ids.push(v['id']);
                });
                html_standar_kompetensi_list += "</tbody>";
                html_standar_kompetensi_list += "</table>";
                $("#"  + elm_id).html(html_standar_kompetensi_list);
                $.each(res.data,function(k,v){
                    kamus_kompetensi_skj_level(elm_id + "_" + k,v['id'],v['master_kamus_kompetensi_skj_level_id']);
                });
            }
        },error:function(){
            $("#"  + elm_id).loading("stop");
            $("#"  + elm_id).html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj_non_urusan_pemerintahan(elm_id,master_standar_kompetensi_id){
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $("#"  + elm_id).loading();
    $.ajax({
        type:'post',
        url:'/ajax/skj/non_urusan_pemerintahan',
        data:{jabatan_id:jabatan_id,tahun:tahun,master_standar_kompetensi_id:master_standar_kompetensi_id},
        success:function(resp){
            $("#"  + elm_id).loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    var html_standar_kompetensi_list = "";
                    html_standar_kompetensi_list += "<br><table class='table table-striped table-bordered'>";
                    html_standar_kompetensi_list += "<thead>";
                    html_standar_kompetensi_list += "<tr><th>No</th><th>Kompetensi</th><th>Level</th><th>Deskripsi</th><th>Indikator Kompetensi</th></tr>";
                    html_standar_kompetensi_list += "</thead>";
                    html_standar_kompetensi_list += "<tbody>";
                    html_standar_kompetensi_list += "<tr><td colspan='5'>" + res.msg + "</td></tr>";
                    html_standar_kompetensi_list += "</tbody>";
                    html_standar_kompetensi_list += "</table>";
                    $("#"  + elm_id).html(html_standar_kompetensi_list);
                }
            }else{
                data_kamus_kompetensi_skj = res.data;
                var html_standar_kompetensi_list = "";
                html_standar_kompetensi_list += "<br><table class='table table-striped table-bordered'>";
                html_standar_kompetensi_list += "<thead>";
                html_standar_kompetensi_list += "<tr><th>No</th><th>Kompetensi</th><th>Level</th><th>Deskripsi</th><th>Indikator Kompetensi</th></tr>";
                html_standar_kompetensi_list += "</thead>";
                html_standar_kompetensi_list += "<tbody>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi_list += "<tr id='" + elm_id + "_" + k + "' data-id='" + v['id'] + "'>";
                    html_standar_kompetensi_list += "<td>" + (k + 1) + "</td>";
                    html_standar_kompetensi_list += "<td>" + v['nama'] + "</td>";
                    html_standar_kompetensi_list += "<td style='width:60px;'></td>";
                    html_standar_kompetensi_list += "<td></td>";
                    html_standar_kompetensi_list += "<td></td>";
                    html_standar_kompetensi_list += "</tr>";
                });
                html_standar_kompetensi_list += "</tbody>";
                html_standar_kompetensi_list += "</table>";
                $("#"  + elm_id).html(html_standar_kompetensi_list);
                $.each(res.data,function(k,v){
                    kamus_kompetensi_skj_level(elm_id + "_" + k,v['id'],v['master_kamus_kompetensi_skj_level_id']);
                });
            }
        },error:function(){
            $("#"  + elm_id).loading("stop");
            $("#"  + elm_id).html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function kamus_kompetensi_skj_level(elm_id,master_kamus_kompetensi_skj_id,master_kamus_kompetensi_skj_level_id){
    var interval_ajax = setInterval(function(){
        if(ajax_kamus_kompetensi_skj_level_is_run == false){
            clearInterval(interval_ajax);
            ajax_kamus_kompetensi_skj_level_is_run = true;
            $("#" + elm_id).loading();
            $.ajax({
                type:'post',
                url:'/ajax/kamus_kompetensi_skj/level',
                data:{page:"x",master_kamus_kompetensi_skj_id:master_kamus_kompetensi_skj_id},
                success:function(resp){
                    $("#" + elm_id).loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        if(res.must_login){
                            window.location = "/login";
                        }else{
                            var html_dropdown = "";
                            html_dropdown += "<select class='form-control form-control-sm'>";
                            html_dropdown += "<option value=''>Pilih</option>";
                            html_dropdown += "</select>";
                            $("#" + elm_id).find("td:nth-child(3)").html(html_dropdown);
                            ajax_kamus_kompetensi_skj_level_is_run = false;
                        }
                    }else{
                        var html_dropdown = "";
                        html_dropdown += "<select class='form-control form-control-sm dropdown_level' onchange='skj_update(this)'>";
                        html_dropdown += "<option value=''>Pilih</option>";
                        var deskripsi = "";
                        var indikator_kompetensi = "";
                        $.each(res.data,function(k,v){
                            if(master_kamus_kompetensi_skj_level_id == v['id']){
                                html_dropdown += "<option value='" + v['id'] + "' selected>" + v['level'] + "</option>";
                                deskripsi = v['deskripsi'];
                                indikator_kompetensi = v['indikator_kompetensi'];
                            }else{
                                html_dropdown += "<option value='" + v['id'] + "'>" + v['level'] + "</option>";
                            }
                        });
                        html_dropdown += "</select>";
                        $("#" + elm_id).find("td:nth-child(3)").html(html_dropdown);
                        $("#" + elm_id).find("td:nth-child(4)").html(deskripsi);
                        $("#" + elm_id).find("td:nth-child(5)").html(indikator_kompetensi);
                        ajax_kamus_kompetensi_skj_level_is_run = false;
                    }
                },error:function(){
                    ajax_kamus_kompetensi_skj_level_is_run = false;

                }
            });
        }
    },300);
}
function modal_kamus_kompetensi_skj_urusan_pemerintahan(){
    $("#modal_kamus_kompetensi_skj_urusan_pemerintahan").modal("show");
    $("#kamus_kompetensi_skj_urusan_pemerintahan").html("<option value=''>Memuat Data ...</option>");
    var filter_urusan_pemerintahan = $("#master_urusan_pemerintahan_ids").val();
    $.ajax({
        type:'post',
        url:'/ajax/kamus_kompetensi_skj',
        data:{page:"x",master_urusan_pemerintahan_id:filter_urusan_pemerintahan},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#kamus_kompetensi_skj_urusan_pemerintahan").html("<option value=''>Pilih</option>");
                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    if(cur_urusan_pemerintahan_ids.length > 0){
                        if($.inArray(v['id'],cur_urusan_pemerintahan_ids) !== -1){

                        }else{
                            html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                        }
                    }else{
                        html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#kamus_kompetensi_skj_urusan_pemerintahan").html(html);
                $("#kamus_kompetensi_skj_urusan_pemerintahan").select2({
                    width:"100%"
                });
            }
        },error:function(){
            $("#kamus_kompetensi_skj_urusan_pemerintahan").html("<option value=''>Pilih</option>");
        }
    });
}
function skj_update(itu){
    $(itu).parent().parent().loading();
    var master_kamus_kompetensi_skj_level_id = $(itu).val();
    var master_kamus_kompetensi_skj_id = $(itu).parent().parent().attr("data-id");
    var tahun = $("#tahun").val();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("tahun", tahun);
    data.append("jabatan_id", jabatan_id);
    data.append("master_kamus_kompetensi_skj_id", master_kamus_kompetensi_skj_id);
    data.append("master_kamus_kompetensi_skj_level_id", master_kamus_kompetensi_skj_level_id);
    $.ajax({
        type:'post',
        url:'/ajax/skj/update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                    var index = $(itu).parent().parent().index();
                    var elm = $(itu).parent().parent().attr("id");
                    var master_kamus_kompetensi_skj_id = $(itu).parent().parent().attr("data-id");
                    var master_kamus_kompetensi_skj_level_id_default = data_kamus_kompetensi_skj[index]['master_kamus_kompetensi_skj_level_id'];
                    kamus_kompetensi_skj_level(elm,master_kamus_kompetensi_skj_id,master_kamus_kompetensi_skj_level_id_default);
                }
            }else{
                toastr["success"](res.msg);
                var index = $(itu).parent().parent().index();
                var elm = $(itu).parent().parent().attr("id");
                var master_kamus_kompetensi_skj_id = $(itu).parent().parent().attr("data-id");
                data_kamus_kompetensi_skj[index]['master_kamus_kompetensi_skj_level_id'] = master_kamus_kompetensi_skj_level_id;
                kamus_kompetensi_skj_level(elm,master_kamus_kompetensi_skj_id,master_kamus_kompetensi_skj_level_id);
            }
        },error:function(){
            $(itu).parent().parent().loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
            var index = $(itu).parent().parent().index();
            var elm = $(itu).parent().parent().attr("id");
            var master_kamus_kompetensi_skj_id = $(itu).parent().parent().attr("data-id");
            var master_kamus_kompetensi_skj_level_id_default = data_kamus_kompetensi_skj[index]['master_kamus_kompetensi_skj_level_id'];
            kamus_kompetensi_skj_level(elm,master_kamus_kompetensi_skj_id,master_kamus_kompetensi_skj_level_id_default);
        }
    });
}
function kualifikasi_jabatan_pendidikan(){
    $("#pendidikan_formal").loading();
    $("#fakultas_jurusan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/kualifikasi_jabatan_pendidikan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#pendidikan_formal").loading("stop");
            $("#fakultas_jurusan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#pendidikan_formal").html("");
                    $("#fakultas_jurusan").html("");
                }
            }else{
                var data = res.data[0];
                $("#pendidikan_formal").html(data['nama_pendidikan']);
                $("#fakultas_jurusan").html(data['jurusan']);
                syarat_jabatan_pelatihan();
            }
        },error:function(){
            $("#pendidikan_formal").loading("stop");
            $("#fakultas_jurusan").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function syarat_jabatan_pelatihan(){
    $("#pendidikan_pelatihan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_pelatihan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#pendidikan_pelatihan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    var html_pendidikan_pelatihan = "";
                    html_pendidikan_pelatihan += "<table class='table table-striped table-bordered'>";
                    html_pendidikan_pelatihan += "<thead>";
                    html_pendidikan_pelatihan += "<tr><th>No</th><th>Jenis Pelatihan</th><th>Nama Pendidikan dan Pelatihan</th><th>Tingkat Penting</th></tr>";
                    html_pendidikan_pelatihan += "</thead>";
                    html_pendidikan_pelatihan += "<tbody>";
                    html_pendidikan_pelatihan += "<tr><td colspan='4'>" + res.msg + "</td></tr>";
                    html_pendidikan_pelatihan += "</tbody>";
                    html_pendidikan_pelatihan += "</table>";
                    $("#pendidikan_pelatihan").html(html_pendidikan_pelatihan);
                }
            }else{
                var html_pendidikan_pelatihan = "";
                html_pendidikan_pelatihan += "<table class='table table-striped table-bordered'>";
                html_pendidikan_pelatihan += "<thead>";
                html_pendidikan_pelatihan += "<tr><th>No</th><th>Jenis Pelatihan</th><th>Nama Pendidikan dan Pelatihan</th><th>Tingkat Penting</th></tr>";
                html_pendidikan_pelatihan += "</thead>";
                html_pendidikan_pelatihan += "<tbody>";
                $.each(res.data,function(k,v){
                    html_pendidikan_pelatihan += "<tr data-id='" + v['id'] + "' data-anjab-kualifikasi-pelatihan-id='" + v['anjab_kualifikasi_pelatihan_id'] + "'>";
                    html_pendidikan_pelatihan += "<td>" + (k + 1) + "</td>";
                    html_pendidikan_pelatihan += "<td>" + v['nama_jenis_pelatihan'] + "</td>";
                    html_pendidikan_pelatihan += "<td>" + v['nama'] + "</td>";
                    html_pendidikan_pelatihan += "<td>";
                    html_pendidikan_pelatihan += "<select class='form-control form-control-sm tingkat_penting' onchange='skj_pelatihan_update(this)'>";
                    html_pendidikan_pelatihan += "<option value='0'>-</option>";
                    html_pendidikan_pelatihan += "<option value='1' " + (v['tingkat_penting'] == "1"?"selected":"") + ">Mutlak</option>";
                    html_pendidikan_pelatihan += "<option value='2' " + (v['tingkat_penting'] == "2"?"selected":"") + ">Penting</option>";
                    html_pendidikan_pelatihan += "<option value='3' " + (v['tingkat_penting'] == "3"?"selected":"") + ">Perlu</option>";
                    html_pendidikan_pelatihan += "</select>";
                    html_pendidikan_pelatihan += "</td>";
                    html_pendidikan_pelatihan += "</tr>";
                });
                html_pendidikan_pelatihan += "</tbody>";
                html_pendidikan_pelatihan += "</table>";
                $("#pendidikan_pelatihan").html(html_pendidikan_pelatihan);
                syarat_jabatan_pengalaman_kerja();
            }
        },error:function(){
            $("#pendidikan_pelatihan").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj_pelatihan_update(itu){
    $(itu).parent().parent().loading();
    var tingkat_penting = $(itu).val();
    var anjab_kualifikasi_pelatihan_id = $(itu).parent().parent().attr("data-anjab-kualifikasi-pelatihan-id");
    var data = new FormData();
    data.append("anjab_kualifikasi_pelatihan_id", anjab_kualifikasi_pelatihan_id);
    data.append("tingkat_penting", tingkat_penting);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_pelatihan_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                    syarat_jabatan_pelatihan();
                }
            }else{
                toastr["success"](res.msg);
                syarat_jabatan_pelatihan();
            }
        },error:function(){
            $(itu).parent().parent().loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
            syarat_jabatan_pelatihan();
        }
    });
}
function syarat_jabatan_pengalaman_kerja(){
    $("#pengalaman_kerja").loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_pengalaman_kerja',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#pengalaman_kerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    var html_pengalaman_kerja = "";
                    html_pengalaman_kerja += "<table class='table table-striped table-bordered'>";
                    html_pengalaman_kerja += "<thead>";
                    html_pengalaman_kerja += "<tr><th>No</th><th>Nama Pengalaman Kerja</th><th>Tingkat Penting</th></tr>";
                    html_pengalaman_kerja += "</thead>";
                    html_pengalaman_kerja += "<tbody>";
                    html_pengalaman_kerja += "<tr><td colspan='3'>" + res.msg + "</td></tr>";
                    html_pengalaman_kerja += "</tbody>";
                    html_pengalaman_kerja += "</table>";
                    $("#pengalaman_kerja").html(html_pengalaman_kerja);
                }
            }else{
                var html_pengalaman_kerja = "";
                html_pengalaman_kerja += "<table class='table table-striped table-bordered'>";
                html_pengalaman_kerja += "<thead>";
                html_pengalaman_kerja += "<tr><th>No</th><th>Nama Pengalaman Kerja</th><th>Tingkat Penting</th></tr>";
                html_pengalaman_kerja += "</thead>";
                html_pengalaman_kerja += "<tbody>";
                $.each(res.data,function(k,v){
                    html_pengalaman_kerja += "<tr data-id='" + v['id'] + "' data-anjab-kualifikasi-pengalaman-kerja-id='" + v['anjab_kualifikasi_pengalaman_kerja_id'] + "'>";
                    html_pengalaman_kerja += "<td>" + (k + 1) + "</td>";
                    html_pengalaman_kerja += "<td>" + v['nama'] + "</td>";
                    html_pengalaman_kerja += "<td>";
                    html_pengalaman_kerja += "<select class='form-control form-control-sm tingkat_penting' onchange='skj_pengalaman_kerja_update(this)'>";
                    html_pengalaman_kerja += "<option value='0'>-</option>";
                    html_pengalaman_kerja += "<option value='1' " + (v['tingkat_penting'] == "1"?"selected":"") + ">Mutlak</option>";
                    html_pengalaman_kerja += "<option value='2' " + (v['tingkat_penting'] == "2"?"selected":"") + ">Penting</option>";
                    html_pengalaman_kerja += "<option value='3' " + (v['tingkat_penting'] == "3"?"selected":"") + ">Perlu</option>";
                    html_pengalaman_kerja += "</select>";
                    html_pengalaman_kerja += "</td>";
                    html_pengalaman_kerja += "</tr>";
                });
                html_pengalaman_kerja += "</tbody>";
                html_pengalaman_kerja += "</table>";
                $("#pengalaman_kerja").html(html_pengalaman_kerja);
                syarat_jabatan_golongan();
            }
        },error:function(){
            $("#pengalaman_kerja").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj_pengalaman_kerja_update(itu){
    $(itu).parent().parent().loading();
    var tingkat_penting = $(itu).val();
    var anjab_kualifikasi_pengalaman_kerja_id = $(itu).parent().parent().attr("data-anjab-kualifikasi-pengalaman-kerja-id");
    var data = new FormData();
    data.append("anjab_kualifikasi_pengalaman_kerja_id", anjab_kualifikasi_pengalaman_kerja_id);
    data.append("tingkat_penting", tingkat_penting);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_pengalaman_kerja_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                    syarat_jabatan_pengalaman_kerja();
                }
            }else{
                toastr["success"](res.msg);
                syarat_jabatan_pengalaman_kerja();
            }
        },error:function(){
            $(itu).parent().parent().loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
            syarat_jabatan_pengalaman_kerja();
        }
    });
}
function syarat_jabatan_golongan(){
    $("#golongan_pangkat").loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_golongan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#golongan_pangkat").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#golongan_pangkat").html("-");
                }
            }else{
                $("#golongan_pangkat").html(res.data[0]['nama'] + " - " + res.data[0]['pangkat']);
                syarat_jabatan_indikator_kinerja_jabatan();
            }
        },error:function(){
            $("#golongan_pangkat").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function syarat_jabatan_indikator_kinerja_jabatan(){
    $("#td_indikator_kinerja_jabatan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_indikator_kinerja_jabatan',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#td_indikator_kinerja_jabatan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $('#indikator_kinerja_jabatan').summernote("code","");
                }
            }else{
                $('#indikator_kinerja_jabatan').summernote("code",res.data[0]['uraian']);
            }
        },error:function(){
            $("#td_indikator_kinerja_jabatan").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function syarat_jabatan_indikator_kinerja_jabatan_update(itu){
    $(itu).parent().parent().loading();
    var jabatan_id = $("#jabatan_id").val();
    var uraian = $("#indikator_kinerja_jabatan").summernote("code");
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("uraian", uraian);
    $.ajax({
        type:'post',
        url:'/ajax/skj/syarat_jabatan_indikator_kinerja_jabatan_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                    syarat_jabatan_indikator_kinerja_jabatan();
                }
            }else{
                toastr["success"](res.msg);
                syarat_jabatan_indikator_kinerja_jabatan();
            }
        },error:function(){
            $(itu).parent().parent().loading("stop");
            toastr["error"]("Gagal update data, coba lagi nanti");
            syarat_jabatan_indikator_kinerja_jabatan();
        }
    });
}
function verifikasi(){
    $("#form_verifikasi").loading();
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    var verifikasi = $("#verifikasi").val();
    $.ajax({
        type:'post',
        url:'/ajax/skj/verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun,verifikasi:verifikasi},
        success:function(resp){
            $("#form_verifikasi").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
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
function is_verifikasi(){
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/skj/is_verifikasi',
        data:{jabatan_id:jabatan_id,tahun:tahun},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
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