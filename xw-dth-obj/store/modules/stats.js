const state = {
	todayData: {}
}


const getters = {
	todayData: (state) => {
		return state.todayData;
	}
}

const mutations = {
	setTodayData: (state, data) => {
		state.todayData = data;
	}
}

const actions = {
	setTodayData: ({
		commit
	}, data) => {
		commit('setTodayData', data)
	},
}


export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
