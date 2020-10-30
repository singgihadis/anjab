<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class EvJab extends CI_Controller {

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
    public function index(){

    }
    public function data(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $tipe = $this->input->post("tipe");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"tahun"=>$tahun,"tipe"=>$tipe);
        $data = $this->Api->Call("evjab/data",$param);
        echo $data;
    }
    public function update(){
        $token = $this->session->userdata("token");
        $tahun = $this->input->post("tahun");
        $jabatan_id = $this->input->post("jabatan_id");
        $ruang_lingkup = $this->input->post("ruang_lingkup");
        $dampak = $this->input->post("dampak");
        $master_faktor_evjab_id = $this->input->post("master_faktor_evjab_id");
        $master_faktor_evjab_level_id = $this->input->post("master_faktor_evjab_level_id");
        $nilai = $this->input->post("nilai");
        $param = array(
            "token"=>$token,
            "tahun"=>$tahun,
            "jabatan_id"=>$jabatan_id,
            "ruang_lingkup"=>$ruang_lingkup,
            "dampak"=>$dampak,
            "master_faktor_evjab_id"=>$master_faktor_evjab_id,
            "master_faktor_evjab_level_id"=>$master_faktor_evjab_level_id,
            "nilai"=>$nilai);
        $data = $this->Api->Call("evjab/update",$param);
        echo $data;
    }
    public function tim_analisis(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("evjab/tim_analisis",$param);
        echo $data;
    }
    public function tim_analisis_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama_ketua = $this->input->post("nama_ketua");
        $jabatan_pejabat_bersangkutan = $this->input->post("jabatan_pejabat_bersangkutan");
        $nama_pejabat_bersangkutan = $this->input->post("nama_pejabat_bersangkutan");
        $jabatan_pimpinan_unit_kerja = $this->input->post("jabatan_pimpinan_unit_kerja");
        $nama_pimpinan_unit_kerja = $this->input->post("nama_pimpinan_unit_kerja");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id,
            "nama_ketua"=>$nama_ketua,
            "jabatan_pejabat_bersangkutan"=>$jabatan_pejabat_bersangkutan,
            "nama_pejabat_bersangkutan"=>$nama_pejabat_bersangkutan,
            "jabatan_pimpinan_unit_kerja"=>$jabatan_pimpinan_unit_kerja,
            "nama_pimpinan_unit_kerja"=>$nama_pimpinan_unit_kerja);
        $data = $this->Api->Call("evjab/tim_analisis_update",$param);
        echo $data;
    }
    public function verifikasi(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $verifikasi = $this->input->post("verifikasi");
        $param = array("jabatan_id"=>$jabatan_id,"tahun"=>$tahun,"token"=>$token,"verifikasi"=>$verifikasi);
        $data = $this->Api->Call("anjab/verifikasi",$param);
        echo $data;
    }
    public function is_verifikasi(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $param = array("jabatan_id"=>$jabatan_id,"tahun"=>$tahun,"token"=>$token);
        $data = $this->Api->Call("anjab/is_verifikasi",$param);
        echo $data;
    }
}