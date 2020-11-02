var page = 1;
$(document).ready(function(){
    load_detail();
});
function load_detail(){
    $("#listdata").loading();
    var master_faktor_evjab_id = $("#master_faktor_evjab_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/faktor_evjab/detail',
        data:{id:master_faktor_evjab_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"]("Gagal memuat data, coba lagi nanti");
                }
            }else{
                var data = res.data[0];
                $("#info").html(" : (" + data['tahun'] + ") " + data['kode'] + " - " + data['uraian']);
                load_data();
            }
        },error:function(){
            $("#listdata").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function load_data(){
    var master_faktor_evjab_id = $("#master_faktor_evjab_id").val();
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/faktor_evjab/level',
        data:{page:page,master_faktor_evjab_id:master_faktor_evjab_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata").html("<tr><td colspan='6'>" + res.msg + "</td></tr>");
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
                    html += "<td>" + FormatAngka(v['level']) + "</td>";
                    html += "<td>" + FormatAngka(v['nilai']) + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td>" + v['dampak'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='/faktor_evjab/level/" + master_faktor_evjab_id  + "/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata").html(html);
                CreateHTMLPagination(page,res.data.length,res.total);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='6'>Gagal memuat data, coba lagi nanti</td></tr>");
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
                        url:'/ajax/faktor_evjab/level/hapus',
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