<!DOCTYPE html>
<html>
<head>
  <title></title>
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/><link href="https://adiccionfutbolera.com/basura/js/icons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/materialize.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/superliga.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/bootstrap.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/font-awesome.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/vue-multiselect.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/slick.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/spinner.css">
    <meta name="viewport" content="width=device-width,initial-scale=1.00, minimum-scale=0.60, maximum-scale=0.65, user-scalable=no"/>
    <style>
    body {
      padding: 25px;
      background-color: white;
      color: black;
      /*font-size: 25px;*/
    }

    .dark-mode {
      background-color: #202124;
      color: white;
    }
    abbr{display:none;}
    </style>
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
$arrayRecorrer = 0;
 
$html =  file_get_html('https://www.promiedos.com.ar/alemania', false, stream_context_create($arrContextOptions));


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
        <?php for ($i2=0; $i2 <=17 ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
        <td <? if (($i2 <= 3) && ($i3 == 0 || $i3==1)){echo 'style="background: #018d49;color:white;"';}elseif (($i2 == 4 ||$i2 == 5) && ($i3 == 0 || $i3==1)){echo 'style="background: #f5f374;color:black;"';}elseif (($i2 == 15) && ($i3 == 0 || $i3==1)){echo 'style="background: #d68526;color:white;"';}elseif (($i2 == 16 ||$i2 == 17) && ($i3 == 0 || $i3==1)){echo 'style="background: red;color:white;"';} ?>>
              <?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
        </tr>
        <? }?>

        </tbody>
      </table>

<!-- </div> -->
      <script src="https://materializecss.com/bin/materialize.js"></script>
<script src="https://adiccionfutbolera.com/app/pirlo-fltv/php/scripts/dark-mode.js"></script>
</body>
</html>
