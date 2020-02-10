import menuData from '@/data/menu.js'
/**
 * 保存全局常量信息
 */
const state = {
	//导航栏高度
	navHeight: 0,
	statusHeight: 0,
	//开票数据
	invoiceData: [],
	//tabBar激活的位置
	tabBarIndex: '',
	//统计模块 小块宽度
	statItemWidth: 0,
	//当前页面地址
	curUrl: '',
	//权限菜单
	roleMenu: [],
	//默认收货地址
	address: {},
	//角色数据
	roleData: [{

			code: 1,
			value: "游客",
			roleDesc: "未登录时的默认角色"
		},
		{
			value: '边民',
			code: 2,
			roleDesc: "完成备案的边民"
		},
		{
			value: '场所工作人员',
			code: 3,
			roleDesc: "场所的工作人员"
		},
		{
			value: '商铺管理',
			code: 4,
			roleDesc: "商铺管理"
		},
		{
			value: '收购企业',
			code: 5,
			roleDesc: "收购企业"
		}
	],
	roleArr: ['游客', '边民', '场所工作人员', '商铺管理', '收购企业'],
}

const getters = {
	navHeight: (state) => {
		return state.navHeight
	},
	statusHeight: (state) => {
		return state.statusHeight
	},
	invoiceData: (state) => {
		return state.invoiceData
	},
	curUrl: (state) => {
		return state.curUrl
	},
	roleData: (state) => {
		return state.roleData
	},
	roleArr: (state) => {
		return state.roleArr
	},
	getTabBarIndex: (state) => {
		return state.tabBarIndex || uni.getStorageSync('tabBarIndex') || 'index';
	},
	getStatItemWidth: (state) => {
		return state.statItemWidth
	},
	roleMenu: (state) => {
		return state.roleMenu.length > 0 ? state.roleMenu : uni.getStorageSync('menuData')
	},
	address: (state) => {
		return state.address;
	}
}

const mutations = {
	setNavHeight: (state, height) => {
		state.navHeight = height
	},
	setInvoice: (state, data) => {
		state.invoiceData = data
	},
	setCurUrl: (state, url) => {
		state.curUrl = url
	},
	setTabBarIndex: (state, index) => {
		uni.setStorageSync('tabBarIndex', index)
		state.tabBarIndex = index
	},
	setStatItemWidth: (state, width) => {
		state.statItemWidth = width
	},
	setRoleMenu: (state, menu) => {
		uni.setStorageSync('menuData', menu);
		state.roleMenu = menu
	},
	setAddress: (state, address) => {
		state.address = address;
	}
}

const actions = {
	setNavHeight: ({
		commit
	}, height) => {
		commit('setNavHeight', height)
	},
	setInvoice: ({
		commit
	}, data) => {
		commit('setInvoice', data)
	},
	setCurUrl: ({
		commit
	}, url) => {
		commit('setCurUrl', url)
	},
	setTabBarIndex: ({
		commit
	}, index) => {
		commit('setTabBarIndex', index)
	},
	setStatItemWidth: ({
		commit
	}, width) => {
		commit('setStatItemWidth', width)
	},
	setRoleMenu: ({
		commit
	}, roleId) => {
		if (roleId == null || roleId == '') {
			commit('setRoleMenu', menuData['1']);
		} else {
			commit('setRoleMenu', menuData[roleId]);
		}
	},
	setAddress: ({
		commit
	}, address) => {
		commit('setAddress', address)
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
