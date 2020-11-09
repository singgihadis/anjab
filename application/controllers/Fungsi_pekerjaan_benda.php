<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Fungsi_pekerjaan_benda extends CI_Controller {

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
        if($this->session->userdata("is_login")){
            $Permission = $this->PublicFunction->Get_Permission();
            $level = $Permission[0];
            if($level == "1"){
                $this->load->view("fungsi_pekerjaan_benda");
            }else{
                redirect("dashboard");
            }
        }else{
            redirect("login");
        }
    }
    public function tambah()
    {
        if($this->session->userdata("is_login")){
            $Permission = $this->PublicFunction->Get_Permission();
            $level = $Permission[0];
            if($level == "1"){
                $this->load->view("fungsi_pekerjaan_benda_tambah");
            }else{
                redirect("dashboard");
            }
        }else{
            redirect("login");
        }
    }
    public function edit($id)
    {
        if($this->session->userdata("is_login")){
            $Permission = $this->PublicFunction->Get_Permission();
            $level = $Permission[0];
            if($level == "1"){
                $this->load->view("fungsi_pekerjaan_benda_edit",array("id"=>$id));
            }else{
                redirect("dashboard");
            }
        }else{
            redirect("login");
        }
    }
}
?>