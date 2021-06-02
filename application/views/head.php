<head>
    <title><?php
        if(!isset($title)){
            $title = "";
        }
        if($title != ""){
            echo $title;
        }else{
            echo "SIJABER";
        }
        ?> | Aplikasi Analisis Jabatan dan Analisis Beban Kerja (Informasi Jabatan)</title>
    <link rel="icon" type="image/png" href="/assets/img/favicon.png?t=<?php echo time(); ?>" />
    <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
    <link href="/assets/css/bootstrap.css" rel="stylesheet" />
    <link href="/assets/css/toastr.css" rel="stylesheet" />
    <link href="/assets/css/loading.css" rel="stylesheet" />
    <link href="/assets/css/select2.min.css" rel="stylesheet" />
    <link href="/assets/css/jquery-confirm.min.css" rel="stylesheet" />
    <link href="/assets/css/simple-sidebar.css" rel="stylesheet" />
    <link href="/assets/css/summernote-bs4.css" rel="stylesheet" />
    <link href="/assets/css/select2-bootstrap-theme.css" rel="stylesheet" />
    <link href="/assets/css/daterangepicker.css" rel="stylesheet" />
    <link href="/assets/css/tree.css" rel="stylesheet">
    <link href="/assets/css/global.css?v=?v=<?php echo $this->config->item("js_version"); ?>" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
