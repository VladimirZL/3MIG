<template>
    <div class = 'product-parameter' ref = 'productParameter'>
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
            <div class = 'user-choice-main'>
                <div class = 'user-choice-option'>
                    <div v-for = '(option, opIndex) in buyOption'>
                        <div class = 'option-name'>
                            {{ option.name }}
                        </div>
                        <div class = 'option-contents'>
                            <div v-for = '(item, itemIndex) in option.list' 
                                :class = "['option-content', {'option-content-version': option.name === '版本'}, {'onthis-option': option.choose === itemIndex}]" 
                                @click = 'chooseThis(opIndex, itemIndex)'>
                                <span> {{ item.name }} </span>
                                <span v-show = 'item.price'> {{ item.price }} </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div class = 'user-choice-num'>
                    <div class = 'num-title'>购买数量</div>
                    <div class = 'num-counter'>
                        <div :class = "['num-counter-sign', {'num-counter-sign-canChange': canSub === true}]" @click = "changeNumber('sub')">-</div>
                        <div>{{ buyNum }}</div>
                        <div :class = "['num-counter-sign', {'num-counter-sign-canChange': canAdd === true}]" @click = "changeNumber('add')">+</div>
                    </div>
                </div>
                <div class = 'user-choice-service'>
                    <div v-for = '(serviceItem, serviceIndex) in goodInfo.service_bargins' class = 'service-type'>
                        <div class = 'service-type-name'>
                            {{ serviceItem.type_name }}
                            <a :href = 'serviceItem.service_url'>
                                <img src = '../../../../assets/icon/what.png'>
                            </a>
                        </div>
                        <div v-for = '(optionItem, index) in serviceItem.service_info' 
                            :class = "['service-option', {'onthis-service-option': serviceItem.service_choose === index}]" 
                            @click = 'chooseService(serviceIndex, index)'>
                            {{ optionItem.service_short_name }} {{ optionItem.service_price }}元
                        </div>
                    </div>
                </div>
            </div>
            <div class = 'user-choice-footer'>
                {{ goodInfo.action_button.button_title }}
            </div>
        </div>
        <div v-else-if = "productShowType === 'user_active'" class = 'product-good_active'>
            <div class = 'good_active-title'>
                促销
            </div>
            <div v-for = '(activeItem, index) in goodActivies' class = 'good_active-content'>
                <span style = 'color: #0AAD64'>{{ activeItem.type_desc }}</span> {{ activeItem.title }}
            </div>
        </div>
        <div v-else-if = "productShowType === 'user_address'">
            这是地址
        </div>
    </div>
</template>

<script>

export default {
    name: 'product-parameter',
    data () {
        return {
            buyNum: 1,
            canAdd: true,
            canSub: false,
            choiceID: [],
        }
    },
    props: ['buyOption', 'productShowType', 'goodInfo', 'goodActivies'],
    methods: {
        //关闭产品盒子
        closeProductParameter () {
            // console.log(this.goodActivies);
            this.$parent.productShow = false;
            //让滚动条回到一开始
            this.$refs.productParameter.scrollTop = 0;
        },
        //选择
        chooseThis (_optionIndex, _index) {
            this.$set(this.buyOption[_optionIndex], 'choose', _index);
            //修改选择的ID
            if (this.choiceID.length < this.goodInfo.prop_list.length) {
                for (let item of this.buyOption) {
                    this.choiceID.push({
                        typeID: item.prop_cfg_id,
                        itemID: item.list[item.choose].prop_value_id
                    })
                }
            } else {
                this.$set(this.choiceID[_optionIndex], `itemID`, this.buyOption[_optionIndex].list[_index].prop_value_id);
            }
            this.$emit('changeChoose', this.choiceID);
        },
        //改变数量
        changeNumber (_op) {
            switch (_op) {
                case 'add': {
                    if (this.buyNum < this.goodInfo.buy_limit) {
                        this.buyNum++;
                    }
                }
                break;
                case 'sub': {
                    if (this.buyNum > 1) {
                        this.buyNum--;
                    }
                }
                break;
            }
            this.canAdd = this.buyNum < this.goodInfo.buy_limit ? true : false;
            this.canSub = this.buyNum > 1 ? true : false;
            this.$emit('changeNum', this.buyNum);
        },
        //选择服务
        chooseService (_serviceIndex, _index) {
            if (this.goodInfo.service_bargins[_serviceIndex].service_choose === _index) {
                this.$set(this.goodInfo.service_bargins[_serviceIndex], 'service_choose', -1);
            } else {
                this.$set(this.goodInfo.service_bargins[_serviceIndex], 'service_choose', _index);
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
        min-height: 5rem;
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
            width: 100%;
            .user-choice-result {
                display: flex;
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
            .user-choice-main {
                max-height: 6rem;
                overflow-x: hidden;
                overflow-y: scroll;
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
                            opacity: 0.4;
                            width: 0.6rem;
                            height: 0.6rem;
                            // color: #CECECE;
                            font-size: 0.5rem;
                            background-color: #FAFAFA;
                        }
                        .num-counter-sign-canChange {
                            opacity: 0.8;
                        }
                    }
                }
                .user-choice-service {
                    .service-type {
                        padding: 0.32rem 0;
                        .service-type-name {
                            opacity: 0.87;
                            font-size: 0.24rem;
                            padding-bottom: 0.16rem;
                            a {
                                width: 0.28rem;
                                height: 0.28rem;
                                margin-left: 0.06rem;
                                display: inline-block;
                                vertical-align: middle;
                                img {
                                    width: 100%;
                                }
                            }
                        }
                        .service-option {
                            width: 50%;
                            height: 0.72rem;
                            overflow: visible;
                            text-align: center;
                            font-size: 0.24rem;
                            min-width: 1.45rem;
                            line-height: 0.72rem;
                            margin: 0.16rem 0 0 0.16rem;
                        }
                        .onthis-service-option {
                            color: #0AAD64;
                        }
                    }
                }
            }
            .user-choice-footer {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1rem;
                color: white;
                position: fixed;
                font-size: 0.28rem;
                line-height: 1rem;
                text-align: center;
                letter-spacing: 2px;
                background-color: #0AAD64;
            }
        }
        .product-good_active {
            .good_active-title {
                opacity: 0.87;
                text-align: center;
                font-size: 0.32rem;
                padding: 0.24rem 0;
            }
            .good_active-content {
                height: 1.04rem;
                padding-right: 10%;
                font-size: 0.24rem;
                white-space: nowrap;
                line-height: 1.04rem;
                box-sizing: border-box;
            }
        }
    }
</style>
