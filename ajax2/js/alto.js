/*
Autor: Cruz Rosales
Ultima modificacion: 20090305-0940
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \/  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
Event.observe(document, 'dom:loaded', falto)
//Event.observe(window, 'resize', falto)

function falto(e) {
	var r = $('todo')
	var alto
	if (Prototype.Browser.IE) {
		alto = document.body.clientHeight
	} else {
		alto = window.innerHeight
	}
	alto -= 22
	r.setStyle({minHeight:alto+'px'})
}