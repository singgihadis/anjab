var page_upaya_fisik = 1;
var data_syarat_jabatan_upaya_fisik = [];
var data_syarat_jabatan_upaya_fisik_id = [];
$(document).ready(function(){
    $("#form_filter_upaya_fisik").validate({
        submitHandler:function(){
            page_upaya_fisik = 1;
            data_upaya_fisik();
        }
    });
    get_opd_name();
    syarat_jabatan_upaya_fisik();
    $("#modal_upaya_fisik").on("hidden.bs.modal",function(){
        syarat_jabatan_upaya_fisik();
    });
});
function syarat_jabatan_upaya_fisik(){
    data_syarat_jabatan_upaya_fisik_id = [];
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_upaya_fisik',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata").html("<tr><td colspan='3'>" + res.msg + "</td></tr>");
                }
            }else{
                data_syarat_jabatan_upaya_fisik = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    data_syarat_jabatan_upaya_fisik_id.push(v['master_upaya_fisik_id']);
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td class='text-center'>";
                    html += "<a onclick='hapus(this)' data-jabatan-id='" + v['jabatan_id'] + "' data-master-upaya-fisik-id='" + v['master_upaya_fisik_id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata").html(html);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_upaya_fisik(itu){
    page_upaya_fisik = 1;
    $("#modal_upaya_fisik").modal({
        show:true
    });
    data_upaya_fisik();
}
function data_upaya_fisik(){
    $("#listdata_upayafisik").loading();
    var nama = $("#keyword_upayafisik").val();
    $.ajax({
        type:'post',
        url:'/ajax/upaya_fisik',
        data:{page:page_upaya_fisik,nama:nama},
        success:function(resp){
            $("#listdata_upayafisik").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    $("#listdata_upayafisik").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var no = page_upaya_fisik * 10 - 10;
                $.each(res.data,function(k,v){
                    no++;
                    var checked = "";
                    if(data_syarat_jabatan_upaya_fisik_id.indexOf(v['id']) != -1){
                        checked = "checked='checked'";
                    }
                    html += "<tr>";
                    html += "<td>";
                    html += "<div class='custom-control custom-checkbox'>";
                    html += "    <input type='checkbox' class='custom-control-input cbk_upaya_fisik' data-id='" + v['id'] + "' id='cbk" + v['id'] + "' " + checked + ">";
                    html += "        <label class='custom-control-label' for='cbk" + v['id'] + "'></label>";
                    html += "    </div>";
                    html += "</td>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "</tr>";
                });
                $("#listdata_upayafisik").html(html);
                CreateHTMLPagination(page_upaya_fisik,res.data.length,res.total);
                $(".cbk_upaya_fisik").change(function(){
                    if($(this).is(":checked")){
                        //Tambah
                        syarat_jabatan_upaya_fisik_tambah(this)
                    }else{
                        //Hapus
                        syarat_jabatan_upaya_fisik_hapus(this)
                    }
                });
            }
        },error:function(){
            $("#listdata_upayafisik").loading("stop");
            $("#listdata_upayafisik").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function syarat_jabatan_upaya_fisik_tambah(itu){
    $(itu).parent().parent().parent().loading();
    var master_upaya_fisik_id = $(itu).attr("data-id");
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_upaya_fisik_id", master_upaya_fisik_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_upaya_fisik_tambah',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                data_syarat_jabatan_upaya_fisik_id.push(master_upaya_fisik_id);
                toastr["success"](res.msg);
            }
        },error:function(){
            $(itu).parent().parent().parent().loading("stop");
            toastr["error"]("Gagal pilih, coba lagi nanti");
        }
    });
}
function hapus(itu){
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
                    var master_upaya_fisik_id = $(itu).attr("data-master-upaya-fisik-id");
                    var jabatan_id = $(itu).attr("data-jabatan-id");
                    var data = new FormData();
                    data.append("jabatan_id", jabatan_id);
                    data.append("master_upaya_fisik_id", master_upaya_fisik_id);
                    $(itu).parent().parent().loading();
                    $.ajax({
                        type:'post',
                        url:'/ajax/anjab/syarat_jabatan_upaya_fisik_hapus',
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
                                    window.location = "/logout";;
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                toastr["success"](res.msg);
                                syarat_jabatan_upaya_fisik();
                            }
                        },error:function(){
                            $(itu).parent().parent().loading("stop");
                            toastr["error"]("Gagal hapus, coba lagi nanti");
                        }
                    });
                }
            }
        }
    });
}
function syarat_jabatan_upaya_fisik_hapus(itu){
    var master_upaya_fisik_id = $(itu).attr("data-id");
    $(itu).parent().parent().parent().loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_upaya_fisik_id", master_upaya_fisik_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_upaya_fisik_hapus',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $(itu).parent().parent().parent().loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                var index_arr = data_syarat_jabatan_upaya_fisik_id.indexOf(master_upaya_fisik_id);
                if (index_arr !== -1) {
                    data_syarat_jabatan_upaya_fisik_id.splice(index_arr, 1);
                }
                toastr["success"](res.msg);
            }
        },error:function(){
            $(itu).parent().parent().parent().loading("stop");
            toastr["error"]("Gagal remove, coba lagi nanti");
        }
    });
}
function prev_page(){
    page_upaya_fisik = page_upaya_fisik - 1;
    data_upaya_fisik();
}
function next_page(){
    page_upaya_fisik = page_upaya_fisik + 1;
    data_upaya_fisik();
}
function get_opd_name(){
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/get_opd_name',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";;
                }else{
                }
            }else{
                $("#opd_name").html(toTitleCase(res.data[0]['nama']) + " (" + res.data[0]['tahun'] + ")");
                $("#nama_jabatan").html(toTitleCase(res.data[0]['nama_jabatan']));
            }
        },error:function(){
        }
    });
}