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
                            <li><a href="/anjab/edit/<?php echo $id; ?>/kualifikasi">Kualifikasi Jabatan</a></li>
                            <li>Pendidikan dan Pelatihan</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Pendidikan dan Pelatihan  : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <div>
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>
                                    No
                                </th>
                                <th>
                                    Jenis Pelatihan
                                </th>
                                <th>
                                    Nama Pendidikan dan Pelatihan
                                </th>
                                <th class="text-center">
                                    <a href="javascript:void(0);" onclick="modal_pelatihan(true,this)" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span></a>
                                </th>
                            </tr>
                            </thead>
                            <tbody id="listdata">
                            <tr>
                                <td colspan="4">
                                    Tunggu sebentar ...
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
<div id="modal_pelatihan" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Pendidikan dan Pelatihan</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_kualifikasi_pelatihan">
                <div class="modal-body">
                    <input type="hidden" id="anjab_kualifikasi_pelatihan_id" name="anjab_kualifikasi_pelatihan_id">
                    <div class="form-group">
                        <label>Jenis Pelatihan</label>
                        <select id="jenis_pelatihan" name="jenis_pelatihan" class="form-control" required="required">
                            <option value="">Pilih Jenis Pelatihan</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Nama Pendidikan dan Pelatihan</label>
                        <input type="text" id="nama_pelatihan" name="nama_pelatihan" class="form-control" required="required" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="modal_pengalaman" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Pengalaman</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_kualifikasi_pengalaman">
                <div class="modal-body">
                    <input type="hidden" id="anjab_kualifikasi_pengalaman_id" name="anjab_kualifikasi_pengalaman_id">
                    <div class="form-group">
                        <label>Nama Pengalaman</label>
                        <input type="text" id="nama_pengalaman" name="nama_pengalaman" class="form-control" required="required" />
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Batal</button>
                    <button type="submit" class="btn btn-primary">Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/anjab_edit_kualifikasi_pelatihan.js"></script>
</body>
</html>