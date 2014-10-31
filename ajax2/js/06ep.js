/*
Autor: Cruz Rosales
Última modificación: 20090412-1343
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \/  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function fdelete(i) {
	rangos.removeChild(Element.up(i, 'tr'))
	frows()
}

function frows() {
	var rows = rangos.getElementsByTagName('tr')
	var r = 1
	for (i = 0; i < rows.length; i++) {
		r = 1 - r
		rows[i].className = 'row' + r
	}
	/*Renglon acciones*/
	document.getElementById('acciones').getElementsByTagName('tr')[0].className = 'row' + (rows.length % 2)
}

function fadd() {
	fadd_item(rangos)
	var rows = rangos.getElementsByTagName('tr')
	var row = rows[rows.length - 1]
	var cells = row.getElementsByTagName('td')
	var cell = cells[cells.length - 1]
	Element.update(cell, '<a href="javascript:;" onclick="fdelete(this)">quitar entrada</a>')
	frows()
}

function fok2(e) {
	e.stop()
	var f = e.element()
	if (fvalida(f)) {
		var consola2 = document.getElementById('consola2')
		var d = $$('input:[name="desde[]"]')
		var h = $$('input:[name="hasta[]"]')
		var p = $$('input:[name="porcentaje[]"]')
		document.ok = true
		d.each (function (i){
			if (!fis_int(i.value) || 0 > parseInt(i.value)) {
				Element.update(document.getElementById('consola2'), 'el número de artículos debe ser entero positivo')
				Form.Element.activate(i)
				document.ok = false
				throw $break
			}
		})
		if (false == document.ok)
			return
		h.each (function (i){
			if (!fis_int(i.value) || 0 > parseInt(i.value)) {
				Element.update(document.getElementById('consola2'), 'el número de artículos debe ser entero positivo')
				Form.Element.activate(i)
				document.ok = false
				throw $break
			}
		})
		if (false == document.ok)
			return
		p.each (function (i){
			if (!fis_float(i.value) || 0 > parseFloat(i.value)) {
				Element.update(document.getElementById('consola2'), 'el porcentaje debe ser num&eacute;rico y mayor o igual cero')
				Form.Element.activate(i)
				document.ok = false
				throw $break
			}
		})
		if (document.ok)
			f.submit()
	}
}

Event.observe(document, 'dom:loaded', function () {
	Event.observe(document.getElementById('frmpromo'), 'submit', fok2)
})