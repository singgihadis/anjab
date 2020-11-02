var page = 1;
$(document).ready(function(){
    dropdown_standar_kompetensi();
    dropdown_urusan_pemerintahan();
    $("#filter_standar_kompetensi").change(function(){
        page = 1;
        load_data();
    });
    $("#filter_urusan_pemerintahan").change(function(){
        page = 1;
        load_data();
    });
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
    var filter_standar_kompetensi = $("#filter_standar_kompetensi").val();
    var filter_urusan_pemerintahan = $("#filter_urusan_pemerintahan").val();
    $.ajax({
        type:'post',
        url:'/ajax/kamus_kompetensi_skj',
        data:{page:page,nama:nama,master_standar_kompetensi_id:filter_standar_kompetensi,master_urusan_pemerintahan_id:filter_urusan_pemerintahan},
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
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['kode'] + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td>" + v['nama_urusan_pemerintahan'] + "</td>";
                    html += "<td class='nowrap'>";
                   html += "<a href='/kamus_kompetensi_skj/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a onclick='hapus(this)' data-id='" + v['id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "<br>";
                    html += "<a href='/kamus_kompetensi_skj/level/" + v['id'] + "' class='btn btn-block btn-sm btn-primary mt-2'><span class='fa fa-list-alt'></span> Level</a>";
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
                        url:'/ajax/kamus_kompetensi_skj/hapus',
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
function dropdown_standar_kompetensi(){
    $("#standar_kompetensi").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/standar_kompetensi',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#filter_standar_kompetensi").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Semua Standar Kompetensi</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#filter_standar_kompetensi").html(html);
                $("#filter_standar_kompetensi").select2({

                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#filter_standar_kompetensi").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_urusan_pemerintahan(){
    $("#filter_urusan_pemerintahan").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/urusan_pemerintahan',
        data:{page:"x",nama:""},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#filter_urusan_pemerintahan").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "<option value=''>Semua Urusan Pemerintahan</option>";
                $.each(res.data,function(k,v){
                    html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                });
                $("#filter_urusan_pemerintahan").html(html);
                $("#filter_urusan_pemerintahan").select2({
                    theme: "bootstrap"
                });
            }
        },error:function(){
            $("#filter_urusan_pemerintahan").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}