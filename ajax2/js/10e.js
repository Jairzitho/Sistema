/*
Autor: Cruz Rosales
Ultima modificacion: 20090910-1039
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
		if (!/\.jpg/i.test(f.fotografia.value)) {
			Element.update('conola', 'Seleccione una fotografía con extensión .jpg')
			Form.Element.activate(f.fotografia)
			return false
		}
		f.submit()
	}
}

Event.observe(document, 'dom:loaded', function(e){
	Event.observe(document.frmdo2, 'submit', fok)
})