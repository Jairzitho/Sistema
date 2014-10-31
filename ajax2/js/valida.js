/*
Autor: Cruz Rosales
Ultima modificacion: 20090301-1921
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function fvalida(f) {
	var c = $(f).getElementsByClassName('required')
	var s = c.length
	var i = 0
	var continuar = true
	var msg = $('consola')
	var rc
	while (continuar && i < s) {
		switch (c[i].nodeName.toLowerCase()) {
			case 'input':
				switch (c[i].getAttribute('type').toLowerCase()) {
					case 'password':
					case 'text':
						if (!c[i].present()) {
							msg.update('Proporcione un valor para el campo: ' + c[i].getAttribute('title'))
							continuar = false
							c[i].activate()
						}
						break
					case 'radio':
					case 'checkbox':
						rc = $A(f.elements[c[i].getAttribute('name')])
						if (!rc.pluck('checked').any()) {
							msg.update('Seleccione un valor para el campo: ' + c[i].getAttribute('title'))
							continuar = false
							c[i].focus()
						}
						break
				}
				break
			case 'textarea':
				if (!c[i].present()) {
					msg.update('Proporcione un valor para el campo: ' + c[i].getAttribute('title'))
					continuar = false
					c[i].activate()
				}
				break
			case 'select':
				if (c[i].selectedIndex < 1) {
					msg.update('Seleccione un valor para el campo: ' + c[i].getAttribute('title'))
					continuar = false
					c[i].focus()
				}
				break
			default:
		}
		++i
	}
	return continuar
}