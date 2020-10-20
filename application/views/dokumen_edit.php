<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "2";
    $sub_menu = "1";
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
                    <li><a href="/dokumen">Dokumen</a></li>
                    <li>Edit Dokumen</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Edit Dokumen</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <input type="hidden" id="id" name="id" value="<?php echo $id; ?>">
                        <div class="form-group">
                            <label>Nama Dokumen</label>
                            <input id="nama" name="nama" type="text" class="form-control" placeholder="Input nama dokumen" required="">
                        </div>
                        <div class="form-group">
                            <label>Tampil</label>
                            <br>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="tampil_ya" name="tampil" class="custom-control-input" checked>
                                <label class="custom-control-label" for="tampil_ya">Ya</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="tampil_tidak" name="tampil" class="custom-control-input">
                                <label class="custom-control-label" for="tampil_tidak">Tidak</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Dokumen</label>
                            <div class="input-group mb-3">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="dokumen" name="dokumen" accept="application/pdf">
                                    <label class="custom-file-label" for="dokumen">Pilih pdf</label>
                                </div>
                            </div>
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
<script type="text/javascript" src="/assets/js/page/dokumen_edit.js"></script>
</body>
</html>
