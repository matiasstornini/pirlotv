
<!DOCTYPE html><html><head>
    <title>PIRLO PHP DEMO</title>
    <meta name="theme-color" content="#525252" />
    <link rel="stylesheet" href="materialize-NC.css?A=1" async>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112735297-3"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-112735297-3');</script>
    <link rel="icon" href="logo1.ico" type="image/ico" sizes="16x16">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
    <style type="text/css">body {font-family: 'Open Sans Condensed', sans-serif;}</style>
    <script src="https://use.fontawesome.com/df9cf73f6b.js"></script>
</head>
<div class="container"style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;"><h2 align="center">PIRLOTV</h2> 
<?php 
require_once('../simple_html_dom.php');$getdata = htmlspecialchars($_GET["url"]);

    $html =  file_get_html($getdata);
    $l = [$lo = 0, $vi = 1];
    $h2 = array();
    foreach($html->find('h2') as $element) {
      array_push($h2, $element->plaintext);
    }

    $numeros = array();
    foreach($html->find('span.b_statline_number') as $element) {
      array_push($numeros, $element->plaintext);
    }
    $est = array();
    foreach($html->find('div[class="fll b_statline_center"]') as $element) {
      array_push($est, $element->plaintext);
    }

    echo '<h4 align="center"><b>'.$h2[0].' '.$h2[2].' '.$h2[1].'</b></h4>';for ($i=0; $i < 9; $i++) {echo '<div align="center">'.$numeros[$l[0]].' '.$est[$i].' '.$numeros[$l[1]].'<br></div>';$l[0]=$l[0]+2;$l[1]=$l[1]+2;}

?>
</div>

