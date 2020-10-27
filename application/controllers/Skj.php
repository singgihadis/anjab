<?php
defined('BASEPATH') OR exit('No direct script access allowed');

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
//        $options = new Options();
//        $options->set('defaultFont', 'Serif');
//        $dompdf = new Dompdf($options);
//        $token = $this->session->userdata("token");
//        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
//
//        $jabatan_nama = "";
//        $jabatan_kode = "";
//
//        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
//        $json_opd = json_decode($get_opd,true);
//        if($json_opd['is_error']){
//
//        }else{
//            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
//            $jabatan_kode = $json_opd['data'][0]['kode_jabatan'];
//
//        }
//        $html = "";
//        $html .= "<html>";
//        $html .= "<head>";
//        $html .= "<style type='text/css'>";
//        $html .= "@page { margin: 40px 20px 40px 20px; }";
//        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
//        $html .= "</style>";
//        $html .= "</head>";
//        $html .= "<body>";
//        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>STANDAR KOMPETENSI JABATAN STRUKTURAL</h4></div>";
//        $html .= "<table style='width:100%;table-layout: fixed;'>";
//        $html .= "<tr><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:70%;'></th></tr>";
//        $html .= "<tr><td style='vertical-align: top;'>NAMA JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_nama . "</td></tr>";
//        $html .= "<tr><td style='vertical-align: top;'>UNIT KERJA</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $nama_unit . "</td></tr>";
//        $html .= "<tr><td style='vertical-align: top;'>INSTANSI</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . ucwords(strtolower($nama_opd)) . "</td></tr>";
//        $html .= "<tr><td colspan='2'>&nbsp;</td><td style='vertical-align: top;'>Pemerintah Kabupaten Pati</td></tr>";
//        $html .= "</table>";
//        $html .= "<br />";
//        $html .= "<table style='width:100%;table-layout: fixed;'>";
//        $html .= "<tr><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:20%;'></th><th style='width:60%;'></th></tr>";
//        $html .= "</table>";
//        $html .= "</body>";
//        $html .= "</html>";
//        $dompdf->loadHtml($html);
//        $dompdf->setPaper('A4', 'potrait');
//        $dompdf->render();
//        $dompdf->stream("dokumen_evjab.pdf", array("Attachment" => false));
//        exit(0);
    }
}
?>