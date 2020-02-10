<template>
	<view class="login-content" style="background: #FFFFFF;">
		<view class="app-login">
			<picker @change="pickerPaperTypeChange" :value="paperTypeIndex" :range="roleArr">
				<view class="aca-form-input">
					<view class="aca-input-icon"><view class="iconfont aca-user"></view></view>
					<input class="aca-input" disabled="true" :value="roleText" placeholder="请选择角色" />
					<view class="arrow-right"><view class="iconfont aca-xiala"></view></view>
				</view>
			</picker>
			<view class="aca-form-input">
				<view class="aca-input-icon"><view class="iconfont aca-shouji"></view></view>
				<input class="aca-input" type="number" v-model="regData.phone" placeholder="请输入手机号" />
			</view>
			<view class="aca-form-input">
				<view class="aca-input-icon"><view class="iconfont aca-securityCode-b"></view></view>
				<input class="aca-input" type="number" maxlength="6" v-model="regData.password" placeholder="请输入密码" />
				<text @click="forgetPassword" class="forget-pwd">忘记密码</text>
			</view>
			<button class="app-btn" hover-class="" @click="handleLogin">登入</button>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
import formValidate from '@/utils/validate';
export default {
	data() {
		return {
			regData: {
				roleId: '',
				phone: '',
				password: ''
			},
			roleText: '',
			paperTypeIndex: 0,
			vcodeBtnName: '获取验证码',
			rule: [
				{
					name: 'roleId',
					checkType: 'notnull',
					errorMsg: '请选择角色'
				},
				{
					name: 'phone',
					checkType: 'phoneno',
					errorMsg: '请填写正确的手机号'
				},
				{
					name: 'password',
					checkType: 'number',
					checkRule: 'notnull',
					errorMsg: '请填写密码'
				}
			]
		};
	},
	computed: {
		...mapGetters('utp', ['roleArr', 'roleData'])
	},
	methods: {
		//登入
		handleLogin() {
			let valid = formValidate.check({ ...this.regData }, this.rule);
			// if (valid) {
			// 	uni.showLoading({
			// 		title: '正在登入...',
			// 		mask: true
			// 	});
			// 	saveUser(this.regData)
			// 		.then(res => {
			// 			uni.hideLoading();
			// 			let { code, msg } = res;
			// 			//注册成功
			// 			if (code === '200') {
			// 				uni.showToast({
			// 					title: '登录成功'
			// 				});
			// 				setTimeout(() => {
			// 					uni.removeStorageSync('mobileCode');

			// 					this.$Router.back();
			// 				}, 2000);
			// 			} else {
			// 				uni.showToast({
			// 					title: msg,
			// 					icon: 'none'
			// 				});
			// 			}
						
			// 		})
			// 		.catch(erro => {
			// 			uni.hideLoading();
			// 		});
				
			// } else {
			// 	uni.showToast({
			// 		title: formValidate.error,
			// 		icon: 'none'
			// 	});
			// }
		},
		pickerPaperTypeChange({ target }) {
			let role = this.roleData[target.value];
			this.regData.roleId = role.code;
			this.roleText = role.value;
		},
		//忘记密码
		forgetPassword() {
			
		},
		
	}
};
</script>

<style scoped lang="scss">
	.login-content{
		margin-top: 30rpx;
		width: 300px;
		.app-login {
			padding: 0rpx;
			line-height: 80rpx;
			.forget-pwd {
				margin: 0 24rpx;
				font-size: 30rpx;
				color: rgba(228, 0, 17, 1);
			}
		
			.arrow-right {
				width: 80rpx;
				text-align: center;
				color: #a9a8a8;
			}
		}
	}

</style>
