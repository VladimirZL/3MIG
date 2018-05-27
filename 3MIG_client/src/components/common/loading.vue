<!-- 加载动画按钮 -->

<template>
    <div v-show = 'loadingShow === true' class="loading"></div>
</template>

<script>

export default {
  	name: 'loading',
  	props: ['loadingShow']
}
</script>

<style lang="scss" scoped>
	@keyframes circle {
        0% {
            transform: rotate(0deg); 
        }
        50% {
            transform: rotate(180deg); 
        }
        100% {
            transform: rotate(360deg);
        }
    } 
	.loading {
		top: 25%;
		left: 50%;
		z-index: 999;
		width: 0.4rem;
		height: 0.4rem;
		position: fixed;
		border-radius: 100%;
		margin-left: -0.2rem;
		background-color: white;
		border: 2px solid #059B5A;
		border-top-color: white;
		animation: circle 0.5s linear infinite;
	}
</style>
