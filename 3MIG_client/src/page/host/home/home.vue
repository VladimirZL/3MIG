<template>
    <div id="home">
    	<header>
    		<div class="first-row">
    			<div class="first-item">
	    			<img src="../../../assets/img/logo1.png">
	    		</div>
	    		<div class="second-item">
	    			<img src="../../../assets/icon/search.svg">
	    			<span>搜索商品名称</span>
	    		</div>
	    		<div class="third-item">
	    			<router-link tag = 'a' to = '../host/user'>
	    				<img src="../../../assets/icon/user1.svg">
	    			</router-link>
	    		</div>
    		</div>
    		<div class="second-row-out">
	    		<div class="second-row-in">
    				<span v-for = '(option, index) in homeMenuOptions' @click = 'toThis(index)' :class = "{'homeMenu-onthis': homeMenuFlag === index}">{{ option.name }}</span>
	    		</div>
	    	</div>
    	</header>
    	<!-- 懒加载动画 -->
    	<Loading :loading-show = 'isLoading'></Loading>
    	<main>
    		<HomeContent :home-content-pages = 'homeMenuOptions' :home-content-data = 'homeDataArray' :home-menu-index = "homeMenuFlag"></HomeContent>
    	</main>
    </div>
</template>

<script>
import axios from 'axios'
import homeContent from './homeContent.vue'
import loading from '../../../components/common/loading.vue'

export default {
  	name: 'home',
  	data () {
 		return {
 			homeMenuOptions: [],
 			homeDataArray: [],
 			homeMenuFlag: 0,
 			isLoading: false
 		} 		
  	},
  	components: {
  		'HomeContent': homeContent,
  		'Loading': loading
  	},
  	methods: {
  		toThis (index) {
  			//保证切换只请求一次
  			if(!this.homeDataArray[index]) {
  				this.getThisData(index);
  			}
  			this.toTop();
  			this.homeMenuFlag = index;
  		},
  		//回到顶部
  		toTop () {
  			document.documentElement.scrollTop = document.body.scrollTop = 0;
  		},
  		//获取菜单内容
  		getMenuContent () {
			axios({
				method: 'get',
				url: 'http://localhost:3000/host/homePage/menu',
	  		})
			.then((res) => {
				this.homeMenuOptions = res.data.data.data.tabs;
				this.getThisData(0);
			})
			.catch((err) => {
				console.log(err);
			});
  		},
  		//获取目标数据
  		getThisData (index) {
  			this.isLoading = true;
  			axios({
  				method: 'get',
  				url: 'http://localhost:3000/host/homePage/data',
  				params: {
  					optionId: this.homeMenuOptions[index].page_id,
  					optionType: this.homeMenuOptions[index].page_type
  				}
  			})
  			.then((res) => {
  				this.isLoading = false;
  				this.$set(this.homeDataArray, index, res.data.data.data.data.sections);
  			})
  			.catch((err) => {
  				console.log(err);
  			});
  		}
  	},
  	created () {
  		this.getMenuContent();		
  	},
}
</script>

<style lang="scss" scoped>
	#home {
		padding-bottom: 1.11rem;
		header {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			z-index: 9999;
			height: 1.5rem;
			position: fixed;
			background-color: #F2F2F2;
			box-shadow: 0 -2px 20px #888888;
			.first-row {
				text-align: center;
				display: flex;
				align-items: center;
				width: 100%;
				height: 0.94rem;
				.first-item {
					display: inline-flex;
					flex-grow: 0.2;
					img {
						height: 0.95rem;
					}
				}
				.second-item {
					height: 0.56rem;
					display: flex;
					flex-grow: 8.8;
					background-color: white;
					border: 1px solid #E5E5E5;
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
				.third-item {
					display: inline-flex;
					flex-direction: column;
					align-items: center;
					flex-grow: 1;
					img {
						height: 0.45rem;
					}
				}
			}
			.second-row-out {
				height: 0.56rem;
				overflow: scroll;
				.second-row-in {
					height: 0.56rem;
					display: flex;
					align-items: center;
					span {
						font-size: 0.26rem;
						height: 0.56rem;
						color: #747474;
						display: flex;
						white-space: nowrap;
						align-items: center;
						padding: 0 0.22rem;
						box-sizing: border-box;
						transition: all 0.5s;
						border-bottom: 2px solid #F2F2F2;
					}
					.homeMenu-onthis {
						color: #059B5A;
						border-color: #059B5A;
					}
				}
			}
		}
		main {
			padding-top: 1.5rem;
			// padding-bottom: 1.11rem;
		}
	}

</style>
