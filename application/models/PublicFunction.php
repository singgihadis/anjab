<?php
date_default_timezone_set('Asia/Jakarta');
defined('BASEPATH') OR exit('No direct script access allowed');

class PublicFunction extends CI_Model {

    public function __construct() {
        parent::__construct();
        $this->load->config("config_api");
    }
    public function FormatAngka($angka,$zero_to_empty = false) {
        $angka = (string) $angka;
        if($zero_to_empty){
            if($angka == "0"){
                return "";
            }
        }
        $result =  number_format($angka, 0, ',', '.');
        return $result;
    }
    public function ToFixed($angka,$decimal_places,$zero_to_empty = false) {
        $angka = (string) $angka;
        if($zero_to_empty){
            if($angka == "0"){
                return "";
            }
        }
        $result =  number_format($angka, $decimal_places, ',', '.');
        return $result;
    }
}
?>