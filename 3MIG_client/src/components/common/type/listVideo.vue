<template>
    <div class = 'list_one_video2' :style = "{backgroundColor: `${typeBody.bg_color}`}">
        <div v-for = '(item, routerIndex) in typeBody.items'>
            <video :poster = 'item.img_url' :src = 'item.video_url' playsinline="playsinline" preload="none" controls="controls"></video>
        </div>
    </div>
</template>

<script>
export default {
  	name: 'listVideo',
  	data () {
  		return {
  		}
  	},
    props: ['typeBody']
}
</script>

<style lang="scss" scoped>
    .list_one_video2 {
        video {
            width: 100%;
        }
    }
</style>
