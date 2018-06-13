
/**   product页面推荐数据   **/

const request = require('request');

async function getCommentViewData (comment_id) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/comment/view',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'comment_id': comment_id,
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

module.exports = getCommentViewData;