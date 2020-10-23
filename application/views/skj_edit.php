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
                    <input type="hidden" id="master_urusan_pemerintahan_ids" name="master_urusan_pemerintahan_ids" value="">
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
                            <td id="urusan_pemerintahan_cap"></td>
                        </tr>
                        <tr>
                            <td><b>Ikhtisiar Jabatan</b></td>
                            <td> : </td>
                            <td id="ikhtisiar_cap"></td>
                        </tr>
                    </table>
                    <ul class="nav nav-tabs">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active tab_skj" id="tab_standar_kompetensi" data-toggle="tab" href="#tab_content_standar_kompetensi">Standar Kompetensi</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link tab_skj" id="tab_persyaratan_jabatan" data-toggle="tab" href="#tab_content_persyaratan_jabatan">Persyaratan Jabatan</a>
                        </li>
                    </ul>
                    <div class="tab-content border">
                        <div class="tab-pane fade show active p-3" id="tab_content_standar_kompetensi">

                        </div>
                        <div class="tab-pane fade" id="tab_content_persyaratan_jabatan">
                            <div class="table-responsive p-4">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td><b>a.</b></td>
                                            <td>Pendidikan Formal</td>
                                            <td> : </td>
                                            <td id="pendidikan_formal"></td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>Fakultas / Jurusan</td>
                                            <td> : </td>
                                            <td id="fakultas_jurusan"></td>
                                        </tr>
                                        <tr>
                                            <td><b>b.</b></td>
                                            <td>Pendidikan/Pelatihan</td>
                                            <td> : </td>
                                            <td id="pendidikan_pelatihan"></td>
                                        </tr>
                                    </tbody>
                                </table>
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
<div class="modal" id="modal_kamus_kompetensi_skj_urusan_pemerintahan">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Kompetensi</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_tambah_kompetensi">
                <div class="modal-body">
                    <div class="form-group">
                       <select id="kamus_kompetensi_skj_urusan_pemerintahan" class="form-control" required="required">
                            <option value="">Pilih</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/skj_edit.js"></script>
</body>
</html>
