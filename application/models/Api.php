<?php
date_default_timezone_set('Asia/Jakarta');
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Model {

    public function __construct() {
        parent::__construct();

        $this->load->library("curl");
        $this->load->config("config_api");
    }

    public function Call($action,$param) {
        $header = [];
        $url	  = $this->config->item("api_url")."/".$action;
        $this->curl->create($url);
        $this->curl->option(CURLOPT_POST, true);
        $this->curl->option(CURLOPT_HTTPHEADER, $header);
        $this->curl->option(CURLOPT_RETURNTRANSFER, true);
        $this->curl->option(CURLOPT_SSL_VERIFYPEER, false);
        $this->curl->option(CURLOPT_FAILONERROR, false);

        $this->curl->post($param);
        $output = $this->curl->execute();

        if($this->config->item("api_log_request")) {
            log_message("debug", "url : {$url}, param : ".json_encode($param));
        }
        if($this->config->item("api_log_response")) {
            log_message("debug", "output : {$output}");
        }
        return $output;
    }
}
?>