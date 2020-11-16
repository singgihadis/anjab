<html>
<?php include("head.php"); ?>
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
                <div class="col-md-6">
                    <div class="custom-breadcrumb mb-4">
                        <ul>
                            <li><a href="/anjab">Analisa Jabatan Dan Beban kerja</a></li>
                            <li>Input Analisis Beban Kerja</li>
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
                        <div class="col-md-8">
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Input Analisis Beban Kerja : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <a id="btn_update" href="javascript:void(0);" class="btn btn-sm btn-primary"><span class="fa fa-save"></span> Simpan</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th class="align-middle" style="width: 25%;">
                                        Uraian Tugas
                                    </th>
                                    <th class="align-middle" style="width: 20%;">
                                        Hasil Kerja
                                    </th>
                                    <th class="align-middle" style="width: 10%;">
                                        Jumlah Hasil
                                    </th>
                                    <th class="align-middle" style="width: 10%;">
                                        Waktu Penyelesaian
                                    </th>
                                    <th class="align-middle" style="width: 15%;">
                                        Satuan Waktu
                                    </th>
                                    <th class="align-middle" style="width: 10%;">
                                        Waktu Efektif
                                    </th>
                                    <th class="align-middle" style="width: 10%;">
                                        Kebutuhan Pegawai
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="listdata_abk">
                            </tbody>
                        </table>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <td style="width: 90%;">
                                        <b>Pegawai Yang Dibutuhkan</b>
                                    </td>
                                    <td class="text-right" style="width: 10%;">
                                        <b id="total_kebutuhan_pegawai">0.0000</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 90%;">
                                        <b>Pegawai Yang Dibutuhkan (Pembulatan)</b>
                                    </td>
                                    <td class="text-right" style="width: 10%;">
                                        <b id="total_kebutuhan_pegawai_pembulatan">0</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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
<script type="text/javascript" src="/assets/js/page/anjab_abk.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>
