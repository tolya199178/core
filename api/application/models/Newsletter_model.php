<?php


class Newsletter_model extends CI_Model
{

    private $table = 'newsletter';

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
            $this->db->insert($this->table, $data);
            $result = ['status'=>'Success', 'id'=>$this->db->insert_id()];
            return $result;
        } else {
            return ['status'=>'Already Exist'];
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