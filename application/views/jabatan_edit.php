<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "6";
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
                    <li><a href="/jabatan">Jabatan</a></li>
                    <li>Edit Jabatan</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-edit mr-1"></span> <b>Edit Jabatan</b>
                        </div>
                        <div class="col-md-6 text-right">

                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <form id="form_update" autocomplete="off">
                        <input type="hidden" id="id" name="id" value="<?php echo $id; ?>">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="form-group">
                                    <label>Tahun</label><br>
                                    <input id="tahun" name="tahun" type="text" class="form-control" value="" readonly>
                                </div>
                                <div class="form-group">
                                    <label>OPD</label>
                                    <input id="opd_nama" name="opd_nama" type="text" class="form-control" value="" readonly>
                                    <input id="opd" name="opd" type="hidden" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label>Jabatan Atasan</label><br>
                                    <input id="jabatan_nama" name="jabatan_nama" type="text" class="form-control" value="" readonly>
                                    <input id="jabatan_id" name="jabatan_id" type="hidden" class="form-control" value="">
                                </div>
                                <div class="form-group">
                                    <label>Kode Jabatan</label>
                                    <input id="kode" name="kode" type="text" class="form-control" placeholder="Input kode jabatan" >
                                </div>
                                <div class="form-group">
                                    <label>Nama Jabatan</label>
                                    <input id="nama" name="nama" type="text" class="form-control" placeholder="Input nama jabatan" required="">
                                </div>
                                <div class="form-group">
                                    <label>Nama Unit</label>
                                    <input id="unit" name="unit" type="text" class="form-control" placeholder="Input nama unit" required="">
                                </div>
                                <div class="form-group">
                                    <label>Jenis Jabatan</label>
                                    <select id="jenis_jabatan" name="jenis_jabatan" required="" class="form-control">
                                        <option value="">Pilih Jenis Jabatan</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Eselon</label>
                                    <select id="eselon" name="eselon" class="form-control">
                                        <option value="">Pilih Eselon</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Golongan</label>
                                    <select id="golongan" name="golongan" class="form-control">
                                        <option value="">Pilih Eselon</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Urusan Pemerintahan</label>
                                    <select id="urusan_pemerintahan" name="urusan_pemerintahan" class="form-control" multiple="multiple">
                                        <option value="">Pilih Urusan Pemerintahan</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="mb-2">
                                    <b>Jumlah pegawai yang mengisi</b>
                                </div>
                                <div id="div_jml_pegawai">

                                </div>
                                <div class="form-group">
                                    <label>Jumlah Pegawai</label>
                                    <input type="text" class="form-control" id="jml_pegawai" name="jml_pegawai" value="0" readonly>
                                </div>
                            </div>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
            <br><br>
        </div>
    </div>
    <!-- /#page-content-wrapper -->
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/jabatan_edit.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>
