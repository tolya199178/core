<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require dirname(__FILE__) . '/Base_Controller.php';

class Contactus extends Base_Controller
{

    private $model = null;
    function __construct()
    {
        parent::__construct();
        $this->load->model('contactus_model');
        $this->model = $this->contactus_model;
    }
    public function index_get()
    {
        $rows = $this->model->getRows();
        $this->set_response($rows, 200);
    }

    public function register_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $result = $this->model->addRow($data);
        $this->set_response($result, 200);
    }

    public function send_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $to      = $data['email'];
        $subject = 'From ' . $to;
        $message = $data['content'];

        $emailOptions = [
                'to' => $to,
                'message' => $message,
                'subject' => $subject
        ];
        if (send_email($emailOptions)) {
            $result = $this->model->addRow($data);
            $this->set_response('Success', 200);
        } else {
            $this->set_response('Failed', 401);
        }
    }

    public function sendmail_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $emailstr = '';
        $flag = false;
        foreach($data['emails'] as $email){
            $to      = $email;
            $subject = $data['subject'];
            $message = $data['content'];
            $headers = 'From: admin@shadowcore.com' . "\r\n" .
                    'Reply-To: admin@shadowcore.com' . "\r\n";

            $emailOptions = [
                    'to' => $to,
                    'message' => $message,
                    'subject' => $subject
            ];
            if (send_email($emailOptions)) {
                $flag = true;
            } else {
                $flag = false;
                break;
            }
            $emailstr .= ','. $email;
        }
        if($flag){
            $emailstr = substr($emailstr, 1);
            $data['emailstr'] = $emailstr;
            $this->model->saveMail($data);
            $this->set_response($flag, 200);
        } else {
            $this->set_response($flag, 401);
        }

    }

    public function index_delete()
    {
        $id = $this->input->get('id');

        $result = $this->model->deleteRowById($id);
        $this->set_response($result, 200);
    }
}
