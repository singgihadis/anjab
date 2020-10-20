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
                            <li><a href="/anjab">Analisa Jabatan Dan Beban kerja</a></li>
                            <li><a href="/anjab/edit/<?php echo $id; ?>">Input Analisis Jabatan</a></li>
                            <li>Korelasi / Hubungan Kerja</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Korelasi / Hubungan Kerja : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <a href="javascript:void(0);" class="btn btn-sm btn-primary" onclick="modal_korelasi(true,this)"><span class="fa fa-plus"></span> Tambah</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <input type="hidden" id="jabatan_id" name="jabatan_id" value="<?php echo $id; ?>">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>
                                Urutan
                            </th>
                            <th>
                                Nama Jabatan
                            </th>
                            <th>
                                Unit Kerja  / Instansi
                            </th>
                            <th>
                                Dalam Hal
                            </th>
                            <th>
                                Aksi
                            </th>
                        </tr>
                        </thead>
                        <tbody id="listdata_korelasi">
                        <tr>
                            <td colspan="6">
                                Tunggu sebentar ...
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
<div id="modal_korelasi" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Bahan Kerja</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_korelasi">
                <div class="modal-body">
                    <input type="hidden" id="anjab_korelasi_id" name="anjab_korelasi_id">
                    <div class="form-group">
                        <label>Nama Jabatan</label>
                        <input type="text" id="i_nama_jabatan" name="i_nama_jabatan" class="form-control" required="required" />
                    </div>
                    <div class="form-group">
                        <label>Unit Kerja / Instansi</label>
                        <input type="text" id="unit_kerja" name="unit_kerja" class="form-control" required="required" />
                    </div>
                    <div class="form-group">
                        <label>Dalam Hal</label>
                        <textarea id="dalam_hal" name="dalam_hal" class="form-control" required="required"></textarea>
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
<script type="text/javascript" src="/assets/js/page/anjab_edit_korelasi.js"></script>
</body>
</html>

