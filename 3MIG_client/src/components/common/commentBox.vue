<!-- 评论显示组件 -->

<template>
    <div class = 'comment-box'>
		<router-link tag = 'a' :to = "{ 'name': 'host-comment-view', 'params': { 'id': `${commentContent.comment_id}` } }" class = 'comment-box-content'>
            <div class = 'comment-user'>
                <div class = 'user-head'>
                    <img :src = 'commentContent.user_avatar'>
                </div>
                <div class = 'user-info'>
                    <div class = 'user-info-name'>
                        {{ commentContent.user_name }}
                    </div>
                    <div class = 'user-info-time'>
                        {{ commentContent.add_time }}
                    </div>
                </div>
                <div class = 'user-grade'><span>超爱</span></div>
            </div>
            <div class = 'comment-content'>
                <div class = 'content-text'>
                    {{ commentContent.comment_content }}
                </div>
                <div class = 'content-img'>
                    <img v-for = '(img, imgIndex) in commentContent.comment_images' :src = 'img'>
                </div>
            </div>
            <div class = 'comment-reply'>
                <div class = 'reply-item reply-item-official' v-show = 'commentContent.reply_content'>
                    <span style = 'color: #0AAD64'>官方回复：</span>{{ commentContent.reply_content }}
                </div>
                <div v-for = '(item, index) in commentContent.user_replys' class = 'reply-item'>
                    <div class = 'reply-user'>
                        <div class = 'reply-user-info'>
                            <div class = 'reply-user-head'>
                                <img :src = 'item.user_avatar'>
                            </div>
                            <div class = 'reply-user-name'>
                                {{ item.user_name }}：
                            </div>
                        </div>
                        <div class = 'reply-user-content'>
                            {{ item.reply_content }}
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>

export default {
  	name: 'comment-box',
  	props: ['commentContent'],

}
</script>

<style lang="scss" scoped>
	.comment-box-content {
        width: 100%;
        display: inline-block;
        box-sizing: border-box;
        border-bottom: 1px solid #e5e5e5;
        padding: 0.24rem 0.32rem 0.32rem 0.32rem;
        .comment-user {
            width: 100%;
            display: inline-flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            .user-head {
                width: 0.8rem;
                height: 0.8rem;
                overflow: hidden;
                border-radius: 100%;
                margin-right: .24rem;
                img {
                    width: 100%;
                }
            }
            .user-info {
                width: 4.52rem;
                display: block-flex;
                .user-info-name {
                    display: block;
                    line-height: 1.15;
                    font-size: 0.28rem;
                }
                .user-info-time {
                    opacity: 0.54;
                    display: block;
                    line-height: 1.15;
                    font-size: 0.22rem;
                    margin-top: 0.05rem;
                }
            }
            .user-grade {
                width: 1rem;
                color: #0AAD64;
                height: 0.36rem;
                font-size: 0.22rem;
                padding-left: 0.5rem;
                line-height: 0.36rem;
                box-sizing: border-box;
                background: url('../../assets/icon/good.svg');
                background-repeat: no-repeat;
                background-size: 0.4rem 0.4rem;
            }
        }
        .comment-content {
            .content-text {
                padding: 0.12rem 0;
                font-size: 0.26rem;
                line-height: 1.5em;
                text-align: justify;
            }
            .content-img {
                width: 100%;
                margin-bottom: .12rem;
                display: inline-flex;
                flex-wrap: wrap;
                img {
                    width: 1.6rem;
                    height: 1.6rem;
                    margin: 0 0.08rem 0.08rem 0;
                }
            }
        }
        .comment-reply {
            padding: 0.16rem;
            background-color: #f6f6f6;
            .reply-item {
                width: 100%;
                padding: 0.1rem 0;
                font-size: 0.22rem;
                line-height: 1.5;
                letter-spacing: 1px;
                text-align: justify;
                .reply-user {
                    width: 100%;
                    .reply-user-info {
                        height: 0.4rem;
                        align-items: center;
                        display: inline-flex;
                        .reply-user-head {
                            width: 0.32rem;
                            height: 0.32rem;
                            margin-right: 0.2rem;
                            img {
                                width: 100%;
                                border-radius: 100%;
                            }
                        }
                    }
                    .reply-user-content {
                        width: 100%;
                        text-align: justify;
                    }
                }
            }
        }
    }
</style>
