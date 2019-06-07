<template>
	<div class="work">
		<p class="p1">当前位置： 主页 > 就业中心 > 招聘信息 ></p>
		<br />
		<div class="daohang">
			<ul>
				<li><a href="#">全职招聘</a></li>
				<li><a href="#">兼职招聘</a></li>
				<li><a href="#">放心企业</a></li>
				<li><a href="#">品牌专区</a></li>
				
			</ul>
		</div>
			<!--搜索栏-->
			<div class="search">
				<i class="fa fa-search"></i>
					<input type="text" placeholder="请输入职位名、公司等关键字" />
					
					<button>搜索</button>
			</div>	
			<!--招聘区域-->
			<div class="zhaopin">
				<table border="0" cellspacing="20px" cellpadding="14px">
					<tr><th>北京招聘区域</th></tr>
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">海淀</a></td>
						<td><a href="#">朝阳</a></td>
						<td><a href="#">东城</a></td>
						<td><a href="#">西城</a></td>
						<td><a href="#">崇文</a></td>
						<td><a href="#">宣武</a></td>
						<td><a href="#">石景山</a></td>
						<td><a href="#">昌平</a></td>
						<td><a href="#">通州</a></td>
						<td><a href="#">大兴</a></td>
						<td><a href="#">顺义</a></td>
						<td><a href="#">房山</a></td>
						<td><a href="#">密云</a></td>
					</tr>
					<tr>&nbsp;</tr>
				</table>
					
				<table border="0" cellspacing="10px" cellpadding="15px">
					<tr><th>北京招聘热门职位</th></tr>	
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">销售</a></td>
						<td><a href="#">技工工人</a></td>
						<td><a href="#">行政后勤</a></td>
						<td><a href="#">营业员</a></td>
						<td><a href="#">财务</a></td>
						<td><a href="#">教师</a></td>
						<td><a href="#">保安</a></td>
						<td><a href="#">保淘宝职位</a></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">销售代表</a></td>
						<td><a href="#">普工</a></td>
						<td><a href="#">助理秘书</a></td>
						<td><a href="#">收银员</a></td>
						<td><a href="#" style="color: crimson;">会计</a></td>
						<td><a href="#">司机</a></td>
						<td><a href="#">保洁/清洁工</a></td>
						<td><a href="#">快递员</a></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">电话销售</a></td>
						<td><a href="#">操作工</a></td>
						<td><a href="#">行政专员</a></td>
						<td><a href="#">服务员</a></td>
						<td><a href="#">美术创意</a></td>
						<td><a href="#">汽车制造服务</a></td>
						<td><a href="#">保姆护工</a></td>
						<td><a href="#">仓库管理员</a></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">销售助理</a></td>
						<td><a href="#">餐饮/酒店</a></td>
						<td><a href="#" style="color: crimson;">人事专员</a></td>
						<td><a href="#">客服</a></td>
						<td><a href="#">平面设计</a></td>
						<td><a href="#">房产经纪人</a></td>
						<td><a href="#">小时工</a></td>
						<td><a href="#">美容/美发</a></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">跟单员</a></td>
						<td><a href="#">焊工</a></td>
						<td><a href="#">人力资源</a></td>
						<td><a href="#">导购</a></td>
						<td><a href="#" style="color: crimson;">市场公关媒介</a></td>
						<td><a href="#">保险</a></td>
						<td><a href="#" style="color: crimson;">物业管理</a></td>
						<td><a href="#">其他职位</a></td>
					</tr>
				</table>
				<hr />
				<table class="biao" border="0" cellspacing="25px" cellpadding="14px">
					<tr>
						<td>&nbsp;</td>
						<td><a href="#">五险一金</a></td>
						<td><a href="#">带薪年假</a></td>
						<td><a href="#">地铁沿线</a></td>
						<td><a href="#">包吃住</a></td>
						<td><a href="#">双休</a></td>
						<td><a href="#">工作补助</a></td>
						<td><a href="#">加班补助</a></td>
						<td><a href="#">年底双薪</a></td>
						<td><a href="#">员工体检</a></td>
						
					</tr>
					<tr>&nbsp;</tr>
				</table>
				
			</div>
			
			
			
		
	</div>
		
	</div>
	
	
</template>

<script>
</script>

<style scoped> 
	.p1{
		font-size: small;
	}
	.daohang{
		height: 40px;
		color: white;
		 background: url(../assets/under.jpg);
		padding: 0;
	}
	.daohang ul{
		font-family: Arial;
	    list-style: none;
	}
	.daohang ul li{
		height: 40px;
		float: left;
		font-size: 14px;
		font-weight: bold;
		margin: 10px 30px;
	}
	.daohang ul li a{
		padding: 10px;
		color: white;
		overflow: hidden;
		text-decoration: none;
	}
	.daohang ul li a:hover{
		color: black;
		background: url(../assets/hover.jpg);
	}
	.search {
	  margin-top: 10px;
	  background-color: #fff;
	  padding: 10px 0;
	  border-radius: 4px;
	  text-align: right;
	  color: #aaa;
	}
	.search input{
		  margin-right: 50px;
	    padding: 4px 2px;
	    width: 250px;
	    background-color: aaa;
	}
	.search button{
		padding: 5px;
		border-radius: 5px;
		color: white;
		 background: url(../assets/under.jpg);
		 border: none;
		 width: 100px;
	}
	.biao tr td a{
		text-decoration: none;
		color: black;
		font-size: small;
		padding: 10px;
		background: rgba(0,0,0,0.1);
	}
	
	
</style>