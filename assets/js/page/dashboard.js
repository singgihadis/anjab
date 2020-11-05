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
        total_jabatan();
    });
    $("#filter_opd").change(function(){
        total_jabatan();
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
                var html = "";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#filter_opd").html(html);
                $("#filter_opd").select2({
                    theme: "bootstrap"
                });
                total_jabatan();
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
                }
            }else{
                kelas_jabatan(function(kelas_jabatan_data){
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
                                                            var json_data5 = [];
                                                            var jabatan_id_4= v['id'];
                                                            $.each(res.data,function(k,v){
                                                                if(v['tingkat'] == 5 && jabatan_id_4 == v['jabatan_id']){
                                                                    var json_data6 = [];
                                                                    var jabatan_id_5= v['id'];
                                                                    $.each(res.data,function(k,v){
                                                                        if(v['tingkat'] == 6 && jabatan_id_5 == v['jabatan_id']){
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
                    console.log(JSON.stringify(json_data));
                    html = html_builder(json_data,kelas_jabatan_data);
                    $("#jabatan_bagan").html(html);
                });
            }
        },error:function(){
            $("#jabatan_bagan").loading("stop");
        }
    });
}
function html_builder(data_jabatan,data_kelas_jabatan){
    var html = "";
    html += "<ul class='tree'>";
    if(data_jabatan.length > 0){
        $.each(data_jabatan,function(k,v){
            html += "<li>";
            html += "<span>" + v['v']['nama'] + "</span>";
            if(v['child'].length > 0){
                html += "<ul>";
                $.each(v['child'],function(k2,v2){
                    html += "<li>";
                    html += "<span>" + v2['v']['nama'] + "</span>";
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