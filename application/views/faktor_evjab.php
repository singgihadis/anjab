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
                    <li>Faktor EvJab</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-list-alt mr-1"></span> <b>Daftar Faktor EvJab</b>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="/faktor_evjab/tambah" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span> Tambah</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <div class="text-right">
                        <form id="form_filter">
                            <div class="d-inline-block mx-1">
                                <select id="filter_tipe" name="filter_tipe" class="form-control form-control-sm">
                                    <option value="">Semua Tipe</option>
                                    <option value="1">Struktural</option>
                                    <option value="2">Fungsional / Pelaksana</option>
                                </select>
                            </div>
                            <div class="d-inline-block mx-1">
                                <select id="filter_tahun" name="filter_tahun" class="form-control form-control-sm">
                                    <option value="">Semua Tahun</option>
                                </select>
                            </div>
                            <div class="d-inline-block">
                                <div class="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-primary" type="submit"><span class="fa fa-search"></span></button>
                                    </div>
                                    <input id="keyword" name="keyword" type="text" class="form-control" placeholder="Uraian / Panduan">
                                </div>
                            </div>
                        </form>
                    </div>
                    <br>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Tahun</th>
                                <th>Kode</th>
                                <th>Uraian</th>
                                <th>Tipe</th>
                                <th>Grup</th>
                                <th>Panduan</th>
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
<script type="text/javascript" src="/assets/js/page/faktor_evjab.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>
