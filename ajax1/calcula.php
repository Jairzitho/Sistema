<!--PASO 7: PARA AJAX, SOLAMENTE EL CODIGO QUE MANDAS A LLAMAR DEBE IR PHP-->
<?php
/*PASO 8: LAS VARIABLES SIEMPRE SE RECIBEN CON REQUEST*/
$fecha=$_REQUEST['fecha'];
$cantidad= $_REQUEST['cantidad'];
$costo=$_REQUEST['costo'];
echo "<center>En la fecha $fecha el total de tu compra es" . $cantidad * $costo ."</center>";
?>
