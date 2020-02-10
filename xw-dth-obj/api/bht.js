import {
	bht_http
} from '@/utils/http'

//工作人员商品申报查询
export const goodsPersonnelQuery = (params) => {
	return bht_http.get('vendee/query-by-personnel', {
		params: params
	})
};

//工作人员车辆申报查询
export const personneVehiclelQuery = (params) => {
	return bht_http.get('vehicle/query', {
		params: params
	})
};

//现场工作人员待检车辆列表
export const checkVehicleQuery = (params) => {
	return bht_http.get('vehicle/query-wait', {
		params: params
	})
};

//边民商品申报历史查询
export const bordererGoodsHistoryQuery = (params) => {
	return bht_http.get('vendee/historyQuery', {
		params: params
	})
};

//边民商品申报当日查询
export const bordererGoodsCurQuery = (params) => {
	return bht_http.get('vendee/query', {
		params: params
	})
};


//边民车辆申报查询
export const bordererVehicleQuery = (params) => {
	return bht_http.get('vehicle/query', {
		params: params
	})
};
