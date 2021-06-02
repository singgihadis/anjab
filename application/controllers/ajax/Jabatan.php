<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Jabatan extends CI_Controller {

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
        $max_tingkat = $this->input->post("max_tingkat");
        $nama = $this->input->post("nama");
        $master_opd_id = $this->input->post("master_opd_id");
        $tahun = $this->input->post("tahun");
        $master_jenis_jabatan = $this->input->post("master_jenis_jabatan");
        $page = $this->input->post("page");
        $param = array("token"=>$token,"nama"=>$nama,"master_opd_id"=>$master_opd_id,"tahun"=>$tahun,"page"=>$page,"master_jenis_jabatan"=>$master_jenis_jabatan,"max_tingkat"=>$max_tingkat);
        $data = $this->Api->Call("jabatan",$param);
        echo $data;
    }
    public function tambah()
    {
        $token = $this->session->userdata("token");
        $tahun = $this->input->post("tahun");
        $master_opd_id = $this->input->post("master_opd_id");
        $jabatan_id = $this->input->post("jabatan_id");
        $kode = $this->input->post("kode");
        $nama = $this->input->post("nama");
        $unit = $this->input->post("unit");
        $master_jenis_jabatan_id = $this->input->post("master_jenis_jabatan_id");
        $master_eselon_id = $this->input->post("master_eselon_id");
        $master_golongan_id = $this->input->post("master_golongan_id");
        $master_urusan_pemerintahan_ids = $this->input->post("master_urusan_pemerintahan_ids");
        $param = array(
            "token"=>$token,
            "tahun"=>$tahun,
            "master_opd_id"=>$master_opd_id,
            "jabatan_id"=>$jabatan_id,
            "kode"=>$kode,
            "nama"=>$nama,
            "unit"=>$unit,
            "master_jenis_jabatan_id"=>$master_jenis_jabatan_id,
            "master_eselon_id"=>$master_eselon_id,
            "master_golongan_id"=>$master_golongan_id,
            "master_urusan_pemerintahan_ids"=>$master_urusan_pemerintahan_ids
        );
        $data = $this->Api->Call("jabatan/tambah",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Tambah Jabatan",json_encode($param));
        }
        echo $data;
    }
    public function edit()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
//        $tahun = $this->input->post("tahun");
//        $master_opd_id = $this->input->post("master_opd_id");
        $jabatan_id = $this->input->post("jabatan_id");
        $kode = $this->input->post("kode");
        $nama = $this->input->post("nama");
        $unit = $this->input->post("unit");
        $master_jenis_jabatan_id = $this->input->post("master_jenis_jabatan_id");
        $master_eselon_id = $this->input->post("master_eselon_id");
        $master_golongan_id = $this->input->post("master_golongan_id");
        $master_urusan_pemerintahan_ids = $this->input->post("master_urusan_pemerintahan_ids");
        $param = array(
            "token"=>$token,
            "id"=>$id,
//            "tahun"=>$tahun,
//            "master_opd_id"=>$master_opd_id,
            "jabatan_id"=>$jabatan_id,
            "kode"=>$kode,
            "nama"=>$nama,
            "unit"=>$unit,
            "master_jenis_jabatan_id"=>$master_jenis_jabatan_id,
            "master_eselon_id"=>$master_eselon_id,
            "master_golongan_id"=>$master_golongan_id,
            "master_urusan_pemerintahan_ids"=>$master_urusan_pemerintahan_ids
        );
        $data = $this->Api->Call("jabatan/edit",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Update Jabatan",json_encode($param));
        }
        echo $data;
    }
    public function detail()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("jabatan/detail",$param);
        echo $data;
    }
    public function jml_pegawai()
    {
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("token"=>$token,"jabatan_id"=>$jabatan_id);
        $data = $this->Api->Call("jabatan/jml_pegawai",$param);
        echo $data;
    }
    public function jml_pegawai_update()
    {
        $token = $this->session->userdata("token");
        $input_array = $this->input->post("input_array");
        $jml_pegawai = $this->input->post("jml_pegawai");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("token"=>$token,"input_array"=>$input_array,"jml_pegawai"=>$jml_pegawai,"jabatan_id"=>$jabatan_id);
        $data = $this->Api->Call("jabatan/jml_pegawai_update",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Update Jabatan Jml Pegawai",json_encode($param));
        }
        echo $data;
    }
    public function hapus()
    {
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("token"=>$token,"id"=>$id);
        $data = $this->Api->Call("jabatan/hapus",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Hapus Jabatan",json_encode($param));
        }
        echo $data;
    }
    public function move_up()
    {
        $token = $this->session->userdata("token");
        $order = $this->input->post("order");
        $jabatan_id = $this->input->post("jabatan_id");
        $tingkat = $this->input->post("tingkat");
        $param = array("token"=>$token,"order"=>$order,"jabatan_id"=>$jabatan_id,"tingkat"=>$tingkat);
        $data = $this->Api->Call("jabatan/move_up",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Memindahkan urutan Jabatan ke atas",json_encode($param));
        }
        echo $data;
    }
    public function move_down()
    {
        $token = $this->session->userdata("token");
        $order = $this->input->post("order");
        $jabatan_id = $this->input->post("jabatan_id");
        $tingkat = $this->input->post("tingkat");
        $param = array("token"=>$token,"order"=>$order,"jabatan_id"=>$jabatan_id,"tingkat"=>$tingkat);
        $data = $this->Api->Call("jabatan/move_down",$param);

        //Simpan log
        if(json_decode($data,true)['is_error'] == false){
            $this->PublicFunction->SimpanLog("Memindahkan urutan Jabatan ke bawah",json_encode($param));
        }
        echo $data;
    }
}
?>