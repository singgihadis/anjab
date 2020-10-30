<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

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
        $level = $this->input->post("level");
        $status = $this->input->post("status");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"keyword"=>$keyword,"level"=>$level,"status"=>$status,"page"=>$page);
        $data = $this->Api->Call("user",$param);
        echo $data;
    }
}
?>