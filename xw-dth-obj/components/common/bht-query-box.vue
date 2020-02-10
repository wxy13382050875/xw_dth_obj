<template>
	<view class="query-box">
		<view class="query-search-wrapper">
			<view class="search-box" @click="showSearchPage">
				<image class="search-icon" src="/static/icon/search.png"></image>
				<text class="search-tip">请点击输入查询条件</text>
			</view>
		</view>
		<view class="search-show-box">
			<view class="search-show">
				<view class="left">
					<slot name="show-left"></slot>
				</view>
				<view class="right">
					<slot name="show-right"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	//查询容器组件
	export default {
		name: "bht-query-box",
		methods: {
			showSearchPage(e) {
				//触发点击事件
				this.$emit("searchEvent", e)
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
