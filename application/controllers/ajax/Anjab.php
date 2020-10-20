<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Anjab extends CI_Controller {

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
    public function index(){

    }
    public function ikhtisiar_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/ikhtisiar_kelengkapan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_kelengkapan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pendidikan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pendidikan_kelengkapan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pelatihan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan_kelengkapan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pengalaman_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman_kelengkapan",$param);
        echo $data;
    }
    public function tugas_pokok_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/tugas_pokok_kelengkapan",$param);
        echo $data;
    }
    public function hasil_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/hasil_kerja_kelengkapan",$param);
        echo $data;
    }
    public function bahan_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/bahan_kerja_kelengkapan",$param);
        echo $data;
    }
    public function perangkat_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/perangkat_kerja_kelengkapan",$param);
        echo $data;
    }
    public function tanggung_jawab_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/tanggung_jawab_kelengkapan",$param);
        echo $data;
    }
    public function wewenang_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/wewenang_kelengkapan",$param);
        echo $data;
    }
    public function korelasi_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/korelasi_kelengkapan",$param);
        echo $data;
    }
    public function kondisi_lingkungan_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kondisi_lingkungan_kerja_kelengkapan",$param);
        echo $data;
    }
    public function resiko_bahaya_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/resiko_bahaya_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_keterampilan_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_keterampilan_kerja_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_bakat_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_bakat_kerja_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_temperamen_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_temperamen_kerja_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_minat_kerja_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_minat_kerja_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_upaya_fisik_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_upaya_fisik_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_kondisi_fisik_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_kondisi_fisik_kelengkapan",$param);
        echo $data;
    }
    public function syarat_jabatan_fungsi_pekerjaan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_fungsi_pekerjaan_kelengkapan",$param);
        echo $data;
    }
    public function prestasi_kerja_diharapkan_kelengkapan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/prestasi_kerja_diharapkan_kelengkapan",$param);
        echo $data;
    }
    public function get_opd_name(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/get_opd_name",$param);
        echo $data;
    }
    public function ikhtisiar_jabatan_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $ikhtisiar = $this->input->post("ikhtisiar");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"ikhtisiar"=>$ikhtisiar);
        $data = $this->Api->Call("anjab/ikhtisiar_jabatan_update",$param);
        echo $data;
    }
    public function ikhtisiar_jabatan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/ikhtisiar_jabatan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pendidikan_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_pendidikan_id = $this->input->post("master_pendidikan_id");
        $jurusan = $this->input->post("jurusan");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_pendidikan_id"=>$master_pendidikan_id,"jurusan"=>$jurusan);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pendidikan_update",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pendidikan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pendidikan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pelatihan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pelatihan_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_jenis_pelatihan_id = $this->input->post("master_jenis_pelatihan_id");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_jenis_pelatihan_id"=>$master_jenis_pelatihan_id,"nama"=>$nama);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan_tambah",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pelatihan_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_jenis_pelatihan_id = $this->input->post("master_jenis_pelatihan_id");
        $nama = $this->input->post("nama");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"master_jenis_pelatihan_id"=>$master_jenis_pelatihan_id,"nama"=>$nama);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan_edit",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pelatihan_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pelatihan_hapus",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pengalaman(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pengalaman_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman_tambah",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pengalaman_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $nama = $this->input->post("nama");
        $param = array("id"=>$id,"token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman_edit",$param);
        echo $data;
    }
    public function kualifikasi_jabatan_pengalaman_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/kualifikasi_jabatan_pengalaman_hapus",$param);
        echo $data;
    }
    public function tugas_pokok(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/tugas_pokok",$param);
        echo $data;
    }
    public function tugas_pokok_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $uraian = $this->input->post("uraian");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"uraian"=>$uraian);
        $data = $this->Api->Call("anjab/tugas_pokok_tambah",$param);
        echo $data;
    }
    public function tugas_pokok_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $uraian = $this->input->post("uraian");
        $param = array("id"=>$id,"token"=>$token,"uraian"=>$uraian);
        $data = $this->Api->Call("anjab/tugas_pokok_edit",$param);
        echo $data;
    }
    public function tugas_pokok_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/tugas_pokok_hapus",$param);
        echo $data;
    }
    public function tugas_pokok_move_up(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/tugas_pokok_move_up",$param);
        echo $data;
    }
    public function tugas_pokok_move_down(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/tugas_pokok_move_down",$param);
        echo $data;
    }
    public function tugas_pokok_tahapan(){
        $token = $this->session->userdata("token");
        $anjab_tugas_pokok_id = $this->input->post("anjab_tugas_pokok_id");
        $param = array("anjab_tugas_pokok_id"=>$anjab_tugas_pokok_id,"token"=>$token);
        $data = $this->Api->Call("anjab/tugas_pokok_tahapan",$param);
        echo $data;
    }
    public function tugas_pokok_tahapan_update(){
        $token = $this->session->userdata("token");
        $anjab_tugas_pokok_id = $this->input->post("anjab_tugas_pokok_id");
        $uraian_json = $this->input->post("uraian_json");
        $param = array("anjab_tugas_pokok_id"=>$anjab_tugas_pokok_id,"token"=>$token,"uraian_json"=>$uraian_json);
        $data = $this->Api->Call("anjab/tugas_pokok_tahapan_update",$param);
        echo $data;
    }
    public function hasil_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/hasil_kerja",$param);
        echo $data;
    }
    public function hasil_kerja_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param_json = $this->input->post("param_json");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"param_json"=>$param_json);
        $data = $this->Api->Call("anjab/hasil_kerja_update",$param);
        echo $data;
    }
    public function bahan_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/bahan_kerja",$param);
        echo $data;
    }
    public function bahan_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $digunakan_dalam_tugas = $this->input->post("digunakan_dalam_tugas");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama"=>$nama,"digunakan_dalam_tugas"=>$digunakan_dalam_tugas);
        $data = $this->Api->Call("anjab/bahan_kerja_tambah",$param);
        echo $data;
    }
    public function bahan_kerja_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $digunakan_dalam_tugas = $this->input->post("digunakan_dalam_tugas");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"id"=>$id,"token"=>$token,"nama"=>$nama,"digunakan_dalam_tugas"=>$digunakan_dalam_tugas);
        $data = $this->Api->Call("anjab/bahan_kerja_edit",$param);
        echo $data;
    }
    public function bahan_kerja_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/bahan_kerja_hapus",$param);
        echo $data;
    }
    public function bahan_kerja_move_up(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/bahan_kerja_move_up",$param);
        echo $data;
    }
    public function bahan_kerja_move_down(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/bahan_kerja_move_down",$param);
        echo $data;
    }
    public function perangkat_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/perangkat_kerja",$param);
        echo $data;
    }
    public function perangkat_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $digunakan_dalam_tugas = $this->input->post("digunakan_dalam_tugas");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama"=>$nama,"digunakan_dalam_tugas"=>$digunakan_dalam_tugas);
        $data = $this->Api->Call("anjab/perangkat_kerja_tambah",$param);
        echo $data;
    }
    public function perangkat_kerja_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $digunakan_dalam_tugas = $this->input->post("digunakan_dalam_tugas");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"id"=>$id,"token"=>$token,"nama"=>$nama,"digunakan_dalam_tugas"=>$digunakan_dalam_tugas);
        $data = $this->Api->Call("anjab/perangkat_kerja_edit",$param);
        echo $data;
    }
    public function perangkat_kerja_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/perangkat_kerja_hapus",$param);
        echo $data;
    }
    public function perangkat_kerja_move_up(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/perangkat_kerja_move_up",$param);
        echo $data;
    }
    public function perangkat_kerja_move_down(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/perangkat_kerja_move_down",$param);
        echo $data;
    }
    public function tanggung_jawab(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/tanggung_jawab",$param);
        echo $data;
    }
    public function tanggung_jawab_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param_json = $this->input->post("param_json");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"param_json"=>$param_json);
        $data = $this->Api->Call("anjab/tanggung_jawab_update",$param);
        echo $data;
    }
    public function wewenang(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/wewenang",$param);
        echo $data;
    }
    public function wewenang_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param_json = $this->input->post("param_json");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"param_json"=>$param_json);
        $data = $this->Api->Call("anjab/wewenang_update",$param);
        echo $data;
    }
    public function korelasi(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/korelasi",$param);
        echo $data;
    }
    public function korelasi_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama_jabatan = $this->input->post("nama_jabatan");
        $unit_kerja = $this->input->post("unit_kerja");
        $dalam_hal = $this->input->post("dalam_hal");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama_jabatan"=>$nama_jabatan,"unit_kerja"=>$unit_kerja,"dalam_hal"=>$dalam_hal);
        $data = $this->Api->Call("anjab/korelasi_tambah",$param);
        echo $data;
    }
    public function korelasi_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama_jabatan = $this->input->post("nama_jabatan");
        $unit_kerja = $this->input->post("unit_kerja");
        $dalam_hal = $this->input->post("dalam_hal");
        $param = array("jabatan_id"=>$jabatan_id,"id"=>$id,"token"=>$token,"nama_jabatan"=>$nama_jabatan,"unit_kerja"=>$unit_kerja,"dalam_hal"=>$dalam_hal);
        $data = $this->Api->Call("anjab/korelasi_edit",$param);
        echo $data;
    }
    public function korelasi_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/korelasi_hapus",$param);
        echo $data;
    }
    public function korelasi_move_up(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/korelasi_move_up",$param);
        echo $data;
    }
    public function korelasi_move_down(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/korelasi_move_down",$param);
        echo $data;
    }
    public function kondisi_lingkungan_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/kondisi_lingkungan_kerja",$param);
        echo $data;
    }
    public function kondisi_lingkungan_kerja_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param_json = $this->input->post("param_json");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"param_json"=>$param_json);
        $data = $this->Api->Call("anjab/kondisi_lingkungan_kerja_update",$param);
        echo $data;
    }
    public function resiko_bahaya(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/resiko_bahaya",$param);
        echo $data;
    }
    public function resiko_bahaya_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $penyebab = $this->input->post("penyebab");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama"=>$nama,"penyebab"=>$penyebab);
        $data = $this->Api->Call("anjab/resiko_bahaya_tambah",$param);
        echo $data;
    }
    public function resiko_bahaya_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $penyebab = $this->input->post("penyebab");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"id"=>$id,"token"=>$token,"nama"=>$nama,"penyebab"=>$penyebab);
        $data = $this->Api->Call("anjab/resiko_bahaya_edit",$param);
        echo $data;
    }
    public function resiko_bahaya_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/resiko_bahaya_hapus",$param);
        echo $data;
    }
    public function resiko_bahaya_move_up(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/resiko_bahaya_move_up",$param);
        echo $data;
    }
    public function resiko_bahaya_move_down(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $order = $this->input->post("order");
        $param = array("id"=>$id,"token"=>$token,"order"=>$order);
        $data = $this->Api->Call("anjab/resiko_bahaya_move_down",$param);
        echo $data;
    }
    public function prestasi_kerja_diharapkan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/prestasi_kerja_diharapkan",$param);
        echo $data;
    }
    public function prestasi_kerja_diharapkan_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("anjab/prestasi_kerja_diharapkan_tambah",$param);
        echo $data;
    }
    public function prestasi_kerja_diharapkan_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $nama = $this->input->post("nama");
        $param = array("jabatan_id"=>$jabatan_id,"id"=>$id,"token"=>$token,"nama"=>$nama);
        $data = $this->Api->Call("anjab/prestasi_kerja_diharapkan_edit",$param);
        echo $data;
    }
    public function prestasi_kerja_diharapkan_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $param = array("id"=>$id,"token"=>$token);
        $data = $this->Api->Call("anjab/prestasi_kerja_diharapkan_hapus",$param);
        echo $data;
    }
    public function syarat_jabatan_keterampilan_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_keterampilan_kerja",$param);
        echo $data;
    }
    public function syarat_jabatan_keterampilan_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $aspek = $this->input->post("aspek");
        $uraian = $this->input->post("uraian");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"aspek"=>$aspek,"uraian"=>$uraian);
        $data = $this->Api->Call("anjab/syarat_jabatan_keterampilan_kerja_tambah",$param);
        echo $data;
    }
    public function syarat_jabatan_keterampilan_kerja_edit(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $aspek = $this->input->post("aspek");
        $uraian = $this->input->post("uraian");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"aspek"=>$aspek,"uraian"=>$uraian);
        $data = $this->Api->Call("anjab/syarat_jabatan_keterampilan_kerja_edit",$param);
        echo $data;
    }
    public function syarat_jabatan_bakat_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_bakat_kerja",$param);
        echo $data;
    }
    public function syarat_jabatan_bakat_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_bakat_kerja_id = $this->input->post("master_bakat_kerja_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_bakat_kerja_id"=>$master_bakat_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_bakat_kerja_tambah",$param);
        echo $data;
    }
    public function syarat_jabatan_bakat_kerja_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_bakat_kerja_id = $this->input->post("master_bakat_kerja_id");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"master_bakat_kerja_id"=>$master_bakat_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_bakat_kerja_hapus",$param);
        echo $data;
    }
    public function syarat_jabatan_temperamen_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_temperamen_kerja",$param);
        echo $data;
    }
    public function syarat_jabatan_temperamen_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_temperamen_kerja_id = $this->input->post("master_temperamen_kerja_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_temperamen_kerja_id"=>$master_temperamen_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_temperamen_kerja_tambah",$param);
        echo $data;
    }
    public function syarat_jabatan_temperamen_kerja_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_temperamen_kerja_id = $this->input->post("master_temperamen_kerja_id");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"master_temperamen_kerja_id"=>$master_temperamen_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_temperamen_kerja_hapus",$param);
        echo $data;
    }
    public function syarat_jabatan_minat_kerja(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_minat_kerja",$param);
        echo $data;
    }
    public function syarat_jabatan_minat_kerja_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_minat_kerja_id = $this->input->post("master_minat_kerja_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_minat_kerja_id"=>$master_minat_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_minat_kerja_tambah",$param);
        echo $data;
    }
    public function syarat_jabatan_minat_kerja_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_minat_kerja_id = $this->input->post("master_minat_kerja_id");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"master_minat_kerja_id"=>$master_minat_kerja_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_minat_kerja_hapus",$param);
        echo $data;
    }
    public function syarat_jabatan_upaya_fisik(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_upaya_fisik",$param);
        echo $data;
    }
    public function syarat_jabatan_upaya_fisik_tambah(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_upaya_fisik_id = $this->input->post("master_upaya_fisik_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_upaya_fisik_id"=>$master_upaya_fisik_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_upaya_fisik_tambah",$param);
        echo $data;
    }
    public function syarat_jabatan_upaya_fisik_hapus(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_upaya_fisik_id = $this->input->post("master_upaya_fisik_id");
        $param = array("id"=>$id,"jabatan_id"=>$jabatan_id,"token"=>$token,"master_tupaya_fisik_id"=>$master_upaya_fisik_id);
        $data = $this->Api->Call("anjab/syarat_jabatan_upaya_fisik_hapus",$param);
        echo $data;
    }
    public function syarat_jabatan_kondisi_fisik(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_kondisi_fisik",$param);
        echo $data;
    }
    public function syarat_jabatan_kondisi_fisik_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $keterangan = $this->input->post("keterangan");
        $master_kondisi_fisik_id = $this->input->post("master_kondisi_fisik_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"master_kondisi_fisik_id"=>$master_kondisi_fisik_id,"keterangan"=>$keterangan);
        $data = $this->Api->Call("anjab/syarat_jabatan_kondisi_fisik_update",$param);
        echo $data;
    }
    public function syarat_jabatan_fungsi_pekerjaan(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/syarat_jabatan_fungsi_pekerjaan",$param);
        echo $data;
    }
    public function syarat_jabatan_fungsi_pekerjaan_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $master_fungsi_pekerjaan_data_id = $this->input->post("master_fungsi_pekerjaan_data_id");
        $master_fungsi_pekerjaan_orang_id = $this->input->post("master_fungsi_pekerjaan_orang_id");
        $master_fungsi_pekerjaan_benda_id = $this->input->post("master_fungsi_pekerjaan_benda_id");
        $param = array(
            "jabatan_id"=>$jabatan_id,
            "token"=>$token,
            "master_fungsi_pekerjaan_data_id"=>$master_fungsi_pekerjaan_data_id,
            "master_fungsi_pekerjaan_orang_id"=>$master_fungsi_pekerjaan_orang_id,
            "master_fungsi_pekerjaan_benda_id"=>$master_fungsi_pekerjaan_benda_id
        );
        $data = $this->Api->Call("anjab/syarat_jabatan_fungsi_pekerjaan_update",$param);
        echo $data;
    }
    public function verifikasi(){
        $token = $this->session->userdata("token");
        $id = $this->input->post("id");
        $verifikasi = $this->input->post("verifikasi");
        $param = array("id"=>$id,"token"=>$token,"verifikasi"=>$verifikasi);
        $data = $this->Api->Call("anjab/verifikasi",$param);
        echo $data;
    }
    public function abk(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/abk",$param);
        echo $data;
    }
    public function abk_data(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token);
        $data = $this->Api->Call("anjab/abk_data",$param);
        echo $data;
    }
    public function abk_update(){
        $token = $this->session->userdata("token");
        $jabatan_id = $this->input->post("jabatan_id");
        $json = $this->input->post("json");
        $param = array("jabatan_id"=>$jabatan_id,"token"=>$token,"json"=>$json);
        $data = $this->Api->Call("anjab/abk_update",$param);
        echo $data;
    }
}
?>