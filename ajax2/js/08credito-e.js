/*
Autor: Cruz Rosales
Ultima modificacion: 20090526-1422
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function fok(e) {
	e.stop()
	var nfrm = e.element()
	if (fvalida(nfrm)) {
		var consola = document.getElementById('consola')
		if (!fis_float(nfrm.pago.value) || 0 >= parseFloat(nfrm.pago.value) || parseFloat(document.getElementById('ncreditototal').getAttribute('title')) < parseFloat(nfrm.pago.value)) {
			Element.update(consola, 'El pago debe ser num&eacute;rico, mayor que cero y menor o igual a ' + parseFloat(document.getElementById('ncreditototal').getAttribute('title')).toFixed(2))
			Form.Element.activate(nfrm.pago)
			return false
		}
		if (!nfrm.elements['tipo'][0].checked && !nfrm.elements['tipo'][1].checked) {
			Element.update(consola, 'Seleccione el tipo de pago')
			Form.Element.activate(frm.elements['tipo'][0])
			return false
		}
		nfrm.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
})