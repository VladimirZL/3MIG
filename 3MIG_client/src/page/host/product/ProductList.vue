<!-- 产品列表页面 -->

<template>
    <div id="product-list">
 		<header>
 			<Head title = '商品列表' search = 'true'></Head>
 		</header>
 		<Loading :loading-show = 'isLoading'></Loading>
 		<main>
            
  			<guess-like></guess-like>
 		</main>
    </div>
</template>

<script>
import Head from '../../../components/header/head.vue'
import loading from '../../../components/common/loading.vue'
import guessLike from '../../../components/common/guessLike.vue'
import goodList from '../../../components/common/goodList.vue'

export default {
  	name: 'product-list',
  	data () {
  		return {
  			isLoading: false
  		}
  	},
  	components: {
  		'Head': Head,
  		'Loading': loading,
  		'guess-like': guessLike,
        'good-list': goodList
  	},

  	created () {
        this.$store.commit('SHOW_FOOTMENU');
    },
    beforeMount () {
        
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
        }
	}
</style>
