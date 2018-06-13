<!-- 加载动画按钮 -->

<template>
    <div v-show = 'loadingShow === true' class = 'loading'></div>
</template>

<script>

export default {
  	name: 'loading',
  	props: ['loadingShow'],
}
</script>

<style lang="scss" scoped>
	@keyframes circle {
        0% {
            transform: rotate(0deg); 
            // width: 1%;
        }
        // 25% {
            // width: 25%;
        // }
        50% {
        	transform: rotate(180deg); 
        	// width: 50%;
        }
        // 75% {
        	// width: 75%;
        // }
        100% {
            transform: rotate(360deg);
            // width: 83%;
        }
    } 
	.loading {
		top: 50%;
		left: 50%;
		z-index: 999;
		width: 0.4rem;
		height: 0.4rem;
		position: fixed;
		margin-top: -2rem;
		transition: all 20s;
		border-radius: 100%;
		margin-left: -0.2rem;
		border: 2px solid #059B5A;
		border-top-color: white;
		background-color: transparent;
		animation: circle 0.5s linear infinite;
	}
	// .loading-animation {
	// 	width: 100% !important;
	// }
</style>
