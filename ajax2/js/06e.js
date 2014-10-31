/*
Autor: Cruz Rosales
Ultima modificacion: 20090302-2247
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function fok(e) {
	e.stop()
	var f = e.element()
	if (fvalida(f)) {
		var c = document.getElementById('consola')
		if (!fis_int(f.puntos.value) || 0 > parseInt(f.puntos.value)) {
			Element.update(c, 'El n&uacute;mero de puntos debe ser entero y mayor o igual a cero')
			Form.Element.activate(f.puntos)
			return false;
		}
		f.submit()
	}
}

function f03actualiza(r) {
	var o = r.responseText.evalJSON(false)
	if (true == o.e) {
		var cselect = document.frmdo.id03
		for(var i = 0; i < o.i.length; i++) {
			cselect.options[cselect.options.length] = new Option(o.v[i], o.i[i], false)
		}
	} else {
		alert(o.d)
	}
	Element.hide('najaxcargando')
	vbajaxtrabajando = false
}

function f03carga(cselect) {
	if (vbajaxtrabajando)
		return
	vbajaxtrabajando = true
	Element.show('najaxcargando')
	var cselect03 = cselect.form.id03
	while (1 < cselect03.options.length) {
		cselect03.options[1] = null
	}
	new Ajax.Request('03ajax-get.php',{method:'get',parameters:'id03=' + cselect.options[cselect.selectedIndex].value, onSuccess:f03actualiza, onFailure:fajaxerror})
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
	Element.hide('najaxcargando')
})