<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" title="服务人员详细资料" @clickLeft="doBack"></uni-nav-bar>
		<form @submit="doSubmit" >
			<!-- 第一栏 -->
			<view class="add_list">
				<view class="header_img" @click="getImg"><image :src="headerImg" ></image></view>
				<view class="right-box">
					<view class="play-center mb-1">
						<view class="left-tit ">姓名：</view>
						<view class="right-list"><input type="text" v-model="name" name="name"/></view>
					</view>
					<view class="play-center mb-1">
						<view class="left-tit">性别：</view>
						<picker @change="genderChange"  :value="genderIndex" :range="genderArray" class="right-list">
							<input  placeholder="请选择" :value="genderVal" disabled name="gender"/>
						</picker>
					</view>
					<view class="play-center mb-1">
						<view class="left-tit ">年龄：</view>
						<view class="right-list"><input type="number" v-model="age" name="age"/></view>
					</view>
				</view>
			</view>
			<!-- 第二栏 -->
			<view class="add_list play-column" >
				<view class="add_item" >
					<view class="left-tit ">身份证号码：</view>
					<view class="right-list"><input type="number" v-model="idCard" name="idCard"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">手机号码：</view>
					<view class="right-list"><input type="number" v-model="phone" name="phone"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">登录账号：</view>
					<view class="right-list"><input type="text" v-model="account" name="account"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">在职机构：</view>
					<view class="right-list"><input type="text" v-model="firm" name="firm"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">证书类型：</view>
					<view class="right-list"><input type="text" v-model="certificateType" name="certificateType"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">证书编号：</view>
					<view class="right-list"><input type="text" v-model="certificateNum" name="certificateNum"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">详细地址：</view>
					<view class="right-list"><textarea type="text" v-model="address" name="address" auto-height="true"/></view>
				</view>
			</view>
			<!-- 第三栏 -->
			<view class="add_list play-column" >
				<view class="add_item" >
					<view class="left-tit ">服务大类：</view>
					<view class="right-list"><input type="number" v-model="bigServe" name="bigServe"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">服务小类：</view>
					<view class="right-list"><input type="number" v-model="smallServe" name="smallServe"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">服务状态：</view>
					<view class="right-list"><input type="text" v-model="serveStatus" name="serveStatus"/></view>
				</view>
				<view class="add_item">
					<view class="left-tit ">服务日期：</view>
					<view class="right-list">
						<picker mode="date" @change="dateChange"  :start="startDate" :end="endDate" :value="date">
							<input type="text" v-model="date" name="serveTime" placeholder="请选择日期"/>
						</picker>
					</view>
				</view>
				<view class="add_item">
					<view class="left-tit ">服务时间：</view>
					<view class="space-around">
						<view class="right-list-item">
							<input type="text" @click="showPicker('time1')" :value=result1.result placeholder="请选择时间"/>
						</view>
						-
						<view class="right-list-item">
							<input type="text" @click="showPicker('time2')" :value=result2.result placeholder="请选择时间"/>
						</view>
					</view>
				</view>
				<view class="add_item">
					<view class="left-tit ">假日提供服务：</view>
					<picker @change="holidayChange"  :value="genderIndex" :range="serverHolidayArray" class="right-list">
						<input  placeholder="请选择" :value="serverHolidayVal" disabled name="serverHoliday"/>
					</picker>
				</view>
				<view class="add_item">
					<view class="left-tit ">周末提供服务：</view>
					<picker @change="weekendChange"  :value="genderIndex" :range="serverWeekendArray" class="right-list">
						<input  placeholder="请选择" :value="serverWeekendVal" disabled name="serverWeekend"/>
					</picker>
				</view>
				<view class="add_item "  @click="showPicker('region')">
					<view class="left-tit ">服务区域：</view>
					<view class="right-list">
						<input type="text" @click="showPicker('region')" :value=result3.result placeholder="请选择地区" name="serveArea"/>
					</view>
				</view>
			</view>
			
			<button class="my_submit" form-type="submit">提交</button>
		</form>
		<!-- 服务时间弹窗 -->
		<w-picker
			mode="time" 
			value="21:00"
			:current="true"
			:second="false"
			@confirm="onConfirm1($event,'time1')"
			@cancel="onCancel"
			ref="time1" 
		></w-picker>
		<w-picker
			mode="time" 
			value="8:00"
			:current="true"
			:second="false"
			@confirm="onConfirm2($event,'time2')"
			@cancel="onCancel"
			ref="time2" 
		></w-picker>
		<!-- 服务区域弹窗 -->
		<w-picker
			mode="region"
			:value="defaultRegion"
			default-type="value"
			:hide-area="false"
			@confirm="onConfirm3($event,'region')"
			@cancel="onCancel"
			ref="region" 
		></w-picker>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import wPicker from "@/components/w-picker/w-picker.vue";
	export default {
		components: {uniNavBar,wPicker},
		data() {
			 const currentDate = this.getDate({
				format: true
			})
			return {
				genderArray:['男','女','保密'],//服务大类数组
				genderIndex:1,//服务大类下标
				genderVal:'',//服务大类值
				name:'',
				age:'',
				idCard:'',
				phone:'',
				account:'',
				firm:'',
				certificateType:'',
				certificateNum:'',
				address:'',
				bigServe:'',
				smallServe:'',
				serveStatus:'',
				serveTime:'',
				serverWeekendArray:['是','否'],
				serverWeekendIndex:0,
				serverWeekendVal:'',
				serverHolidayArray:['是','否'],
				serverHolidayIndex:0,
				serverHolidayVal:'',
				headerImg:'../../static/logo.png',
				date:'',
				result1:{
					result:""
				},//起始时间
				result2:{
					result:""
				},//结束时间
				result3:{
					result:""
				},//区域picker结果
				defaultRegion:["350000","350500","350503"],
			}
			
		},
		
		 computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			doBack(){
				uni.navigateBack({
					delta:1
				})
			},
		
			getImg(){
				var _this = this
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
						_this.headerImg=res.tempFilePaths[0]
						console.log(this.headerImg,"照片")
				    }
				});
			},
			genderChange(e){
				// 性别选择
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.genderIndex = e.target.value
				this.genderVal=this.genderArray[e.target.value]
			},
			dateChange(e){
				this.date = e.target.value
			},
			// 假日服务
			holidayChange(e){
				this.serverHolidayIndex = e.target.value
				this.serverHolidayVal =this.serverHolidayArray[e.target.value]
			},
			// 周末服务
			weekendChange(e){
				this.serverWeekendIndex = e.target.value
				this.serverWeekendVal =this.serverWeekendArray[e.target.value]
			},
			
			 getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			//自定义picker事件---------
				showPicker(type){
					this.$refs[type].show();
				},
				onConfirm1(res,type){
					this.result1=res;
					console.log(res)
				},
				onConfirm2(res,type){
					this.result2=res;
					console.log(res)
				},
				// 自定义省市区picker
				onConfirm3(res,type){
					this.result3=res;
					console.log(res)
				},
			// ---------
			
			
			
			doSubmit(e){
				  console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				                var formdata = e.detail.value
				                uni.showModal({
				                    content: '表单数据内容：' + JSON.stringify(formdata),
				                    showCancel: false
				                });
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
		background: #f9f9f9;
	}
	.my_submit{
		background: rgb(0, 191, 255);
		width: 60%;
		color: #fff;
		margin: 30rpx auto;
	}
	.add_list{
		background: #fFF;
		padding: 30rpx;
		display: flex;
		/* margin-top: 30rpx; */
		margin-bottom: 30rpx;
		box-sizing: border-box;
		border:1rpx solid #eee ;
	}
	
	.header_img{
		width:200rpx;
		height:200rpx;
		background: #eee;
		
	}
	.header_img image{
		width:200rpx;
		height:200rpx;
		
	}
	.right-box{
		padding-left: 30rpx;
		box-sizing: border-box;
		
	}
	.left-tit{
		font-size: 28rpx;
		line-height: 60rpx;
		color:#444;
		width:35%;
	}
	
	.right-list{
		display: flex;
		align-items: center;
		width:55%;
		padding: 5rpx 10rpx;
		background: #eee;
		border-radius: 10rpx;
		line-height: 60rpx;
		box-sizing: border-box;
	}	
	.right-list-item{
		display: flex;
		align-items: center;
		width:40%;
		padding: 5rpx 10rpx;
		background: #eee;
		border-radius: 10rpx;
		line-height: 60rpx;
		box-sizing: border-box;
	}	
	.right-list input{
		font-size: 28rpx;
	}
	.add_item{
		width:100%;
		display: flex;
		margin: 10rpx 0;
	}
	
</style>
