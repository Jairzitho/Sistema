/*
Autor: Cruz Rosales
Ultima modificacion: 20080729-1035
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \/  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function fcheck_if_all(target, checkboxes) {
	var yn = new Array(0,0);
	var total_checkboxes;
	if (typeof checkboxes == 'object') {
		try {
			if (typeof checkboxes.length == 'number') {
				var i;
				total_checkboxes = checkboxes.length;
				for (i = 0; i < total_checkboxes; i++) {
					if (checkboxes[i].checked) {
						++yn[0];
					} else {
						++yn[1];
					}
				}
			} else {
				total_checkboxes = 1;
				if (checkboxes.checked) {
					++yn[0];
				} else {
					++yn[1];
				}
			}
			target.checked = (yn[0] == total_checkboxes);
		} catch (e) {}
	}
}

function fselect_all(checkboxes, state) {
	if (typeof checkboxes == 'object') {
		try {
			if (typeof checkboxes.length == 'number') {
				var i;
				for (i = 0; i < checkboxes.length; i++) {
					checkboxes[i].checked = state;
				}
			} else {
				checkboxes.checked = state;
			}
		} catch (e) {}
	}
}

function fdelete_items(f, items, target) {
	if (fis_any_selected(items) && confirm('Realmente desea borrar los elementos seleccionados?\nLa operaci&oacute;n ser&aacute; irreversible')) {
		f.action = target;
		f.submit();
	}
}

//onclick="fselect_all(this.form.elements['id03[]'], this.checked);"
//onclick="fcheck_if_all(this.form.all, this.form.elements['id03[]']);"
