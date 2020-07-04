<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" rightIcon="plus" title="服务项目" @clickLeft="doBack"
		 @clickRight="add">
		</uni-nav-bar>
		<my-input @doFocus="doFocus" placeholder="请输入服务小类名称" right-text="取消" @doSearch="cancel" @doBlur="doBlur" @doInput="doInput"></my-input>
		<view>
			<view class="search_list">
				<view class="search_item" @click="seeServe(item.id)" v-for="item in serve_content" :key="item.id">
					<view style="width: 100%; padding-right: 20rpx;box-sizing: border-box;" class="play-center">
						<view style="width:35%" class="play-start text1">{{item.bigType}}</view>
						<view style="width:35%" class="play-start text1">{{item.smallType}}</view>
						<view style="width:30%" class="play-end text1">{{item.price}}元/{{item.chargeMethods}}</view>
					</view>
					<view class="right_arrows"></view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import myInput from "@/components/my-input/my-input.vue"
	import { getServeList} from "@/api/data.js"
	
	export default {
		components: {uniNavBar,myInput},
		data() {
			return {
				serve_content:[
					// {
					// 	id:0,
					// 	bigType:"保健品搭配",
					// 	smallType:"保健品",
					// 	price:'50',
					// 	chargeMethods:"小时"
					// },
					// {
					// 	id:1,
					// 	bigType:"保洁类",
					// 	smallType:"油烟机清洁",
					// 	price:'10',
					// 	chargeMethods:"天"
					// },
					// {
					// 	id:2,
					// 	bigType:"代购类",
					// 	smallType:"日用品代购",
					// 	price:'60',
					// 	chargeMethods:"小时"
					// },
					// {
					// 	id:3,
					// 	bigType:"心理健康类",
					// 	smallType:"心理疏导",
					// 	price:111,
					// 	chargeMethods:"小时"
					// },
					// {
					// 	id:4,
					// 	bigType:"房屋工程",
					// 	smallType:"排水维修",
					// 	price:120,
					// 	chargeMethods:"小时"
					// },
				]
			}			
		},
		methods: {
			seeServe(id){
				uni.navigateTo({
					url:"/pages/seeServe/seeServe?id="+id
				
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
				var list=this.serve_content
				var list2=[]
				if(str!=null&&str!=""){
				      list.forEach(item=>{
				        if(
							item.bigType.indexOf(str)!= -1
							||item.smallType.indexOf(str)!= -1
							||item.price.toString().indexOf(str)!= -1
						){
				          list2.push(item)
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
				      // this.serve_content=list2
					  
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
				this.list2=[]
			},
			add(){
				uni.navigateTo({
					url:"../add_serve/add_serve"
				})
			},
			
		},
		onShow() {
			getServeList().then(res=>{
				if(res.status==200){
					// console.log(res,"serve_content")
					this.serve_content=res.data.serve_content
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
		font-size: 26rpx;
		color:#555;
		border-bottom:1rpx solid #eee;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	
</style>
