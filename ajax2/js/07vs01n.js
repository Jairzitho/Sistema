/*
Autor: Cruz Rosales
Ultima modificacion: 20090318-0857
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function ftodos (estado) {
	if (0 < presentaciones.length) {
		for (i = 0; i < presentaciones.length; i++) {
			presentaciones[i].checked = estado
		}
	}
}

function finventario(inventario) {
	if (0 < presentaciones.length) {
		if (!fis_int(inventario.value)) {
			alert('Proporcione un inventario válido')
			Form.Element.activate(inventario)
			return
		}
		if (0 > parseInt(inventario.value)) {
			alert('El inventario debe ser mayor o igual a cero')
			Form.Element.activate(inventario)
			return
		}
		for (i = 0; i < presentaciones.length; i++) {
			if (presentaciones[i].checked) {
				inventarios[i].value = inventario.value
			}
		}
	}
}

function faplica (btn) {
	for (i = 0; i < presentaciones.length; i++) {
		if (presentaciones[i].checked) {
			if (!fis_int(inventarios[i].value)) {
				alert('Proporcione un inventario válido')
				Form.Element.activate(inventarios[i])
				return
			}
			if (0 > parseInt(inventarios[i].value)) {
				alert('El inventario debe ser mayor o igual a cero')
				Form.Element.activate(inventarios[i])
				return
			}
		} else {
			inventarios[i].value = ''
		}
	}
	for (i = 0; i < presentaciones.length; i++) {
		if (!presentaciones[i].checked) {
			inventarios[i].disabled = true
		}
	}
	btn.form.submit()
}