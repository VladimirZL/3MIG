import Vue from 'vue'
import Router from 'vue-router'

/***  host  ***/

import host from '@/page/host/host.vue'
import home from '@/page/host/home/home.vue'
import category from '@/page/host/category/category.vue'
import cart from '@/page/host/cart/cart.vue'
//user页面
import user from '@/page/host/user/user.vue'
//search页面
import search from '@/page/host/search/search.vue'
import searchShow from '@/page/host/search/searchShow.vue'
import searchList from '@/page/host/search/searchList.vue'
//会员中心页面
import Vip from '@/page/host/vip/Vip.vue'

//product页面
import productView from '@/page/product/productView/productView.vue'
import productList from '@/page/product/productList/productList.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [
        {
            path: '',
            name: 'host',
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
                    name: 'host-home',
                    component: home
                },  
                {
                    path: '/host/category',
                    name: 'host-category',
                    component: category
                },
                {
                    path: '/host/cart',
                    name: 'host-cart',
                    component: cart
                },
                {
                    path: '/host/user',
                    name: 'host-user',
                    component: user,
                    children: [
                        {
                            path: '/host/user/coupon',
                            name: 'host-user-coupon',
                        },
                        {
                            path: '/host/user/set',
                            name: 'host-user-set',
                        }
                    ]
                },
                {
                    path: '/host/search',
                    name: 'host-search',
                    component: search,
                    children: [
                        {
                            path: '',
                            redirect: '/host/search/show'
                        },
                        {
                            path: '/host/search/show',
                            name: 'host-search-show',
                            component: searchShow
                        },
                        {
                            path: '/host/search/list',
                            name: 'host-search-list',
                            component: searchList
                        }
                    ]
                },
                {
                    path: '/host/vip',
                    name: 'host-vip',
                    component: Vip
                },
                {
                    path: '/host/services',
                    name: 'host-services'
                },
                {
                    path: '/host/mihome',
                    name: 'host-mihome'
                },
                {
                    path: '/host/fcode',
                    name: 'host-fcode'
                },
            ]   
        },
        {
            path: '/product',
            component: productView,
            children: [
                {
                    name: 'product-view',
                    path: '/product/view/:id',
                    component: productView
                },
                {
                    name: 'product-list',
                    path: '/product/list/:id',
                    component: productList
                }
            ]
        }
    ]
})

router.beforeEach((to, from, next) => {
    switch(to.name) {
        case 'host-user-coupon': console.log('需要登陆');
        break;
        case 'host-fcode': console.log('需要登陆');
        break;
        case 'host-user-set': console.log('需要登陆');
        break;

    }
    console.log(to);
    next();
})

export default router


