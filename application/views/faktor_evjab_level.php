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
                    <li>Level</li>
                </ul>
            </div>
            <div class="card">
                <input type="hidden" id="master_faktor_evjab_id" name="master_faktor_evjab_id" value="<?php echo $master_faktor_evjab_id; ?>">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-list-alt mr-1"></span> <b>Daftar Level Faktor EvJab <span id="info"></span></b>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="/faktor_evjab/level/<?php echo $master_faktor_evjab_id; ?>/tambah" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span> Tambah</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Level</th>
                                <th>Nilai</th>
                                <th>Ruang Lingkup / Uraian</th>
                                <th>Dampak</th>
                                <th>Aksi</th>
                            </tr>
                            </thead>
                            <tbody id="listdata">

                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6" id="info_page">

                        </div>
                        <div class="col-md-6 text-right" id="pagination">

                        </div>
                    </div>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/faktor_evjab_level.js"></script>
</body>
</html>
