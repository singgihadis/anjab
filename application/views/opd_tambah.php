<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "2";
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
                    <li><a href="/opd">OPD</a></li>
                    <li>Tambah OPD</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Tambah OPD</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <div class="form-group">
                            <label>Nama OPD</label>
                            <input id="nama" name="nama" type="text" class="form-control" placeholder="Input nama opd" required="">
                        </div>
                        <div class="form-group">
                            <label>Apakah OPD Utama</label>
                            <select id="is_opd_utama" name="is_opd_utama" class="form-control" required="">
                                <option value="0">Tidak</option>
                                <option value="1">Ya</option>
                            </select>
                        </div>
                        <div class="form-group" id="fg_jenis_jabatan" style="display:none;">
                            <label>Jenis Jabatan (Untuk Informasi Pada Dokumen Anjab)</label>
                            <input type="text" id="jenis_jabatan" name="jenis_jabatan" class="form-control">
                        </div>
                        <div class="form-group" id="fg_nama_jabatan" style="display:none;">
                            <label>Nama Jabatan (Untuk Informasi Pada Dokumen Anjab)</label>
                            <input type="text" id="nama_jabatan" name="nama_jabatan" class="form-control">
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
<script type="text/javascript" src="/assets/js/page/opd_tambah.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>
