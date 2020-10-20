$(document).ready(function(){
    get_opd_name();
    syarat_jabatan_kondisi_fisik();
});
function syarat_jabatan_kondisi_fisik(){
    $("#listdata").loading();
    var jabatan_id = $("#jabatan_id").val();
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_kondisi_fisik',
        data:{jabatan_id:jabatan_id},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/login";
                }else{
                    $("#listdata").html("<tr><td colspan='3'>" + res.msg + "</td></tr>");
                }
            }else{
                var html = "";
                var no = 0;
                $.each(res.data,function(k,v){
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>";
                    html += "<form id='form_update" + k + "'><div class='input-group input-group-sm'>";
                    html += "    <input type='text' class='form-control' placeholder='Keterangan' id='keterangan" + k + "' name='keterangan" + k + "' value='" + v['keterangan'] + "' required='required'>";
                    html += "    <div class='input-group-append'>";
                    html += "        <button class='btn btn-primary' type='submit' data-master-kondisi-fisik-id='" + v['master_kondisi_fisik_id'] + "'><span class='fa fa-save'></span></button>";
                    html += "    </div>";
                    html += "</div></form>";
                    html += "</td>";
                    html += "</tr>";
                });
                $("#listdata").html(html);
                $.each(res.data,function(k,v){
                    $("#form_update" + k).validate({
                        submitHandler : function(form){
                            syarat_jabatan_kondisi_fisik_update(form);
                        },errorPlacement:function(error,element){
                            error.insertAfter(element.parent());
                        }
                    });
                });

            }
        },error:function(){
            $("#listdata").loading("stop");
            $("#listdata").html("<tr><td colspan='3'>Gagal memuat data, coba lagi nanti</td></tr>");
        }
    });
}
function syarat_jabatan_kondisi_fisik_update(itu){
    $(itu).parent().parent().loading();
    var master_kondisi_fisik_id = $(itu).find("button").attr("data-master-kondisi-fisik-id");
    var jabatan_id = $("#jabatan_id").val();
    var keterangan = $(itu).find("input").val();
    var data = new FormData();
    data.append("jabatan_id", jabatan_id);
    data.append("master_kondisi_fisik_id", master_kondisi_fisik_id);
    data.append("keterangan", keterangan);
    $.ajax({
        type:'post',
        url:'/ajax/anjab/syarat_jabatan_kondisi_fisik_update',
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
            }
        },error:function(){
            $(itu).parent().parent().loading("stop");
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