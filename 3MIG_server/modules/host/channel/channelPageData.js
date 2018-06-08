
/**   product页面数据   **/

const request = require('request');

async function getChannelData (productId) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/home/recommendChannel',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'id': productId
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

module.exports = getChannelData;