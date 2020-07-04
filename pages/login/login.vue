<template>
	<view>
		<view class="top-wrap ">
			<view class="play-start logo_img"><image src="../../static/aite.png" mode=""></image></view>
			<view class="play-start">智慧养老系统</view>
		</view>
		<view class="headerImg"><image src="../../static/logo.png" mode=""></image></view>
		<form class="middle-container" @submit="submitForm">
			<view class="middle-item">
				<view class="icon-box" >
					<image src="../../static/user.png" mode=""></image>	
				</view>
				<input type="text" v-model="account"   placeholder="请输入账号" name="account" @blur="accBlur"/>
				<view class="icon-box"  @click="onReset(1)">
					<image src="../../static/close.png" mode=""></image>	
				</view>
			</view>
			
			<view class="middle-item">
				<view class="icon-box">
					<image src="../../static/lock.png" mode=""></image>	
				</view>
				<input type="password" v-model="pwd"   placeholder="请输入密码" name="pwd" @blur="pwdBlur"/>
				<view class="icon-box" @click="onReset(2)">
					<image src="../../static/close.png" mode=""></image>	
				</view>
			</view>
			<button form-type="submit" class="subBtn" ><view class="right_arrows" ></view></button>
		</form>
		<view class="space-around bottom-box">
			<view class="bottom-item" @click="forgetPwd">忘记密码</view>
			<view class="bottom-item" @click="register">用户注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputContent:'',
				account:'',
				pwd:''
			}			
		},
		methods: {
			//提交表单
			submitForm(e){
				// console.log(e.detail.value,"lalal")
				this.inputContent=e.detail.value
				console.log(this.inputContent,"lalal")	
				if(this.inputContent){
					uni.reLaunch({
						url:"../home/home"
					})
				}
				
				
			},
			accBlur(){
				var _this=this
				if(_this.account==''||_this.account==undefined){
					uni.showToast({
						icon:'none',
						title:'账号不能为空！'
						// success() {
						// }
					})
				}
			},
			pwdBlur(){
				var _this=this
				if(_this.pwd==''||_this.pwd==undefined){
					uni.showToast({
						icon:'none',
						title:'密码不能为空！'
						// success() {
						// }
					})
				}
			},
			forgetPwd(){
				uni.navigateTo({
					url:"../forgetPwd/forgetPwd"
				})
			},
			
			register(){
				uni.navigateTo({
					url:"../register/register"
				})
			},
			
			
			// 重置账号/密码
			onReset(e){
				if(e===1){
					this.account=''
				}else if(e===2){
					this.pwd=''
				}
			},
			
		},
		onShow() {
			
		},
		onLoad() {
			
		},
		onHide() {
			
		}
		
	}
</script>

<style >
	.top-wrap{
		/* background:linear-gradient(rgb(242, 242, 242)0%,rgb(204, 238, 255)50%,rgb(41, 82, 163)100%); */
		/* background:linear-gradient(rgb(242, 242, 242)0%,rgb(204, 238, 255)50%,rgb(0, 191, 255)100%); */
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 100rpx 60rpx;
		padding-bottom: 150rpx;
		font-size:36rpx;
		font-weight: 550;
	}
	.logo_img{
		width: 50rpx;
		height: 50rpx;
		margin-right: 10rpx;
		
	}
	.logo_img image{
		width: 50rpx;
		height: 50rpx;
	}
	.headerImg{
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin: 0 auto;
		margin-top:-75rpx;
		background: #eee;
		
	}
	.headerImg image{
		width: 150rpx;
		height: 150rpx;
	}
	.middle-container{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		
		border-radius: 10rpx;
		padding: 0;
		margin-top:50rpx ;
		box-sizing: border-box;
	}
	.middle-item{
		width:100%;
		display: flex;
		justify-content:center;
		align-items: center;
		border: 1rpx solid #eee;
		border-radius: 50rpx;
		background-color: #f8f8f8;
		padding: 20rpx 0;
		margin: 30rpx 0;
	}
	.icon-box{
		width: 40rpx;
		height: 40rpx;
		display: flex;
		margin: 0 20rpx;
	}
	.icon-box image{
		width: 40rpx;
		height: 40rpx;
	}
	.subBtn{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100rpx;
		height: 100rpx;
		margin-top: 100rpx;
		border-radius: 50rpx;
		/* background: radial-gradient(rgb(204, 238, 255)0%,rgb(41, 82, 163)30%,rgb(102, 202, 242)100%); */
		background-color: #00BFFF;
	}
	.subBtn:active{
		background-color: #fff;
	}
	
	.right_arrows{
		border-top: 1px solid #fff;
		border-right: 1px solid #fff;
	}
	.bottom-box{
		width: 100%;
		/* height: calc(100%, -10rpx); */
		position: absolute;
		bottom: 100rpx;
		/* margin-top:400rpx; */
	}
	.bottom-item{
		font-size: 26rpx;
		color:#00BFFF ;
	}
</style>
