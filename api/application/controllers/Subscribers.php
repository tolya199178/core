<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . '/Base_Controller.php';

class Subscribers extends Base_Controller
{

    private $model = null;
    function __construct()
    {
        parent::__construct();
        $this->load->model('subscribers_model');
        $this->model = $this->subscribers_model;
    }

    public function index_get()
    {
        $rows = $this->model->getRows();
        $this->set_response($rows, 200);
    }

    public function index_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $result = $this->model->saveRow($data);

        if($result){
            $this->load->model('mailbox_model');
            $emailOptions = [
                    'to_emails' => [$data['email']],
                    'from_email' => SITE_FROM_EMAIL,
                    'message' => 'Your email is successfully registered our site',
                    'subject' => 'Welcome to shadowcore !!!',
                    'mail_flag' => 'subscribers'
            ];
            $this->mailbox_model->sendMail($emailOptions);
        }


        $this->set_response($result, 200);
    }

    public function index_delete()
    {
        $id = $this->input->get('id');

        $result = $this->model->deleteRowById($id);
        $this->set_response($result, 200);
    }
}
