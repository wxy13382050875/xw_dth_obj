import Request from '@/utils/luch-request/request.js'
import store from '@/store'

var http = new Request();
http.setConfig((config) => { /* config 为默认全局配置*/
	// config.baseUrl = 'http://192.168.3.8:7300/mock/5de86e53699d5016646605ff/api/stats'; /* 根域名 */
	config.baseUrl = 'http://173.16.10.133:7000'; /* 根域名 */
	config.header = {
		a: 1,
		b: 2
	}
	return config
})
http.interceptor.request((config, cancel) => {
	/* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
	config.header = {
		...config.header,
		a: 1
	}
	/*
	if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
	    cancel('token 不存在', config) //  把修改后的config传入，之后响应就可以拿到修改后的config。 如果调用了cancel但是不传修改后的config，则catch((err) => {}) err.config 为request拦截器修改之前的config
	}
	*/
	return config;
})

http.interceptor.response((response) => {
	let {
		data
	} = response
	if (data.code !== 200) {
		//handlerReponse(response.statusCode);
		return Promise.reject(response)
	}
	return data.data
}, (response) => {
	handlerError(response.statusCode);
	return response
})

//错误信息处理
function handlerError(statusCode) {
	switch (statusCode) {
		case 404:
			uni.showToast({
				title: '请求地址找不到'
			})
			break;
		default:
			break;
	}
}

/**
 * 当日进出口数据统计接口 {customesCode: } 场所编码
 */
export const todayDataReq = (params) => {
	return http.get("/today", {
		params: params
	})
}


/**
 * 统计报表 {customesCode} 场所编码
 */
export const currentMonth = (params) => {
	return http.get("/trade/currentMonth", {
		params: params
	})
}

/**
 * 进出口统计接口 {customesCode,queryYear} 场所编码/年份参数
 */
export const inAndOutReq = (params) => {
	return http.get("/inAndOut", {
		params: params
	})
}

/**
 * 商品交易额统计 {customesCode,queryYear} 场所编码/年份参数
 */
export const goodsTradeReq = (params) => {
	return http.get("/goodsTrade", {
		params: params
	})
}


/**
 * 交易结算录单统计 {customesCode,queryDateType,queryDateValue}
 */
export const tradeBillReq = (params) => {
	return http.get("/tradeBill", {
		params: params
	})
}
