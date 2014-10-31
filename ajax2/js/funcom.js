/*
Autor: Cruz Rosales
Ultima modificacion: 20080729-1035
Contacto: crosalesc@gmail.com
~by__ _  __  |^|_  __  _ __ _ __  _   _ _ __   __
 / _ ` | _  \  __| _  \ '__| '_  \ | | | '_  \/  \
| (_)  | __ /  |_| ___/ |  | | | | |_| | | | | | |
 \ __,_|\___|\___|\___|_|  |_| |_|\___/|_| |_| |_|crc<>
*/
function ferror(c, m) {
	var msg = document.getElementById('mensaje_error');
	if (msg) {
		msg.innerHTML = m;
	} else {
		alert(m);
	}
	try {
		c.focus();
	} catch (e) {
		return false;
	}
	return false;
}

function fis_valid_pwd(pwd) {
	if (pwd == '' || pwd.length < 8)
		return false;
	if (!/[a-z]/i.test(pwd))
		return false;
	if (!/\d/.test(pwd))
		return false;
	return true;
}

function fis_email(e) {
	return /^([a-z_][a-z_\d\-\.]*\@[a-z_][a-z_\d\-]*(\.[a-z_][a-z_\d\-]*)+)$/i.test(e);
}

function ftrim(v) {
	return v.replace(/^ +/,'').replace(/ +$/,'');
}

function fis_date(value) {
	if (!/^\d{4}-\d{1,2}-\d{1,2}$/.test(value))
		return {is_date:false,error:-1,desc:'Formato de fecha no v&aacute;lido\nLa fecha debe estar en formato aaaa-mm-dd'};//Formato no v&aacute;lido
	var amd = value.split('-');
	if (amd[1]< 1 || amd[1] > 12)
		return {is_date:false,error:-2,desc:'Mes no v&aacute;lido'};
	var days_of_month = new Date(amd[0], amd[1], 0).getDate();
	if (amd[2] < 1 || amd[2] > days_of_month)
		return {is_date:false,error:-3,desc:'D&aacute;­as del mes no v&aacute;lido'};
	return {is_date:true,error:0,desc:'Ok'};
}

function fmake_date(value) {
	var id = fis_date(value);
	if (id.is_date) {
		var amd = value.split('-');
		return new Date(amd[0], amd[1]-1, amd[2]);
	} else
		return false;
}

function fis_float(v) {
	//return !isNaN(parseFloat(v));
	return parseFloat(v) == v;
}

function fis_int(v) {
	if(!isNaN(parseInt(v)))
		return (parseInt(v) == v * 1);
	return false;
}

function fkey(s) {
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		if (/^key=[a-z0-9]{26}$/.test(cookies[i]))
			return s + cookies[i];
	}
	return s + 'key=abcdefghijklmnopqrstuvwxyz';
}

function fajaxerror() {
	alert('No se pudo completar la operaci&oacute;n, intente despu&eacute;s')
	ajax.hide()
	ajax_trabajando = false
}

function faddeventlistener(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on"+evType, fn);
		return r;
	} else {
		return false;
	}
}

function ftrim_form_elements(f) {
	for (var i = 0; i < f.elements.length; i++)
		switch (f.elements[i].type) {
			case 'text':
			case 'textarea':
				f.elements[i].value = ftrim(f.elements[i].value);
			default:
		}
}

function fis_any_selected(group) {
	document.control_target = null;
	var i, total_selected = 0;
	if (typeof(group.length) != 'undefined') {
		document.control_target = group[0];
		for (i = 0; i < group.length; i++) {
			if (group[i].checked) {
				++total_selected;
			}
		}
	} else {
		document.control_target = group;
		if (group.checked) {
			++total_selected;
		}
	}
	return total_selected;
}

function fupdate_list(response) {
	eval(response.responseText);
	var list = $(document.target_list);
	var idx;
	var items;
	try {
		while (list.options.length) {
			list.options[0] = null;
		}
		if (document.options_values.length == document.options_ids.length) {
			items = document.options_values.length;
			for (idx = 0; idx < items; idx++) {
				list.options[idx] = new Option(document.options_values[idx], document.options_ids[idx]);
			}
		}
	} catch (e) {}
}

function fload_values(_url, _parameters) {
	new Ajax.Request(_url,{method:'get',parameters:_parameters, onSuccess:fupdate_list, onFailure:fajaxerror});
}
