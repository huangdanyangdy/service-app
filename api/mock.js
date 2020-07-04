import Mock from "mockjs"

Mock.setup({
	timeout:1000,
	
})

// Mock.mock("/",user)
Mock.mock("/api/banner",{
	'imgs|5':[{'imgUrl':'@image'}]
})

//全部订单
Mock.mock("/api/all_list",{
	'all_List|1-10':[{
		'cusName':'@cname',
		'cusImgUrl':'@image',
		'cusAddress':'@county(true)',
		'cusTel':/^1[3456789]\d{9}$/,
		'orderId':'@id',
		'cusId':'@id',
		'orderStatus|0-2':0,
		'addTime':'@datetime',
		'staffList':{
		'imgUrl':'@image',
		'staffName':'@cname',
		'address':'@county(true)',
		'tel':/^1[3456789]\d{9}$/,
		'id':'@id'
		},
		
	}]
})
	
//待处理订单
Mock.mock("/api/pre_deal",{
	'preDealList|1-10':[{
		'cusName':'@cname',
		'cusImgUrl':'@image',
		'cusAddress':'@county(true)',
		'cusTel':/^1[3456789]\d{9}$/,
		'cusId':'@id',
		'orderId':'@id',
		'addTime':'@datetime',
	}]
})

//处理中订单
Mock.mock("/api/dealing",{
	'all_List|1-10':[{
		'cusName':'@cname',
		'cusImgUrl':'@image',
		'cusAddress':'@county(true)',
		'cusTel':/^1[3456789]\d{9}$/,
		'orderId':'@id',
		'cusId':'@id',
		'orderStatus|0-2':0,
		'addTime':'@datetime',
		
		'staffList':{
		'imgUrl':'@image',
		'staffName':'@cname',
		'address':'@county(true)',
		'tel':/^1[3456789]\d{9}$/,
		'id':'@id'
		},
	}]
})

//历史订单
Mock.mock("/api/history",{
	'all_List|1-10':[{
		'cusName':'@cname',
		'cusImgUrl':'@image',
		'cusAddress':'@county(true)',
		'cusTel':/^1[3456789]\d{9}$/,
		'orderId':'@id',
		'cusId':'@id',
		'orderStatus|0-2':0,
		'addTime':'@datetime',
		
		'staffList':{
		'imgUrl':'@image',
		'staffName':'@cname',
		'address':'@county(true)',
		'tel':/^1[3456789]\d{9}$/,
		'id':'@id'
		},
	}]
})

// 服务项目列表
Mock.mock("/api/serve_list",{
	'serve_content':[{
						id:0,
						bigType:"卫生清洁",
						smallType:"油烟机清洗",
						price:'50',
						chargeMethods:"小时"
					},
					{
						id:1,
						bigType:"保洁类",
						smallType:"洗冰箱",
						price:'10',
						chargeMethods:"天"
					},
					{
						id:2,
						bigType:"代购类",
						smallType:"日用品代购",
						price:'60',
						chargeMethods:"小时"
					},
					{
						id:3,
						bigType:"心理健康类",
						smallType:"心理疏导",
						price:111,
						chargeMethods:"小时"
					},
					{
						id:4,
						bigType:"房屋工程",
						smallType:"排水维修",
						price:120,
						chargeMethods:"小时"
					}]	
					
})
// 服务项目详情
Mock.mock("/api/serve_msg",{
	serve_msg:{
		bigVal:'代购类',//服务大类值
		smallVal:'康复护理',//服务小类值
		feeVal:'收费',//收费方式值
		serve_content:'护理老人，给老人送吃的，做清洁',
		price:30,
		percenVal:40,
		chargeVal:'次',//计费方式值
		remark:"我是备注给老人送吃的,"
	}
})

//服务人员列表
Mock.mock("/api/staff_list",{
	'staffList|1-10':[{
	'imgUrl':'@image',
	'staffName':'@cname',
	'address':'@county(true)',
	'tel':/^1[3456789]\d{9}$/,
	'id':'@id',
	'serveSort':'清洁类',
	'age|25-45':45
	}]
})

//消息列表
Mock.mock("/api/msg_list",{
	'msgList|1-10':[{
	'imgUrl':'@image',
	'tit':'运营商',
	'subTit':"@cparagraph",
	'time':'@datetime'
	}]
})
Mock.mock("/",{
	username:"老板",
	password:"123456"
})



export const user = req =>{
	return {
		username:"老板",
		password:"123456"
	}
}
