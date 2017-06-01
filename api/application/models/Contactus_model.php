<?php


class Contactus_model extends CI_Model
{

    private $table = 'contactus';

    function __construct()
    {
        /* Call the Model constructor */
        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("contacted", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function addRow($data)
    {

        $data['contacted'] = date('Y-m-d h:i:s');
        $this->db->insert($this->table, $data);

        $this->load->model('mailbox_model');

        $emailOptions = [
                'from_email' => $data['email'],
                'to_emails' => [SITE_FROM_EMAIL],
                'message' => $data['message'],
                'subject' => 'From '.$data['email'],
                'mail_flag' => 'contactus'
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