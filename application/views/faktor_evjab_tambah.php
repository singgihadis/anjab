<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "4";
    $sub_menu = "2";
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
                    <li><a href="/faktor_evjab">Faktor Evjab</a></li>
                    <li>Tambah Faktor Evjab</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Tambah Faktor Evjab</b>
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
                            <label>Kode</label>
                            <input id="kode" name="kode" type="text" class="form-control" placeholder="Kode" required="">
                        </div>
                        <div class="form-group">
                            <label>Uraian</label>
                            <input id="uraian" name="uraian" type="text" class="form-control" placeholder="Uraian" required="">
                        </div>
                        <div class="form-group">
                            <label>Tipe</label><br>
                            <select id="tipe" name="tipe" required="" class="form-control">
                                <option value="">Pilih Tipe</option>
                                <option value="1">Struktural</option>
                                <option value="2">Fungsional / Pelaksana</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Grup</label><br>
                            <select id="grup" name="grup" required="" class="form-control">
                                <option value="">Pilih Tipe</option>
                                <option value="1">Detail</option>
                                <option value="2">Rangkuman</option>
                            </select>
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
<script type="text/javascript" src="/assets/js/page/faktor_evjab_tambah.js"></script>
</body>
</html>
