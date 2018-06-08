<template>
    <div id = 'login'>
    	<div class = 'login-all'>
	    	<div class = 'log-name'>
	    		<img src = '../../assets/img/logo1.png'>
	    		<h4>手机登陆</h4>
	    	</div>
	    	<div class = 'login-form'>
	    		<div class = 'login-input'>
	    			<div class = 'input-all input-username'>
	    				<input type = 'text' placeholder = '手机号码' v-model = 'username' @input = 'hiddenPromit'>
	    			</div>
	    			<div class = 'input-all input-vercode' v-if = 'isNeedVercode'>
	    				<input type = 'text' placeholder = '图片验证码' v-model = 'vercode' @input = 'hiddenPromit'>
	    				<div class = 'get-vercode'>
	    					<img src = 'https://account.xiaomi.com/pass/getCode?icodeType=login&1528025814055'>
	    				</div>
	    			</div>
	    			<div class = 'input-all input-phoneVcode'>
	    				<input type = 'text' placeholder = '短信验证码' v-model = 'phoneVcode' @input = 'hiddenPromit'>
	    				<div class = 'get-phoneVcode'>
	    					<span @click = 'checkGetPhoneVcode'>获取验证码</span>
	    					<!-- <span></span> -->
	    				</div>
	    			</div>
	    		</div>
	    		<div class = 'login-prompt' v-show = "promit !== ''">
	    			<span>{{ promit }}</span>
	    		</div>
	    		<div class = 'login-btn'>
	    			<input type = 'button' value = '立即登陆' @click = 'checkDoLogin'>
	    		</div>
	    	</div>
    	</div>
    </div>
</template>

<script>
import axios from 'axios'
import { setCookie, getCookie } from '../../config/cookie.js'

export default {
  	name: 'login',
  	data () {
  		return {
  			username: '',
  			//图片验证码
  			vercode: '',
  			//短信验证码
  			phoneVcode: '',
  			//提示信息
  			promit: '',
  			//手机号正则信息
  			phoneReg: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
  			//是否需要验证码
  			isNeedVercode: false
  		}
	},
	methods: {
		hiddenPromit () {
			this.promit = '';
		},
		getPhoneVcode (_username, _vercode = '') {
			let _that = this;
			axios({
                method: 'get',
                url: 'http://localhost:3000/login/phonevcode',
                params: {
                	user: _username,
                	vercode: _vercode
                }
            })
            .then((res) => {
                console.log(res.data.data);
                let _data = res.data.data;
                console.log(_data.code);
            	switch (_data.code) {
            		case 70022: _that.promit = '您今天已经发送太多短信，请换个时间';
            		break;
            		case 87001: {
            			 _that.promit = '验证码输入错误';
            			 _that.isNeedVercode = true;
            		}
            		break;
            	}
            })
            .catch((err) => {
                console.log(err);
            });
		},
		checkGetPhoneVcode () {
			if (this.username === '') {
				this.promit = '请输入手机号';
			} else if (!this.phoneReg.test(this.username)) {
				this.promit = '手机号格式不正确';
			} else if (!this.isNeedVercode) {
				this.getPhoneVcode(this.username);
			} else if (this.isNeedVercode) {
				if (this.vercode === '') {
					this.promit = '请输入图片验证码';
				} else if (this.vercode < 4) {
					this.promit = '验证码不正确';
				} else {
					console.log('here');
					this.getPhoneVcode(this.username, this.vercode);
				}
			}
		},
		checkDoLogin () {
			if (this.username === '') {
				this.promit = '请输入手机号';
			} else if (!this.phoneReg.test(this.username)) {
				this.promit = '手机号格式不正确';
			} else if (this.phoneVcode === '') {
				this.promit = '请输入短信验证码';
			} else if (this.phoneVcode.length < 4) {
				this.promit = '短信验证码不正确';
			} else {
				this.doLogin(this.username, this.phoneVcode);
			}
		},
		doLogin (_username, _phoneVcode) {
			// axios({
   //              method: 'get',
   //              url: 'http://localhost:3000/login/doLogin',
   //              params: {
   //              	user: _username,
   //              	phoneVcode: _phoneVcode
   //              }
   //          })
   //          .then((res) => {
   //              console.log(res.data.data);
                
   //          })
   //          .catch((err) => {
   //              console.log(err);
   //          });
   			setCookie('user', _username, 1000 * 60 * 60 * 24 * 3);
   			let _redirectName = this.$route.query.redirect;
   			this.$router.push({ name: `${_redirectName}` });
		}

 	}
}
</script>

<style lang="scss" scoped>
	#login {
		width: 100%;
		.login-all {
			width: 100%;
			padding: 0 0.5rem;
			box-sizing: border-box;
			.log-name {
				width: 100%;
				padding: 0.2rem 0 0.17rem 0;
				text-align: center;
				img {
					width: 1.6rem;
					height: 1.6rem;
				}
				h4 {
					font-size: 0.3rem;
					font-weight: normal;
				}
			}
			.login-form {
				width: 100%;
				.login-input {
					width: 100%;
					.input-all {
						width: 100%;
						color: #4a4a4a;
						margin-bottom: 1px;
						border-bottom: 1px solid #D3D3D3;
						input {
							border: none;
							font-size: 0.3rem;
							padding: 0.26rem 0;
						}
						input::-webkit-input-placeholder {
							text-indent: 4px;
						}
					}
					.input-vercode {
						display: inline-flex;
						justify-content: space-between;
						.get-vercode {
							display: inline-flex;
							align-items: center;
						}
					}
					.input-phoneVcode {
						display: inline-flex;
						justify-content: space-between;
						.get-phoneVcode {
							padding: 0.26rem;
							span {
								color: #2ea5e5;
								font-size: 0.25rem;
							}
						}
					}
				}
				.login-prompt {
					width: 100%;
					margin-bottom: 5px;
					padding-top: 0.24rem;
					span {
						color: #d81e06;
						font-size: 0.28rem;
						display: inline-block;
						padding-left: 0.34rem;
						background: url('../../assets/icon/mark.svg');
						background-repeat: no-repeat;
						background-size: 0.28rem 0.28rem;
					}
				}
				.login-btn {
					width: 100%;
					padding-top: 0.42rem;
					input {
						width: 100%;
						border: none;
						color: white;
						font-size: 0.3rem;
						padding: 0.26rem 0;
						border-radius: 6px;
						background-color: #00AD62;
					}
				}
			}
		}
	}
</style>
