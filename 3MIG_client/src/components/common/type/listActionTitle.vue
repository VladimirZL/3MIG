<template>
    <div class = 'list_action_title'>
        <a v-for = '(item, routerIndex) in typeBody.items' @click = 'routerPath(item.action.type, item.action.path)'>
            {{ item.action_title }}
        </a>
    </div>
</template>

<script>
import changeRouter from '../../../router/changeRouter.js'

export default {
  	name: 'listActionTitle',
  	data () {
  		return {
  		}
  	},
    props: ['typeBody'],
    methods: {
        routerPath (type, id) {
            changeRouter(this, type, id);
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
