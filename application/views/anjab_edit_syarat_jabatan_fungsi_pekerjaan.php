<html>
<?php include("head.php"); ?>
<style type="text/css">
    input.error{
        border: 1px solid red;
    }
</style>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "6";
    $sub_menu = "2";
    include("sidebar.php");
    ?>
    <!-- Sidebar -->

    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <?php include("navbar.php"); ?>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-7">
                    <div class="custom-breadcrumb mb-4">
                        <ul>
                            <li><a href="/anjab">Analisis Jabatan Dan Beban kerja</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>">Input Analisis Jabatan</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>/syarat_jabatan">Syarat Jabatan</a></li>
                            <li>Fungsi Pekerjaan</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5 text-right">
                    <div class="bg-primary text-light py-1 px-2 d-inline-block">
                        <b id="opd_name">-</b>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-8">
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Fungsi Pekerjaan  : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <div>
                        <form id="form_fungsi_pekerjaan">
                            <table class="table table-borderless">
                                <tbody>
                                <tr>
                                    <td class="fit align-middle">Data</td>
                                    <td class="fit align-middle"> : </td>
                                    <td class="align-middle">
                                        <select id="fungsi_pekerjaan_data" name="fungsi_pekerjaan_data" class="form-control" required="required"></select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fit align-middle">Orang</td>
                                    <td class="fit align-middle"> : </td>
                                    <td class="align-middle">
                                        <select id="fungsi_pekerjaan_orang" name="fungsi_pekerjaan_orang" class="form-control" required="required"></select>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="fit align-middle">Benda</td>
                                    <td class="fit align-middle"> : </td>
                                    <td class="align-middle">
                                        <select id="fungsi_pekerjaan_benda" name="fungsi_pekerjaan_benda" class="form-control" required="required"></select>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="text-right">
                                <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Simpan</button>
                            </div>
                        </form>
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
<script type="text/javascript" src="/assets/js/page/anjab_edit_syarat_jabatan_fungsi_pekerjaan.js"></script>
</body>
</html>