<script>
/**
 * 启动页入口
 */
import { Upgrade, InitInfo } from '@/utils/LunchApp.js';
import store from './store';
export default {
	onLaunch: function() {
		//程序运行时候 获取导航栏高度和状态栏高度
		var sysinfo = uni.getSystemInfoSync(),
			statusHeight = sysinfo.statusBarHeight,
			isiOS = sysinfo.system.indexOf('iOS') > -1;
		store.state.utp.statusHeight = statusHeight;
		if (!isiOS) {
			store.state.utp.navHeight = 48;
		} else {
			store.state.utp.navHeight = 44;
		}
		//初始化用户信息
		InitInfo();
	},
	onShow: function() {},
	onHide: function() {}
};
</script>

<style lang="scss">
@import url('./static/style/iconfont/iconfont.css');
@import url('/third/gaoyia-parse/parse.css');
@import url('/third/yb-filter/graceUI.css');
@import url('/third/yb-filter/main.css');
@import url('/third/yb-filter/icon.css');

input {
	caret-color: #e42231;
}

uni-page-wrapper,
uni-page-body {
	height: 100%;
	overflow: hidden;
}

//页面容器
.bht-layout-container-wrapper {
	.bht-layout-content {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		// &::-webkit-scrollbar {
		// 	display: none;
		// 	width: 0;
		// }
	}
	.bht-layout-main {
		padding: 0 $padding-content;
	}
	.charts-title {
		padding: 22rpx;
		font-size: 28rpx;
		color: #383838;
	}
}
/*覆盖button样式*/
button:after {
	border: 0;
}
/*每个页面公共css */
body {
	background: rgba(242, 242, 242, 1);
}

.main-content {
	position: relative;
}

.space-h {
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
}

.aca-form-input {
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 35rpx;
	height: 80rpx;
	line-height: 80rpx;
	border-bottom: 2rpx solid rgba(197, 197, 197, 1);
	margin-left: 45rpx;
	margin-right: 45rpx;
	.aca-input-icon {
		margin-left: 15rpx;
		color: #a9a8a8;

		.iconfont {
			font-size: 52rpx;
		}
	}

	.aca-input {
		flex: 1;
		margin-left: 21rpx;
		font-size: 30rpx;
		text-align: left;
	}
}

.app-btn {
	height: 94rpx;
	background: rgba(255, 51, 51, 1);
	border-radius: 10px;
	font-size: 34rpx;
	font-weight: 400;
	color: #fff;
}

//搜索box样式
.query-box {
	height: 208rpx;
	background: rgba(239, 68, 85, 1);

	.query-search-wrapper {
		display: flex;
		padding: 0 $padding-content;

		.search-box {
			flex: 1;
			display: flex;
			align-items: center;
			margin-top: 27rpx;
			height: 70rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 35px;

			.search-tip {
				margin-left: 10rpx;
				font-size: 28rpx;
				color: rgba(137, 137, 137, 1);
			}

			.search-icon {
				margin-left: 28rpx;
				width: 42rpx;
				height: 42rpx;
			}
		}
	}

	.search-show-box {
		margin-top: 29rpx;
		padding: 0 $padding-content;

		.search-show {
			display: flex;
			height: 164rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 16px 0px rgba(134, 134, 134, 0.4);
			border-radius: 10px;
			font-size: 34rpx;
			font-weight: bold;

			.left,
			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.value {
					color: #e40011;
					font-weight: normal;
				}
			}
		}
	}
}

//查询结果列表
.query-main {
	position: absolute;
	top: 290rpx;
	bottom: 0;
	left: 0;
	right: 0;
}

.query-show {
	padding: 22rpx $padding-content;

	.query-list-item {
		margin-bottom: 22rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 10px 0px rgba(134, 134, 134, 0.2);

		.header {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 22rpx;
			font-size: 32rpx;
			height: 70rpx;

			&::before {
				content: ' ';
				position: absolute;
				width: 10rpx;
				height: 100%;
				left: 0;
			}

			.right {
				height: 100%;
				display: flex;
				align-items: center;

				image {
					margin-right: 7rpx;
					width: 32rpx;
					height: 32rpx;
				}
			}
		}

		.content {
			padding: 0 22rpx;
			font-size: 28rpx;
			color: rgba(107, 107, 107, 1);

			.items {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 60rpx;

				&::before {
					content: '';
					position: absolute;
					left: 0;
					bottom: 0px;
					right: 0;
					border-top: 2rpx solid rgba(229, 229, 229, 1);
				}

				.title,
				.value {
					flex: 1;
				}

				.value {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					text-align: right;
				}
			}
		}

		.footer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 22rpx;
			height: 70rpx;
			font-size: 30rpx;
			font-weight: bold;
			color: rgba(107, 107, 107, 1);
		}
	}

	.query-is-succcess {
		.header {
			background: rgba(204, 255, 204, 1);
			color: #0ea057;

			&::before {
				background-color: rgba(153, 204, 153, 1);
			}
		}

		.flag {
			color: #0ea057;
		}
	}

	.query-is-ing {
		.header {
			background: rgba(255, 204, 204, 1);
			color: rgba(228, 0, 17, 1);

			&::before {
				background-color: rgba(255, 173, 178, 1);
			}
		}

		.flag {
			color: #378eef;
		}
	}
}

//开票列表
.bill-list {
	padding: $padding-content $padding-content 0;
	font-size: 30rpx;

	.items {
		position: relative;
		margin-bottom: 20rpx;
		padding: 0 24rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 10px 0px rgba(134, 134, 134, 0.6);

		.header,
		.content,
		.footer {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 70rpx;
		}

		.line {
			position: relative;

			&::before {
				content: ' ';
				position: absolute;
				right: 24rpx;
				bottom: 0;
				left: 24rpx;
				height: 1rpx;
				background-color: rgba(229, 229, 229, 1);
			}
		}

		.header {
			font-weight: bold;

			.left {
				flex: 1;
			}

			.rigt {
				width: 120rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				word-break: break-all;
			}
		}

		.content,
		.footer {
			color: rgba(107, 107, 107, 1);
		}

		.footer {
			.amount {
				color: #ff0000;
			}
		}
	}
}

.app-tabs-content {
	position: absolute;
	top: 120rpx;
	right: 0;
	bottom: 0;
	left: 0;
}

//TABS
.app-query-tabs-warp {
	position: fixed;
	left: 0;
	width: 100%;
	height: 70rpx;
	background-color: #fff;

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 70rpx;
		text-align: center;
		font-size: 30rpx;
		box-shadow: 0px 0px 16px 0px rgba(134, 134, 134, 0.4);

		.nav-items {
			position: relative;
			flex: 1;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.active {
			position: relative;
			color: rgb(254, 91, 6);

			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				right: 0;
				border-bottom: 1px solid #fe5a07;
			}
		}
	}
}

.app-tabs-query-content {
	position: absolute;
	top: 70rpx;
	right: 0;
	bottom: 0;
	left: 0;
}

.data-no-tip {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 100px;

	image {
		width: 175rpx;
		height: 240rpx;
	}

	.data-no-tip-txt {
		margin-top: 20rpx;
		font-size: 28rpx;
		color: #cdcdcd;
	}
}
</style>
