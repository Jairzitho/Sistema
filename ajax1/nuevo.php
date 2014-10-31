
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!--paso 1 : colocar las librerias en el HEAD-->
<script type="text/javascript" src="js2/jquery-1.4.2.min.js"></script><!--linea para ajax-->
<script type="text/javascript" src="js2/jquery-ui-1.8.2.custom.min.js"></script><!--linea ajax-->
<link href="css2/ui-darkness/jquery-ui-1.8.2.custom.css" rel="stylesheet" type="text/css" /><!--linea para colocar fondo negro del calendario-->
</head>
<body>
<div id="todo">
	<div id="header_virtual">&nbsp;</div>   
<!--PAso 2: El action debe de ser a si mismo, poner nombre, id , target-->
<form action="nuevo.php" method="POST" name="frmdo" id="frmdo" target="_self"><!--ajax-->

	  <center>
	    <table width="422">
	      <tr>
	        <td width="147" align="right">alta producto</td>
          </tr>
	      <tr>
	        <td align="right">Fecha de solicitud:</td>
<!--PASO 6: PONER LA CLASE ANCHO DATE EN LACAJA DE TEXTO DE FECHA-->
	        <td height="45"><input name="fecha" type="text" class="ancho date" maxlength="30" size="30" /></td>
          </tr>
           <tr>
	        <td align="right">Cantidad:</td>
	        <td height="45"><input name="cantidad" type="text" /></td>
          </tr>
<tr>
	        <td align="right">Costo:</td>
	        <td height="45"><input name="costo" type="text" /></td>
          </tr> 	     		  
 	      <tr>
	        <td>&nbsp;</td>
	        <td height="60"><input name="guardar" type="submit" value="Crear orden"/></td>
          </tr>
</table>
</td>
    </center> 
</form>  
 <!--paso 3: crear una division que se llame ajax, debe de ir antes o despues del formulario-->
<div id="ajax"></div>
<!--paso 4: Crear el codigo de ejecucion de ajax-->
<script type="text/javascript">
$(function (e) {
	$('#frmdo').submit(function (e) {
		e.preventDefault()
		$('#ajax').load('calcula.php?' + $('#frmdo').serialize())
	})
})
</script>
<!--PASO 5: cREAR LA CONFIGURACION DEL CALENDARIO SI ES QUE APLICA-->
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