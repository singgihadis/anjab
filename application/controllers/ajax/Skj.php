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
    public function non_urusan_pemerintahan_with_level_value(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $param = array("token"=>$token,"tahun"=>$tahun,"jabatan_id"=>$jabatan_id,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id);
        $data = $this->Api->Call("skj/non_urusan_pemerintahan_with_level_value",$param);
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
    public function urusan_pemerintahan_with_value(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $param = array("token"=>$token,"tahun"=>$tahun,"jabatan_id"=>$jabatan_id,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id);
        $data = $this->Api->Call("skj/urusan_pemerintahan_with_value",$param);
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
    public function syarat_jabatan_pelatihan_update()
    {
        $token = $this->session->userdata("token");
        $anjab_kualifikasi_pelatihan_id = $this->input->post("anjab_kualifikasi_pelatihan_id");
        $tingkat_penting = $this->input->post("tingkat_penting");
        $param = array(
            "token"=>$token,
            "anjab_kualifikasi_pelatihan_id"=>$anjab_kualifikasi_pelatihan_id,
            "tingkat_penting"=>$tingkat_penting
        );
        $data = $this->Api->Call("skj/syarat_jabatan_pelatihan_update",$param);
        echo $data;
    }
    public function syarat_jabatan_pengalaman_kerja()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id
        );
        $data = $this->Api->Call("skj/syarat_jabatan_pengalaman_kerja",$param);
        echo $data;
    }
    public function syarat_jabatan_pengalaman_kerja_update()
    {
        $token = $this->session->userdata("token");
        $anjab_kualifikasi_pengalaman_kerja_id = $this->input->post("anjab_kualifikasi_pengalaman_kerja_id");
        $tingkat_penting = $this->input->post("tingkat_penting");
        $param = array(
            "token"=>$token,
            "anjab_kualifikasi_pengalaman_kerja_id"=>$anjab_kualifikasi_pengalaman_kerja_id,
            "tingkat_penting"=>$tingkat_penting
        );
        $data = $this->Api->Call("skj/syarat_jabatan_pengalaman_kerja_update",$param);
        echo $data;
    }
    public function syarat_jabatan_golongan()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id
        );
        $data = $this->Api->Call("skj/syarat_jabatan_golongan",$param);
        echo $data;
    }
    public function syarat_jabatan_indikator_kinerja_jabatan()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id
        );
        $data = $this->Api->Call("skj/syarat_jabatan_indikator_kinerja_jabatan",$param);
        echo $data;
    }
    public function syarat_jabatan_indikator_kinerja_jabatan_update()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $uraian = $this->input->post("uraian");
        $param = array(
            "token"=>$token,
            "jabatan_id"=>$jabatan_id,
            "uraian"=>$uraian
        );
        $data = $this->Api->Call("skj/syarat_jabatan_indikator_kinerja_jabatan_update",$param);
        echo $data;
    }
    public function verifikasi(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $verifikasi = $this->input->post("verifikasi");
        $param = array("jabatan_id"=>$jabatan_id,"tahun"=>$tahun,"token"=>$token,"verifikasi"=>$verifikasi);
        $data = $this->Api->Call("skj/verifikasi",$param);
        echo $data;
    }
    public function is_verifikasi(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $tahun = $this->input->post("tahun");
        $param = array("jabatan_id"=>$jabatan_id,"tahun"=>$tahun,"token"=>$token);
        $data = $this->Api->Call("skj/is_verifikasi",$param);
        echo $data;
    }
}
?>