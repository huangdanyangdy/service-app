<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" rightIcon="plus" title="服务人员" @clickLeft="doBack"
		 @clickRight="addStaff">
		</uni-nav-bar>
		<my-input @doFocus="doFocus" placeholder="请输入服务人员姓名" right-text="取消" @doSearch="cancel" @doBlur="doBlur" @doInput="doInput"></my-input>
		
		
		<view class="search_list search_wrap"  v-if="list2[0]">
			<view class="search_txt p-2">
				搜索结果
			</view>
			<view class="search_item" v-for="item in list2" :key="item.index" @click="seeStaff(item.id)">
				<view class="space-between" style="width:100%;">
					<view class="header-img" v-if="item.imgUrl"><image :src="item.imgUrl" mode=""></image></view>
					<view class="header-img" v-else><image src="/static/logo.png" mode=""></image></view>
					<view class="item-middle">
						<view class="play-start mbt-1">姓名：{{item.staffName}}</view>
						<!-- <view class="play-start mbt-1">年龄：{{item.age}}</view> -->
						<view class="play-start mbt-1" style="color: #999;">电话：{{item.tel}}</view>
					</view>
				</view>
				<view class="right_arrows"></view>
			</view>
		</view>
		
		
		<!-- <view class="search_list">
			分界线
		</view> -->
		<view class="search_list">
			<view class="search_item" v-for="item in staffList" :key="item.index" @click="seeStaff(item.id)">
				<view class="space-between" style="width:100%;">
					<view class="header-img" v-if="item.imgUrl"><image :src="item.imgUrl" mode=""></image></view>
					<view class="header-img" v-else><image src="/static/logo.png" mode=""></image></view>
					<view class="item-middle">
						<view class="play-start mbt-1">姓名：{{item.staffName}}({{item.serveSort}})</view>
						<!-- <view class="play-start mbt-1">年龄：{{item.age}}</view> -->
						<view class="play-start mbt-1" style="color: #999;">电话：{{item.tel}}</view>
					</view>
				</view>
				<view class="right_arrows"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import myInput from "@/components/my-input/my-input.vue"
	import { getStaffListMsg} from "@/api/data.js"
	export default {
		components: {uniNavBar,myInput},
		data() {
			return {
				list2:[],
				staffList:[
					// {
					// 	// headerImg:"../../static/logo.png",
					// 	name:'张三',
					// 	age:18,
					// 	phone:139000000000,
					// 	id:0
					// },
					// {
					// 	headerImg:"../../static/msg.png",
					// 	name:'赵东强',
					// 	age:18,
					// 	phone:139000000000,
					// 	id:1
					// },
					// {
					// 	headerImg:"../../static/set.png",
					// 	name:'王晓霞',
					// 	age:19,
					// 	phone:139000000000,
					// 	id:2
					// }
				]
				}
		},
		methods: {
			seeStaff(id){
				uni.navigateTo({
					url:"/pages/seeStaff/seeStaff?id="+id
				
				})
				
			},
			doBack(){
				uni.navigateBack({
					delta:1
				})
			},
			doInput(e){
				console.log(e,"父组件输入")
				var str=e
				var list=this.staffList
				// var list2=[]
				if(str!=null&&str!=""){
				      list.forEach(item=>{
				        if(
							item.staffName.indexOf(str)!= -1
							||item.serveSort.toString().indexOf(str)!= -1
							||item.tel.toString().indexOf(str)!= -1
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
			},
			addStaff(){
				uni.navigateTo({
					url:"../add_staff/add_staff"
				})
			},
		},
		onShow() {
			getStaffListMsg().then(res=>{
				if(res.status==200){
					console.log(res.data.staffList,"staffList")
					this.staffList=res.data.staffList
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
	
	.search_list{
		border-top: 1rpx solid #eee;
	}
	.search_item{
		font-size: 28rpx;
		color:#555;
		border-bottom:1rpx solid #eee;
		padding:15rpx 20rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* background: #fff; */
	}
	.search_txt{
		font-size: 32rpx;
		display: flex;
	
	}
	.header-img{
		display: flex;
		width:100rpx;
		height:100rpx;
		/* background:url(../../static/logo.png) center ;
		background-size: cover; */
	}
	.header-img image{
		width:100rpx;
		height:100rpx;
	}
	.item-middle{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		width: 80%;
		margin-left: 30rpx;
	}
	

	
	
</style>
