<!-- 产品列表页面 -->

<template>
    <div id="product-list">
 		<header>
 			<Head title = '商品列表' search = 'true'></Head>
 		</header>
 		<Loading :loading-show = 'isLoading'></Loading>
 		<main>
            <div class = 'app-list'>
                <goods-list-two 
                    v-for = '(item, index) in listData' 
                    :good-item = 'item'>
                </goods-list-two>
            </div>
  			<guess-like></guess-like>
 		</main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/head.vue'
import loading from '../../../components/common/loading.vue'
import guessLike from '../../../components/common/guessLike.vue'
import goodsListTwo from '../../../components/common/goodsListTwo.vue'

export default {
  	name: 'product-list',
  	data () {
  		return {
  			isLoading: false,
            listData: [],
  		}
  	},
  	components: {
  		'Head': Head,
  		'Loading': loading,
  		'guess-like': guessLike,
        'goods-list-two': goodsListTwo
  	},
    methods: {
        getProductListData () {
            axios({
                method: 'get',
                url: 'http://localhost:3000/host/product/list/data',
                params: {
                    categoryId: this.$route.params.id
                }
            })
            .then((res) => {
                console.log(res);
                let _data = res.data.data.data;
                this.listData = _data.list
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
  	created () {
        this.$store.commit('SHOW_FOOTMENU');
    },
    beforeMount () {
        this.getProductListData();
    }
}
</script>

<style lang="scss" scoped>
	#product-list {
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
            .app-list {
                width: 100%;
            }
        }
	}
</style>
