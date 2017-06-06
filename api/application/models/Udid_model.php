<?php


class Udid_model extends CI_Model
{

    private $table = 'udids';

    function __construct()
    {
        /* Call the Model constructor */
        $this->load->library('encrypt');
        parent::__construct();
    }

    public function getRows()
    {
        $this->db->select("*");
        $this->db->from($this->table);
        $this->db->order_by("created", "desc");
        $query = $this->db->get();
        $results = $query->result();
        $newData = [];
        foreach ($results as $row){
            $row->udid = $this->encrypt->decode($row->udid);
            $newData[] = $row;
        }
        return $newData;
    }

    public function getUdid5()
    {
        $sql = "SELECT * FROM ".$this->table." WHERE allocated_user<>'' ORDER BY `created` Limit 5";
        $query = $this->db->query($sql);
        $newData = [];
        foreach ($query->result_array() as $row)
        {
            $row['udid'] = $this->encrypt->decode($row['udid']);
            $newData[] = $row;
        }
        return $newData;
    }

    public function setUdidAllocated($idAry, $email){
        $idStr = implode(',', $idAry);
        $datestr = date('Y-m-d H:i:s');
        $sql = "UPDATE ".$this->table." SET allocated_user='".$email."', allocated_date='".$datestr."' WHERE `id` IN(".$idStr.")";
        $this->db->query($sql);
        return true;
    }

    public function saveRow($data)
    {

        $rowId = $data['id'];

        $cols = array('udid');
        $row = array();
        foreach ($cols as $col) {
            $row[$col] = isset($data[$col]) ? $data[$col] : '';
            if($col == 'udid'){
                $row[$col] = $this->encrypt->encode($row[$col]);
            }
        }

        if ($rowId != '0') {
            $this->db->where('id', $rowId);
            $result = $this->db->update($this->table, $row);
        } else {
            $row['created'] = date('Y-m-d h:i:s');
            $this->db->insert($this->table, $row);

            $udids = $this->getUdid5();
            if(count($udids) == 5){
                $this->load->model('buyers_model', 'buyers_model');
                $this->buyers_model->sendUdids($udids);
            }

            $result = ['id'=>$this->db->insert_id(), 'created'=>$row['created']];
        }

        return $result;
    }




    public function deleteRowById($rowId)
    {
        return $this->db->delete($this->table, array('id' => $rowId));
    }
}