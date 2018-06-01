<template>
    <div id="search-list">
    	<Head :title = 'propTitle' search = 'true'></Head>
    	<Loading :loading-show = 'isLoading'></Loading>
    	<main>
    		<div class = 'app-list'>
    			<div class = 'one-list' v-for = '(item, index) in listData'>
    				<router-link tag = 'a' :to = "{ 'name': 'product-view', params: {id: `${item.action.path}`}}">
    					<div class = 'list-img'>
    						<img :src = 'item.image_url'>
    					</div>
    					<div class = 'list-info'>
    						<div class = 'info-name'>
    							<span> {{ item.product_name }} </span>
    						</div>
    						<div class = 'info-des' v-html = 'item.product_desc'></div>
    						<div class = 'info-price'>
    							<span> {{ item.price_min }} </span>
    						</div>
    					</div>
    				</router-link>
    			</div>
    		</div>
    	</main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'

export default {
  	name: 'search-list',
  	data () {
  		return {
  			isLoading: false,
  			propTitle: this.$route.query.key,
  			listData: []
  		}
	},
	components: {
		'Head': Head,
		'Loading': loading
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
		main {
			width: 100%;
			padding-top: 0.9rem;
			.app-list {
				width: 100%;
				.one-list {
					padding: 0 0 0.06 0rem;
					a {
						display: inline-flex;
						align-items: center;
						border-bottom: 1px solid #E4E4E4;
						.list-img {
							width: 3rem;
							height: 3rem;
							img {
								width: 3rem;
							}
						}
						.list-info {
							padding: 0 0.32rem 0.08rem;
							.info-name {
								font-size: 0.28rem;
								margin-bottom: 0.16rem;
							}
							.info-des {
								height: 0.6rem;
								overflow: hidden;
								font-size: 0.23rem;
								margin-bottom: 0.16rem;
								line-height: 0.3rem;
							}
							.info-price {
								color: #0AAD64;
								font-size: 0.32rem;
								padding-left: 0.3rem;
								background: url('../../../assets/icon/rmb1.svg');
								background-position: left;
								background-repeat: no-repeat;
								background-size: 0.3rem;
							}
						}
					}
				}
			}
		}
	}
</style>
