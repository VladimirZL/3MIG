<template>
    <div id="search-show">
    	<header>
    		<div class = 'search-header'>
    			<div class = 'search-back' @click = 'back'>
    				<img src = '../../../assets/icon/back.svg'>
    			</div>
    			<div class = 'search-input'>
    				<input type = 'search' autocomplete = 'off' placeholder = '搜索商品名称' autocapitalize = 'off' v-model = 'searchKey' @input = 'getSearchKey()'>
    			</div>
    			<div class = 'search-btn' @click = 'do_click'>
    				<img src = '../../../assets/icon/search1.svg'>
    			</div>
    		</div>
    	</header>
    	<Loading :loading-show = 'isLoading'></Loading>
    	<main>
    		<div class = 'search-main'>
	    		<div class = 'hot-search'>
	    			<div class = 'hot-search-title'>
	    				<span>热门搜素</span>
	    			</div>
	    			<div class = 'hot-search-img'>
						<div v-for = '(hotItem, hotIndex) in hotSearchContent'>
							<CellsAutoFill :type-body = 'hotItem.body'></CellsAutoFill>
						</div>
	    			</div>
	    		</div>
	    		<div class = 'key-search'>
	    			<router-link tag = 'a' :to = "{ 'name': 'host-search-list', query: { key: item.word } }" v-for = '(item, index) in keySearchContent' :style = "{padding: '0.14rem 0.2rem', margin: '0.1rem', backgroundColor: '#FFF9F8', border: '1px solid #E4E4E4'}">
	    				{{ item.word }}
	    			</router-link>
	    		</div>
	    		<div class = 'key-search-list'>
		    		<router-link tag = 'a' v-for = '(item, index) in key_listSearchContent' :to = "{'name': 'product-view', params: {id: `${ item.action.extra.commodityId }`}}">
		    			{{ item.keyword }}
		    		</router-link>
		    	</div>
	    	</div>
    	</main>
    </div>
</template>

<script>
import axios from 'axios'
import loading from '../../../components/common/loading.vue'
import cellsAutoFill from '../../../components/common/type/cellsAutoFill.vue'

export default {
  	name: 'search-show',
  	data () {
  		return {
  			isLoading: false,
  			hotSearchContent: [],
  			keySearchContent: [],
  			//搜索input
  			searchKey: '',
  			//搜索结果放在这里
  			key_listSearchContent: [],
  		}
  	},
  	components: {
  		'Loading': loading,
  		'CellsAutoFill': cellsAutoFill
  	},
  	methods: {
  		getSearchData () {
  			this.isLoading = true;
  			axios({
                method: 'get',
                url: 'http://localhost:3000/host/searchPage/data',
            })
            .then((res) => {
                this.isLoading = false;
                let _data = res.data.data.data;
                console.log(res.data.data.data);
                this.hotSearchContent = _data.ad_list;
                this.keySearchContent = _data.keywords;
            })
            .catch((err) => {
                console.log(err);
            });
  		},
  		getSearchKey () {
  			axios({
                method: 'get',
                url: 'http://localhost:3000/host/searchPage/key',
                params: {
                	key: this.searchKey
                }
            })
            .then((res) => {
                let _data = res.data.data.data;
                this.key_listSearchContent = _data
                console.log(res.data.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
  		},
  		do_click () {
  			if(this.searchKey !== '') {
  				this.$router.push({ name: 'host-search-list', query: { key: this.searchKey } })
  			}
  		},
  		back () {
  			this.$router.go(-1);
  		}
  	},
  	beforeMount () {
  		this.getSearchData();
  	}
}
</script>

<style lang="scss" scoped>
	#search-show {
		width: 100%;
		header {
			width: 100%;
			height: 1rem;
			.search-header {
				height: 1rem;
				width: 100%;
				display: inline-flex;
				align-items: center;
				background-color: #F2F2F2;
				.search-back {
					flex-grow: 1;
					height: 0.4rem;
					margin: 0 0.2rem;
					text-align: center;
					img {
						height: 0.4rem;
					}
				}
				.search-input {
					flex-grow: 8;
					height: 0.5rem;
					padding: 0 0.2rem;
					border-radius: 0.04rem;
					background-color: white;
					border: 1px solid #e5e5e5;
					input {
						border: none;
						width: 100%;
						height: 0.5rem;
						font-size: 0.3rem;
						padding: 0.1rem 0;
						line-height: normal;
					}
				}
				.search-btn {
					flex-grow: 1;
					height: 0.45rem;
					margin: 0 0.2rem;
					text-align: center;
					img {
						height: 0.45rem;
					}
				}
			}
		}
		main {
			.search-main {
				width: 100%;
				.hot-search {
					width: 100%;
					.hot-search-title {
						height: 0.8rem;
						padding: 0 0.3rem;
						font-size: 0.24rem;
						line-height: 0.8rem;
						letter-spacing: 1px;
					}
				}
				.key-search {
					width: 100%;
					box-sizing: border-box;
					padding: 0.1rem 0.2rem;
					a {
						font-size: 0.24rem;
						display: inline-block;
					}
				}
				.key-search-list {
					width: 100%;
					a {
						display: block;
						overflow: hidden;
						font-size: 0.28rem;
						white-space: nowrap;
						line-height: 0.36rem;
						padding: 0.2rem 0.3rem;
						background-color: #F5F5F5;
					}
				}
			}
		}
	}
</style>
