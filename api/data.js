import axios from '@/api/axios'

//轮播图
export const getBannerData = ()=>{
	return axios.request({
		url:'/api/banner',
		method:'get'
	})
}

//全部订单
export const getAllListMsg = ()=>{
	return axios.request({
		url:'/api/all_list',
		method:'get'
	})
}

//待处理订单
export const gePreDealListMsg = ()=>{
	return axios.request({
		url:'/api/pre_deal',
		method:'get'
	})
}

//处理中订单
export const getDealingMsg = ()=>{
	return axios.request({
		url:'/api/dealing',
		method:'get'
	})
}

//历史订单
export const getHistoryMsg = ()=>{
	return axios.request({
		url:'/api/history',
		method:'get'
	})
}


// 服务项目列表
export const getServeList = ()=>{
	return axios.request({
		url:'/api/serve_list',
		method:'get'
	})
}

// 服务项目详情
export const getServeMsg = (id)=>{
	return axios.request({
		url:'/api/serve_msg',
		method:'get',
		data:id
	})
}

//服务人员列表
export const getStaffListMsg = ()=>{
	return axios.request({
		url:'/api/staff_list',
		method:'get',
	})
}
//服务人员列表
export const getMsgList = ()=>{
	return axios.request({
		url:'/api/msg_list',
		method:'get',
	})
}
