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
        $urusan_pemerintahan = "";
        $kelompok_jabatan = "";
        $ikhtisiar_jabatan = "";

        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $jabatan_kode = $json_opd['data'][0]['kode_jabatan'];

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
        }


        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Dokumen SKJ</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
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
        $html .= "<tr><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:5%;'></th><th style='width:20%;'></th></tr>";
        $html .= "<tr><td colspan='5' style='border-top: 1px solid black;border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;text-align: center;'>JABATAN " . strtoupper($kelompok_jabatan) . "</td></tr>";
        $html .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;'>I.</td><td colspan='4' style='border-bottom: 1px solid black;border-right: 1px solid black;'>IKHTISAR JABATAN</td></tr>";
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