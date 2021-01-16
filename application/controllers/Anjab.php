<?php
defined('BASEPATH') OR exit('No direct script access allowed');
use Dompdf\Dompdf;
use Dompdf\Options;

class Anjab extends CI_Controller {

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
            $this->load->view("anjab");
        }else{
            redirect("login");
        }
    }
    public function edit($id,$halaman = "",$sub_halaman = "")
    {
        if($this->session->userdata("is_login")){
            if($halaman == ""){
                $this->load->view("anjab_edit",array("id"=>$id));
            }else if($halaman == "ikhtisiar"){
                $this->load->view("anjab_edit_ikhtisiar",array("id"=>$id));
            }else if($halaman == "kualifikasi"){
                if($sub_halaman == "pendidikan"){
                    $this->load->view("anjab_edit_kualifikasi_pendidikan",array("id"=>$id));
                }else if($sub_halaman == "pelatihan"){
                    $this->load->view("anjab_edit_kualifikasi_pelatihan",array("id"=>$id));
                }else if($sub_halaman == "pengalaman"){
                    $this->load->view("anjab_edit_kualifikasi_pengalaman",array("id"=>$id));
                }else{
                    $this->load->view("anjab_edit_kualifikasi",array("id"=>$id));
                }
            }else if($halaman == "tugas_pokok"){
                $this->load->view("anjab_edit_tugas_pokok",array("id"=>$id));
            }else if($halaman == "hasil_kerja"){
                $this->load->view("anjab_edit_hasil_kerja",array("id"=>$id));
            }else if($halaman == "bahan_kerja"){
                $this->load->view("anjab_edit_bahan_kerja",array("id"=>$id));
            }else if($halaman == "perangkat_kerja"){
                $this->load->view("anjab_edit_perangkat_kerja",array("id"=>$id));
            }else if($halaman == "tanggung_jawab"){
                $this->load->view("anjab_edit_tanggung_jawab",array("id"=>$id));
            }else if($halaman == "wewenang"){
                $this->load->view("anjab_edit_wewenang",array("id"=>$id));
            }else if($halaman == "korelasi"){
                $this->load->view("anjab_edit_korelasi",array("id"=>$id));
            }else if($halaman == "kondisi_lingkungan_kerja"){
                $this->load->view("anjab_edit_kondisi_lingkungan_kerja",array("id"=>$id));
            }else if($halaman == "resiko_bahaya"){
                $this->load->view("anjab_edit_resiko_bahaya",array("id"=>$id));
            }else if($halaman == "syarat_jabatan"){
                if($sub_halaman == "keterampilan_kerja"){
                    $this->load->view("anjab_edit_syarat_jabatan_keterampilan_kerja",array("id"=>$id));
                }else if($sub_halaman == "bakat_kerja"){
                    $this->load->view("anjab_edit_syarat_jabatan_bakat_kerja",array("id"=>$id));
                }else if($sub_halaman == "temperamen_kerja"){
                    $this->load->view("anjab_edit_syarat_jabatan_temperamen_kerja",array("id"=>$id));
                }else if($sub_halaman == "minat_kerja"){
                    $this->load->view("anjab_edit_syarat_jabatan_minat_kerja",array("id"=>$id));
                }else if($sub_halaman == "upaya_fisik"){
                    $this->load->view("anjab_edit_syarat_jabatan_upaya_fisik",array("id"=>$id));
                }else if($sub_halaman == "kondisi_fisik"){
                    $this->load->view("anjab_edit_syarat_jabatan_kondisi_fisik",array("id"=>$id));
                }else if($sub_halaman == "fungsi_pekerjaan"){
                    $this->load->view("anjab_edit_syarat_jabatan_fungsi_pekerjaan",array("id"=>$id));
                }else{
                    $this->load->view("anjab_edit_syarat_jabatan",array("id"=>$id));
                }
            }else if($halaman == "prestasi_kerja_diharapkan"){
                $this->load->view("anjab_edit_prestasi_kerja_diharapkan",array("id"=>$id));
            }
        }else{
            redirect("login");
        }
    }
    public function abk($id){
        if($this->session->userdata("is_login")){
            $this->load->view("anjab_abk",array("id"=>$id));
        }else{
            redirect("login");
        }
    }
    public function printdata($id){
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        session_write_close();
        $jabatan_id = $id;
        $jabatan_nama = "";
        $jabatan_kode = "";
        $ikhtisiar_jabatan = "";
        $html_unit_kerja = "";
        $html_kualifikasi_pendidikan = "";
        $html_kualifikasi_pelatihan = "";
        $html_kualifikasi_pengalaman = "";
        $html_tugas_pokok_dan_beban_kerja = "";
        $html_hasil_kerja = "";
        $html_bahan_kerja = "";
        $html_perangkat_kerja = "";
        $html_tanggung_jawab = "";
        $html_wewenang = "";
        $html_korelasi = "";
        $html_kondisi_lingkungan_kerja = "";
        $html_resiko_bahaya = "";
        $html_syarat_jabatan_keterampilan_kerja = "";
        $html_syarat_jabatan_bakat_kerja = "";
        $html_syarat_jabatan_temperamen_kerja = "";
        $html_syarat_jabatan_minat_kerja = "";
        $html_syarat_jabatan_upaya_fisik = "";
        $html_syarat_jabatan_kondisi_fisik = "";
        $html_syarat_jabatan_fungsi_pekerjaan = "";
        $html_prestasi_kerja_yang_diharapkan = "";

        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $jabatan_kode = $json_opd['data'][0]['kode_jabatan'];
            $jabatan_tahun = $json_opd['data'][0]['tahun'];
            $tingkat_jabatan = $json_opd['data'][0]['tingkat'];

            $get_ikhtisiar_jabatan = $this->Api->Call("anjab/ikhtisiar_jabatan",$param);
            $json_ikhtisiar_jabatan = json_decode($get_ikhtisiar_jabatan,true);
            if($json_ikhtisiar_jabatan['is_error']){

            }else{
                $ikhtisiar_jabatan = $json_ikhtisiar_jabatan['data'][0]['ikhtisiar'];
            }

            $param_unit_kerja = array("id"=>$jabatan_id,"token"=>$token,"tingkat"=>$tingkat_jabatan,"tahun"=>$jabatan_tahun);
            $get_unit_kerja = $this->Api->Call("anjab/unit_kerja",$param_unit_kerja);
            $json_unit_kerja = json_decode($get_unit_kerja,true);
            if($json_unit_kerja['is_error']){

            }else{
                $alphas = range('a', 'z');
                foreach($json_unit_kerja['data'] as $k=>$item){
                    $html_unit_kerja .= "<tr><td>&nbsp;</td><td>" . $alphas[$k] . ".</td><td>" . $item['jenis_jabatan'] . "</td><td>:</td><td>" . $item['nama_jabatan'] . "</td></tr>";
                }
            }

            $get_kualifikasi_jabatan_pendidikan = $this->Api->Call("anjab/kualifikasi_jabatan_pendidikan",$param);
            $json_kualifikasi_jabatan_pendidikan = json_decode($get_kualifikasi_jabatan_pendidikan,true);
            if($json_kualifikasi_jabatan_pendidikan['is_error']){

            }else{
                foreach($json_kualifikasi_jabatan_pendidikan['data'] as $k=>$item){
                    if($k == 0){
                        $html_kualifikasi_pendidikan .= "<tr><td>&nbsp;</td><td>a.</td><td>Pendidikan Formal</td><td>:</td><td>" . $item['nama_pendidikan'] . " (" . $item['jurusan'] . ")" . "</td></tr>";
                    }else{
                        $html_kualifikasi_pendidikan .= "<tr><td colspan='4'>&nbsp;</td><td>" . $item['nama_pendidikan'] . " (" . $item['jurusan'] . ")" . "</td></tr>";
                    }
                }
            }

            $get_kualifikasi_jabatan_pelatihan = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan",$param);
            $json_kualifikasi_jabatan_pelatihan = json_decode($get_kualifikasi_jabatan_pelatihan,true);
            if($json_kualifikasi_jabatan_pelatihan['is_error']){

            }else{
                foreach($json_kualifikasi_jabatan_pelatihan['data'] as $k=>$item){
                    if($k == 0){
                        $html_kualifikasi_pelatihan .= "<tr><td>&nbsp;</td><td>a.</td><td>Pendidikan & Pelatihan</td><td>:</td><td>" . $item['nama'] . "</td></tr>";
                    }else{
                        $html_kualifikasi_pelatihan .= "<tr><td colspan='4'>&nbsp;</td><td>" . $item['nama'] . "</td></tr>";
                    }
                }
            }

            $get_kualifikasi_jabatan_pengalaman = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman",$param);
            $json_kualifikasi_jabatan_pengalaman = json_decode($get_kualifikasi_jabatan_pengalaman,true);
            if($json_kualifikasi_jabatan_pengalaman['is_error']){

            }else{
                foreach($json_kualifikasi_jabatan_pengalaman['data'] as $k=>$item){
                    if($k == 0){
                        $html_kualifikasi_pengalaman .= "<tr><td>&nbsp;</td><td>a.</td><td>Pengalaman Kerja</td><td>:</td><td>" . $item['nama'] . "</td></tr>";
                    }else{
                        $html_kualifikasi_pengalaman .= "<tr><td colspan='4'>&nbsp;</td><td>" . $item['nama'] . "</td></tr>";
                    }
                }
            }

            $get_abk = $this->Api->Call("anjab/abk",$param);
            $json_abk = json_decode($get_abk,true);
            if($json_abk['is_error']){

            }else{
                $html_tugas_pokok_dan_beban_kerja .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;'>";
                $html_tugas_pokok_dan_beban_kerja .= "<tr>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>No</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td colspan='2' style='vertical-align: middle;text-align: center;border: 1px solid black;'>Uraian Tugas</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Hasil Kerja</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Jml Hasil</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Waktu Penyelesaian (JAM)</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Waktu Efektif</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Keb. Pegawai</td>";
                $html_tugas_pokok_dan_beban_kerja .= "</tr>";
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td style='text-align: center;border: 1px solid black;'>1</td><td colspan='2' style='text-align: center;border: 1px solid black;'>2</td><td style='text-align: center;border: 1px solid black;'>3</td><td style='text-align: center;border: 1px solid black;'>4</td><td style='text-align: center;border: 1px solid black;'>5</td><td style='text-align: center;border: 1px solid black;'>6</td><td style='text-align: center;border: 1px solid black;'>7</td></tr>";

                $total_jml_hasil = 0;
                $total_keb_pegawai = 0;

                $no = 0;
                $last_id = "";
                foreach($json_abk['data'] as $k=>$item){
                    if($last_id != $item['id']){
                        $no++;
                        $last_id = $item['id'];
                        $anjab_tugas_pokok_id_parent = $item['id'];
                        $html_tugas_pokok_dan_beban_kerja .= "<tr><td style='vertical-align: middle;text-align: center;border-left: 1px solid black;'>" . $no . "</td><td colspan='2' style='border-left: 1px solid black;text-align: justify;'>" . $item['uraian'] . "</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;border-right: 1px solid black;'>&nbsp;</td></tr>";
                        foreach($json_abk['data'] as $k2=>$item2){
                            if($anjab_tugas_pokok_id_parent == $item2['anjab_tugas_pokok_id']){
                                $html_tugas_pokok_dan_beban_kerja .= "<tr>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;'>&nbsp;</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: top;border-left: 1px solid black;text-align: center;width:2%;'>-</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='text-align: justify;width:33%;'>" . $item2['uraian_sub'] . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $item2['hasil_kerja'] . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['jumlah_hasil'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['waktu_penyelesaian'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['waktu_efektif'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->ToFixed($item2['kebutuhan_pegawai'],4,false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "</tr>";

                                $total_jml_hasil = $total_jml_hasil + $item2['jumlah_hasil'];
                                $total_keb_pegawai = $total_keb_pegawai + $item2['kebutuhan_pegawai'];
                            }
                        }
                    }
                }
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td colspan='4' style='border-left: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;text-align: center;'><b>JUMLAH</b></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $this->PublicFunction->FormatAngka($total_jml_hasil,false) . "</td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $this->PublicFunction->ToFixed($total_keb_pegawai,4,false) . "</td></tr>";
                $total_keb_pegawai_rounded = round($total_keb_pegawai);
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td colspan='5' style='border-left: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;text-align: center;'><b>JUMLAH PEGAWAI</b></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $total_keb_pegawai_rounded . "</td></tr>";
                $html_tugas_pokok_dan_beban_kerja .= "</table>";
            }

            $get_hasil_kerja = $this->Api->Call("anjab/hasil_kerja",$param);
            $json_hasil_kerja = json_decode($get_hasil_kerja,true);
            if($json_hasil_kerja['is_error']){

            }else{
                foreach($json_hasil_kerja['data'] as $k=>$item){
                    $html_hasil_kerja .= "<tr><td>&nbsp;</td><td>7." . ($k + 1) . "</td><td colspan='3'>" . $item['hasil_kerja'] . "</td></tr>";
                }
            }

            $get_bahan_kerja = $this->Api->Call("anjab/bahan_kerja",$param);
            $json_bahan_kerja = json_decode($get_bahan_kerja,true);
            if($json_bahan_kerja['is_error']){

            }else{
                $html_bahan_kerja .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_bahan_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>BAHAN KERJA</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>PENGGUNAAN DALAM TUGAS</b></td></tr>";
                foreach($json_bahan_kerja['data'] as $k=>$item){
                    $html_bahan_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['digunakan_dalam_tugas'] . "</td></tr>";
                }
                $html_bahan_kerja .= "</table>";
            }

            $get_perangkat_kerja = $this->Api->Call("anjab/perangkat_kerja",$param);
            $json_perangkat_kerja = json_decode($get_perangkat_kerja,true);
            if($json_perangkat_kerja['is_error']){

            }else{
                $html_perangkat_kerja .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_perangkat_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>PERANGKAT KERJA</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>PENGGUNAAN DALAM TUGAS</b></td></tr>";
                foreach($json_perangkat_kerja['data'] as $k=>$item){
                    $html_perangkat_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['digunakan_dalam_tugas'] . "</td></tr>";
                }
                $html_perangkat_kerja .= "</table>";
            }

            $get_tanggung_jawab = $this->Api->Call("anjab/tanggung_jawab",$param);
            $json_tanggung_jawab = json_decode($get_tanggung_jawab,true);
            if($json_tanggung_jawab['is_error']){

            }else{
                $html_tanggung_jawab .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_tanggung_jawab .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>URAIAN</b></td></tr>";
                foreach($json_tanggung_jawab['data'] as $k=>$item){
                    $html_tanggung_jawab .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;width:5%;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['tanggung_jawab'] . "</td></tr>";
                }
                $html_tanggung_jawab .= "</table>";
            }

            $get_wewenang = $this->Api->Call("anjab/wewenang",$param);
            $json_wewenang = json_decode($get_wewenang,true);
            if($json_wewenang['is_error']){

            }else{
                $html_wewenang .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_wewenang .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;width:5%;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>URAIAN</b></td></tr>";
                foreach($json_wewenang['data'] as $k=>$item){
                    $html_wewenang .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['wewenang'] . "</td></tr>";
                }
                $html_wewenang .= "</table>";
            }

            $get_korelasi = $this->Api->Call("anjab/korelasi",$param);
            $json_korelasi = json_decode($get_korelasi,true);
            if($json_korelasi['is_error']){

            }else{
                $html_korelasi .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_korelasi .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;width:5%;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>NAMA JABATAN</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>UNIT KERJA/INSTANSI</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>DALAM HAL</b></td></tr>";
                foreach($json_korelasi['data'] as $k=>$item){
                    $html_korelasi .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['nama_jabatan'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['unit_kerja'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['dalam_hal'] . "</td></tr>";
                }
                $html_korelasi .= "</table>";
            }

            $get_kondisi_lingkungan_kerja = $this->Api->Call("anjab/kondisi_lingkungan_kerja",$param);
            $json_kondisi_lingkungan_kerja = json_decode($get_kondisi_lingkungan_kerja,true);
            if($json_kondisi_lingkungan_kerja['is_error']){

            }else{
                $html_kondisi_lingkungan_kerja .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_kondisi_lingkungan_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;width:5%;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>ASPEK</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>FAKTOR</b></td></tr>";
                foreach($json_kondisi_lingkungan_kerja['data'] as $k=>$item){
                    $html_kondisi_lingkungan_kerja .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['faktor'] . "</td></tr>";
                }
                $html_kondisi_lingkungan_kerja .= "</table>";
            }

            $get_resiko_bahaya = $this->Api->Call("anjab/resiko_bahaya",$param);
            $json_resiko_bahaya = json_decode($get_resiko_bahaya,true);
            if($json_resiko_bahaya['is_error']){

            }else{
                $html_resiko_bahaya .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;border-top: 1px solid black;'>";
                $html_resiko_bahaya .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;width:5%;'><b>NO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>NAMA RESIKO</b></td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: middle;text-align: center;background-color: #d3d3d3;'><b>PENYEBAB</b></td></tr>";
                foreach($json_resiko_bahaya['data'] as $k=>$item){
                    $html_resiko_bahaya .= "<tr><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;text-align: center;'>" . ($k + 1) . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;vertical-align: top;'>" . $item['nama'] . "</td><td style='border-bottom: 1px solid black;border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;'>" . $item['penyebab'] . "</td></tr>";
                }
                $html_resiko_bahaya .= "</table>";
            }

            $get_syarat_jabatan_keterampilan_kerja = $this->Api->Call("anjab/syarat_jabatan_keterampilan_kerja",$param);
            $json_syarat_jabatan_keterampilan_kerja = json_decode($get_syarat_jabatan_keterampilan_kerja,true);
            if($json_syarat_jabatan_keterampilan_kerja['is_error']){

            }else{
                foreach($json_syarat_jabatan_keterampilan_kerja['data'] as $k=>$item){
                    $html_syarat_jabatan_keterampilan_kerja .= "<tr><td colspan='2'></td><td colspan='3'>" . $item['aspek'] . ", " . $item['uraian'] . "</td></tr>";
                }
            }

            $get_syarat_jabatan_bakat_kerja = $this->Api->Call("anjab/syarat_jabatan_bakat_kerja",$param);
            $json_syarat_jabatan_bakat_kerja = json_decode($get_syarat_jabatan_bakat_kerja,true);
            if($json_syarat_jabatan_bakat_kerja['is_error']){

            }else{
                foreach($json_syarat_jabatan_bakat_kerja['data'] as $k=>$item){
                    $html_syarat_jabatan_bakat_kerja .= "<tr><td colspan='2'></td><td colspan='3'>" . $item['nama'] . " : " . $item['uraian'] . "</td></tr>";
                }
            }

            $get_syarat_jabatan_temperamen_kerja = $this->Api->Call("anjab/syarat_jabatan_temperamen_kerja",$param);
            $json_syarat_jabatan_temperamen_kerja = json_decode($get_syarat_jabatan_temperamen_kerja,true);
            if($json_syarat_jabatan_temperamen_kerja['is_error']){

            }else{
                foreach($json_syarat_jabatan_temperamen_kerja['data'] as $k=>$item){
                    $html_syarat_jabatan_temperamen_kerja .= "<tr><td colspan='2'></td><td colspan='3'>" . $item['nama'] . " : " . $item['uraian'] . "</td></tr>";
                }
            }

            $get_syarat_jabatan_minat_kerja = $this->Api->Call("anjab/syarat_jabatan_minat_kerja",$param);
            $json_syarat_jabatan_minat_kerja = json_decode($get_syarat_jabatan_minat_kerja,true);
            if($json_syarat_jabatan_minat_kerja['is_error']){

            }else{
                foreach($json_syarat_jabatan_minat_kerja['data'] as $k=>$item){
                    $html_syarat_jabatan_minat_kerja .= "<tr><td colspan='2'></td><td colspan='3'>" . $item['nama'] . " : " . $item['uraian'] . "</td></tr>";
                }
            }

            $get_syarat_jabatan_upaya_fisik = $this->Api->Call("anjab/syarat_jabatan_upaya_fisik",$param);
            $json_syarat_jabatan_upaya_fisik = json_decode($get_syarat_jabatan_upaya_fisik,true);
            if($json_syarat_jabatan_upaya_fisik['is_error']){

            }else{
                foreach($json_syarat_jabatan_upaya_fisik['data'] as $k=>$item){
                    $html_syarat_jabatan_upaya_fisik .= "<tr><td colspan='2'></td><td colspan='3'>- " . $item['nama'] . "</td></tr>";
                }
            }

            $get_syarat_jabatan_kondisi_fisik = $this->Api->Call("anjab/syarat_jabatan_kondisi_fisik",$param);
            $json_syarat_jabatan_kondisi_fisik = json_decode($get_syarat_jabatan_kondisi_fisik,true);
            if($json_syarat_jabatan_kondisi_fisik['is_error']){

            }else{
                $html_syarat_jabatan_kondisi_fisik .= "<table style='border-collapse: collapse;width:100%;'>";
                foreach($json_syarat_jabatan_kondisi_fisik['data'] as $k=>$item){
                    $html_syarat_jabatan_kondisi_fisik .= "<tr><td style='width: 20%;'>- " . $item['nama'] . "</td><td> : " . $item['keterangan'] . "</td></tr>";
                }
                $html_syarat_jabatan_kondisi_fisik .= "</table>";
            }

            $get_syarat_jabatan_fungsi_pekerjaan = $this->Api->Call("anjab/syarat_jabatan_fungsi_pekerjaan",$param);
            $json_syarat_jabatan_fungsi_pekerjaan = json_decode($get_syarat_jabatan_fungsi_pekerjaan,true);
            if($json_syarat_jabatan_fungsi_pekerjaan['is_error']){

            }else{
                $html_syarat_jabatan_fungsi_pekerjaan .= "<table style='border-collapse: collapse;width:100%;'>";
                $html_syarat_jabatan_fungsi_pekerjaan .= "<tr><td style='width: 20%;'>- Data</td><td> : " . $json_syarat_jabatan_fungsi_pekerjaan['data'][0]['nama_fungsi_pekerjaan_data'] . "</td></tr>";
                $html_syarat_jabatan_fungsi_pekerjaan .= "<tr><td style='width: 20%;'>- Orang</td><td> : " . $json_syarat_jabatan_fungsi_pekerjaan['data'][0]['nama_fungsi_pekerjaan_orang'] . "</td></tr>";
                $html_syarat_jabatan_fungsi_pekerjaan .= "<tr><td style='width: 20%;'>- Benda</td><td> : " . $json_syarat_jabatan_fungsi_pekerjaan['data'][0]['nama_fungsi_pekerjaan_benda'] . "</td></tr>";
                $html_syarat_jabatan_fungsi_pekerjaan .= "</table>";
            }

            $get_prestasi_kerja_yang_diharapkan = $this->Api->Call("anjab/prestasi_kerja_diharapkan",$param);
            $json_prestasi_kerja_yang_diharapkan = json_decode($get_prestasi_kerja_yang_diharapkan,true);
            if($json_prestasi_kerja_yang_diharapkan['is_error']){

            }else{
                foreach($json_prestasi_kerja_yang_diharapkan['data'] as $k=>$item){
                    $html_prestasi_kerja_yang_diharapkan .= "<tr><td>&nbsp;</td><td> - </td><td colspan='3'>" . $item['nama'] . "</td></tr>";
                }
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Dokumen Anjab</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>ANALISIS JABATAN DAN ANALISIS BEBAN KERJA</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>1.</td><td colspan='4'>NAMA JABATAN</td></tr>";
        $html .= "<tr><td>&nbsp;</td><td colspan='4'>" . $jabatan_nama . "</td></tr>";
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>2.</td><td colspan='2'>KODE JABATAN</td><td>:</td><td>"  . $jabatan_kode . "</td></tr>";
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>3.</td><td colspan='4'>UNIT KERJA</td></tr>";
        $html .= $html_unit_kerja;
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>4.</td><td colspan='4'>IKHTISIAR JABATAN</td></tr>";
        $html .= "<tr><td>&nbsp;</td><td colspan='4'>" . $ikhtisiar_jabatan . "</td></tr>";
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>5.</td><td colspan='4'>KUALIFIKASI JABATAN</td></tr>";
        $html .= $html_kualifikasi_pendidikan;
        $html .= $html_kualifikasi_pelatihan;
        $html .= $html_kualifikasi_pengalaman;
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>4.</td><td colspan='4'>TUGAS POKOK DAN BEBAN KERJA</td></tr>";
        $html .= "</table>";
        $html .= $html_tugas_pokok_dan_beban_kerja;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>7.</td><td colspan='4'>HASIL KERJA</td></tr>";
        $html .= $html_hasil_kerja;
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>8.</td><td colspan='4'>BAHAN KERJA</td></tr>";
        $html .= "</table>";
        $html .= $html_bahan_kerja;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>9.</td><td colspan='4'>PERANGKAT KERJA</td></tr>";
        $html .= "</table>";
        $html .= $html_perangkat_kerja;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>10.</td><td colspan='4'>TANGGUNG JAWAB</td></tr>";
        $html .= "</table>";
        $html .= $html_tanggung_jawab;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>11.</td><td colspan='4'>WEWENANG</td></tr>";
        $html .= "</table>";
        $html .= $html_wewenang;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>12.</td><td colspan='4'>KORELASI JABATAN</td></tr>";
        $html .= "</table>";
        $html .= $html_korelasi;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>13.</td><td colspan='4'>KONDISI LINGKUNGAN KERJA</td></tr>";
        $html .= "</table>";
        $html .= $html_kondisi_lingkungan_kerja;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>14.</td><td colspan='4'>RESIKO BAHAYA</td></tr>";
        $html .= "</table>";
        $html .= $html_resiko_bahaya;
        $html .= "<br />";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:5%;'></th><th style='width:3%;'></th><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:62%;'></th></tr>";
        $html .= "<tr><td>15.</td><td colspan='4'>SYARAT JABATAN</td></tr>";
        $html .= "<tr><td>&nbsp;</td><td>a. </td><td>Keterampilan Kerja</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= $html_syarat_jabatan_keterampilan_kerja;
        $html .= "<tr><td>&nbsp;</td><td>b. </td><td>Bakat Kerja</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= $html_syarat_jabatan_bakat_kerja;
        $html .= "<tr><td>&nbsp;</td><td>c. </td><td>Temperamen Kerja</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= $html_syarat_jabatan_temperamen_kerja;
        $html .= "<tr><td>&nbsp;</td><td>d. </td><td>Minat Kerja</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= $html_syarat_jabatan_minat_kerja;
        $html .= "<tr><td>&nbsp;</td><td>e. </td><td>Upaya Fisik</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= $html_syarat_jabatan_upaya_fisik;
        $html .= "<tr><td>&nbsp;</td><td>f. </td><td>Kondisi Fisik</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= "<tr>";
        $html .= "<td colspan='2'>&nbsp;</td>";
        $html .= "<td colspan='3'>";
        $html .= $html_syarat_jabatan_kondisi_fisik;
        $html .= "</td>";
        $html .= "</tr>";
        $html .= "<tr><td>&nbsp;</td><td>g. </td><td>Fungsi Pekerjaan</td><td colspan='2'>&nbsp;</td></tr>";
        $html .= "<tr>";
        $html .= "<td colspan='2'>&nbsp;</td>";
        $html .= "<td colspan='3'>";
        $html .= $html_syarat_jabatan_fungsi_pekerjaan;
        $html .= "</td>";
        $html .= "</tr>";
        $html .= "<tr><td colspan='5'>&nbsp;</td></tr>";
        $html .= "<tr><td>16.</td><td colspan='4'>PRESTASI KERJA YANG DIHARAPKAN</td></tr>";
        $html .= $html_prestasi_kerja_yang_diharapkan;
        $html .= "</table>";
        $html .= "</body>";
        $html .= "</html>";
//        echo $html;
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'potrait');
        $dompdf->render();
        $dompdf->stream("dokumen_anjab.pdf", array("Attachment" => false));
        exit(0);
    }
    public function printabk($id){
        $options = new Options();
        $options->set('defaultFont', 'Serif');
        $dompdf = new Dompdf($options);
        $token = $this->session->userdata("token");
        session_write_close();
        $jabatan_id = $id;
        $jabatan_nama = "";
        $nama_opd = "";
        $nama_unit = "";
        $ikhtisiar_jabatan = "";
        $html_tugas_pokok_dan_beban_kerja = "";

        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $get_opd = $this->Api->Call("anjab/get_opd_name",$param);
        $json_opd = json_decode($get_opd,true);
        if($json_opd['is_error']){

        }else{
            $jabatan_nama = $json_opd['data'][0]['nama_jabatan'];
            $nama_opd = $json_opd['data'][0]['nama'];
            $nama_unit = $json_opd['data'][0]['unit'];

            $get_ikhtisiar_jabatan = $this->Api->Call("anjab/ikhtisiar_jabatan",$param);
            $json_ikhtisiar_jabatan = json_decode($get_ikhtisiar_jabatan,true);
            if($json_ikhtisiar_jabatan['is_error']){

            }else{
                $ikhtisiar_jabatan = $json_ikhtisiar_jabatan['data'][0]['ikhtisiar'];
            }

            $get_abk = $this->Api->Call("anjab/abk",$param);
            $json_abk = json_decode($get_abk,true);
            if($json_abk['is_error']){

            }else{
                $html_tugas_pokok_dan_beban_kerja .= "<table style='border-collapse: collapse;width:100%;border-bottom: 1px solid black;'>";
                $html_tugas_pokok_dan_beban_kerja .= "<tr>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>No</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td colspan='2' style='vertical-align: middle;text-align: center;border: 1px solid black;'>Uraian Tugas</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Hasil Kerja</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Jml Hasil</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Waktu Penyelesaian (JAM)</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Waktu Efektif</td>";
                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: middle;text-align: center;border: 1px solid black;'>Keb. Pegawai</td>";
                $html_tugas_pokok_dan_beban_kerja .= "</tr>";
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td style='text-align: center;border: 1px solid black;'>1</td><td colspan='2' style='text-align: center;border: 1px solid black;'>2</td><td style='text-align: center;border: 1px solid black;'>3</td><td style='text-align: center;border: 1px solid black;'>4</td><td style='text-align: center;border: 1px solid black;'>5</td><td style='text-align: center;border: 1px solid black;'>6</td><td style='text-align: center;border: 1px solid black;'>7</td></tr>";

                $total_jml_hasil = 0;
                $total_keb_pegawai = 0;

                $no = 0;
                $last_id = "";
                foreach($json_abk['data'] as $k=>$item){
                    if($last_id != $item['id']){
                        $no++;
                        $last_id = $item['id'];
                        $anjab_tugas_pokok_id_parent = $item['id'];
                        $html_tugas_pokok_dan_beban_kerja .= "<tr><td style='vertical-align: middle;text-align: center;border-left: 1px solid black;'>" . $no . "</td><td colspan='2' style='border-left: 1px solid black;text-align: justify;'>" . $item['uraian'] . "</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;'>&nbsp;</td><td style='border-left: 1px solid black;border-right: 1px solid black;'>&nbsp;</td></tr>";
                        foreach($json_abk['data'] as $k2=>$item2){
                            if($anjab_tugas_pokok_id_parent == $item2['anjab_tugas_pokok_id']){
                                $html_tugas_pokok_dan_beban_kerja .= "<tr>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;'>&nbsp;</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='vertical-align: top;border-left: 1px solid black;text-align: center;width:2%;'>-</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='text-align: justify;width:33%;'>" . $item2['uraian_sub'] . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $item2['hasil_kerja'] . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['jumlah_hasil'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['waktu_penyelesaian'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->FormatAngka($item2['waktu_efektif'],false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "<td style='border-left: 1px solid black;border-right: 1px solid black;vertical-align: top;text-align: center;'>" . $this->PublicFunction->ToFixed($item2['kebutuhan_pegawai'],4,false) . "</td>";
                                $html_tugas_pokok_dan_beban_kerja .= "</tr>";

                                $total_jml_hasil = $total_jml_hasil + $item2['jumlah_hasil'];
                                $total_keb_pegawai = $total_keb_pegawai + $item2['kebutuhan_pegawai'];
                            }
                        }
                    }
                }
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td colspan='4' style='border-left: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;text-align: center;'><b>JUMLAH</b></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $this->PublicFunction->FormatAngka($total_jml_hasil,false) . "</td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $this->PublicFunction->ToFixed($total_keb_pegawai,4,false) . "</td></tr>";
                $total_keb_pegawai_rounded = round($total_keb_pegawai);
                $html_tugas_pokok_dan_beban_kerja .= "<tr><td colspan='5' style='border-left: 1px solid black;border-top: 1px solid black;border-right: 1px solid black;text-align: center;'><b>JUMLAH PEGAWAI</b></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'></td><td style='border-top: 1px solid black;border-right: 1px solid black;text-align: center;'>" . $total_keb_pegawai_rounded . "</td></tr>";
                $html_tugas_pokok_dan_beban_kerja .= "</table>";
            }
        }

        $html = "";
        $html .= "<html>";
        $html .= "<head>";
        $html .= "<title>Dokumen Anjab</title>";
        $html .= "<style type='text/css'>";
        $html .= "@page { margin: 40px 20px 40px 20px; }";
        $html .= "body { margin: 0px;font-size:14px;line-height: normal;}";
        $html .= "</style>";
        $html .= "</head>";
        $html .= "<body>";
        $html .= "<div style='text-align:center;'><h4 style='margin-top:-20px;'>ANALISIS BEBAN KERJA (ABK) DENGAN PENDEKATAN TUGAS PERTUGAS</h4></div>";
        $html .= "<table style='width:100%;table-layout: fixed;'>";
        $html .= "<tr><th style='width:25%;'></th><th style='width:5%;'></th><th style='width:70%;'></th></tr>";
        $html .= "<tr><td style='vertical-align: top;'>NAMA JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $jabatan_nama . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>UNIT KERJA</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $nama_unit . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>NAMA OPD</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $nama_opd . "</td></tr>";
        $html .= "<tr><td style='vertical-align: top;'>IKHTISIAR JABATAN</td><td style='vertical-align: top;'> : </td><td style='vertical-align: top;'>" . $ikhtisiar_jabatan . "</td></tr>";
        $html .= "</table>";
        $html .= "<br />";
        $html .= $html_tugas_pokok_dan_beban_kerja;
        $html .= "<br />";
        $html .= "</body>";
        $html .= "</html>";
//        echo $html;
        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'potrait');
        $dompdf->render();
        $dompdf->stream("dokumen_anjab.pdf", array("Attachment" => false));
        exit(0);
    }
}
?>