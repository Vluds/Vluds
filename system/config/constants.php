<?php
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']), true);
define('WEBROOT', str_replace('index.php', '', $_SERVER['SCRIPT_NAME']), true);

$siteProtocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),"https") === FALSE ? "http" : "https";
$siteHost = $_SERVER['HTTP_HOST'];
$siteUrl = $siteProtocol."://".$siteHost.WEBROOT;

define('URL', $siteUrl, true);

define('APP', 'app'.DIRECTORY_SEPARATOR, true);
define('SYSTEM', 'system'.DIRECTORY_SEPARATOR, true);
define('CORE', SYSTEM.'core'.DIRECTORY_SEPARATOR, true);
define('LANG', APP.'lang'.DIRECTORY_SEPARATOR, true);
define('TEMPLATES', APP.'templates'.DIRECTORY_SEPARATOR, true);
define('VIEWS', APP.'views'.DIRECTORY_SEPARATOR, true);

define('PUBLICS', 'public/', true);
define('CSS', PUBLICS.'css/', true);
define('FONTS', PUBLICS.'fonts/', true);
define('IMG', PUBLICS.'img/', true);
define('JS', PUBLICS.'js/', true);
?>
