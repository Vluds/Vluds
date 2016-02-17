<?php
class Engine{
  public static $dataArray = array();

  public static function loadModel($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    $modelFilename = '../../models/'.$POST_modelName.'.php';

		if(file_exists($modelFilename)){
			self::$dataArray['reply'] = "";
			self::$dataArray['error'] = false;
		  ob_start();
			include($modelFilename);
			self::$dataArray['reply'] .= ob_get_contents();
			ob_end_clean();
		}else {
			self::$dataArray['reply'] = "This model does not exist !";
			self::$dataArray['error'] = true;
		}
		return self::$dataArray;
  }
}
?>
