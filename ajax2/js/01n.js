/*
Autor: Cruz Rosales
Ultima modificacion: 20090301-1915
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
		if (!fis_int(f.numero.value)) {
			Element.update(c, 'Proporcione un n&uacute;mero v&aacute;lido')
			Form.Element.activate(f.numero)
			return false
		}
		f.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
})