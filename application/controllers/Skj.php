<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Dompdf\Dompdf;
use Dompdf\Options;

class Skj extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     *	- or -
     * 		http://example.com/index.php/welcome/index
     *	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        if($this->session->userdata("is_login")){
            $this->load->view("skj");
        }else{
            redirect("login");
        }
    }
    public function edit($id)
    {
        if($this->session->userdata("is_login")){
            $this->load->view("skj_edit",array("id"=>$id));
        }else{
            redirect("login");
        }
    }
    public function printdata($jabatan_id)
    {
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);

        $jabatan_nama = "";
        $jabatan_kode = "";
        $tahun = "";
        $urusan_pemerintahan = "";
        $kelompok_jabatan = "";
        $ikhtisiar_jabatan = "";

        $html_standar_kompetensi = "";
        $html_pendidikan = "";
        $html_pelatihan = "";
        $html_pengalaman_kerja = "";
        $html_golongan = "";
        $html_indikator_kinerja_jabatan = "";

        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $jabatan_kode = $json_opd['data'][0]['kode_jabatan'];
            $tahun = $json_opd['data'][0]['tahun'];

            $master_urusan_pemerintahan_ids = $json_opd['data'][0]['master_urusan_pemerintahan_ids'];
            $param_urusan_pemerintahan = array("token"=>$token,"ids"=>$master_urusan_pemerintahan_ids);
            $get_urusan_pemerintahan = $this->Api->Call("urusan_pemerintahan/nama_list",$param_urusan_pemerintahan);
            $json_urusan_pemerintahan = json_decode($get_urusan_pemerintahan,true);
            if($json_urusan_pemerintahan['is_error']){

            }else{
                $arr_urusanpemerintahan = array();
                foreach($json_urusan_pemerintahan['data'] as $item){
                    array_push($arr_urusanpemerintahan,ucwords(strtolower($item['nama'])));
                }
                $urusan_pemerintahan = implode(", " ,$arr_urusanpemerintahan);
            }

            $master_jenis_jabatan_id = $json_opd['data'][0]['master_jenis_jabatan_id'];
            $param_jenis_jabatan = array("token"=>$token,"id"=>$master_jenis_jabatan_id);
            $get_jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
            $json_jenis_jabatan = json_decode($get_jenis_jabatan,true);
            if($json_jenis_jabatan['is_error']){

            }else{
                $kelompok_jabatan = $json_jenis_jabatan['data'][0]['nama'];
            }

            $get_ikhtisiar_jabatan = $this->Api->Call("anjab/ikhtisiar_jabatan",$param);
            $json_ikhtisiar_jabatan = json_decode($get_ikhtisiar_jabatan,true);
            if($json_ikhtisiar_jabatan['is_error']){

            }else{
                $ikhtisiar_jabatan = $json_ikhtisiar_jabatan['data'][0]['ikhtisiar'];
            }

            $token = $this->session->userdata("token");
            $param_standar_kompetensi = array("token"=>$token,"nama"=>"","page"=>"x");
            $get_standar_kompetensi = $this->Api->Call("standar_kompetensi",$param_standar_kompetensi);
            $json_standar_kompetensi = json_decode($get_standar_kompetensi,true);
            if($json_standar_kompetensi['is_error']){

            }else{
                foreach($json_standar_kompetensi['data'] as $item){
                    $html_standar_kompetensi .= "<tr><td colspan='5' style='border: 1px solid black;'>" . $item['nama'] . "</td></tr>";
                    $param_non_or_urusan_pemerintahan = array("token"=>$token,"tahun"=>$tahun,"jabatan_id"=>$jabatan_id,"master_standar_kompetensi_id"=>$item['id']);
                    if($item['tipe'] == "1"){
                        $get_non_urusan_pemerintahan = $this->Api->Call("skj/non_urusan_pemerintahan_with_level_value", $param_non_or_urusan_pemerintahan);
                        $json_non_urusan_pemerintahan = json_decode($get_non_urusan_pemerintahan,true);
                        if($json_non_urusan_pemerintahan['is_error']){

                        }else{
                            $no = 0;
                            foreach($json_non_urusan_pemerintahan['data'] as $item){
                                $no++;
                                $html_standar_kompetensi .= "<tr>";
                                $html_standar_kompetensi .= "<td colspan='2' style='border-left:1px solid black;border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $no . ". " . ucwords(strtolower($item['nama'])) . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;text-align: center;vertical-align: top;'>" . $item['level'] . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $item['deskripsi'] . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $item['indikator_kompetensi'] . "</td>";
                                $html_standar_kompetensi .= "</tr>";
                            }
                        }
                    }else{
                        $get_urusan_pemerintahan = $this->Api->Call("skj/urusan_pemerintahan_with_level_value", $param_non_or_urusan_pemerintahan);
                        $json_urusan_pemerintahan = json_decode($get_urusan_pemerintahan,true);
                        if($json_urusan_pemerintahan['is_error']){

                        }else{
                            $no = 0;
                            foreach($json_urusan_pemerintahan['data'] as $item){
                                $no++;
                                $html_standar_kompetensi .= "<tr>";
                                $html_standar_kompetensi .= "<td colspan='2' style='border-left:1px solid black;border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $no . ". " . ucwords(strtolower($item['nama'])) . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;text-align: center;vertical-align: top;'>" . $item['level'] . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $item['deskripsi'] . "</td>";
                                $html_standar_kompetensi .= "<td style='border-right:1px solid black;border-bottom: 1px solid black;vertical-align: top;'>" . $item['indikator_kompetensi'] . "</td>";
                                $html_standar_kompetensi .= "</tr>";
                            }
                        }


                        $get_pendidikan = $this->Api->Call("anjab/kualifikasi_jabatan_pendidikan",$param);
                        $json_pendidikan = json_decode($get_pendidikan,true);
                        if($json_pendidikan['is_error']){

                        }else{
                            $html_pendidikan .= "<tr><td rowspan='2' style='border-left: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: top;'>A. Pendidikan</td><td style='border-right: 1px solid black;border-bottom: 1px solid black;'>1. Jenjang</td><td colspan='4' style='border-right: 1px solid black;border-bottom: 1px solid black;'>" . $json_pendidikan['data'][0]['nama_pendidikan'] . "</td></tr>";
                            $html_pendidikan .= "<tr><td style='border-right: 1px solid black;border-bottom: 1px solid black;'>2. Bidang Ilmu</td><td colspan='4' style='border-right: 1px solid black;border-bottom: 1px solid black;'>" . $json_pendidikan['data'][0]['jurusan'] . "</td></tr>";
                        }

                        $get_pelatihan = $this->Api->Call("skj/syarat_jabatan_pelatihan",$param);
                        $json_pelatihan = json_decode($get_pelatihan,true);
                        if($json_pelatihan['is_error']){

                        }else{
                            $jml_json_pelatihan = 0;
                            foreach($json_pelatihan['data'] as $item){
                                $jml_json_pelatihan++;
                            }
                            $no = 0;
                            foreach($json_pelatihan['data'] as $item){
                                $no++;
                                $html_pelatihan .= "<tr>";
                                if($no == 1){
                                    $html_pelatihan .= "<td rowspan='" . $jml_json_pelatihan . "' style='border-left: 1px solid black;border-right: 1px solid black;border-bottom: 1px solid black;vertical-align: top;'>B. Pelatihan</td>";
                                }
                                $html_pelatihan .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $no . ". " . ucwords(strtolower($item['nama_jenis_pelatihan'])) . "</td>";
                                $html_pelatihan .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td>";
                                $is_mutlak = "";
                                $is_penting = "";
                                $is_perlu = "";
                                if($item['tingkat_penting'] == "1"){
                                    $is_mutlak  = "V";
                                }else if($item['tingkat_penting'] == "2"){
                                    $is_penting  = "V";
                                }else if($item['tingkat_penting'] == "3"){
                                    $is_perlu  = "V";
                                }
                                $html_pelatihan .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_mutlak . "</td>";
                                $html_pelatihan .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_penting . "</td>";
                                $html_pelatihan .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_perlu . "</td>";
                                $html_pelatihan .= "</tr>";
                            }
                        }

                        $get_pengalaman_kerja = $this->Api->Call("skj/syarat_jabatan_pengalaman_kerja",$param);
                        $json_pengalaman_kerja = json_decode($get_pengalaman_kerja,true);
                        if($json_pengalaman_kerja['is_error']){

                        }else{
                            $jml_json_pengalaman_kerja = 0;
                            foreach($json_pengalaman_kerja['data'] as $item){
                                $jml_json_pengalaman_kerja++;
                            }
                            $no = 0;
                            foreach($json_pengalaman_kerja['data'] as $item){
                                $no++;
                                $html_pengalaman_kerja .= "<tr>";
                                if($no == 1){
                                    $html_pengalaman_kerja .= "<td colspan='2' rowspan='" . $jml_json_pengalaman_kerja . "' style='border-left: 1px solid black;border-right: 1px solid black;border-bottom: 1px solid black;vertical-align: top;'>C. Pengalaman Kerja</td>";
                                }
                                $html_pengalaman_kerja .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td>";
                                $is_mutlak = "";
                                $is_penting = "";
                                $is_perlu = "";
                                if($item['tingkat_penting'] == "1"){
                                    $is_mutlak  = "V";
                                }else if($item['tingkat_penting'] == "2"){
                                    $is_penting  = "V";
                                }else if($item['tingkat_penting'] == "3"){
                                    $is_perlu  = "V";
                                }
                                $html_pengalaman_kerja .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_mutlak . "</td>";
                                $html_pengalaman_kerja .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_penting . "</td>";
                                $html_pengalaman_kerja .= "<td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $is_perlu . "</td>";
                                $html_pengalaman_kerja .= "</tr>";
                            }
                        }

                        $get_golongan = $this->Api->Call("skj/syarat_jabatan_golongan",$param);
                        $json_golongan = json_decode($get_golongan,true);
                        if($json_golongan['is_error']){

                        }else{
                            $html_golongan .= "<tr><td colspan='2' style='border-left: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;'>D. Pangkat Kerja</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>" . $json_golongan['data'][0]['nama'] . " - " . $json_golongan['data'][0]['pangkat']  . "</td></tr>";
                        }

                        $get_indikator_kinerja_jabatan = $this->Api->Call("skj/syarat_jabatan_indikator_kinerja_jabatan",$param);
                        $json_indikator_kinerja_jabatan = json_decode($get_indikator_kinerja_jabatan,true);
                        if($json_indikator_kinerja_jabatan['is_error']){

                        }else{
                            $html_indikator_kinerja_jabatan .= "<tr><td colspan='2' style='border-left: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;'>E. Indikator Kinerja Jabatan</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>" . $json_indikator_kinerja_jabatan['data'][0]['uraian']  . "</td></tr>";
                        }
                    }
                }
            }
        }


        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Dokumen SKJ</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>STANDAR KOMPETENSI JABATAN STRUKTURAL</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:70%;'></th></tr>";
        $html .= "<tr><td style='vertical-align: top;'>NAMA JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_nama . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>KELOMPOK JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $kelompok_jabatan . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>URUSAN PEMERINTAH</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $urusan_pemerintahan . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>KODE JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_kode . "</td></tr>";
        $html .= "</table>";
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;'>";
        $html .= "<tr style='visibility: hidden;'><th style='width:5%;'></th><th style='width:28%;'></th><th style='width:8%;'></th><th style='width:30%;'></th><th style='width:30%;'></th></tr>";
        $html .= "<tr><td colspan='5' style='border-top: 1px solid black;border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;text-align: center;'>JABATAN " . strtoupper($kelompok_jabatan) . "</td></tr>";
        $html .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;'>I.</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>IKHTISAR JABATAN</td></tr>";
        $html .= "<tr><td colspan='2' style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;'>Ikhtisiar Jabatan</td><td colspan='3' style='border-bottom: 1px solid black;border-right: 1px solid black;'>" . $ikhtisiar_jabatan . "</td></tr>";
        $html .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;'>II.</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>STANDAR KOMPETENSI</td></tr>";
        $html .= "<tr><td colspan='2' style='border-bottom: 1px solid black;border-left: 1px solid black;text-align: center;'>Kompetensi</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;text-align: center;'>Level</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;text-align: center;'>Deskripsi</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;text-align: center;'>Indikator Kompetensi</td></tr>";
        $html .= $html_standar_kompetensi;
        $html .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;'>III.</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>PERSYARATAN JABATAN</td></tr>";
        $html .= "</table>";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;'>";
        $html .= "<tr><td colspan='2' rowspan='2' style='border-left: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Jenis Persyaratan</td><td rowspan='2' style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Uraian</td><td colspan='3'  style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Tingkat Pentingnya Terhadap Jabatan</td></tr>";
        $html .= "<tr><td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Mutlak</td><td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Penting</td><td style='border-bottom: 1px solid black;border-right: 1px solid black;text-align: center;'>Perlu</td></tr>";
        $html .= $html_pendidikan;
        $html .= $html_pelatihan;
        $html .= $html_pengalaman_kerja;
        $html .= $html_golongan;
        $html .= $html_indikator_kinerja_jabatan;
        $html .= "</table>";
        $html .= "</body>";
        $html .= "</html>";
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'potrait');
        $dompdf->render();
        $dompdf->stream("dokumen_evjab.pdf", array("Attachment" => false));
        exit(0);
    }
}
?>