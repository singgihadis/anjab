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
                            <li><a href="/anjab/edit/<?php echo $id; ?>/syarat_jabatan">Syarat Jabatan</a></li>
                            <li>Keterampilan Kerja</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Keterampilan Kerja  : <span id="nama_jabatan">-</span></b>
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
                                    Aspek
                                </th>
                                <th>
                                    Uraian
                                </th>
                                <th class="text-center">
                                    <a href="javascript:void(0);" onclick="modal_keterampilan_kerja(true,this)" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span></a>
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
<div id="modal_keterampilan_kerja" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Tambah Keterampilan Kerja</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form_keterampilan_kerja">
                <div class="modal-body">
                    <input type="hidden" id="anjab_syarat_jabatan_keterampilan_kerja_id" name="anjab_syarat_jabatan_keterampilan_kerja_id">
                    <div class="form-group">
                        <label>Aspek Keterampilan</label>
                        <input id="aspek" name="aspek" type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label>Uraian</label>
                        <textarea id="uraian" name="uraian" class="form-control" required="required"></textarea>
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
<script type="text/javascript" src="/assets/js/page/anjab_edit_syarat_jabatan_keterampilan_kerja.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>