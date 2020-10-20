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
                    <li>Level</li>
                </ul>
            </div>
            <div class="card">
                <input type="hidden" id="master_kamus_kompetensi_skj_id" name="master_kamus_kompetensi_skj_id" value="<?php echo $master_kamus_kompetensi_skj_id; ?>">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-list-alt mr-1"></span> <b>Daftar Level Kamus Kompetensi SKJ <span id="info"></span></b>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="/kamus_kompetensi_skj/level/<?php echo $master_kamus_kompetensi_skj_id; ?>/tambah" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span> Tambah</a>
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
                                <th>Deskripsi</th>
                                <th>Indikator Kompetensi</th>
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
<script type="text/javascript" src="/assets/js/page/kamus_kompetensi_skj_level.js"></script>
</body>
</html>
