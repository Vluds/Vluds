<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php echo $lang["app-meta-charset"];?>"/>
    <meta name="language" content="<?php echo $lang["app-meta-language"];?>">
    <meta name="google" content="<?php echo $lang["app-meta-google-translate"];?>">

    <title><?php echo $lang["app-title"];?></title>
    <meta name="author" content="<?php echo $lang["app-meta-author"];?>">
    <meta name="description" content="<?php echo $lang["app-meta-description"];?>" />
    <meta name="keywords" content="<?php echo $lang["app-meta-keywords"];?>" />

    <base href="<?php echo WEBROOT;?>" >

    <meta name="apple-mobile-web-app-title" content="<?php echo $lang["app-apple-web-title"];?>">

    <!-- Open Graph data -->
    <meta property="og:locale" content="<?php echo $lang["app-og-locale"];?>" />
    <meta property="og:type" content="<?php echo $lang["app-og-type"];?>" />
    <meta property="og:title" content="<?php echo $lang["app-og-title"];?>" />
    <meta property="og:description" content="<?php echo $lang["app-og-description"];?>" />
    <meta property="og:url" content="<?php echo URL;?>" />
    <meta property="og:site_name" content="<?php echo $lang["app-og-sitename"];?>" />
    <meta property="og:image" content="<?php echo URL.IMG;?>default/preview.png" />

    <!-- Facebook spec -->
    <meta property="article:publisher" content="<?php echo $lang["app-fb-publisher"];?>" />

    <!-- Twitter data -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="<?php echo $lang["app-tw-site"];?>" />
    <meta property="twitter:domain" content="<?php echo $lang["app-tw-domain"];?>" />
    <meta property="twitter:creator" content="<?php echo $lang["app-tw-creator"];?>" />
    <meta property="twitter:image" content="<?php echo URL.IMG;?>default/preview.png" />
    <meta property="twitter:title" content="<?php echo $lang["app-tw-title"];?>" />
    <meta property="twitter:description" content="<?php echo $lang["app-tw-description"];?>" />
    <meta property="twitter:url" content="<?php echo $lang["app-tw-url"];?>" />

    <!--Lib Scripts-->
		<script type="text/javascript" src="<?php echo JS;?>jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="<?php echo JS;?>jquery-ui-1.11.4.min.js"></script>

    <script type="text/javascript" src="<?php echo CORE;?>Ajax.js"></script>

    <!--Animation Scripts-->
		<script class="default-animation" type="text/javascript" src="public/js/default.js"></script>

		<!--Stylesheets-->
		<link class="default-stylesheet" name="default" rel="stylesheet" type="text/css" href="<?php echo CSS;?>default.css"></link>
  </head>

  <body>
    <section id="ajax-container">

    </section>
  </body>
</html>
