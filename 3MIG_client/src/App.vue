<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
  	    return {

  	    }
    },
    mounted () {

    }
}
</script>

<style lang="scss">

	#app {
		// position: static;
		width: 100%;
        height: 100%;
	}

    a {
        text-decoration: none;
    }
</style>
