<template>
    <div class = 'recommend-view'>
        <div class = 'recommend-title'>
            {{ recommendContent.title }}
        </div>
        <div class = 'recommend-content'>
            <div v-for = '(item, index) in recommendContent.list' class = 'recommend-goods'>
                <a @click = 'routerPath(item.action.type, item.action.path)'>
                    <div class = 'goods-img-box'>
                        <img :src = 'item.image_url'>
                    </div>
                    <div class = 'goods-info'>
                        <div class="goods-name"> {{ item.name }} </div>
                        <div class="goods-price"> {{ item.price }} </div> 
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import changeRouter from '../../../../router/changeRouter.js'

export default {
  	name: 'recommend-view',
    data () {
        return {
        }
    },
  	props: ['recommendContent'],
    methods: {
        //变换路由
        routerPath (type, id) {
            changeRouter(this, type, id);
        },
    }
}
</script>

<style lang="scss" scoped>
    .recommend-view {
        width: 100%;
        margin-top: 0.16rem;
        background-color: white;
        .recommend-title {
            font-size: 0.3rem;
            padding: 0 0.32rem;
            line-height: 0.8rem;
        }
        .recommend-content {
            .recommend-goods {
                width: 3.6rem;
                // float: left;
                display: inline-block;
                .goods-img-box {
                    width: 3.6rem;
                    img {
                        width: 100%;
                    }
                }
                .goods-info {
                    padding: 0.18rem 0.26rem;
                    white-space: nowrap;
                    .goods-name {
                        color: black;
                        font-size: 0.28rem;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .goods-price {
                        margin-top: 0.1rem;
                        line-height: 0.44rem;
                        color: #ff6700;
                        padding-left: 0.2rem;
                        font-size: 0.3rem;
                        background-size: 0.2rem;
                        background-position: left;
                        background-repeat: no-repeat;
                        background-image: url('../../../../assets/icon/RMB.svg');
                    }
                }
            }
        }
    }
</style>
