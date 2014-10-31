/*
Autor: Cruz Rosales
Ultima modificacion: 20080428-1047
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
Uso: colocar la clase mostrar-fecha a los elementos texto que deban mostrar control calendario
*/
var Calendario = Class.create ({
	initialize: function (padre, inicio, termino) {
		this.calendario = $(document.createElement('div'));
		this.inicio = inicio;
		this.termino = termino;
		var fecha = new Date();
		this.anio = fecha.getFullYear();
		this.mes = fecha.getMonth() + 1;
		this.dia = fecha.getDate();
		this.calendario.addClassName('calendario');
		this.calendario.update('<form action=""><table class="tcalendario"><thead><tr><th colspan="6" class="calendario_hoy" title="Clic para asignar la fecha de hoy">Hoy: <span></span><\/th><th class="calendario_cierra" title="Clic para cerrar">X<\/th><\/tr><tr><th colspan="3"><select name="calendario_mes" title="Cambiar mes"><option value="1">enero<\/option><option value="2">febrero<\/option><option value="3">marzo<\/option><option value="4">abril<\/option><option value="5">mayo<\/option><option value="6">junio<\/option><option value="7">julio<\/option><option value="8">agosto<\/option><option value="9">septiembre<\/option><option value="10">octubre<\/option><option value="11">noviembre<\/option><option value="12">diciembre<\/option><\/select><\/th><th>de<\/th><th colspan="3"><select name="calendario_anio" class="Cambiar a&ntilde;o"><option>2000<\/option><\/select><\/th><\/tr><tr class="calendario_dias"><th>dom<\/th><th>lun<\/th><th>mar<\/th><th>mi&eacute;<\/th><th>jue<\/th><th>vie<\/th><th>s&aacute;b<\/th><\/tr><\/thead><tbody><tr><td colspan="7" class="calendario_dia_disponible">A<\/td><\/tr><\/tbody><\/table><\/form>');
		this.prepara();
		this.lista_meses.observe('change', this.crea_dias_mes.bind(this));
		this.lista_anios.observe('change', this.crea_dias_mes.bind(this));
		this.lista_semanas.observe('click', this.dia_seleccionado.bind(this));
		var tr = this.calendario.down('thead').down('tr');
		tr.down('th').down('span').update(this.fecha_hoy());
		tr.down('th').observe('click', this.hoy.bind(this));
		tr.down('th',1).observe('click', this.oculta.bind(this));
		padre.appendChild(this.calendario);
	},

	prepara: function() {
		this.lista_anios = this.calendario.down('select[name=calendario_anio]');
		this.lista_meses = this.calendario.down('select[name=calendario_mes]');
		this.lista_semanas = this.calendario.down('tbody');
		this.limpia_anio();
		this.inicia_anio();
		this.selecciona_anio(this.anio);
		this.selecciona_mes(this.mes);
		this.crea_dias_mes();
	},

	limpia_anio: function () {
		while (this.lista_anios.options.length) {
			this.lista_anios.options[0] = null;
		}
	},

	inicia_anio: function () {
		var funcion = function(anio){
			this.lista_anios.options[this.lista_anios.options.length] = new Option(anio);
		};
		funcion = funcion.bind(this);
		$R(this.inicio, this.termino).each(funcion);
	},

	selecciona_anio: function (anio) {
		if (anio < this.inicio || anio > this.termino)
			return;
		this.lista_anios.selectedIndex = anio - this.inicio;
	},

	selecciona_mes: function (mes) {
		if (mes < 1 || mes > 12)
			return;
		this.lista_meses.selectedIndex = mes - 1;
	},

	reinicia_dias_mes: function () {
		this.lista_semanas.childElements().each(function (r){r.remove()})
	},

	crea_dias_mes: function () {
		this.reinicia_dias_mes();
		/*Dias del mes y dia de la semana en que inicia el mes a crear*/
		var dtm = new Date(this.lista_anios.options[this.lista_anios.selectedIndex].text, this.lista_meses.options[this.lista_meses.selectedIndex].value, 0).getDate();
		var dsim = new Date(this.lista_anios.options[this.lista_anios.selectedIndex].text, this.lista_meses.options[this.lista_meses.selectedIndex].value - 1, 1).getDay();
		/*Dias previos*/
		var tr = document.createElement('tr');
		var ds = 0, dm = 1, td = null;
		while (ds < dsim) {
			td = $(document.createElement('td'));
			td.addClassName('calendario_dia_vacio');
			tr.appendChild(td);
			++ds;
		}
		while (ds++ < 7) {
			td = $(document.createElement('td'));
			td.addClassName('calendario_dia_disponible');
			td.update(dm++);
			tr.appendChild(td);
		}
		/*Dias del mes*/
		while (dm <= dtm) {
			if (ds > 6) {
				this.lista_semanas.appendChild(tr);
				tr = document.createElement('tr');
				ds = 0;
			}
			td = $(document.createElement('td'));
			td.addClassName('calendario_dia_disponible');
			td.update(dm++);
			tr.appendChild(td);
			++ds;
		}
		/*Dias posteriores al mes*/
		while (ds++ < 7) {
			td = $(document.createElement('td'));
			td.addClassName('calendario_dia_vacio');
			tr.appendChild(td);
		}
		this.lista_semanas.appendChild(tr);
	},

	dia_seleccionado: function (e) {
		var td = $(e.element());
		if (td.hasClassName('calendario_dia_vacio'))
			return;
		if (this.fecha_destino) {
			var mes = this.lista_meses.options[this.lista_meses.selectedIndex].value * 1;
			mes = mes < 10 ? '0' + mes : mes;
			var dia = td.innerHTML * 1;
			dia = dia < 10 ? '0' + dia : dia;
			this.fecha_destino.value = this.lista_anios.options[this.lista_anios.selectedIndex].text + '-' + mes + '-' + dia;
		}
		this.oculta();
	},

	muestra: function (e) {
		this.fecha_destino = $(e.element());
		var xy = this.fecha_destino.cumulativeOffset();
		this.calendario.style.left = (xy[0] - this.calendario.getWidth()) + 'px';
		this.calendario.style.top = xy[1] + 'px';
		/*Si control tiene fecha v&aacute;lida, mostrar fecha*/
		var es_fecha = this.es_fecha(this.fecha_destino.value);
		if (es_fecha.es_fecha) {
			this.selecciona_anio(es_fecha.amd[0]);
			this.selecciona_mes(es_fecha.amd[1]);
		} else {
			this.selecciona_anio(this.anio);
			this.selecciona_mes(this.mes);
		}
		this.crea_dias_mes();
		this.calendario.show();
	},

	oculta: function (e) {
		this.calendario.hide();
	},

	hoy:function (e) {
		if (this.fecha_destino) {
			this.fecha_destino.value = this.fecha_hoy();
		}
		this.oculta();
	},

	fecha_hoy: function (e) {
		var mes = this.mes * 1;
		mes = mes < 10 ? '0' + mes : mes;
		var dia = this.dia * 1;
		dia = dia < 10 ? '0' + dia : dia;
		return this.anio + '-' + mes + '-' + dia;
	},

	es_fecha: function (fecha) {
		if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(fecha))
			return {es_fecha:false,error:-1,desc:'Formato de fecha no v&aacute;lido\nEl formato debe ser aaaa-mm-dd'};
		var _amd = fecha.split('-');
		_amd[0] = parseInt(_amd[0]);
		_amd[1] = parseInt(_amd[1]);
		_amd[2] = parseInt(_amd[2]);
		if (_amd[1]< 1 || _amd[1] > 12)
			return {es_fecha:false,error:-2,desc:'Mes no v&aacute;lido'};
		var ddm = new Date(_amd[0], _amd[1], 0).getDate();
		if (_amd[2] < 1 || _amd[2] > ddm)
			return {es_fecha:false,error:-3,desc:'Dias del mes no v&aacute;lido'};
		return {es_fecha:true,error:0,desc:'',amd:_amd};
	}
});

var calendario = null;
var calendario_anio = new Date().getFullYear();
var calendario_anios = 30;
var documento = null;

document.observe('dom:loaded', function () {
	documento = $(document.getElementsByTagName('body')[0]);
	calendario = new Calendario(documento, calendario_anio - calendario_anios, calendario_anio + calendario_anios);
	calendario.oculta();
// 	var fechas = Element.getElementsByClassName(document, 'mostrar-fecha')
	var fechas = document.getElementsByClassName('mostrar-fecha')
	if (fechas != undefined) {
		var mostrar_calendario = calendario.muestra.bind(calendario);
		for (var i = 0; i < fechas.length; i++) {
			Event.observe(fechas[i], 'focus', mostrar_calendario);
		}
	}
});