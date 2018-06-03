<template>
    <div id = 'service'>
    	<header>
   			<Head title = '服务中心' search = 'true'></Head>
		</header>
		<main>
			<div class = 'self-service'>
				<h4>自助服务</h4>
				<div class = 'service-items'>
					<router-link v-for = '(item, index) in serviceItems' :to = "item.path" tag = 'a'>
						<img :src = 'item.img'>
					</router-link>
				</div>
			</div>
			<div class = 'service-online'>
				<div class = 'online-customer'>
					<router-link to = '' tag = 'a'>
						<img src = '../../../assets/icon/customer.png'>
						<span> 7x24小时在线客服 </span>
					</router-link>
				</div>
				<div class = 'online-tel'>
					<div class = 'three-tels'>
						<div v-for = '(item, index) in serviceTels' >
							<router-link :to = "item.path" tag = 'a'>
								<img :src = 'item.img'>
								<h3> {{ item.name }} </h3>
								<p> {{ item.phoneNum }} </p>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</main>
    </div>
</template>

<script>
import Head from '../../../components/header/Head.vue'

export default {
  	name: 'service',
  	data () {
  		return {
  			serviceItems: [
  				{
  					img: require('../../../assets/img/service/1.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/2.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/3.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/4.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/5.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/6.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/7.png'),
  					path: {}
  				},
  				{
  					img: require('../../../assets/img/service/8.png'),
  					path: {}
  				},
  			],
  			serviceTels: [
  				{
  					path: '',
  					name: '商城热线',
  					phoneNum: '400-100-5678',
  					img: require('../../../assets/icon/phone1.png')
  				},
  				{
  					path: '',
  					name: '金融热线',
  					phoneNum: '400-100-3399',
  					img: require('../../../assets/icon/phone2.png')
  				},
  				{
  					path: '',
  					name: '小米移动',
  					phoneNum: '400-922-3838',
  					img: require('../../../assets/icon/phone3.png')
  				}
  			]
  		}
	},
	components: {
		'Head': Head
	}
}
</script>

<style lang="scss" scoped>
	#service {
		padding-bottom: 1.11rem;
		header {
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
            z-index: 9999;
            height: 0.9rem;
            position: fixed;
		}
		main {
			padding-top: 0.9rem;
			.self-service {
				border-bottom: 0.16rem solid #F6F6F6;
				h4 {
					color: #919191;
					font-weight: 400;
					font-size: 0.24rem;
					margin-left: 0.32rem;
					line-height: 0.72rem;
					border-bottom: 1px solid #F6F6F6;
				}
				.service-items {
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					a {
						width: 25%;
						img {
							width: auto;
							height: 1.52rem;
						}
					}
				}
			}
			.service-online {
				width: 100%;
				.online-customer {
					border-bottom: 1px solid #F6F6F6;
					a {
						display: flex;
						padding: 0.3rem 0;
						font-size: 0.22rem;
						align-items: center;
						justify-content: center;
						img {
							width: 0.6rem;
							height: 0.6rem;
						}
						span {
							margin-left: 0.28rem;
						}
					}
				}
				.online-tel {
					width: 100%;
					display: flex;
					padding: 0.3rem 0;
					.three-tels {
						width: 100%;
						div {
							width: 33.3333333333%;
							display: inline-block;
							a {
								width: 100%;
								display: flex;
								align-items: center;
								flex-direction: column;
								justify-content: center;
								img {
									width: 0.62rem;
									height: 0.62rem;
								}
								h3 {
									font-size: 0.24rem;
									font-weight: 400;
									margin: 0.2rem 0 0.1rem 0;
								}	
								p {
									color: #969696;
									font-size: 0.2rem;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
