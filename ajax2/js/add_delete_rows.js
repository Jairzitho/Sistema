/*
Autor: Cruz Rosales
Ultima modificacion: 20080729-1038
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \´  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function frestore_row_controls(row) {
	var controls, i;
	/*Reestablecer controles de tipo input*/
	controls = row.getElementsByTagName('input');
	for (i = 0; i < controls.length; i++) {
		switch (controls[i].type) {
		case 'text':
		case 'file':
			controls[i].value = '';
			break;
		case 'radio':
		case 'checkbox':
			controls.checked = false;
		default:
		}
	}
	/*Reestablecer controles de tipo textarea*/
	controls = row.getElementsByTagName('textarea');
	for (i = 0; i < controls.length; i++) {
		controls[i].value = '';
	}
	/*Reestablecer controles de tipo select*/
	controls = row.getElementsByTagName('select');
	for (i = 0; i < controls.length; i++) {
		controls[i].selectedIndex = 0;
	}
}

function fadd_item(list) {
	var rows, row;
	if (typeof(list) == 'object' && list.nodeName.toLowerCase() == 'tbody') {
		rows = list.getElementsByTagName('tr');
		row = rows[0].cloneNode(true);
		frestore_row_controls(row);
		list.appendChild(row);
	}
}

function fdelete_item(list, item) {
	var rows, row;
	if (typeof(list) == 'object' && list.nodeName.toLowerCase() == 'tbody' && typeof(item) == 'object') {
		rows = list.getElementsByTagName('tr');
		if (rows.length > 1) {
			var target = item.parentNode;
			while (target.nodeName.toLowerCase() != 'tr') {
				target = target.parentNode;
			}
			list.removeChild(target);
		}
	}
}
