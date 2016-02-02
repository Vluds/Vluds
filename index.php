<!DOCTYPE html>
<html>
	<head>
		<title>Vluds - Make beautiful website with Your hands.</title>
		<meta charset="utf-8"/>
		<link class="default-stylesheet" name="default" rel="stylesheet" type="text/css" href="src/css/default.css"></link>

		<!--Lib Scripts-->
		<script type="text/javascript" src="src/js/lib/jquery-1.12.0.min.js"></script>

		<!--Class Scripts-->
		<script type="text/javascript" src="src/js/class/app.js"></script>
		<script type="text/javascript" src="src/js/class/interface.js"></script>
		<script type="text/javascript" src="src/js/class/engine.js"></script>
	</head>
	<body>
		<header>

		</header>

		<section id="ajax-loader">
			<div id="ajax-container">
				<script type="text/javascript">
					App.init();
					Interface.loadModel('home');
				</script>
			</div>
		</section>

		<footer>

		</footer>
	</body>
</html>
