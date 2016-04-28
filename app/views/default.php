<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php $this->getLang("app-meta-charset");?>"/>
    <meta name="language" content="<?php $this->getLang("app-meta-language");?>">
    <meta name="google" content="<?php $this->getLang("app-meta-google-translate");?>">

    <title><?php $this->getLang("app-title");?></title>
    <meta name="author" content="<?php $this->getLang("app-author");?>">
    <meta name="description" content="<?php $this->getLang("app-description");?>" />
    <meta name="keywords" content="<?php $this->getLang("app-keywords");?>" />

    <base href="<?php echo WEBROOT;?>" >

    <meta name="apple-mobile-web-app-title" content="<?php $this->getLang("app-apple-web-title");?>">

    <!-- Open Graph data -->
    <meta property="og:locale" content="<?php $this->getLang("app-og-locale");?>" />
    <meta property="og:type" content="<?php $this->getLang("app-og-type");?>" />
    <meta property="og:title" content="<?php $this->getLang("app-og-title");?>" />
    <meta property="og:description" content="<?php $this->getLang("app-og-description");?>" />
    <meta property="og:url" content="<?php echo URL;?>" />
    <meta property="og:site_name" content="<?php $this->getLang("app-og-sitename");?>" />
    <meta property="og:image" content="<?php echo URL.IMG;?>default/preview.png" />

    <!-- Facebook spec -->
    <meta property="article:publisher" content="<?php $this->getLang("app-fb-publisher");?>" />

    <!-- Twitter data -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="<?php $this->getLang("app-tw-site");?>" />
    <meta property="twitter:domain" content="<?php $this->getLang("app-tw-domain");?>" />
    <meta property="twitter:creator" content="<?php $this->getLang("app-tw-creator");?>" />
    <meta property="twitter:image" content="<?php echo URL.IMG;?>default/preview.png" />
    <meta property="twitter:title" content="<?php $this->getLang("app-tw-title");?>" />
    <meta property="twitter:description" content="<?php $this->getLang("app-tw-description");?>" />
    <meta property="twitter:url" content="<?php $this->getLang("app-tw-url");?>" />

    <!--Lib Scripts-->
		<script type="text/javascript" src="<?php echo JS;?>jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="<?php echo JS;?>jquery-ui-1.11.4.min.js"></script>

    <script type="text/javascript" src="<?php echo COREJS;?>App.js"></script>

    <!--Animation Scripts
		<script class="default-animation" type="text/javascript" src="public/js/default.js"></script>
    -->

		<!--Stylesheets-->
		<link class="default-stylesheet" name="default" rel="stylesheet" type="text/css" href="<?php echo CSS;?>default.css"></link>
  </head>

  <body>
    <section id="ajax-container">
      <script>
        App.init();
        App.loadTemplate("<?php echo $this->pageName;?>");
      </script>
    </section>
  </body>
</html>
