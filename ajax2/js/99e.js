/*
Autor: Cruz Rosales
Ultima modificacion: 20090331-1402
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
		if ('' != f.contrasenan.value || '' != f.contrasenac.value) {
			if (5 > f.contrasenan.value.length) {
				Element.update(c, 'Su nueva contrase&ntilde;a debe tener al menos 5 caracteres')
				Form.Element.activate(f.contrasenan)
				return false
			}
			if (f.contrasenan.value  != f.contrasenac.value) {
				Element.update(c, 'Su nueva contrase&ntilde;a y su confirmaci&oacute;n no coinciden')
				Form.Element.activate(f.contrasenan)
				return false
			}
		}
		f.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
})