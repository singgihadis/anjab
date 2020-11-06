<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "11";
    $sub_menu = "";
    include("sidebar.php");
    ?>
    <!-- Sidebar -->

    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <?php include("navbar.php"); ?>
        <div class="container-fluid">
            <div class="custom-breadcrumb mb-4">
                <ul>
                    <li>Pengaturan</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-white">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="fa fa-lg fa-file-o mr-1"></span> <b>Pengaturan Logo</b>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" id="card-body">
                            <form id="form_logo">
                                <img src="/assets/img/logo.png" style="max-width: 140px;">
                                <br>
                                <br>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="logo" name="logo" accept="image/jpeg, image/png" required="required">
                                        <label class="custom-file-label" for="logo">Pilih logo</label>
                                    </div>
                                </div>
                                <br>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Upload</button>
                                </div>
                            </form>
                            <div id="logo_alert">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-white">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="fa fa-lg fa-file-o mr-1"></span> <b>Pengaturan Logo pada halaman Login</b>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" id="card-body">
                            <form id="form_logo_login">
                                <img src="/assets/img/logo-login.png" style="max-width: 80px;">
                                <br>
                                <br>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="logo_login" name="logo_login" accept="image/jpeg, image/png" required="required">
                                        <label class="custom-file-label" for="logo_login">Pilih logo</label>
                                    </div>
                                </div>
                                <br>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Upload</button>
                                </div>
                            </form>
                            <div id="logo_login_alert">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-white">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="fa fa-lg fa-file-o mr-1"></span> <b>Pengaturan Icon Website</b>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" id="card-body">
                            <form id="form_favicon">
                                <img src="/assets/img/favicon.png" style="max-width: 32px;">
                                <br>
                                <br>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="favicon" name="favicon" accept="image/jpeg, image/png" required="required">
                                        <label class="custom-file-label" for="favicon">Pilih icon website</label>
                                    </div>
                                </div>
                                <br>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Upload</button>
                                </div>
                            </form>
                            <div id="favicon_alert">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/pengaturan.js"></script>
</body>
</html>
