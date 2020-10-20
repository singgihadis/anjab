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
                        <div class="col-md-8">
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Input Analisis Jabatan : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                            <a id="btn_verifikasi" style="display: none;" href="javascript:void(0);" onclick="modal_verifikasi();" class="btn btn-sm btn-primary"><span class="fa fa-check"></span> Verifikasi</a>
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
                                <td>Ikhtisiar Jabatan</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/ikhtisiar" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kualifikasi Jabatan</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/kualifikasi" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Tugas Pokok</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/tugas_pokok" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Hasil Kerja</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/hasil_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Bahan Kerja</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/bahan_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Perangkat Kerja</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/perangkat_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Tanggung Jawab</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/tanggung_jawab" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Wewenang</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/wewenang" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Korelasi / Hubungan Jabatan</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/korelasi" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Kondisi Lingkungan Kerja</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/kondisi_lingkungan_kerja" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Resiko Bahaya</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/resiko_bahaya" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Syarat Jabatan</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/syarat_jabatan" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
                                </td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Prestasi Kerja Yang Diharapkan</td>
                                <td></td>
                                <td>
                                    <a href="<?php echo $id; ?>/prestasi_kerja_diharapkan" class="btn btn-sm btn-primary"><span class="fa fa-edit"></span> Input</a>
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

<div class="modal" id="modal_verifikasi">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Verifikasi Data Anjab</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_verifikasi">
                <div class="modal-body">
                    <table class="table table-borderless">
                        <tbody>
                        <tr>
                            <td>OPD</td>
                            <td> : </td>
                            <td id="mdl_opd"></td>
                        </tr>
                        <tr>
                            <td>Jabatan</td>
                            <td> : </td>
                            <td id="mdl_jabatan"></td>
                        </tr>
                        <tr>
                            <td>Tahun</td>
                            <td> : </td>
                            <td id="mdl_tahun"></td>
                        </tr>
                        <tr>
                            <td>Status Verifikasi</td>
                            <td> : </td>
                            <td>
                                <select id="verifikasi" name="verifikasi" class="form-control form-control-sm" required="required">
                                    <option value="">Pilih</option>
                                    <option value="1">Tolak</option>
                                    <option value="2">Setuju</option>
                                </select>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary" >Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/anjab_edit.js"></script>
</body>
</html>
