<template>
    <div class = 'lucky_draw_type'>
        <div>
            <img :src='typeBody.img_url_start'>
        </div>
    </div>
</template>
<!-- :class = "{'special-position': dataIndex === 3 && routerIndex === 2}" -->
<script>

export default {
  	name: 'luckyDrawType',
  	data () {
  		return {
  		}
  	},
    props: ['typeBody']
}
</script>

<style lang="scss" scoped>
    .lucky_draw_type {
        img {
            width: 100%;
        }
    }
</style>
