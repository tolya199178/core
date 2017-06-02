<?php


class Subscribers_model extends CI_Model
{

    private $table = 'subscribers';

    function __construct()
    {
        /* Call the Model constructor */
        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("created", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function saveRow($data){
        if(!$this->checkEmail($data['email'])){
            $data['created'] = date('Y-m-d h:i:s');
            $this->db->insert($this->table, $data);
            return true;
        } else {
            return false;
        }
    }

    private function checkEmail($email){
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->where("email", $email);
        $query = $this->db->get();
        if($query->num_rows() > 0){
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