
/**   home页面所有数据   **/

const request = require('request');

async function getHomepageData (option_id, option_type) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/home/page',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031058',
				'channel_id': '17409.0356',
				'webp': '1',
				'page_type': option_type,
				'page_id': option_id
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

module.exports = getHomepageData;