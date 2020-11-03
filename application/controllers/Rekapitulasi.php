<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Dompdf\Dompdf;
use Dompdf\Options;

class Rekapitulasi extends CI_Controller {

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
            $this->load->view("rekapitulasi");
        }else{
            redirect("login");
        }
    }
    public function printdata($tipe,$tahun,$id){
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        $param = array("id"=>$id,"token"=>$token);

        $nama_opd = "";
        $html_kelas_jabatan = "";

        $get_opd = $this->Api->Call("opd/detail",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $nama_opd = $json_opd['data'][0]['nama'];

            $param_kelas_jabatan = array(
                "token"=>$token,
                "nama"=>"",
                "tahun"=>$tahun,
                "page"=>""
            );
            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                $no =0;
                foreach($json_kelas_jabatan['data'] as $item){
                    $no++;
                    $html_kelas_jabatan .= "<tr><td>" . $no . "</td><td>" . $item['kelas'] . "</td><td></td></tr>";
                }
            }
        }


        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Lampiran 1 - Rekapitulasi Kelas Jabatan dan Persediaan Pegawai </title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>REKAPITULASI KELAS JABATAN DAN PERSEDIAAN PEGAWAI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DI LINGKUNGAN " . strtoupper($nama_opd) . "</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>KABUPATEN PATI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>PERIODE " . $tahun . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;' border='1'>";
        $html .= "<tr><th style='width:15%;text-align: center;'>NO</th><th style='width:25%;text-align: center;'>KELAS JABATAN</th><th style='width:60%;text-align: center;'>PERSEDIAAN PEGAWAI</th></tr>";
        $html .= $html_kelas_jabatan;
        $html .= "</table>";
        $html .= "<br />";
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