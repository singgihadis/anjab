$(document).ready(function(){
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});
jQuery.extend(jQuery.validator.messages, {
    required: "Wajib diisi.",
    remote: "Please fix this field.",
    email: "Silahkan masukkan email yang valid.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Silahkan masukkan isian yang sama.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
function CreateHTMLPagination(page,jml,total){
    var no_awal = page * 10 - 10 + 1;
    var no_akhir = no_awal - 1 + jml;
    var jml_hal = Math.ceil(total / 10);
    $("#info_page").html("Menampilkan " + FormatAngka(no_awal) + " - " + FormatAngka(no_akhir) + " dari " + FormatAngka(total) + " data");
    var html = "";
    html += "<nav  class='custom-pagination'>";
    html += "                                <ul class='list-inline'>";
    html += "                                    <li class='list-inline-item'>";
    if(page == 1){
        html += "                                        <a class='btn btn-sm btn-secondary disabled' href='javascript:void(0);'>&nbsp;<span class='fa fa-angle-left'></span>&nbsp;</a>";
    }else{
        html += "                                        <a class='btn btn-sm btn-secondary' onclick='prev_page()' href='javascript:void(0);'>&nbsp;<span class='fa fa-angle-left'></span>&nbsp;</a>";
    }
    html += "                                    </li>";
    html += "                                    <li class='list-inline-item'>";
    html += "                                        <a class='btn btn-sm btn-primary active' href='javascript:void(0);'>" + FormatAngka(page) + "</a>";
    html += "                                    </li>";
    html += "                                    <li class='list-inline-item'>";
    if(jml_hal <= page){
        html += "                                        <a class='btn btn-sm btn-secondary disabled' href='javascript:void(0);'>&nbsp;<span class='fa fa-angle-right'></span>&nbsp;</a>";
    }else{
        html += "                                        <a class='btn btn-sm btn-secondary'  onclick='next_page()' href='javascript:void(0);'>&nbsp;<span class='fa fa-angle-right'></span>&nbsp;</a>";
    }
    html += "                                    </li>";
    html += "                                </ul>";
    html += "                            </nav>";
    $("#pagination").html(html);
}
function IsEmpty(isi){
    if(isi == 0 || isi == "" || isi == null){
        return true;
    }else{
        return false;
    }
}
function CutTextWithEllipsis(x){
    if(x.length > 200){
        return x.substr(0,200).toString() + " ...";
    }else{
        return x;
    }
}
function toTitleCase(str) {
    str = str.toLowerCase();
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
function StripTags(str) {
    var rex = /(<([^>]+)>)/ig;
    if(str != null){
        return str.replace(rex , "");
    }else{
        return "";
    }
}
function FormatAngka(str,zero_to_empty){
    if(zero_to_empty === undefined) zero_to_empty=false;
    if(str){
        if(zero_to_empty == true){
            if(str.toString() == "0"){
                return str;
            }
        }
        str = str.toString().replace(/\D/g,'');
        if(str != ""){
            str = parseInt(str);
        }
        return str.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }else{
        if(zero_to_empty == true){
            return "";
        }else{
            return 0;
        }
    }
}
function StrToNumber(str){
    str = str.replace("Rp. ","").replace(/\./g,"");
    return parseInt(str);
}
function StrToFloat(str){
    if(str == ""){
        return 0;
    }else{
        return parseFloat(str);
    }
}
function URLSeo(Text){
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'')
        .replace(/ +/g,'-')
        ;
}
function NumberMonthtoBulan(bln){
    var bulan = "";
    switch(bln) {
        case 0:
            bulan = "Januari";
            break;
        case 1:
            bulan = "Februari";
            break;
        case 2:
            bulan = "Maret";
            break;
        case 3:
            bulan = "April";
            break;
        case 4:
            bulan = "Mei";
            break;
        case 5:
            bulan = "Juni";
            break;
        case 6:
            bulan = "Juli";
            break;
        case 7:
            bulan = "Agustus";
            break;
        case 8:
            bulan = "September";
            break;
        case 9:
            bulan = "Oktober";
            break;
        case 10:
            bulan = "November";
            break;
        case 11:
            bulan = "Desember";
            break;
        default:
            bulan = "";
    }
    return bulan;
}
function show_localloader(){
    $("#loader").show();
}
function hide_localloader(){
    $("#loader").hide();
}
function round_decimal_places(x,decimal_places,all_with_zero){
    if(all_with_zero){
        return parseFloat(x).toFixed(decimal_places);
    }else{
        var x_string = x.toString();
        if(x_string.indexOf(".") != -1){
            if(x_string.split(".")[1].length > decimal_places){
                return parseFloat(x).toFixed(decimal_places);
            }else{
                return x;
            }
        }else{
            return x;
        }
    }
}