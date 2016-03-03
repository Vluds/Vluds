<?php
  session_start();

  require('db.php');
  require('user.php');
  require('engine.php');

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

	echo json_encode($dataArray);
	session_write_close();
?>
