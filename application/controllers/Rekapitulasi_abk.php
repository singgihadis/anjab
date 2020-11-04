<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Dompdf\Dompdf;
use Dompdf\Options;

class Rekapitulasi_abk extends CI_Controller {

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
            $this->load->view("rekapitulasi_abk");
        }else{
            redirect("login");
        }
    }
    public function printdata_lampiran($tahun,$id){
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        $param = array("id"=>$id,"token"=>$token);

        $nama_opd = "";
        $html_data = "";

        $get_opd = $this->Api->Call("opd/detail",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $nama_opd = $json_opd['data'][0]['nama'];
            $html_data .= "<tr><th style='text-align: center;width: 5%;font-size: 12px;'>NO</th><th style='text-align: center;width: 45%;font-size: 12px;'>NAMA JABATAN</th><th style='text-align: center;width: 15%;font-size: 12px;'>JUMLAH PEMANGKU JABATAN</th><th style='text-align: center;width: 15%;font-size: 12px;'>HASIL ABK</th><th style='text-align: center;width: 15%;font-size: 12px;'>KELEBIHAN / KEKURANGAN</th></tr>";
            $html_data .= "<tr><td style='text-align: center'>1</td><td style='text-align: center'>2</td><td style='text-align: center'>3</td><td style='text-align: center'>4</td><td style='text-align: center'>5</td></tr>";

            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{
                $no1 = 0;
                foreach($json_jabatan['data'] as $item){
                    if($item['tingkat'] == "0"){
                        $no1++;
                        $data_builder = $this->htmlbuilder_for_printdata($no1,$token,$item);
                        $html_data .= $data_builder[3];
                        $jabatan_id_0 = $item['id'];
                        $no2 = 0;
                        foreach($json_jabatan['data'] as $item1){
                            if($item1['tingkat'] == "1" && $jabatan_id_0 == $item1['jabatan_id']){
                                $no2++;
                                $data_builder = $this->htmlbuilder_for_printdata($no1 . "." .$no2,$token,$item1);
                                $html_data .= $data_builder[3];
                                $jabatan_id_1 = $item['id'];
                                $no3 = 0;
                                foreach($json_jabatan['data'] as $item2){
                                    if($item2['tingkat'] == "2" && $jabatan_id_1 == $item2['jabatan_id']){
                                        $no3++;
                                        $data_builder = $this->htmlbuilder_for_printdata($no1 . "." .$no2 . "." .$no3,$token,$item2);
                                        $html_data .= $data_builder[3];
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>REKAPITULASI ANALISIS BEBAN KERJA (ABK)</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>REKAPITULASI ANALISIS BEBAN KERJA (ABK)</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DI LINGKUNGAN " . strtoupper($nama_opd) . "</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>KABUPATEN PATI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>PERIODE " . $tahun . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;' border='1'>";
        $html .= $html_data;
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
    private function htmlbuilder_for_printdata($no,$token,$item){
        $html_data = "";
        $jml_pegawai = 0;
        $total_kebutuhan_pegawai = 0;
        $param_jabatan_jml_pegawai = array("token"=>$token,"jabatan_id"=>$item['id']);
        $get_jabatan_jml_pegawai = $this->Api->Call("jabatan/jml_pegawai",$param_jabatan_jml_pegawai);
        $json_jabatan_jml_pegawai = json_decode($get_jabatan_jml_pegawai,true);
        if($json_jabatan_jml_pegawai['is_error']){

        }else{
            foreach($json_jabatan_jml_pegawai['data'] as $item_jabatan_jml_pegawai){
                $jml_pegawai = $jml_pegawai + intval($item_jabatan_jml_pegawai['jml']);
            }
        }

        $param_abk = array("jabatan_id"=>$item['id'],"token"=>$token);
        $get_abk = $this->Api->Call("anjab/abk",$param_abk);
        $json_abk = json_decode($get_abk,true);
        if($json_abk['is_error']){

        }else{
            $total_kebutuhan_pegawai = 0.0;
            foreach($json_abk['data'] as $item_abk){
                $total_kebutuhan_pegawai = $total_kebutuhan_pegawai + doubleval($item_abk['kebutuhan_pegawai']);
            }
        }

        $rounded_total_kebutuhan_pegawai = round($total_kebutuhan_pegawai);
        $kelebihan_kekurangan = $jml_pegawai - $rounded_total_kebutuhan_pegawai;
        if($kelebihan_kekurangan > 0){
            $kelebihan_kekurangan = "+" . $kelebihan_kekurangan;
        }
        $html_data .= "<tr><td>" . $no . "</td><td>" . $item['nama'] . "</td><td style='text-align: center;'>" . $this->PublicFunction->FormatAngka($jml_pegawai) . "</td><td style='text-align: center;'>" . $rounded_total_kebutuhan_pegawai . "</td><td style='text-align: center;'>" . $kelebihan_kekurangan . "</td></tr>";
        return array($jml_pegawai,$rounded_total_kebutuhan_pegawai,$kelebihan_kekurangan,$html_data);
    }
}
?>