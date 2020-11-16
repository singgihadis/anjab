<?php
$profil = json_decode($this->session->userdata("profil"),true);
?>
<nav class="navbar navbar-expand-lg navbar-white bg-primary border-bottom mb-3">
    <button class="btn btn-light" id="menu-toggle"><span class="fa fa-bars"></span></button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="fa fa-bars"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <div class="dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="javascript:void(0);" id="dropdownMenuPanduan" data-toggle="dropdown">
                        Panduan
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuPanduan">
                        <a href="/assets/doc/manual_book.pdf" target="_blank" class="dropdown-item">PDF</a>
                        <a href="/assets/doc/manual_book/MembukaAplikasi.html" target="_blank" class="dropdown-item">HTML</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <div class="dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="javascript:void(0);" id="dropdownMenu2" data-toggle="dropdown">
                        <?php echo $profil['nama']; ?>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <a href="/ganti_password" class="dropdown-item"><span class="fa fa-key"></span> Ganti Password</a>
                        <a href="/logout" class="dropdown-item"><span class="fa fa-sign-out"></span> Logout</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</nav>
