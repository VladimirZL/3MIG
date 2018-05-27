const request = require('request');

async function getVerCode () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://account.xiaomi.com/pass/getCode?icodeType=login&1526803562309',
			method: 'GET',
			encoding: null,
			headers: {
				'Referer': 'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket',
			},
			// form: {
			// 	'contentType': '160033',
			// 	'userId': '-1',
			// 	'address': '18392192893',
			// 	'sid': 'passport',
			// 	'user': '18392192892',
			// }
		};
		request(options, (err, res, body) => {
			console.log(res.headers);
			if(!err) {
				let result = {
					vcode: `data:image/Gif;base64,${body.toString('base64')}`,
					session: res.headers['set-cookie'][1]
				}
				resolve({
					success: true,
					data: result
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

// getVerCode();

module.exports = getVerCode;