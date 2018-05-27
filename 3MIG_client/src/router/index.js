import Vue from 'vue'
import Router from 'vue-router'
//host页面
import host from '@/page/host/host.vue'
import home from '@/page/host/home/home.vue'
import category from '@/page/host/category/category.vue'
import cart from '@/page/host/cart/cart.vue'
import user from '@/page/host/user/user.vue'
//product页面
import product from '@/page/product/product.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	routes: [
  		{
    		path: '',
    		redirect: '/host',
    	},
    	{
      		path: '/host',
      		component: host,
      		children: [
      			{
      				path: '',
      				redirect: '/host/home',
      			},
	      		{
	      			path: '/host/home',
	      			component: home
	      		},	
	      		{
	      			path: '/host/category',
	      			component: category
	      		},
	      		{
	      			path: '/host/cart',
	      			component: cart
	      		},
	      		{
	      			path: '/host/user',
	      			component: user
	      		}
      		]	
    	},
    	{
    		path: '/product',
    		component: product
    	}
  	]
})
