<template>
	<view class="register-content" >
		
		<view class="app-register">
			<view class="aca-form-input">
				<view class="aca-input-icon"><view class="iconfont aca-shouji"></view></view>
				<input class="aca-input" type="number" v-model="regData.phone" placeholder="请输入手机号" />
			</view>
			<view class="aca-form-input">
				<view class="aca-input-icon"><view class="iconfont aca-mima"></view></view>
				<input class="aca-input" type="password" v-model="regData.password" placeholder="请输入密码" />
			</view>
			<view class="aca-form-input">
				<view class="aca-input-icon"><view class="iconfont aca-mima"></view></view>
				<input class="aca-input" type="password" v-model="regData.rePassword" placeholder="请再次输入密码" />
			</view>
			<button class="app-btn" hover-class="" @click="handleReg">确定</button>
		</view>
	</view>
</template>

<script>
import { mapGetters } from 'vuex';
import formValidate from '@/utils/validate';
import { saveUser } from '@/api/shop.js';
export default {
	data() {
		return {
			regData: {
				roleId: '',
				phone: '',
				password: '',
				rePassword: ''
			},
			roleText: '',
			paperTypeIndex: 0,
			rule: [
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
				},
				{
					name: 'rePassword',
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
		//注册处理
		handleReg() {
			let valid = formValidate.check({ ...this.regData }, this.rule);
			if (valid) {
				uni.showLoading({
					title: '正在注册...',
					mask: true
				});
				saveUser(this.regData)
					.then(res => {
						uni.hideLoading();
						let { code, msg } = res;
						//注册成功
						if (code === '200') {
							uni.showToast({
								title: '注册成功'
							});
							setTimeout(() => {
								uni.removeStorageSync('mobileCode');

								this.$Router.back();
							}, 2000);
						} else {
							uni.showToast({
								title: msg,
								icon: 'none'
							});
						}
						
					})
					.catch(erro => {
						uni.hideLoading();
					});
				
			} else {
				uni.showToast({
					title: formValidate.error,
					icon: 'none'
				});
			}
		},
		
	}
};
</script>

<style scoped lang="scss">
	.register-content{
		margin-top: 30rpx;
		width: 300px;
		.app-register {
			padding: 0rpx;
			line-height: 80rpx;
			
		}
		
	}

</style>
