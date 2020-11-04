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
    public function printdata_lampiran1($tahun,$id){
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
                "page"=>"x"
            );

            $arr_kelas_jabatan = [];

            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                foreach($json_kelas_jabatan['data'] as $item){
                    array_push($arr_kelas_jabatan,"0");
                }
            }

            $tanpa_kelas = 0;


            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{

                foreach($json_jabatan['data'] as $item){
                    $param_jabatan_jml_pegawai = array("token"=>$token,"jabatan_id"=>$item['id']);
                    $get_jabatan_jml_pegawai = $this->Api->Call("jabatan/jml_pegawai",$param_jabatan_jml_pegawai);
                    $json_jabatan_jml_pegawai = json_decode($get_jabatan_jml_pegawai,true);
                    if($json_jabatan_jml_pegawai['is_error']){

                    }else{
                        foreach($json_jabatan_jml_pegawai['data'] as $item_jabatan_jml_pegawai){
                            $tanpa_kelas = $tanpa_kelas + intval($item_jabatan_jml_pegawai['jml']);
                        }
                    }

                    $param_jenis_jabatan = array("token"=>$token,"id"=>$item['master_jenis_jabatan_id']);
                    $get_jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
                    $json_jenis_jabatan = json_decode($get_jenis_jabatan,true);
                    if($json_jenis_jabatan['is_error']){

                    }else{
                        $tipe_jenis_jabatan = $json_jenis_jabatan['data'][0]['tipe'];
                        $param_evjab = array("jabatan_id"=>$item['id'],"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe_jenis_jabatan);
                        $get_evjab = $this->Api->Call("evjab/data",$param_evjab);
                        $json_evjab = json_decode($get_evjab,true);
                        if($json_evjab['is_error']){

                        }else{
                            $total = 0;
                            foreach($json_evjab['data'] as $item_evjab){
                                $total = $total + intval($item_evjab['nilai']);
                            }
                            foreach($json_kelas_jabatan['data'] as $k=>$item_kelas_jabatan){
                                if(intval($item_kelas_jabatan['batas_awal']) <= $total && intval($item_kelas_jabatan['batas_akhir']) >= $total){
                                    $n_kelas_jabatan = intval($arr_kelas_jabatan[$k]);
                                    $arr_kelas_jabatan[$k] = $n_kelas_jabatan + 1;
                                }
                            }
                        }
                    }


                }
            }
            if($json_kelas_jabatan['is_error']){

            }else{
                $jml_jabatan = 0;
                $no =0;
                foreach($json_kelas_jabatan['data'] as $k=>$item){
                    $no++;
                    $html_kelas_jabatan .= "<tr><td style='text-align: center;'>" . $no . "</td><td style='text-align: center;'>" . $item['kelas'] . "</td><td style='text-align: center;'>" . $this->PublicFunction->FormatAngka($arr_kelas_jabatan[$k],true) . "</td></tr>";
                    $jml_jabatan = $jml_jabatan + intval($arr_kelas_jabatan[$k]);
                }
                $no++;
                $jml_jabatan = $jml_jabatan + $tanpa_kelas;
                $html_kelas_jabatan .= "<tr><td style='text-align: center;'>" . $no . "</td><td style='text-align: center;'>Tanpa Kelas</td><td style='text-align: center;'>" . $this->PublicFunction->FormatAngka($tanpa_kelas,true) . "</td></tr>";
                $html_kelas_jabatan .= "<tr><td colspan='2' style='text-align: center;'>Total</td><td style='text-align: center;'>" . $this->PublicFunction->FormatAngka($jml_jabatan) . "</td></tr>";
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
        $html .= "<tr><th style='width:10%;text-align: center;'>NO</th><th style='width:20%;text-align: center;'>KELAS JABATAN</th><th style='width:70%;text-align: center;'>PERSEDIAAN PEGAWAI</th></tr>";
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
    public function printdata_lampiran2($tahun,$id){
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

            $param_kelas_jabatan = array(
                "token"=>$token,
                "nama"=>"",
                "tahun"=>$tahun,
                "page"=>"x"
            );

            $arr_kelas_jabatan = [];

            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                foreach($json_kelas_jabatan['data'] as $item){
                    array_push($arr_kelas_jabatan,"0");
                }
            }



            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{
                $total_pegawai = 0;
                $no = 0;
                foreach($json_jabatan['data'] as $item){

                    $param_jenis_jabatan = array("token"=>$token,"id"=>$item['master_jenis_jabatan_id']);
                    $get_jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
                    $json_jenis_jabatan = json_decode($get_jenis_jabatan,true);
                    if($json_jenis_jabatan['is_error']){

                    }else{
                        $tipe_jenis_jabatan = $json_jenis_jabatan['data'][0]['tipe'];
                        if($tipe_jenis_jabatan == "1"){
                            $kelas_jabatan = "";
                            $jml_pegawai = 0;
                            $no++;
                            $param_evjab = array("jabatan_id"=>$item['id'],"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe_jenis_jabatan);
                            $get_evjab = $this->Api->Call("evjab/data",$param_evjab);
                            $json_evjab = json_decode($get_evjab,true);
                            if($json_evjab['is_error']){

                            }else{
                                $total = 0;
                                foreach($json_evjab['data'] as $item_evjab){
                                    $total = $total + intval($item_evjab['nilai']);
                                }
                                foreach($json_kelas_jabatan['data'] as $k=>$item_kelas_jabatan){
                                    if(intval($item_kelas_jabatan['batas_awal']) <= $total && intval($item_kelas_jabatan['batas_akhir']) >= $total){
                                        $kelas_jabatan = $item_kelas_jabatan['kelas'];
                                    }
                                }
                            }

                            $param_jabatan_jml_pegawai = array("token"=>$token,"jabatan_id"=>$item['id']);
                            $get_jabatan_jml_pegawai = $this->Api->Call("jabatan/jml_pegawai",$param_jabatan_jml_pegawai);
                            $json_jabatan_jml_pegawai = json_decode($get_jabatan_jml_pegawai,true);
                            if($json_jabatan_jml_pegawai['is_error']){

                            }else{
                                foreach($json_jabatan_jml_pegawai['data'] as $item_jabatan_jml_pegawai){
                                    $jml_pegawai = $jml_pegawai + intval($item_jabatan_jml_pegawai['jml']);
                                }
                            }
                            $total_pegawai = $total_pegawai + $jml_pegawai;
                            $html_data .= "<tr><td style='text-align: center;'>" . $no . "</td><td>" . $item['nama'] . "</td><td style='text-align:center;'>" . $kelas_jabatan . "</td><td style='text-align:center;'>" . $this->PublicFunction->FormatAngka($jml_pegawai) . "</td></tr>";
                        }
                    }
                }
                $html_data .= "<tr><td colspan='3' style='text-align: center;'><b>Total</b></td><td style='text-align: center;'><b>" . $total_pegawai . "</b></td></tr>";
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Lampiran 2 - Rekapitulasi Kelas Jabatan dan Persediaan Pegawai </title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DAFTAR NAMA JABATAN STRUKTURAL, KELAS JABATAN, DAN PERSEDIAAN PEGAWAI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DI LINGKUNGAN " . strtoupper($nama_opd) . "</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>KABUPATEN PATI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>PERIODE " . $tahun . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;' border='1'>";
        $html .= "<tr><th style='width:5%;text-align: center;'>NO</th><th style='width:45%;text-align: center;'>NAMA JABATAN STRUKTURAL</th><th style='width:20%;text-align: center;'>KELAS JABATAN</th><th style='width:30%;text-align: center;'>PERSEDIAAN PEGAWAI</th></tr>";
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
    public function printdata_lampiran3($tahun,$id){
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

            $param_kelas_jabatan = array(
                "token"=>$token,
                "nama"=>"",
                "tahun"=>$tahun,
                "page"=>"x"
            );

            $arr_kelas_jabatan = [];

            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                foreach($json_kelas_jabatan['data'] as $item){
                    array_push($arr_kelas_jabatan,"0");
                }
            }



            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{
                $total_pegawai = 0;
                $no = 0;
                foreach($json_jabatan['data'] as $item){

                    $param_jenis_jabatan = array("token"=>$token,"id"=>$item['master_jenis_jabatan_id']);
                    $get_jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
                    $json_jenis_jabatan = json_decode($get_jenis_jabatan,true);
                    if($json_jenis_jabatan['is_error']){

                    }else{
                        $tipe_jenis_jabatan = $json_jenis_jabatan['data'][0]['tipe'];
                        if($tipe_jenis_jabatan == "2"){
                            $kelas_jabatan = "";
                            $jml_pegawai = 0;
                            $no++;
                            $param_evjab = array("jabatan_id"=>$item['id'],"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe_jenis_jabatan);
                            $get_evjab = $this->Api->Call("evjab/data",$param_evjab);
                            $json_evjab = json_decode($get_evjab,true);
                            if($json_evjab['is_error']){

                            }else{
                                $total = 0;
                                foreach($json_evjab['data'] as $item_evjab){
                                    $total = $total + intval($item_evjab['nilai']);
                                }
                                foreach($json_kelas_jabatan['data'] as $k=>$item_kelas_jabatan){
                                    if(intval($item_kelas_jabatan['batas_awal']) <= $total && intval($item_kelas_jabatan['batas_akhir']) >= $total){
                                        $kelas_jabatan = $item_kelas_jabatan['kelas'];
                                    }
                                }
                            }

                            $param_jabatan_jml_pegawai = array("token"=>$token,"jabatan_id"=>$item['id']);
                            $get_jabatan_jml_pegawai = $this->Api->Call("jabatan/jml_pegawai",$param_jabatan_jml_pegawai);
                            $json_jabatan_jml_pegawai = json_decode($get_jabatan_jml_pegawai,true);
                            if($json_jabatan_jml_pegawai['is_error']){

                            }else{
                                foreach($json_jabatan_jml_pegawai['data'] as $item_jabatan_jml_pegawai){
                                    $jml_pegawai = $jml_pegawai + intval($item_jabatan_jml_pegawai['jml']);
                                }
                            }
                            $total_pegawai = $total_pegawai + $jml_pegawai;
                            $html_data .= "<tr><td style='text-align: center;'>" . $no . "</td><td>" . $item['nama'] . "</td><td style='text-align:center;'>" . $kelas_jabatan . "</td><td style='text-align:center;'>" . $this->PublicFunction->FormatAngka($jml_pegawai) . "</td></tr>";
                        }
                    }
                }
                $html_data .= "<tr><td colspan='3' style='text-align: center;'><b>Total</b></td><td style='text-align: center;'><b>" . $total_pegawai . "</b></td></tr>";
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Lampiran 3 - Rekapitulasi Kelas Jabatan dan Persediaan Pegawai </title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'> DAFTAR NAMA JABATAN FUNGSIONAL, KELAS JABATAN, DAN PERSEDIAAN PEGAWAI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DI LINGKUNGAN " . strtoupper($nama_opd) . "</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>KABUPATEN PATI</h4></div>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>PERIODE " . $tahun . "</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;border-collapse: collapse;' border='1'>";
        $html .= "<tr><th style='width:5%;text-align: center;'>NO</th><th style='width:45%;text-align: center;'>NAMA JABATAN FUNGSIONAL</th><th style='width:20%;text-align: center;'>KELAS JABATAN</th><th style='width:30%;text-align: center;'>PERSEDIAAN PEGAWAI</th></tr>";
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
    public function printdata_lampiran4($tahun,$id){
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

            $param_kelas_jabatan = array(
                "token"=>$token,
                "nama"=>"",
                "tahun"=>$tahun,
                "page"=>"x"
            );

            $arr_kelas_jabatan = [];

            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                foreach($json_kelas_jabatan['data'] as $item){
                    array_push($arr_kelas_jabatan,"0");
                }
            }

            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{
                $param = array("token"=>$token,"nama"=>"","page"=>"x","tipe"=>"","tahun"=>$tahun);
                $get_faktor_evjab = $this->Api->Call("faktor_evjab",$param);
                $json_faktor_evjab = json_decode($get_faktor_evjab,true);
                if($json_faktor_evjab['is_error']){

                }else{
                    $html_data .= "<tr>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>NO</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>NAMA JABATAN</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>KELAS JABATAN</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>HARGA JABATAN</th>";
                    foreach($json_faktor_evjab['data'] as $item_faktor_evjab){
                        if($item_faktor_evjab['tipe'] == "1"){
                            $html_data .= "<th colspan='2' style='font-size: 10px;text-align: center;'>FAKTOR " . $item_faktor_evjab['kode'] . "</th>";
                        }
                    }
                    $html_data .= "</tr>";


                    $no = 0;
                    foreach($json_jabatan['data'] as  $item_jabatan){
                        $param_jenis_jabatan = array("token"=>$token,"id"=>$item_jabatan['master_jenis_jabatan_id']);
                        $jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
                        $json_jenis_jabatan = json_decode($jenis_jabatan,true);
                        if($json_jenis_jabatan['is_error']){

                        }else{
                            $tipe = $json_jenis_jabatan['data'][0]['tipe'];
                            if($tipe == "1"){
                                $no++;
                                $kelas_jabatan = "";

                                $total_nilai = 0;
                                $param_faktor = array("jabatan_id"=>$item_jabatan['id'],"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe);
                                $get_faktor = $this->Api->Call("evjab/data",$param_faktor);
                                $json_faktor = json_decode($get_faktor,true);
                                if($json_faktor['is_error']){

                                }else{
                                    foreach($json_faktor['data'] as $k=>$item){
                                        $total_nilai = $total_nilai + $item['nilai'];
                                    }
                                }

                                $param_kelas_jabatan = array("token"=>$token,"nama"=>"","page"=>"x","tahun"=>$tahun);
                                $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
                                $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
                                if($json_kelas_jabatan['is_error']){

                                }else{
                                    foreach($json_kelas_jabatan['data'] as $k=>$item_kelas_jabatan){
                                        if($item_kelas_jabatan['batas_awal'] <= $total_nilai && $item_kelas_jabatan['batas_akhir'] >= $total_nilai){
                                            $kelas_jabatan = $json_kelas_jabatan['data'][$k]['kelas'];
                                        }
                                    }
                                }
                                $html_data .= "<tr>";
                                $html_data .= "<td style='text-align: center'>" . $no . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $item_jabatan['nama'] . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $kelas_jabatan . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $this->PublicFunction->FormatAngka($total_nilai) . "</td>";
                                foreach($json_faktor['data'] as $k=>$item){
                                    $html_data .= "<td style='text-align: center'>" . $item['kode'] . "</td>";
                                    $html_data .= "<td style='text-align: center'>" . $this->PublicFunction->FormatAngka($item['nilai']) . "</td>";
                                }
                                $html_data .= "</tr>";
                            }
                        }
                    }
                }
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Lampiran 4 - Rekapitulasi Kelas Jabatan dan Persediaan Pegawai </title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DAFTAR NAMA JABATAN STRUKTURAL, KELAS JABATAN, DAN PERSEDIAAN PEGAWAI</h4></div>";
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
    public function printdata_lampiran5($tahun,$id){
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

            $param_kelas_jabatan = array(
                "token"=>$token,
                "nama"=>"",
                "tahun"=>$tahun,
                "page"=>"x"
            );

            $arr_kelas_jabatan = [];

            $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
            $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
            if($json_kelas_jabatan['is_error']){

            }else{
                foreach($json_kelas_jabatan['data'] as $item){
                    array_push($arr_kelas_jabatan,"0");
                }
            }

            $param_jabatan = array("token"=>$token,"nama"=>"","master_opd_id"=>$id,"tahun"=>$tahun,"page"=>"x","master_jenis_jabatan"=>"","max_tingkat"=>"");
            $get_jabatan = $this->Api->Call("jabatan",$param_jabatan);
            $json_jabatan = json_decode($get_jabatan,true);
            if($json_jabatan['is_error']){

            }else{
                $param = array("token"=>$token,"nama"=>"","page"=>"x","tipe"=>"","tahun"=>$tahun);
                $get_faktor_evjab = $this->Api->Call("faktor_evjab",$param);
                $json_faktor_evjab = json_decode($get_faktor_evjab,true);
                if($json_faktor_evjab['is_error']){

                }else{
                    $html_data .= "<tr>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>NO</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>NAMA JABATAN</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>KELAS JABATAN</th>";
                    $html_data .= "<th style='font-size: 10px;text-align: center;'>HARGA JABATAN</th>";
                    foreach($json_faktor_evjab['data'] as $item_faktor_evjab){
                        if($item_faktor_evjab['tipe'] == "2"){
                            $html_data .= "<th colspan='2' style='font-size: 10px;text-align: center;'>FAKTOR " . $item_faktor_evjab['kode'] . "</th>";
                        }
                    }
                    $html_data .= "</tr>";


                    $no = 0;
                    foreach($json_jabatan['data'] as  $item_jabatan){
                        $param_jenis_jabatan = array("token"=>$token,"id"=>$item_jabatan['master_jenis_jabatan_id']);
                        $jenis_jabatan = $this->Api->Call("jenis_jabatan/detail",$param_jenis_jabatan);
                        $json_jenis_jabatan = json_decode($jenis_jabatan,true);
                        if($json_jenis_jabatan['is_error']){

                        }else{
                            $tipe = $json_jenis_jabatan['data'][0]['tipe'];
                            if($tipe == "2"){
                                $no++;
                                $kelas_jabatan = "";

                                $total_nilai = 0;
                                $param_faktor = array("jabatan_id"=>$item_jabatan['id'],"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe);
                                $get_faktor = $this->Api->Call("evjab/data",$param_faktor);
                                $json_faktor = json_decode($get_faktor,true);
                                if($json_faktor['is_error']){

                                }else{
                                    foreach($json_faktor['data'] as $k=>$item){
                                        $total_nilai = $total_nilai + $item['nilai'];
                                    }
                                }

                                $param_kelas_jabatan = array("token"=>$token,"nama"=>"","page"=>"x","tahun"=>$tahun);
                                $get_kelas_jabatan = $this->Api->Call("kelas_jabatan",$param_kelas_jabatan);
                                $json_kelas_jabatan = json_decode($get_kelas_jabatan,true);
                                if($json_kelas_jabatan['is_error']){

                                }else{
                                    foreach($json_kelas_jabatan['data'] as $k=>$item_kelas_jabatan){
                                        if($item_kelas_jabatan['batas_awal'] <= $total_nilai && $item_kelas_jabatan['batas_akhir'] >= $total_nilai){
                                            $kelas_jabatan = $json_kelas_jabatan['data'][$k]['kelas'];
                                        }
                                    }
                                }
                                $html_data .= "<tr>";
                                $html_data .= "<td style='text-align: center'>" . $no . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $item_jabatan['nama'] . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $kelas_jabatan . "</td>";
                                $html_data .= "<td style='text-align: center'>" . $this->PublicFunction->FormatAngka($total_nilai) . "</td>";
                                foreach($json_faktor['data'] as $k=>$item){
                                    $html_data .= "<td style='text-align: center'>" . $item['kode'] . "</td>";
                                    $html_data .= "<td style='text-align: center'>" . $this->PublicFunction->FormatAngka($item['nilai']) . "</td>";
                                }
                                $html_data .= "</tr>";
                            }
                        }
                    }
                }
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Lampiran 5 - Rekapitulasi Kelas Jabatan dan Persediaan Pegawai </title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;} th,td{padding:2px;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;margin-bottom: 22px;'><h4 style='margin-top:-20px;'>DAFTAR NAMA JABATAN FUNGSIONAL, KELAS JABATAN, DAN PERSEDIAAN PEGAWAI</h4></div>";
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
}
?>