<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . '/Base_Controller.php';

class Mailbox extends Base_Controller
{

    private $model = null;
    function __construct()
    {
        parent::__construct();
        $this->load->model('mailbox_model');
        $this->model = $this->mailbox_model;
    }

    public function index_get()
    {
        $rows = $this->model->getRows();
        $this->set_response($rows, 200);
    }


    public function index_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $this->model->sendMail($data);
        if($result){
            $this->set_response(['status'=>'Success'], 200);
        } else {
            $this->set_response(['status'=>'Failed'], 401);
        }

    }


    public function index_delete()
    {
        $id = $this->input->get('id');

        $result = $this->model->deleteRowById($id);
        $this->set_response($result, 200);
    }
}
