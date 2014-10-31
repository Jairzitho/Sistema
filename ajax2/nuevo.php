
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
        
<form action="vdetalle.php" method="POST" name="frmdo" id="frmdo" target="_self"><!--ajax-->

	  <center>
	    <table width="422">
	      <tr>
	        <td width="147" align="right"><div align="right">CREAR VENTA</div></td>
				<?php
$conexion = mysql_connect('localhost','root','') or die ("no se puede conectar al hosting");
$base = mysql_select_db('proyecto',$conexion) or die ("no se puede conectar a la base");
$sql = "select * from ventas order by idv desc";
$valor = mysql_query($sql,$conexion)or die ("No se ejecuto consulta");
$filas = mysql_num_rows($valor);
if ($filas == 0) 
{
$idv = 1;
}
else
{
$idv = mysql_result($valor,0,'idv') + 1;
}
echo "<td width='263' height='45'><input name='idv' type='text' size='40' value = '$idv' disabled= 'disabled'></td>";
echo "<td width='263' height='45'><input name='idv2' type='hidden' value = '$idv' ></td>";
?>
          </tr>
	      <tr>
	        <td align="right">Fecha de solicitud:</td>
	        <td height="45"><input name="fecha" type="text" class="ancho date" maxlength="30" size="30" /></td>
          </tr>
	      <tr>
	        <td align="right">Cliente:</td>
			<td><select name = 'idc'>
			<?php
$sql = "select * from clientes where activo = 'si'";
		$valor = mysql_query($sql,$conexion);
        $filas = mysql_num_rows($valor);
        for ($y=0;$y<$filas;$y++)
           {
		   $idc = mysql_result($valor,$y,'idc');
		   $nombre = mysql_result($valor,$y,'nombre');
		  echo"<option value = '$idc' >$nombre</option>";
           } 		   
			?>
			  </select> </td>
          </tr>
		  <tr>
	        <td align="right">Sucursal:</td>
			  <td height="45"><select name = 'ids'>
			<?php
$sql = "select * from sucursal where activo = 'si'";
		$valor = mysql_query($sql,$conexion);
        $filas = mysql_num_rows($valor);
        for ($y=0;$y<$filas;$y++)
           {
		   $ids = mysql_result($valor,$y,'ids');
		   $nombre = mysql_result($valor,$y,'nombre');
		  echo"<option value = '$ids' >$nombre</option>";
           } 		   
			?>
			  </select> </td>
          </tr>
	      <tr>
	        <td>&nbsp;</td>
	        <td height="60"><input name="guardar" type="submit" value="Crear orden"/></td>
          </tr>
</table>
</td>
    </center> 
</form>   

          <script type="text/javascript">
//<![CDATA[
$(function() {
	$(".date").datepicker(
		{
			dateFormat:'yy-mm-dd'
			, monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
			, dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá']
		}
	);
});

//]]>
</script>   

</div>

</body>
</html>