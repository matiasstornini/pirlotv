<!DOCTYPE html>
<html>
<head>
	<title>all2</title>
	<meta name="theme-color" content="#525252" />
	<link rel="stylesheet" href="materialize-1-0.css" async>
	<link href="https://adiccionfutbolera.com/basura/js/icons.css" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112735297-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-112735297-3');</script>
	<link rel="icon" href="logo1.ico" type="image/ico" sizes="16x16">
	<link rel="stylesheet" href="https://adiccionfutbolera.com/app/pirlo-fltv/diraf/css/font-awesome.min.css">
</head>
<body>
	<div class="container" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">  <div class="card-panel teal lighten-2">Estamos constantemente actualizando. Si no te funciona, reinicia la APP.</div> <h2 align="center">PIRLOTV</h2> <div id="redes"></div> <span onclick="fuctiondarkmode(); location.reload();" class="waves-effect waves-light btnoutline" style="background-color: #ffffff00;"><b>Modo oscuro</b></span> <?php $user_ip = getenv('REMOTE_ADDR'); $geo = unserialize(file_get_contents('http://www.geoplugin.net/php.gp?ip='.$user_ip)); $zonehoraria = $geo["geoplugin_timezone"]; ?> <div id="demo"></div>
	<hr>
	</div>
	<script>var all = document.getElementById("demo").innerHTML = "<?php include 'esp2.php';echo'<p></p>';include 'premier2.php'; ?>";document.getElementById("redes").innerHTML = "<h3 align='center'>Nuestras redes: <a href='https://www.facebook.com/innovadesignalp/' target='_blank'><i class='fa fa-facebook-square '></i></a> <a href='https://www.instagram.com/_u/innovadesignalp' target='_blank'><i class='fa fa-instagram'></i></a></h3>";</script>
	<script src="dark-mode.js"></script><script src="materialize.js"></script><script src="calendario.js"></script>
	<script type="text/javascript">
		var is_dark=document.querySelector("body").classList.contains("dark-mode");var elements=document.getElementsByClassName("waves-effect");for(var i=0;i<elements.length;i++){if(!is_dark){elements[i].classList.remove("waves-light");elements[i].classList.remove("btnoutlinelight");elements[i].classList.add("waves-dark");elements[i].classList.add("btnoutlinedark")}else{elements[i].classList.remove("waves-dark");elements[i].classList.add("waves-light");elements[i].classList.remove("btnoutlinedark");elements[i].classList.add("btnoutlinelight")}}
	</script>
</body>
</html>