<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "7";
    $sub_menu = "";
    include("sidebar.php");
    ?>
    <!-- Sidebar -->

    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <?php include("navbar.php"); ?>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                    <div class="custom-breadcrumb mb-4">
                        <ul>
                            <li><a href="/anjab">Standar Kompetensi Jabatan</a></li>
                            <li>Input Analisis Jabatan</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 text-right mb-4">
                    <b>OPD</b> : <span id="opd_name">-</span>
                </div>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-10">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Form Input SKJ : <span id="nama_jabatan"></span></b>
                        </div>
                        <div class="col-md-2 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <input type="hidden" id="tahun" name="tahun" value="">
                    <table class="table">
                        <tr>
                            <td><b>Nama Jabatan</b></td>
                            <td> : </td>
                            <td id="nama_jabatan_cap"></td>
                        </tr>
                        <tr>
                            <td><b>Kode</b></td>
                            <td> : </td>
                            <td id="kode_jabatan_cap"></td>
                        </tr>
                        <tr>
                            <td><b>Tahun</b></td>
                            <td> : </td>
                            <td id="tahun_cap"></td>
                        </tr>
                        <tr>
                            <td><b>Jenis Jabatan</b></td>
                            <td> : </td>
                            <td id="jenis_jabatan_cap"></td>
                        </tr>
                        <tr>
                            <td><b>Urusan Pemerintahan</b></td>
                            <td> : </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><b>Ikhtisiar Jabatan</b></td>
                            <td> : </td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/skj_edit.js"></script>
</body>
</html>
