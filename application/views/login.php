<!DOCTYPE html>
<html class="login">
<?php
$title = "";
include("head.php"); ?>
<body class="body">
<div class="container">
    <br>
    <div class="text-right">
        <div class="dropdown">
            <button class="btn btn-sm btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                <span class="fa fa-question-circle"></span> Panduan
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="/assets/doc/manual_book.pdf?v=<?php echo $this->config->item("js_version"); ?>" target="_blank">PDF</a>
                <a class="dropdown-item" href="/assets/doc/manual_book/MembukaAplikasi.html?v=<?php echo $this->config->item("js_version"); ?>" target="_blank">HTML</a>
                <a href="/assets/doc/tutorial_opd.mp4?v=<?php echo $this->config->item("js_version"); ?>" target="_blank" class="dropdown-item">Video (OPD)</a>
            </div>
        </div>
    </div>
    <br><br>
    <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
            <div class="row no-gutters login-card">
                <div class="col-md-7 card-information">
                    <div class="wallpaper">

                    </div>
                    <div class="background-wrapper">
                        <div class="information">
                            <div class="information-wrapper">
                                <h4><b>SIJABER</b></h4>
                                <div class="desc">Aplikasi Analisis Jabatan dan Analisis Beban Kerja (Informasi Jabatan)</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card rounded-0">
                        <div class="card-body login-form-card px-5">
                            <div class="text-center">
                                <img src="/assets/img/logo-login.png?t=<?php echo time(); ?>" class="logo-login" />
                            </div>
                            <div class="text-center">
                                <h6><b>Login ke Dashboard</b></h6>
                            </div>
                            <br>
                            <form id="form_login">
                                <div class="form-group">
                                    <label>Username</label>
                                    <input type="text" class="form-control" id="username" name="username" placeholder="Username" required />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" required />
                                    <input type="hidden" id="hidden_password" name="hidden_password" />
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">LOGIN</button>
                            </form>
                            <br>
                            <div class="text-center">
                                @<?php  echo date("Y"); ?>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>
</body>
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/login.js"></script>
</body>
</html>
