<template>
    <div id="category">
        <header>
            <Head title = '分类' search = 'true'></Head>
        </header>
        <!-- 懒加载动画 -->
        <Loading :loading-show = 'isLoading'></Loading>
        <main :style = "{height: `${watchHeight}rem`}">
            <div class="side left" ref = 'leftSide'>
                <ul class="side-menu">
                    <li v-for = '(option, menuIndex) in categoryData' :class = "{'categoryMenu-onthis': menuIndex === categoryMenuFlag}" @click = 'toThis(menuIndex)' ref = 'optionDom'>{{ option.category_name }}</li>
                </ul>
            </div>
            <div class="side right" ref = 'rightSide' @scroll = 'watchScroll'>
                <div v-for = '(option, optionIndex) in categoryData' :class = "['side-content', `category${optionIndex}`]" ref = 'dataDom'>
                    <div v-for = '(data, dataIndex) in option.category_list'>
                        <CellsAutoFill v-if = "data.view_type === 'cells_auto_fill'" :type-body = 'data.body'></CellsAutoFill>
                        <div v-else-if = "data.view_type === 'category_title'" :class = 'data.view_type'>
                            <span>
                                {{ data.body.category_name }}
                            </span>
                        </div>
                        <div v-else-if = "data.view_type === 'category_group'" :class = 'data.view_type'>
                            <div class="category-product" v-for = '(item, itemIndex) in  data.body.items'>
                                <a @click = 'routerPath(item.action.type, item.action.path)'>
                                    <div class="category-product-img">
                                        <img :src = 'item.img_url'>
                                    </div>
                                    <div class="category-product-name">
                                        {{ item.product_name }}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../../../components/header/Head.vue'
import changeRouter from '../../../router/changeRouter.js'
import loading from '../../../components/common/loading.vue'
import cellsAutoFill from '../../../components/common/type/cellsAutoFill.vue'



export default {
  	name: 'category',
  	data () {
  		return {
            watchHeight: (window.innerHeight / (document.body.clientWidth * 100 / 720)) - 0.9 - 1.11,
            fontSize: document.body.clientWidth * 100 / 720,
            categoryData: null,
            categoryMenuFlag: 0,
            isLoading: false
  		}   
  	},
    components: {
        'Head': Head,
        'Loading': loading,
        'CellsAutoFill': cellsAutoFill,
    },
    methods: {
        toThis (index) {
            this.categoryMenuFlag = index;
            // console.log(this.categoryMenuFlag);
            this.$refs.rightSide.scrollTop = this.$refs.dataDom[index].offsetTop - this.$refs.dataDom[0].offsetTop;
        },
        //获取后台数据
        getCategoryData () {
            this.isLoading = true;
            axios({
                method: 'get',
                url: 'http://localhost:3000/host/categoryPage/data',
            })
            .then((res) => {
                this.isLoading = false;
                console.log(res.data.data.data);
                this.categoryData = res.data.data.data;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        //监听滚动条改变菜单
        watchScroll () {
            for (let i = 0; i <  this.$refs.dataDom.length; i++) {
                if(this.$refs.dataDom[i].offsetTop - this.$refs.dataDom[0].offsetTop <= this.$refs.rightSide.scrollTop) {
                    this.categoryMenuFlag = i;
                }
            }
            if(this.$refs.optionDom[this.categoryMenuFlag].offsetTop >= this.watchHeight * this.fontSize) {
                this.$refs.leftSide.scrollTop += (0.9 * this.fontSize);
            } else if (this.$refs.optionDom[this.categoryMenuFlag].offsetTop - this.$refs.optionDom[0].offsetTop < this.$refs.leftSide.scrollTop) {
                this.$refs.leftSide.scrollTop -= (0.9 * this.fontSize);
            }
        },
        //动态获取尺寸
        getSize () {
            this.watchHeight = (window.innerHeight / (document.body.clientWidth * 100 / 720)) - 0.9 - 1.11;
            this.fontSize = document.body.clientWidth * 100 / 720;
        },
        //router位置
        routerPath (type, id) {
            changeRouter(this, type, id);
        }
    },
    created () {
        this.getCategoryData();
        window.addEventListener('resize', this.getSize, false);
    },
}
</script>

<style lang="scss" scoped>
    #category {
        padding-bottom: 1.11rem;
        header {
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 9999;
            height: 0.9rem;
            position: fixed;
        }
        main {
            display: flex;
            padding-top: 0.9rem;
            position: relative;
            .side {
                height: 100%;
                overflow: scroll;
            }
            .left {
                width: 1.52rem;
                border-right: 1px solid #EFEFEF;
                .side-menu {
                    padding: 0.2rem 0;
                    li {
                        height: 0.9rem;
                        transition: 0.2s;
                        font-size: 0.26rem;
                        line-height: 0.9rem;
                        text-align: center;
                        letter-spacing: 2px;
                        text-indent: 2px;
                    }
                    .categoryMenu-onthis {
                        color: #059B5A;
                        font-size: 0.34rem;
                    }
                }
            }
            .right {
                width: 5.68rem;
                padding: 0 0.32rem;
                box-sizing: border-box;
                .side-content {
                    .category_title {
                        position: relative;
                        margin-top: 0.2rem;
                        height: 1.28rem;
                        line-height: 1.28rem;
                        text-align: center;
                        letter-spacing: 2px;
                        text-indent: 2px;
                        span::before {
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 0.4rem;
                            border-top: 1px solid #E0E0E0;
                            margin-left: -0.85rem;
                        }
                        span::after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            right: 50%;
                            width: 0.4rem;
                            border-top: 1px solid #E0E0E0;
                            margin-right: -0.85rem;
                        }
                    }
                    .category_group { 
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        text-overflow: ellipsis;
                        .category-product {
                            width: 33.3333333333%;
                            margin: 0.2rem 0 0.3rem 0;
                            .category-product-img {
                                width: 1rem;
                                height: 1rem;
                                margin: 0 auto;
                                img {
                                    width: 1rem;
                                    height: 1rem;
                                }
                            }
                            .category-product-name {
                                overflow: hidden;
                                text-align: center;
                                font-size: 0.23rem;
                                margin-top: 0.28rem;
                                white-space: nowrap;
                                color: rgba(0,0,0,.54);
                                text-overflow: ellipsis;
                            }
                        }
                    }
                } 
            }
        }
    }
</style>
