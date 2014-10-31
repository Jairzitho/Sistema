<?php
$fecha = $_REQUEST['fecha'];
$idc = $_REQUEST['idc'];
$idp = $_REQUEST['idp'];
$idv= $_REQUEST['idv'];
$ids= $_REQUEST['ids'];
$costo= $_REQUEST['costo'];
$cantidad = $_REQUEST['cantidad'];
$band = 0;
/*include ('automatas.php');
if (numero($costo)==1)
{
echo "EL costo no es valido";
$band= 1;
}*/

$conexion = mysql_connect('localhost','root','') or die ("no se puede conectar al hosting");
$base = mysql_select_db('proyecto',$conexion) or die ("no se puede conectar a la base");
/*En este codigo se valida que las existencias actuales del producto no sean superadas por la cantidad de 
producto que se desea vender*/
if ($band == 0)
{
$sql4= "select *  from productos where idp = $idp";
$valor4 = mysql_query($sql4,$conexion) or die ("error en consulta de producto");
$existactuales = mysql_result($valor4,0,'exist');
if ($existactuales>=$cantidad) 
 {
 $ne = $existactuales - $cantidad;
 $sql5 = "update productos set exist = $ne where idp = $idp";
 $valor5 = mysql_query($sql5,$conexion) or die ("error en actualizar existencia");
 }
 else
 {
 echo "<br><b>La cantidad solicitada supera las existencias</b><br>";
 $band = 1;
 }
 }

if ($band == 0)
{
$sql = "insert into  ventadetalle (idv,idp,costo,cant) values ($idv,$idp,$costo,$cantidad)";
$valor = mysql_query($sql,$conexion) or die ("no se puede ejecutar consulta");
}

$sql = "select * from ventadetalle where idv = $idv";
$valor = mysql_query($sql,$conexion) or die ("no se puede ejecutar consulta");
echo  "Productos en Venta: " . mysql_num_rows($valor); 
echo "<center><table border = 1> <td>idp</td><td>nombre</td><td>costo</td><td>cantidad</td><td>total</td></tr>";
$filas =  mysql_num_rows($valor); 
$totalv=0;
for ($y=0;$y<=$filas-1;$y++)
{
echo "<tr><td>".mysql_result($valor,$y,'idp')."</td>";
$sql2= "select *  from productos where idp =". mysql_result($valor,$y,'idp');
$valor2 = mysql_query($sql2,$conexion);
$nom = mysql_result($valor2,0,'nombre');
echo "<td>$nom</td>";
echo "<td>".mysql_result($valor,$y,'costo')."</td>";
echo "<td>".mysql_result($valor,$y,'cant')."</td>";
echo "<td>".mysql_result($valor,$y,'costo') * mysql_result($valor,$y,'cant')."</td></tr>";
$totalv = $totalv + (mysql_result($valor,$y,'costo') * mysql_result($valor,$y,'cant'));
}
echo "</table></center>";
echo "Total de venta = " . $totalv;
?>

