<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dokumen extends CI_Controller {

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
        $data = $this->Api->Call("dokumen",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $nama = $this->input->post("nama");
        $is_tampil = $this->input->post("is_tampil");
        $base64_dokumen = "";
        if(!empty($_FILES['dokumen']['name'])){
            $file_tmp= $_FILES['dokumen']['tmp_name'];
            $base64_dokumen = "";
            if(filesize($file_tmp) > 0){
                $dokumen_content = file_get_contents($file_tmp);
                $base64_dokumen = base64_encode($dokumen_content);
            }
        }
        $param = array("token"=>$token,"nama"=>$nama,"is_tampil"=>$is_tampil,"dokumen"=>$base64_dokumen);
        $data = $this->Api->Call("dokumen/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $nama = $this->input->post("nama");
        $is_tampil = $this->input->post("is_tampil");
        $update_dokumen = $this->input->post("update_dokumen");

        $param = array(
            "id"=>$id,
            "token"=>$token,
            "nama"=>$nama,
            "is_tampil"=>$is_tampil,
            "update_dokumen"=>$update_dokumen);
        if($update_dokumen == "1"){
            $base64_dokumen = "";
            if(!empty($_FILES['dokumen']['name'])){
                $file_tmp= $_FILES['dokumen']['tmp_name'];
                $base64_dokumen = "";
                if(filesize($file_tmp) > 0){
                    $dokumen_content = file_get_contents($file_tmp);
                    $base64_dokumen = base64_encode($dokumen_content);
                }
            }
            $param['dokumen'] = $base64_dokumen;
        }


        $data = $this->Api->Call("dokumen/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("dokumen/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("dokumen/hapus",$param);
        echo $data;
    }
}
