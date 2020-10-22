var data_kamus_kompetensi_skj = [];
$(document).ready(function(){
    get_opd_name(function(){
        standar_kompetensi();
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
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
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
                    html_standar_kompetensi += "<a class='nav-link " +  (k==0?"active":"") + "' id='home-tab' data-toggle='tab' href='#tab_standar_kompetensi_" + k + "'>" + toTitleCase(v['nama']) + "</a>";
                    html_standar_kompetensi += "</li>";
                });
                html_standar_kompetensi += "</ul>";

                html_standar_kompetensi += "<div class='tab-content'>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi += "<br><div class='tab-pane fade show " +  (k==0?"active":"") + "' id='tab_standar_kompetensi_" + k + "'></div>";
                });
                html_standar_kompetensi += "</div>";

                $("#tab_content_standar_kompetensi").html(html_standar_kompetensi);
                skj("tab_standar_kompetensi_0",res.data[0]['id'],res.data[0]['tipe']);
            }
        },error:function(){
            $("#tab_content_standar_kompetensi").loading("stop");
            $("#tab_content_standar_kompetensi").html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj(elm_id,master_standar_kompetensi_id,tipe){
    var jabatan_id = $("#jabatan_id").val();
    var tahun = $("#tahun").val();
    $("#"  + elm_id).loading();
    $.ajax({
        type:'post',
        url:'/ajax/skj',
        data:{jabatan_id:jabatan_id,tahun:tahun,master_standar_kompetensi_id:master_standar_kompetensi_id},
        success:function(resp){
            $("#"  + elm_id).loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#"  + elm_id).html(res.msg);
                }
            }else{
                data_kamus_kompetensi_skj = res.data;
                var html_standar_kompetensi_list = "";
                if(tipe == "2"){

                }else{
                    html_standar_kompetensi_list += "<table class='table table-striped table-bordered'>";
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
            }
        },error:function(){
            $("#"  + elm_id).loading("stop");
            $("#"  + elm_id).html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function kamus_kompetensi_skj_level(elm_id,master_kamus_kompetensi_skj_id,master_kamus_kompetensi_skj_level_id){
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
            }
        },error:function(){

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