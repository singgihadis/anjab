var page = 1;
$(document).ready(function(){
    load_data();
    $("#form_filter").validate({
        submitHandler:function(){
            page = 1;
            load_data();
        }
    });
    var cur_year = new Date().getFullYear();
    var html_tahun = "<option value=''>Semua Tahun</option>";
    for(var i=cur_year+1;i>cur_year - 4;i--){
        html_tahun += "<option value='"  + i + "'>" + i + "</option>";
    }
    $("#filter_tahun").html(html_tahun);
    $("#filter_tipe").change(function(){
        page = 1;
        load_data();
    });
    $("#filter_tahun").change(function(){
        page = 1;
        load_data();
    });
});
function load_data(){
    $("#listdata").loading();
    var nama = $("#keyword").val();
    var filter_tipe = $("#filter_tipe").val();
    var filter_tahun = $("#filter_tahun").val();
    $.ajax({
        type:'post',
        url:'/ajax/faktor_evjab',
        data:{page:page,nama:nama,tipe:filter_tipe,tahun:filter_tahun},
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
                $.each(res.data,function(k,v){
                    var tipe = "";
                    if(v['tipe'] == "1"){
                        tipe = "Struktural";
                    }else if(v['tipe'] == "2"){
                        tipe = "Fungsional / Pelaksana";
                    }
                    var grup = "";
                    if(v['grup'] == "1"){
                        grup = "Detail";
                    }else if(v['abk'] == "2"){
                        grup = "Rangkuman";
                    }
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['tahun'] + "</td>";
                    html += "<td>" + v['kode'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td>" + tipe + "</td>";
                    html += "<td>" + grup + "</td>";
                    html += "<td>" + (IsEmpty(v['panduan'])?"":CutTextWithEllipsis(StripTags(v['panduan']))) + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='/faktor_evjab/panduan/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-book'></span></a> ";
                    html += "<a href='/faktor_evjab/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "<br>";
                    html += "<a href='/faktor_evjab/level/" + v['id'] + "' class='btn btn-block btn-sm btn-primary mt-2'><span class='fa fa-list-alt'></span> Level</a>";
                    html += "</td>";
                    html += "</tr>";
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
                        url:'/ajax/faktor_evjab/hapus',
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