
/**   cart页面推荐数据   **/

const request = require('request');

async function getCartpageData () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/home/recommendBlank',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'source': 'list',
				'recommend_tag': 'XMGUEST-114C2ED0-576C-11E8-AD16-7D4491DD1115'
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

module.exports = getCartpageData;