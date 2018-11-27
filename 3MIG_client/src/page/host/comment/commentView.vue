<!-- 单个评论页面 -->

<template>
    <div id="comment-view">
		<header>
			<Head title = '评论详情' search = 'true'></Head>
		</header>
		<loading :loading-show = 'isLoading'></loading>
		<main>
			<commentBox :comment-content = 'commentItem'></commentBox>
		</main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/Head.vue'
import loading from '../../../components/common/loading.vue'
import commentBox from '../../../components/common/commentBox.vue'

export default {
  	name: 'comment-view',
  	data () {
  		return {
  			isLoading: false,
  			commentItem: {}
  		}
  	},
  	components: {
  		'Head': Head,
  		'loading': loading,
  		'commentBox': commentBox
  	},
  	methods: {
  		getCommentViewData () {
  			// console.log('ss');
  			this.isLoading = true;
  			axios({
            method: 'get',
            url: 'http://localhost:3000/host/comment/view/data',
            params: {
                commentId: this.$route.params.id,
            }
        })
        .then((res) => {
        	this.isLoading = false;
        	let _data = res.data.data.data;
        	this.commentItem = _data
        })
        .catch((err) => {
            console.log(err);
        });
  		}
  	},
  	beforeMount () {
  		this.getCommentViewData();
  	}
}
</script>

<style lang="scss" scoped>
	#comment-view {
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
		}
	}
</style>
