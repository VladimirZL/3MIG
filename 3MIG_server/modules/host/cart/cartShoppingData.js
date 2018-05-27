
/**   cart页面购物车数据   **/

const request = require('request');

async function getCartshoppiongData () {

	return new Promise((resolve, reject) => {
		let options = {
			url: 'https://m.mi.com/v1/cart/index',
			method: 'POST',
			encoding: null,
			headers: {
				'Referer': 'https://m.mi.com/',
				'Cookie': 'mstuid=1526554457948_4746; xmuuid=XMGUEST-04660C20-5B2E-11E8-B1FF-959ACB305025; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1526635660,1526638013,1526638026,1526711386; hd_log_code=recom_list_0-3%23eid%3D15%3A0%3A0%3A0%3A0%3A0%3A0%3A0%3A0%3A0%26tid%3DBlankRec-78cpaAwFqwUTL0eVFuqCzg%3D%3D%26page%3Dlist%26pid%3D7147; log_code=aa6b36fbc8a2bd55-915b0de1b4b555c6|https%3A%2F%2Fm.mi.com%2F; pageid=df5f1a9f995c0818; mstz=||278539633.111|||; xm_vistor=1526554457948_4746_1526711383838-1526711729796; Hm_lpvt_4982d57ea12df95a2b24715fb6440726=1526712151'
			},
			form: {
				'client_id': '180100031051',
				'channel_id': '0',
				'webp': '1'
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
getCartshoppiongData();
module.exports = getCartshoppiongData;

