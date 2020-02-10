import Request from './request'
import BasUrl from '@/utils/config'

//边互通http请求实力 
const bht_http = new Request()

bht_http.setConfig((config) => {
	config.baseUrl = BasUrl.BASE_BHT_URL
	return config
})

bht_http.validateStatus = (response) => {
	return response.statusCode === 200
}

bht_http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	// console.log(config)
	//设置请求头
	config.header = {
		...config.header,
		'dataType': 'json'
	}
	return config
})

bht_http.interceptor.response((response) => { /* 请求之后拦截器 */
	return response.data
}, (response) => { // 请求错误做点什么
	uni.showToast({
		icon: 'none',
		title: '您的网络不给力，请稍后重试！'
	})
	return response
})

//二级http请求
const market_http = new Request()

market_http.setConfig((config) => {
	config.baseUrl = BasUrl.BASE_MARKET_URL
	return config
})

market_http.validateStatus = (response) => {
	return response.statusCode === 200
}

market_http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	// console.log(config)
	//设置请求头
	config.header = {
		...config.header,
		'dataType': 'json'
	}
	return config
})

market_http.interceptor.response((response) => { /* 请求之后拦截器 */
	return response.data
}, (response) => { // 请求错误做点什么
	uni.showToast({
		icon: 'none',
		title: '您的网络不给力，请稍后重试！'
	})
	return response
})

export {
	bht_http,
	market_http
}
