import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../config/cookie.js'


/***  host  ***/

import host from '@/page/host/host.vue'
import home from '@/page/host/home/home.vue'
import category from '@/page/host/category/category.vue'
import cart from '@/page/host/cart/cart.vue'
//product页面
import Product from '@/page/host/product/Product.vue'
import ProductView from '@/page/host/product/ProductView.vue'
import ProductList from '@/page/host/product/ProductList.vue'
//comment页面
import comment from '@/page/host/comment/comment.vue'
import commentView from '@/page/host/comment/commentView.vue'
import commentList from '@/page/host/comment/commentList.vue'
//channel页面
import Channel from '@/page/host/channel/Channel.vue'
//user页面
import user from '@/page/host/user/user.vue'
import SetFocus from '@/page/host/set/SetFocus.vue'
//search页面
import search from '@/page/host/search/search.vue'
import searchShow from '@/page/host/search/searchShow.vue'
import searchList from '@/page/host/search/searchList.vue'
//会员中心页面
import Vip from '@/page/host/vip/Vip.vue'
//服务中心页面
import Service from '@/page/host/service/Service.vue'
//小米之家页面
import Mihome from '@/page/host/mihome/Mihome.vue'
//F码购买页面
import Fcode from '@/page/host/fcode/Fcode.vue'


/***  login  ***/
import Login from '@/page/login/Login.vue'



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
                    path: '/host/product',
                    name: 'host-product',
                    component: Product,
                    children: [
                        {
                            path: '/host/product/view/:id',
                            name: 'host-product-view',
                            component: ProductView
                        },
                        {
                            path: '/host/product/list/:id',
                            name: 'host-product-list',
                            component: ProductList
                        }
                    ]
                },
                {
                    path: '/host/comment',
                    name: 'host-comment',
                    component: comment,
                    children: [
                        {
                            path: '/host/comment/list/:id',
                            name: 'host-comment-list',
                            component: commentList
                        },
                        {
                            path: '/host/comment/view/:id',
                            name: 'host-comment-view',
                            component: commentView
                        }
                    ]
                },
                {
                    path: '/host/channel/:id',
                    name: 'host-channel',
                    component: Channel
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
                            meta: {
                                needLogin: true,
                            }
                        },
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
                    name: 'host-services',
                    component: Service
                },
                {
                    path: '/host/mihome',
                    name: 'host-mihome',
                    component: Mihome
                },
                {
                    path: '/host/fcode',
                    name: 'host-fcode',
                    component: Fcode,
                    meta: {
                        needLogin: true,
                    }

                },
                {
                    path: '/host/set',
                    name: 'host-set',
                    component: SetFocus,
                    meta: {
                        needLogin: true,
                    }
                },
            ]   
        },
        {
            name: 'login',
            path: '/login',
            component: Login,
        }
    ]
})

router.beforeEach((to, from, next) => {

    if (to.meta.needLogin) {
        if (getCookie('_name') !== '') {
            next();
        } else {
            next({
                name: 'login',
                query: {
                    redirect: 'host-user'
                }
            })
        }
    } else {
        next();
    }

})

export default router
