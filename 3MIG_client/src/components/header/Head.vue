<template>
    <div class = 'header'>
    	<div class = 'header-back' @click = 'back'>
    		<img src = '../../assets/icon/back.svg'>
    	</div>
    	<div class = 'header-title'>
    		<span> {{ title }} </span>
    	</div>
    	<div class = 'header-search'>
    		<router-link :to = "{ 'name': 'host-search-show' }" v-show = "search === 'true'">
    			<img src = '../../assets/icon/search1.svg'>
    		</router-link>
    	</div>
    </div>
</template>

<script>

export default {
  	name: 'Header',
  	data () {
  		return {
  		}
	},
	props: ['title', 'search'],
	methods: {
		back () {
			this.$router.go(-1);
		}
	},
}
</script>

<style lang="scss" scoped>
	.header {
		width: 100%;
		z-index: 9999;
		display: flex;
		height: 0.9rem;
		align-items: center;
		background-color: #F2F2F2;
		.header-back {
			flex-grow: 0.5;
			height: 0.4rem;
			margin: 0 0.2rem;
			text-align: center;
			img {
				height: 0.4rem;
			}
		}
		.header-title {
			flex-grow: 9;
			font-size: 0.3rem;
			text-align: center;
		}
		.header-search {
			width: 0.45rem;
			flex-grow: 0.5;
			height: 0.45rem;
			margin: 0 0.2rem;
			text-align: center;
			img {
				height: 0.45rem;
			}
		}
	}
</style>
