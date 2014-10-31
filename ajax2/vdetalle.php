
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script><!--linea para ajax-->
<script type="text/javascript" src="js/jquery-ui-1.8.2.custom.min.js"></script><!--linea para colocar calendario-->
<link href="css/ui-darkness/jquery-ui-1.8.2.custom.css" rel="stylesheet" type="text/css" /><!--linea para colocar fondo negro del calendario-->
</head>
<body>
<div id="todo">
	<div id="header_virtual">&nbsp;</div>   
<?php
$idv = $_POST['idv2'];
$fecha = $_POST['fecha'];
$idc = $_POST['idc'];
$ids= $_POST['ids'];
echo "La venta es: ". $idv;
echo "<br> La fecha de venta es : ". $fecha;
$conexion = mysql_connect('localhost','root','') or die ("no se puede conectar al hosting");
$base = mysql_select_db('proyecto',$conexion) or die ("no se puede conectar a la base");
$sql9= "select * from clientes where idc=$idc";
$valor9= mysql_query($sql9) or die ("Erroe en consulta 9");
$nombre9 = mysql_result($valor9,0,'nombre');
echo "<br> El cliente es  : ". $nombre9;

$sql = "insert into ventas (idv,idc,fecha,ids) value ($idv,$idc,'$fecha',$ids)";
$valor = mysql_query($sql,$conexion) or die ("Error en consulta");
?>        
<form action="vdetalle.php" method="POST" name="frmdo" id="frmdo" target="_self"><!--ajax-->

	  <center>
	    <table width="422">
	      <tr>
	        <td width="147" align="right"><div align="right">Seleccione Producto:</div></td>
			  <td height="45"><td><select name='idp'>
			<?php
$sql = "select * from productos where activo = 'si' and exist > 0";
		$valor = mysql_query($sql,$conexion);
        $filas = mysql_num_rows($valor);
        for ($y=0;$y<$filas;$y++)
           {
		   $idp1 = mysql_result($valor,$y,'idp');
		   $nombre = mysql_result($valor,$y,'nombre');
		  echo"<option value ='$idp1'>$nombre</option>";
           } 		   
			?>
			  </select> </td>
          </tr>
	      <tr>
	        <td align="right">cantidad:</td>
	        <td height="45"><input name="cantidad" type="text" maxlength="30" size="30"/></td>
          </tr>
		      <tr>
	        <td align="right">costo:</td>
	        <td height="45"><input name="costo" type="text" maxlength="30" size="30"/></td>
          </tr>
		  <?php
		  echo "<input name='idv' type='hidden' value = '$idv'>";
		  echo "<input name='fecha' type='hidden' value = '$fecha'>";
		  echo "<input name='idc' type='hidden' value = '$idc'>";
		   echo "<input name='ids' type='hidden' value = '$ids'>";
		  ?>
	      <tr>
	        <td>&nbsp;</td>
	        <td height="60"><input name="guardar" type="submit" value="Crear orden"/></td>
          </tr>
</table>
</td>
    </center> 
</form>   

 <div id="ajax">&nbsp;</div>

<script type="text/javascript">
$(function (e) {
	$('#frmdo').submit(function (e) {
		e.preventDefault()
		$('#ajax').load('guardaregistro.php?' + $('#frmdo').serialize())
	})
})
</script>
         

</body>
</html>