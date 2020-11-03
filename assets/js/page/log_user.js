var page = 1;
var data_log_user = [];
$(document).ready(function(){
    $("#form_filter").validate({
        submitHandler:function(){
            page = 1;
            load_data();
        }
    });
    $("#filter_tgl").daterangepicker({
        opens: 'left',
        locale: {
            format: 'DD/MM/YYYY'
        }
    }, function(start, end, label) {
        page = 1;
        load_data();
    });
    load_data();
});
function modal_detail(itu){
    $("#modal_detail").modal("show");
    var k = $(itu).attr("data-k");
    var param = data_log_user[k]['parameter'];
    if(param != ""){
        var html_detail = "";
        var param_json = $.parseJSON(param);
        html_detail += "<table class='table table-striped'>";
        html_detail += "<tbody>";
        $.each(param_json,function(k,v){
            if(k != "token"){
                html_detail += "<tr><td>" + k + "</td><td> : </td><td>" + v + "</td></tr>";
            }
        });
        html_detail += "</tbody>";
        html_detail += "</table>";
        $("#detail").html(html_detail);
    }else{
        $("#detail").html("-");
    }

}
function load_data(){
    $("#listdata").loading();
    var keyword = $("#keyword").val();
    var tgl = $("#filter_tgl").val();
    var arr_tgl = tgl.split(" - ");
    var tgl_mulai = arr_tgl[0].replace(/\//g,"-");
    var arr_tgl_mulai = tgl_mulai.split("-");
    var new_tgl_mulai = arr_tgl_mulai[2] + "-" + arr_tgl_mulai[1] + "-" + arr_tgl_mulai[0];
    var tgl_sampai = arr_tgl[1].replace(/\//g,"-");
    var arr_tgl_sampai = tgl_sampai.split("-");
    var new_tgl_sampai = arr_tgl_sampai[2] + "-" + arr_tgl_sampai[1] + "-" + arr_tgl_sampai[0];
    $.ajax({
        type:'post',
        url:'/ajax/log_user',
        data:{page:page,keyword:keyword,tgl_mulai:new_tgl_mulai,tgl_sampai:new_tgl_sampai},
        success:function(resp){
            $("#listdata").loading("stop");
            var res = JSON.parse(resp);
            if(res.is_error){
                if(res.must_login){
                    window.location = "/logout";
                }else{
                    $("#listdata").html("<tr><td colspan='6'>" + res.msg + "</td></tr>");
                }
            }else{
                data_log_user = res.data;
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
                    html += "<td>" + v['tgl_insert'] + "</td>";
                    html += "<td>@" + v['username'] + "</td>";
                    html += "<td>" + v['nama'] + "</td>";
                    html += "<td>" + v['aksi'] + "</td>";
                    html += "<td>" + v['ip'] + "</td>";
                    html += "<td>" + v['browser'] + "</td>";
                    //html += "<td><a href='javascript:void(0);' onclick='modal_detail(this)' data-k='" + k + "' class='btn btn-sm btn-light'><span class='fa fa-list'></span></a></td>";
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