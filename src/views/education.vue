<template>
	<div class="edu">
		<p class="p1">当前位置： 主页 > 教育培训 > 文化知识 ></p>
			<div class="class_search">
			<i class="fa fa-search"></i>
				<input type="text" placeholder="搜索课程  课程名称" />
				
				<button class="btn btn-success">搜索</button>
			</div>	
			
			<div class="introduce">
				<h4>银龄课堂</h4>
				<p>简介：
《银龄课堂》以老年教育为主题，围绕老年人的精神文化需求，从养生保健、心理健康、家政服务、休闲旅游等方面，系统提供电视课程学习内容。通过电视与网络，共同构建起老年人学习的大平台，网络点击率逐年创新高。节目承担上海远程老年大学对全市老年远程教育任务，拥有固定的收看人群。目前共有学习收视点5179个，覆盖全市居村委91%，注册学员约计42.7万人。</p>
				
			</div><br /><br />
			<h5>精彩推荐</h5>
	<!--card-->
	<div class="row">
		<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu1.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">精神文化</h5>
	    <p class="card-text">见证－改革开放四十年老年征文获奖...</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
	</div>
	<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu2.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">心理健康</h5>
	    <p class="card-text">生命因有限而精彩</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
	</div>
	<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu3.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">心理健康</h5>
	    <p class="card-text">让生命在快乐中流动！</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
	</div>
	<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu4.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">心理健康</h5>
	    <p class="card-text">怀有快乐宁静的心</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
	</div>
	<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu5.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">养生保健</h5>
	    <p class="card-text">别让骨头变疏松！</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
	</div>
	<div class="col-sm-12 col-md-4" style="width: 18rem;">
	  <img class="card-img-top" src="../assets/edu6.jpg" alt="Card image cap">
	  <div class="card-body">
	    <h5 class="card-title">休闲旅游</h5>
	    <p class="card-text">游轮上的美食之旅！</p>
	    <a href="#" class="btn btn-primary">点击观看</a>
	  </div>
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
	.introduce p{
		color: #898989;
		line-height: 1.8em;
		margin-bottom: 20px;
	}
	.btn-success{
		margin-left: 40px;
		width: 100px;
	}
	
.class_search {
  margin-top: 10px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 4px;
  text-align: center;
  color: #aaa;
}
.class_search input{
	  margin: 0px;
    padding: 4px 2px;
    background-color: aaa;
}


.col-sm-12.col-md-4{
	margin: 2%;
	width: 10%;
	overflow: hidden;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    -ms-flex: 0 0 29.333333%;
     flex: 0 0 29.333333%;
    max-width: 29.333333%;
   -webkit-transition: transform 0.5s linear;
    -moz-transition: transform 0.5s linear;
    transition: transform 0.5s linear;
}

.col-sm-12.col-md-4:hover{
	  -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        transform: scale(1.02);
}




</style>