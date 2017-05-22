<?php

class User_model extends Base_model
{

    private $table = 'users';
    // get password
    public function setPassword($oldPwd, $newPwd)
    {
        $sql = "SELECT * FROM users WHERE `name`='admin' AND password=MD5('".$oldPwd."')";
        $rst = $this->db->query($sql);
        $row = $rst->result_array();
        if(count($row) > 0){
            $sql = "UPDATE users SET password=MD5('".$newPwd."') WHERE `name`='admin' AND password=MD5('".$oldPwd."')";
            $this->db->query($sql);
            return true;
        } else {
            return false;
        }
    }
}
