<template>
    <div id = 'mihome'>
    	<header>
   			<Head title = '小米之家' search = 'true'></Head>
		</header>
		<main>
		</main>
    </div>
</template>

<script>
import Head from '../../../components/header/Head.vue'

export default {
  	name: 'mihome',
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
	#mihome {
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
	}
</style>
