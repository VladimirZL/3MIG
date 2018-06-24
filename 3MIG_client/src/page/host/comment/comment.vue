<!-- 评论页面 -->

<template>
    <div id="comment">
		<transition name = 'comment-animate' >
			<keep-alive exclude = 'comment-view'>	
				<router-view class = 'comment-router'></router-view>
			</keep-alive>
		</transition>
    </div>
</template>

<script>

export default {
  	name: 'comment',
  	data () {
  		return {
  			childPosition: 0
  		}
  	},
  	created () {
        this.$store.commit('HIDDEN_FOOTMENU');
    },
    // beforeDestroy () {
    // 	console.log('sss');
    // }
}
</script>

<style lang="scss" scoped>
	#comment {
  		.comment-router {
  			top: 0;
			left: 0;
			right: 0;
			height: 100%;
			overflow: scroll;
  			width: 100%;
		    transition: all 0.4s;
		    position: absolute;
		}
		.comment-animate-leave-active {
		    transform: translate(100%, 0);
		}
		.comment-animate-enter {
		    transform: translate(-100%, 0);
		}
	}
</style>
