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
                        <div class="form-group">
                            <label>Standar Kompetensi</label>
                            <select id="standar_kompetensi" name="standar_kompetensi" class="form-control" required="required">
                                <option value="">Pilih Standar Kompetensi</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Kode Kompetensi</label>
                            <input id="kode" name="kode" type="text" class="form-control" placeholder="Kode kompetensi" required="">
                        </div>
                        <div class="form-group">
                            <label>Nama Kompetensi</label>
                            <input id="nama" name="nama" type="text" class="form-control" placeholder="Input nama kompetensi" required="">
                        </div>
                        <div class="form-group">
                            <label>Uraian</label>
                            <textarea id="uraian" name="uraian" required="required" rows="3" class="form-control"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Urusan Pemerintahan</label>
                            <select id="urusan_pemerintahan" name="urusan_pemerintahan" class="form-control" required="required">
                                <option value="">Pilih Urusan Pemerintahan</option>
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
<script type="text/javascript" src="/assets/js/page/kamus_kompetensi_skj_edit.js"></script>
</body>
</html>
