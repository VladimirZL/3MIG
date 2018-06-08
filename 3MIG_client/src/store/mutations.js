import {
	SHOW_FOOTMENU,
	HIDDEN_FOOTMENU
} from './mutation-types.js'

export default {
	[SHOW_FOOTMENU] (state) {
		state.showFootMenu = true;
	},
	[HIDDEN_FOOTMENU] (state) {
		state.showFootMenu = false;
	},
}