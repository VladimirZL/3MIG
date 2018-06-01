<template>
    <div id="search">
		<transition name = 'search-animate' >
			<router-view class = 'search-router'></router-view>
		</transition>
    </div>
</template>

<script>

export default {
  	name: 'search',
}
</script>

<style lang="scss" scoped>
	#search {
		width: 100%;
		position: relative;
  		.search-router {
		     transition: all 0.4s;
		     position: absolute;
		}
		.search-animate-leave-active {
		    transform: translate(100%, 0);
		}
		.search-animate-enter {
		    transform: translate(-100%, 0);
		}
	}
</style>
