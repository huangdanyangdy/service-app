<template>
	<view>
		<!-- 顶部 -->
		<view class=" top-wrap">
			<view class="play-start">
				<view class="header-img" @click="uploadImg" ><image :src="headerImg" mode=""></image></view>
				<view class="box-left ">
					<view class="text-tit">牧羊人</view>
					<view class="text-sub">10677287986</view>
				</view>
			</view>
			<view class="right_arrows"></view>
		</view>
		<!-- 中间 -->
		<view class="middle-wrap">
			<view class="item-box" @click="resetpwd">
				<view class="item-box-left">
					<image src="../../static/pwd.png"></image>
					<view class="password">修改密码</view>
				</view>
				<view class="right_arrows"></view>
			</view>
		</view>
		
		<view class="middle-wrap">
			<view class="item-box"  @click="checkout">
				<view class="item-box-left">
					<image src="../../static/checkout.png"></image>
					<view class="password">退出登录</view>
				</view>
				<view class="right_arrows"></view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
	import { getBannerData,getSwiper,getUserInfo} from "@/api/data.js"
	export default {
		components: {wPicker},
		data() {
			return {
				headerImg:'../../static/logo.png'
			}			
		},
		methods: {
			uploadImg(){
				var _this = this
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						_this.headerImg=res.tempFilePaths[0]
						console.log(_this.headerImg,"照片")
				    }
				});
			},
			resetpwd(){
				uni.navigateTo({
					url:"../resetPwd/resetPwd"
				})
			},
			checkout(){
				uni.showModal({
					title:"提示",
					content:"是否退出登录？",
					success(res) {
						if(res.confirm){
							// console.log("退出成功！")
							uni.navigateTo({
								url:"../login/login"
							})
						}else if(res.cancel){
							console.log("取消")
						}
					}
					
				})
			}
			
			
		},
		computed: {
			
		},
		onShow() {
		
		},
		onLoad() {
			
		},
		onHide() {
			
		}
		
	}
</script>

<style lang="scss">
	page{
		background: #f2f2f2;
	}
	.top-wrap{
		padding: 30rpx;
		padding-top: 80rpx;
		background-color: #00bfff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.header-img{
		border-radius: 50%;
		background: #fff;
		width: 150rpx;
		height: 150rpx;
		overflow: hidden;
	}
	.header-img image{
		width: 150rpx;
		height: 150rpx;
	}
	.box-left{
		display: flex;
		// align-items: center;
		justify-content: space-around;
		flex-direction: column;
		padding-left: 30rpx;
		line-height: 50rpx;
		font-size: 28rpx;
		color: #fff;
	}
	.text-tit{
		font-size: 32rpx;
		font-weight: 500;
	}
	.text-sub{
		color: #F9F9F9;
		font-size: 24rpx;
	}
	.middle-wrap{
		
		background: #fff;
		// padding:20rpx;
		font-size: 32rpx;
		margin: 20rpx;
		color: #555;
		border-radius: 10rpx;
	}
	.item-box{
		display: flex;
		padding: 20rpx;
		justify-content: space-between;
		align-items: center;
		// margin-bottom: 20rpx;
		width: 100%;
		box-sizing: border-box;
	}
	.item-box-left{
		
		display: flex;
		align-items: center;
	}
	.item-box-left:last-of-type{
		margin-bottom: 0rpx;
		
	}
	.item-box-left image{
		width: 30rpx;
		height: 30rpx;
	}
	.password{
		font-size: 28rpx;
		margin-left: 20rpx;
		display: flex;
		align-items: center;
	}
</style>
