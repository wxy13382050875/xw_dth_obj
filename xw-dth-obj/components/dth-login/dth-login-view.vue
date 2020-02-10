<template>
	
	<view class="dth-login-content" style="background: #FFFFFF;">
		<view class="login-content">
			<view class="uni-padding-wrap uni-common-mt" style="margin-top: 30rpx;">
				<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
				 @clickItem="onClickItem" />
			</view>
			<view class="content">
				<view class="bth-login" style="width: 100%;" v-show="current === 0">
					<dth-login-cell></dth-login-cell>
				</view>
				<view class="bth-register" style="width: 100%;" v-show="current === 1">
					<dth-register-cell></dth-register-cell>
				</view>
				
			</view>
		</view>
		
		<view class="other-login-title">
			其他登入方式
		</view>
		<view class="third-login">
			<view class="third-login-item">
				<image class="icon" src="/static/icon/QQ.png"></image>
			</view>
			<view class="third-login-item">
				<image class="icon" src="/static/icon/weixin.png"></image>
			</view>
			<view class="third-login-item">
				<image class="icon" src="/static/icon/weibo.png"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import uniSegmentedControl from '@/third/uni-segmented-control/uni-segmented-control.vue'
	import dthLoginCell from '@/components/dth-login/dth-login-cell.vue'
	import dthRegisterCell from '@/components/dth-login/dth-register-cell.vue'
	export default {
		components: {
			uniSegmentedControl,
			dthLoginCell,
			dthRegisterCell
		},
		data() {
			return {
				items: ['登录', '注册'],

				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'text'
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},

		}
	}
</script>

<style lang="scss">
	/* page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	} */

	/* view {
		font-size: 28upx;
		line-height: inherit
	} */



	/* .uni-common-mt {
		margin-top: 20upx;
	} */
	.dth-login-content {
		border-radius:10px;
		.login-content{
			
			box-shadow:0px 6px 6px 0px rgba(24,24,24,0.25);
			
			.content {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				/* height: 300upx; */
				text-align: center;
				
			}
		}
		
		.other-login-title{
			width: 100%;
			height: 180rpx;
			line-height: 180rpx;
			text-align: center;
			color: #A5A5A5;
		}
		.third-login{
			width: 100%;
			display: flex;
			justify-content: space-between;
			.third-login-item{
				width: 30%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 149rpx;
				margin-top: 22rpx;
				.icon {
					width: 94rpx;
					height: 94rpx;
				}
			}
		}
		
	}
</style>
