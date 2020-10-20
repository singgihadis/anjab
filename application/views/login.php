<!DOCTYPE html>
<html class="login">
<?php
$title = "";
include("head.php"); ?>
<body class="body">
<div class="container">
    <br><br>
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
                                <h4><b>ANJAB</b></h4>
                                <div class="desc">Analisa Jabatan, Analisa Beban Kerja dan Evaluasi Jabatan</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <div class="card rounded-0">
                        <div class="card-body login-form-card px-5">
                            <div class="text-center">
                                <img src="/assets/img/logo-login.png" class="logo-login" />
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
                                @2020
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
