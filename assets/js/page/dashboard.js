$(document).ready(function(){
    dropdown_opd();
    var cur_year = new Date().getFullYear();
    var html_tahun = "";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        if(cur_year == i){
            html_tahun += "<option selected value='"  + i + "'>" + i + "</option>";
        }else{
            html_tahun += "<option value='"  + i + "'>" + i + "</option>";
        }
    }
    $("#filter_tahun").html(html_tahun);
    $(".tahun").html(cur_year);
    $("#filter_tahun").change(function(){
        $(".tahun").html($(this).val());
        total_jabatan();
    });
    $("#filter_opd").change(function(){
        var master_opd_id = $("#filter_opd").val();
        if(master_opd_id == ""){
            $("#opd_notselected").show();
            $("#content").hide();
        }else{
            $("#opd_notselected").hide();
            $("#content").show();
            $("#sub_title").html(" - " + toTitleCase($("#filter_opd").find("option:selected").html()));
            total_jabatan();
        }
    });
});
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
                    window.location = "/logout";;
                }else{
                    $("#filter_opd").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Pilih OPD</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#filter_opd").html(html);
                $("#filter_opd").select2({
                    theme: "bootstrap"
                });

                var first_value = $("#filter_opd").find("option:nth-child(2)").val();
                $("#filter_opd").val(first_value).trigger("change");
            }
        },error:function(){
            $("#filter_opd").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function total_jabatan(){
    $("#card_jabatan").loading();
    var master_opd_id = $("#filter_opd").val();
    var tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/dashboard/total_jabatan',
        data:{master_opd_id:master_opd_id,tahun:tahun},
        success:function(resp){
            $("#card_jabatan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{

                }
            }else{
                var total = res.data[0]['total'];
                $("#total_jabatan").html(FormatAngka(parseInt(total)));
                total_pegawai();
            }
        },error:function(){
            $("#card_jabatan").loading("stop");
        }
    });
}
function total_pegawai(){
    $("#card_pegawai").loading();
    var master_opd_id = $("#filter_opd").val();
    var tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/dashboard/total_pegawai',
        data:{master_opd_id:master_opd_id,tahun:tahun},
        success:function(resp){
            $("#card_pegawai").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{

                }
            }else{
                var total = res.data[0]['total'];
                $("#total_pegawai").html(FormatAngka(parseInt(total)));
                total_pegawai_detail();
            }
        },error:function(){
            $("#card_pegawai").loading("stop");
        }
    });
}
function total_pegawai_detail(){
    $("#status_pegawai").loading();
    var master_opd_id = $("#filter_opd").val();
    var tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/dashboard/total_pegawai_detail',
        data:{master_opd_id:master_opd_id,tahun:tahun},
        success:function(resp){
            $("#status_pegawai").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{

                }
            }else{
                var html = "";
                $.each(res.data,function(k,v){
                    html += "<tr><td>" + v['nama'] + "</td><td class='text-right'>" + FormatAngka(parseInt(v['total'])) + "</td></tr>";
                });
                $("#status_pegawai").html(html);
                jabatan_bagan();
            }
        },error:function(){
            $("#status_pegawai").loading("stop");
        }
    });
}
function jabatan_bagan(){
    $("#jabatan_bagan").loading();
    var opd = $("#filter_opd").val();
    var tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan',
        data:{page:"x",nama:"",master_opd_id:opd,tahun:tahun,master_jenis_jabatan:""},
        success:function(resp){
            $("#jabatan_bagan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#jabatan_bagan").html("Data tidak tersedia");
                }
            }else{
                var json_data = [];
                var html = "";

                $.each(res.data,function(k,v){
                    if(v['tingkat'] == 0){
                        var json_data2 = [];
                        var jabatan_id_0 = v['id'];
                        $.each(res.data,function(k,v){
                            if(v['tingkat'] == 1 && jabatan_id_0 == v['jabatan_id']){
                                var json_data3 = [];
                                var jabatan_id_1 = v['id'];
                                $.each(res.data,function(k,v){
                                    if(v['tingkat'] == 2 && jabatan_id_1 == v['jabatan_id']){
                                        var json_data4 = [];
                                        var jabatan_id_2 = v['id'];
                                        $.each(res.data,function(k,v){
                                            if(v['tingkat'] == 3 && jabatan_id_2 == v['jabatan_id']){
                                                var json_data5 = [];
                                                var jabatan_id_3 = v['id'];
                                                $.each(res.data,function(k,v){
                                                    if(v['tingkat'] == 4 && jabatan_id_3 == v['jabatan_id']){
                                                        var json_data6 = [];
                                                        var jabatan_id_4= v['id'];
                                                        $.each(res.data,function(k,v){
                                                            if(v['tingkat'] == 5 && jabatan_id_4 == v['jabatan_id']){
                                                                var json_data7 = [];
                                                                var jabatan_id_5= v['id'];
                                                                $.each(res.data,function(k,v){
                                                                    if(v['tingkat'] == 6 && jabatan_id_5 == v['jabatan_id']){
                                                                        var json_key8 = {
                                                                            v:v,
                                                                            child:json_data8
                                                                        };
                                                                        json_data7.push(json_key8);
                                                                    }
                                                                });
                                                                var json_key7 = {
                                                                    v:v,
                                                                    child:json_data7
                                                                };
                                                                json_data6.push(json_key7);
                                                            }
                                                        });
                                                        var json_key6 = {
                                                            v:v,
                                                            child:json_data6
                                                        };
                                                        json_data5.push(json_key6);
                                                    }
                                                });
                                                var json_key5 = {
                                                    v:v,
                                                    child:json_data5
                                                };
                                                json_data4.push(json_key5);
                                            }
                                        });
                                        var json_key4 = {
                                            v:v,
                                            child:json_data4
                                        };
                                        json_data3.push(json_key4);
                                    }
                                });
                                var json_key3 = {
                                    v:v,
                                    child:json_data3
                                };
                                json_data2.push(json_key3);
                            }
                        });
                        var json_key2 = {
                            v:v,
                            child:json_data2
                        };
                        json_data.push(json_key2);
                    }
                });
                html = html_builder(json_data);
                $("#jabatan_bagan").html(html);
                proses_kelas_jabatan();
            }
        },error:function(){
            $("#jabatan_bagan").loading("stop");
            $("#jabatan_bagan").html("Data tidak tersedia");
        }
    });
}
function html_builder(data_jabatan){
    var html = "";
    html += "<ul class='tree'>";
    if(data_jabatan.length > 0){
        $.each(data_jabatan,function(k,v){
            html += "<li>";
            html += "<span class='jabatan_item' data-id='" + v['v']['id'] + "' data-master-jenis-jabatan-id='" + v['v']['master_jenis_jabatan_id'] + "'>" + v['v']['nama'] + "<br><div></div></span>";
            if(v['child'].length > 0){
                html += "<ul>";
                $.each(v['child'],function(k2,v2){
                    html += "<li>";
                    html += "<span class='jabatan_item' data-id='" + v2['v']['id'] + "' data-master-jenis-jabatan-id='" + v2['v']['master_jenis_jabatan_id'] + "'>" + v2['v']['nama'] + "<br><div></div></span>";
                    if(v2['child'].length > 0){
                        html += "<ul>";
                        $.each(v2['child'],function(k3,v3){
                            html += "<li>";
                            html += "<span class='jabatan_item' data-id='" + v3['v']['id'] + "' data-master-jenis-jabatan-id='" + v3['v']['master_jenis_jabatan_id'] + "'>" + v3['v']['nama'] + "<br><div></div></span>";
                            if(v3['child'].length > 0){
                                html += "<ul>";
                                $.each(v3['child'],function(k4,v4){
                                    html += "<li>";
                                    html += "<span class='jabatan_item' data-id='" + v4['v']['id'] + "' data-master-jenis-jabatan-id='" + v4['v']['master_jenis_jabatan_id'] + "'>" + v4['v']['nama'] + "<br><div></div></span>";
                                    if(v4['child'].length > 0){
                                        html += "<ul>";
                                        $.each(v4['child'],function(k5,v5){
                                            html += "<li>";
                                            html += "<span class='jabatan_item' data-id='" + v5['v']['id'] + "' data-master-jenis-jabatan-id='" + v5['v']['master_jenis_jabatan_id'] + "'>" + v5['v']['nama'] + "<br><div></div></span>";
                                            if(v5['child'].length > 0){
                                                html += "<ul>";
                                                $.each(v6['child'],function(k6,v6){
                                                    html += "<li>";
                                                    html += "<span class='jabatan_item' data-id='" + v6['v']['id'] + "' data-master-jenis-jabatan-id='" + v6['v']['master_jenis_jabatan_id'] + "'>" + v6['v']['nama'] + "<br><div></div></span>";
                                                    if(v6['child'].length > 0){
                                                        html += "<ul>";
                                                        $.each(v7['child'],function(k7,v7){
                                                            html += "<li>";
                                                            html += "<span class='jabatan_item' data-id='" + v7['v']['id'] + "' data-master-jenis-jabatan-id='" + v7['v']['master_jenis_jabatan_id'] + "'>" + v7['v']['nama'] + "<br><div></div></span>";
                                                            html += "</li>";
                                                        });
                                                        html += "</ul>";
                                                    }
                                                    html += "</li>";
                                                });
                                                html += "</ul>";
                                            }
                                            html += "</li>";
                                        });
                                        html += "</ul>";
                                    }
                                    html += "</li>";
                                });
                                html += "</ul>";
                            }
                            html += "</li>";
                        });
                        html += "</ul>";
                    }
                    html += "</li>";
                });
                html += "</ul>";
            }
            html += "</li>";
        });
    }
    html += "</ul>";
    return html;
}
function kelas_jabatan(callback){
    $("#jabatan_bagan").loading();
    var filter_tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/kelas_jabatan',
        data:{page:"x",nama:"",tahun:filter_tahun},
        success:function(resp){
            $("#jabatan_bagan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                }
            }else{
                callback(res.data);
            }
        },error:function(){
            $("#jabatan_bagan").loading("stop");
        }
    });
}
function jenis_jabatan(callback){
    $("#jabatan_bagan").loading();
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#jabatan_bagan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                }
            }else{
                callback(res.data);
            }
        },error:function(){
            $("#jabatan_bagan").loading("stop");
        }
    });
}
function proses_kelas_jabatan(){
    kelas_jabatan(function(data_kelas_jabatan){
        jenis_jabatan(function(data_jenis_jabatan){
            var jabatan_length = $(".jabatan_item").length;
            evjab(data_kelas_jabatan,data_jenis_jabatan,jabatan_length,0);
        });
    });
}
function evjab(data_kelas_jabatan,data_jenis_jabatan,jabatan_length,index){
    var tahun = $("#filter_tahun").val();
    var elm_jabatan = $(".jabatan_item:eq(" + index + ")");
    var jabatan_id = elm_jabatan.attr("data-id");
    var master_jenis_jabatan_id = elm_jabatan.attr("data-master-jenis-jabatan-id");
    var tipe = "";
    $.each(data_jenis_jabatan,function(k2,v2){
        if(v2['id'] == master_jenis_jabatan_id){
            tipe = v2['tipe'];
            elm_jabatan.loading();
            $.ajax({
                type:'post',
                url:'/ajax/evjab/data',
                data:{jabatan_id:jabatan_id,tahun:tahun,tipe:tipe},
                success:function(resp){
                    elm_jabatan.loading("stop");
                    var res = JSON.parse(resp);
                    if(res.is_error){
                        if(res.must_login){
                            window.location = "/logout";
                        }else{
                            $("#listdata").html("<tr><td colspan='9'>" + res.msg + "</td></tr>");
                        }
                    }else{
                        var total = 0;
                        $.each(res.data,function(k3,v3){
                            total = total + parseInt(v3['nilai']);
                        });
                        var kelas_jabatan = "";
                        $.each(data_kelas_jabatan,function(k4,v4){
                            if(parseInt(v4['batas_awal']) <= total && parseInt(v4['batas_akhir']) >= total){
                                kelas_jabatan = v4['kelas'];
                            }
                        });
                        if(kelas_jabatan == ""){
                            kelas_jabatan = "-";
                        }
                        elm_jabatan.find("div").html(kelas_jabatan);
                        if(index < jabatan_length){
                            evjab(data_kelas_jabatan,data_jenis_jabatan,jabatan_length,index + 1);
                        }
                    }
                },error:function(){
                    elm_jabatan.loading("stop");
                }
            });
        }
    });
}
function print_bagan(){
    var url = window.location.href;
    var arr = url.split("/");
    var host = arr[0] + "//" + arr[2];
    var divToPrint=document.getElementById('jabatan_bagan');

    var newWin=window.open('','Print-Window');

    newWin.document.open();
    var myStyle = '<link rel="stylesheet" href="'+ host  +'/assets/css/tree.css" />';
    newWin.document.write('<html><head>' + myStyle + '</head><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');

    newWin.document.close();

    setTimeout(function(){newWin.close();},10);
}