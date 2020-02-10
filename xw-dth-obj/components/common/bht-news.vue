<template>
	<view class="bht-news-w">
		<view class="bht-news-content">
			<view class="news-title">
				<label class="title">最新信息推荐</label>
				<router-link class="more" to="{name: 'news-list'}">更多>>></router-link>
			</view>
			<view class="news-list">
				<news-list-items :dataList="dataList"></news-list-items>
			</view>
		</view>
	</view>
</template>

<script>
	//新闻列表组件
	import NewsListItems from '@/components/news/news-list-items.vue'
	import {
		newsList
	} from '@/api/news.js'
	export default {
		components: {
			NewsListItems
		},
		data() {
			return {
				dataList: []
			}
		},
		created() {
			newsList({}).then(res => {
				let {
					data
				} = res;
				this.dataList = data.data
			})
		}
	}
</script>

<style lang="scss">
	.bht-news-w {
		padding: 0 $padding-content;

		.bht-news-content {
			padding: 21rpx 21rpx;
			background-color: #fff;
			box-shadow: 0px 0px 10px 0px rgba(134, 134, 134, 0.2);
			border-radius: 8px;

			.news-title {
				display: flex;
				align-items: center;
				justify-content: space-between;

				label {
					position: relative;
					height: 34rpx;
					padding-left: 10rpx;
					font-size: 34rpx;
					color: rgba(254, 89, 6, 1);

					&::before {
						content: ' ';
						position: absolute;
						left: 0;
						bottom: -3px;
						width: 4rpx;
						height: 34rpx;
						background-color: rgba(254, 89, 6, 1);
					}
				}

				.more {
					font-size: 24rpx;
					color: rgba(99, 99, 99, 1);
				}
			}

			.news-list {
				margin-top: 17rpx;
			}
		}
	}
</style>
