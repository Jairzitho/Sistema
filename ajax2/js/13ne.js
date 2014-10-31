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

function factualiza_presentaciones(r) {
	ajax.hide()
	var o = r.responseText.evalJSON(false)
	if (o.e == true) {
		var l = document.frmdo.sid07
		for(i = 0; i < o.i.length; i++) {
			l.options[l.options.length] = new Option(o.v[i], o.i[i], false)
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
	new Ajax.Request('07json01.php',{method:'get',parameters:'id06=' + document.frmdo.sid06.options[document.frmdo.sid06.selectedIndex].value, onSuccess:factualiza_presentaciones, onFailure:fajaxerror})
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
	for (var i = 0; i < r.length; i++) {
		var cells = r[i].getElementsByTagName('td')
		var inputs = r[i].getElementsByTagName('input')
		if (fis_float(inputs[2].value) && fis_float(inputs[3].value)) {
			subtotal = parseFloat(inputs[2].value) * parseFloat(inputs[3].value)
			total += subtotal
			cells[cells.length-2].innerHTML = subtotal.toFixed(2)
		} else {
			cells[cells.length-2].innerHTML = '??'
		}
	}
	resultado.innerHTML = total.toFixed(2)
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
	c.appendChild(i)
	i = document.createElement('input')
	i.setAttribute('name','minimo[]')
	i.setAttribute('type','hidden')
	i.setAttribute('value',o.m[0])
	c.appendChild(i)
	i = document.createTextNode(o.v[0])
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
	Element.setStyle(c, {textAlign:'right'})
	i = document.createElement('input')
	i.setAttribute('name','precio[]')
	Event.observe(i, 'change', fcalcula)
	i.setAttribute('type','hidden')
	i.setAttribute('value',parseFloat(o.p[0]).toFixed(2))
	c.appendChild(i)
	i = document.createTextNode(parseFloat(o.p[0]).toFixed(2))
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
	i = document.createElement('input')
	i.setAttribute('name','existencia[]')
	i.setAttribute('type','hidden')
	i.setAttribute('value',o.n[0])
	c.appendChild(i)
	r.appendChild(c)
	/*Renglon*/
	presentaciones.appendChild(r)
	frows()
	fcalcula()
}

function fpresentacion_valida(r) {
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
				var cantidad = parseInt(inputs[2].value)
				cantidad = 0 <= cantidad ? cantidad + 1 : 1;
				inputs[2].value = cantidad
				fcalcula()
				break
			}
		}
		if (false == agregado) {
			ajax_trabajando = true
			ajax.show()
			new Ajax.Request('07json03-detalle-existencia-0.php',{method:'get',parameters:'id07=' + id, onSuccess:fpresentacion_valida, onFailure:fajaxerror})
		}
	}
}

function frestaura() {
	var rows = presentaciones.getElementsByTagName('tr')
	var k = rows.length - 1
	while (k >= 0) {
		presentaciones.removeChild(rows[k--])
	}
	fcalcula()
}

function fok(e) {
	e.stop()
	var consola = document.getElementById('consola')
	if (fvalida(e.element())) {
		var rows = presentaciones.getElementsByTagName('tr')
		if (0 < rows.length) {
			var inputs
			for (var k = rows.length - 1; k >= 0; k--) {
				inputs = rows[k].getElementsByTagName('input')
				/*Convertir a numeros*/
				imcpe = [parseInt(inputs[0].value), parseFloat(inputs[1].value), parseInt(inputs[2].value), parseFloat(inputs[3].value), parseInt(inputs[4].value)]
				/*Cantidad debe ser entera*/
				if (!fis_int(inputs[2].value) || 0 > imcpe[2]) {
					Element.update(consola, 'La cantidad solicitada debe ser entera y mayor a cero')
					Form.Element.activate(inputs[2])
					return false
				}
				/*Precio debe ser numerico*/
				if (!fis_float(inputs[3].value) || 0 > imcpe[3]) {
					Element.update(consola, 'El precio debe ser num&eacute;rico y mayor o igual a cero')
					Form.Element.activate(inputs[3])
					return false
				}
			}
			document.frmdo.submit()
		} else {
			Element.update(consola, 'Debe seleccionar al menos un producto')
			Form.Element.activate(document.frmdo.sid07)
			return false
		}
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
	presentaciones.removeChild(presentaciones.down('tr'))
})