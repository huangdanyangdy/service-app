<template>
	<view>
		<radio-group @change="radioChange" class="p-2 radio_group" v-for="(item, index) in items" :key="item.index">
			<view class="tit">{{item.name}}</view>
			<label class="play-start p-1 staffItem" v-for="staff in item.staff"  :key="staff.index">
				<view class="mr-2">
					<radio :value="staff.staffId" :checked="staff.index === current"/>
				</view>
				<view>{{staff.name}}</view>
			</label>
		</radio-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				items:[
					{
					name:"清洁类",
					staff:[{name:'张三',staffId:'0'},{name:'李四',staffId:'1'},{name:'王五',staffId:'2'},{name:'赵柳',staffId:'3'},],
					},
					{
					name:"心理健康类",
					staff:[{name:'张三',staffId:'0'},{name:'李四',staffId:'1'},{name:'王五',staffId:'2'},{name:'赵柳',staffId:'3'},],
					},
					{
					name:"维修类",
					staff:[{name:'赵民',staffId:'42650'},{name:'李喷绘',staffId:'985'},{name:'王五',staffId:'89947'},{name:'吴明伟',staffId:'8874'},],
					},
					{
					name:"代购",
					staff:[{name:'王娇',staffId:'0567888'},{name:'刘静',staffId:'0488715'},{name:'胡静',staffId:'154850'},{name:'江林',staffId:'048432'},],
					}
				],
					current:Number
				}
					
		},
		methods: {
			doInput(e){
				
			},
			doFocus(e){
				console.log(e,"父组件聚焦")
			},
			doBlur(e){
				console.log(e,"父组件失去焦点")
			},
			cancel(e){
				console.log(e,"父组件取消")
			},
			
			radioChange(evt) {
						var checkedId=evt.detail.value
						console.log(checkedId,"当前选中")
						uni.navigateTo({
							url:"../listDetaile/listDetail?checkedId="+checkedId
						})
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
	page{
		background: #f8f8f8;
	}
	.radio_group{
		background: #fff;
		margin: 20rpx;
	}
	.tit{
		font-size: 28rpx;
		font-weight: 500;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
		margin-bottom: 10rpx;
	}
	.staffItem{
		display: flex;
		margin-right: 20rpx;
		font-size: 24rpx;
		line-height: 40rpx;
	}

	
</style>
