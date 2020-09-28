<!DOCTYPE html>
<html>
<head>

	<title>all2</title>
	<meta name="theme-color" content="#525252" />
	<link rel="stylesheet" href="https://adiccionfutbolera.com/app/pirlo-fltv/diraf/css/materialize-1-0.css" async>
	<link href="https://adiccionfutbolera.com/basura/js/icons.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112735297-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-112735297-3');</script>
	<link rel="icon" href="logo1.ico" type="image/ico" sizes="16x16">
	<style>
	@font-face {
	    font-family: 'OpenSans-Light';
	    src: url('../../fonts/OpenSansCondensed-Light.ttf');
	}

	@font-face {
	    font-family: 'OpenSans-LightItalic';
	    src: url('../../fonts/OpenSansCondensed-LightItalic.ttf');
	}

	@font-face {
	    font-family: 'OpenSans-Bold';
	    src: url('../../fonts/OpenSansCondensed-Bold.ttf');
	}

	abbr{display:none;}
	</style>
	<link rel="stylesheet" href="https://adiccionfutbolera.com/app/pirlo-fltv/diraf/css/font-awesome.min.css">
</head>
<body>
	<div class="container" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"  unselectable="on" onselectstart="return false;"  onmousedown="return false;">
	  <h2 align="center">PIRLOTV</h2>
	  <h3 align="center">Nuestras redes: <a href="https://www.facebook.com/innovadesignalp/" target="_blank"><i class="fa fa-facebook-square "></i></a> <a href="https://www.instagram.com/_u/innovadesignalp" target="_blank"><i class="fa fa-instagram"></i></a></h3>
	  <div id="buton"></div>
	  <!--<i class="material-icons dp48">invert_colors</i>-->
	<?php 
	$user_ip = getenv('REMOTE_ADDR');
	$geo = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$user_ip));
	$zonehoraria = $geo["geoplugin_timezone"];

		 ?>
	   <!-- <button class="waves-effect waves-light btnoutlinelight outline" style="background-color: #ffffff00;"><b>DEMO</b></button> -->
	   <div id="demo"></div>
	<!-- <a href="destino.php?variable1=valor1&variable2=valor2">Mi enlace</a> -->
	<hr>
	</div>

	<script>var Calendario = document.getElementById("demo").innerHTML = "<?php include 'esp2.php';echo'<p></p>';/*include 'premier2.php';*/ ?>";
	// window.location.href='?var='+Calendario;
	</script>
	<script src="dark-mode.js"></script><script src="get.js"></script>
	<!-- <script src="https://adiccionfutbolera.com/app/pirlo-fltv/php/scripts/checkbox.js"></script> -->

	<script src="materialize.js"></script>
</body>
</html>