/**
 * 二级市场store
 */
const state = {
	/**
	 * 保存商品列表
	 */
	goodsData: {
		list: [],
		totalAmount: 0,
		checkTotalCount: 0,
		checkStatus: false
	}
}

const getters = {
	goodsData: (state) => {
		return state.goodsData;
	}
}

const mutations = {
	addGoodsData(state, goodsList) {
		state.goodsData.list = goodsList
	}
}

const actions = {
	addGoodsData({
		commit
	}, goodsList) {
		goodsList.forEach((item, index) => {
			//新增属性 提供勾选操作
			item.checked = false;
		})
		commit('addGoodsData', goodsList)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
