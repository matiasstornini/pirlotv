<!DOCTYPE html>
<html>
<head>
  <title></title>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link href="https://adiccionfutbolera.com/basura/js/icons.css" rel="stylesheet">
  <meta name="theme-color" content="#525252" />
  <link rel="stylesheet" href="../materialize-NC.css?v=1.1" async>
  <link href="https://adiccionfutbolera.com/basura/js/icons.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112735297-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-112735297-3');</script>
  <link rel="icon" href="logo1.ico" type="image/ico" sizes="16x16">
  <link rel="stylesheet" href="https://adiccionfutbolera.com/app/pirlo-fltv/diraf/css/font-awesome.min.css">
</head>
<body>
<div class="container" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"  unselectable="on" onselectstart="return false;"  onmousedown="return false;">
<?php 
$arrContextOptions=array(
    "ssl"=>array(
        "verify_peer"=>false,
        "verify_peer_name"=>false,
    ),
);  
require_once('../../simple_html_dom.php');
$t=0;$g=1;
$liga=htmlspecialchars($_GET["liga"]);
$arrayRecorrer = 0;
 
$html =  file_get_html('https://www.promiedos.com.ar/'.$liga, false, stream_context_create($arrContextOptions));
if ($liga == "espana" || $liga == "inglaterra"){ $for=19; }else{$for=17;}

    // echo $html;
$td_date = array();
foreach($html->find('td') as $element) {
  array_push($td_date, $element->plaintext );
}



// echo $html;
 ?>
<!--  -->
  <div class="switch">Modo oscuro
    <!-- <label>Off<input type="checkbox"><span class="lever" onclick="fuctiondarkmode()"></span>On</label> -->
    <i class="material-icons dp48" onclick="fuctiondarkmode()">invert_colors</i>
  </div>
<div class="progress"><div class="determinate" style="width: 120%;"></div></div>
<? if (!empty($liga)){ ?>
<h2 align="center">Tabla Puntos</h2>
      <table>
        <thead>
          <tr>
              <th>#</th>
              <th>Equipo</th>
              <th>Pts</th>
              <th>PJ</th>
              <th>PG</th>
              <th>PE</th>
              <th>PP</th>
              <th>GF</th>
              <th>GC</th>
              <th>DIF</th>

          </tr>
        </thead>

        <tbody>
        <?php for ($i2=0; $i2 <=$for ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
        <td <? if (($i2 <= 3) && ($i3 == 0 || $i3==1)){echo 'style="background: #018d49;color:white;"';}elseif (($i2 == 4 ||$i2 == 5||$i2 == 6) && ($i3 == 0 || $i3==1)){echo 'style="background: #f5f374;color:black;"';}/*elseif (($i2 == 15) && ($i3 == 0 || $i3==1)){echo 'style="background: #d68526;color:white;"';}*/elseif (($i2 == 17 ||$i2 == 18||$i2 == 19) && ($i3 == 0 || $i3==1)){echo 'style="background: red;color:white;"';} ?>>
              <?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
        </tr>
        <? }?>

        </tbody>
      </table>
<?}else{echo'<h1 align="center">Error al encontrar la liga, vuelva a intentarlo mas tarde</h1>';} ?>
<!-- </div> -->
      <script src="https://materializecss.com/bin/materialize.js"></script>
<script src="https://adiccionfutbolera.com/app/pirlo-fltv/php/scripts/dark-mode.js"></script>
</body>
</html>
