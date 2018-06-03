
const request = require('request');

async function getPhoneVcode (phone_number, vercode = '') {
	console.log(vercode);
	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://account.xiaomi.com/pass/sendServiceLoginTicket?_dc=1526804827764',
			method: 'POST',
			encoding: null,
			headers: {
				'Cookie': 'dc=sd; pass_ua=web; deviceId=wb_c5a8919b-1f96-424b-b610-01516a012179; uLocale=zh_CN; JSESSIONID=aaav0FTHlUmxA9GVxgJnw; pass_trace=tSIC6sdabOpSAU5ym+daYMhePgOMopO/z+79wr2eFdUQ3zCCG63khQOiazN0V1eH1AjMSxBkiiE8q7hTzsL/qpsg9ZqPMQCZk60hQUJmnNvSVrBg233EWyGPivzMPoyP',
				'Referer': 'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket',
			},
			form: {
				'sid': 'passport',
				'user': phone_number,
				'captCode': vercode
				// 'contentType': '160033',
				// 'userId': '-1',
				// 'address': '18392192893',
				// 'captCode': 'QHX8D'
			}
		};
		request(options, (err, res, body) => {
			console.log(body.toString().split('&&&START&&&')[1]);
			if(!err) {
				resolve({
					success: true,
					data: body.toString().split('&&&START&&&')[1]
				});
			} else {
				reject({
					success: false,
					err: err
				});
			}
		});
	});

}

getPhoneVcode('18392192899', '2ARXX');

module.exports = getPhoneVcode;