var page = 1;
$(document).ready(function(){
    $("#form_filter").validate({
        submitHandler:function(){
            page = 1;
            load_data();
        }
    });
    $("#filter_tgl").daterangepicker({
        opens: 'left'
    }, function(start, end, label) {
        page = 1;
        load_data();
    });
    load_data();
});
function load_data(){
    $("#listdata").loading();
    var keyword = $("#keyword").val();
    var tgl = $("#filter_tgl").val();
    var arr_tgl = tgl.split(" - ");
    var tgl_mulai = arr_tgl[0].replace(/\//g,"-");
    var tgl_sampai = arr_tgl[1].replace(/\//g,"-");
    $.ajax({
        type:'post',
        url:'/ajax/log_user',
        data:{page:page,keyword:keyword,tgl_mulai:tgl_mulai,tgl_sampai:tgl_sampai},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
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
                    html += "<td>" + v['username'] + "</td>";
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