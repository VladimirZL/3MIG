
/**   category页面所有数据   **/

const request = require('request');

async function getCategorypageData () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/home/category_v2',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1'
			}
		};
		request(options, (err, res, body) => {
			if(!err) {
				resolve({
					success: true,
					data: body.toString()
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

module.exports = getCategorypageData;