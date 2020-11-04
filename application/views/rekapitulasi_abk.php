<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "10";
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
                    <li>Laporan Rekapitulasi ABK</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-file-o mr-1"></span> <b>Laporan Rekapitulasi ABK</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <div class="text-right">
                        <form id="form_print">
                            <div class="form-group row">
                                <label class="control-label col-sm-2">OPD</label>
                                <div class="col-sm-7">
                                    <select id="opd" name="opd" class="form-control">
                                        <option value="">Pilih OPD</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label class="control-label col-sm-2">Tahun</label>
                                <div class="col-sm-2">
                                    <select id="tahun" name="tahun" class="form-control form-control-sm">

                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-2">

                                </div>
                                <div class="col-sm-4 text-left">
                                    <button type="submit" class="btn btn-primary"><span class="fa fa-print"></span> Print</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/rekapitulasi_abk.js"></script>
</body>
</html>
