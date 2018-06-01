
/**   search页面输入数据   **/

const request = require('request');

async function getSearchkeyData (_key) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/search/wordList',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'query': _key
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

module.exports = getSearchkeyData;