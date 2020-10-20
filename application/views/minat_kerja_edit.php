<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "3";
    $sub_menu = "6";
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
                    <li><a href="/minat_kerja">Minat Kerja</a></li>
                    <li>Edit Minat Kerja</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Edit Minat Kerja</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <input type="hidden" id="id" name="id" value="<?php echo $id; ?>">
                        <div class="form-group">
                            <label>Nama Bakat Kerja</label>
                            <input id="nama" name="nama" type="text" class="form-control" placeholder="Input nama minat kerja" required="">
                        </div>
                        <div class="form-group">
                            <label>Uraian</label>
                            <textarea id="uraian" name="uraian" placeholder="Input uraian" class="form-control" required=""></textarea>
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
<script type="text/javascript" src="/assets/js/page/minat_kerja_edit.js"></script>
</body>
</html>
