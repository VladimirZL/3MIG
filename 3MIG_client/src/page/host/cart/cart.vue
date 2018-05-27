<template>
    <div id="cart">
    	<header>
            <div class = 'empty-div'></div>
            <div class = 'cart-tittle'>购物车</div>
            <div class = 'cart-search'>
                <img src="../../../assets/icon/search1.svg">
            </div>
        </header>
        <Loading :loading-show = 'isLoading'></Loading>
        <main>
            <div v-show = 'isLogin === false' class = 'no-login'>
                <span style="font-size: 0.32rem">登录后享受更多优惠</span>
                <span style="font-size: 0.24rem; color: rgba(0,0,0,.54)">去登录</span>
            </div>
            <div class = 'no-items'>
                
            </div>
            <div class = 'recommend-box'>
                <div v-for = '(headerItem, headerIndex) in recomHeader'> 
                    <img :src = 'headerItem.img_url' :style = "{width: `${headerItem.w / 100}rem`, height: `${headerItem.h / 100}rem`}">
                </div>
                <div class = 'recom-list'>
                    <div v-for = '(item, recomIndex) in recomList' class = 'goods'>
                        <a @click = 'routerPath(item.action.type, item.action.path)'>
                            <div class = 'goods-img-box'>
                                <img :src = 'item.image_url'>
                            </div>
                            <div class = 'goods-info'>
                                <div class="goods-name"> {{ item.name }} </div>
                                <div class="goods-price"> {{ item.price }} </div> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import loading from '../../../components/common/loading.vue'

export default {
  	name: 'cart',
  	data () {
  		return {
  			isLoading: false,
            isLogin: false,
            isHaveGoods: false,
            recomHeader: [],
            recomList: []
  		}	
  	},
  	components: {
  		'Loading': loading
  	},
    methods: {
        getCartPageData () {
            this.isLoading = true;
            axios({
                method: 'get',
                url: 'http://localhost:3000/host/cartPage/data',
            })
            .then((res) => {
                this.isLoading = false;
                this.recomList = res.data.data.data.recom_list;
                this.recomHeader = res.data.data.data.header.body.items;
                console.log();
            })
            .catch((err) => {
                console.log(err);
            });
        },
        routerPath (type, id) {
            switch(type) {
                case 'product': this.$router.push({ path: '../product', query: {productId: `${id}`}});
                break;
                case 'channel': this.$router.push({ path: '../channel', query: {channelId: `${id}`}});
                break;
                case 'url': window.location.href = id;
                break;
                default: break;
            }
        }
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
    },
    created () {
        this.getCartPageData();
    },
}
</script>

<style lang="scss" scoped>
	#cart {
		header {
            display: flex;
            width: 100%;
            height: 0.9rem;
            position: fixed;
            font-size: 0.3rem;
            align-items: center;
            background-color: #f2f2f2;
            .empty-div {
                flex-grow: 2;
            }
            .cart-tittle {
                flex-grow: 7;
                text-align: center;
            }
            .cart-search {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                img {
                    width: 0.5rem;
                }
            }
        }
        main {
            padding-top: 0.9rem;
            padding-bottom: 1.11rem;
            .no-login {
                width: 100%;
                height: 1.04rem;
                padding: 0 0.32rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                // background-color: black;
                box-sizing: border-box;
            }
            .recommend-box {
                width: 7.2rem;
                .recom-list {
                    width: 7.2rem;
                    // display: flex;
                    .goods {
                        width: 3.6rem;
                        // float: left;
                        display: inline-block;
                        .goods-img-box {
                            width: 3.6rem;
                            img {
                                width: 100%;
                            }
                        }
                        .goods-info {
                            padding: 0.18rem 0.26rem;
                            white-space: nowrap;
                            .goods-name {
                                color: black;
                                font-size: 0.28rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            .goods-price {
                                margin-top: 0.1rem;
                                line-height: 0.44rem;
                                color: #ff6700;
                                padding-left: 0.2rem;
                                font-size: 0.3rem;
                                background-size: 0.2rem;
                                background-position: left;
                                background-repeat: no-repeat;
                                background-image: url('../../../assets/icon/RMB.svg');
                            }
                        }
                    }
                }
            }
        }
	}
</style>
