<!-- 评论列表页面 -->
<!-- @scroll = 'recordPosition' -->
<template>
    <div id="comment-list" v-scroll = 'loadMore' ref = 'commentList'>
		<header>
			<Head title = '商品评论' search = 'true'></Head>
		</header>
		<loading :loading-show = 'isLoading'></loading>
		<main>
			<div class = 'comment-smile'>
				<img src = '../../../assets/img/smile.png'>
			</div>
			<div class = 'comment-choice'>
				<div class = 'comment-choice-type'>
					<span 
						style = 'border-right: 1px solid #AFAFAF' 
						:class = "{'chooseThis': typeChoose === 'best'}"
						@click = "chooseThisType('best')">
						最热门
					</span>
					<span
						:class = "{'chooseThis': typeChoose === 'new'}" 
						@click = "chooseThisType('new')">
						最新
					</span>
				</div>
				<div class = 'comment-choice-img'>
					<div 
						:class = "['choose-img-box', {'choose-img-yes': imgChoose === 1}]"
						@click = 'chooseImg'>
						<img src = '../../../assets/icon/yes1.png'>
					</div>
					<span>有图片</span>
				</div>
			</div>
			<div class = 'comment-content'>
				<comment-box 
					v-for = '(commentItem, index) in commentList' 
					:comment-content = 'commentItem'>
				</comment-box>
			</div>
		</main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'
import commentBox from '../../../components/common/commentBox.vue'

export default {
  	name: 'comment-list',
  	data () {
  		return {
  			//评论类型选择
  			typeChoose: 'best',
  			imgChoose: 0,

  			isLoading: false,
  			commentList: [],

  			isLoadingMore: false,

  			//当且页数
  			pageIndex: 1,

  		}
  	},
  	components: {
  		'Head': Head,
  		'loading': loading,
  		'comment-box': commentBox
  	},
  	methods: {
  		//选择类型
  		chooseThisType (_type) {
  			this.typeChoose = _type;
  			this.pageIndex = 1;
  			this.getCommentListData(false);
  		},
  		//选择是否有图片
  		chooseImg () {
  			this.imgChoose = this.imgChoose === 1 ? 0 : 1;
  			this.pageIndex = 1;
  			this.getCommentListData(false);
  		},
  		//获取评论列表数据
  		getCommentListData (_more) {
  			this.isLoading = true;
  			axios({
                method: 'get',
                url: 'http://localhost:3000/host/comment/list/data',
                params: {
                    goodId: this.$route.params.id,
                    pageIndex: this.pageIndex,
                    type: this.typeChoose,
                    showImg: this.imgChoose
                }
            })
            .then((res) => {
            	this.isLoading = false;
            	this.isLoadingMore = false;
            	let _data = res.data.data.data;
            	this.commentList = _more ? [...this.commentList, ..._data.comments] : _data.comments;
            })
            .catch((err) => {
                console.log(err);
            });
  		},
  		//加载更多
  		loadMore () {
  			if (!this.isLoadingMore) {
  				this.isLoadingMore = true;
  				this.pageIndex++;
  				this.getCommentListData(true);
  				console.log('loading')
  			} else {
  				console.log('no');
  			}
  		},
  		//记录位置
  		recordPosition () {
  			this.$parent.childPosition = this.$refs.commentList.scrollTop;
  			// console.log(this.$refs.commentList.scrollTop)
  		},
  		//设置位置
  		setPosition () {
  			console.log(this.$parent.childPosition);
  			this.$refs.commentList.scrollTop = this.$parent.childPosition;
  		}
  	},
  	beforeMount () {
  		this.getCommentListData();
  	},
  	mounted () {
  		this.setPosition();
  	},
  	beforeDestroy () {
  		// console.log('dsdd');
  		this.recordPosition();
  	}
}
</script>

<style lang="scss" scoped>
	#comment-list {
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
  			.comment-smile {
  				width: 100%;
  				display: flex;
  				padding: 0.4rem;
  				box-sizing: border-box;
   				justify-content: center;
  				background-color: #05A05D;
  				img {
  					width: 0.8rem;
  					height: 0.8rem;
  				}
  			}
  			.comment-choice {
   				width: 100%;
  				height: 1rem;
				color: #AFAFAF;
  				font-size: 0.24rem;
  				align-items: center;
  				display: inline-flex;
  				background-color: #FAFAFA;
  				.comment-choice-type {
					// flex-grow: 8;
					width: 78%;
					display: inline-flex;
					span {
						padding: 0 0.3rem;
					}
					.chooseThis {
						color: #0AAD64;
					}
  				}
  				.comment-choice-img {
					// flex-grow: 2;
					width: 22%;
					display: inline-flex;
					align-items: center;
					.choose-img-box {
						display: flex;
						width: 0.3rem;
						height: 0.3rem;
						border-radius: 3px;
						align-items: center;
						justify-content: center;
						background-color: #eee;
						border: 1px solid #e0e0e0;
						img {
							width: 0.26rem;
							height: 0.26rem;
						}
					}
					.choose-img-yes {
						border-color: #0AAD64;
						background-color: #0AAD64;
					}
					span {
						padding-left: 0.2rem;
					}
  				}
  			}
  		}
	}
</style>
