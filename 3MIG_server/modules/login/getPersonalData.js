 const request = require('request');

async function getPersonalBasics () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/user/index',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/user',
				'Cookie': 'mstuid=1528197361727_2145; serviceToken=3L7MO8nTk9mYm8ke7lTbyt1OGiltRRmOulUwz9MP4Xh1yL8u445nq7NlbNZ5wcpqkPxJV39EwngeRGkO29e%2FNOAyaDJF48X6FyUc1wQtAZopjbGppM%2FN1ZBwutUx8FIHadZn%2F3LXYV3xfMF3MmT8%2Bg7%2FvfDTzxyeWw3WrEAy7a8%3D; euid=us6jyJ1mQCeNcPRB2FfRgg%3D%3D; cUserId=zH9RTeqW_1NfYQSxCEWqoGX0yv4; mUserId=9O66ChsIk%2F03fJL8oJNUgV7UXtHYQYJPmtfTFzVZz6s%3D; xmuuid=XMGUEST-14C0D760-692C-11E8-B5CC-EB082C0CF862; lastsource=localhost; client_id=180100031058; masid=17409.0378; hd_log_code=31waphomecells_auto_fill002007%23t%3Dad%26act%3Dother%26page%3Dhome%26page_id%3D26%26bid%3D3000169.2%26adp%3D216%26adm%3D7736; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1528207191,1528249871,1528268024,1528269651; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1528270369; pageid=3f561749dabcaf76; msttime=https%3A%2F%2Fm.mi.com%2Fuser%2Fset; msttime1=https%3A%2F%2Fm.mi.com%2Fuser%2Fset; log_code=337ac0b3d97525ad-8e0702d6fef879e8|https%3A%2F%2Fm.mi.com%2Fuser%2Fset; mstz=||1796100439.370|||; xm_vistor=1528197361727_2145_1528267907630-1528270490758'
			},
			form: {
				'client_id': '180100031058',
				'channel_id': '17409.0378',
				'webp': '1',
				'isLogin': 'false'
			}
		};
		request(options, (err, res, body) => {
			// console.log(res.headers);
			if(!err) {
				console.log(body.toString());
				resolve({
					success: true,
					data: body.toString().split('&&&START&&&')[1]
				});
			} else {
				console.log(err);
				reject({
					success: false,
					err: err
				});
			}
		});
	});

}

async function getPersonalAddress () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/address/list',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/user/set',
				'Cookie': 'mstuid=1528197361727_2145; xmuuid=XMGUEST-14C0D760-692C-11E8-B5CC-EB082C0CF862; client_id=180100031058; masid=17409.0378; hd_log_code=31waphomecells_auto_fill002007%23t%3Dad%26act%3Dother%26page%3Dhome%26page_id%3D26%26bid%3D3000169.2%26adp%3D216%26adm%3D7736; serviceToken=9bSoPcpbZXyq%2BG0pdRR9XqZPLeYVeDBvwi6SlbEVEQcl5zuZzfZgf8Rpj7ptNje87NZQK81ecN15yv3mZZAX21TrHkLamzpc3TSYoLfGkn12X1aqrBeC76rchA%2BW8ytUFniYqyy0TvIHsqt6F3C86c0Is8%2Bm1dsMRhuuBAb3OgI%3D; mishoptag=2oAdldlm4OXDBaYfZN6MahulhrQJQSHSt+93+S/B9W8=; euid=us6jyJ1mQCeNcPRB2FfRgg%3D%3D; cUserId=zH9RTeqW_1NfYQSxCEWqoGX0yv4; mUserId=9O66ChsIk%2F03fJL8oJNUgTe3YF4tak1V8r1mn5lX6EY%3D; xm_order_btauth=4918466c1bb48588967ddf893819dea9; xm_link_history=O2NRufE1jfOH+F2jC47Rbd80nMBY8nN4qxQgq6fN/amQCoNYv429Oefda4BvPr+j; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1528268024,1528269651,1528271159,1528271180; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1528271180; lastsource=account.xiaomi.com; pageid=3f561749dabcaf76; msttime=https%3A%2F%2Fm.mi.com%2Fuser%2Fset; msttime1=https%3A%2F%2Fm.mi.com%2Fuser%2Fset; log_code=3f561749dabcaf76-1d5cbe8a031620d4|https%3A%2F%2Fm.mi.com%2Fuser%2Fset; mstz=||1796100439.387||https%253A%252F%252Faccount.xiaomi.com%252Fpass%252Fservicelogin%253Fcallback%253Dhttps%25253a%25252f%25252fm.mi.com%25252fv1%25252fauthorize%25252fsso_callback%25253ffollowup%25253dhttps%2525253a%2525252f%2525252fm.mi.com%2525252fuser%252526sign%25253dzwjimdc5ywvjotnknge5yzm4mjc2y2i1mgyxmme0ymy4mmrkmdy1ng%25252c%25252c%257Csid%253Dmi_eshopm_go%257C_bal%253Dtrue%257C_loginsign%253Dticket%257C_logintype%253Dticket|https%25253A%25252F%25252Faccount.xiaomi.com%25252Fpass%25252Fservicelogin%25253Fcallback%25253Dhttps%2525253a%2525252f%2525252fm.mi.com%2525252fv1%2525252fauthorize%2525252fsso_callback%2525253ffollowup%2525253dhttps%252525253a%252525252f%252525252fm.mi.com%252525252fuser%25252526sign%2525253dzwjimdc5ywvjotnknge5yzm4mjc2y2i1mgyxmme0ymy4mmrkmdy1ng%2525252c%2525252c%25257Csid%25253Dmi_eshopm_go%25257C_bal%25253Dtrue%25257C_loginsign%25253Dticket%25257C_logintype%25253Dticket; xm_vistor=1528197361727_2145_1528267907630-1528271308106'
			},
			form: {
				'client_id': '180100031058',
				'channel_id': '17409.0378',
				'address_type': 'undefined',
				'webp': '1',
				'type': 'user',
				'shopapi_version': '2'
			}
		};
		request(options, (err, res, body) => {
			// console.log(res.headers);
			if(!err) {
				console.log(body.toString());
				resolve({
					success: true,
					data: body.toString().split('&&&START&&&')[1]
				});
			} else {
				console.log(err);
				reject({
					success: false,
					err: err
				});
			}
		});
	});

}
getPersonalAddress();

// export getPersonalBasics;
// export getPersonalAddress;