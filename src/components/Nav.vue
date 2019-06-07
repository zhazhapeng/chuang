<template>
	<div class="nav">
		<!--导航栏-->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#/">主页</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul class="navbar-nav">
		      <li class="nav-item dropdown" v-on:mouseenter="a=true" v-on:mouseleave="a=false" v-bind:class="{show:a}">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          	就业中心
		        </a>
		        <div class="dropdown-menu" v-bind:class="{show:a}" aria-labelledby="navbarDropdownMenuLink">
		          <a class="dropdown-item" href="#">国家相关政策</a>
		          <a class="dropdown-item" href="#">河北省相关政策</a>
		          <a class="dropdown-item" href="#/work">招聘信息(可点击)</a>
		        </div>
		      </li>
		      
		      <li class="nav-item dropdown" v-on:mouseenter="b=true" v-on:mouseleave="b=false" v-bind:class="{show:b}">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          	志愿服务
		        </a>
		        <div class="dropdown-menu" v-bind:class="{show:b}" aria-labelledby="navbarDropdownMenuLink">
		          <a class="dropdown-item" href="#/news">为老服务(可点击)</a>
		          <a class="dropdown-item" href="#">治安维稳</a>
		          <a class="dropdown-item" href="#">社区共建</a>
		          <a class="dropdown-item" href="#">环境保护</a>
		        </div>
		      </li>
		      
		      <li class="nav-item dropdown" v-on:mouseenter="c=true" v-on:mouseleave="c=false" v-bind:class="{show:c}">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          	娱乐活动
		        </a>
		        <div class="dropdown-menu" v-bind:class="{show:c}" aria-labelledby="navbarDropdownMenuLink">
		          <a class="dropdown-item" href="#/recreat">旅行专区(可点击)</a>
		          <a class="dropdown-item" href="#">文体专区</a>
		          <a class="dropdown-item" href="#">交友专区</a>
		        </div>
		      </li>
		      
		      <li class="nav-item dropdown" v-on:mouseenter="d=true" v-on:mouseleave="d=false" v-bind:class="{show:d}">
		        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          	教育培训
		        </a>
		        <div class="dropdown-menu" v-bind:class="{show:d}" aria-labelledby="navbarDropdownMenuLink">
		          <a class="dropdown-item" href="#/edu">文化知识(可点击)</a>
		          <a class="dropdown-item" href="#">职场培训</a>
		        </div>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">健康中心</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">联系我们</a>
		      </li>
		    </ul>
		  </div>
		</nav>
	</div>

</template>

<script>
	export default{
		name:"fnav",
		data(){
			return{
				a:false,
				b:false,
				c:false,
				d:false
			}
		},
		methods:{
			
		}
	}
	
</script>

<style scoped>
	nav{
		width: 100%;
	}
	.bg-light{
		background: crimson !important;
	}
	.navbar-nav .nav-link {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
	}
	.dropdown-menu{
		background: crimson !important;
	}
	
	
</style>