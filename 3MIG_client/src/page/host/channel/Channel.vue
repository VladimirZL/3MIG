<template>
    <div id = 'channel'>
    	<header>
   			<div class = 'header-back' @click = 'back'>
	    		<img src = '../../../assets/icon/back.svg'>
	    	</div>
	    	<div class = 'header-search'>
	    		<router-link :to = "{ 'name': 'host-search-show'}" tag = 'a'>
	    			<img src="../../../assets/icon/search.svg">
	    			<span>搜索商品名称</span>
	    		</router-link>
    		</div>
	    	<div class = 'header-cart'>
	    		<router-link :to = "{ 'name': 'host-cart' }" tag = 'a'>
	    			<img src = '../../../assets/icon/cart1.svg'>
	    		</router-link>
	    	</div>
		</header>
		<Loading :loading-show = 'isLoading'></Loading>
		<main>
			<ContentList :content-list = 'contentList'></ContentList>
		</main>
    </div>
</template>

<script>
import axios from 'axios'
import Loading from '../../../components/common/loading.vue'
import ContentList from '../../../components/common/ContentList.vue'

export default {
  	name: 'channel',
  	data () {
  		return {
  			contentList: [],
  			isLoading: false,
  		}
	},
	components: {
		'ContentList': ContentList,
		'Loading': Loading
	},
	methods: {
		back () {
			this.$router.go(-1);
		},
		getChannelData () {
			let _that = this;
			this.isLoading = true;
			axios({
				methods: 'get',
				url: 'http://localhost:3000/host/channelPage/data',
				params: {
					productId: this.$route.params.id
				}
			})
			.then((res) => {
				let _data = res.data.data.data;
				this.contentList = _data.sections;
				this.isLoading = false;
			})
			.catch((err) => {
                console.log(err);
            });
		}
	},
	beforeMount () {
		this.getChannelData();
	},
	activated () {
        this.$store.commit('HIDDEN_FOOTMENU');
    }
}
</script>

<style lang="scss" scoped>
	#channel {
		header {
			background-color: #F2F2F2;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
            z-index: 9999;
            height: 0.9rem;
            position: fixed;
            display: flex;
            align-items: center;
            .header-back {
				flex-grow: 0.5;
				height: 0.4rem;
				margin: 0 0.2rem;
				text-align: center;
				img {
					height: 0.4rem;
				}
			}
            .header-search {
            	height: 0.56rem;
				flex-grow: 8;
				background-color: white;
				border: 1px solid #E5E5E5;
				a {
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: space-start;
					img {
						height: 0.39rem;
						margin: 0 0.06rem 0 0.06rem;
					}	
					span {
						font-size: 0.28rem;
						color: #D4D4D4;
					}
				}
            }
            .header-cart {
            	flex-grow: 1.5;
            	a {
            		height: 100%;
            		display: flex;
					align-items: center;
					justify-content: center;
            		img {
            			height: 0.5rem;
            		}
            	}
            }
		}
		main {
			width: 100%;
		}
	}
</style>
