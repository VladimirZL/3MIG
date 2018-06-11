<!-- 产品页面 -->

<template>
    <div id="product">
		<transition name = 'product-animate' >
			<router-view class = 'product-router'></router-view>
		</transition>
    </div>
</template>

<script>

export default {
  	name: 'product',
}
</script>

<style lang="scss" scoped>
	#product {
  		.product-router {
  			width: 100%;
		    transition: all 0.4s;
		    position: absolute;
		}
		.product-animate-leave-active {
		    transform: translate(100%, 0);
		}
		.product-animate-enter {
		    transform: translate(-100%, 0);
		}
	}
</style>
