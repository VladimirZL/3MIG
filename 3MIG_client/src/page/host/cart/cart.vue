<!-- 购物车页面 -->

<template>
    <div id = 'cart'>
        <my-layer 
            :content-type = 'layerType'
            :is-layer = 'isLayer'>
        </my-layer>
    	<header>
            <Head title = '购物车' search = 'true'></Head>
        </header>
        <Loading :loading-show = 'isLoading'></Loading>
        <main>
            <div v-show = 'isLogin === false' class = 'no-login'>
                <span style="font-size: 0.32rem">登录后享受更多优惠</span>
                <span style="font-size: 0.24rem; color: rgba(0,0,0,.54)">去登录</span>
            </div>
            <div class = 'no-items' v-if = 'this.$store.state.cart.cartInfo.goodsInfo.length === 0'>
                <div class = 'cart-no-items'>
                    <span>
                        购物车是空的
                    </span>
                </div>
                <div class = 'cart-go-shopping' >
                    <router-link :to = "{name: 'host-home'}">
                        去逛逛
                    </router-link>
                </div>
            </div>
            <div v-else class = 'cart-list'>
                <div class = 'cart-items' v-for = '(cartItem, index) in this.$store.state.cart.cartInfo.goodsInfo'>
                    <div class = 'cart-items-choose' @click = 'chooseThis(index)'>
                        <div :class = "['cart-items-choose-btn', {'choose-this': cartItem.choose_this}]">
                            <img src = '../../../assets/icon/yes2.svg'>
                        </div>
                    </div>
                    <div class = 'cart-items-content'>
                        <router-link 
                            :to = "{'name': 'host-product-view', 'params': {'id': `${cartItem.goodsId}`}}" 
                            tag = 'div' 
                            class = 'cart-items-content-img' >
                            <img :src = 'cartItem.image_url'>
                        </router-link>
                        <div class = 'cart-items-content-info'>
                            <div style = 'line-height: 0.35rem;'> {{cartItem.product_name }}</div>
                            <div class = 'info-price'> 售价: {{ cartItem.price }}元</div>
                            <div class = 'info-num'>
                                <num-counter 
                                    :buy-num = 'cartItem.num'
                                    :buy-limit = 'cartItem.buy_limit'
                                    :buy-index = 'index'
                                    @changeNum = 'changeNumber'
                                    @noChange = 'showLayer'>
                                </num-counter>
                                <div class = 'info-delete' @click = 'deleteGoods(index)'>
                                    <img src = '../../../assets/icon/delete.png'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = 'cart-point'>
                    温馨提示：本网站用于Vue学习练习，如想要购买请去小米商城
                </div>
            </div>
            <guess-like></guess-like>
        </main>
        <footer>
            <div class = 'cart-foot' v-show = 'this.$store.state.cart.cartInfo.goodsInfo.length !== 0'>
                <div class = 'cart-foot-box cart-foot-info'>
                    <span>
                        共{{ this.$store.state.cart.cartInfo.goodsNum }}件 金额：
                    </span>
                    <br>
                    <span class = 'cart-foot-info-price'>
                        {{ this.$store.state.cart.cartInfo.orderPrice }}
                    </span>
                    元
                </div>
                <router-link 
                    tag = 'div' 
                    :to = "{'name': 'host-home'}" 
                    class = 'cart-foot-box cart-foot-shop'>
                    继续购物        
                </router-link>
                <div class = 'cart-foot-box cart-foot-pay'>
                    去结算
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'
import myLayer from '../../../components/common/myLayer.vue'
import guessLike from '../../../components/common/guessLike.vue'
import numCounter from '../../../components/common/numCounter.vue'



export default {
  	name: 'cart',
  	data () {
  		return {
            //是否登陆
            isLogin: false,
            //是否加载
  			isLoading: false,
            //是否有商品
            isHaveGoods: false,
            //是否显示弹窗
            isLayer: false,
            layerType: '',
  		}	
  	},
  	components: {
        'Head': Head,
  		'Loading': loading,
        'my-layer': myLayer,
        'guess-like': guessLike,
        'num-counter': numCounter
  	},
    methods: {
        // getCartShoppingData () {
        //     this.isLoading = true;
        //     axios({
        //         method: 'get',
        //         url: 'http://localhost:3000/host/cartPage/shopping',
        //     })
        //     .then((res) => {
        //         this.isLoading = false;
        //         console.log(res.data.data.data);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // },

        //选择这个商品
        chooseThis (_index) {
            this.$store.commit('cart/HIDDEN_ITEM', _index);
        },
        //改变数量
        changeNumber (_num, _index, _type) {
            if (_type === 'add') {
                this.$store.commit('cart/INCREASE_NUM', {
                    _index: _index,
                    _num: 1
                });
            } else {
                this.$store.commit('cart/REDUCE_NUM', _index);
            }
        },
        //删除商品
        deleteGoods (_index) {
            this.$store.commit('cart/DELETE_ITEM', _index);
            if (this.$store.state.cart.cartInfo.goodsInfo.length === 0) {
                this.$store.commit('SHOW_FOOTMENU');
            }
        },
        //显示弹窗
        showLayer (_type) {
            this.isLayer = true;
            this.layerType = _type;
            let _time = setTimeout(() => {
                this.isLayer = false;
                clearTimeout(_time);
            }, 2000);
        }
    },
    created () {
        if (this.$store.state.cart.cartInfo.goodsInfo.length === 0) {
            this.$store.commit('SHOW_FOOTMENU');
        } else {
            this.$store.commit('HIDDEN_FOOTMENU');
        }
    }
}
</script>

<style lang="scss" scoped>
	#cart {
        padding-bottom: 1.11rem;
		header {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9999;
            height: 0.9rem;
            position: fixed;
        }
        main {
            height: 100%;
            overflow: scroll;
            padding-top: 0.9rem;
            .no-login {
                width: 100%;
                display: flex;
                height: 1.04rem;
                padding: 0 0.32rem;
                align-items: center;
                box-sizing: border-box;
                justify-content: space-between;
            }
            .no-items {
                width: 100%;
                padding: 0.2rem;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background-color: rgb(235, 235, 235);
                .cart-no-items {
                    line-height: 0.8rem;
                    padding: 0 0.16rem 0 0.96rem;
                    background: url('../../../assets/icon/cart3.png');
                    background-repeat: no-repeat;
                    background-size: 0.8rem 0.8rem;
                    span {
                        opacity: 0.27;
                    }
                }
                .cart-go-shopping {
                    opacity: 0.87;
                    line-height: 0.5rem;
                    padding: 0 0.24rem;
                    border: 1px solid rgba(0,0,0,.15);
                }
            }
            .cart-list {
                .cart-items {
                    width: 100%;
                    display: inline-flex;
                    padding: 0.24rem 0;
                    border-bottom: 1px solid #eee;
                    .cart-items-choose {
                        width: 0.8rem;
                        display: flex;
                        align-items: center;
                        box-sizing: border-box;
                        justify-content: center;
                        .cart-items-choose-btn {
                            display: flex;
                            width: 0.4rem;
                            height: 0.4rem;
                            align-items: center;
                            border-radius: 100%;
                            background-color: white;
                            justify-content: center;
                            border: 1px solid rgba(0,0,0,.15);
                            img {
                                height: 0.2rem;
                            }
                        }
                        .choose-this {
                            border-color: #0AAD64;
                            background-color: #0AAD64;
                        }
                    }
                    .cart-items-content {
                        width: 6.4rem;
                        display: flex;
                        .cart-items-content-img {
                            box-sizing: border-box;
                            border: 1px solid #eee;
                            margin-right: 0.2rem;
                            img {
                                height: 1.8rem;
                            }
                        }
                        .cart-items-content-info {
                            width: 4.2rem;
                            opacity: 0.8;
                            font-size: 0.28rem;
                            .info-price {
                                color: #999;
                                padding: 0.12rem 0;
                                font-size: 0.24rem;
                                margin-bottom: 0.12rem;
                            }
                            .info-num {
                                width: 100%;
                                overflow: hidden;
                                .info-delete {
                                    float: right;
                                    img {
                                        width: 0.6rem;
                                    }
                                }
                            }   
                        }
                    }
                }
                .cart-point {
                    color: #999;
                    font-size: 0.22rem;
                    padding: 0.2rem 0.3rem;
                    border-top: 1px solid #f6f6f6;
                }
            }
        }
        footer {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 1.11rem;
            .cart-foot {
                width: 100%;
                height: 100%;
                display: inline-flex;
                .cart-foot-box {
                    height: 100%;
                    width: 33.33333%;
                    text-align: center;
                    font-size: 0.28rem;
                    letter-spacing: 1px;
                    // line-height: 1.11rem;
                }
                .cart-foot-info {
                    color: #999;
                    font-size: 0.26rem;
                    padding-top: 0.15rem;
                    line-height: 0.4rem;
                    background-color: white;
                    .cart-foot-info-price {
                        color: #0AAD64;
                        font-size: 0.4rem;
                        font-weight: bold;
                    }
                }
                .cart-foot-shop {
                    line-height: 1.11rem;
                    background-color: #f4f4f4;
                }
                .cart-foot-pay {
                    color: white;
                    line-height: 1.11rem;
                    background-color: #0AAD64;
                }
            }
        }
	}
</style>
