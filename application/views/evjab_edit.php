<html>
<?php include("head.php"); ?>
<style type="text/css">
    .note-group-select-from-files {
        display: none;
    }
</style>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "6";
    $sub_menu = "3";
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
                        <div class="col-md-10">
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Form Input Evaluasi Jabatan : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-2 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                            <?php
                            if($level == "1"){
                                ?>
                                <a id="btn_verifikasi" style="display: none;" href="javascript:void(0);" onclick="modal_verifikasi();" class="btn btn-sm btn-primary"><span class="fa fa-check"></span> Verifikasi</a>
                            <?php
                            }
                            ?>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <input type="hidden" id="tahun" name="tahun" value="">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#data_evjab"  href="javascript:void(0);"><span class="fa fa-edit"></span> Data EvJab</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#tim_analisis"  href="javascript:void(0);"><span class="fa fa-group"></span> Tim Analisis</a>
                        </li>
                    </ul>
                    <br>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="data_evjab">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Panduan</th>
                                        <th>Faktor</th>
                                        <th>Keterangan Faktor</th>
                                        <th>Ruang Lingkup / Uraian</th>
                                        <th>Dampak</th>
                                        <th>Level</th>
                                        <th>Nilai</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="listdata">
                                    <tr>
                                        <td colspan="9">Memuat data ...</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td><b>TOTAL</b></td>
                                        <td class="text-right"><b id="total"></b></td>
                                    </tr>
                                    <tr>
                                        <td><b>KELAS JABATAN</b></td>
                                        <td class="text-right"><b id="kelas_jabatan"></b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="tab-pane fade" id="tim_analisis">
                            <form id="form_tim_analisis">
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Nama Ketua</label>
                                    <div class="col-sm-8">
                                        <input type="text"  class="form-control" id="nama_ketua" name="nama_ketua" value="" required="required">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Jabatan Pejabat Yang Bersangkutan</label>
                                    <div class="col-sm-8">
                                        <input type="text"  class="form-control" id="jabatan_pejabat_bersangkutan" name="jabatan_pejabat_bersangkutan" value="" required="required">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Nama Pejabat Yang Bersangkutan</label>
                                    <div class="col-sm-8">
                                        <input type="text"  class="form-control" id="nama_pejabat_bersangkutan" name="nama_pejabat_bersangkutan" value="" required="required">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Jabatan Pimpinan Unit Kerja</label>
                                    <div class="col-sm-8">
                                        <input type="text"  class="form-control" id="jabatan_pimpinan_unit_kerja" name="jabatan_pimpinan_unit_kerja" value="" required="required">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4 col-form-label">Nama Pimpinan Unit Kerja</label>
                                    <div class="col-sm-8">
                                        <input type="text"  class="form-control" id="nama_pimpinan_unit_kerja" name="nama_pimpinan_unit_kerja" value="" required="required">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-4"></label>
                                    <div class="col-sm-8">
                                        <button type="submit" class="btn btn-primary"><span class="fa fa-save"></span> Simpan</button>
                                    </div>
                                </div>
                            </form>
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
<div id="modal_edit" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Data EvJab</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_edit">
                <div class="modal-body">
                    <input type="hidden" id="tipe" name="tipe">
                    <input type="hidden" id="master_faktor_evjab_id" name="master_faktor_evjab_id">
                    <div class="form-group">
                        <label>Level</label>
                        <select id="master_faktor_evjab_level_id" name="master_faktor_evjab_level_id" class="form-control" required="required">

                        </select>
                    </div>
                    <div class="form-group">
                        <label>Ruang Lingkup / Uraian</label>
                        <div id="summernote" style="height: 300px;"></div>
                    </div>
                    <div class="form-group">
                        <label>Dampak</label>
                        <textarea id="dampak" name="dampak" class="form-control" rows="5"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="modal_panduan" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title">Panduan Pengisian Evaluasi Jabatan</h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" id="panduan_text">
            </div>
        </div>
    </div>
</div>
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
<script type="text/javascript" src="/assets/js/page/evjab_edit.js"></script>
</body>
</html>
