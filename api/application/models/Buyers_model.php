<?php


class Buyers_model extends CI_Model
{

    private $table = 'buyers';

    function __construct()
    {
        /* Call the Model constructor */

        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("purchased", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function addRow($payerInfo){
        $this->load->model('mailbox_model', 'mailbox_model');
        $this->load->model('udid_model', 'udid_model');
        $udids = $this->udid_model->getUdid5();
        $message = 'You are welcome!\n';
        $udidAry = [];

        if(count($udids) == 5){
            foreach ($udids as $row){
                $udidAry[] = $row['id'];
                $message .= $row['udid'] . '\n';
            }
        }

        $this->db->insert($this->table, $payerInfo);
        $user_id = $this->db->insert_id();

        $emailOptions = [
                'to_emails' => [$payerInfo['email']],
                'from_email' => SITE_FROM_EMAIL,
                'message' => $message,
                'subject' => 'Welcome to shadowcore !!!',
                'mail_flag' => 'buyers'
        ];

        if($this->mailbox_model->sendMail($emailOptions)){
            if(count($udids) == 5){
                $this->setUdidFlag($user_id);
                $this->udid_model->setUdidAllocated($udidAry, $payerInfo['email']);
            }
            return true;
        } else {
            return false;
        }
    }

    public function deleteRowById($rowId)
    {
        return $this->db->delete($this->table, array('id' => $rowId));
    }

    public function getUdidUser(){
        $sql = "SELECT * FROM ".$this->table." WHERE tbl_flag=0 ORDER BY `purchased` Limit 1";
        $query = $this->db->query($sql);
        if($query->num_rows() > 0){
            $row = $query->result_array();
            return $row;
        } else {
            return false;
        }

    }

    public function setUdidFlag($user_id){
        $sql = "UPDATE ".$this->table." SET tbl_flag=5 WHERE id=".$user_id;
        $this->db->query($sql);
    }

    public function sendUdids($udids){
        $this->load->model('mailbox_model', 'mailbox_model');

        $user = $this->getUdidUser();
        if(!$user) return false;

        $this->setUdidFlag($user['id']);

        $message = '';
        foreach ($udids as $row){
            $message .= $row['udid'] . '<br/>';
        }

        $emailOptions = [
                'to_emails' => [$user['email']],
                'from_email' => SITE_FROM_EMAIL,
                'message' => $message,
                'subject' => 'You can use this udids in the app',
                'mail_flag' => 'buyers'
        ];

        if($this->mailbox_model->sendMail($emailOptions)){
            return true;
        } else {
            return false;
        }
    }
}