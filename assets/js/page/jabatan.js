var page = 1;
$(document).ready(function(){
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
    dropdown_opd();
    dropdown_jenis_jabatan();
    $("#filter_opd").change(function(){
        if($("#filter_opd").val() == ""){
            $("#listdata").html("<tr><td colspan='8'>Silahkan pilih OPD terlebih dahulu</td></tr>");
        }else{
            $("#sub_title").html(" - " + toTitleCase($("#filter_opd").find("option:selected").html()));
            page = 1;
            load_data();
        }
    });
    $("#filter_jenis_jabatan").change(function(){
        if($("#filter_opd").val() == ""){
            $("#listdata").html("<tr><td colspan='8'>Silahkan pilih OPD terlebih dahulu</td></tr>");
        }else{
            $("#sub_title").html(" - " + toTitleCase($("#filter_opd").find("option:selected").html()));
            page = 1;
            load_data();
        }
    });
    $("#filter_tahun").change(function(){
        if($("#filter_opd").val() == ""){
            $("#listdata").html("<tr><td colspan='8'>Silahkan pilih OPD terlebih dahulu</td></tr>");
        }else{
            page = 1;
            load_data();
        }
    });
    $("#form_filter").validate({
        submitHandler:function(){
            if($("#filter_opd").val() == ""){
                $("#listdata").html("<tr><td colspan='8'>Silahkan pilih OPD terlebih dahulu</td></tr>");
            }else{
                page = 1;
                load_data();
            }
        }
    })
});
function load_data(){
    $("#listdata").loading();
    var nama = $("#keyword").val();
    var opd = $("#filter_opd").val();
    var tahun = $("#filter_tahun").val();
    var jenis_jabatan = $("#filter_jenis_jabatan").val();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan',
        data:{page:"x",nama:nama,master_opd_id:opd,tahun:tahun,master_jenis_jabatan:jenis_jabatan},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata").html("<tr><td colspan='8'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var no = page * 10 - 10;

                var no1 = no;
                $.each(res.data,function(k,v){
                    if(v['tingkat'] == 0){
                        no1++;
                        html += html_data_builder(v,no1);
                        var jabatan_id_0 = v['id'];
                        var no2 = no;
                        $.each(res.data,function(k,v){
                            if(v['tingkat'] == 1 && jabatan_id_0 == v['jabatan_id']){
                                no2++;
                                html += html_data_builder(v,no1 + "." + no2);
                                var jabatan_id_1 = v['id'];
                                var no3 = no;
                                $.each(res.data,function(k,v){
                                    if(v['tingkat'] == 2 && jabatan_id_1 == v['jabatan_id']){
                                        no3++;
                                        html += html_data_builder(v,no1 + "." + no2 + "." + no3);
                                        var jabatan_id_2 = v['id'];
                                        var no4 = no;
                                        $.each(res.data,function(k,v){
                                            if(v['tingkat'] == 3 && jabatan_id_2 == v['jabatan_id']){
                                                no4++;
                                                html += html_data_builder(v,no1 + "." + no2 + "." + no3 + "." + no4);
                                                var jabatan_id_3 = v['id'];
                                                var no5 = no;
                                                $.each(res.data,function(k,v){
                                                    if(v['tingkat'] == 4 && jabatan_id_3 == v['jabatan_id']){
                                                        no5++;
                                                        html += html_data_builder(v,no1 + "." + no2 + "." + no3 + "." + no4 + "." + no5);
                                                        var jabatan_id_4= v['id'];
                                                        var no6 = no;
                                                        $.each(res.data,function(k,v){
                                                            if(v['tingkat'] == 5 && jabatan_id_4 == v['jabatan_id']){
                                                                no6++;
                                                                html += html_data_builder(v,no1 + "." + no2 + "." + no3 + "." + no4 + "." + no5 + "." + no6);
                                                                var jabatan_id_5= v['id'];
                                                                var no7 = no;
                                                                $.each(res.data,function(k,v){
                                                                    if(v['tingkat'] == 6 && jabatan_id_5 == v['jabatan_id']){
                                                                        no7++;
                                                                        html += html_data_builder(v,no1 + "." + no2 + "." + no3 + "." + no4 + "." + no5 + "." + no6 + "." + no7);
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

                $("#listdata").html(html);
                CreateHTMLPagination(page,res.data.length,res.total);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='8'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function html_data_builder(v,no){
    var html = "";
    var tipe = "";
    if(v['tipe'] == "1"){
        tipe = "Struktural";
    }else if(v['tipe'] == "2"){
        tipe = "Fungsional/Pelaksana";
    }
    var abk = "";
    if(v['abk'] == "1"){
        abk = "Rumusan";
    }else if(v['abk'] == "2"){
        abk = "Inputan";
    }
    html += "<tr>";
    html += "<td><b>" +  no + "</b></td>";
    html += "<td class='nowrap'>";
    html += "<a href='javascript:void(0);' onclick='move_up(this)' data-order='" + v['order']  +"' data-jabatan-id='" + v['jabatan_id']  +"' data-tingkat='" + v['tingkat']  +"' class='btn btn-sm btn-light'><span class='fa fa-angle-up'></span></a> ";
    html += "<a href='javascript:void(0);' onclick='move_down(this)' data-order='" + v['order']  +"' data-jabatan-id='" + v['jabatan_id']  +"' data-tingkat='" + v['tingkat']  +"' class='btn btn-sm btn-light'><span class='fa fa-angle-down'></span></a>";
    html += "</td>";
    html += "<td>" + v['nama'] + "</td>";
    html += "<td>" + v['unit'] + "</td>";
    html += "<td>" + v['nama_jenis_jabatan'] + "</td>";
    html += "<td>" + (!IsEmpty(v['nama_eselon'])?v['nama_eselon']:"") + "</td>";
    html += "<td>" + FormatAngka(v['jml_pegawai']) + "</td>";
    html += "<td class='nowrap'>";
    html += "<a href='/jabatan/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
    html += "</td>";
    html += "</tr>";
    return html;
}
function move_up(itu){
    var order = $(itu).attr("data-order");
    var jabatan_id = $(itu).attr("data-jabatan-id");
    var tingkat = $(itu).attr("data-tingkat");
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan/move_up',
        data:{order:order,jabatan_id:jabatan_id,tingkat:tingkat},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                load_data();
            }
        },error:function(resp){
            $("#listdata").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function move_down(itu){
    var order = $(itu).attr("data-order");
    var jabatan_id = $(itu).attr("data-jabatan-id");
    var tingkat = $(itu).attr("data-tingkat");
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/jabatan/move_down',
        data:{order:order,jabatan_id:jabatan_id,tingkat:tingkat},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                load_data();
            }
        },error:function(resp){
            $("#listdata").loading("stop");
            toastr["error"]("Gagal mengubah urutan, coba lagi nanti");
        }
    });
}
function prev_page(){
    page = page - 1;
    load_data();
}
function next_page(){
    page = page + 1;
    load_data();
}
function hapus(itu){
    var id = $(itu).attr("data-id");
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
                        url:'/ajax/jabatan/hapus',
                        data:{id:id},
                        success:function(resp){
                            $(itu).parent().parent().loading("stop");
                            var res = JSON.parse(resp);
                            if(res.is_error){
                                if(res.must_login){
                                    window.location = "/logout";;
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                toastr["success"]("Berhasil menghapus data");
                                load_data();
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
            }
        },error:function(){
            $("#filter_opd").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_jenis_jabatan(){
    $("#filter_jenis_jabatan").html("<option value=''>Memuat Data ...</option>");
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
                    $("#filter_jenis_jabatan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Semua Jenis Jabatan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='"  + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#filter_jenis_jabatan").html(html);
                $("#filter_jenis_jabatan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#filter_jenis_jabatan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}