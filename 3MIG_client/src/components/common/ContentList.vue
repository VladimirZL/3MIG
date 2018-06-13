<!-- 商品内容组件 -->

<template>
    <div class = 'content-list'>
        <div v-for = '(data, dataIndex) in contentList'>
            <Gallery v-if = "data.view_type === 'gallery'" :type-body = 'data.body'></Gallery>
            <GalleryCustom v-else-if = "data.view_type === 'gallery_custom'" :type-body = 'data.body'></GalleryCustom>
            <CellsAutoFill v-else-if = "data.view_type === 'cells_auto_fill'" :type-body = 'data.body'></CellsAutoFill>
            <ListVideo v-else-if = "data.view_type === 'list_one_video2'" :type-body = 'data.body'></ListVideo>
            <DividerLine v-else-if = "data.view_type === 'divider_line'" :type-body = 'data.body'></DividerLine>    
            <ListActionTitle v-else-if = "data.view_type === 'list_action_title'" :type-body = 'data.body'></ListActionTitle>
            <LuckyDrawType v-else-if = "data.view_type === 'lucky_lottery_img'" :type-body = 'data.body'></LuckyDrawType>
            <ProductInfo v-else :product-data = 'data'></ProductInfo>
        </div>
    </div>
</template>

<script>
import gallery from './type/gallery.vue'
import galleryCustom from './type/galleryCustom.vue'
import cellsAutoFill from './type/cellsAutoFill.vue'
import listVideo from './type/listVideo.vue'
import dividerLine from './type/dividerLine.vue'
import listActionTitle from './type/listActionTitle.vue'
import luckyDrawType from './type/luckyDrawType.vue'
import productInfo from './type/productInfo.vue'


export default {
  	name: 'ContentList',
  	data () {
  		return {
  		}
  	},
    components: {
        'GalleryCustom': galleryCustom,
        'Gallery': gallery,
        'CellsAutoFill': cellsAutoFill,
        'ProductInfo': productInfo,
        'ListVideo': listVideo,
        'ListActionTitle': listActionTitle,
        'DividerLine': dividerLine,
        'LuckyDrawType': luckyDrawType
    },
  	props: ['contentList'],
}
</script>

<style lang="scss" scoped>
	.content-list {
        width: 100%;
	}
</style>
