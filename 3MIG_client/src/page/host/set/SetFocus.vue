<template>
    <div id = 'set'>
    	<header>
   			<Head title = '个人中心' search = 'true'></Head>
		</header>
		<main>
			<!-- <div>
				
			</div> -->
		</main>
		<footer>
			<div @click = 'cancel'>
				退出账号
			</div>
		</footer>
    </div>
</template>

<script>
import { delCookie } from '../../../config/cookie.js'
import Head from '../../../components/header/Head.vue'

export default {
  	name: 'set',
  	data () {
  		return {
  			
  		}
	},
	components: {
		'Head': Head
	},
	methods: {
		cancel () {
			delCookie('_name');
			this.$router.push({ name: 'host-user' });
		}
	},
	activated () {
        this.$store.commit('HIDDEN_FOOTMENU');
    }
}
</script>

<style lang="scss" scoped>
	#set {
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
		footer {
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			position: fixed;
			text-align: center;
			background-color: #F4F4F4;
			div {
				height: 1rem;
				line-height: 1rem;
				font-size: 0.3rem;
				text-indent: 2px;
				letter-spacing: 2px;
			}
		}
	}
</style>
