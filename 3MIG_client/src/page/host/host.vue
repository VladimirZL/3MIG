<template>
    <div id = 'host'>
    	<div class = 'main'>
		    <transition name = 'host-animate'> 
		    	<keep-alive exclude = 'product'>
		    		<router-view class = 'host-router' mode = 'out-in'></router-view>
		    	</keep-alive>
		    </transition>
		</div>
		<transition name = 'foot_animate'>
	    	<footer v-show = 'footerShow'>
	    		<Foot></Foot>
	    	</footer>
    	</transition>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Foot from '../../components/footer/Foot.vue'

export default {
  	name: 'host',
  	data () {
  		return {
  			footerShow: this.$store.state.showFootMenu
  		}
  	},
  	components: {
  		'Foot': Foot
  	},
  	methods: {
  		changeFooterShow () {
  			this.footerShow = this.$store.state.showFootMenu;
  		}
  	},
  	watch: {
  		'$store.state.showFootMenu': 'changeFooterShow'
  	}
}
</script>

<style lang="scss" scoped>
	#host {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
		.main {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			.host-router {
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				width: 100%;
				height: 100%;
				z-index: 999;
				overflow-y: auto;
				overflow-x: hidden;
				position: absolute;
				transition: all 0.4s;
				box-sizing: border-box;
			}
			.host-animate-leave-active {
			    transform: translate(100%, 0);
			}
			.host-animate-enter {
			    transform: translate(-100%, 0);
			}
		}
		footer {
			background-color: black;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 9999;
			position: fixed;
			transition: all 0.5s;
			height: 1.11rem;
			width: 100%;
		}
  		.foot_animate-enter {
			margin-bottom: -1.4rem;
		}
		.foot_animate-leave {
            margin-bottom: 0;
        }
		.foot_animate-leave-active {
			margin-bottom: -1.4rem;
			transition: all 0.5s;
		}
		.foot_animate-enter-active {
			transition: all 0.5s;
		}
	}
</style>
