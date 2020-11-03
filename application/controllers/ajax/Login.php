<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

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
        $username = $this->input->post("username");
        $password = $this->input->post("password");
        $param = array("username"=>$username,"password"=>$password);
        $login = $this->Api->Call("login",$param);
        $json_login = json_decode($login,true);
        if($json_login['is_error'] == false){
            $this->session->set_userdata("profil",json_encode($json_login['data'][0]));
            $this->session->set_userdata("token",$json_login['token']);
            $this->session->set_userdata("is_login",true);

            //Simpan log
            $this->PublicFunction->SimpanLog("Login","",$json_login['data'][0]['user_id']);
        }
        echo $login;
    }
}
