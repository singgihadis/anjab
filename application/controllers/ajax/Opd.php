<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Opd extends CI_Controller {

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
        $data = $this->Api->Call("opd",$param);

        $Permission = $this->PublicFunction->Get_Permission();
        $level = $Permission[0];
        $master_opd_id =  $Permission[1];
        if($level == "2"){
            //OPD
            $json_data = json_decode($data,true);
            $json_data_new_data = array();
            if($json_data['is_error'] == false){
                foreach($json_data['data'] as $item){
                    if($master_opd_id == $item['id']){
                        array_push($json_data_new_data,$item);
                    }
                }
            }
            $json_data['data'] = $json_data_new_data;
            if(count($json_data_new_data) <= 0){
                $json_data['is_error'] = true;
                $json_data['msg'] = "Data tidak tersedia";
            }
            $data = json_encode($json_data);
        }

        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $nama = $this->input->post("nama");
        $param = array("token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("opd/tambah",$param);
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $nama = $this->input->post("nama");
        $param = array("id"=>$id,"token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("opd/edit",$param);
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("opd/detail",$param);
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("opd/hapus",$param);
        echo $data;
    }
}
