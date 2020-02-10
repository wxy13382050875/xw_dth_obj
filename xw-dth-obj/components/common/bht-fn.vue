<template>
	<view class="bht-fun-wrapper">
		<view class="bht-fun" >
			<router-link class="items" v-for="(item,index) in dataSource" :key="index" :to="{name: item.page}">
				<image :src="item.img"></image>
				<view :class="title" style="font-size: 27rpx;">{{item.title}}</view>
			</router-link>
			
			
		</view>
		
	</view>
</template>

<script>
	//首页功能组件
	import {
		mapGetters,
		mapActions
	} from 'vuex';
	import {
		submitInvoice
	} from '@/api/bill'
	export default {
		props:{
			dataSource:{
				type:Array,
				default () {
					return []
				}
			}
		},
		
		created() {},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.bht-fun-wrapper {
		padding: 0 $padding-content;
		background: #FFFFFF;
		.bht-fun {
			margin-top: $margin-top;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.items {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 25%;
				height: 100%;
				margin-bottom: $margin-bottom;

				image {
					margin-top: 20rpx;
					width: 94rpx;
					height: 94rpx;
				}

				.title {
					margin-top: 20rpx;
					// font-size: 10rpx;
					
					color: rgba(134, 134, 134, 1);
				}
			}
		}

		
	}
</style>
