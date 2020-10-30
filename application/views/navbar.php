<?php
$profil = json_decode($this->session->userdata("profil"),true);
?>
<nav class="navbar navbar-expand-lg navbar-white bg-white border-bottom mb-3">
    <button class="btn btn-light" id="menu-toggle"><span class="fa fa-bars"></span></button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <div class="dropdown">
                    <a class="nav-link text-body dropdown-toggle" href="javascript:void(0);" id="dropdownMenu2" data-toggle="dropdown">
                        <?php echo $profil['nama']; ?>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <a href="/logout" class="dropdown-item">Logout</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
