<template>
	<div class="index">
		<div class="container">
			<div class="main">
				<div class="actives">
					<h5><img class="s_img1" src="../assets/s1.jpg"/>活动纪实</h5>
					<br />
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#/news">这是一个可点击的服务纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">这是一个活动纪实新闻</a></p>
					<p style="float: right; font-size: small;"><a href="#"> >>>更多</a></p>
				</div>
				
				<div class="news">
					<h5><img class="s_img1" src="../assets/s1.jpg"/>公司简介</h5>
					<br />
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">公司简介公司简介公司简介</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">公司简介公司简介公司简介</a></p>
					<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">公司简介公司简介公司简介</a></p>
					<p style="float: right; font-size: small;"><a href="#"> >>>更多</a></p>
					<div class="entrance">
						<a href="#/mlogin"><img border="0" src="../assets/en1.jpg" width="243" height="79"></a>
						<a href="#/mlogin"><img border="0" src="../assets/en2.jpg" width="243" height="79"></a>
						<a href="#/mlogin"><img border="0" src="../assets/en3.jpg" width="243" height="79"></a>
					</div>
					
					
				</div>
				
				
				<div class="employment">
					<h5>就业新闻</h5>
					<img class="bimg" src="../assets/jiuye.jpg"/>
					<div class="text">
						<p>全国政协委员白岩松建议尽快启动老年就业市场</p>
						<router-link to="/employnews">详情</router-link>
					</div>
					
					<div class="other_news">
							<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">就业新闻就业新闻就业新闻</a></p>
							<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">就业新闻就业新闻就业新闻</a></p>
							<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">就业新闻就业新闻就业新闻</a></p>
							<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">就业新闻就业新闻就业新闻</a></p>
							<p><img class="s_img2" src="../assets/s2.jpg"/><a href="#">就业新闻就业新闻就业新闻</a></p>
							<p style="float: right; font-size: small;"><a href="#"> >>>更多</a></p>
						</div>
				</div>
			</div>
		</div>
		<br /><br /><br /><br />
	</div>
</template>

<script>
	import img8 from '../assets/8.jpg'
	import Nav from '../components/Nav.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			"navbar":Nav
		}
		
		
	}
	
	
	
</script>

<style scoped>
	.carousel-item img{
		height: 200px;
	}
	.slide{
		width: 100%;
		height: 220px;
		border: 1px solid red;
	}
	.main{
		margin-top: 30px;
	}
	.actives{
		width: 30%;
		height: 450px;
		border-left: 1px solid red;
		float: left;
	}
	.employment{
		width: 30%;
		height: 450px;
		/*border: 1px solid red;*/
		border-left: 1px solid red;
		margin: 0 auto;
		background: url(../assets/8.jpg) no-repeat left top;
	}
	.bimg{
		width: 120px;
		height: 110px;
		margin: 20px;
	}
	.text{
		position: relative;
	    float: right;
	    top: -129px;
	    height: 80px;
	    width: 172px;
	    font-weight: 600;
	    /*border: 0.5px solid red;*/
		
	   
	}
	.news{
		width: 30%;
		height: 450px;
		/*border: 1px solid red;*/
		border-left: 1px solid red;
		float: right;
	}
	.s_img1{
		margin: 8px;
	}
	.s_img2{
		margin: 8px;
	}
	.other_news{
		float: left;
		position: relative;
    	margin-top: -30px;
	}
	.entrance{
		margin: 20px 10px;
		padding: 8px;
	}
	.entrance img{
		margin-top: 10px;
	}
</style>