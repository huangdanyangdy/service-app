<template>
	<view>
		<uni-nav-bar right-text="刷新" title="首页" rightIcon="list" @clickRight="openFile" ></uni-nav-bar>
		<view class="top-wrap">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#555">
				<swiper-item>
					<view class="swiper-item"><image src="../../static/swiper1.jpg" mode=""></image></view>
				</swiper-item>
				<swiper-item v-for="item in imgs" :key="item.index">
					<view class="swiper-item"><image :src="item.imgUrl" mode=""></image></view>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 金刚区 -->
		<view class="play-grid m-2" style="background: #e9e6e6; border:1rpx solid #f3f3f3;border-radius: 5rpx;">
			<view class="play-column" v-for="item in serveItems" @click="toDetails(item.id)">
				<view class="play-center icon-box" :style="{background:item.bgcol}">
					<image :src="item.icon" mode="" ></image>
				</view>
				<view class="items-tit">{{item.tit}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import { getBannerData} from "@/api/data.js"
	export default {
		components: {uniNavBar},
		data() {
			return {
				imgs:'',//轮播图数组
				imgUrl:'',
				serveItems:[
					{
						icon:'../../static/all.png',
						tit:'全部工单',
						bgcol:"#ff6666",
						id:0
					},
					{
						icon:'../../static/pre_deal.png',
						tit:'待处理',
						bgcol:"#ffbf00",
						id:1
					},
					{
						icon:'../../static/dealing.png',
						tit:'处理中',
						bgcol:"#00bfff",
						id:2
					},
					{
						icon:'../../static/history.png',
						tit:'历史工单',
						bgcol:"#bf80ff",
						id:3
					},
					{
						icon:'../../static/serve_list.png',
						tit:'服务项目',
						bgcol:"	#ff8000",
						id:4
					},
					
					{
						icon:'../../static/people.png',
						tit:'服务人员',
						bgcol:"#80ffbf",
						id:5
					},
				]
			}			
		},
		methods: {
			openFile(){
				console.log("ttttttttttt")
			},
			toDetails(e){
				if(e===0){
					uni.navigateTo({
						url:"../allList/allList"
					})
				}else if(e===1){
					uni.navigateTo({
						url:"../pre_deal/pre_deal"
					})
				}else if(e===2){
					uni.navigateTo({
						url:"../dealing/dealing"
					})
				}else if(e===3){
					uni.navigateTo({
						url:"../historyList/historyList"
					})
				}else if(e===4){
					uni.navigateTo({
						url:"../serve_list/serve_list"
					})
				}else if(e===5){
					uni.navigateTo({
						url:"../serveStaff/serveStaff"
					})
				}
				else{
					console.log(e,"我是"+e)
				}
			}
		},
		onShow() {
			
		},
		onLoad() {
			var _this=this
			getBannerData().then(res => {
				 if (res.status === 200){
					 _this.imgs=res.data.imgs
					console.log(_this.imgs,"_this.imgs")
				 }
			})
			
		},
		onHide() {
			
		}
	}
</script>

<style >
	page{
		background:#f8f8f8;
	}
	.top-wrap{
		/* background:linear-gradient(rgba(0, 188, 255) 0%,rgba(204, 229, 255) 100% ); */
		/* padding-top: 150rpx; */
		/* padding-bottom: 20rpx; */
	}
	.swiper-item {
		margin:20rpx;
		/* margin-top: 0; */
	}
	.swiper-item image{
		width:100%;
		height: 350rpx;
	}
	.icon-box{
		background:#ffbf00;
		padding: 30rpx;
		border-radius: 10rpx;
	}
	.icon-box image{
		width:50rpx;
		height:50rpx;
	}
	.items-tit{
		font-size: 24rpx;
		margin-top: 10rpx;
		color: #444;
	}
	
</style>
