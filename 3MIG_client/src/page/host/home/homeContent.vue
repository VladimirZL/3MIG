<template>
    <div id="home-content">
    	<div v-for = '(content, contentIndex) in homeContentPages' v-show = 'contentIndex === homeMenuIndex'>
    		<div class="a-page-content">
                <div v-for = '(data, dataIndex) in homeContentData[contentIndex]'>
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
    	</div>
    </div>
</template>

<script>
import gallery from '../../../components/common/type/gallery.vue'
import galleryCustom from '../../../components/common/type/galleryCustom.vue'
import cellsAutoFill from '../../../components/common/type/cellsAutoFill.vue'
import listVideo from '../../../components/common/type/listVideo.vue'
import dividerLine from '../../../components/common/type/dividerLine.vue'
import listActionTitle from '../../../components/common/type/listActionTitle.vue'
import luckyDrawType from '../../../components/common/type/luckyDrawType.vue'
import productInfo from '../../../components/common/type/productInfo.vue'


export default {
  	name: 'homeContent',
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
  	props: ['homeContentPages', 'homeContentData', 'homeMenuIndex'],
  	beforeUpdate () {
  		console.log(this.homeContentData);
  	}
}
</script>

<style lang="scss" scoped>
	#home-content {
        width: 100%;
	}
</style>
