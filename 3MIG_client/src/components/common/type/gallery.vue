<template>
    <div class = 'gallery'>
        <swiper :options = 'swiperOption'>
            <a v-for = '(item, routerIndex) in typeBody.items' @click = 'routerPath(item.action.type, item.action.path)' :style = "{height: `${item.h / 100}rem`, width: `${item.w / 100}rem`, display: 'inline-block'}" class = "swiper-slide">
                <img :src = 'item.img_url' :style = "{height: `${item.h / 100}rem`, width: `${item.w / 100}rem`}">
            </a>
            <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import changeRouter from '../../../router/changeRouter.js'

export default {
    name: 'gallery',
    data () {
      return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                }  
            }
      }
    },
    components: {
        swiper,  
        swiperSlide,
    },
    props: ['typeBody'],
    methods: {
        routerPath (type, id) {
            changeRouter(this, type, id);
        }
    }
}
</script>

<style lang="scss" scoped>
    .gallery {
        background-color: #ccc;
    }
</style>
