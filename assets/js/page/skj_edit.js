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
                    var tipe = "";
                    if(v['tipe'] == "1"){
                        tipe = "Non Urusan Pemerintahan";
                    }else if(v['tipe'] == "2"){
                        tipe = "Urusan Pemerintahan";
                    }
                });
                html_standar_kompetensi += "</ul>";

                html_standar_kompetensi += "<div class='tab-content'>";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi += "<div class='tab-pane fade show " +  (k==0?"active":"") + "' id='tab_standar_kompetensi_" + k + "'></div>";
                });
                html_standar_kompetensi += "</div>";

                $("#tab_content_standar_kompetensi").html(html_standar_kompetensi);
            }
        },error:function(){
            $("#tab_content_standar_kompetensi").loading("stop");
            $("#tab_content_standar_kompetensi").html("Gagal memuat data, coba lagi nanti");
        }
    });
}
function skj(elm_id,master_standar_kompetensi_id){
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
                var html_standar_kompetensi_list = "";
                $.each(res.data,function(k,v){
                    html_standar_kompetensi_list += "<div class='tab-pane fade show " +  (k==0?"active":"") + "' id='tab_standar_kompetensi_" + k + "'></div>";
                });

                $("#"  + elm_id).html(html_standar_kompetensi_list);
            }
        },error:function(){
            $("#"  + elm_id).loading("stop");
            $("#"  + elm_id).html("Gagal memuat data, coba lagi nanti");
        }
    });
}