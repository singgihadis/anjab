<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "4";
    $sub_menu = "3";
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
                    <li><a href="/kelas_jabatan">Kelas Jabatan</a></li>
                    <li>Tambah Kelas Jabatan</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Tambah Kelas Jabatan</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <div class="form-group">
                            <label>Tahun</label>
                            <select id="tahun" name="tahun" class="form-control" required="">
                                <option value="">Pilih Tahun</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Kelas</label>
                            <input id="kelas" name="kelas" type="text" class="form-control" placeholder="Kelas" required="">
                        </div>
                        <div class="form-group">
                            <label>Batas Awal</label>
                            <input id="batas_awal" name="batas_awal" type="text" class="form-control" placeholder="Batas Awal" required="">
                        </div>
                        <div class="form-group">
                            <label>Batas Akhir</label>
                            <input id="batas_akhir" name="batas_akhir" type="text" class="form-control" placeholder="Batas Akhir" required="">
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/kelas_jabatan_tambah.js"></script>
</body>
</html>
