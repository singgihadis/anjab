<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kamus_kompetensi_skj extends CI_Controller {

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
        $token = $this->session->userdata("token");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $nama = $this->input->post("nama");
        $master_urusan_pemerintahan_id = $this->input->post("master_urusan_pemerintahan_id");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id,"nama"=>$nama,"master_urusan_pemerintahan_id"=>$master_urusan_pemerintahan_id,"page"=>$page);
        $data = $this->Api->Call("kamus_kompetensi_skj",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $master_standar_kompetensi_tipe = $this->input->post("master_standar_kompetensi_tipe");
        $kode = $this->input->post("kode");
        $nama = $this->input->post("nama");
        $uraian = $this->input->post("uraian");
        $master_urusan_pemerintahan_id = $this->input->post("master_urusan_pemerintahan_id");
        if($master_standar_kompetensi_tipe != "2"){
            $master_urusan_pemerintahan_id = "";
        }
        $param = array("token"=>$token,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id,"kode"=>$kode,"nama"=>$nama,"uraian"=>$uraian,"master_urusan_pemerintahan_id"=>$master_urusan_pemerintahan_id);
        $data = $this->Api->Call("kamus_kompetensi_skj/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $master_standar_kompetensi_id = $this->input->post("master_standar_kompetensi_id");
        $master_standar_kompetensi_tipe = $this->input->post("master_standar_kompetensi_tipe");
        $kode = $this->input->post("kode");
        $nama = $this->input->post("nama");
        $uraian = $this->input->post("uraian");
        $master_urusan_pemerintahan_id = $this->input->post("master_urusan_pemerintahan_id");
        if($master_standar_kompetensi_tipe != "2"){
            $master_urusan_pemerintahan_id = "";
        }
        $param = array("id"=>$id,"master_standar_kompetensi_id"=>$master_standar_kompetensi_id,"token"=>$token,"kode"=>$kode,"nama"=>$nama,"uraian"=>$uraian,"master_urusan_pemerintahan_id"=>$master_urusan_pemerintahan_id);
        $data = $this->Api->Call("kamus_kompetensi_skj/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("kamus_kompetensi_skj/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("kamus_kompetensi_skj/hapus",$param);
        echo $data;
    }
    public function level($aksi = "")
    {
        $token = $this->session->userdata("token");
        $master_kamus_kompetensi_skj_id = $this->input->post("master_kamus_kompetensi_skj_id");
        if($aksi == ""){
            $page = $this->input->post("page");
            $param = array("token"=>$token,"master_kamus_kompetensi_skj_id"=>$master_kamus_kompetensi_skj_id,"page"=>$page);
            $data = $this->Api->Call("kamus_kompetensi_skj/level",$param);
            echo $data;
        }else if($aksi == "tambah"){
            $level = $this->input->post("level");
            $deskripsi = $this->input->post("deskripsi");
            $indikator_kompetensi = $this->input->post("indikator_kompetensi");
            $param = array("token"=>$token,"master_kamus_kompetensi_skj_id"=>$master_kamus_kompetensi_skj_id,"level"=>$level,"deskripsi"=>$deskripsi,"indikator_kompetensi"=>$indikator_kompetensi);
            $data = $this->Api->Call("kamus_kompetensi_skj/level/tambah",$param);
            echo $data;
        }else if($aksi == "edit"){
            $id = $this->input->post("id");
            $level = $this->input->post("level");
            $deskripsi = $this->input->post("deskripsi");
            $indikator_kompetensi = $this->input->post("indikator_kompetensi");
            $param = array("token"=>$token,"id"=>$id,"master_kamus_kompetensi_skj_id"=>$master_kamus_kompetensi_skj_id,"level"=>$level,"deskripsi"=>$deskripsi,"indikator_kompetensi"=>$indikator_kompetensi);
            $data = $this->Api->Call("kamus_kompetensi_skj/level/edit",$param);
            echo $data;
        }else if($aksi == "detail"){
            $id = $this->input->post("id");
            $param = array("token"=>$token,"id"=>$id);
            $data = $this->Api->Call("kamus_kompetensi_skj/level/detail",$param);
            echo $data;
        }else if($aksi == "hapus"){
            $id = $this->input->post("id");
            $param = array("token"=>$token,"id"=>$id);
            $data = $this->Api->Call("kamus_kompetensi_skj/level/hapus",$param);
            echo $data;
        }
    }
}
?>