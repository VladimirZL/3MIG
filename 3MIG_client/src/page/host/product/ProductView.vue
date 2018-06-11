<!-- 单个产品页面 -->

<template>
    <div id = 'product-view' ref = 'product'>
        <MyMask v-show = 'productShow'></MyMask>
        <div class = 'product-all'>
            <!-- 用户选择界面 -->
            <transition name = 'product-view-animate'>
                <ProductParameter 
                    v-show = 'productShow' 
                    :buy-option = 'buyOption' 
                    :product-show-type = 'productShowType' 
                    :good-info = 'nowChoice'
                    :good-activies = 'nowActivies'
                    @changeChoose = 'matchingChoose' 
                    @changeNum = 'matchingNum'>
                </ProductParameter>
            </transition>
            <header>
                <div class = 'product-header'>
                    <div @click = 'back' class = 'product-back'> 
                        <img src = '../../../assets/icon/back1.png'>
                    </div>
                </div>
            </header>
            <main>
                <GalleryView :gallery-view = 'viewContent.galleryView'></GalleryView>
                <TitleView :title-view = 'viewContent.titleView'></TitleView>
                <BuyInfo 
                    :good-info = 'nowChoice'
                    :good-activies = 'nowActivies'>
                </BuyInfo>
                <CommentView :comment-view = 'viewContent.commentView'></CommentView>
                <DescTabsView :desc-tabs-view = 'viewContent.descTabsView'></DescTabsView>
                <RecommendView :recommend-content = 'recommendContent'></RecommendView>
            </main>
            <footer>
                <div class = 'product-footer'>
                    <router-link tag = 'a' :to = "{'name': 'host-home'}">
                        <img src = '../../../assets/icon/home1.png'>
                        <span>首页</span>
                    </router-link>
                    <router-link tag = 'a' :to = "{'name': 'host-cart'}">
                        <img src = '../../../assets/icon/cart1.svg'>
                        <span>购物车</span>
                    </router-link>
                    <div class = 'add-cart'>
                        {{ nowChoice.action_button.button_title }}
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import GalleryView from './product-component/GalleryView.vue'
import TitleView from './product-component/TitleView.vue'
import BuyInfo from './product-component/BuyInfo.vue'
import CommentView from './product-component/CommentView.vue'
import DescTabsView from './product-component/DescTabsView.vue'
import RecommendView from './product-component/RecommendView.vue'
import ProductParameter from './product-component/ProductParameter.vue' 

import MyMask from '../../../components/common/MyMask.vue'


export default {
  	name: 'product-view',
    data () {
        return {
            //产品盒子是否显示
            productShow: false,
            //产品盒子显示类型
            productShowType: '',

            //商品活动
            activies: [],
            //购买选项
            buyOption: [],
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
            //当前所选
            nowChoice: {
                //初始化需要用到的数组/对象
                service_refound_policy_list: [],
                action_button: {}
            },
            //当前产品活动
            nowActivies: [],

            //推荐内容
            recommendContent: {
                list: [],
                title: ''
            },
        }
    },
    components: {
        //product页面各个部分
        'GalleryView': GalleryView,
        'TitleView': TitleView,
        'BuyInfo': BuyInfo,
        'CommentView': CommentView,
        'DescTabsView': DescTabsView,
        'RecommendView': RecommendView,
        //购买选项
        'ProductParameter': ProductParameter,
        //遮罩
        'MyMask': MyMask
    },
    methods: {
        back () {
            this.$router.go(-1);
        },
        getProductData () {
            let _that = this;
            axios({
                method: 'get',
                url: 'http://localhost:3000/host/product/view/data',
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
                this.activies = _data.activies;

                // 在购买的选项中传入一个flag值
                _data.buy_option.forEach((item) => {
                    item.choose = 0;
                });
                this.buyOption = _data.buy_option;
                //在商品信息中添加购买数量
                _data.goods_info.forEach((item) => {
                    item.good_num = 1;
                });
                _data.goods_info.forEach((good_item) => {
                    if (good_item.service_bargins) {
                        good_item.service_bargins.forEach((item) => {
                            item.service_choose = -1;
                        });
                    }
                })
        
                this.goodsInfo = _data.goods_info;
                //默认选项为第一个商品选项
                this.nowChoice = this.goodsInfo[0];
                //匹配默认商品的活动信息
                this.matchingActive(this.activies);
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
                url: 'http://localhost:3000/host/product/view/recommend',
                params: {
                    productId: _that.$route.params.id
                }
            })
            .then((res) => {
                console.log(res.data.data);
                let _data = res.data.data.data;
                this.$set(this.recommendContent, 'title', _data.title);
                this.$set(this.recommendContent, 'list', _data.recommend_list);
            })
            .catch((err) => {
                console.log(err);
            });
        },
        //匹配选择并改变视图
        matchingChoose (_chooseID) {
            for (let goodItem of this.goodsInfo) {
                let i = 0;
                for (let key in goodItem.prop_list) {
                    if (_chooseID[key].itemID === goodItem.prop_list[key].prop_value_id) {
                        i++;
                    }
                }
                if (i === _chooseID.length) {
                    this.nowChoice = goodItem;
                    this.matchingActive(this.activies);
                    break;
                }
            }
        },
        //匹配数量并改变视图
        matchingNum (_chooseNum) {
            this.$set(this.nowChoice, 'good_num', _chooseNum);
        },
        //匹配所选商品的活动
        matchingActive (_activies) {
            for (let item of _activies) {
                if (item.goods_id === this.nowChoice.goods_id) {
                    this.nowActivies = item.canJoinActs;
                }
            }
        },
        //更新路由
        updatePath () {
            this.getProductData();
            this.getProductRecomData();
        },
    },
    watch: {
        '$route': 'updatePath'
    },
    created () {
        this.getProductData();
        this.getProductRecomData();
        this.$store.commit('HIDDEN_FOOTMENU');
    }

}
</script>

<style lang="scss" scoped>
    #product-view {
        height: 100%;
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
            header {
                z-index: 2;
                width: 100%;
                height: 0.9rem;
                position: absolute;
                background-color: transparent;
                .product-header {
                    width: 100%;
                    display: flex;
                    height: 0.9rem;
                    align-items: center;
                    .product-back {
                        display: flex;
                        width: 0.6rem;
                        height: 0.6rem;
                        margin: 0 0.2rem;
                        border-radius: 50%;
                        text-align: center;
                        align-items: center;
                        justify-content: center;
                        background: rgba(0,0,0,.6);
                        img {
                            width: 0.36rem;
                            height: 0.36rem;
                        }
                    }
                }
            }
            main {
                width: 100%;
                padding-bottom: 0.9rem;
                background-color: #EFEFEF;
            }
            footer {
                bottom: 0;
                width: 100%;
                height: 0.9rem;
                position: fixed;
                background-color: white;
                box-shadow: 0 -2px 10px #c5c5c5;
                .product-footer {
                    width: 100%;
                    height: 0.9rem;
                    display: inline-flex;
                    align-items: center;
                    a {
                        flex-grow: 1;
                        opacity: 0.8;
                        display: inline-flex;
                        flex-direction: column;
                        align-items: center;
                        border-right: 1px solid #c5c5c5;
                        img {
                            width: 0.4rem;
                            height: 0.4rem;
                            margin-bottom: 0.1rem;
                        }
                        span {
                            font-size: 0.22rem;
                        }
                    }
                    .add-cart {
                        flex-grow: 3;
                        color: white;
                        height: 0.9rem;
                        font-size: 0.28rem;
                        line-height: 0.9rem;
                        text-align: center;
                        letter-spacing: 2px;
                        background-color: #0AAD64;
                    }
                }
            }
        }
    }
</style>
