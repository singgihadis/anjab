<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "6";
    $sub_menu = "2";
    include("sidebar.php");
    ?>
    <!-- Sidebar -->

    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <?php include("navbar.php"); ?>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="custom-breadcrumb mb-4">
                        <ul>
                            <li><a href="/anjab">Analisis Jabatan Dan Beban kerja</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>">Input Analisis Jabatan</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>/kualifikasi">Kualifikasi Jabatan</a></li>
                            <li>Pendidikan Formal</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 text-right">
                    <div class="bg-primary text-light py-1 px-2 d-inline-block">
                        <b id="opd_name">-</b>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-8">
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Pendidikan Formal  : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <form id="form_kualifikasi_pendidikan" autocomplete="off">
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Pendidikan</label>
                            <div class="col-sm-10">
                                <select id="pendidikan" name="pendidikan" required="required" class="form-control">
                                    <option value="">Pilih Pendidikan</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Fakultas / Jurusan</label>
                            <div class="col-sm-10">
                                <input type="text" id="jurusan" name="jurusan" class="form-control" />
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-sm btn-primary"><span class="fa fa-save"></span> Simpan</button>
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
<script type="text/javascript" src="/assets/js/page/anjab_edit_kualifikasi_pendidikan.js"></script>
</body>
</html>
