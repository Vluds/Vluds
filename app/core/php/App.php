<?php
class App{
  const LANG = "/var/www/html/vluds/app/lang/";
  const TEMPLATES = "/var/www/html/vluds/app/templates/";
  const VIEWS = "/var/www/html/vluds/app/views/";

  public $pageName;
  public $viewContent = "";
  public $db;

  public static $dataArray = array();

  function __construct(){
    if(isset($_GET['page'])){
      $this->pageName = $_GET['page'];
    }else {
      $this->pageName = "";
    }
  }

  function getLocalLang(){
    return "default";
  }

  public static function getLang($langName){
    require(self::LANG.self::getLocalLang().'.php');
    if(isset($lang[$langName])){
      echo $lang[$langName];
    }
  }

  function loadView($viewName){
    $viewFilename = self::VIEWS.$viewName.'.php';

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

      $templateFilename = self::TEMPLATES.$POST_templateName.DIRECTORY_SEPARATOR.'index.php';

  		if(file_exists($templateFilename)){
  			self::$dataArray['reply'] = "";
  			self::$dataArray['error'] = false;
  		  ob_start();
  			include($templateFilename);
  			self::$dataArray['reply'] .= ob_get_contents();
  			ob_end_clean();
  		}else {
  			self::$dataArray['reply'] = "This model does not exist ! path: ".$templateFilename;
  			self::$dataArray['error'] = true;
  		}
  		return self::$dataArray;
  }
}
?>
