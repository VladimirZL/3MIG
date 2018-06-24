<template>
    <div id = 'search-list'>
    	<header>
    		<Head :title = 'propTitle' search = 'true'></Head>
    	</header>
    	<loading :loading-show = 'isLoading'></loading>
    	<main>
    		<div class = 'app-list'>
    			<goods-list-one 
    				v-for = '(item, index) in listData' 
    				:good-item = 'item'>
    			</goods-list-one>
    		</div>
    	</main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'
import goodsListOne from '../../../components/common/goodsListOne.vue'

export default {
  	name: 'searchList',
  	data () {
  		return {
  			isLoading: false,
  			propTitle: this.$route.query.key,
  			listData: []
  		}
	},
	components: {
		'Head': Head,
		'loading': loading,
		'goods-list-one': goodsListOne
	},
	methods: {
		//请求数据列表信息
		getSearchListData () {
  			this.isLoading = true;
  			axios({
                method: 'get',
                url: 'http://localhost:3000/host/searchPage/list',
                params: {
                	listName: this.propTitle
                }
            })
            .then((res) => {
                this.isLoading = false;
                let _data = res.data.data.data;
                this.listData = _data.product.product;
                console.log(this.listData);
            })
            .catch((err) => {
                console.log(err);
            });
  		},
	},
	beforeMount () {
		this.getSearchListData();
	}
}
</script>

<style lang="scss" scoped>
	#search-list {
		width: 100%;
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
			width: 100%;
			padding-top: 0.9rem;
			.app-list {
				width: 100%;
			}
		}
	}
</style>
