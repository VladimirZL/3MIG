<!-- 弹窗组件一 -->

<template>
    <transition name = 'layer-animation'>
        <div class = 'my-layer' v-show = 'isShowLayer'>
     		<div class = 'my-layer-main'>
                <div class = 'my-layer-main-img'>
                    <img :src = 'contentImg'>
                </div>
                <div class = 'my-layer-main-msg'>
                    <span>
                        {{ contentMsg }}
                    </span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

export default {
  	name: 'my-layer',
    props: ['contentType', 'isLayer'],
    computed: {
        'contentImg': function () {
            switch (this.contentType) {
                case 'success': return require('../../assets/icon/layer/success.svg');
                break;
                case 'noAdd': return require('../../assets/icon/layer/mark.svg');
                break;
                case 'noSub': return require('../../assets/icon/layer/mark.svg');
                break;
            }
        },
        'contentMsg': function () {
            switch (this.contentType) {
                case 'success': return '成功加入购物车';
                break;
                case 'noAdd': return '已达到最大购买数量';
                break;
                case 'noSub': return '不可再减少';
                break;
            }
        },
        'isShowLayer': function () {
            return this.isLayer
        }
    }
}
</script>

<style lang="scss" scoped>
    .my-layer {
        width: 100%;
        height: 100%;
        z-index: 19989999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .my-layer-main {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            // opacity: 0.7;
            width: 3.2rem;
            height: 2.4rem;
            text-align: center;
            border-radius: 0.2rem;
            background-color: rgba(0, 0, 0, 0.7);
            .my-layer-main-img {
                display: inline-block;
                img {
                    width: 0.85rem;
                    height: 0.85rem;
                    margin: 0.45rem auto 0.3rem;
                }
            }
            .my-layer-main-msg {
                span {
                    color: white;
                }
            }
        }
    }
    .layer-animation-enter {
        opacity: 0;
    }
    .layer-animation-leave-to {
        opacity: 1;
    }
    .layer-animation-enter-active {
        transition: opacity 0.2s;
    }
    .layer-animation-leave-active {
        opacity: 0;
        transition: opacity 0.2s;
    }
</style>
