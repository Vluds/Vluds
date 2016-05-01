<?php
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']), true);
define('WEBROOT', str_replace('index.php', '', $_SERVER['SCRIPT_NAME']), true);

$siteProtocol = strpos(strtolower($_SERVER['SERVER_PROTOCOL']),"https") === FALSE ? "http" : "https";
$siteHost = $_SERVER['HTTP_HOST'];
$siteUrl = $siteProtocol."://".$siteHost.WEBROOT;

define('URL', $siteUrl, true);

define('APP', 'app/', true);
define('SYSTEM', 'system/', true);
define('CORE', SYSTEM.'core/', true);
define('LANG', APP.'lang/', true);
define('TEMPLATES', APP.'templates/', true);
define('VIEWS', APP.'views/', true);

define('PUBLICS', 'public/', true);
define('CSS', PUBLICS.'css/', true);
define('FONTS', PUBLICS.'fonts/', true);
define('IMG', PUBLICS.'img/', true);
define('JS', PUBLICS.'js/', true);
?>
