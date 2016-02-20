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

  public static function getUsername(){
    if(self::isUserSession()){
      $Db = new DataBase();
      $UserInfos = $Db->select("username", "users", "WHERE token LIKE '".self::getToken()."' AND token_time LIKE '".self::getTokenTime()."'");
      $isUserTokenExist = $Db->num_rows($UserInfos);
      if($isUserTokenExist == 1) {
        $getUserInfos = $Db->fetch_array($UserInfos);
        $username = $getUserInfos['username'];
      }else {
        $username = null;
      }
    }else {
      $username = null;
    }
    return $username;
  }

  public static function startUserSession($email, $isLongLive){
    if((isset($email) AND !empty($email)) AND (isset($isLongLive))){
      $Db = new DataBase();

      $user_token = self::genToken();
      $user_token_time = time();

      if(!$isLongLive){
        $_SESSION['user_token'] = $user_token;
        $_SESSION['user_token_time'] = $user_token_time;
      }else{
        if(isset($_COOKIE['user_token'])){
          unset($_COOKIE['user_token']);
        }
        if(isset($_COOKIE['user_token_time'])){
          unset($_COOKIE['user_token_time']);
        }
        setcookie ("user_token", $user_token, time() + 3600, '/');
        setcookie ("user_token_time", $user_token_time, time() + 3600, '/');
      }

      $Db->update("users", "token = '".$user_token."', token_time = '".$user_token_time."'", "WHERE email LIKE '".$email."'");

      self::$dataArray['error'] = false;
      self::$dataArray['reply'] = "Now you are logged on ".self::getUsername()." ! :)";
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "email or isLongLive not set !";
    }

    return self::$dataArray;
  }

  public static function closeUserSession(){
    $Db = new DataBase();

    $Db->update("users", "token = '', token_time = ''", "WHERE token LIKE '".self::getToken()."'");

    $_SESSION = array();
    session_destroy();
    unset($_COOKIE['user_token']);
    unset($_COOKIE['user_token_time']);

    self::$dataArray['error'] = false;
    self::$dataArray['reply'] = "You are now logged off ".self::getUsername()." ! :)";

    return self::$dataArray;
  }

  public static function signUp($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }
    if((isset($POST_email) AND !empty($POST_email)) AND (isset($POST_username) AND !empty($POST_username)) AND (isset($POST_password) AND !empty($POST_password))){
      $Db = new DataBase();
      $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."' OR username LIKE '".$POST_username."'");
      $isUserExist = $Db->num_rows($UserInfos);
      if($isUserExist <= 0) {
    		$ip = $_SERVER['REMOTE_ADDR'];

        $POST_password = password_hash($POST_password, PASSWORD_BCRYPT, ["cost" => 10]);

        $Db->insert("users", "email, username, password, ip", "'".$POST_email."', '".$POST_username."', '".$POST_password."', '".$ip."'");

        self::$dataArray['error'] = false;
        self::$dataArray['reply'] = "User ".$POST_email.":".$POST_username." registred with ip ".$ip." !";
      }else {
        self::$dataArray['error'] = true;
        self::$dataArray['reply'] = "User ".$POST_email.":".$POST_username." already registred !<br/>Click on \"LOG IN\" button !";
      }
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "Some fields are empty !";
    }

    return self::$dataArray;
  }

  public static function logIn($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    if((isset($POST_email) AND !empty($POST_email)) AND (isset($POST_password) AND !empty($POST_password))){
      $Db = new DataBase();

      $UserInfos = $Db->select("*", "users", "WHERE email LIKE '".$POST_email."'");

      $isUserExist = $Db->num_rows($UserInfos);
      if($isUserExist == 1) {
        $getUserInfos = $Db->fetch_array($UserInfos);
        if(password_verify($POST_password, $getUserInfos['password'])){
          self::$dataArray = self::startUserSession($getUserInfos['email'], false);
        }else{
          self::$dataArray['error'] = true;
          self::$dataArray['reply'] = "Invalid password !";
        }
      }else {
        self::$dataArray['error'] = true;
        self::$dataArray['reply'] = "Invalid user !";
      }
    }else {
      self::$dataArray['error'] = true;
      self::$dataArray['reply'] = "Some fields are empty !";
    }

    return self::$dataArray;
  }
}
?>
