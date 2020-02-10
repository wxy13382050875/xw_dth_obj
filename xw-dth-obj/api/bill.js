/**
 * 票据接口
 */
import {
	market_http
} from '@/utils/http'
import store from '@/store'


//开票列表
export const invoiceList = (params) => {
	let idCode = store.state.user.userInfo.idCode
	return market_http.get(`order/invoice/${idCode}`, {
		params: params
	});
}

//提交开票申请
export const submitInvoice = (params) => {
	let idCode = store.state.user.userInfo.idCode;
	uni.showLoading({
		title: '正在提交申请开票...'
	})
	return new Promise((resolve, reject) => {
		market_http.post(`order/invoice/${idCode}`, params).then(res => {
			uni.hideLoading()
			resolve(res)
		}).catch(error => {
			uni.hideLoading()
			reject(error)
		})
	})
}
