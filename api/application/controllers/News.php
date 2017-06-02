<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . '/Base_Controller.php';

class News extends Base_Controller
{

    private $model = null;
    function __construct()
    {
        parent::__construct();
        $this->load->model('news_model');
        $this->model = $this->news_model;
    }
    public function index_get()
    {
        $rows = $this->model->getRows();
        $this->set_response($rows, 200);
    }

    public function index_post()
    {
        $this->load->model('subscribers_model');
        $this->load->model('mailbox_model');

        $data = json_decode(file_get_contents('php://input'), true);

        $result = $this->model->saveRow($data);

        $subscribers = $this->subscribers_model->getRows();
        $to_emails = [];
        foreach ($subscribers as $subscriber){
            $to_emails[] = $subscriber['email'];
        }
        $emailOptions = [
                'to_emails' => $to_emails,
                'from_email' => SITE_FROM_EMAIL,
                'message' => $data['content'],
                'subject' => $data['title'],
                'mail_flag' => 'news'
        ];
        $this->mailbox_model->sendMail($emailOptions);

        $this->set_response($result, 200);
    }

    public function index_delete()
    {
        $id = $this->input->get('id');

        $result = $this->model->deleteRowById($id);
        $this->set_response($result, 200);
    }
}
