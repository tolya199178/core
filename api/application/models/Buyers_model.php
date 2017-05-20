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
        $query = $this->db->get();
        return $query->result();
    }

    public function saveRow($data)
    {

        $rowId = $data['id'];

        $cols = array('email', 'purchased');
        $row = array();
        foreach ($cols as $col) {
            $row[$col] = isset($data[$col]) ? $data[$col] : '';
        }

        if ($rowId != 'new') {
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