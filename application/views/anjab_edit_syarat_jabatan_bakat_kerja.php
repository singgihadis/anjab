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
                            <li><a href="/anjab/edit/<?php echo $id; ?>/syarat_jabatan">Syarat Jabatan</a></li>
                            <li>Bakat Kerja</li>
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
                            <span class="fa fa-lg fa-list-ol mr-1"></span> <b>Bakat Kerja  : <span id="nama_jabatan">-</span></b>
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
                                    <a href="javascript:void(0);" onclick="modal_bakat_kerja(this)" class="btn btn-sm btn-primary"><span class="fa fa-hand-pointer-o"></span> Pilih</a>
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
<div id="modal_bakat_kerja" class="modal">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Pilih Bakat Kerja</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="text-right">
                    <form id="form_filter_bakat_kerja" method="post">
                        <div class="d-inline-block">
                            <div class="input-group input-group-sm mb-3">
                                <div class="input-group-prepend">
                                    <button class="btn btn-primary" type="submit"><span class="fa fa-search"></span></button>
                                </div>
                                <input id="keyword_bakatkerja" name="keyword_bakatkerja" type="text" class="form-control" placeholder="Keyword">
                            </div>
                        </div>
                    </form>
                </div>
                <table class="table table-striped">
                    <thead>
                    <th>
                        Pilih
                    </th>
                    <th>
                        No
                    </th>
                    <th>
                        Nama Bakat
                    </th>
                    <th>
                        Uraian
                    </th>
                    </thead>
                    <tbody id="listdata_bakatkerja">

                    </tbody>
                </table>
                <div class="text-right">
                    <div id="pagination"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-light" data-dismiss="modal">Tutup</button>
            </div>
        </div>
    </div>
</div>
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/anjab_edit_syarat_jabatan_bakat_kerja.js?v=<?php echo $this->config->item("js_version"); ?>"></script>
</body>
</html>