/**
 * user store
 */
const state = {
	userInfo: {} /*用户信息*/
}

const getters = {
	userInfo: (state) => {
		return state.userInfo || uni.getStorageSync('userInfo');
	}
}

const mutations = {
	setUserInfo: (state, userInfo) => {
		state.userInfo = userInfo
		uni.setStorageSync('userInfo', userInfo);
	}
}

const actions = {
	setUserInfo: ({
		commit
	}, userInfo) => {
		commit('setUserInfo', userInfo)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
