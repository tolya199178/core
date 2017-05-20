<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . '/Base_Controller.php';

class News extends Base_Controller
{

    private $model = null;
    function __construct()
    {
        parent::__construct();
        $this->load->model('buyers_model');
        $this->model = $this->buyers_model;
    }
    public function index_get()
    {
        $rows = $this->model->getRows();
        $this->set_response($rows, 200);
    }

    public function index_post()
    {
        $data = [];
        $data['id'] = $_REQUEST['id'];
        $data['title'] = $_REQUEST['title'];
        $data['content'] = $_REQUEST['content'];
        $data['imageurl'] = $_REQUEST['imageurl'];
        $result = $this->model->saveRow($data);
        $this->set_response($result, 200);
    }

    public function index_delete()
    {
        $id = $this->input->get('id');

        $result = $this->model->deleteRowById($id);
        $this->set_response($result, 200);
    }
}
