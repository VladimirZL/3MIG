<!-- 猜你喜欢组件 -->

<template>
    <div class = 'guess-like'>
        <div v-for = '(headerItem, headerIndex) in recomHeader'> 
            <img :src = 'headerItem.img_url' :style = "{width: `${headerItem.w / 100}rem`, height: `${headerItem.h / 100}rem`}">
        </div>
        <div class = 'recom-list'>
            <div v-for = '(item, recomIndex) in recomList' class = 'recom-goods'>
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
import axios from 'axios'
import changeRouter from '../../router/changeRouter.js'

export default {
    name: 'guess-like',
    data () {
        return {
            recomHeader: [],
            recomList: []
        }
    },
    methods: {
        getCartPageData () {
            this.$parent.isLoading = true;
            axios({
                method: 'get',
                url: 'http://localhost:3000/host/cartPage/data',
            })
            .then((res) => {
                this.$parent.isLoading = false;
                this.recomList = res.data.data.data.recom_list;
                this.recomHeader = res.data.data.data.header.body.items;
                console.log();
            })
            .catch((err) => {
                console.log(err);
            });
        },
        routerPath (type, id) {
            changeRouter(this, type, id);
        },
    },
    beforeMount () {
        this.getCartPageData();
    },

}
</script>

<style lang="scss" scoped>
    .guess-like {
        width: 100%;
        .recom-list {
            width: 100%;
            .recom-goods {
                width: 3.6rem;
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
                        background-image: url('../../assets/icon/RMB.svg');
                    }
                }
            }
        }
    }
</style>
