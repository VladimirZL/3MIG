<template>
    <div id = 'vip'>
    	<header>
   			<Head title = '会员中心' search = 'false'></Head>
		</header>
		<main>
			<div class = 'vip-explain'>
				<p>请前往小米商城App查看会员福利</p>
			</div>
			<div class = 'vip-btn'>
				<a href = "http://s1.mi.com/m/appdownload/?mfull_ad&enter=1">
					立即下载小米商城App
				</a>
			</div>
		</main>
    </div>
</template>

<script>
import Head from '../../../components/header/Head.vue'

export default {
  	name: 'vip',
  	data () {
  		return {
  		}
	},
	components: {
		'Head': Head
	}
}
</script>

<style lang="scss" scoped>
	#vip {
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
			.vip-explain {
				padding: 1.5rem 0.4rem 1rem 0.4rem;
				p {
					font-size: 0.32rem;
					text-align: center;
				}
			}
			.vip-btn {
				height: 1rem;
				margin: 0 0.4rem;
				line-height: 1rem;
				font-size: 0.28rem;
				text-align: center;
				background-color: #038950;
				a {
					color: white;
					letter-spacing: 1px;
				}
			}
		}
	}
</style>
