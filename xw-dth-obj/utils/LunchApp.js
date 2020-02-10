import store from '../store'

//更新程序
export const Upgrade = () => {
	uni.getSystemInfo({
		success: res => {
			//检测当前平台，如果是安卓则启动安卓更新
			if (res.platform == 'android') {
				AndroidCheckUpdate();
			} else {
			
			}
		}
	});
}

//初始化用户信息
export const InitInfo = () => {
	let userInfo = uni.getStorageSync("userInfo");
	if (!userInfo) {
		// uni.showModal({
		// 	title: '提示',
		// 	content: '登录已失效，请前往登录！',
		// 	confirmText: '前往登录',
		// 	success: (res) => {
		// 		if (res.confirm) {
		// 			uni.navigateTo({
		// 				url: '/pages/common/login'
		// 			})
		// 		}
		// 	}
		// })
	} else {
		//把用户信息保存到vuex
		store.state.user.userInfo = userInfo;
		//登录状态
		store.state.user.isLogin = true;
		store.state.mobile = userInfo.mobile
	}

}

//安卓更新
function AndroidCheckUpdate() {
	plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
		//获取版本号
		let version = wgtinfo.version;
		uni.request({
			url: 'http://market.bt.yndth.cn/appUpgrade/version.txt',
			method: 'GET',
			data: {},
			success: (res) => {
				if (res.data.version > version) {
					uni.showToast({
						title: '有新的版本发布,程序已启动自动更新,新版本下载完成后将自动弹出安装程序。',
						mask: false,
						duration: 5000 * 2,
						icon: "none"
					});
					var dtask = plus.downloader.createDownload("http://market.bt.yndth.cn/appUpgrade/bht-app.apk", {}, function(d,
						status) {
						// 下载完成  
						if (status == 200) {
							plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
								uni.showToast({
									title: '安装失败',
									mask: false,
									duration: 1500
								});
							})
						} else {
							uni.showToast({
								title: '更新失败',
								mask: false,
								duration: 1500
							});
						}
					});
					dtask.start();
				}
			},
			fail: () => {},
			complete: () => {}
		});
	});

}
