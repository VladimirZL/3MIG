<template>
    <div class = 'title-view'>
        <div class = 'title-view-name'>
            {{ titleView.name }}
        </div>
        <div class = 'title-view-brief' v-html = 'titleView.product_desc'></div>
        <div class = 'title-view-price'>
            {{ titleView.price }}
        </div>
    </div>
</template>

<script>

export default {
  	name: 'title-view',
  	props: ['titleView']
}
</script>

<style lang="scss" scoped>
    .title-view {
        background-color: white;
        padding: 0.2rem 0.32rem 0;
        .title-view-name {
            font-size: 0.36rem;
            line-height: 1.5em;
        }
        .title-view-brief {
            font-size: 0.24rem;
            line-height: 1.5em;
            text-align: justify;
            color: rgba(0,0,0,.54);
        }
        .title-view-price {
            color: #0AAD64;
            font-size: 0.48rem;
            font-weight: 700;
            line-height: 1em;
            box-sizing: border-box;
            padding: 0.2rem 0 0.2rem 0.3rem;
            background-size: 0.4rem;
            background-position: left;
            background-repeat: no-repeat;
            background-image: url('../../../../assets/icon/rmb1.svg');
        }
    }
</style>
