<?php
class App{
  public $pageName;
  public $viewContent = "";
  public $db;

  public static $dataArray = array();

  function __construct(){
    if(isset($_GET['page'])){
      $this->pageName = $_GET['page'];
    }else {
      $this->pageName = "null";
    }
  }

  private static function getLocalLang(){
    return "default";
  }

  function loadView($viewName){
    require(LANG.self::getLocalLang().'.php');

    $viewFilename = VIEWS.$viewName.'.php';

    if(file_exists($viewFilename)){
      self::$dataArray = "";
      ob_start();
      include($viewFilename);
      self::$dataArray .= ob_get_contents();
      ob_end_clean();
    }else {
      self::$dataArray = "This model does not exist ! path: ".$viewFilename;
    }

    echo self::$dataArray;
  }

  function loadTemplate($argArray){
      foreach ($argArray as $key => $value) {
        ${'POST_'.$key} = $value;
      }

      require("..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR.LANG.self::getLocalLang().'.php');

      $templateFilename = "..".DIRECTORY_SEPARATOR."..".DIRECTORY_SEPARATOR.TEMPLATES.$POST_templateName.DIRECTORY_SEPARATOR.'index.php';

  		if(file_exists($templateFilename)){
  			self::$dataArray['reply'] = "";
  			self::$dataArray['error'] = false;
  		  ob_start();
  			include($templateFilename);
  			self::$dataArray['reply'] .= ob_get_contents();
  			ob_end_clean();
  		}else {
  			self::$dataArray['reply'] = "This template does not exist ! path: ".$templateFilename;
  			self::$dataArray['error'] = true;
  		}
  		return self::$dataArray;
  }
}
?>
