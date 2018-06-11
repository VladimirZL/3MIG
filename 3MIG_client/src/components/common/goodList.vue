<!-- 商品列表组件 -->

<template>
    <div class = 'good-list'>
 		<router-link tag = 'a' :to = "{ 'name': 'host-product-view', params: {id: `${goodItem.action.path}`}}">
            <div class = 'list-img'>
                <img :src = 'goodItem.image_url'>
            </div>
            <div class = 'list-info'>
                <div class = 'info-name'>
                    <span> {{ goodItem.product_name }} </span>
                </div>
                <div class = 'info-des' v-html = 'goodItem.product_desc'></div>
                <div class = 'info-price'>
                    <span> {{ goodItem.price_min }} </span>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>


export default {
  	name: 'good-list',
  	data () {
  		return {
  		}
  	},
    props: ['goodItem'],
}
</script>

<style lang="scss" scoped>
    .good-list {
        padding: 0 0 0.06 0rem;
        a {
            display: inline-flex;
            align-items: center;
            border-bottom: 1px solid #E4E4E4;
            .list-img {
                width: 3rem;
                height: 3rem;
                img {
                    width: 3rem;
                }
            }
            .list-info {
                padding: 0 0.32rem 0.08rem;
                .info-name {
                    font-size: 0.28rem;
                    margin-bottom: 0.16rem;
                }
                .info-des {
                    height: 0.6rem;
                    overflow: hidden;
                    font-size: 0.23rem;
                    margin-bottom: 0.16rem;
                    line-height: 0.3rem;
                }
                .info-price {
                    color: #0AAD64;
                    font-size: 0.32rem;
                    padding-left: 0.3rem;
                    background: url('../../assets/icon/rmb1.svg');
                    background-position: left;
                    background-repeat: no-repeat;
                    background-size: 0.3rem;
                }
            }
        }
    }
</style>
