<?php


class Mailbox_model extends CI_Model
{

    private $table = 'mailbox';

    function __construct()
    {
        /* Call the Model constructor */
        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("senddate", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function saveMail($data)
    {
        $data['senddate'] = date('Y-m-d h:i:s');
        $result = $this->db->insert($this->table, $data);
        return $result;
    }

    public function sendMail($data){
        $emailstr = '';
        $flag = false;
        foreach($data['to_emails'] as $email){
            $emailOptions = [
                    'to' => $email,
                    'from' => $data['from_email'],
                    'message' => $data['message'],
                    'subject' => $data['subject']
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
            $data['to_emails'] = $emailstr;
            $this->saveMail($data);
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