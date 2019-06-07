<template>
	  <div id="app">
			<div class="container">
		  	<!--滚动条-->
		  	<div class="slide">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					  <ol class="carousel-indicators">
					    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					  </ol>
					  <div class="carousel-inner">
					    <div class="carousel-item active">
					      <img class="d-block w-100" src="./assets/title1.jpg" alt="First slide">
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src="./assets/title2.jpg" alt="Second slide">
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src="./assets/title3.jpg" alt="Third slide">
					    </div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>
				</div>
				<!--滚动条-->
				<!--导航栏-->
				<navbar></navbar>
		    <router-view/>
					
					
					
					<!--底部-->
					<footer>
						<p>友情链接：&nbsp;&nbsp;<a href="http://www.cncaprc.gov.cn/">全国老龄办</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.ylxd.com.cn/">全国银龄行动网</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">河北民政在线</a></p>
						<div class="xian">
						</div>						
					</footer>
			</div>
	</div>
</template>

<script>
	import Nav from './components/Nav.vue'
	
export default {
  name: 'App',
  
  components:{
			"navbar":Nav
		}
}
</script>

<style scoped>
	#app{
		margin: 0 auto;
	}
	footer{
		margin-top: 30px;
	}
	.xian{
		height: 5px;
		width: 100%;
		background: crimson;
		margin-bottom: 50px;
	}
	.carousel-inner{
		width:100%;
		height: 300px;
	}
	.carousel-inner img{
		width:100%;
		height: 300px;
	}
	
</style>
