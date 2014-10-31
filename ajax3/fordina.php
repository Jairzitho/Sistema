<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script><!--linea para ajax-->
<script type="text/javascript" src="js/jquery-ui-1.8.2.custom.min.js"></script><!--linea para colocar calendario-->
<link href="css2/ui-darkness/jquery-ui-1.8.2.custom.css" rel="stylesheet" type="text/css" /><!--linea para colocar fondo negro del calendario-->
<!--paso 2 : coloca rlas funciones de java script para combos dinamicos-->
<script type="text/javascript">
$(function () {
	
	$('#idc').click(function()
	{
		$('#idp').load('combod.php?idc=' + this.options[this.selectedIndex].value )
 
	})
	
	$('#idp').click(function()
	{
		$('#resultado').load('resultado.php?idp=' + this.options[this.selectedIndex].value)
		
	})
})
</script>
</head>
<body>
<form action = 'fordina.php' method = 'POST' name='frmdo' id='frmdo' target='_self'>
Departameto <select name = 'idc' id="idc">
<?php
$conexion = mysql_connect("localhost",'root','') or die ("no se puede conectar al host");
$base = mysql_select_db("exam",$conexion) or die ("no se puede conectar a la base");
$sql= "select * from categoria";
$valor = mysql_query($sql,$conexion) or die ("error en cosulta");
$filas = mysql_num_rows($valor);
for ($y=0;$y<$filas;$y++)
{
$idc = mysql_result($valor,$y,'idc');
$cat = mysql_result($valor,$y,'cat');
echo "<option value='$idc'>$cat</option>";
}
?>
</select>
<br>Producto
 <select name = 'idp' id = "idp"></select>

<div id="resultado"></div>
<br>fecha de pago <input name='fecha' type='text' class='ancho date' maxlength='30'>
<br>
<input type = 'submit' value = 'guardar'>
</form>

 <div id="ajax">&nbsp;</div>

<script type="text/javascript">
$(function (e) {
	$('#frmdo').submit(function (e) {
		e.preventDefault()
		$('#ajax').load('guardar.php?' + $('#frmdo').serialize())
	})
})
</script>
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

</body>
</html>
