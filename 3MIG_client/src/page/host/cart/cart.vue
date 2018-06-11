<!-- 购物车页面 -->

<template>
    <div id = 'cart'>
    	<header>
            <Head title = '购物车' search = 'true'></Head>
        </header>
        <Loading :loading-show = 'isLoading'></Loading>
        <main>
            <div v-show = 'isLogin === false' class = 'no-login'>
                <span style="font-size: 0.32rem">登录后享受更多优惠</span>
                <span style="font-size: 0.24rem; color: rgba(0,0,0,.54)">去登录</span>
            </div>
            <div class = 'no-items'>
                
            </div>
            <guess-like></guess-like>
        </main>
    </div>
</template>

<script>

import guessLike from '../../../components/common/guessLike.vue'
import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'



export default {
  	name: 'cart',
  	data () {
  		return {
  			isLoading: false,
            isLogin: false,
            isHaveGoods: false,
  		}	
  	},
  	components: {
        'Head': Head,
  		'Loading': loading,
        'guess-like': guessLike
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
    },
    activated () {
        this.$store.commit('SHOW_FOOTMENU');
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
        }
	}
</style>
