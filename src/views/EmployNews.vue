<template>
	<div class="news">
		<p class="p1">当前位置： 主页 > 就业新闻</p>
		
		<thirdnavbar></thirdnavbar>
	</div>
</template>

<script>
	import thirdNav from '../components/thirdNav.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"thirdnavbar":thirdNav
		}
		
		
	}
	
	
</script>

<style scoped>
	.news{
		height: 800px;
		
	}
	.p1{
		font-size: small;
	}
	
	
</style>