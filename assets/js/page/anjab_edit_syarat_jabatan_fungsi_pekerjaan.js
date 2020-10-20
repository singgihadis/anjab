$(document).ready(function(){
    get_opd_name();
    $("#form_fungsi_pekerjaan").validate({
       submitHandler:function(){
           syarat_jabatan_fungsi_pekerjaan_update();
       }
    });
    syarat_jabatan_fungsi_pekerjaan();
});
function syarat_jabatan_fungsi_pekerjaan(){
    $("#form_fungsi_pekerjaan").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_fungsi_pekerjaan',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#form_fungsi_pekerjaan").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    dropdown_fungsi_pekerjaan_data("");
                    dropdown_fungsi_pekerjaan_orang("");
                    dropdown_fungsi_pekerjaan_benda("");
                }
            }else{
                var data = res.data[0];
                dropdown_fungsi_pekerjaan_data(data['master_fungsi_pekerjaan_data_id']);
                dropdown_fungsi_pekerjaan_orang(data['master_fungsi_pekerjaan_orang_id']);
                dropdown_fungsi_pekerjaan_benda(data['master_fungsi_pekerjaan_benda_id']);
            }
        },error:function(){
            $("#form_fungsi_pekerjaan").loading("stop");
            toastr["error"]("Gagal memuat data, coba lagi nanti");
        }
    });
}
function dropdown_fungsi_pekerjaan_data(master_fungsi_pekerjaan_data_id){
    $("#fungsi_pekerjaan_data").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/fungsi_pekerjaan_data',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#fungsi_pekerjaan_data").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                html += "<option value=''>Pilih</option>";
                $.each(res.data,function(k,v){
                    if(master_fungsi_pekerjaan_data_id == v['id']){
                        html += "<option value='" + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#fungsi_pekerjaan_data").html(html);
            }
        },error:function(){
            $("#fungsi_pekerjaan_data").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_fungsi_pekerjaan_orang(master_fungsi_pekerjaan_orang_id){
    $("#fungsi_pekerjaan_orang").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/fungsi_pekerjaan_orang',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#fungsi_pekerjaan_orang").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                html += "<option value=''>Pilih</option>";
                $.each(res.data,function(k,v){
                    if(master_fungsi_pekerjaan_orang_id == v['id']){
                        html += "<option value='" + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#fungsi_pekerjaan_orang").html(html);
            }
        },error:function(){
            $("#fungsi_pekerjaan_orang").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function dropdown_fungsi_pekerjaan_benda(master_fungsi_pekerjaan_benda_id){
    $("#fungsi_pekerjaan_benda").html("<option value=''>Memuat Data ...</option>");
    $.ajax({
        type:'post',
        url:'/ajax/fungsi_pekerjaan_benda',
        data:{page:"x",nama:""},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#fungsi_pekerjaan_benda").html("<option value=''>" + res.msg + "</option>");
                }
            }else{
                var html = "";
                html += "<option value=''>Pilih</option>";
                $.each(res.data,function(k,v){
                    if(master_fungsi_pekerjaan_benda_id == v['id']){
                        html += "<option value='" + v['id'] + "' selected='selected'>" + v['nama'] + "</option>";
                    }else{
                        html += "<option value='" + v['id'] + "'>" + v['nama'] + "</option>";
                    }
                });
                $("#fungsi_pekerjaan_benda").html(html);
            }
        },error:function(){
            $("#fungsi_pekerjaan_benda").html("<option value=''>Gagal memuat data, coba lagi nanti</option>");
        }
    });
}
function syarat_jabatan_fungsi_pekerjaan_update(){
    $("#form_fungsi_pekerjaan").loading();
    var jabatan_id = $("#jabatan_id").val();
    var fungsi_pekerjaan_data = $("#fungsi_pekerjaan_data").val();
    var fungsi_pekerjaan_orang = $("#fungsi_pekerjaan_orang").val();
    var fungsi_pekerjaan_benda = $("#fungsi_pekerjaan_benda").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_fungsi_pekerjaan_data_id", fungsi_pekerjaan_data);
    data.append("master_fungsi_pekerjaan_orang_id", fungsi_pekerjaan_orang);
    data.append("master_fungsi_pekerjaan_benda_id", fungsi_pekerjaan_benda);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_fungsi_pekerjaan_update',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_fungsi_pekerjaan").loading("stop");
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
            $("#form_fungsi_pekerjaan").loading("stop");
            toastr["error"]("Gagal pilih, coba lagi nanti");
        }
    });
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