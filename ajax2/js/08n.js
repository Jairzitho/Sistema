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
		var consola = document.getElementById('consola')
		var is_date = fis_date(f.nacimiento.value)
		if ('' != f.nacimiento.value && !is_date.is_date) {
			Element.update(consola, is_date.desc)
			Form.Element.activate(f.nacimiento)
			return false
		}
		f.rfc.value = f.rfc.value.toUpperCase()
		f.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo, 'submit', fok)
})