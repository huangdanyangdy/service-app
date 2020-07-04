<template>
	<view>
		<form @submit="submitForm" class="formBox">
			<view  class="form-item">
				<view class="item-left">手机号：</view>
				<input type="number" value="" placeholder="请输入手机号" name="phone"/>
			</view>
			
			<view  style="width: 120%; display: flex;justify-content: flex-end;">			
				<view  class="subCode" >获取短信验证码	</view>
			</view>
			<view  class="form-item">
				<view class="item-left">验证码：</view>
				<input  value="" placeholder="请输入验证码" name="confirmCode"/>
			</view>
			<view  class="form-item">
				<view class="item-left">旧密码：</view>
				<input type="password" value="" placeholder="请输入旧密码" name="oldPwd"/>
			</view>
			<view  class="form-item">
				<view class="item-left">新密码：</view>
				<input type="password" value="" placeholder="请输入新密码" name="newPwd"/>
			</view>
			<view  class="form-item">
				<view class="item-left">确认密码：</view>
				<input type="password" value="" placeholder="请确认密码" name="confirmPwd"/>
			</view>
				
			<button form-type="submit" class="subBtn" >提交</button>
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}			
		},
		methods: {
			submitForm(e){
				console.log(e.detail.value,"lalal")
			}
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
	.formBox{
		display: flex;
		align-items: center;
		justify-content: center;
		background:#f8f8f8;
		padding:30rpx 0;
		box-sizing: border-box;
		margin: 20rpx;
		border-radius: 10rpx;
	}
	
	.form-item{
		display: flex;
		align-items: center;
		width: 150%;
		font-size: 28rpx;
		margin:30rpx 0;
		margin-left:-100rpx ;
	}
	
	.form-item:first-of-type{
		margin-bottom:10rpx;
	}
	.item-left{
		display: flex;
		width: 30%;
		color: #555;
		
	}
	.subCode{
		color: #1aa3ff;
		font-size: 24rpx;
		padding: 10rpx;
	}
	input{
		/* background: red; */
		border: 1rpx solid #ccc;
		font-size: 24rpx;
		padding: 20rpx;
		width: 60%;
	}
	.subBtn{
		background: #00bfff;
		color: #fff;
		width: 100%;
		font-size: 28rpx;
		margin-top: 80rpx;
	}
	
</style>
