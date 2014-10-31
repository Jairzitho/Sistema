<?php
$idc = $_REQUEST['idc'];
$conexion = mysql_connect("localhost",'root','') or die ("no se puede conectar al host");
$base = mysql_select_db("exam",$conexion) or die ("no se puede conectar a la base");
$sql= "SELECT * FROM producto WHERE idc = $idc";
$valor = mysql_query($sql,$conexion);
$filas = mysql_num_rows($valor);
if ($filas>0) {
	for ($y=0;$y<$filas;$y++)
	{
	$idp = mysql_result($valor,$y,'idp');
	$producto= mysql_result($valor,$y,'producto');
	echo "<option value='$idp'>$producto</option>";
	}
} 
else {
	echo '<option value="0">Sin resultados</option>';
}
?>