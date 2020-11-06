<div class="bg-white border-right" id="sidebar-wrapper">
    <div class="sidebar-heading mb-2"><img src="/assets/img/logo.png" class="logo" /></div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item list-group-item-action bg-white">
            <a href="/dashboard" class="<?php echo ($menu == "1" && $sub_menu == ""?"active":""); ?>">
                <span class="fa fa-desktop mr-2"></span> Dashboard
            </a>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <span class="menu-title">Master Data</span>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="#menu2" data-toggle="collapse" class="<?php echo ($menu == "2"?"active":""); ?>">
                <span class="fa fa-windows mr-2"></span> Data Umum <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu2" class="list-group list-group-sub-menu list-group-flush collapse  <?php echo ($menu == "2"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/dokumen" class="<?php echo ($menu == "2" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Dokumen
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/opd" class="<?php echo ($menu == "2" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> OPD
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/urusan_pemerintahan" class="<?php echo ($menu == "2" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Urusan pemerintahan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/eselon" class="<?php echo ($menu == "2" && $sub_menu == "4"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Eselon
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/golongan" class="<?php echo ($menu == "2" && $sub_menu == "5"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Golongan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/pendidikan" class="<?php echo ($menu == "2" && $sub_menu == "6"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Pendidikan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/status_pegawai" class="<?php echo ($menu == "2" && $sub_menu == "7"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Status Pegawai
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="#menu3" data-toggle="collapse" class="<?php echo ($menu == "3"?"active":""); ?>">
                <span class="fa fa-code-fork mr-2"></span> Data Anjab - ABK <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu3" class="list-group list-group-sub-menu list-group-flush collapse   <?php echo ($menu == "3"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/kondisi_lingkungan_kerja" class="<?php echo ($menu == "3" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Kondisi Lingkungan Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/fungsi_pekerjaan_data" class="<?php echo ($menu == "3" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Fungsi Pekerjaan Data
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/fungsi_pekerjaan_orang" class="<?php echo ($menu == "3" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Fungsi Pekerjaan Orang
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/fungsi_pekerjaan_benda" class="<?php echo ($menu == "3" && $sub_menu == "4"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Fungsi Pekerjaan Benda
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/bakat_kerja" class="<?php echo ($menu == "3" && $sub_menu == "5"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Bakat Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/minat_kerja" class="<?php echo ($menu == "3" && $sub_menu == "6"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Minat Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/temperamen_kerja" class="<?php echo ($menu == "3" && $sub_menu == "7"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Temperamen Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/satuan_kerja" class="<?php echo ($menu == "3" && $sub_menu == "8"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Satuan Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/keterangan_waktu" class="<?php echo ($menu == "3" && $sub_menu == "9"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Keterangan Waktu
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/upaya_fisik" class="<?php echo ($menu == "3" && $sub_menu == "10"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Upaya Fisik
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/kondisi_fisik" class="<?php echo ($menu == "3" && $sub_menu == "11"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Kondisi Fisik
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white" class="<?php echo ($menu == "4"?"active":""); ?>">
            <a href="#menu4" data-toggle="collapse">
                <span class="fa fa-black-tie mr-2"></span> Data EvJab <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu4" class="list-group list-group-sub-menu list-group-flush collapse  <?php echo ($menu == "4"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/jenis_jabatan" class="<?php echo ($menu == "4" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Jenis Jabatan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/faktor_evjab" class="<?php echo ($menu == "4" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Faktor EvJab
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/kelas_jabatan" class="<?php echo ($menu == "4" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Kelas Jabatan
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white" class="<?php echo ($menu == "5"?"active":""); ?>">
            <a href="#menu5" data-toggle="collapse">
                <span class="fa fa-clone mr-2"></span> Data SKJ <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu5" class="list-group list-group-sub-menu list-group-flush collapse  <?php echo ($menu == "5"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/jenis_pelatihan" class="<?php echo ($menu == "5" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Jenis Pelatihan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/standar_kompetensi" class="<?php echo ($menu == "5" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Standar Kompetensi
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/kamus_kompetensi_skj" class="<?php echo ($menu == "5" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Kamus Kompetensi SKJ
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <span class="menu-title">Analisa</span>
        </li>
        <li class="list-group-item list-group-item-action bg-white" class="<?php echo ($menu == "6"?"active":""); ?>">
            <a href="#menu6" data-toggle="collapse">
                <span class="fa fa-clipboard mr-2"></span> Anjab - ABK <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu6" class="list-group list-group-sub-menu list-group-flush collapse  <?php echo ($menu == "6"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/jabatan" class="<?php echo ($menu == "6" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Jabatan
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/anjab" class="<?php echo ($menu == "6" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Analisa Jabatan dan Beban Kerja
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/evjab" class="<?php echo ($menu == "6" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Evaluasi Jabatan
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="/skj" class="<?php echo ($menu == "7"?"active":""); ?>">
                <span class="fa fa-suitcase mr-2"></span> SKJ
            </a>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <span class="menu-title">User</span>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="/user" class="<?php echo ($menu == "8"?"active":""); ?>">
                <span class="fa fa-address-book mr-2"></span> User
            </a>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="/log_user" class="<?php echo ($menu == "9"?"active":""); ?>">
                <span class="fa fa-history mr-2"></span> Log User
            </a>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <span class="menu-title">Laporan</span>
        </li>
        <li class="list-group-item list-group-item-action bg-white" class="<?php echo ($menu == "10"?"active":""); ?>">
            <a href="#menu10" data-toggle="collapse">
                <span class="fa fa-file-o mr-2"></span> Laporan <span class="fa fa-angle-right float-right mt-1"></span>
            </a>
            <ul id="menu10" class="list-group list-group-sub-menu list-group-flush collapse  <?php echo ($menu == "10"?"show":""); ?>">
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/print_dokumen" class="<?php echo ($menu == "10" && $sub_menu == "1"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Print Dokumen
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/rekapitulasi" class="<?php echo ($menu == "10" && $sub_menu == "2"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Rekapitulasi
                    </a>
                </li>
                <li class="list-group-item list-group-item-action bg-white">
                    <a href="/rekapitulasi_abk" class="<?php echo ($menu == "10" && $sub_menu == "3"?"active":""); ?>">
                        <span class="fa fa-circle-o"></span> Rekapitulasi ABK
                    </a>
                </li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <span class="menu-title">Lainnya</span>
        </li>
        <li class="list-group-item list-group-item-action bg-white">
            <a href="/pengaturan" class="<?php echo ($menu == "11"?"active":""); ?>">
                <span class="fa fa-cog mr-2"></span> Pengaturan
            </a>
        </li>
    </ul>
    <br>
</div>
