<template>
	<view class="inputWrap" >
		<view class="inputBox play-center" >
			<view class="input_placeholder"  v-if="my_blur">
				<image src="../../static/search.png"></image>
				<span>{{placeholder}}</span>
			</view>
			<input type="text" v-model="flag" @focus="doFocus"  @blur="doBlur" @input="doInput"/>
		</view>
		<view class="play-center searchBox" @click="doSearch">{{rightText}}</view>
	</view>
</template>

<script>
	export default {
		name: "MyInput",
		props:{
			placeholder: {
				type: String,
				default: "请输入客户姓名"
			},
			rightText:{
				type: String,
				default: ""
			}
		},
		data() {
			
			return {
				my_blur:true,
				flag:''
			}			
		},
		methods: {
			doInput(e){
				this.my_blur=false
				this.flag=e.detail.value
				this.$emit("doInput",this.flag);
				
			},
			doFocus(e){
				this.my_blur=false
				// this.flag=e.detail.value
				this.$emit("doFocus",this.flag);
			},
			doBlur(e){
				this.$emit("doBlur",this.flag);
				if(this.flag==''){
					this.my_blur=true
				}
			},
			doSearch(){
				if(this.flag==''){
					this.my_blur=true
				}else{
					this.flag=''
					this.$emit("doSearch",this.flag);
				}
				
			}
		
				
		},
	}
</script>

<style>
	.inputWrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
	}
	.inputBox{
		background: #eee;
		width:85%;
		padding: 10rpx;
		position:relative ;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	.inputBox input{
		width: 100%;
	}
	.input_placeholder{
		font-size: 24rpx;
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #888;
	}
	.input_placeholder image{
		width: 24rpx;
		height: 24rpx;
		margin-right: 10rpx;
	}
	
	.searchBox{
		font-size: 26rpx;
		padding: 10rpx;
		color: #007AFF;
		box-sizing: border-box;
		border: 1rpx solid #007AFF;
		border-radius: 10rpx;
	}
	.searchBox:active{
		color:#fff;
	}
</style>
