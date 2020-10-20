<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "5";
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
                    <li><a href="/kamus_kompetensi_skj">Kamus Kompetensi SKJ</a></li>
                    <li><a href="/kamus_kompetensi_skj/level/<?php echo $master_kamus_kompetensi_skj_id; ?>">Level</a></li>
                    <li>Edit Kamus Kompetensi SKJ</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Edit Kamus Kompetensi SKJ</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <input type="hidden" id="id" name="id" value="<?php echo $id; ?>">
                        <input type="hidden" id="master_kamus_kompetensi_skj_id" name="master_kamus_kompetensi_skj_id" value="<?php echo $master_kamus_kompetensi_skj_id; ?>">
                        <div class="form-group">
                            <label>Level</label>
                            <input type="text" id="level" name="level" class="form-control" placeholder="Level" required="">
                        </div>
                        <div class="form-group">
                            <label>Deskripsi</label><br>
                            <textarea id="deskripsi" name="deskripsi" class="form-control" placeholder="Deskripsi"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Indikator Kompetensi</label>
                            <div class="summernote"></div>
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
<script type="text/javascript" src="/assets/js/page/kamus_kompetensi_skj_level_edit.js"></script>
</body>
</html>
