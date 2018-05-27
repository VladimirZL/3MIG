
/**   product页面数据   **/

const request = require('request');

async function getProductData (productId) {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/product/productView2_new',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1',
				'width': '720',
				'commodity_id': productId
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

module.exports = getProductData;