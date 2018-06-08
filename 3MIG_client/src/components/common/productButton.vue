<!-- 立即购买按钮 -->

<template>
    <div v-show = 'btnContent' class="product-btn">{{ btnContent }}</div>
</template>

<script>

export default {
  	name: 'product-btn',
  	data () {
  		return {
  		}	
  	},
  	props: ['btnContent']
}
</script>

<style lang="scss" scoped>
	.product-btn {
        width: 2rem;
        color: #fff;
        margin: 0 auto;
        font-weight: 700;
        padding: 0.16rem 0;
        font-size: 0.24rem;
        text-align: center;
        border-radius: 0.05rem;
        background-color: #08AF67;
    }
</style>
