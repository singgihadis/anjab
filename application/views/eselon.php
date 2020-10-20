<html>
<?php include("head.php"); ?>
<body>
<div class="d-flex" id="wrapper">
    <?php
    $menu = "2";
    $sub_menu = "4";
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
                    <li>Eselon</li>
                </ul>
            </div>
            <div class="card">
                <div class="card-header bg-white">
                    <div class="row">
                        <div class="col-md-6">
                            <span class="fa fa-lg fa-list-alt mr-1"></span> <b>Daftar Eselon</b>
                        </div>
                        <div class="col-md-6 text-right">
                            <a href="/eselon/tambah" class="btn btn-sm btn-primary"><span class="fa fa-plus"></span> Tambah</a>
                        </div>
                    </div>
                </div>
                <div class="card-body" id="card-body">
                    <div class="text-right">
                        <form id="form_filter">
                            <div class="d-inline-block">
                                <div class="input-group input-group-sm">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-primary" type="submit"><span class="fa fa-search"></span></button>
                                    </div>
                                    <input id="keyword" name="keyword" type="text" class="form-control" placeholder="Nama OPD">
                                </div>
                            </div>
                        </form>
                    </div>
                    <br>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Eselon</th>
                                <th>Kelas</th>
                                <th>Aksi</th>
                            </tr>
                            </thead>
                            <tbody id="listdata">

                            </tbody>
                        </table>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-md-6" id="info_page">

                        </div>
                        <div class="col-md-6 text-right" id="pagination">

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
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/eselon.js"></script>
</body>
</html>
