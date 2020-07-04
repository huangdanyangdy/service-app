<template>
	<view >
		<view style="padding-bottom: 120rpx;">
			<view class="list_status">
				处理中订单
			</view>
			<view class="m-2 p-2 module-wrap">
				<view class="tit">客户信息</view>
				<view class="module-top" >
					<view class="service_img"><image src="../../static/logo.png" mode=""></image></view>
					<view class="content-right" >
						<view class="content-top">
							<view >赵梅丽（女士）</view><!-- 姓名 -->
						</view>
						<view class="subtit"><!-- 订购服务 -->
							<view class="">订购服务</view>
							<view class="txt-right">保洁</view>
						</view>
					</view>
				</view>
				
				<view class="subtit "><!-- 电话 -->
					<view class="">电话</view>
					<view class="txt-right">15933802541 </view>
				</view>
				<view class="subtit "><!-- 地址 -->
					<view>地址</view>
					<view class="user_addr txt-right">丰泽区东湖路23号506号-11阿波罗公寓二楼</view>
				</view>
			</view>
			
			<view class="m-2 p-2 module-wrap" v-if="checkedId">
				<view class="tit">服务员信息</view>
				<view class="module-top" @click="chooseStaff">
					<view class="service_img"><image src="../../static/logo.png" mode=""></image></view>
					<view class="content-right" >
						<view class="content-top" >
							<view >孙然（男士）</view><!-- 姓名 -->
							<view class="right_arrows"></view>
						</view>
						<view class="subtit"><!-- 订购服务 -->
							<view class="">服务类型</view>
							<view class="txt-right">保洁</view>
						</view>
					</view>
				</view>
				
				<view class="subtit "><!-- 电话 -->
					<view class="">电话</view>
					<view class="txt-right">15933802541 </view>
				</view>
			</view>
			
			<view class="m-2 p-2 module-wrap" v-if="!checkedId">
				<view class="choose-box"  @click="chooseStaff">
					<view>指派服务员</view>
					<view class="right_arrows"></view>
				</view>
			</view>
			
			<view class="m-2 p-2 module-wrap">
				<view class="tit">订单信息</view>
				<view class="module-top" >
					<view class="service_img"><image src="../../static/serve.png" mode=""></image></view>
					<view class="content-right" >
						<view class="content-top">
							<view >保洁</view><!-- 服务类型 -->
							<view class="txt-right">$50元</view>	<!-- 价格 -->
						</view>
						<view class="subtit"><!-- 数量 -->
							<view class="">数量</view>
							<view class="txt-right">*1</view>
						</view>
						
					</view>
				</view>
				
				<view class="subtit "><!-- 下单时间 -->
					<view class="">下单时间</view>
					<view class="txt-right">2020-06-17 10:56  </view>
				</view>
				<view class="subtit "><!-- 订单编号 -->
					<view>订单编号</view>
					<view class="txt-right">998784574351546</view>
				</view>
			</view>
			
			
			
			
		</view>
		
		
		
		<!-- <view class="button_bottom">
			<view class="btn">拒接</view>
			<view class="btn" @click="chooseStaff">接单</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				orderId:'',//订单列表传进来的
				checkedId:''//员工列表传进来的
			}			
		},
		methods: {
			chooseStaff(){
				uni.navigateTo({
					url:"../chooseStaff/chooseStaff"
				})
			}
		},
		onShow() {
			
		},
		onLoad(option) {
			this.orderId=option.orderId
			this.checkedId=option.checkedId
			console.log(this.orderId,"orderId")
			console.log(this.checkedId,"checkedId")
		},
		onHide() {
			
		}
		
	}
</script>

<style >
	page{
		background: #f6f6f6;
	}
	.module-wrap{
		background: #fff;
	}
	.list_status{
		font-size: 32rpx;
		padding: 20rpx;
		font-weight: 550;
	}
	.tit{
		font-size: 32rpx;
		font-weight: 500;
		color:#000;
		border-bottom: 1rpx solid #eee;
		padding: 15rpx 0;
	}
	.choose-box{
		font-size: 32rpx;
		font-weight: 500;
		color:#000;
		padding: 15rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.service_img{
		width:100rpx;
		height: 100rpx;
		background: #C3C8D6;
	}
	.service_img image{
		width:100rpx;
		height: 100rpx;
	}
	.content-right{
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 20rpx;
		font-size: 30rpx;
		flex: 1;
	}
	.content-top{
		font-size: 30rpx;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		align-items: center;
	}
	.price{
		color: #999;
		font-size: 26rpx;
		display: flex;
		justify-content: flex-end;
	}
	.module-top{
		display: flex;
		justify-content: center;
		border-bottom: 1rpx solid #eee;
		padding: 20rpx 0;
	}
	.subtit{
		color: #999;
		font-size: 26rpx;
		display: flex;
		justify-content: space-between;
		line-height: 52rpx;
	}
	.user_addr{
		width: 60%;
		
	}
	.txt-right{
		color: #333;
	}
	.button_bottom{
		width: 100%;
		background: #eee;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		z-index: 9;
		bottom: 0;
	}
	.btn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
		padding: 30rpx;
		background:#0073e6;
		color: #fff;
		
	}
	.btn:first-of-type{
		background:#ff5c33;
	}
	
</style>
