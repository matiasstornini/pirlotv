<?php 
switch ($i)
{ /* CASE 0 PARA PARTIDOS IMPORTANTES */
    case 7:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'" . $esp1m3u81 . "'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 1</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'" . $esp1m3u83 . "'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 2</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'go:m3u81'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 3</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'go:m3u83'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'" . $esp1m3u83 . "'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 5</b></a><p></p>';
        }
    break; /* CASE 0 PARA PARTIDOS NO IMPORTANTES */
    case 2:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'" . $esp2m3u81 . "'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 1</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'go:" . $go3 . " '" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 3</b></a> <a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'" . $esp2m3u81 . "'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 3</b></a>';
        }
    break; /* CASE PARA SEGUNDO PARTIDO NO IMPORTANTE */
    case 0:
    case 4:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/12/12.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;
    case 8:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/14/14.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;
    case 9:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/15/15.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;
    case 1:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/10/10.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;

    case 3:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/18/18.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;

    case 5:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/17/17.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;
    case 6:
        if (($final[$i] != "Final"))
        {
            echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'https://cdo0.dailysport.pw/16/16.m3u8?nijnm'" . ' style=' . "'background-color: #ffffff00;'" . '><b>ABRIR 4</b></a> ';
        }
    break;
    break;
    default:
    break;
}if ($final[$total] == "Final") {echo '<a class=' . "'waves-effect waves-light btnoutlinelight outline ahref'" . ' href=' . "'app-demo/statistics?url=" . $href[$a] . " '" . ' style=' . "'background-color: #ffffff00;'" . '><b>Estadisticas</b></a> ';}
?>
