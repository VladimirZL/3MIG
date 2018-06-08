<template>
    <div id = 'product-view' ref = 'product'>
        <MyMask v-show = 'productShow'></MyMask>
        <div class = 'product-all'>
            <transition name = 'product-view-animate'>
                <ProductParameter v-show = 'productShow' :buy-option = 'buyOption' :product-show-type = 'productShowType' :good-info = 'goodsInfo[0]'></ProductParameter>
            </transition>
            <main>
                <GalleryView :gallery-view = 'viewContent.galleryView'></GalleryView>
                <TitleView :title-view = 'viewContent.titleView'></TitleView>
                <div class = 'buy-info'>
                    <div class = 'buy-content buy-option' @click = "openProductBox('user_choice')">
                        <div class = 'option-tittle'>已选</div>
                        <div class = 'option-info'>xxxxxxxx</div>
                    </div>
                    <div class = 'buy-content buy-option'>
                        <div class = 'option-tittle'>送至</div>
                        <div class = 'option-info'>xxxxxxxx</div>
                    </div>
                    <div class = 'buy-serve buy-option'>
                        <!-- <div v-for = ''></div> -->
                        ssss
                    </div>
                </div>
                <CommentView :comment-view = 'viewContent.commentView'></CommentView>
                <DescTabsView :desc-tabs-view = 'viewContent.descTabsView'></DescTabsView>
                <RecommendView :recommend-content = 'recommendContent'></RecommendView>
            </main>
            <footer></footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import GalleryView from './product-component/GalleryView.vue'
import TitleView from './product-component/TitleView.vue'
import CommentView from './product-component/CommentView.vue'
import DescTabsView from './product-component/DescTabsView.vue'
import RecommendView from './product-component/RecommendView.vue'
import ProductParameter from './product-component/ProductParameter.vue' 

import MyMask from '../../../components/common/MyMask.vue'


export default {
  	name: 'productView',
    data () {
        return {
            //产品盒子是否显示
            productShow: false,
            //产品盒子显示类型
            productShowType: '',

            //产品信息
            goodsInfo: [],

            //展示内容
            viewContent: {
                //轮播图
                galleryView: [],
                //描述信息
                descTabsView: [],
                //标题信息
                titleView: {},
                //评论信息
                commentView: {
                    //初始化防止报错
                    list: [],
                    detail: {}
                },
            },
            //购买选项
            buyOption: [],
            //推荐内容
            recommendContent: {
                list: [],
                title: ''
            },
            //当前所选
            nowChoice: {},
        }
    },
    components: {
        //product页面各个部分
        'GalleryView': GalleryView,
        'TitleView': TitleView,
        'CommentView': CommentView,
        'DescTabsView': DescTabsView,
        'RecommendView': RecommendView,
        //购买选项
        'ProductParameter': ProductParameter,
        //遮罩
        'MyMask': MyMask
    },
    methods: {
        getProductData () {
            let _that = this;
            axios({
                method: 'get',
                url: 'http://localhost:3000/product/data',
                params: {
                    productId: _that.$route.params.id
                }
            })
            .then((res) => {
                let _data = res.data.data.data;
                this.$set(this.viewContent, 'galleryView', _data.view_content.galleryView.galleryView);
                this.$set(this.viewContent, 'titleView', _data.view_content.titleView.titleView);
                this.$set(this.viewContent, 'commentView', _data.view_content.commentView.commentView);
                this.$set(this.viewContent, 'descTabsView', _data.view_content.descTabsView.descTabsView);
                // console.log(_data.view_content.commentView.commentView);
                _data.buy_option.forEach((item) => {
                    item.choose = 0;
                });
                this.buyOption = _data.buy_option;
                this.goodsInfo = _data.goods_info;
                console.log(this.goodsInfo);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        //获取推荐数据
        getProductRecomData () {
            let _that = this;
            axios({
                method: 'get',
                url: 'http://localhost:3000/product/recommend',
                params: {
                    productId: _that.$route.params.id
                }
            })
            .then((res) => {
                console.log(res.data.data.data);
                let _data = res.data.data.data;
                this.$set(this.recommendContent, 'title', _data.title);
                this.$set(this.recommendContent, 'list', _data.recommend_list);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        //更新路由
        updatePath () {
            this.getProductData();
            this.getProductRecomData();
        },
        //打开产品盒子
        openProductBox (_type) {
            this.productShowType = _type;
            this.productShow = true;
        },
    },
    watch: {
        '$route': 'updatePath'
    },
    created () {
        this.getProductData();
        this.getProductRecomData();
    }

}
</script>

<style lang="scss" scoped>
    @mixin arrow {
        content: '';
        top: 50%;
        width: 0.2rem;
        height: 0.2rem;
        right: 0.32rem;
        position: absolute;
        border-left: 1px solid #575757;
        border-top: 1px solid #575757;
        transform: translate3d(0, -50%, 0) rotate(135deg);
    }
    #product-view {
        height: 100%;
        width: 100%;
        position: absolute;
        .product-all {
            width: 100%; 
            height: 100%;
            overflow: scroll; 
            position: absolute;
            .product-view-animate-leave-active {
                transform: translate(0, 100%);
            }
            .product-view-animate-enter {
                transform: translate(0, 100%);
            }
            main {
                width: 100%;
                padding-bottom: 0.9rem;
                background-color: #EFEFEF;
                .buy-info {
                    width: 100%;
                    margin-top: 0.08rem;
                    .buy-option {
                        display: flex;
                        position: relative;
                        background-color: white;
                        padding: 0.16rem 0.32rem;
                        border-top: 1px solid #EFEFEF;
                    }
                    .buy-content {
                        font-size: 0.24rem;
                        line-height: 0.4rem;
                        .option-tittle {
                            width: 0.82rem;
                            color: rgba(0, 0, 0, 0.54);
                        }
                        .option-info {
                            padding-right: 0.2rem;
                        }
                    }
                    .buy-content:after {
                        @include arrow;
                    }
                }
            }
            footer {
                bottom: 0;
                height: 0.9rem;
                width: 100%;
                position: fixed;
                background-color: red;
            }
        }
    }
</style>
