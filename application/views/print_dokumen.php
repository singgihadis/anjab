<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "10";
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
                    <li>Print Dokumen</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-list-alt mr-1"></span> <b>Daftar Jabatan <span id="sub_title"></span></b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <div class="text-right">
                        <form id="form_filter">
                            <div class="d-inline-block mx-1 align-middle">
                                <select id="filter_opd" name="filter_opd" class="form-control form-control-sm">
                                    <option value="">Pilih OPD</option>
                                </select>
                            </div>
                            <div class="d-inline-block mx-1 align-middle">
                                <select id="filter_tahun" name="filter_tahun" class="form-control form-control-sm">

                                </select>
                            </div>
                            <div class="d-inline-block mx-1 align-middle">
                                <select id="filter_jenis_jabatan" name="filter_jenis_jabatan" class="form-control form-control-sm">

                                </select>
                            </div>
                            <div class="d-inline-block align-middle">
                                <div class="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-primary" type="submit"><span class="fa fa-search"></span></button>
                                    </div>
                                    <input id="keyword" name="keyword" type="text" class="form-control" placeholder="Keyword">
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
                                <th>Nama Jabatan</th>
                                <th>Nama Unit</th>
                                <th>Jenis Jabatan</th>
                                <th>Anjab</th>
                                <th>ABK</th>
<!--                                <th>EvJab</th>-->
<!--                                <th>Form EvJab</th>-->
<!--                                <th>SKJ</th>-->
                            </tr>
                            </thead>
                            <tbody id="listdata">
                            <tr>
                                <td colspan="9">
                                    Silahkan pilih OPD terlebih dahulu
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6" id="info_page">

                        </div>
                        <div class="col-md-6 text-right" id="pagination" style="display: none">

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
<script type="text/javascript" src="/assets/js/page/print_dokumen.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>
