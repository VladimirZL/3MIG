import {
	SHOW_FOOTMENU,
	HIDDEN_FOOTMENU,

	CART_ADD_GOODS,
	CART_DELETE_GOODS
} from './mutation-types.js'

export default {
	[SHOW_FOOTMENU] (state) {
		state.showFootMenu = true;
	},
	[HIDDEN_FOOTMENU] (state) {
		state.showFootMenu = false;
	},
	// [CART_ADD_GOODS] (state, {
	// 	num,
	// 	name
	// }) {
	// 	let cart = state.cartList;
	// 	console.log(state);
	// },
	// [CART_DELETE_GOODS] (state) {

	// }
}