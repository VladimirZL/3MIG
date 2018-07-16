

const state = {

	cartInfo: {
		goodsInfo: [],
		goodsNum: 0,
		orderPrice: 0
	},

	// goodsInfo: {
	// 	//购买限制
	// 	buy_limit: 0,
	// 	//是否可以删除
	// 	can_delete: true,
	// 	//商品id
	// 	goodsId: '',
	// 	//商品图片
	// 	image_url: '',
	// 	//数量
	// 	num: 0,
	// 	//价格
	// 	price: 0,
	// 	//产品名字
	// 	product_name: '',
	//  //是否显示
	//  choose_this: true,
	// 	//产品类型
	// 	showType: ''
	// }

};

const actions = {

	// checkoutAdd ({ commit, state }, _goodsInfo) {
	// 	let _addNum = true;
	// 	for (let key in state.cartInfo.goodsInfo) {
	// 		if (state.cartInfo.goodsInfo[key].goodsId === _goodsInfo.goodsId && state.cartInfo.goodsInfo[key].showType === _goodsInfo.showType) {
	// 			if ((state.cartInfo.goodsInfo[key].num + _goodsInfo.num) <= state.cartInfo.goodsInfo[key].buy_limit) {
	// 				commit('INCREASE_NUM', {
	// 					_index: key, 
	// 					_num: _goodsInfo.num
	// 				});
	// 			} else {
	// 				console.log('不能再加了');
	// 				console.log(state.cartInfo.goodsInfo[key].num);
	// 			}
	// 			_addNum = false;
	// 			break;
	// 		} else {
	// 			_addNum = true;
	// 		}
	// 	}
	// 	if (_addNum === true) {
	// 		commit('ADD_GOODS', _goodsInfo)
	// 	}
	// }

};

const mutations = {

	//增加商品
	ADD_GOODS (state, _goodsInfo) {
		state.cartInfo.goodsInfo.push(_goodsInfo);

		state.cartInfo.goodsNum += _goodsInfo.num;
		state.cartInfo.orderPrice += (_goodsInfo.num * _goodsInfo.price);
	},
	//增加数量
	INCREASE_NUM (state, { _index, _num }) {
		state.cartInfo.goodsInfo[_index].num += _num;
		if (state.cartInfo.goodsInfo[_index].choose_this) {
			state.cartInfo.goodsNum += _num;
			state.cartInfo.orderPrice += (_num * parseInt(state.cartInfo.goodsInfo[_index].price));
		}
	},
	//减少数量
	REDUCE_NUM (state, _index) {
		state.cartInfo.goodsInfo[_index].num--;
		if (state.cartInfo.goodsInfo[_index].choose_this) {
			state.cartInfo.goodsNum -= 1;
			state.cartInfo.orderPrice -= parseInt(state.cartInfo.goodsInfo[_index].price);
		}
	},
	//隐藏项目
	HIDDEN_ITEM (state, _index) {
		state.cartInfo.goodsInfo[_index].choose_this = !state.cartInfo.goodsInfo[_index].choose_this;
		if (state.cartInfo.goodsInfo[_index].choose_this === false) {
			state.cartInfo.goodsNum -= state.cartInfo.goodsInfo[_index].num;
			state.cartInfo.orderPrice -= (state.cartInfo.goodsInfo[_index].num * state.cartInfo.goodsInfo[_index].price);
		} else {
			state.cartInfo.goodsNum += state.cartInfo.goodsInfo[_index].num;
			state.cartInfo.orderPrice += (state.cartInfo.goodsInfo[_index].num * state.cartInfo.goodsInfo[_index].price);
		}
	},
	//删除项目
	DELETE_ITEM (state, _index) {
		state.cartInfo.goodsNum -= state.cartInfo.goodsInfo[_index].num;
		state.cartInfo.orderPrice -= (state.cartInfo.goodsInfo[_index].num * state.cartInfo.goodsInfo[_index].price);
		state.cartInfo.goodsInfo.splice(_index, 1);
		console.log(state.cartInfo.goodsInfo);
	}
}

export default {
  	namespaced: true,
  	state,
  	// getters,
  	actions,
  	mutations
}