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
        $this->load->model('mailbox_model');

        $this->db->insert($this->table, $payerInfo);

        $emailOptions = [
                'to_emails' => [$payerInfo['email']],
                'from_email' => SITE_FROM_EMAIL,
                'message' => 'You are welcome!',
                'subject' => 'Welcome to shadowcore !!!',
                'mail_flag' => 'buyers'
        ];

        if($this->mailbox_model->sendMail($emailOptions)){
            return true;
        } else {
            return false;
        }
    }

    public function deleteRowById($rowId)
    {
        return $this->db->delete($this->table, array('id' => $rowId));
    }
}