<template>
    <div :class = 'productData.view_type' :style = "{backgroundColor: `${productData.body.bg_color}`}">
        <a v-for = '(item, itemIndex) in productData.body.items' @click = 'routerPath(item.action.type, item.action.path)'>
            <div class="product-imgs">
                <img :src = 'item.img_url' class="product-img">
                <img v-show = 'item.product_tag' :src = 'item.product_tag' class="product-tag">
            </div>
            <div class="product-info">
                <div class="product-name"> {{ item.product_name }} </div>
                <div class="product-brief">
                    {{ item.product_brief }}
                </div>
                <div class="product-price">
                    {{ parseInt(item.product_price) }}<span v-show = 'item.show_price_qi' style="font-size: 0.2rem; margin-left: 0.04rem;">起</span>
                </div>
                <ProductButton :btn-content = 'item.btn_txt'></ProductButton>
            </div>
        </a>
    </div>
</template>

<script>
import productButton from '../../../components/common/productButton.vue'

export default {
  	name: 'productInfo',
  	data () {
  		return {
  		}
  	},
    components: {
        'ProductButton': productButton
    },
    props: ['productData'],
    methods: {
        routerPath (type, id) {
            switch(type) {
                case 'product': this.$router.push({ path: '../product', query: {productId: `${id}`}});
                break;
                case 'channel': this.$router.push({ path: '../channel', query: {channelId: `${id}`}});
                break;
                case 'url': window.location.href = id;
                break;
                default: break;
            }
        }
    }
  	
}
</script>

<style lang="scss" scoped>
    // 默认
    .product-imgs {
        width: 3.6rem;
        height: 3.6rem;
        position: relative;
        .product-img {
            width: 3.6rem;
            height: 3.6rem;
        }
        .product-tag {
            top: 0;
            position: absolute;
            width: 0.8rem;
            height: 0.32rem;
        }
    }
    .product-name {
        color: black;
        overflow: hidden;
        font-size: 0.28rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .product-brief {
        color: #AFAFAF;
        font-size: 0.22rem;
        margin-top: 0.06rem;
        line-height: 0.3rem;
    }
    .product-price {
        line-height: 0.44rem;
        color: #ea625b;
        padding-left: 0.2rem;
        font-size: 0.28rem;
        background-size: 0.2rem;
        background-position: left;
        background-repeat: no-repeat;
        background-image: url('../../../assets/icon/RMB.svg');
    }

    //一行两项的第1种样式
	.list_two_type1 {
        display: inline-flex;
        justify-content: space-between;
        .product-info {
            width: 3.6rem;
            padding: 0.2rem;
            text-decoration: none;
            box-sizing: border-box;
            .product-brief {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    //一行两项的第13种样式
    .list_two_type13 {
        display: inline-flex;
        justify-content: space-between;
        .product-info {
            text-align: center;
            width: 3.6rem;
            padding: 0.2rem;
            text-decoration: none;
            box-sizing: border-box;
            background-color: white;
            .product-brief {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .product-price {
                display: inline-block;
            }
        }
    } 
    //一行一项的第2种样式
    .list_one_type2 {
        height: 3.6rem;
        a {
            display: inline-flex;
            justify-content: space-between;
        }
        .product-info {
            width: 3.6rem;
            height: 3.6rem;
            box-sizing: border-box;
            padding: 0.64rem 0.12rem 0 0.32rem;
            .product-brief {
                line-height: 0.35rem;
            }
            .product-price {
                margin-top: 0.2rem;
            }
        }
    }
    //一行一项的第3种样式
    .list_one_type3 {
        height: 3.6rem;
        a {
            display: inline-flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }
        .product-info {
            width: 3.6rem;
            height: 3.6rem;
            box-sizing: border-box;
            padding: 0.64rem 0.12rem 0 0.32rem;
            .product-brief {
                line-height: 0.35rem;
            }
            .product-price {
                margin-top: 0.2rem;
            }
        }
    }
    //一行一项的第12种样式
    .list_one_type12 {
        .product-imgs {
            width: 7.2rem;
            height: 3.6rem;
            .product-img {
                width: 7.2rem;
                height: 3.6rem;
            }
        }
        .product-info {
            height: 1.4rem;
            position: relative;
            width: 7.2rem;
            padding: 0.2rem;
            box-sizing: border-box;
            .product-name {
                line-height: 0.45rem;
                font-size: 0.32rem;
            }
            .product-price {
                font-size: 0.28rem;
                float: right;
                margin-top: -0.74rem;
            }
            .product-btn {
                float: right;
                margin-top: -0.3rem;
            }
        }
    }
    //一行一项的第14种样式
    .list_one_type14 {
        .product-imgs {
            margin: 0 0.12rem;
            width: 6.96rem;
            height: 4.36rem;
            .product-img {
                width: 6.96rem;
                height: 4.36rem;
            }
        }
        .product-info {
            height: 1.4rem;
            width: 6.96rem;
            padding: 0.2rem;
            margin: 0 0.12rem;
            box-sizing: border-box;
            background-color: white;
            .product-name {
                font-size: 0.31rem;
            }
            .product-brief {
                margin-bottom: 0.05rem;
            }
            .product-price {
                font-size: 0.28rem;
                float: right;
                margin-top: -0.74rem;
            }
            .product-btn {
                float: right;
                margin-top: -0.3rem;
            }
        }
    }
    
</style>
