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
    public function index(){

    }
    public function non_urusan_pemerintahan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $param = array("token"=>$token,"tahun"=>$tahun,"jabatan_id"=>$jabatan_id,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id);
        $data = $this->Api->Call("skj/non_urusan_pemerintahan",$param);
        echo $data;
    }
    public function urusan_pemerintahan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $param = array("token"=>$token,"tahun"=>$tahun,"jabatan_id"=>$jabatan_id,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id);
        $data = $this->Api->Call("skj/urusan_pemerintahan",$param);
        echo $data;
    }
    public function update()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_kamus_kompetensi_skj_id = $this->input->post("master_kamus_kompetensi_skj_id");
        $master_kamus_kompetensi_skj_level_id = $this->input->post("master_kamus_kompetensi_skj_level_id");
        $param = array(
            "token"=>$token,
            "tahun"=>$tahun,
            "jabatan_id"=>$jabatan_id,
            "master_kamus_kompetensi_skj_id"=>$master_kamus_kompetensi_skj_id,
            "master_kamus_kompetensi_skj_level_id"=>$master_kamus_kompetensi_skj_level_id
        );
        $data = $this->Api->Call("skj/update",$param);
        echo $data;
    }
    public function tambah_skj_urusan_pemerintahan()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_kamus_kompetensi_skj_id = $this->input->post("master_kamus_kompetensi_skj_id");
        $master_kamus_kompetensi_skj_level_id = $this->input->post("master_kamus_kompetensi_skj_level_id");
        $param = array(
            "token"=>$token,
            "tahun"=>$tahun,
            "jabatan_id"=>$jabatan_id,
            "master_kamus_kompetensi_skj_id"=>$master_kamus_kompetensi_skj_id,
            "master_kamus_kompetensi_skj_level_id"=>$master_kamus_kompetensi_skj_level_id
        );
        $data = $this->Api->Call("skj/tambah_skj_urusan_pemerintahan",$param);
        echo $data;
    }
    public function hapus_skj_urusan_pemerintahan()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array(
            "token"=>$token,
            "id"=>$id
        );
        $data = $this->Api->Call("skj/hapus_skj_urusan_pemerintahan",$param);
        echo $data;
    }
    public function syarat_jabatan_pelatihan()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id
        );
        $data = $this->Api->Call("skj/syarat_jabatan_pelatihan",$param);
        echo $data;
    }
}
?>