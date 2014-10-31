/*
Autor: Cruz Rosales
Ultima modificacion: 20090301-1940
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
		if (5 > f.contrasena.value.length) {
			Element.update(c, 'La contrase&ntilde;a debe tener al menos 5 caracteres')
			Form.Element.activate(f.contrasena)
			return false
		}
		if (f.contrasena.value != f.contrasena_confirma.value) {
			Element.update(c, 'Las contrase&ntilde;as no coinciden')
			Form.Element.activate(f.contrasena)
			return false
		}
		f.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
})