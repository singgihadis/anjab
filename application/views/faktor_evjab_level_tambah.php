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
                    <li><a href="/faktor_evjab/level/<?php echo $master_faktor_evjab_id; ?>">Level</a></li>
                    <li>Tambah Level Faktor Evjab</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Tambah Level Faktor Evjab</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <input type="hidden" id="master_faktor_evjab_id" name="master_faktor_evjab_id" value="<?php echo $master_faktor_evjab_id; ?>">
                        <div class="form-group">
                            <label>Level</label>
                            <input type="text" id="level" name="level" class="form-control" placeholder="Level" required="">
                        </div>
                        <div class="form-group">
                            <label>Nilai</label>
                            <input id="nilai" name="nilai" type="text" class="form-control" placeholder="Nilai" required="">
                        </div>
                        <div class="form-group">
                            <label>Ruang Lingkup / Uraian</label>
                            <div class="summernote"></div>
                        </div>
                        <div class="form-group">
                            <label>Dampak</label><br>
                            <textarea id="dampak" name="dampak" class="form-control" placeholder="Dampak"></textarea>
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
<script type="text/javascript" src="/assets/js/page/faktor_evjab_level_tambah.js"></script>
</body>
</html>
