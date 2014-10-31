<?php
$idp=$_GET['idp'];
if ($idp != 0)
{
$conexion = mysql_connect("localhost",'root','') or die ("no se puede conectar al host");
$base = mysql_select_db("exam",$conexion) or die ("no se puede conectar a la base");
$sql= "SELECT * FROM producto WHERE idp = $idp";
$valor2=mysql_query($sql,$conexion) or die  ("error en consulta");
$producto = mysql_result($valor2,0,'producto');
$costo = mysql_result($valor2,0,'costo');
$existencia = mysql_result($valor2,0,'existencia');
$tipo = mysql_result($valor2,0,'tipo');
echo "<br>Costo: <input type='text' name='costo' value='$costo' readonly='readonly'>";
echo "<br>Existencia: <input type='text' name='existencia' value='$existencia' readonly='readonly'>";
echo "<br>Tipo: <input type='text' name='tipo' value='$tipo' readonly='readonly'>";
}
else
{
echo "NO SE PUEDE GENERAR FORMULARIO";
}
?>