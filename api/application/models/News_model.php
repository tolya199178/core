<?php


class News_model extends CI_Model
{

    private $table = 'news';

    function __construct()
    {
        /* Call the Model constructor */
        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("posted", "desc");
        $query = $this->db->get();
        return $query->result();
    }

    public function saveRow($data)
    {

        $rowId = $data['id'];

        $cols = array('title', 'content', 'imageurl');
        $row = array();
        foreach ($cols as $col) {
            $row[$col] = isset($data[$col]) ? $data[$col] : '';
        }

        if ($rowId != '0') {
            $this->db->where('id', $rowId);
            $result = $this->db->update($this->table, $row);
        } else {
            $row['posted'] = date('Y-m-d h:i:s');
            $this->db->insert($this->table, $row);
            $result = ['id'=>$this->db->insert_id(), 'posted'=>$row['posted']];
        }

        return $result;
    }


    public function deleteRowById($rowId)
    {
        return $this->db->delete($this->table, array('id' => $rowId));
    }
}