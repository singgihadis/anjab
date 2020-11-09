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
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $username = $this->input->post("username");
        $password = $this->input->post("password");
        $email = $this->input->post("email");
        $nama = $this->input->post("nama");
        $level = $this->input->post("level");
        $jabatan = $this->input->post("jabatan");
        $master_opd_id = $this->input->post("master_opd_id");
        $param = array(
            "token"=>$token,
            "username"=>$username,
            "password"=>$password,
            "email"=>$email,
            "nama"=>$nama,
            "level"=>$level,
            "jabatan"=>$jabatan,
            "master_opd_id"=>$master_opd_id
        );
        $data = $this->Api->Call("user/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $username = $this->input->post("username");
        $password = $this->input->post("password");
        $email = $this->input->post("email");
        $nama = $this->input->post("nama");
        $level = $this->input->post("level");
        $jabatan = $this->input->post("jabatan");
        $master_opd_id = $this->input->post("master_opd_id");
        $status = $this->input->post("status");
        $param = array(
            "token"=>$token,
            "id"=>$id,
            "username"=>$username,
            "password"=>$password,
            "email"=>$email,
            "nama"=>$nama,
            "level"=>$level,
            "jabatan"=>$jabatan,
            "master_opd_id"=>$master_opd_id,
            "status"=>$status
        );
        $data = $this->Api->Call("user/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("user/detail",$param);
        echo $data;
    }
    public function edit_password()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $password = $this->input->post("password");
        $param = array(
            "token"=>$token,
            "id"=>$id,
            "password"=>$password
        );
        $data = $this->Api->Call("user/edit_password",$param);
        echo $data;
    }
    public function update_password_by_user()
    {
        $token = $this->session->userdata("token");
        $password_lama = $this->input->post("password_lama");
        $password_baru = $this->input->post("password_baru");
        $param = array(
            "token"=>$token,
            "password_lama"=>$password_lama,
            "password_baru"=>$password_baru
        );
        $data = $this->Api->Call("user/update_password_by_user",$param);
        echo $data;
    }
}
?>