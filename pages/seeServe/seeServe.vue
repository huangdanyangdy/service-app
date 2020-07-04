<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" right-text="刷新" title="服务项目查看"  @clickLeft="doBack"
		 @clickRight="doRefresh">
		</uni-nav-bar>
		<view v-for="item in serve_msg" :key="item.index">
			<view class="space-between serve_list" >
				<view class="play-start left-tit">服务大类：</view>
				<view class="right-list" >{{item.bigVal}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">服务小类：</view>
				<view class="right-list" >{{item.smallVal}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">服务内容：</view>
				<view class="right-list">{{item.serve_content}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">收费方式：</view>
				<view class=" right-list" >{{item.feeVal}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">收费单价：</view>
				<view class="right-list" >{{item.price}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">计费方式：</view>
				<view class="right-list" >{{item.chargeVal}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">佣金比例：</view>
				<view class=" right-list" >{{item.percenVal+'%'}}</view>
			</view>
			<view class="space-between serve_list" >
				<view class="play-start left-tit">备注：</view>
				<view class=" right-list">{{item.remark}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import {getServeMsg} from "@/api/data.js"
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				id:Number,
				serve_msg:{
					// bigVal:'代购类',//服务大类值
					// smallVal:'康复护理',//服务小类值
					// feeVal:'收费',//收费方式值
					// serve_content:'护理老人，给老人送吃的，清洁我我我我我我无无无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无无无aaa无无无q',
					// price:30,
					// percenVal:40,
					// chargeVal:'次',//计费方式值
					// remark:"我是备注给老人送吃的，清洁我我我我我我无无无无无无无呜呜呜呜呜呜呜呜无无无无无无无无无无无无无aaa无无无q',"
				}
				
			}			
		},
		methods: {
			doRefresh(){
				console.log("shuaxin")
			},
			doBack(){
				uni.navigateBack({
					delta:1
				})
			},
		},
		onShow() {
			getServeMsg(this.id).then(res=>{
				if(res.status==200){
					console.log(res.data,"服务信息")
					this.serve_msg=res.data
				}
			})
		},
		onLoad(option) {
			this.id=option.id
			console.log(typeof(option.id)  )
			console.log(option.id,"option.id")
			
		},
		onHide() {
			
		}
		
	}
</script>

<style >
	.left-tit{
		font-size: 28rpx;
		line-height: 50rpx;
		color:#444;
		width:20%;
		
	}
	.serve_list{
		display:flex;
		border-bottom:1rpx solid #eee;
		padding: 20rpx;
	}
	.right-list{
		width: 70%;
		/* padding: 6rpx; */
		font-size: 24rpx;
		color: #555;
		line-height: 50rpx;
		box-sizing: border-box;
	}	
	
	
</style>
