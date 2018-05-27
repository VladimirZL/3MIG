<template>
    <div id="product" ref = 'product'>
        <div :class = "['product-box', {'product-box-show': productOpFlag === true}]">
            <!-- 遮罩 -->
            <div v-show = 'productOpFlag' class = 'product-mask'></div>
            <!-- 弹出信息 -->
            <div :class = "['product-info-box', {'product-info-box-show': productOpAnimaFlag === true}]">
                <div class = 'close-box' @click = 'closeProductOp'>
                    <img src = '../../assets/icon/close.svg'>
                </div>
                <div v-if = "productShowType === 'user_choice'" class = 'product-user_choice'>
                    <div class = 'user-choice-result'>
                        <div class = 'result-img'>
                            <img>
                        </div>
                        <div class = 'result-type'>
                            
                        </div>
                        <div></div>
                    </div>
                    <div class = 'user-choice-option'>
                        <div v-for = '(option, opIndex) in buyOption'>
                            <div class = 'option-name'>
                                {{ option.name }}
                            </div>
                            <div class = 'option-contents'>
                                <div v-for = '(item, itemIndex) in option.list' :class = "['option-content', {'option-content-version': option.name === '版本'}]">
                                    <span> {{ item.name }} </span>
                                    <span v-show = 'item.price'> {{ item.price }} </span>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class = 'user-choice-num'>
                        <div class = 'num-title'>购买数量</div>
                        <div class = 'num-counter'>
                            <div class = 'num-counter-sign'>-</div>
                            <div>1</div>
                            <div class = 'num-counter-sign'>+</div>
                        </div>
                    </div>
                </div>
                <div v-else-if = "productShowType === 'user_address'">
                    
                </div>
            </div>
        </div>
        <main>
            <div class = 'gallery-view'>
                <swiper :options = 'swiperOption'>
                    <div class = 'swiper-slide' v-for = '(item, index) in viewContent.galleryView'>
                        <img :src = 'item' >
                    </div>
                    <div class="swiper-pagination swiper-pagination-white swiper-pagination-bullets" slot="pagination"></div>
                </swiper>
            </div>
            <div class = 'title-view'>
                <div class = 'title-view-name'>
                    {{ viewContent.titleView.name }}
                </div>
                <div class = 'title-view-brief' v-html = 'viewContent.titleView.product_desc'></div>
                <div class = 'title-view-price'>
                    {{ viewContent.titleView.price }}
                </div>
            </div>
            <div class = 'buy-info'>
                <div class = 'buy-content buy-option' @click = "openProductOp('user_choice')">
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
            <div class = 'comment-view'>
                <router-link to = '../comment/list' tag = 'a' class = 'comment-view-title'>
                    <div>用户评价({{ viewContent.commentView.total }})</div>
                    <div><span style = 'color: #F70A17'>{{ viewContent.commentView.detail.satisfy_per }}%</span>满意</div>
                </router-link>
                <div v-for = '(commentItem, index) in viewContent.commentView.list'>
                    <router-link tag = 'a' :to = "`../comment/view?id=${ commentItem.comment_id }`" class = 'comment-view-content'>
                        <div class = 'comment-user'>
                            <div class = 'user-head'>
                                <img :src = 'commentItem.user_avatar'>
                            </div>
                            <div class = 'user-info'>
                                <div class = 'user-info-name'>
                                    {{ commentItem.user_name }}
                                </div>
                                <div class = 'user-info-time'>
                                    {{ commentItem.add_time }}
                                </div>
                            </div>
                            <div class = 'user-grade'><span>超爱</span></div>
                        </div>
                        <div class = 'comment-content'>
                            <div class = 'content-text'>
                                {{ commentItem.comment_content }}
                            </div>
                            <div class = 'content-img'>
                                <img v-for = '(img, imgIndex) in commentItem.comment_images' :src = 'img'>
                            </div>
                        </div>
                        <div class = 'comment-reply'>
                            <div class = 'reply-item reply-item-official' v-show = 'commentItem.reply_content'>
                                <span style = 'color: #0AAD64'>官方回复：</span>{{ commentItem.reply_content }}
                            </div>
                            <div v-for = '(item, index) in commentItem.user_replys' class = 'reply-item'>
                                <div class = 'reply-user'>
                                    <div class = 'reply-user-info'>
                                        <div class = 'reply-user-head'>
                                            <img :src = 'item.user_avatar'>
                                        </div>
                                        <div class = 'reply-user-name'>
                                            {{ item.user_name }}：
                                        </div>
                                    </div>
                                    <div class = 'reply-user-content'>
                                        {{ item.reply_content }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class = 'descTabs-view'>
                <div class = 'descTabs-view-title'>
                    <div v-for = '(item, index) in viewContent.descTabsView' :class = "['title-option', {'title-optio-onthis': state.descFlag === index}]" @click = 'changeDescTabs(index)'>
                        {{ item.name }}
                    </div>
                </div>
                <div class = 'descTabs-view-content'>
                    <transition name = 'desc_animate' mode = 'out-in'>
                        <div v-for = '(contentItem, contentIndex) in viewContent.descTabsView' v-if = 'state.descFlag === contentIndex' class = 'content-main' :key = 'contentIndex'>
                            <div v-for = '(item, index) in contentItem.tabContent' class = 'content-box-img'>
                                <img :src = 'item.plainView.img'>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </main>
        <footer></footer>
    </div>
</template>

<script>
import axios from 'axios'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  	name: 'user',
    data () {
        return {
            state: {
                //详细内容状态
                descFlag: 0
            },

            //产品选择页面
            productOpFlag: false,
            //产品选择页面动画
            productOpAnimaFlag: false,
            //产品盒子显示类型
            productShowType: '',

            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                },
                resistanceRatio: 0
            },
            //产品信息
            productInfo: {},
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
        }
    },
    components: {
        swiper,  
        swiperSlide,
    },
    methods: {
        getProductData () {
            axios({
                method: 'get',
                url: 'http://localhost:3000/product/data',
                params: {
                    productId: window.location.href.split('=')[1]
                }
            })
            .then((res) => {
                console.log(res.data.data);
                let _data = res.data.data.data;
                this.$set(this.viewContent, 'galleryView', _data.view_content.galleryView.galleryView);
                this.$set(this.viewContent, 'titleView', _data.view_content.titleView.titleView);
                this.$set(this.viewContent, 'commentView', _data.view_content.commentView.commentView);
                this.$set(this.viewContent, 'descTabsView', _data.view_content.descTabsView.descTabsView);
                // console.log(_data.view_content.commentView.commentView);
                this.buyOption = _data.buy_option;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        changeDescTabs (_index) {
            this.$set(this.state, 'descFlag', _index);
        },

        /***  做完换  ***/
        openProductOp (_type) {
            this.productShowType = _type;
            this.productOpFlag = true;
            this.productOpAnimaFlag = true;
            // this.$refs.product.addEventListener('touchmove', this.stopScroll, false);
            // document.addEventListener('scroll', this.stopScroll, false);
        },
        closeProductOp () {
            this.productOpFlag = false;
            this.productOpAnimaFlag = false;
            // this.$refs.product.removeEventListener('touchmove', this.stopScroll, false);
            // document.removeEventListener('scroll', this.stopScroll, false);
        },
        //用来禁止滑动
        stopScroll (event) {
            event.preventDefault();
        },
    },
    created () {
        this.getProductData();
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
    #product {
        .product-box {
            width: 100%;
            height: 100%;
            z-index: -1;
            position: absolute;
            .product-mask{
                width: 100%;
                height: 100%;
                opacity: 0.8;
                z-index: 998;
                pointer-events: none;
                position: absolute;
                background-color: black;
            }
            .product-info-box {
                bottom: 0;
                z-index: 999;
                width: 7.2rem;
                position: fixed;
                overflow: scroll;
                max-height: 9.6rem;
                margin-bottom: -10rem;
                transition: all 0.5s;
                box-sizing: border-box;
                background-color: white;
                padding: 0.32rem 0.32rem 1.27rem 0.32rem;
                .close-box {
                    top: 0;
                    right: 0;
                    margin: 0.3rem;
                    position: absolute;
                    text-align: center;
                    img {
                        width: 0.3rem;
                        height: 0.3rem;
                    }
                }
                .product-user_choice {
                    .user-choice-option {
                        .option-name {
                            font-size: 0.24rem;
                            line-height: 0.24rem;
                            padding-top: 0.32rem;
                            padding-bottom: 0.16rem;
                            color: rgba(0, 0, 0, 0.87);
                        }
                        .option-contents {
                            padding-bottom: 0.32rem;
                            .option-content {
                                height: .72rem;
                                padding: 0 0.32rem;
                                text-align: center;
                                line-height: .72rem;
                                display: inline-flex;
                                box-sizing: border-box;
                                border: 1px solid white;
                                margin: .16rem 0 0 .16rem;
                                justify-content: space-between;
                                span {
                                    font-size: 0.24rem;
                                }
                            }
                            .option-content-version {
                                width: 100%;
                            }
                        }
                    }
                    .user-choice-num {
                        display: flex;
                        padding: 0.32rem 0;
                        justify-content: space-between;
                        .num-title {
                            font-size: 0.24rem;
                            line-height: 0.24rem;
                            color: rgba(0,0,0,.87);
                            padding-bottom: 0.16rem;
                        }
                        .num-counter {
                            display: inline-flex;
                            align-items: center;
                            box-sizing: border-box;
                            border: 1px solid #EEEEEE;
                            div {
                                min-width: 0.6rem;
                                text-align: center;
                                vertical-align: middle;
                            }
                            .num-counter-sign {
                                width: 0.6rem;
                                height: 0.6rem;
                                color: #CECECE;
                                font-size: 0.5rem;
                                background-color: #FAFAFA;
                            }
                        }
                    }
                }
            }
            .product-info-box-show {
                margin-bottom: 0;
            }
        }
        .product-box-show {
            z-index: 1000;
        }
        main {
            width: 100%;
            height: 100%;
            // overflow: hidden;
            padding-bottom: 0.9rem;
            background-color: #EFEFEF;
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
            .title-view {
                background-color: white;
                padding: 0.2rem 0.32rem 0;
                .title-view-name {
                    font-size: 0.36rem;
                    line-height: 1.5em;
                }
                .title-view-brief {
                    font-size: 0.24rem;
                    line-height: 1.5em;
                    text-align: justify;
                    color: rgba(0,0,0,.54);
                }
                .title-view-price {
                    color: #0AAD64;
                    font-size: 0.48rem;
                    font-weight: 700;
                    line-height: 1em;
                    box-sizing: border-box;
                    padding: 0.2rem 0 0.2rem 0.3rem;
                    background-size: 0.4rem;
                    background-position: left;
                    background-repeat: no-repeat;
                    background-image: url('../../assets/icon/rmb1.svg');
                }
            }
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
            .comment-view {
                width: 100%;
                margin-top: 0.16rem;
                background-color: white;
                .comment-view-title {
                    width: 100%;
                    color: #9B9B9B;
                    padding: 0.32rem;
                    font-size: 0.24rem;
                    position: relative;
                    display: inline-flex;
                    box-sizing: border-box;
                    justify-content: space-between;
                }
                .comment-view-content {
                    width: 100%;
                    display: inline-block;
                    box-sizing: border-box;
                    padding: 0.24rem 0.32rem;
                    .comment-user {
                        width: 100%;
                        display: inline-flex;
                        flex-wrap: nowrap;
                        align-items: center;
                        justify-content: space-between;
                        .user-head {
                            width: 0.8rem;
                            height: 0.8rem;
                            overflow: hidden;
                            border-radius: 100%;
                            margin-right: .24rem;
                            img {
                                width: 100%;
                            }
                        }
                        .user-info {
                            width: 4.52rem;
                            display: block-flex;
                            .user-info-name {
                                display: block;
                                line-height: 1.15;
                                font-size: 0.28rem;
                            }
                            .user-info-time {
                                opacity: 0.54;
                                display: block;
                                line-height: 1.15;
                                font-size: 0.22rem;
                                margin-top: 0.05rem;
                            }
                        }
                        .user-grade {
                            width: 1rem;
                            color: #0AAD64;
                            height: 0.36rem;
                            font-size: 0.22rem;
                            padding-left: 0.5rem;
                            line-height: 0.36rem;
                            box-sizing: border-box;
                            background: url('../../assets/icon/good.svg');
                            background-repeat: no-repeat;
                            background-size: 0.4rem 0.4rem;
                        }
                    }
                    .comment-content {
                        .content-text {
                            padding: 0.12rem 0;
                            font-size: 0.26rem;
                            line-height: 1.5em;
                            text-align: justify;
                        }
                        .content-img {
                            width: 100%;
                            margin-bottom: .12rem;
                            display: inline-flex;
                            flex-wrap: wrap;
                            img {
                                width: 1.6rem;
                                height: 1.6rem;
                                margin: 0 0.08rem 0.08rem 0;
                            }
                        }
                    }
                    .comment-reply {
                        padding: 0.16rem;
                        background-color: #f6f6f6;
                        .reply-item {
                            width: 100%;
                            padding: 0.1rem 0;
                            font-size: 0.22rem;
                            line-height: 1.5;
                            letter-spacing: 1px;
                            text-align: justify;
                            .reply-user {
                                width: 100%;
                                .reply-user-info {
                                    height: 0.4rem;
                                    align-items: center;
                                    display: inline-flex;
                                    .reply-user-head {
                                        width: 0.32rem;
                                        height: 0.32rem;
                                        margin-right: 0.2rem;
                                        img {
                                            width: 100%;
                                            border-radius: 100%;
                                        }
                                    }
                                }
                                .reply-user-content {
                                    width: 100%;
                                    text-align: justify;
                                }
                            }
                        }
                    }
                }
            }
            .descTabs-view {
                width: 100%;
                margin-top: 0.16rem;
                background-color: white;
                .descTabs-view-title {
                    width: 100%;
                    height: 0.88rem;
                    display: inline-flex;
                    align-items: center;
                    .title-option {
                        flex-grow: 1;
                        text-align: center;
                        text-indent: 2px;
                        letter-spacing: 2px;
                    }
                    .title-optio-onthis {
                        color: #0AAD64;
                    }
                }
                .descTabs-view-content {
                    // position: relative;
                    .desc_animate-enter {
                        opacity: 0;
                    }
                    .desc_animate-leave-to {
                        opacity: 1;
                    }
                    .desc_animate-enter-active {
                        // opacity: 1;
                        transition: opacity 0.2s;
                    }
                    .desc_animate-leave-active {
                        opacity: 0;
                        transition: opacity 0.2s;
                    }
                    .content-main {
                        width: 100%;
                        line-height: 0;
                        .content-box-img {
                            // width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                    }
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
</style>
