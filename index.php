<?php
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']), true);
define('WEBROOT', str_replace('index.php', '', $_SERVER['SCRIPT_NAME']), true);

$siteProtocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),"https") === FALSE ? "http" : "https";
$siteHost = $_SERVER['HTTP_HOST'];
$siteUrl = $siteProtocol."://".$siteHost.WEBROOT;

define('URL', $siteUrl, true);

define('APP', 'app/');
define('CORE', APP.'core/');
define('COREPHP', CORE.'php/');
define('COREJS', CORE.'js/');
define('LANG', APP.'lang/');
define('TEMPLATES', APP.'templates/');
define('VIEWS', APP.'views/');

define('PUBLICS', 'public/');
define('CSS', PUBLICS.'css/');
define('FONTS', PUBLICS.'fonts/');
define('IMG', PUBLICS.'img/');
define('JS', PUBLICS.'js/');

require(COREPHP.'App.php');

$app = new App();
$app->loadView("default");
?>
