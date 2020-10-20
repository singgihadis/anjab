<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Satuan_kerja extends CI_Controller {

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
        $page = $this->input->post("page");
        $param = array("token"=>$token,"nama"=>$nama,"page"=>$page);
        $data = $this->Api->Call("satuan_kerja",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $nama = $this->input->post("nama");
        $uraian = $this->input->post("uraian");
        $param = array("token"=>$token,"nama"=>$nama,"uraian"=>$uraian);
        $data = $this->Api->Call("satuan_kerja/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $nama = $this->input->post("nama");
        $uraian = $this->input->post("uraian");
        $param = array("id"=>$id,"token"=>$token,"nama"=>$nama,"uraian"=>$uraian);
        $data = $this->Api->Call("satuan_kerja/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("satuan_kerja/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("satuan_kerja/hapus",$param);
        echo $data;
    }
}
?>