import {
	bht_http
} from '@/utils/http'

//根据新闻ID，读取详情
export const newsById = (params) => {
	return bht_http.get(`news/get/${params.newsId}`)
}

//新闻列表
export const newsList = (params) => {
	return bht_http.get('news/list', {
		params: params
	})
}

//检查是否点过赞
export const checkLike = (params) => {
	return bht_http.get('news/likes/check', {
		params: params
	})
}

//新闻点赞
export const newsLiked = (params) => {
	return bht_http.post('news/likes/click', params)
}
