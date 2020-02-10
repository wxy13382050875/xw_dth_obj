/**
 * 二级市场api调用
 */
import http from './base.js'

/**
 * 扫描查询接口
 * 通过边民身份证查询商品列表
 */
export const queryGoodsListByIdCard = (params) => {
	http.config.loading = true;
	return http.post('/assets-service/btMark/appShop', params, {
		header: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}

/**
 * 提交收购订单
 */
export const submitOrder = (params) => {
	http.config.loading = true;
	http.config.text = '正在提交订单';
	let appOrderResqVo = {
		userName: '瑞丽丰成商贸',
		userId: '26e181609bb2463f893d1db90deffd67',
		organization: '860301',
		ids: params
	}
	return http.post('/assets-service/btMark/appOrder', JSON.stringify(appOrderResqVo));
}
/**
 * 查询商品列表
 */
export const searchGoodsList = (params) => {
	http.config.loading = true;
	http.config.text = '正在查询...';
	params.organization = '860301';
	return http.get('/assets-service/btMark/goodsSearch', {
		params: params
	});
}
/**
 * 查询订单列表
 */
export const searchOrderList = (params) => {
	http.config.loading = true;
	http.config.text = '正在查询...';
	params.organization = '860301';
	return http.get('/assets-service/btMark/search', {
		params: params
	});
}
