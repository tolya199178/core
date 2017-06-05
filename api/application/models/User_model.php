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
    public function login($password){
        $sql = "SELECT * FROM users WHERE `name`='admin' AND password=MD5('".$password."')";
        $rst = $this->db->query($sql);
        $row = $rst->result_array();
        if(count($row) > 0){
            return true;
        } else {
            return false;
        }
    }

    public function setAcessToken($userID, $expireDays = 0)
    {
        $token = md5($userID . '-' . time() . '-' . rand());
        $expires = time() + 3600 * 2; //expire after 2 hours in default
        if ($expireDays > 0) {
            $expires = time() + 3600 * 24 * $expireDays;
        }

        $this->db->insert('ci_access_tokens', [
                'token' => $token,
                'user_id' => $userID,
                'expires' => date('Y-m-d H:i:s', $expires),
                'createdOn' => date('Y-m-d H:i:s')
        ]);
        return $token;
    }

    public function deleteExpiredTokens()
    {
        $this->db->where('expires <=', date('Y-m-d H:i:s'));
        $this->db->delete('ci_access_tokens');
    }

    public function isValidToken($token)
    {
        $this->db->select('user_id');
        $this->db->from('ci_access_tokens');
        $this->db->where('token', $token);

        $query = $this->db->get();

        if ($query->num_rows() == 0) {
            return null;
        }

        return $query->row()->user_id;
    }

    public function getUserByToken($token)
    {
        $userID = $this->isValidToken($token);

        $this->db->select('*');
        $this->db->from($this->_table);
        $this->db->where('id', $userID);

        $query = $this->db->get();

        return $query->row();
    }

    public function logoutByToken($token)
    {
        $this->db->where('token', $token);
        $this->db->delete('ci_access_tokens');
    }
}
