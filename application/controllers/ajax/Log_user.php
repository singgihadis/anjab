<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Log_user extends CI_Controller {

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
        $keyword = $this->input->post("keyword");
        $tgl_mulai = $this->input->post("tgl_mulai");
        $tgl_sampai = $this->input->post("tgl_sampai");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"keyword"=>$keyword,"tgl_mulai"=>$tgl_mulai,"tgl_sampai"=>$tgl_sampai,"page"=>$page);
        $data = $this->Api->Call("log_user",$param);
        echo $data;
    }
}
?>