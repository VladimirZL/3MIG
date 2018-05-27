<template>
    <div class = 'divider_line' :style = "{height: `${typeBody.line_height / 150}rem`, backgroundColor: typeBody.line_color}"></div>
</template>

<script>

export default {
  	name: 'dividerLine',
  	data () {
  		return {
  		}
  	},
    props: ['typeBody']
}
</script>

<style lang="scss" scoped>

</style>
