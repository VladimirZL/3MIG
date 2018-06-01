
/**   search页面列表数据   **/

const request = require('request');

async function getSearchlistData (_query) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/hisearch/se_home',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'page_index': '1',
				'page_size': '20',
				'query': _query
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

module.exports = getSearchlistData;