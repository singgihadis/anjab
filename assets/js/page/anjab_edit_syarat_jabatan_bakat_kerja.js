var page_bakat_kerja = 1;
var data_syarat_jabatan_bakat_kerja = [];
var data_syarat_jabatan_bakat_kerja_id = [];
$(document).ready(function(){
    $("#form_filter_bakat_kerja").validate({
        submitHandler:function(){
            page_bakat_kerja = 1;
            data_bakat_kerja();
        }
    });
    get_opd_name();
    syarat_jabatan_bakat_kerja();
    $("#modal_bakat_kerja").on("hidden.bs.modal",function(){
        syarat_jabatan_bakat_kerja();
    });
});
function syarat_jabatan_bakat_kerja(){
    data_syarat_jabatan_bakat_kerja_id = [];
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_bakat_kerja',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                data_syarat_jabatan_bakat_kerja = res.data;
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    data_syarat_jabatan_bakat_kerja_id.push(v['master_bakat_kerja_id']);
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "<td class='text-center'>";
                    html += "<a onclick='hapus(this)' data-jabatan-id='" + v['jabatan_id'] + "' data-master-bakat-kerja-id='" + v['master_bakat_kerja_id'] + "' href='javascript:void(0);' class='btn btn-sm btn-danger'><span class='fa fa-trash'></span></a>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata").html(html);
            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function modal_bakat_kerja(itu){
    page_bakat_kerja = 1;
    $("#modal_bakat_kerja").modal({
        show:true
    });
    data_bakat_kerja();
}
function data_bakat_kerja(){
    $("#listdata_bakatkerja").loading();
    var nama = $("#keyword_bakatkerja").val();
    $.ajax({
        type:'post',
        url:'/ajax/bakat_kerja',
        data:{page:page_bakat_kerja,nama:nama},
        success:function(resp){
            $("#listdata_bakatkerja").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata_bakatkerja").html("<tr><td colspan='4'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var no = page_bakat_kerja * 10 - 10;
                $.each(res.data,function(k,v){
                    no++;
                    var checked = "";
                    if(data_syarat_jabatan_bakat_kerja_id.indexOf(v['id']) != -1){
                        checked = "checked='checked'";
                    }
                    html += "<tr>";
                    html += "<td>";
                    html += "<div class='custom-control custom-checkbox'>";
                    html += "    <input type='checkbox' class='custom-control-input cbk_bakat_kerja' data-id='" + v['id'] + "' id='cbk" + v['id'] + "' " + checked + ">";
                    html += "        <label class='custom-control-label' for='cbk" + v['id'] + "'></label>";
                    html += "    </div>";
                    html += "</td>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + v['uraian'] + "</td>";
                    html += "</tr>";
                });
                $("#listdata_bakatkerja").html(html);
                CreateHTMLPagination(page_bakat_kerja,res.data.length,res.total);
                $(".cbk_bakat_kerja").change(function(){
                    if($(this).is(":checked")){
                        //Tambah
                        syarat_jabatan_bakat_kerja_tambah(this)
                    }else{
                        //Hapus
                        syarat_jabatan_bakat_kerja_hapus(this)
                    }
                });
            }
        },error:function(){
            $("#listdata_bakatkerja").loading("stop");
            $("#listdata_bakatkerja").html("<tr><td colspan='4'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function syarat_jabatan_bakat_kerja_tambah(itu){
    var master_bakat_kerja_id = $(itu).attr("data-id");
    $(itu).parent().parent().parent().loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_bakat_kerja_id", master_bakat_kerja_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_bakat_kerja_tambah',
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
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
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
                    var master_bakat_kerja_id = $(itu).attr("data-master-bakat-kerja-id");
                    var jabatan_id = $(itu).attr("data-jabatan-id");
                    var data = new FormData();
                    data.append("jabatan_id", jabatan_id);
                    data.append("master_bakat_kerja_id", master_bakat_kerja_id);
                    $(itu).parent().parent().loading();
                    $.ajax({
                        type:'post',
                        url:'/ajax/anjab/syarat_jabatan_bakat_kerja_hapus',
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
                                    window.location = "/login";
                                }else{
                                    toastr["error"](res.msg);
                                }
                            }else{
                                toastr["success"](res.msg);
                                syarat_jabatan_bakat_kerja();
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
function syarat_jabatan_bakat_kerja_hapus(itu){
    var master_bakat_kerja_id = $(itu).attr("data-id");
    $(itu).parent().parent().parent().loading();
    var jabatan_id = $("#jabatan_id").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_bakat_kerja_id", master_bakat_kerja_id);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_bakat_kerja_hapus',
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
                    window.location = "/login";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
            }
        },error:function(){
            $(itu).parent().parent().parent().loading("stop");
            toastr["error"]("Gagal remove, coba lagi nanti");
        }
    });
}
function prev_page(){
    page_bakat_kerja = page_bakat_kerja - 1;
    data_bakat_kerja();
}
function next_page(){
    page_bakat_kerja = page_bakat_kerja + 1;
    data_bakat_kerja();
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
                    window.location = "/login";
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