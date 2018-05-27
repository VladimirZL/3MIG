<template>
    <div class = 'list_action_title'>
        <a v-for = '(item, routerIndex) in typeBody.items' @click = 'routerPath(item.action.type, item.action.path)'>
            {{ item.action_title }}
        </a>
    </div>
</template>

<script>

export default {
  	name: 'listActionTitle',
  	data () {
  		return {
  		}
  	},
    props: ['typeBody'],
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
    .list_action_title {
        height: 1rem;
        font-size: 0.28rem;
        text-align: center;
        a {
            line-height: 1rem;
            text-decoration: none;
            text-align: center;
            color: #909090;
        }
    }
</style>
