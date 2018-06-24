// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import directive from './config/directives.js'
//外部插件
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './style/common.css'
import 'vue2-animate/dist/vue2-animate.min.css'

//内部(自己写的)
import rem from './config/rem'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  VueAwesomeSwiper,
  components: { App },
  template: '<App/>'
})