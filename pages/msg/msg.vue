<template>
	<view>
		<uni-nav-bar  title="消息通告" right-text="刷新" @clickRight="doRefresh"></uni-nav-bar>
		<my-input @doFocus="doFocus" placeholder="请输入标题" right-text="取消" @doSearch="cancel" @doBlur="doBlur" @doInput="doInput"></my-input>
		<view class="list-content ">
			<view class="play-start item-box"  v-for="item in msgList" :key=item.index>
				<view class="item-img"><image :src="item.imgUrl" mode=""></image></view>
				<!-- <view class="item-img"><image src="../../static/aite.png" mode=""></image></view> -->
				<view class="item-right">
					<view class="space-between ">
						<view class="tit">{{item.tit}}</view>
						<view class="msg-time">{{item.time}}</view>
					</view>
					<view class="space-between mt-2">
						<view class="text1 sub-tit">{{item.subTit}}</view>
						<view class="msg-circle"></view>
					</view>
				</view>
			</view>			
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import myInput from "@/components/my-input/my-input.vue"
	import { getMsgList} from "@/api/data.js"
	export default {
		components: {uniNavBar,myInput},
		data() {
			return {
				msgList:''
			}			
		},
		methods: {
			doRefresh(){
				console.log("shuaxin")
			},
		},
		onShow() {
			getMsgList().then(res=>{
				if(res.status==200){
					this.msgList=res.data.msgList
					console.log(this.msgList)
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
	.list-content{
		background: #fff;
		/* border: 1rpx solid #eee; */
		margin: 20rpx;
	}
	.item-box{
		width: 100%;
		box-sizing: border-box;
		margin-bottom: 60rpx;
	}
	.item-img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		
	}
	.item-img image{
		width: 100rpx;
		height: 100rpx;
		
	}
	.item-right{
		width: 83%;
		margin-left: 20rpx;
	}
	
	.tit{
		font-size: 28rpx;
		font-weight: 550;
		color: #333;
	}
	.msg-time{
		font-size: 24rpx;
		color: #666;
	}
	.sub-tit{
		width: 90%;
		font-size: 26rpx;
		color: #666;
	}
	.msg-circle{
		width: 15rpx;
		height: 15rpx;
		border-radius: 50%;
		background: red;
	}
	
</style>
