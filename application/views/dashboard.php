<html>
    <?php
    $menu = "1";
    $sub_menu = "";
    include("head.php");
    ?>
<body>
<div class="d-flex" id="wrapper">
<?php include("sidebar.php"); ?>
<!-- Sidebar -->

<!-- /#sidebar-wrapper -->

<!-- Page Content -->
<div id="page-content-wrapper">
<?php include("navbar.php"); ?>
<div class="container-fluid">
<input type="hidden" id="id" name="id" value="{{id}}" />
<input type="hidden" id="apotik_id" name="apotik_id" value="{{apotik_id}}" />
<br>
<div class="card">
<div class="card-header bg-primary text-white">
    <b></b>
</div>
<div class="card-body" id="card-body">

</div>
</div>
<br><br>
</div>
</div>
<!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->
<?php include("foot.php"); ?>
<script type="text/javascript" src="/assets/js/page/dashboard.js"></script>
</body>
</html>
