import {
	bht_http
} from '@/utils/http'



//获取首页数据
export const getFindHomeGoods = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.get('/assets-service/home/findHomeGoods',{
		params: params
	})
};

//分页获取最新商品
export const getGoodsList = (url,params) => {
	return bht_http.get(url,{
		params: params
	})
};

//通过商品id查询商品信息
export const addGoodsCart = (params) => {
	return bht_http.post('/order-service/order/incrementCommit',params)
}
//通过商品id查询商品信息
export const findGoodsAllInfoByGodosIdAndStoreId = (params) => {
	return bht_http.get('/assets-service/goods/findGoodsAllInfoByGodosIdAndStoreId',{
		params: params
	})
}
//通过商品id查询商品信息
export const getShopCartList = (params) => {
	return bht_http.get('/order-service/order/showShopCar',{
		params: params
	})
}
//订单提交
export const postCommitOrder = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.post('/order-service/order/commitOrder',params)
	// return bht_http.get('/order-service/order/getKey')
}
//根据点单状态查询订单
export const getOrderList = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.get('/order-service/order/findOrderByOrderStatus',{
		params: params
	})
}

//通过用户id获取收货地址列表
export const getUserAddressList = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.get('/assets-service/user/address',{
		params: params
	})
}
//保存用户收货地址
export const saveUserAddress = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.post('/assets-service/user/saveAddress',params)
}
//用户登录
export const login = (params) => {
	return bht_http.post('/assets-service/user/login',params)
};
//注册用户/保存用户信息
export const saveUser = (params) => {
	return bht_http.post('/assets-service/user/saveUser',params)
};
//注册用户/保存用户信息
export const deleteAddress = (params) => {
	return bht_http.post('/assets-service/user/deleteAddress',params)
};
export const getOrderDetails = (params) => {
	let userInfo = uni.getStorageSync("userInfo");
	params.userId = userInfo.userId;
	return bht_http.get('/order-service/order/getDetails',{
		params: params
	})
}



