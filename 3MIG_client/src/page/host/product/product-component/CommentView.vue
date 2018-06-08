<template>
    <div class = 'comment-view'>
        <router-link :to = "{ 'name': 'host-product-comment-list', 'params': { 'id': `${$route.params.id}` } }" tag = 'a' class = 'comment-view-title'>
            <div>用户评价({{ commentView.total }})</div>
            <div><span style = 'color: #F70A17'>{{ commentView.detail.satisfy_per }}%</span>满意</div>
        </router-link>
        <div v-for = '(commentItem, index) in commentView.list'>
            <router-link tag = 'a' :to = "{ 'name': 'host-product-comment-view', 'params': { 'id': `${$route.params.id}` } }" class = 'comment-view-content'>
                <div class = 'comment-user'>
                    <div class = 'user-head'>
                        <img :src = 'commentItem.user_avatar'>
                    </div>
                    <div class = 'user-info'>
                        <div class = 'user-info-name'>
                            {{ commentItem.user_name }}
                        </div>
                        <div class = 'user-info-time'>
                            {{ commentItem.add_time }}
                        </div>
                    </div>
                    <div class = 'user-grade'><span>超爱</span></div>
                </div>
                <div class = 'comment-content'>
                    <div class = 'content-text'>
                        {{ commentItem.comment_content }}
                    </div>
                    <div class = 'content-img'>
                        <img v-for = '(img, imgIndex) in commentItem.comment_images' :src = 'img'>
                    </div>
                </div>
                <div class = 'comment-reply'>
                    <div class = 'reply-item reply-item-official' v-show = 'commentItem.reply_content'>
                        <span style = 'color: #0AAD64'>官方回复：</span>{{ commentItem.reply_content }}
                    </div>
                    <div v-for = '(item, index) in commentItem.user_replys' class = 'reply-item'>
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
    </div>
</template>

<script>

export default {
  	name: 'comment-view',
  	props: ['commentView']
}
</script>

<style lang="scss" scoped>
	.comment-view {
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
        .comment-view-content {
            width: 100%;
            display: inline-block;
            box-sizing: border-box;
            padding: 0.24rem 0.32rem;
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
                    background: url('../../../../assets/icon/good.svg');
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
    }
</style>
