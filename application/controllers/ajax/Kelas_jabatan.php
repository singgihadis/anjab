<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Kelas_jabatan extends CI_Controller {

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
        $nama = $this->input->post("nama");
        $tahun = $this->input->post("tahun");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"nama"=>$nama,"page"=>$page,"tahun"=>$tahun);
        $data = $this->Api->Call("kelas_jabatan",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $tahun = $this->input->post("tahun");
        $kelas = $this->input->post("kelas");
        $batas_awal = $this->input->post("batas_awal");
        $batas_akhir = $this->input->post("batas_akhir");
        $param = array("token"=>$token,"tahun"=>$tahun,"kelas"=>$kelas,"batas_awal"=>$batas_awal,"batas_akhir"=>$batas_akhir);
        $data = $this->Api->Call("kelas_jabatan/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $tahun = $this->input->post("tahun");
        $kelas = $this->input->post("kelas");
        $batas_awal = $this->input->post("batas_awal");
        $batas_akhir = $this->input->post("batas_akhir");
        $param = array("id"=>$id,"token"=>$token,"tahun"=>$tahun,"kelas"=>$kelas,"batas_awal"=>$batas_awal,"batas_akhir"=>$batas_akhir);
        $data = $this->Api->Call("kelas_jabatan/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("kelas_jabatan/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("kelas_jabatan/hapus",$param);
        echo $data;
    }
}
?>