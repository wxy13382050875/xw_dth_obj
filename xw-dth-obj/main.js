import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
Vue.config.productionTip = false

//全局组件注册
import BhtLayoutContainer from '@/components/common/bht-layout-container.vue'
import MescrollUni from '@/third/mescroll-uni/mescroll-uni.vue'
import routerLink from '@/third/uni-app-router/component/router-link.vue'
import LbPicker from '@/third/lb-picker'
Vue.component('bht-layout-container', BhtLayoutContainer)
Vue.component("lb-picker", LbPicker)
Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
	store,
	router,
	...App
})
app.$mount()
