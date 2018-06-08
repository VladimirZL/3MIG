const request = require('request');

async function doLogin (_user, _phoneVcode) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://account.xiaomi.com/pass/phoneInfo?_dc=1528014822907',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://account.xiaomi.com/pass/serviceLogin?callback=https%3A%2F%2Fm.mi.com%2Fv1%2Fauthorize%2Fsso_callback%3Ffollowup%3Dhttps%253A%252F%252Fm.mi.com%252Fuser%26sign%3DZWJiMDc5YWVjOTNkNGE5YzM4Mjc2Y2I1MGYxMmE0YmY4MmRkMDY1Ng%2C%2C&sid=mi_eshopm_go&_bal=true&_loginSign=ticket&_loginType=ticket',
			},
			form: {
				'user': _user,
				'ticket': _phoneVcode
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
// doLogin();

module.exports = doLogin;