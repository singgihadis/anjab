var page = 1;
$(document).ready(function(){
    load_data();
    $("#form_filter").validate({
        submitHandler:function(){
            page = 1;
            load_data();
        }
    });
});
function load_data(){
    $("#listdata").loading();
    var nama = $("#keyword").val();
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan',
        data:{page:page,nama:nama},
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
                        tipe = "Fungsional/Pelaksana";
                    }
                    var abk = "";
                    if(v['abk'] == "1"){
                        abk = "Rumusan";
                    }else if(v['abk'] == "2"){
                        abk = "Inputan";
                    }
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>";
                    html += "<a href='javascript:void(0);' onclick='move_up(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-up'></span></a> ";
                    html += "<a href='javascript:void(0);' onclick='move_down(" + v['urutan'] + ")' class='btn btn-sm btn-light'><span class='fa fa-angle-down'></span></a>";
                    html += "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + tipe + "</td>";
                    html += "<td>" + abk + "</td>";
                    html += "<td>";
                    html += "<a href='/jenis_jabatan/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
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
                        url:'/ajax/jenis_jabatan/hapus',
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
function move_up(urutan){
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan/move_up',
        data:{urutan:urutan},
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
function move_down(urutan){
    $("#listdata").loading();
    $.ajax({
        type:'post',
        url:'/ajax/jenis_jabatan/move_down',
        data:{urutan:urutan},
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