<?php
class Engine{
  public static $dataArray = array();

  public static function loadModel($argArray){
    foreach ($argArray as $key => $value) {
      ${'POST_'.$key} = $value;
    }

    $modelFilename = VIEW.$POST_templateName."\\".$POST_templateName.'.php';

		if(file_exists($modelFilename)){
			self::$dataArray['reply'] = "";
			self::$dataArray['error'] = false;
		  ob_start();
			include($modelFilename);
			self::$dataArray['reply'] .= ob_get_contents();
			ob_end_clean();
		}else {
			self::$dataArray['reply'] = "This model does not exist ! path: ".$modelFilename;
			self::$dataArray['error'] = true;
		}
		return self::$dataArray;
  }
}
?>
