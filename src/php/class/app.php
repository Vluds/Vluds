<?php
  session_start();

  require('user.php');
  require_once '/facebook-sdk-v5/autoload.php';

  $dataArray = array();

  if(isset($_POST('action')) && !empty($_POST('action'))){
    $action = $_POST('action');

    if($action = 'init'){

    }

    return $dataArray;
  }
?>
