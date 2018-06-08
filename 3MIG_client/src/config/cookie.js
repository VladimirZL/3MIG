
export function setCookie (_name, value, expire) {
    let date = new Date();
	date.setSeconds(date.getSeconds() + expire);
	document.cookie = `_name=${escape(value)}; expire=${date.toGMTString()}`;
	console.log(document.cookie);
}

export function getCookie (_name) {
	if (document.cookie.length > 0) {
        let _start = document.cookie.indexOf(`${_name}=`);
        if (_start != -1) { 
            _start += _name.length + 1; 
            let _end = document.cookie.indexOf(`;${_start}`)
            if (_end == -1) {
            	_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(_start, _end));
         } 
    }
    return ''
}

export function delCookie (_name) {
	setCookie(_name, '', -1);
}