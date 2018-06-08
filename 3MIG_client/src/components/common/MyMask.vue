<template>
    <div class = 'my-mask'></div>
</template>

<script>

export default {
  	name: 'myMask',
    data () {
        return {

        }
    },
  	props: [''],
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    .my-mask {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        z-index: 19980124;
        overflow: hidden;
        position: absolute;
        background-color: black;
    }
</style>
