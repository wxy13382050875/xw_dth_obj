//定义路由列表
const routesList = [
	{
		path: "/pages/dth-login/dth-login",
		name: "login",
		meta: {
			title: '登录',
			auth: {
				requiresAuth: false
			}
		}
	}
]
//导出
export default routesList
