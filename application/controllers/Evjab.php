<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Dompdf\Dompdf;
use Dompdf\Options;

class Evjab extends CI_Controller {

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
            $this->load->view("evjab");
        }else{
            redirect("login");
        }
    }
    public function edit($id)
    {
        if($this->session->userdata("is_login")){
            $this->load->view("evjab_edit",array("id"=>$id));
        }else{
            redirect("login");
        }
    }
    public function printdata($id)
    {
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $jabatan_id = $id;
        $jabatan_nama = "";
        $nama_opd = "";
        $tahun = "";
        $tipe = "";
        $nama_unit = "";
        $nama_jenis_jabatan = "";
        $ikhtisiar_jabatan = "";
        $html_tugas_pokok = "";
        $html_tanggung_jawab = "";
        $html_hasil_kerja = "";
        $html_tingkat_faktor = "";
        $token = $this->session->userdata("token");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $nama_opd = $json_opd['data'][0]['nama'];
            $tahun = $json_opd['data'][0]['tahun'];
            $nama_unit = $json_opd['data'][0]['unit'];
            $master_jenis_jabatan_id = $json_opd['data'][0]['master_jenis_jabatan_id'];

            $param_jenis_jabatan = array("token"=>$token,"id"=>$master_jenis_jabatan_id);
            $jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
            $json_jenis_jabatan = json_decode($jenis_jabatan,true);
            if($json_jenis_jabatan['is_error']){

            }else{
                $nama_jenis_jabatan = $json_jenis_jabatan['data'][0]['nama'];
                $tipe = $json_jenis_jabatan['data'][0]['tipe'];
            }

            $get_ikhtisiar_jabatan = $this->Api->Call("anjab/ikhtisiar_jabatan",$param);
            $json_ikhtisiar_jabatan = json_decode($get_ikhtisiar_jabatan,true);
            if($json_ikhtisiar_jabatan['is_error']){

            }else{
                $ikhtisiar_jabatan = $json_ikhtisiar_jabatan['data'][0]['ikhtisiar'];
            }

            $get_tugas_pokok = $this->Api->Call("anjab/tugas_pokok",$param);
            $json_tugas_pokok = json_decode($get_tugas_pokok,true);
            if($json_tugas_pokok['is_error']){

            }else{
                foreach($json_tugas_pokok['data'] as $k=>$item){
                    $html_tugas_pokok .= "<tr><td>&nbsp;</td><td>&nbsp;</td><td style='vertical-align: top;'>" . ($k + 1) . ". </td><td colspan='3' style='vertical-align: top;'>" . $item['uraian'] . "</td></tr>";
                }
            }

            $get_tanggung_jawab = $this->Api->Call("anjab/tanggung_jawab",$param);
            $json_tanggung_jawab = json_decode($get_tanggung_jawab,true);
            if($json_tanggung_jawab['is_error']){

            }else{
                foreach($json_tanggung_jawab['data'] as $k=>$item){
                   $html_tanggung_jawab .= "<tr><td>&nbsp;</td><td>&nbsp;</td><td style='vertical-align: top;'>" . ($k + 1) . ". </td><td colspan='3' style='vertical-align: top;'>" . $item['tanggung_jawab'] . "</td></tr>";
                }
            }

            $get_hasil_kerja = $this->Api->Call("anjab/hasil_kerja",$param);
            $json_hasil_kerja = json_decode($get_hasil_kerja,true);
            if($json_hasil_kerja['is_error']){

            }else{
                foreach($json_hasil_kerja['data'] as $k=>$item){
                    $html_hasil_kerja .= "<tr><td>&nbsp;</td><td style='vertical-align: top;'>" . ($k + 1) . ". </td><td colspan='4' style='vertical-align: top;'>" . $item['hasil_kerja'] . "</td></tr>";
                }
            }

            $param_faktor = array("jabatan_id"=>$jabatan_id,"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe);
            $get_faktor = $this->Api->Call("evjab/data",$param_faktor);
            $json_faktor = json_decode($get_faktor,true);
            if($json_faktor['is_error']){

            }else{
                foreach($json_faktor['data'] as $k=>$item){
                    if($k == 0){
                        $html_tingkat_faktor .= "<tr><td>&nbsp;</td><td colspan='2' style='vertical-align: top;'><b>FAKTOR " . $item['kode'] . "</b></td><td style='text-align:center;'><b> : </b></td><td colspan='2' style='vertical-align: top;'><b>" . strtoupper($item['uraian'] . " (FK. " . $item['kode'] . " - " . $item['level'] . " = " . $item['nilai'] . ")") ."</b></td></tr>";
                        $html_tingkat_faktor .= "<tr><td colspan='3'>&nbsp;</td><td style='text-align: center;'><b>a. </b></td><td colspan='2'><b>RUANG LINGKUP</b></td></tr>";
                        $html_tingkat_faktor .= "<tr><td colspan='4'>&nbsp;</td><td colspan='2'>" . $item['ruang_lingkup'] . "</td></tr>";
                        $html_tingkat_faktor .= "<tr><td colspan='3'>&nbsp;</td><td style='text-align: center;'><b>b. </b></td><td colspan='2'><b>DAMPAK</b></td></tr>";
                        $html_tingkat_faktor .= "<tr><td colspan='4'>&nbsp;</td><td colspan='2'>" . $item['dampak'] . "</td></tr>";
                    }else{
                        $html_tingkat_faktor .= "<tr><td>&nbsp;</td><td colspan='2' style='vertical-align: top;'><b>FAKTOR " . $item['kode'] . "</b></td><td style='text-align:center;'><b> : </b></td><td colspan='2' style='vertical-align: top;'><b>" . strtoupper($item['uraian'] . " (FK. " . $item['kode'] . " - " . $item['level'] . " = " . $item['nilai'] . ")") ."</b></td></tr>";
                        $html_tingkat_faktor .= "<tr><td colspan='4'>&nbsp;</td><td colspan='2'>" . $item['ruang_lingkup'] . "</td></tr>";
                    }
                }
            }
        }
        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>INFORMASI FAKTOR JABATAN " . strtoupper($nama_jenis_jabatan) . "</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>INFORMASI FAKTOR JABATAN " . strtoupper($nama_jenis_jabatan) . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:70%;'></th></tr>";
        $html .= "<tr><td style='vertical-align: top;'>NAMA JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_nama . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>UNIT KERJA</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $nama_unit . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>INSTANSI</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . ucwords(strtolower($nama_opd)) . "</td></tr>";
        $html .= "<tr><td colspan='2'>&nbsp;</td><td style='vertical-align: top;'>Pemerintah Kabupaten Pati</td></tr>";
        $html .= "</table>";
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:20%;'></th><th style='width:60%;'></th></tr>";
        $html .= "<tr><td><b>I. </b></td><td colspan='5'><b>PERAN JABATAN</b></td></tr>";
        $html .= "<tr><td>&nbsp;</td><td colspan='5'>" . $ikhtisiar_jabatan . "</td></tr>";
        $html .= "<tr><td colspan='6'>&nbsp;</td></tr>";
        $html .= "<tr><td><b>II. </b></td><td colspan='5'><b>URAIAN TUGAS DAN TANGGUNG JAWAB</b></td></tr>";
        $html .= "<tr><td>&nbsp;</td><td><b>A. </b></td><td colspan='5'><b>URAIAN TUGAS</b></td></tr>";
        $html .= $html_tugas_pokok;
        $html .= "<tr><td colspan='6'>&nbsp;</td></tr>";
        $html .= "<tr><td>&nbsp;</td><td><b>B. </b></td><td colspan='5'><b>TANGGUNG JAWAB</b></td></tr>";
        $html .= $html_tanggung_jawab;
        $html .= "<tr><td colspan='6'>&nbsp;</td></tr>";
        $html .= "<tr><td><b>III. </b></td><td colspan='5'><b>HASIL KERJA</b></td></tr>";
        $html .= $html_hasil_kerja;
        $html .= "<tr><td colspan='6'>&nbsp;</td></tr>";
        $html .= "<tr><td><b>IV. </b></td><td colspan='5'><b>TINGKAT FAKTOR</b></td></tr>";
        $html .= $html_tingkat_faktor;
        $html .= "</table>";
        $html .= "</body>";
        $html .= "</html>";
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'potrait');
        $dompdf->render();
        $dompdf->stream("dokumen_evjab.pdf", array("Attachment" => false));
        exit(0);
    }
    public function printformulir($jabatan_id){
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);

        $jabatan_nama = "";
        $nama_opd = "";
        $tahun = "";
        $nama_unit = "";
        $nama_jenis_jabatan = "";
        $tipe = "";
        $kelas_jabatan = "";
        $kelas_jabatan_batas_awal = "";
        $kelas_jabatan_batas_akhir = "";
        $html_tingkat_faktor = "";
        $html_tim_analisis = "";
        $total_nilai = 0;

        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $nama_opd = $json_opd['data'][0]['nama'];
            $tahun = $json_opd['data'][0]['tahun'];
            $nama_unit = $json_opd['data'][0]['unit'];
            $master_jenis_jabatan_id = $json_opd['data'][0]['master_jenis_jabatan_id'];

            $param_jenis_jabatan = array("token"=>$token,"id"=>$master_jenis_jabatan_id);
            $jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
            $json_jenis_jabatan = json_decode($jenis_jabatan,true);
            if($json_jenis_jabatan['is_error']){

            }else{
                $nama_jenis_jabatan = $json_jenis_jabatan['data'][0]['nama'];
                $tipe = $json_jenis_jabatan['data'][0]['tipe'];
            }

            $param_faktor = array("jabatan_id"=>$jabatan_id,"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe);
            $get_faktor = $this->Api->Call("evjab/data",$param_faktor);
            $json_faktor = json_decode($get_faktor,true);
            if($json_faktor['is_error']){

            }else{
                foreach($json_faktor['data'] as $k=>$item){
                    $html_tingkat_faktor .= "<tr><td style='vertical-align: top;border-left: 1px solid black;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>" . ($k + 1) . "</td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;'>FAKTOR " . $item['kode'] . " : " . $item['uraian'] . "</td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>" . $this->PublicFunction->FormatAngka($item['nilai']) . "</td><td style='border-bottom: 1px solid black;border-right: 1px solid black;height:50px;'>&nbsp;</td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>Tingkat Faktor " . $item['kode'] . " - " . $item['level'] . "</td></tr>";
                    $total_nilai = $total_nilai + $item['nilai'];
                }
            }

            $param_kelas_jabatan = array("token"=>$token,"nama"=>"","page"=>"1","tahun"=>$tahun);
            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                $kelas_jabatan = $json_kelas_jabatan['data'][0]['kelas'];
                $kelas_jabatan_batas_awal = $json_kelas_jabatan['data'][0]['batas_awal'];
                $kelas_jabatan_batas_akhir = $json_kelas_jabatan['data'][0]['batas_akhir'];
            }

            $get_tim_analisis = $this->Api->Call("evjab/tim_analisis",$param);
            $json_tim_analisis = json_decode($get_tim_analisis,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                $data_analisis = $json_tim_analisis['data'][0];
                $html_tim_analisis .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>Tim Analisis Dan Evaluasi Jabatan</h4></div>";
                $html_tim_analisis .= "<div style='text-align:center;'>Ketua Tim</div>";
                $html_tim_analisis .= "<br><br>";
                $html_tim_analisis .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;'>";
                $html_tim_analisis .= "<tr><td colspan='2' style='text-align: center;'>" . $data_analisis['nama_ketua'] . "</td></tr>";
                $html_tim_analisis .= "<tr><td style='text-align: center;'>" . $data_analisis['jabatan_pejabat_bersangkutan'] . "</td><td style='text-align: center;'>" . $data_analisis['jabatan_pimpinan_unit_kerja'] . "</td></tr>";
                $html_tim_analisis .= "<tr><td colspan='2' style='text-align: center;'>&nbsp;</td></tr>";
                $html_tim_analisis .= "<tr><td colspan='2' style='text-align: center;'>&nbsp;</td></tr>";
                $html_tim_analisis .= "<tr><td style='text-align: center;'>" . $data_analisis['nama_pejabat_bersangkutan'] . "</td><td style='text-align: center;'>" . $data_analisis['nama_pimpinan_unit_kerja'] . "</td></tr>";
                $html_tim_analisis .= "</table>";
            }
        }
        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>FORMULIR HASIL EVALUASI JABATAN " . strtoupper($nama_jenis_jabatan) . "</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>FORMULIR HASIL EVALUASI JABATAN " . strtoupper($nama_jenis_jabatan) . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:20%;'></th><th style='width:5%;'></th><th style='width:75%;'></th></tr>";
        $html .= "<tr><td style='vertical-align: top;'>NAMA JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_nama . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>UNIT KERJA</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $nama_unit . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>INSTANSI</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . ucwords(strtolower($nama_opd)) . "</td></tr>";
        $html .= "<tr><td colspan='2'>&nbsp;</td><td style='vertical-align: top;'>Pemerintah Kabupaten Pati</td></tr>";
        $html .= "</table>";
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:25%;'></th><th style='width:15%;'></th><th style='width:30%;'></th><th style='width:25%;'></th></tr>";
        $html .= "<tr><td colspan='2' style='border-left: 1px solid black;border-top: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;'><b>Faktor Evaluasi</b></td><td style='border-top: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;'><b>Nilai Yang Diberikan</b></td><td style='border-top: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;'><b>Standar Jabatan Administrator Yang Digunakan</b></td><td style='border-top: 1px solid black;border-bottom: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;'><b>Keterangan</b></td></tr>";
        $html .= $html_tingkat_faktor;
        $html .= "<tr><td style='vertical-align: top;border-left: 1px solid black;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>&nbsp;</td><td style='border-bottom: 1px solid black;border-right:1px solid black;vertical-align: middle;text-align: center;'><b>Total Nilai</b></td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;vertical-align: middle;'><b>" . $this->PublicFunction->FormatAngka($total_nilai) . "</b></td><td style='border-bottom: 1px solid black;border-right: 1px solid black;height:50px;'>&nbsp;</td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>&nbsp;</td></tr>";
        $html .= "<tr><td style='vertical-align: top;border-left: 1px solid black;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>&nbsp;</td><td style='border-bottom: 1px solid black;border-right:1px solid black;vertical-align: middle;text-align: center;'><b>Kelas Jabatan</b></td><td style='vertical-align: top;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;vertical-align: middle;'><b>" . $kelas_jabatan . "</b></td><td style='border-bottom: 1px solid black;border-right: 1px solid black;height:50px;'>&nbsp;</td><td style='vertical-align: middle;border-bottom: 1px solid black;border-right:1px solid black;text-align:center;'>( " . $this->PublicFunction->FormatAngka($kelas_jabatan_batas_awal) . " - " . $this->PublicFunction->FormatAngka($kelas_jabatan_batas_akhir) . " )</td></tr>";
        $html .= "</table>";
        $html .= "<br><br>";
        $html .= $html_tim_analisis;
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