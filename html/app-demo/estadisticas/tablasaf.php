<!DOCTYPE html>
<html>
<head>
  <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/materialize.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/superliga.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/bootstrap.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/font-awesome.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/vue-multiselect.min.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/slick.css">
    <link rel="stylesheet" href="https://adiccionfutbolera.com/home/css/extra/spinner.css">
    <meta name="viewport" content="width=device-width,initial-scale=1.00, minimum-scale=0.60, maximum-scale=0.65, user-scalable=no"/>
</head>
<body>
<div class="container">
<?php 

require_once('../simple_html_dom.php');
$t=0;$g=1;
$arrayRecorrer = 0;
 
$html =  file_get_html('https://www.promiedos.com.ar/copasuperliga');

    // echo $html;
$td_date = array();
foreach($html->find('td') as $element) {
  array_push($td_date, $element->plaintext );
}



// echo $html;
 ?>
<!--  -->

<div class="progress"><div class="determinate" style="width: 120%;"></div></div>
<h2 align="center">Zona 1</h2>
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
        <?php for ($i2=0; $i2 <=11 ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
        <td <? if (($i2 <= 1) && ($i3 == 0 || $i3==1)){echo 'style="background: #018d49;color:white;"';} ?>>
              <?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
        </tr>
        <? }?>

        </tbody>
      </table>
<h3 align="center">-Los 2 primeros clasifican a las semifinales de la Copa.</h3>
<div class="progress"><div class="determinate" style="width: 120%;"></div></div>
<h2 align="center">Zona 2</h2>
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
        <?php for ($i2=12; $i2 <=23 ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
        <td <? if (($i2 <= 13) && ($i3 == 0 || $i3==1)){echo 'style="background: #018d49;color:white;"';} ?>>
              <?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
        </tr>
        <? }?>

        </tbody>
      </table>
<?php $t = 351;
// echo $t;
 ?>
<div class="progress"><div class="determinate" style="width: 120%;"></div></div>
<h2 align="center">Clasificación a copas</h2>
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
        <?php for ($i2=0; $i2 <=23 ; $i2++) { ?>
          <tr>
            <?php for ($i3=0; $i3 <=9 ; $i3++) {?>
        <td <? if (($i2 <= 3) && ($i3 == 0 || $i3==1)){echo 'style="background: #018d49;color:white;"';}if (($i2 >= 4 && $i2 <= 9) && ($i3 == 0 || $i3==1)){echo 'style="background: yellow;color:black;"';} ?>>
              <?php echo $td_date[$t]; ?></td>
            <?php $t=$t+1; } ?>
        </tr>
        <? }?>

        </tbody>
      </table>
<!-- </div> -->
      <script src="https://materializecss.com/bin/materialize.js"></script>

</body>
</html>
