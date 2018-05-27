
/**   home页面菜单数据   **/

const request = require('request');

async function getHomemenuContent () {

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
				'page_type': 'recommend',
				'recommend_tag': 'XMGUEST-7E0DA940-5325-11E8-8DC9-2B18C0C35A66'
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

module.exports = getHomemenuContent;