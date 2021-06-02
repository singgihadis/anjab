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
                <div class="col-md-7">
                    <div class="custom-breadcrumb mb-4">
                        <ul>
                            <li><a href="/anjab">Analisis Jabatan Dan Beban kerja</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>">Input Analisis Jabatan</a></li>
                            <li>Syarat Jabatan</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Syarat Jabatan  : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                Kelengkapan Data
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                        </thead>
                        <tbody id="listdata_anjab">
                            <tr>
                                <td>1</td>
                                <td>Keterampilan Kerja</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/keterampilan_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Bakat Kerja</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/bakat_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Temperamen Kerja</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/temperamen_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Minat Kerja</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/minat_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Upaya Fisik</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/upaya_fisik" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Kondisi Fisik</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/kondisi_fisik" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Fungsi Pekerjaan</td>
                                <td></td>
                                <td>
                                    <a href="syarat_jabatan/fungsi_pekerjaan" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                        </tbody>
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
<script type="text/javascript" src="/assets/js/page/anjab_edit_syarat_jabatan.js"></script>
</body>
</html>


