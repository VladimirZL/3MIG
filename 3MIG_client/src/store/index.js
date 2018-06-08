import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	showFootMenu: true, //底部菜单是否出现
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})