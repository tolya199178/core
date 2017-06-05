<?php

require dirname(__FILE__) . '/Base_Controller.php';

class Users extends Base_Controller
{

    function __construct()
    {
        // Construct the parent class
        parent::__construct();

        $this->load->model('User_model');
        $this->model = $this->User_model;
    }

    /**
     * Get all users
     */
    public function index_get()
    {
        $this->set_response('aaa', 200);
    }
    public function login_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $password = $data['password'];
        $result = $this->model->login($password);
        if($result)
            $this->set_response($result, 200);
        else
            $this->set_response('The current password is incorrect.', 401);

    }
    public function setpassword_post()
    {
        $data = json_decode(file_get_contents('php://input'), true);

        $result = $this->model->setPassword($data['oldPwd'], $data['newPwd']);
        if($result)
            $this->set_response($result, 200);
        else
            $this->set_response('The current password is incorrect.', 401);
    }
}
