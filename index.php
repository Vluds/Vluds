<?php
	if(isset($_GET['page']))
	{
		$pageName = htmlentities($_GET['page']);
	}
	else {
		$pageName = "home";
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Vluds - Make beautiful website with Your hands.</title>
		<meta charset="utf-8"/>

		<!--Lib Scripts-->
		<script type="text/javascript" src="src/js/lib/jquery-1.12.0.min.js"></script>
		<script type="text/javascript" src="src/js/lib/jquery-ui-1.11.4.min.js"></script>

		<!--Class Scripts-->
		<script type="text/javascript" src="src/js/class/app.js"></script>
		<script type="text/javascript" src="src/js/class/interface.js"></script>
		<script type="text/javascript" src="src/js/class/engine.js"></script>
		<script type="text/javascript" src="src/js/class/facebook.js"></script>

		<!--Animation Scripts-->
		<script class="default-animation" type="text/javascript" src="src/animations/default.js"></script>

		<!--Stylesheets-->
		<link class="default-stylesheet" name="default" rel="stylesheet" type="text/css" href="src/css/default.css"></link>
	</head>
	<body>
		<header>
			<nav>
				<ul>
					<li id="header-icon" onclick="Interface.loadModel('home');"></li>
				</ul>
				<ul id="right-ul">
					<li>
						<div class="button" onclick="Interface.loadModel('login');">
		          <h4>LOG IN</h4>
		        </div>
					</li>
				</ul>
			</nav>
		</header>

		<section id="nav-bar">
			<nav>
				<div id="close-nav-bar" class="nav-bar-button" onclick="Interface.closeNavBar()"><h4>×</h4></p></div>
				<div id="open-nav-bar" class="nav-bar-button" onclick="Interface.showNavBar()"><h4>+</h4></div>
				<ul>
					<div id="user-infos">
						<div class="user-avatar">
							<img alt="Yeah, that's you" src="src/img/avatar.png"/>
						</div>
						<div id="user-username">
							<p>Tim Dusser-Jolly</p>
						</div>
					</div>
				</ul>
				<ul>
					<li><h4>SESSION</h4></li>
					<li><h4>TEMPLATES</h4></li>
					<li onclick="Engine.logOutUser();"><h4>DISCONNECT</h4></li>
				</ul>
			</nav>
		</section>

		<section id="ajax-loader">
			<div id="ajax-container">
				<script type="text/javascript">
					App.init();
					Interface.loadModel('<?php echo $pageName;?>');
				</script>
			</div>
		</section>

		<footer>

		</footer>

		<div id=background-container>
			<div id="notification-popup-container">
				<div id="title-container"><h3>One Title</h3></div>
				<div id="text-container"><p>Some Text</p></div>
				<div id="button-container"><div class="button" onclick="Interface.closePopUp()"><h4>OK</h4></div>
				</div>
			</div>
		</div>
	</body>
</html>
