<?php
class User{
  public static function signUp($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    $dataArray = array();

    $Db = new DataBase();
    $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."'");
    $getUserInfos = $Db->fetch_array($UserInfos);
    $isUserExist = $Db->num_rows($UserInfos);
    if($isUserExist <= 0) {
      setcookie("username", $POST_username, time() + 7200, "/");
		  $_SESSION['SID_ID'] = session_id();

      if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
			     $ip = $_SERVER['HTTP_CLIENT_IP'];
  		}
  		elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
  		    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
  		}
  		else {
  		    $ip = $_SERVER['REMOTE_ADDR'];
  		}
      
      if(isset($POST_password) AND !empty($POST_password)){
        $POST_password = password_hash($POST_password, PASSWORD_BCRYPT, ["cost" => 10]);
      }else {
        $POST_password = null;
      }

      $Db->insert("users", "email, username, password, ip", "'".$POST_email."', '".$POST_username."', '".$POST_password."', '".$ip."'");

      $dataArray['error'] = false;
      $dataArray['reply'] = "User ".$POST_email.":".$POST_username.":".$POST_password." registred with ip ".$ip."!";
    }else {
      $dataArray = "PAS OK !";
    }

    return $dataArray;
  }
}
?>
