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
                            <li>Tugas Pokok</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Tugas Pokok : <span id="nama_jabatan">-</span></b>
                        </div>
                        <div class="col-md-4 text-right">
                            <div class="d-inline-block pt-1"><span id="loader" class="fa fa-spinner fa-spin" style="display: none;"></span></div>
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
                            <th class="nowrap">
                                Urutan
                            </th>
                            <th>
                                Uraian Tugas Pokok
                            </th>
                            <th class="text-center">
                                <a href="javascript:void(0);" onclick="modal_tugas_pokok(true,this)" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span></a>
                            </th>
                        </tr>
                        </thead>
                        <tbody id="listdata_tugaspokok">
                        <tr>
                            <td colspan="4">
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
<!-- /#wrapper -->
<div id="modal_tugas_pokok" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Tugas Pokok</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_tugas_pokok">
                <div class="modal-body">
                    <input type="hidden" id="anjab_tugas_pokok_id" name="anjab_tugas_pokok_id">
                    <div class="form-group">
                        <label>Uraian Tugas Pokok</label>
                        <textarea id="uraian_tugas_pokok" name="uraian_tugas_pokok" class="form-control" required="required"></textarea>
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
<div id="modal_tahapan" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Daftar Tahapan <span id="tahapan_title"></span></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_tugas_pokok_tahapan">
                <div class="modal-body">
                    <div>
                        <strong id="tahapan_deskripsi"></strong>
                    </div>
                    <br>
                    <div id="listdata_tugaspokok_tahapan">

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-dismiss="modal">Batal</button>
                    <button type="button" class="btn btn-info" onclick="tambah_input_tahapan()"><span class="fa fa-plus"></span> Tambah Data</button>
                    <button type="button" class="btn btn-primary" onclick="simpan_tahapan()"><span class="fa fa-save"></span> Simpan</button>
                </div>
            </form>
        </div>
    </div>
</div>
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/anjab_edit_tugas_pokok.js"></script>
</body>
</html>

