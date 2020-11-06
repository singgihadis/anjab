<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Pengaturan extends CI_Controller
{

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *        http://example.com/index.php/welcome
     *    - or -
     *        http://example.com/index.php/welcome/index
     *    - or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see https://codeigniter.com/user_guide/general/urls.html
     */
    public function logo_edit()
    {
        if ($this->session->userdata("is_login")) {
            $token = $this->session->userdata("token");
            session_write_close();
            if (move_uploaded_file($_FILES['logo']['tmp_name'], "assets/img/logo.png")) {
                echo json_encode(array("is_error"=>false,"msg"=>"Berhasil update logo", "must_login" => false));
            } else {
                echo json_encode(array("is_error"=>true,"msg"=>"Gagal upload file", "must_login" => false));
            }
        } else {
            echo json_encode(array("is_error"=>true,"msg"=>"Anda tidak terlogin", "must_login" => true));
        }
    }
    public function logo_login_edit()
    {
        if ($this->session->userdata("is_login")) {
            $token = $this->session->userdata("token");
            session_write_close();
            if (move_uploaded_file($_FILES['logo_login']['tmp_name'], "assets/img/logo-login.png")) {
                echo json_encode(array("is_error"=>false,"msg"=>"Berhasil update logo pada halaman login", "must_login" => false));
            } else {
                echo json_encode(array("is_error"=>true,"msg"=>"Gagal upload file", "must_login" => false));
            }
        } else {
            echo json_encode(array("is_error"=>true,"msg"=>"Anda tidak terlogin", "must_login" => true));
        }
    }
    public function favicon_edit()
    {
        if ($this->session->userdata("is_login")) {
            $token = $this->session->userdata("token");
            session_write_close();
            if (move_uploaded_file($_FILES['favicon']['tmp_name'], "assets/img/favicon.png")) {
                echo json_encode(array("is_error"=>false,"msg"=>"Berhasil update favicon", "must_login" => false));
            } else {
                echo json_encode(array("is_error"=>true,"msg"=>"Gagal upload file", "must_login" => false));
            }
        } else {
            echo json_encode(array("is_error"=>true,"msg"=>"Anda tidak terlogin", "must_login" => true));
        }
    }
}
?>