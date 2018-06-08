<template>
    <div class = 'descTabs-view'>
        <div class = 'descTabs-view-title'>
            <div v-for = '(item, index) in descTabsView' :class = "['title-option', {'title-optio-onthis': descFlag === index}]" @click = 'changeDescTabs(index)'>
                {{ item.name }}
            </div>
        </div>
        <div class = 'descTabs-view-content'>
            <transition name = 'desc_animate' mode = 'out-in'>
                <div v-for = '(contentItem, contentIndex) in descTabsView' v-if = 'descFlag === contentIndex' class = 'content-main' :key = 'contentIndex'>
                    <div v-for = '(item, index) in contentItem.tabContent' class = 'content-box-img'>
                        <img :src = 'item.plainView.img'>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

export default {
  	name: 'descTabs-view',
    data () {
        return {
            descFlag: 0
        }
    },
  	props: ['descTabsView'],
    methods: {
        //改变细节内容
        changeDescTabs (_index) {
            this.descFlag = _index;
        },
    }
}
</script>

<style lang="scss" scoped>
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
            .desc_animate-enter {
                opacity: 0;
            }
            .desc_animate-leave-to {
                opacity: 1;
            }
            .desc_animate-enter-active {
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
                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
