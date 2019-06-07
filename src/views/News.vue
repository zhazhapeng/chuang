<template>
	<div class="news">
		<p class="p1">当前位置： 主页 > 志愿服务 > 为老服务 ></p>
		
		<secondnavbar></secondnavbar>
	</div>
</template>

<script>
	import secondNav from '../components/secondNav.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"secondnavbar":secondNav
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