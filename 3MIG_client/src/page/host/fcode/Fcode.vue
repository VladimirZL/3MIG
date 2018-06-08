<template>
    <div id = 'fcode'>
    	<header>
   			<Head title = 'F码购买' search = 'true'></Head>
		</header>
		<main>
			<div class = 'fcode-input'>
				<input type = 'text' placeholder = '请输入任意产品F码' v-model = 'fcode'>
			</div>
			<div class = 'fcode-introduce'>
				<div class = 'introduce-what'>
					F码就是西安移动应用开发实验室特权
				</div>
				<div>
					F码是3MIG的彩蛋码，输入即可看见彩蛋
				</div>
				<div>
					谁会有F码？
				</div>
				<div>
					实验室全体成员
				</div>
			</div>
		</main>
		<footer>
			<div :class = "{'change-color': fcode}" @click = 'checkFcode'>
				提交
			</div>
		</footer>
    </div>
</template>

<script>
import Head from '../../../components/header/Head.vue'

export default {
  	name: 'fcode',
  	data () {
  		return {
  			fcode: ''
  		}
	},
	components: {
		'Head': Head
	},
	methods: {
		checkFcode () {
			console.log('ss');
		}
	},
	activated () {
        this.$store.commit('HIDDEN_FOOTMENU');
    }
}
</script>

<style lang="scss" scoped>
	#fcode {
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
			.fcode-input {
				width: 100%;
				padding: 0.2rem;
				box-sizing: border-box;
				input {
					width: 100%;
					overflow: hidden;
					font-size: 0.24rem;
					box-sizing: border-box;
					padding: 0.18rem 0.3rem;
					border: 1px solid #f6f6f6;
				}
			}
			.fcode-introduce {
				color: #777;
				padding-top: 0.4rem;
				line-height: 0.3rem;
				margin: 0.4rem 0.3rem 0 0.3rem;
				div {
					font-size: 0.25rem;
					margin-bottom: 0.5rem;
				}
			}
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
				transition: all 0.2s;
				pointer-events: none;
			}
			.change-color {
				color: white;
				pointer-events: auto;
				background-color: #00AD62;
			}
		}
	}
</style>
