/*
Autor: Cruz Rosales
Ultima modificacion: 20090326-2225
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function frestaura_lista(lista) {
	while (1 < lista.options.length) {
		lista.options[1] = null
	}
}

function fquita(e) {
	presentaciones.removeChild($(e.element()).up('tr'))
	frows()
	fcalcula()
}

function fagrega(o) {
	var r = document.createElement('tr')
	/*Col 1*/
	var c = document.createElement('td')
	var i = document.createElement('input')
	i.setAttribute('name','id07[]')
	i.setAttribute('type','hidden')
	i.setAttribute('value',o.i[0])
	/*pegarle variable con promociones*/
	i.setAttribute('title',serialize(o))
	c.appendChild(i)
	i = document.createTextNode(o.v[0] + ' (Existencia ' + o.n[0] + ' - $ Min. ' + parseFloat(o.m[0]).toFixed(2) + ')')
	c.appendChild(i)
	r.appendChild(c)
	/*Col 2*/
	c = document.createElement('td')
	i = document.createElement('input')
	i.setAttribute('name','cantidad[]')
	i.setAttribute('type','text')
	i.setAttribute('value','1')
	Event.observe(i, 'change', fcalcula)
	c.appendChild(i)
	r.appendChild(c)
	/*Col 3*/
	c = document.createElement('td')
	i = document.createElement('input')
	i.setAttribute('name','precio[]')
	Event.observe(i, 'change', fcalcula)
	i.setAttribute('type','text')
	i.setAttribute('value',parseFloat(o.p[0]).toFixed(2))
	c.appendChild(i)
	r.appendChild(c)
	/*Col 4*/
	c = document.createElement('td')
	Element.setStyle(c, {textAlign:'right'})
	r.appendChild(c)
	/*Col 5*/
	c = document.createElement('td')
	Element.setStyle(c, {textAlign:'center'})
	i = document.createElement('a')
	i.setAttribute('href', 'javascript:void(0)')
	i.appendChild(document.createTextNode('quitar'))
	Event.observe(i, 'click', fquita)
	c.appendChild(i)
	r.appendChild(c)
	/*Renglon*/
	presentaciones.appendChild(r)
	frows()
	fcalcula()
}

function fdetalle(r) {
	ajax.hide()
	var o = r.responseText.evalJSON(false)
	if (o.e == true) {
		fagrega(o)
	} else {
		alert(o.d)
	}
	ajax_trabajando = false
}

function fadd(f) {
	if (ajax_trabajando)
		return
	var id = 0
	if (fis_int(f.tid07.value) && 0 < parseInt(f.tid07.value)) {
		id = parseInt(f.tid07.value)
		f.sid07.selectedIndex = 0
	} else if (0 < f.sid07.options[f.sid07.selectedIndex].value) {
		id = f.sid07.options[f.sid07.selectedIndex].value
		f.tid07.value = ''
	}
	if (0 >= id) {
		alert('Seleccione o proporcione una presentación')
		f.tid07.focus()
	} else {
		/*No se ha agregado el producto?*/
		var rows = presentaciones.getElementsByTagName('tr')
		var agregado = false
		var inputs
		for (var i = 0; i < rows.length; i++) {
			inputs = rows[i].getElementsByTagName('input')
			if (id == parseInt(inputs[0].value)) {
				agregado = true
				var obj = unserialize(inputs[0].title)
				var existencia = parseInt(obj.n[0])
				var cantidad = parseInt(inputs[1].value)
				cantidad = 0 <= cantidad ? cantidad + 1 : 1;
				inputs[1].value = cantidad <= existencia ? cantidad : existencia
				fcalcula()
				break
			}
		}
		if (false == agregado) {
			ajax_trabajando = true
			ajax.show()
			new Ajax.Request('07json03-detalle.php',{method:'get',parameters:'id01=' + document.frmdo.id01.options[document.frmdo.id01.selectedIndex].value + '&id07=' + id, onSuccess:fdetalle, onFailure:fajaxerror})
		}
	}
}

function frows() {
	var rows = presentaciones.getElementsByTagName('tr')
	var r = 1
	for (i = 0; i < rows.length; i++) {
		r = 1 - r
		rows[i].className = 'row' + r
	}
}

function fcalcula() {
	var r = presentaciones.getElementsByTagName('tr')
	var total = 0
	var subtotal = 0
	var flg = document.frmdo.precio_automatico.checked
	var obj = null
	var items = 0
	var precio = 0
	var idx = 0
	for (var i = 0; i < r.length; i++) {
		var cells = r[i].getElementsByTagName('td')
		var inputs = r[i].getElementsByTagName('input')
		/*bof descuentos*/
		if (flg) {
			obj = unserialize(inputs[0].title)
			precio = parseFloat(obj.p[0])
			inputs[1].value = items = fis_int(inputs[1].value) ? parseInt(inputs[1].value) : 1;
			while ('undefined' != typeof(obj.promo[0][idx])) {
				if (items >= obj.promo[0][idx].d && items <= obj.promo[0][idx].h) {
					precio = obj.p[0] - (obj.p[0] * obj.promo[0][idx].p / 100)
				}
				++idx
			}
			inputs[2].value = precio > obj.m[0] ? precio.toFixed(2) : obj.p[0]
		}
		/*eof descuentos*/
		if (fis_int(inputs[1].value) && fis_float(inputs[2].value)) {
			subtotal = parseInt(inputs[1].value) * parseFloat(inputs[2].value)
			total += subtotal
			cells[cells.length-2].innerHTML = subtotal.toFixed(2)
		} else {
			cells[cells.length-2].innerHTML = '??'
		}
	}
// 	resultado.innerHTML = document.frmdo.credito.value = total.toFixed(2)
	resultado.innerHTML = total.toFixed(2)
}

function frestaura() {
	var rows = presentaciones.getElementsByTagName('tr')
	var k = rows.length - 1
	while (k >= 0) {
		presentaciones.removeChild(rows[k--])
	}
}

function factualiza_presentaciones(r) {
	ajax.hide()
	var o = r.responseText.evalJSON(false)
	if (o.e == true) {
		var l = document.frmdo.sid07
		for(i = 0; i < o.i.length; i++) {
			l.options[l.options.length] = new Option(o.v[i] + '(Existencia: ' + o.n[i] + ')', o.i[i], false)
		}
	} else {
		alert(o.d)
	}
	ajax_trabajando = false
}

function fcarga_presentaciones(lista) {
	document.frmdo.tid07.value = ''
	if (ajax_trabajando)
		return
	ajax_trabajando = true
	ajax.show()
	frestaura_lista(document.frmdo.sid07)
	new Ajax.Request('07json02-con-existencia.php',{method:'get',parameters:'id01=' + document.frmdo.id01.options[document.frmdo.id01.selectedIndex].value + '&id06=' + document.frmdo.sid06.options[document.frmdo.sid06.selectedIndex].value, onSuccess:factualiza_presentaciones, onFailure:fajaxerror})
}

function factualiza_productos(r) {
	ajax.hide()
	var o = r.responseText.evalJSON(false)
	if (o.e == true) {
		var l =document.frmdo.sid06
		for(i = 0; i < o.i.length; i++) {
			l.options[l.options.length] = new Option(o.v[i], o.i[i], false)
		}
	} else {
		alert(o.d)
	}
	ajax_trabajando = false
}

function fcarga_productos(lista) {
	if (ajax_trabajando)
		return
	ajax_trabajando = true
	ajax.show()
	frestaura()
	frestaura_lista(document.frmdo.sid06)
	frestaura_lista(document.frmdo.sid07)
	new Ajax.Request('06json02-con-existencia.php',{method:'get',parameters:'id01=' + document.frmdo.id01.options[document.frmdo.id01.selectedIndex].value, onSuccess:factualiza_productos, onFailure:fajaxerror})
	fcalcula()
}

function fok(e) {
	e.stop()
	var rows = presentaciones.getElementsByTagName('tr')
	var consola = document.getElementById('consola')
	var frm = e.element()
	if (1 > frm.id01.selectedIndex) {
		Element.update(consola, 'Seleccione un local')
		Form.Element.activate(frm.id01)
		return false
	}
	if (1 > frm.id08.selectedIndex) {
		Element.update(consola, 'Seleccione un cliente')
		Form.Element.activate(frm.id08)
		return false
	}
	if (!frm.elements['pago'][0].checked && !frm.elements['pago'][1].checked) {
		Element.update(consola, 'Seleccione el tipo de pago')
		Form.Element.activate(frm.elements['pago'][0])
		return false
	}
	if (0 < rows.length) {
		var inputs
		var obj
		for (var k = rows.length - 1; k >= 0; k--) {
			inputs = rows[k].getElementsByTagName('input')
			obj = unserialize(inputs[0].title)
			/*Convertir a numeros*/
			imcpe = [parseInt(inputs[0].value), parseFloat(obj.m[0]), parseInt(inputs[1].value), parseFloat(inputs[2].value), parseInt(obj.n[0])]
			/*Cantidad debe ser entera*/
			if (!fis_int(inputs[1].value) || 0 > imcpe[2]) {
				Element.update(consola, 'La cantidad solicitada debe ser entera y mayor a cero')
				Form.Element.activate(inputs[1])
				return false
			}
			/*Precio debe ser numerico*/
			if (!fis_float(inputs[2].value) || 0 > imcpe[3]) {
				Element.update(consola, 'El precio debe ser num&eacute;rico y mayor o igual a cero')
				Form.Element.activate(inputs[2])
				return false
			}
			/*Cantidad debe ser menor a existencia*/
			if (imcpe[2] > imcpe[4]) {
				Element.update(consola, 'La cantidad solicitada no puede ser mayor a la existencia (' + imcpe[2] + ' > ' + imcpe[4] + ')')
				Form.Element.activate(inputs[1])
				return false
			}
			/*El precio no puede estar por debajo del minimo*/
			if (imcpe[3] < imcpe[1]) {
				Element.update(consola, 'El precio no puede estar por debajo del m&iacute;nimo (' + imcpe[3] + ' < ' + imcpe[1] + ')')
				Form.Element.activate(inputs[2])
				return false
			}
		}
		/*bof puntos*/
		if (!fis_int(frm.puntos.value) || 0 > parseInt(frm.puntos.value)) {
			Element.update(consola, 'Los puntos deben ser enteros y mayor o igual a cero')
			Form.Element.activate(frm.puntos)
			return false
		}
		var t = document.frmdo.id08.options[document.frmdo.id08.selectedIndex].text
		if (/\[(\d+) pts\]$/.test(t)) {
			if (parseInt(frm.puntos.value) > parseInt(RegExp.$1)) {
				frm.puntos.value = RegExp.$1
			}
		} else {
			frm.puntos.value = RegExp.$1
		}
		if (parseInt(frm.puntos.value) > parseInt(resultado.innerHTML)) {
			Element.update(consola, 'Los puntos no pueden ser mayores al total')
			Form.Element.activate(frm.puntos)
			return false
		}
		/*eof puntos*/
		/*bof credito*/
		if (!fis_float(frm.credito.value)) {
			Element.update(consola, 'El monto de la venta a cr&eacute;dito debe ser num&eacute;rico')
			Form.Element.activate(frm.credito)
			return false
		}
		var vfcredito = parseFloat(frm.credito.value)
		if (vfcredito > parseFloat(resultado.innerHTML) || 0 > vfcredito) {
			Element.update(consola, 'El monto de la venta a cr&eacute;dito debe estar entre 0 (cero) y ' + resultado.innerHTML)
			Form.Element.activate(frm.credito)
			return false
		}
		/*eof credito*/
		frm.submit()
	} else {
		Element.update(consola, 'Debe seleccionar al menos un producto')
		Form.Element.activate(document.frmdo.sid07)
		return false
	}
}

function fprecio_automatico(flg) {
	if (flg) {
		fcalcula()
	}
}

function fusar_puntos(flg) {
	if (flg) {
		var t = document.frmdo.id08.options[document.frmdo.id08.selectedIndex].text
		if (/\[(\d+) pts\]$/.test(t)) {
			document.frmdo.puntos.value = RegExp.$1
		} else {
			document.frmdo.puntos.value = 0
		}
	} else {
		document.frmdo.puntos.value = 0
	}
	document.frmdo.puntos.disabled = !flg
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
	presentaciones.removeChild(presentaciones.down('tr'))
})