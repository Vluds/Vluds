<?php
  session_start();

  require('db.php');
  require('user.php');
  require('engine.php');


  /*if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
    define("DIRECTORY_SEPARATOR", '\\');
  } else {
    define("DIRECTORY_SEPARATOR", '/');
  }*/

  define("ROOT", str_replace('app'.DIRECTORY_SEPARATOR.'core'.DIRECTORY_SEPARATOR.'php'.DIRECTORY_SEPARATOR.'class', '', dirname(__FILE__)));
  define("WEBROOT", str_replace('app'.DIRECTORY_SEPARATOR.'core'.DIRECTORY_SEPARATOR.'php'.DIRECTORY_SEPARATOR.'class'.DIRECTORY_SEPARATOR.'app.php', '', $_SERVER['SCRIPT_NAME']));
  define("VIEW", ROOT.'app'.DIRECTORY_SEPARATOR.'view'.DIRECTORY_SEPARATOR);
  define("IMG", WEBROOT.'public'.DIRECTORY_SEPARATOR.'img'.DIRECTORY_SEPARATOR);

  $Db = new DataBase();

  $dataArray = array();

  if((isset($_POST['className']) && !empty($_POST['className'])) && (isset($_POST['functionName']) && !empty($_POST['functionName']))){
    $className = $Db->real_escape_string($_POST['className']);
    $functionName = $Db->real_escape_string($_POST['functionName']);

    $arrayPost = array();
    foreach($_POST as $cle=>$value) {
      if(($cle !== "className") AND ($cle !== "functionName")) {
        if(isset($_POST[$cle]) && !empty($_POST[$cle])) {
          $arrayPost[$cle] = $Db->real_escape_string($_POST[$cle]);
        }else {
          $arrayPost[$cle] = null;
        }
      }
    }

    $dataArray = $className::$functionName($arrayPost);

  }else {
    $dataArray['error'] = "app.php: ! className: not set, functionName: not set !";
  }
  $dataArray['f'] = WEBROOT;
	echo json_encode($dataArray);
	session_write_close();
?>
