<template>
	<view class="bht-layout-container-wrapper" :style="{ top: navHeight + statusHeight + 'px', height: height + 'px', background: bgColor }">
		<slot></slot>
		<!-- top: navHeight + 'px', bottom: bottom + 'px', <view class="space-h" v-if="showSpace"></view> -->
	</view>
</template>

<script>
//容器组件
import { mapGetters } from 'vuex';
export default {
	props: {
		showSpace: {
			type: Boolean,
			default: true
		},
		//背景颜色
		bgColor: {
			type: String,
			default: 'rgba(242, 242, 242, 1)'
		},
		bottom: {
			type: Number,
			default: uni.upx2px(120)
		}
	},
	data() {
		return {
			height: 0
		};
	},
	created() {
		var sysinfo = uni.getSystemInfoSync(),
			windowHeight = sysinfo.windowHeight;
		this.height = windowHeight - (this.bottom + this.navHeight + this.statusHeight);
	},
	computed: {
		...mapGetters({
			navHeight: 'utp/navHeight',
			statusHeight: 'utp/statusHeight'
		})
	}
};
</script>

<style lang="scss">
.bht-layout-container-wrapper {
	position: absolute;
	// overflow: hidden;
	width: 100%;
}
</style>
