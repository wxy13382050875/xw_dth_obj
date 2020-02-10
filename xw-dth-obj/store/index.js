import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import utp from '@/store/modules/utp'
import stats from '@/store/modules/stats'
import sem from '@/store/modules/sem.js'
Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		utp: utp,
		user: user,
		stats,
		sem
	}
})
