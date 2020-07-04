<template>
	<view >
		<uni-nav-bar left-icon="back" left-text="返回" right-text="刷新" title="待处理工单" @clickLeft="doBack"
		 @clickRight="doRefresh" >
		</uni-nav-bar>
		<my-input @doFocus="doFocus" placeholder="请输入顾客姓名" right-text="取消" @doSearch="cancel" @doBlur="doBlur" @doInput="doInput"></my-input>
		
		<view class="search_wrap mb-1" v-if="list2[0]">
			<view class="search_txt p-2" >
				搜索结果
			</view>
			<view class="search_list"  @click="seeList(item.orderId)" v-for="item in list2" :key="item.index">
				
				<view class="space-between pb-2">
					<view class="serve_sort">保洁类<text class="serve_price">￥30.00</text></view>
					<view class="sever_status">待处理</view>
				</view>
				
				<view class="space-between p-2" style="border-bottom:1rpx solid #eee;">
					<view class="header_img" v-if="item.cusImgUrl"><image :src="item.cusImgUrl"></image></view>
					<view class="header_img" v-else><image src="../../static/logo.png"></image></view>
					<view class="search_item">
						<view class="name">顾客：{{item.cusName}}</view>
						<view>下单时间：{{item.addTime}}</view>
					<!-- 	<view>地址：{{item.cusAddress}}</view>
						<view>电话：{{item.cusTel}}</view>
						<view>订单编号：{{item.orderId}}</view> -->
					</view>
				</view>
			</view>
		</view>
		
		<!-- 分界线 -->
		<view>
			<view class="search_list"  @click="seeList(item.orderId)" v-for="item in preDealList" :key="item.index">
				<view class="space-between pb-2">
					<view class="serve_sort">保洁类<text class="serve_price">￥30.00</text></view>
					<view class="sever_status">待处理</view>
				</view>
				
				<view class="space-between p-2" style="border-bottom:1rpx solid #eee;">
					<view class="header_img" v-if="item.cusImgUrl"><image :src="item.cusImgUrl"></image></view>
					<view class="header_img" v-else><image src="../../static/logo.png"></image></view>
					<view class="search_item">
						<view class="name">顾客：{{item.cusName}}</view>
						<view>下单时间：{{item.addTime}}</view>
						<!-- <view>地址：{{item.cusAddress}}</view>
						<view>电话：{{item.cusTel}}</view>
						<view>订单编号：{{item.orderId}}</view> -->
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import myInput from "@/components/my-input/my-input.vue"
	import {gePreDealListMsg} from "@/api/data.js"
	export default {
		components: {uniNavBar},
		data() {
			return {
				my_blur:true,//控制失焦状态
				preDealList:[],//员工首次加载的数组
				list2:[],//搜索数组
			}			
		},
		methods: {
			seeList(e){
				console.log(e)
			},
			doInput(e){
				console.log(e,"父组件输入")
				var str=e
				var list=this.preDealList
				// var list2=[]
				if(str!=null&&str!=""){
				      list.forEach(item=>{
				        if(
							item.cusName.indexOf(str)!= -1
						){
						  this.list2.push(item)
						  for(let i = 0; i < this.list2.length; i++) {
									 for(let j = i + 1; j < this.list2.length ; j++) {
										 if(this.list2[i] === this.list2[j]) {
											 this.list2.splice(j, 1)
											 j--;
										 }
									 }
						  }
				        }
				      })
				      // this.staffList=list2
				    }else{
						console.log(e,"quxiao")
						str=''
						this.list2=[]
				      this.cancel()
				    } 
			},
			doFocus(e){
				console.log(e,"父组件聚焦")
			},
			doBlur(e){
				console.log(e,"父组件失去焦点")
			},
			cancel(e){
				console.log(e,"父组件取消")
				this.list2=[]
			},
			doRefresh(){
				console.log("shuaxin")
				this.list2=[]
			},
			doBack(){
				uni.navigateBack({
					delta:1
				})
			},
				
		},
		onShow() {
			gePreDealListMsg().then(res=>{
				if(res.status===200){
					console.log(res,"res.data.all_List")
					this.preDealList=res.data.preDealList
				}
			})
		},
		onLoad() {
			
		},
		onHide() {
			
		}
		
	}
</script>

<style >
	page{
		background:#f8f8f8;
	}
	.search_txt{
		font-size: 32rpx;
		display: flex;
	
	}
	.search_list{
		border-top: 1rpx solid #eee;
		border-radius: 10rpx;
		margin:0 20rpx;
		margin-bottom: 20rpx;
		background:#fff;
	}
	.search_item{
		width: 100%;
		font-size: 24rpx;
		color:#999;
		/* border-bottom:1rpx solid #eee; */
		padding:15rpx 20rpx;
		box-sizing: border-box;
		line-height: 40rpx;
	}
	.name{
		color: #333;
		font-size: 28rpx;
		line-height: 50rpx;
	}
	.header_img{
		display: flex;
		width:150rpx;
		height:150rpx;
		background:url(../../static/logo.png) no-repeat;
	}
	.header_img image{
		width:150rpx;
		height:150rpx;
	}
	.serve_sort{
		color: #333;
		font-size: 32rpx;
		font-weight: 500;
		line-height: 50rpx;
		
	}
	.serve_price{
		margin-left: 20rpx;
		color: #666;
		font-size: 30rpx;
	}
	.sever_status{
		color: #ff9933;
		font-size: 26rpx;
		font-weight: 500;
		line-height: 50rpx;
	}
</style>
