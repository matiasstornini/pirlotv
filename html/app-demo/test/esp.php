
<?php 
$horanas = new DateTime();
$horanas->modify('+3 hours');
// $horanas->modify('+10 minute');
// $horanas->modify('-30 second');
// echo $horanas->format('d-m-Y H:i:s');

// include 'simple_html_dom.php';
require_once('../../simple_html_dom.php');include 'vars.php';
// include('fechacastellano.php');
$total=0;$loc=0;$vis=1;$minuto="-1";
$contadores = [$contadorequipo = -1,$contadorfecha=0];
// $fechaspartido = [$partido1=0,$partido2=0];
$fecha_actual=date("d/m/Y");
// echo "a is " . is_string($zona) . "<br>";
$hora_actual=date("H:i");
// echo $hora_actual;
// echo gettype($minuto);
// if (is_string($zona) == 1){
// date_default_timezone_set($zona);
// }else{

// date_default_timezone_set($zonehoraria);

// }
//echo $fecha_actual;
$htmlCont =  file_get_html('https://m.livesoccertv.com/es/competitions/spain/primera-division/');
    $contador = array();
    foreach($htmlCont->find('h2.table-caption') as $element) {
      $contadores[1]=$contadores[1]+1;
    }
    $day = array();
    foreach($htmlCont->find('div[class="b_match_time b_match_info-elem"]') as $element) {
      array_push($day, $element->getAttribute('data-timestamp') );

     }
    $date = array();
    foreach($htmlCont->find('div[class="b_match_time b_match_info-elem"]') as $element) {
      array_push($date, $element->getAttribute('data-timestamp') );
    }
    $date2 = array();
    foreach($htmlCont->find('div[class="b_match_flag b_match_info-elem"]') as $element) {
      array_push($date2, $element->plaintext);
    }
    $minutero = array();
    foreach($htmlCont->find('div[class="b_match_info-elem-wrapper"]') as $element) {
      array_push($minutero, $element->plaintext);
    }

    $final = array();
    foreach($htmlCont->find('div[class="b_match_status b_match_info-elem"]') as $element) {
      array_push($final, $element->plaintext);

    }
    $resultado = array();
    foreach($htmlCont->find('div[class="b_match_count"]') as $element) {
      array_push($resultado, $element->plaintext);

    }
    foreach($htmlCont->find('div.b_match_team') as $element) {
    if ( (date('d/m/Y', $date[$total]) == $fecha_actual) || $final[$total] ) {
        $contadores[0]=$contadores[0]+1;
        // $minuto = $final[$total];
        // echo$final[$total-1];
        // echo date('d/m/Y', $date[2]);
        $total=$total+1;
        // echo $contadores[0];
     }
    }

// echo $minutero[0];
// echo $fecha_actual .'-'.date('d/m/Y', $date[0]);
// echo date('d/m/Y', $date[1]) .'--'.$fecha_actual;
$total=0;$t=0;
// $contadores[0]=$contadores[0] /2;
//$fechaspartido[0]= date('H:i', $date[0]);$fechaspartido[1]= date('H:i', $date[1]);
// $contadores[0]=$contadores[0]-1;
// echo $contadores[0];

// var_dump($spans_name2);
// echo $contadores[0].'-'.$contadores[1];
$suma=0;
// $img2=$html->find("img ",0)->src;
// print_r($a);
 ?>
<h4 align="center"><u>LaLiga (España) - <?php echo date('d/m/Y', $date[0]); ?></u></h4>
<?php 
// if (is_string($spans_name2[10])) { b_match_status b_match_info-elem
  for ($i = 0; $i <= 2; $i++) {
     $html =  file_get_html('https://m.livesoccertv.com/es/competitions/spain/primera-division/');
     // echo $minutero[$total];
    // $span=$html->find("span.name",0)->innertext;
    $spans_name2 = array();
    foreach($html->find('div.b_match_team') as $element) {
      array_push($spans_name2, $element->plaintext);
    }


// echo strlen($minutero[$total]);
// echo $minutero[$total];
//     echo "is_string(";
//     var_export($minutero[$total]);
//     echo ") = ";
// echo var_dump(is_string($minutero[$total]));
/*if (($final[$i] != "Final")){ ?><a href="whatsapp://send?text=Sección: ''Bundesliga - PirloTV''. No funciona el reproductor: <?php echo $spans_name2[$loc] .' - '. $spans_name2[$vis]; ?>&phone=+5492214355168" class="btn-floating pulse"onclick="this.classList.toggle('disabled');"><i class="material-icons">report</i></a> <?php }*/ 

$minuto = $final[$total];
$minuto2 = $final[$total-1];
// echo $minuto2;

// echo strlen($minuto2);

if ((strlen($minuto2) >= 3)) {$suma=$suma+1; }if ($final[$total] == "Final") { $t=$t+1; }
// if($minuto == $minuto2){$suma=$suma+1;}
// echo $minuto.'<br>';
// echo $minuto2.'<br>';
// echo 'LA SUMA ES ============== '. $suma;
// if (strlen($final[$total]) > 0) {  echo $final[$total].' - ';}else{if ($suma >= 0){echo date('H:i', $date[$total-$suma+$t]).' - ';}}
?>
<script type="text/javascript"> var timestamp = <? echo$date[$total]; ?>; var date = new Date(timestamp * 1000); var hours = date.getHours();var minutes = date.getMinutes(); document.getElementById("hora").innerHTML = hours + ":" + minutes;</script>
<h5><?php if ( strlen($minuto) <= 5){ ?> <div id="hora"></div> <?} echo$spans_name2[$loc].' '.$resultado[$loc] .'vs'.' '.$resultado[$vis].' '. $spans_name2[$vis];  ?></h5>

<?

switch ($i) {
  case 1:
  // case 1:
  case 112:
  case 113:
    if (($final[$i] != "Final")/* && ($fecha_actual==date('d/m/Y', $date[$total])) && (date('H:i', $date[$i]) < $hora_actual) && ($hora_actual < $horanas->format('H:i'))*/ ) {
  //    if (strlen($final[$total]) > 0) {
      echo'
      <a  href="'.$esp1m3u81.'" class="waves-effect waves-light btn btn "><font color="#FFFFFF">Opcion 1 (HD)</font></a>
      <a  href="go:m3u81" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 2 (HD <b>ON</b>)</font></a>
      <a  href="'.$esp1m3u82.'" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 3 (HD)</font></a>
      <a  href="go:m3u82" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 4 (HD)</font></a>
      <a  href="https://cdo0.dailysport.pw/3/3.m3u8?1107?v222" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 5 (HD)</font></a>
      ';
  //  }
    }
  break;

  case 111:
case 113:
    if (($final[$i] != "Final")/* && ($fecha_actual==date('d/m/Y', $date[$total])) && (date('H:i', $date[$i]) < $hora_actual) && ($hora_actual < $horanas->format('H:i'))*/ ) {
      echo'
      <a  href="'.$esp1m3u81.'" class="waves-effect waves-light btn btn "><font color="#FFFFFF">Opcion 1 (HD)</font></a>
      <a  href="go:m3u81" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 2 (HD)</font></a>
      <a  href="'.$esp2m3u82.'" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 3 (HD)</font></a>
      <a  href="go:m3u84" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 4 (HD)</font></a>
      ';
    }
  break;

  case 0:
  case 2:
    if (($final[$i] != "Final")/* && ($fecha_actual==date('d/m/Y', $date[$total])) && (date('H:i', $date[$i]) < $hora_actual) && ($hora_actual < $horanas->format('H:i'))*/ ) {
  //    if (strlen($final[$total]) > 0) {
      echo'
      <a  href="'.$esp2m3u81.'" class="waves-effect waves-light btn btn "><font color="#FFFFFF">Opcion 1 (HD)</font></a>
      <a  href="go:m3u82" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 2 (HD <b>ON</b>)</font></a>
      <a  href="'.$esp2m3u82.'" class="waves-effect waves-light btn  "><font color="#FFFFFF">Opcion 3 (HD)</font></a>
      <a  href="go:m3u84" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 4 (HD)</font></a>
      ';
  //  }
    }
  break;
default:
break;
}

/*
switch ($i) {
  case 0:
    echo '<a onclick="openScreen(' . "'reproductores'" . ')" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 1 (HD)</font></a>';
  break;
  case 1:
    echo '<a onclick="openScreen(' . "'reproductores2'" . ')" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 1 (HD)</font></a>';
  break;
  case 2:
    echo '<a onclick="openScreen(' . "'reproductores3'" . ')" class="waves-effect waves-light btn"><font color="#FFFFFF">Opcion 1 (HD)</font></a>';
  break;

  default:
    # code...
    break;
}*/
  $loc=$loc+2;$vis=$vis+2;$total=$total+1;
$html->clear();
unset($html);
}

if ($contadores[0] == -1) {
  echo '<h6>NO HAY PARTIDOS CARGADOS</h6>';
}
?>
