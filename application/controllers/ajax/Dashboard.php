<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

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
    public function total_jabatan()
    {
        $token = $this->session->userdata("token");
        $master_opd_id = $this->input->post("master_opd_id");
        $tahun = $this->input->post("tahun");
        $param = array("token"=>$token,"master_opd_id"=>$master_opd_id,"tahun"=>$tahun);
        $data = $this->Api->Call("dashboard/total_jabatan",$param);
        echo $data;
    }
    public function total_pegawai()
    {
        $token = $this->session->userdata("token");
        $master_opd_id = $this->input->post("master_opd_id");
        $tahun = $this->input->post("tahun");
        $param = array("token"=>$token,"master_opd_id"=>$master_opd_id,"tahun"=>$tahun);
        $data = $this->Api->Call("dashboard/total_pegawai",$param);
        echo $data;
    }
    public function total_pegawai_detail()
    {
        $token = $this->session->userdata("token");
        $master_opd_id = $this->input->post("master_opd_id");
        $tahun = $this->input->post("tahun");
        $param = array("token"=>$token,"master_opd_id"=>$master_opd_id,"tahun"=>$tahun);
        $data = $this->Api->Call("dashboard/total_pegawai_detail",$param);
        echo $data;
    }
}
?>