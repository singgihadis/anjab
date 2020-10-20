<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Faktor_evjab extends CI_Controller {

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
        $tipe = $this->input->post("tipe");
        $tahun = $this->input->post("tahun");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"nama"=>$nama,"page"=>$page,"tipe"=>$tipe,"tahun"=>$tahun);
        $data = $this->Api->Call("faktor_evjab",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $nama = $this->input->post("nama");
        $tahun = $this->input->post("tahun");
        $kode = $this->input->post("kode");
        $uraian = $this->input->post("uraian");
        $tipe = $this->input->post("tipe");
        $grup = $this->input->post("grup");
        $param = array("token"=>$token,"nama"=>$nama,"tahun"=>$tahun,"kode"=>$kode,"uraian"=>$uraian,"tipe"=>$tipe,"grup"=>$grup);
        $data = $this->Api->Call("faktor_evjab/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $nama = $this->input->post("nama");
        $tahun = $this->input->post("tahun");
        $kode = $this->input->post("kode");
        $uraian = $this->input->post("uraian");
        $tipe = $this->input->post("tipe");
        $grup = $this->input->post("grup");
        $param = array("id"=>$id,"token"=>$token,"nama"=>$nama,"tahun"=>$tahun,"kode"=>$kode,"uraian"=>$uraian,"tipe"=>$tipe,"grup"=>$grup);
        $data = $this->Api->Call("faktor_evjab/edit",$param);
        echo $data;
    }
    public function panduan()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $panduan = $this->input->post("panduan");
        $param = array("id"=>$id,"token"=>$token,"panduan"=>$panduan);
        $data = $this->Api->Call("faktor_evjab/panduan",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("faktor_evjab/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("faktor_evjab/hapus",$param);
        echo $data;
    }
    public function level($aksi = "")
    {
        $token = $this->session->userdata("token");
        $master_faktor_evjab_id = $this->input->post("master_faktor_evjab_id");
        if($aksi == ""){
            $page = $this->input->post("page");
            $param = array("token"=>$token,"master_faktor_evjab_id"=>$master_faktor_evjab_id,"page"=>$page);
            $data = $this->Api->Call("faktor_evjab/level",$param);
            echo $data;
        }else if($aksi == "tambah"){
            $level = $this->input->post("level");
            $nilai = $this->input->post("nilai");
            $uraian = $this->input->post("uraian");
            $dampak = $this->input->post("dampak");
            $param = array("token"=>$token,"master_faktor_evjab_id"=>$master_faktor_evjab_id,"level"=>$level,"nilai"=>$nilai,"uraian"=>$uraian,"dampak"=>$dampak);
            $data = $this->Api->Call("faktor_evjab/level/tambah",$param);
            echo $data;
        }else if($aksi == "edit"){
            $id = $this->input->post("id");
            $level = $this->input->post("level");
            $nilai = $this->input->post("nilai");
            $uraian = $this->input->post("uraian");
            $dampak = $this->input->post("dampak");
            $param = array("token"=>$token,"id"=>$id,"master_faktor_evjab_id"=>$master_faktor_evjab_id,"level"=>$level,"nilai"=>$nilai,"uraian"=>$uraian,"dampak"=>$dampak);
            $data = $this->Api->Call("faktor_evjab/level/edit",$param);
            echo $data;
        }else if($aksi == "detail"){
            $id = $this->input->post("id");
            $param = array("token"=>$token,"id"=>$id);
            $data = $this->Api->Call("faktor_evjab/level/detail",$param);
            echo $data;
        }else if($aksi == "hapus"){
            $id = $this->input->post("id");
            $param = array("token"=>$token,"id"=>$id);
            $data = $this->Api->Call("faktor_evjab/level/hapus",$param);
            echo $data;
        }
    }
}
?>