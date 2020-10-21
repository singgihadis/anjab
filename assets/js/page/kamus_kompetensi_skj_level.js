var page = 1;
$(document).ready(function(){
    load_detail();
});
function load_detail(){
    $("#listdata").loading();
    var master_kamus_kompetensi_skj_id = $("#master_kamus_kompetensi_skj_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/kamus_kompetensi_skj/detail',
        data:{id:master_kamus_kompetensi_skj_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    toastr["error"]("Data tidak tersedia");
                }
            }else{
                var data = res.data[0];
                $("#info").html(" : " + data['kode'] + " - " + data['nama']);
                load_data();
            }
        },error:function(){
            $("#listdata").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function load_data(){
    var master_kamus_kompetensi_skj_id = $("#master_kamus_kompetensi_skj_id").val();
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/kamus_kompetensi_skj/level',
        data:{page:page,master_kamus_kompetensi_skj_id:master_kamus_kompetensi_skj_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata").html("<tr><td colspan='6'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var no = page * 10 - 10;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + FormatAngka(v['level']) + "</td>";
                    html += "<td>" + v['deskripsi'] + "</td>";
                    html += "<td>" + v['indikator_kompetensi'] + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='/kamus_kompetensi_skj/level/" + master_kamus_kompetensi_skj_id  + "/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
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
                        url:'/ajax/kamus_kompetensi_skj/level/hapus',
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