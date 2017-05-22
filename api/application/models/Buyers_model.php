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

    public function addRow($email){

        $data = ['email'=>$email, 'purchased'=>date('Y-m-d h:i:s')];
        $this->db->insert($this->table, $data);
        $result = ['id'=>$this->db->insert_id(), 'posted'=>$data['purchased']];
        return $result;
    }

    public function saveMail($data)
    {
        //$row['purchased'] = date('Y-m-d h:i:s');
        $insertData = [
                'subject' => $data['subject'],
                'content' => $data['content'],
                'mail_flag' => 'buyers',
                'senddate' => date('Y-m-d h:i:s'),
                'receive_emails' => $data['emailstr']
        ];
        $result = $this->db->insert('sendmails', $insertData);
    }

    public function saveRow($data)
    {

        $rowId = $data['id'];

        $cols = array('email', 'purchased');
        $row = array();
        foreach ($cols as $col) {
            $row[$col] = isset($data[$col]) ? $data[$col] : '';
        }

        if ($rowId != '0') {
            $this->db->where('id', $rowId);
            $result = $this->db->update($this->table, $row);
        } else {
            $row['purchased'] = date('Y-m-d h:i:s');
            $result = $this->db->insert($this->table, $row);
            $result = $this->db->insert_id();
        }

        return $result;
    }


    public function deleteRowById($rowId)
    {
        return $this->db->delete($this->table, array('id' => $rowId));
    }
}