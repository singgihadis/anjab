var page = 1;
$(document).ready(function(){
    load_data();
    $("#form_filter").validate({
        submitHandler:function(){
            page = 1;
            load_data();
        }
    });
    $("#filter_level").change(function(){
        page = 1;
        load_data();
    });
    $("#filter_status").change(function(){
        page = 1;
        load_data();
    });
    $("#password").keyup(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#password").blur(function(){
        $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    });
    $("#hidden_password").val(CryptoJS.MD5($("#password").val()));
    $("#form_update_password").validate({
       submitHandler:function(){
           $.confirm({
               title: 'Konfirmasi',
               content: 'Mengubah password menyebabkan sesi login di hapus dari user yang bersangkutan. Apa anda yakin untuk melanjutkan ?',
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
                           edit_password();
                       }
                   }
               }
           });
       }
    });
});
function edit_password(){
    $("#form_update_password").loading();
    var id = $("#id").val();
    var password = $("#hidden_password").val();
    var data = new FormData();
    data.append("id", id);
    data.append("password", password);
    $.ajax({
        type:'post',
        url:'/ajax/user/edit_password',
        data:data,
        enctype: 'multipart/form-data',
        cache: false,
        contentType: false,
        processData: false,
        success:function(resp){
            $("#form_update_password").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    toastr["error"](res.msg);
                }
            }else{
                toastr["success"](res.msg);
                $("#modal_password").modal("hide");
            }
        },error:function(){
            $("#form_update_password").loading("stop");
            toastr["error"]("Gagal edit data, coba lagi nanti");
        }
    });
}
function load_data(){
    $("#listdata").loading();
    var keyword = $("#keyword").val();
    var level = $("#filter_level").val();
    var status = $("#filter_status").val();
    $.ajax({
        type:'post',
        url:'/ajax/user',
        data:{page:page,keyword:keyword,level:level,status:status},
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
                    var status = "";
                    if(v['status'] == "1"){
                        status = "<span class='badge badge-success'>Aktif</span>";
                    }else{
                        status = "<span class='badge badge-secondary'>Tidak Aktif</span>";
                    }
                    var level = "";
                    if(v['level'] == "1"){
                        level = "Admin";
                    }else{
                        level = "OPD";
                    }
                    no++;
                    html += "<tr>";
                    html += "<td>" + no + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>@" + v['username'] + "</td>";
                    html += "<td>" + level + "</td>";
                    html += "<td>" + v['nama_opd'] + "</td>";
                    html += "<td>" + v['email'] + "</td>";
                    html += "<td>" + status + "</td>";
                    html += "<td class='nowrap'>";
                    html += "<a href='/user/edit/" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-edit'></span></a> ";
                    html += "<a href='javascript:void(0);' onclick='modal_password(this)' data-id='" + v['id'] + "' class='btn btn-sm btn-light'><span class='fa fa-key'></span></a> ";
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
function modal_password(itu){
    var id = $(itu).attr("data-id");
    $("#id").val(id);
    $("#password").val("");
    $("#hidden_password").val("");
    $("#modal_password").modal("show");
}