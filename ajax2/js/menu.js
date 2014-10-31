function mmLoadMenus() {
	if (window.menu_sistema)
		return;
	window.menu_catalogo_clientes = new Menu("Trabajadores",190,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_clientes.addMenuItem("Agregar&nbsp;trabajadores","window.open('agregartrabajador.php', '_self');");
	menu_catalogo_clientes.addMenuItem("Editar&nbsp;trabajadores","window.open('modificartrabajador.php', '_self');");
	menu_catalogo_clientes.addMenuItem("Eliminar&nbsp;trabajadores","window.open('eliminartrabajador.php','_self');");
	menu_catalogo_clientes.addMenuItem("Ver&nbsp;listado&nbsp;de&nbsp;trabajadores","window.open('vertrabajador.php','_self');");
	menu_catalogo_clientes.hideOnMouseOut=true;
	menu_catalogo_clientes.menuBorder=0;
	menu_catalogo_clientes.bgColor = "#ffffff";
	window.menu_catalogo_proveedores = new Menu("Proveedores",185,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_proveedores.addMenuItem("Agregar&nbsp;proveedores","window.open('agregarproveedor.php', '_self');");
	menu_catalogo_proveedores.addMenuItem("Editar&nbsp;proveedores","window.open('modificarproveedores.php', '_self');");
	menu_catalogo_proveedores.addMenuItem("Eliminar&nbsp;proveedores","window.open('eliminarprove.php','_self');");
	menu_catalogo_proveedores.addMenuItem("Ver&nbsp;listado&nbsp;de&nbsp;proveedores","window.open('verproveedor.php','_self');");
	menu_catalogo_proveedores.hideOnMouseOut=true;
	menu_catalogo_proveedores.menuBorder=0;
	menu_catalogo_proveedores.bgColor = "#ffffff";
	window.menu_catalogo_material = new Menu("Material",210,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_material.addMenuItem("Agregar&nbsp;material","window.open('agregarmaterial.php','_self');");
	menu_catalogo_material.addMenuItem("Editar&nbsp;informacion&nbsp;de&nbsp;material","window.open('modificarmaterial.php','_self');");
	menu_catalogo_material.addMenuItem("Eliminar&nbsp;material","window.open('eliminarmaterial.php','_self');");
	menu_catalogo_material.addMenuItem("Ver&nbsp;informacion&nbsp;de&nbsp;material","window.open('vermaterial.php','_self');");
	menu_catalogo_material.hideOnMouseOut=true;
	menu_catalogo_material.menuBorder=0;
	menu_catalogo_material.bgColor = "#ffffff";
		window.menu_catalogo_area = new Menu("Area",130,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_area.addMenuItem("Agregar&nbsp;&aacute;rea","window.open('agregararea.php','_self');");
	menu_catalogo_area.addMenuItem("Editar&nbsp;&aacute;rea","window.open('modificararea.php','_self');");
	menu_catalogo_area.addMenuItem("Eliminar&nbsp;&aacute;rea","window.open('eliminararea.php','_self');");
	menu_catalogo_area.addMenuItem("Ver&nbsp;&aacute;reas","window.open('verarea.php','_self');");
	menu_catalogo_area.hideOnMouseOut=true;
	menu_catalogo_area.menuBorder=0;
	menu_catalogo_area.bgColor = "#ffffff";
		window.menu_catalogo_unidadmedida = new Menu("Unidades&nbsp;de&nbsp;medida",210,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_unidadmedida.addMenuItem("Agregar&nbsp;unidad&nbsp;de&nbsp;medida","window.open('agregarunidad.php','_self');");
	menu_catalogo_unidadmedida.addMenuItem("Editar&nbsp;unidad&nbsp;de&nbsp;medida","window.open('modificarunidad.php','_self');");
	menu_catalogo_unidadmedida.addMenuItem("Eliminar&nbsp;unidad&nbsp;de&nbsp;medida","window.open('eliminaruni.php','_self');");
	menu_catalogo_unidadmedida.addMenuItem("Ver&nbsp;unidades&nbsp;de&nbsp;medida","window.open('verunidad.php','_self');");
	menu_catalogo_unidadmedida.hideOnMouseOut=true;
	menu_catalogo_unidadmedida.menuBorder=0;
	menu_catalogo_unidadmedida.bgColor = "#ffffff";
	window.menu_catalogo_areatrabajador= new Menu("Areas&nbsp;del&nbsp;trabajador",125,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo_areatrabajador.addMenuItem("Agregar&nbsp;&aacute;rea","window.open('agregarareatrabajador.php','_self');");
	menu_catalogo_areatrabajador.addMenuItem("Editar&nbsp;&aacute;rea","window.open('modificarareatrab.php','_self');");
	menu_catalogo_areatrabajador.addMenuItem("Eliminar&nbsp;&aacute;rea","window.open('eliminarareatrab.php','_self');");
	menu_catalogo_areatrabajador.addMenuItem("Ver&nbsp;&aacute;reas","window.open('verareatrab.php','_self');");
	menu_catalogo_areatrabajador.hideOnMouseOut
	menu_catalogo_areatrabajador.menuBorder=0;
	menu_catalogo_areatrabajador.bgColor = "#ffffff";
	window.menu_catalogo = new Menu("root",180,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_catalogo.addMenuItem(menu_catalogo_clientes);
	menu_catalogo.addMenuItem(menu_catalogo_proveedores);
	menu_catalogo.addMenuItem(menu_catalogo_material);
	menu_catalogo.addMenuItem(menu_catalogo_area);
	menu_catalogo.addMenuItem(menu_catalogo_unidadmedida);
	menu_catalogo.addMenuItem(menu_catalogo_areatrabajador);
	menu_catalogo.childMenuIcon="images/mas.png";
	menu_catalogo.hideOnMouseOut=true;
	menu_catalogo.menuBorder=0;
	menu_catalogo.bgColor = "#ffffff";
	
	
	window.menu_movimientos_inventario = new Menu("Movimientos&nbsp;de&nbsp;inventario",220,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_movimientos_inventario.addMenuItem("Orden de compras","window.open('compras.php', '_self');");
	menu_movimientos_inventario.addMenuItem("Recepci&oacute;n de orden de compra","window.open('ordendecompra.php', '_self');");
	menu_movimientos_inventario.addMenuItem("Salida de almac&eacute;n","window.open('salida.php', '_self');");
	menu_movimientos_inventario.hideOnMouseOut=true;
	menu_movimientos_inventario.menuBorder=0;
	menu_movimientos_inventario.bgColor = "#ffffff";
	
	window.menu_reportes_compra = new Menu("Reportes&nbsp;de&nbsp;compra",210,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_reportes_compra.addMenuItem("Reporte&nbsp;por&nbsp;proveedor","window.open('reportecompra.php', '_self');");
	menu_reportes_compra.addMenuItem("Reporte&nbsp;por&nbsp;fecha","window.open('reportecomprafecha.php', '_self');");
	menu_reportes_compra.addMenuItem("Reporte&nbsp;por&nbsp;material","window.open('reportecompramaterial.php', '_self');");
	menu_reportes_compra.addMenuItem("Reporte&nbsp;por&nbsp;orden&nbsp;de&nbsp;compra","window.open('reporteinventario_ordencompra.php', '_self');");
	menu_reportes_compra.hideOnMouseOut=true;
	menu_reportes_compra.menuBorder=0;
	menu_reportes_compra.bgColor = "#ffffff";
	window.menu_reportes_salida = new Menu("Reportes&nbsp;de&nbsp;salida",210,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_reportes_salida.addMenuItem("Reporte&nbsp;por&nbsp;trabajador","window.open('reportesalida.php', '_self');");
	menu_reportes_salida.addMenuItem("Reporte&nbsp;por&nbsp;fecha","window.open('reportesalidafecha.php', '_self');");
	menu_reportes_salida.addMenuItem("Reporte&nbsp;por&nbsp;material","window.open('reportesalidamaterial.php', '_self');");
	menu_reportes_salida.hideOnMouseOut=true;
	menu_reportes_salida.menuBorder=0;
	menu_reportes_salida.bgColor = "#ffffff";
	window.menu_reportes = new Menu("Reportes",170,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_reportes.addMenuItem("Reportes&nbsp;de&nbsp;inventario","window.open('reporteinventario.php','_self');");
	menu_reportes.addMenuItem(menu_reportes_compra);
	menu_reportes.addMenuItem(menu_reportes_salida);
	menu_reportes.childMenuIcon="images/mas.png";
	menu_reportes.hideOnMouseOut=true;
	menu_reportes.menuBorder=0;
	menu_reportes.bgColor = "#ffffff";
	
	window.menu_movimientos= new Menu("root",225,25,"Georgia, Times, serif",14,"#fff","#ffffff","#2A75E6","#2258A7","left","middle",0,0,1000,0,0,true,true,true,10,true,false);
	menu_movimientos.addMenuItem(menu_movimientos_inventario);
	menu_movimientos.addMenuItem(menu_reportes);
	menu_movimientos.hideOnMouseOut=true;
	menu_movimientos.menuBorder=0;
	menu_movimientos.bgColor = "#ffffff";
	menu_movimientos.childMenuIcon="images/mas.png";
	menu_movimientos.writeMenus();
}