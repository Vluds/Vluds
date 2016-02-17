<?php
class User{
  public static $dataArray = array();

  public static function genToken(){
    $token = uniqid((time()+rand())*'8&r!t?4', true);
    return $token;
  }

  public static function getToken(){
    if(isset($_SESSION['user_token']) AND !empty($_SESSION['user_token'])){
      $user_token = $_SESSION['user_token'];
    }elseif (isset($_COOKIE['user_token']) AND !empty($_COOKIE['user_token'])){
      $user_token = $_COOKIE['user_token'];
    }else {
      $user_token = null;
    }
    return $user_token;
  }

  public static function getTokenTime(){
    if(isset($_SESSION['user_token_time']) AND !empty($_SESSION['user_token_time'])){
      $user_token_time = $_SESSION['user_token_time'];
    }elseif (isset($_COOKIE['user_token_time']) AND !empty($_COOKIE['user_token_time'])){
      $user_token_time = $_COOKIE['user_token_time'];
    }else {
      $user_token_time = null;
    }
    return $user_token_time;
  }

  public static function isUserSession(){
    $Db = new DataBase();
    $UserInfos = $Db->select("token", "users", "WHERE token LIKE '".self::getToken()."' AND token_time LIKE '".self::getTokenTime()."'");
    $isUserTokenExist = $Db->num_rows($UserInfos);
    if($isUserTokenExist == 1) {
      return true;
    }else {
      return false;
    }
  }

  public static function startUserSession($userID, $isLongLive){
    if((isset($userID) AND !empty($userID)) AND (isset($isLongLive))){
      $Db = new DataBase();

      $user_token = self::genToken();
      $user_token_time = time();

      if($isLongLive){
        $_SESSION['user_token'] = $user_token;
        $_SESSION['user_token_time'] = $user_token_time;
      }else{
        setcookie ("user_token", $user_token, time() + 3600, '/');
        setcookie ("user_token_time", $user_token_time, time() + 3600, '/');
      }

      $Db->update("users", "token = '".$user_token."', token_time = '".$user_token_time."'", "WHERE userID LIKE '".$userID."'");

      self::$dataArray['error'] = false;
      self::$dataArray['reply'] = "User is now logged !";
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "userID or isLongLive not set !";
    }

    return self::$dataArray;
  }

  public static function signUp($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    $Db = new DataBase();
    $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."' OR username LIKE '".$POST_username."'");
    $isUserExist = $Db->num_rows($UserInfos);
    if($isUserExist <= 0) {
  		$ip = $_SERVER['REMOTE_ADDR'];

      if(isset($POST_password) AND !empty($POST_password)){
        $POST_password = password_hash($POST_password, PASSWORD_BCRYPT, ["cost" => 10]);
      }else {
        $POST_password = null;
      }

      if(isset($POST_userID) AND !empty($POST_userID)){
        $POST_userID = $POST_userID;
      }else {
        $POST_userID = preg_replace("/[^A-Za-z0-9 ]/", '', strtolower($POST_username));
        $POST_userID = preg_replace(' ', '.', $POST_userID);
      }

      $Db->insert("users", "userID, email, username, password, ip", "'".$POST_userID."', '".$POST_email."', '".$POST_username."', '".$POST_password."', '".$ip."'");

      self::$dataArray['error'] = false;
      self::$dataArray['reply'] = "User ".$POST_email.":".$POST_username." registred with ip ".$ip." !";
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "User ".$POST_email.":".$POST_username." exists !";
    }

    return self::$dataArray;
  }

  public static function logIn($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    $Db = new DataBase();

    if(isset($POST_password) AND !empty($POST_password)){
      $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."' AND password LIKE '".$POST_password."'");
    }else {
      $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."' AND userID LIKE '".$POST_userID."'");
    }

    $isUserExist = $Db->num_rows($UserInfos);
    if($isUserExist == 1) {
      $getUserInfos = $Db->fetch_array($UserInfos);
      self::$dataArray = self::startUserSession($getUserInfos['userID'], false);
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "Invalid credentials !";
    }

    return self::$dataArray;
  }
}
?>
