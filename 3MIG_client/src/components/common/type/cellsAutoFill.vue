<template>
    <div class = 'cells_auto_fill' :style = "{height: `${typeBody.h / 100}rem`, width: `${typeBody.w / 100}rem`}">
        <a v-for = '(item, routerIndex) in typeBody.items' @click = 'routerPath(item.action.type, item.action.path)' :style = "{height: `${item.h / 100}rem`, width: `${item.w / 100}rem`, display: 'inline-block'}">
            <img :src='item.img_url' :style = "{height: `${item.h / 100}rem`, width: `${item.w / 100}rem`}">
        </a>
    </div>
</template>
<!-- :class = "{'special-position': dataIndex === 3 && routerIndex === 2}" -->
<script>
import changeRouter from '../../../router/changeRouter.js'

export default {
  	name: 'cellsAutoFill',
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
	.cells_auto_fill {
        position: relative;
        a {
            vertical-align:top;
            display: inline-flex !important;
        }
        .special-position {
            position: absolute;
            bottom: 0;
            left: 3.58rem;
        }
    }
</style>
