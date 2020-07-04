<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}			
		},
		methods: {
			doInput(e){
				console.log(e,"父组件输入")
				var str=e
				var list=this.staffList
				var list2=[]
				if(str!=null&&str!=""){
				      list.forEach(item=>{
				        if(
							item.name.indexOf(str)!= -1
							||item.age.toString().indexOf(str)!= -1
							||item.phone.toString().indexOf(str)!= -1
						){
				          list2.push(item)
				        }
				      })
				      this.staffList=list2
				    }else{
						console.log(e,"quxiao")
						str=''
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
	
	
</style>
