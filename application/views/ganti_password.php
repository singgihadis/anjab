<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "12";
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
                    <li>Ganti Password</li>
                </ul>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <div class="card-header bg-white">
                            <div class="row">
                                <div class="col-md-12">
                                    <span class="fa fa-lg fa-key mr-1"></span> <b>Ganti Password</b>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" id="card-body">
                            <form id="form_ganti_password">
                                <div class="form-group">
                                    <label>Password Lama</label>
                                    <input type="password" class="form-control" id="password_lama" name="password_lama" placeholder="Masukkan password lama" required="required" />
                                    <input type="hidden" id="hidden_password_lama" name="hidden_password_lama">
                                </div>
                                <div class="form-group">
                                    <label>Password Baru</label>
                                    <input type="password" class="form-control" id="password_baru" name="password_baru" placeholder="Masukkan password baru" required="required" />
                                    <input type="hidden" id="hidden_password_baru" name="hidden_password_baru">
                                </div>
                                <div class="form-group">
                                    <label>Konfirmasi Password Baru</label>
                                    <input type="password" class="form-control" id="konfirmasi_password_baru" name="konfirmasi_password_baru" placeholder="Masukkan konfirmasi password baru" required="required" />
                                </div>
                                <div class="text-right">
                                    <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Update Password</button>
                                </div>
                                <br>
                            </form>
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
<script type="text/javascript" src="/assets/js/page/ganti_password.js"></script>
</body>
</html>
