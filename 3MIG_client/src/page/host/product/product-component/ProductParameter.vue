<template>
    <div class = 'product-parameter'>
        <div class = 'close-box' @click = 'closeProductParameter'>
            <img src = '../../../../assets/icon/close.svg'>
        </div>
        <div v-if = "productShowType === 'user_choice'" class = 'product-user_choice'>
            <div class = 'user-choice-result'>
                <div class = 'result-img'>
                    <img :src = 'goodInfo.image_share'>
                </div>
                <div class = 'result-type'>
                    <div class = 'result-price'>
                        {{ goodInfo.price }}
                    </div>
                    <div class = 'result-name'>
                        {{ goodInfo.name }}
                    </div>
                </div>
                <div></div>
            </div>
            <div class = 'user-choice-option'>
                <div v-for = '(option, opIndex) in buyOption'>
                    <div class = 'option-name'>
                        {{ option.name }}
                    </div>
                    <div class = 'option-contents'>
                        <div v-for = '(item, itemIndex) in option.list' :class = "['option-content', {'option-content-version': option.name === '版本'}, {'onthis-option': option.choose === itemIndex}]" @click = 'chooseThis(opIndex, itemIndex)'>
                            <span> {{ item.name }} </span>
                            <span v-show = 'item.price'> {{ item.price }} </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div class = 'user-choice-num'>
                <div class = 'num-title'>购买数量</div>
                <div class = 'num-counter'>
                    <div class = 'num-counter-sign' @click = "changeNum('sub')">-</div>
                    <div>{{ buyNum }}</div>
                    <div class = 'num-counter-sign' @click = "changeNum('add')">+</div>
                </div>
            </div>
        </div>
        <div v-else-if = "productShowType === 'user_address'">
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'product-parameter',
    data () {
        return {
            buyNum: 1,
            choiceID: {
                //选项ID
                optionID: 0,
                //选择ID
                itemID: 0
            },
        }
    },
    props: ['buyOption', 'productShowType', 'goodInfo'],
    methods: {
        //关闭产品盒子
        closeProductParameter () {
            this.$parent.productShow = false;
        },
        //选择
        chooseThis (_optionIndex, _index) {
            this.$set(this.buyOption[_optionIndex], 'choose', _index);
            // console.log(this.buyOption[_optionIndex].prop_cfg_id);
            // console.log(this.buyOption[_optionIndex].list[_index].prop_value_id);
            this.$set(this.choiceID, 'optionID', this.buyOption[_optionIndex].prop_cfg_id);
            this.$set(this.choiceID, 'itemID', this.buyOption[_optionIndex].list[_index].prop_value_id);
            console.log(this.choiceID);
            console.log(this.$parent.nowChoice);
        },
        // isthis () {
        //     console.log()
        // },
        //改变数量
        changeNum (_op) {
            if (_op === 'add') {
                this.buyNum++
            } else if (_op === 'sub' && this.buyNum > 1) {
                this.buyNum--
            }
        }
    },
}
</script>


<style lang="scss" scoped>
    .product-parameter {
        bottom: 0;
        width: 100%;
        position: fixed;
        overflow: scroll;
        z-index: 19980707;
        max-height: 9.6rem;
        transition: all 0.4s;
        box-sizing: border-box;
        background-color: white;
        padding: 0.32rem 0.32rem 1.27rem 0.32rem;
        .close-box {
            right: 0;
            z-index: 2;
            padding-right: 0.3rem;
            position: fixed;
        }
        .product-user_choice {
            .user-choice-result {
                display: flex;
                position: fixed;
                align-items: center;
                .result-img {
                    img {
                        width: 2rem;
                        height: 2rem;
                    }
                }
                .result-type {
                    width: 4.5rem;
                    box-sizing: border-box;
                    padding: 0.32rem 0.16rem;
                    .result-price {
                        color: #0AAD64;
                        font-size: 0.48rem;
                        line-height: 0.58rem;
                        padding-left: 0.45rem;
                        background-image: url('../../../../assets/icon/rmb1.svg');
                        background-size: 0.5rem;
                        background-position: left;
                        background-repeat: no-repeat;
                    }
                    .result-name {
                        font-size: 0.28rem;
                        line-height: 0.4rem;
                    }

                }
            }
            .user-choice-option {
                padding-top: 2rem;
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
                    .onthis-option {
                        color: #0AAD64;
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
</style>
