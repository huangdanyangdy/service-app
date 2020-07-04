<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import myInput from "@/components/my-input/my-input.vue"
	export default {
		components: {uniNavBar,myInput},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import 'common/common.css';
	/*每个页面公共css */
	/* view{
		margin: 0;
		padding: 0;
	} */
</style>
