<template>
	<!--轮播-->
	<swiper class="swiper" autoplay="true" interval="3000" :indicator-dots="indicatorDots" duration="300" circular="true">
	    <swiper-item>
	        <image src="/static/banner/1.png" style="width: 100%;" mode="widthFix"></image>
	    </swiper-item>
		<swiper-item>
	        <image src="/static/banner/2.png" style="width: 100%;" mode="widthFix"></image>
	    </swiper-item>
		<swiper-item>
		    <image src="/static/banner/3.png" style="width: 100%;" mode="widthFix"></image>
		</swiper-item>
	</swiper>
</template>

<script>
	//首页banner轮播组件
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		height: 295rpx;
		width: 100%;

		.swiper-item {
			height: 100%;
			width: 100%;

			image {
				height: 100%;
				width: 100%;
			}
		}

	}
</style>
