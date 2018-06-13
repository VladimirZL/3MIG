<template>
    <div class = 'product-comment-view'>
        <router-link :to = "{ 'name': 'host-comment-list', 'params': { 'id': `${nowChoice.goods_id}` } }" tag = 'a' class = 'comment-view-title'>
            <div>用户评价({{ commentView.total }})</div>
            <div><span style = 'color: #F70A17'>{{ commentView.detail.satisfy_per }}%</span>满意 ></div>
        </router-link>
        <comment-box v-for = '(commentItem, index) in commentView.list' :comment-content = 'commentItem'></comment-box>
    </div>
</template>

<script>
import commentBox from '../../../../components/common/commentBox.vue'

export default {
  	name: 'product-comment-view',
  	props: ['commentView', 'nowChoice'],
    components: {
        'comment-box': commentBox
    }
}
</script>

<style lang="scss" scoped>
	.product-comment-view {
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
    }
</style>
