
/**   product页面推荐数据   **/

const request = require('request');

async function getCommentListData (good_id, page_index, type, is_show_img) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/comment/getList',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'commodity_id': good_id,
				'page_index': page_index,
				'orderby': type,
				'page_size': '10',
				'showimg': is_show_img,
				'need_detail': 'true',
				'append': '0'
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

module.exports = getCommentListData;