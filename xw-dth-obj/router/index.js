import Vue from 'vue'
import store from '@/store'
import routesList from '@/router/routes'
import Router from '@/third/uni-app-router';

Vue.use(Router);

const router = new Router({
	routes: routesList
});

router.beforeEach((to, from, next) => {
	let {
		requiresAuth
	} = to.meta.auth;
	let isLogin = uni.getStorageSync("isLogin");
	if (requiresAuth) {
		//判断是否登录
		if (!isLogin) {
			next({
				path: '/pages/dth-login/dth-login',
				query: {
					// redirect: to.meta.title
				},
				NAVTYPE: 'push'
			})
		} else{
			next();
		}
	} else {
		next()
	}

})

router.afterEach((to, from) => {

})

export default router
