/*
Autor: Cruz Rosales
Ultima modificacion: 20090909-1700
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function ftodos (estado) {
	if (0 < tallas.length) {
		for (var i = 0; i < tallas.length; i++) {
			tallas[i].checked = estado
		}
	}
}

function fprecio(precio) {
	if (0 < tallas.length) {
		if (!fis_float(precio.value)) {
			alert('Proporcione un precio válido')
			Form.Element.activate(precio)
			return
		}
		if (0 > parseFloat(precio.value)) {
			alert('El precio debe ser mayor o igual a cero')
			Form.Element.activate(precio)
			return
		}
		for (var i = 0; i < tallas.length; i++) {
			if (tallas[i].checked) {
				precios[i].value = precio.value
			}
		}
	}
}

function fcosto(costo) {
	if (0 < tallas.length) {
		if (!fis_float(costo.value)) {
			alert('Proporcione un costo válido')
			Form.Element.activate(costo)
			return
		}
		if (0 > parseFloat(costo.value)) {
			alert('El costo debe ser mayor o igual a cero')
			Form.Element.activate(costo)
			return
		}
		for (var i = 0; i < tallas.length; i++) {
			if (tallas[i].checked) {
				costos[i].value = costo.value
			}
		}
	}
}

function fminimo(minimo) {
	if (0 < tallas.length) {
		if (!fis_float(minimo.value)) {
			alert('Proporcione un precio m&iacute;nimo válido')
			Form.Element.activate(minimo)
			return
		}
		if (0 > parseFloat(minimo.value)) {
			alert('El precio mínimo debe ser mayor o igual a cero')
			Form.Element.activate(minimo)
			return
		}
		for (var i = 0; i < tallas.length; i++) {
			if (tallas[i].checked) {
				minimos[i].value = minimo.value
			}
		}
	}
}

function faplica (btn) {
	for (var i = 0; i < tallas.length; i++) {
		if (tallas[i].checked) {
			if (!fis_float(costos[i].value)) {
				alert('Proporcione un costo válido')
				Form.Element.activate(costos[i])
				return
			}
			if (0 > parseFloat(costos[i].value)) {
				alert('El costo debe ser mayor o igual a cero')
				Form.Element.activate(costos[i])
				return
			}
			if (!fis_float(precios[i].value)) {
				alert('Proporcione un precio válido')
				Form.Element.activate(precios[i])
				return
			}
			if (0 > parseFloat(precios[i].value)) {
				alert('El precio debe ser mayor o igual a cero')
				Form.Element.activate(precios[i])
				return
			}
			if (!fis_float(minimos[i].value)) {
				alert('Proporcione un precio minimo válido')
				Form.Element.activate(minimos[i])
				return
			}
			if (0 > parseFloat(minimos[i].value)) {
				alert('El precio minimo debe ser mayor o igual a cero')
				Form.Element.activate(minimos[i])
				return
			}
			if (parseFloat(precios[i].value) < parseFloat(costos[i].value)) {
				alert('El costo no puede ser mayor que el precio')
				Form.Element.activate(costos[i])
				return
			}
			if (parseFloat(minimos[i].value) < parseFloat(costos[i].value)) {
				alert('El costo no puede ser mayor que el precio mínimo')
				Form.Element.activate(minimos[i])
				return
			}
		} else {
			costos[i].value = ''
			precios[i].value = ''
			minimos[i].value = ''
		}
	}
	var ids = new Array()
	for (var i = 0; i < colores.length; i++) {
		if (colores[i].checked) {
			ids.push(colores[i].value)
		}
	}
	if (colores.pluck('checked').any() && tallas.pluck('checked').any()) {
		btn.form.id04s.value = ids.join(',')
		//desactivar
		for (var i = 0; i < tallas.length; i++) {
			if (!tallas[i].checked) {
				costos[i].disabled = true
				precios[i].disabled = true
				minimos[i].disabled = true
			}
		}
		//enviar
		btn.form.submit()
	} else {
		alert('Debe seleccionar al menos un color y una talla')
	}
}