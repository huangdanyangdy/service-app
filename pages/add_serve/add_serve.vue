<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" right-text="刷新" title="服务项目新增" @clickLeft="doBack"
		 @clickRight="doRefresh">
		</uni-nav-bar>
		<form @submit="submitBtn">
			<view class="space-between p-2" >
				<view class="play-start left-tit">服务大类：</view>
				<view class="play-center right-list" >
					<picker @change="bigChange"  :value="bigIndex" :range="bigArray">
						<input  placeholder="请选择" :value="bigVal" disabled  name="bigVal"/>
					</picker>
				</view>
			</view>
			<view class="space-between p-2" >
				<view class="play-start left-tit">服务小类：</view>
				<view class="play-center right-list" >
					<picker @change="smallChange"  :value="smallIndex" :range="smallArray">
						<input  placeholder="请选择" :value="smallVal" disabled  name="smallVal"/>
					</picker>
				</view>
			</view>
			<view class=" p-2" >
				<view class="play-start left-tit">服务内容</view>
				<textarea  class="my-textarea" name="serveContent"/>
			</view>
			<view class="space-between p-2" >
				<view class="play-start left-tit">收费方式：</view>
				<view class="play-center right-list" >
					<picker @change="feeChange"  :value="feeIndex" :range="feeArray">
						<input  placeholder="请选择" :value="feeVal" disabled  name="feeVal"/>
					</picker>
				</view>
			</view>
			<view class="space-between p-2" >
				<view class="play-start left-tit">收费单价：</view>
				<view class="play-center right-list" >
					<input type="number"  placeholder="请输入单价（单位：元）" name="price"/>
				</view>
			</view>
			<view class="space-between p-2" >
				<view class="play-start left-tit">计费方式：</view>
				<view class="play-center right-list" >
					<picker @change="chargeChange"  :value="chargeVal" :range="chargeArray">
						<input  placeholder="请选择" :value="chargeVal" disabled  name="chargeVal"/>
					</picker>
				</view>
			</view>
			<view class="space-between p-2" >
				<view class="play-start left-tit">佣金比例：</view>
				<view class="play-center right-list" >
					<input type="number"  placeholder="请输入佣金比例"  name="percent"/>%
				</view>
			</view>
			<view class=" p-2" >
				<view class="play-start left-tit">备注</view>
				<textarea  class="my-textarea" name="remark"/>
			</view>
			<button class="my_submit" form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {uniNavBar},
		data() {
			return {
				bigArray:['卫生清洁','保健服务','家庭健康护理','房屋工程','代购类','心理健康类','康复护理','交通旅游','设备维修'],//服务大类数组
				bigIndex:2,//服务大类下标
				bigVal:'',//服务大类值
				smallArray:['保健品搭配','肽康建保障','心理疏导','康复护理','门窗','油烟机清洁','冰箱清洗','纱窗维修','电路安装维修','水电制冷安装','管道疏通','排水维修','浴室维修','厨房橱柜维修','墙面粉刷','墙缝修补'],//服务小类数组
				smallIndex:2,//服务大类下标
				smallVal:'',//服务小类值
				feeArray:['收费','免费','面议'],//收费方式数组
				feeIndex:1,//收费方式下标
				feeVal:'',//收费方式值
				chargeArray:['件','小时','次','天','人'],//计费方式数组
				chargeIndex:2,//计费方式下标
				chargeVal:'',//计费方式值
			}			
		},
		methods: {
			bigChange(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				console.log("数据类型为",typeof( e.target.value))
				this.bigIndex = e.target.value
				this.bigVal=this.bigArray[ e.target.value]
			},
			smallChange(e){
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.smallIndex = e.target.value
				this.smallVal=this.smallArray[ e.target.value]
			},
			feeChange(e){
				// 收费方式
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.feeIndex = e.target.value
				this.feeVal=this.feeArray[ e.target.value]
			},
		
			chargeChange(e){
				// 计费方式
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.chargeIndex = e.target.value
				this.chargeVal=this.chargeArray[ e.target.value]
			},
			submitBtn(e){
				console.log(e.detail.value)
			},
				
			doBack(){
				uni.navigateBack({
					delta:1
				})
			},
			doRefresh(){
				console.log("shuaxin")
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
	.left-tit{
		font-size: 28rpx;
		line-height: 50rpx;
		color:#444;
		width:20%;
		
	}
	.right-list{
		width: 70%;
		padding: 6rpx;
		background: #eee;
		border-radius: 10rpx;
		font-size: 28rpx;
		line-height: 50rpx;
		box-sizing: border-box;
	}	
	.my-textarea{
		background:#eee;
		padding: 20rpx;
		width: 100%;
		height: 150rpx;
		box-sizing: border-box;
		border-radius: 10rpx;
		
	}
	.my_submit{
		background: rgb(0, 191, 255);
		width: 60%;
		color: #fff;
	}

</style>
