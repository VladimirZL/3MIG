<template>
    <div class = 'buy-info'>
        <div class = 'buy-content buy-option' v-for = '(activeItem, index) in goodActivies' @click = "openProductBox('user_active')">
            <div class = 'option-tittle'>促销</div>
            <div class = 'option-info'>
                <span style = 'color: #0AAD64'>{{ activeItem.type_desc }}</span> {{ activeItem.title }}
            </div>
        </div>
        <div class = 'buy-content buy-option' @click = "openProductBox('user_choice')">
            <div class = 'option-tittle'>已选</div>
            <div class = 'option-all'>
                <div class = 'option-info'>
                    {{ goodInfo.name }} x{{ goodInfo.good_num }}
                </div>
                <div class = 'option-service'>
                    <span v-for = '(item, index) in goodInfo.service_bargins'>
                        <span v-if = 'item.service_choose !== -1' style = 'margin-right: 0.08rem;'>
                            {{ item.service_info[item.service_choose].service_short_name }}
                        </span>
                    </span>
                </div>
            </div>
        </div>
        <div class = 'buy-content buy-option' @click = "openProductBox('user_address')">
            <div class = 'option-tittle'>送至</div>
            <div class = 'option-info'>xxxxxxxx</div>
        </div>
        <div class = 'buy-serve buy-option'>
            <div v-for = '(goodItem, index) in goodInfo.service_refound_policy_list.list'>
                {{ goodItem.item_name }}
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  	name: 'buy-info',
  	data () {
  		return {
  		}
  	},
    props: ['goodInfo', 'goodActivies'],
    methods: {
        openProductBox (_type) {
            this.$parent.productShowType = _type;
            this.$parent.productShow = true;
        },
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
            .option-all {
                width: 100%;
                overflow: hidden;
                .option-info {
                    text-overflow: ellipsis;
                    padding-right: 0.2rem;
                }
                .option-service {
                    margin-top: 0.08rem;
                    padding-right: 0.2rem;
                    text-overflow: ellipsis;
                }
            }
        }
        .buy-content:after {
            @include arrow;
        }
        .buy-serve {
            font-size: 0.24rem;
            line-height: 0.4rem;
            div {
                opacity: 0.6;
                font-size: 0.2rem;
                margin-right: 0.2rem;
                padding-left: 0.3rem;
                background-image: url('../../../../assets/icon/yes.svg');
                background-repeat: no-repeat;
                background-position: 0 0.05rem;
            }
        }
    }
</style>
