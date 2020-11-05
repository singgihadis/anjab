<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "1";
    $sub_menu = "";
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
                    <li>Dashboard</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-desktop mr-1"></span> <b>Dashboard</b>
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
                        </form>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card bg-success d-inline-block mr-2" id="card_jabatan">
                                <div class="card-body p-3">
                                    <div class="media">
                                        <span class="fa fa-3x fa-address-card text-white mr-3 mb-0"></span>
                                        <div class="media-body text-white">
                                            <div><b>JABATAN (<span class="tahun"></span>)</b></div>
                                            <span id="total_jabatan"></span> jabatan
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card bg-info d-inline-block" id="card_pegawai">
                                <div class="card-body p-3">
                                    <div class="media">
                                        <span class="fa fa-3x fa-user text-white mr-3 mb-0"></span>
                                        <div class="media-body text-white">
                                            <div><b>PEGAWAI (<span class="tahun"></span>)</b></div>
                                            <span id="total_pegawai"></span> pegawai
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-4">
                            <table class="table table-bordered">
                                <thead>
                                    <tr class="bg-secondary text-white">
                                        <th colspan="2">Rincian Status Pegawai (<span class="tahun"></span>)</th>
                                    </tr>
                                    <tr>
                                        <th>Status Pegawai</th>
                                        <th class='text-right'>Jumlah</th>
                                    </tr>
                                </thead>
                                <tbody id="status_pegawai">

                                </tbody>
                            </table>
                        </div>
                        <div class="col-md-8">
                            <div class="overflow-auto" id="jabatan_bagan">
                                <ul class="tree">
                                    <li> <span>Home</span>
                                        <ul>
                                            <li> <span>About us</span>
                                                <ul>
                                                    <li> <span>Our history</span>
                                                        <ul>
                                                            <li><span>Founder</span></li>
                                                        </ul>
                                                    </li>
                                                    <li> <span>Our board</span>
                                                        <ul>
                                                            <li><span>Brad Whiteman</span></li>
                                                            <li><span>Cynthia Tolken</span></li>
                                                            <li><span>Bobby Founderson</span></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li> <span>Our products</span>
                                                <ul>
                                                    <li> <span>The Widget 2000™</span>
                                                        <ul>
                                                            <li><span>Order form</span></li>
                                                        </ul>
                                                    </li>
                                                    <li> <span>The McGuffin V2</span>
                                                        <ul>
                                                            <li><span>Order form</span></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li> <span>Contact us</span>
                                                <ul>
                                                    <li> <span>Social media</span>
                                                        <ul>
                                                            <li><span>Facebook</span></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
<script type="text/javascript" src="/assets/js/page/dashboard.js"></script>
</body>
</html>
