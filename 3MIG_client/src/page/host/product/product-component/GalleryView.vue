<template>
    <div class = 'gallery-view'>
        <swiper :options = 'swiperOption'>
            <div class = 'swiper-slide' v-for = '(item, index) in galleryView'>
                <img :src = 'item' >
            </div>
            <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  	name: 'gallery-view',
  	data () {
  		return {
  			swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                resistanceRatio: 0
            },
  		}
  	},
  	components: {
  		swiper,  
        swiperSlide,
  	},
  	props: ['galleryView']
}
</script>

<style lang="scss" scoped>
	.gallery-view {
        width: 100%;
        height: 7.92rem;
        .swiper-slide {
            height: 7.92rem;
            width: 100%;
            img {
                height: 7.92rem;
            }
        }
    }
</style>
