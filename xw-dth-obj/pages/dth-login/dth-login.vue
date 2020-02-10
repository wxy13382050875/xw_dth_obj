<template>

 <view class="" style="background: #FFFFFF; width: 100%; height: 100%;">
	 <view class="login-container" >
	 	<!-- <nav-bar-back title="边民互市二级交易市场"></nav-bar-back> -->
	 	<image class="icon" src="../../static/icon/login-bg.png" mode=""></image>
	 	<view class="login-title">
	 		
	 		<view class="title">一般贸易货场</view>
	 		<view class="desc">hai.终于等到你 还好我没放弃</view>
	 	</view>
	 	<view class="login-content">
	 		<view class="dth-login-cell">
	 			<uiLoginView></uiLoginView>
	 		</view>
	 	</view>
	 
	 
	 </view>
 </view>
	

</template>

<script>
	import uiLoginView from '@/components/dth-login/dth-login-view.vue'
	export default {
		components: {
			uiLoginView
		},
		data() {
			return {
				items: ['登录', '注册'],
				styles: [{
						value: 'button',
						text: '按钮',
						checked: true
					},
					{
						value: 'text',
						text: '文字'
					}
				],
				colors: ['#007aff', '#4cd964', '#dd524d'],
				current: 0,
				colorIndex: 0,
				activeColor: '#007aff',
				styleType: 'button'
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},
			styleChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.styleType = evt.target.value
				}
			},
			colorChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.activeColor = evt.target.value
				}
			}
		}
	}
</script>

<style lang="scss">
	.login-container {
		background: #FFFFFF;
		position:relative;
		.icon{
			width: 100%;
			position: absolute;
			z-index: 100;
		}
		.login-title {
			width: 100%;
			position: absolute;
			z-index: 200;
			.title{
				margin-top: 50rpx;
				font-size: 50rpx;
				color: #fff;
				text-align: center;
				height: 150rpx;
				line-height: 150rpx;
			}
			.desc{
				font-size: 30rpx;
				color: #fff;
				text-align: center;
				height: 100rpx;
				line-height: 100rpx;
			}
		}

		.login-content {
			position:absolute;
			
			z-index: 301;
			// position: relative;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 800rpx;
			.dth-login-cell {
				
				/* background-color: #FF8C00; */
				/* width: 300px; */
				/* height: 300px; */
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
