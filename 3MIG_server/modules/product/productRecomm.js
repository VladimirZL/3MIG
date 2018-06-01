
/**   product页面推荐数据   **/

const request = require('request');

async function getProductRecommData (productId) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/product/recommend',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031058',
				'channel_id': '10529.0004164336391',
				'webp': '1',
				'product_id': productId
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

module.exports = getProductRecommData;