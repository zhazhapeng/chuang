<template>
	<div class="secondnav">
		<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">服务纪实</a>
		  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">工作简报</a>
		  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">服务反馈</a>
		  <div class="suojin-tab nav flex-column nav-pills" id="v-pills-tab2" role="tablist" aria-orientation="vertical">
		  		
		  		<a class="nav-link" id="v-pills-yiliao-tab" data-toggle="pill" href="#v-pills-jiaoxue" role="tab" aria-controls="v-pills-messages" aria-selected="false">医疗保健组</a>
		  		<a class="nav-link" id="v-pills-jiaoxue-tab" data-toggle="pill" href="#v-pills-yiliao" role="tab" aria-controls="v-pills-messages" aria-selected="false">教学辅导组</a>
		  		<a class="nav-link" id="v-pills-keji-tab" data-toggle="pill" href="#v-pills-keji" role="tab" aria-controls="v-pills-messages" aria-selected="false">科技项目组</a>
			 
		  </div>
		  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">通知公告 </a>
		</div>
		
		<div class="tab-content" id="v-pills-tabContent">
		  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
		  	<h2 style="text-align: center;">竹桥社区举办老年人集体生日会主题活动</h2><br />&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;2016年11月2日下午1点半，竹桥社区携手牙博士口腔机构在牙博士五楼活动室为辖区内65岁以上11月份过生日的15位老人举办了一场暖意融融的集体生日会。
  <br />&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;活动在社区兴秀舞蹈队优美的舞姿中拉开序幕，大家和寿星们一起吹蜡烛、切生日蛋糕，齐唱生日快乐歌。随后，社区文体队员们为寿星们表演了精心准备的合唱《最美夕阳红》、小组唱《祝你健康》、独唱《我和草原有个约定》、舞蹈《舞动中国》等节目，中间还穿插了口腔保健小知识竞赛，牙博士工作人员为观众分发了可爱的娃娃，仿佛把老人们带到了孩童时代，个个都乐得合不拢嘴。
竹桥社区是一个以老人居住为多的老社区，平时子女工作忙，很多老人都缺少子女的陪伴，尤其是一些孤寡和空巢老人，我们此次活动的宗旨是让老年人走出家门，感受到社区大家庭的温暖，为更多的老年人带去关爱、温暖、活力和快乐。
			<img src="../assets/wen1.jpg"/>
		  </div>
		  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">这是第二篇文章</div>
		  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">这是第三篇文章</div>
		  <div class="tab-pane fade" id="v-pills-jiaoxue" role="tabpanel" aria-labelledby="v-pills-yiliao-tab">教学</div>
		  <div class="tab-pane fade" id="v-pills-yiliao" role="tabpanel" aria-labelledby="v-pills-jiaoxue-tab">医疗</div>
		  <div class="tab-pane fade" id="v-pills-keji" role="tabpanel" aria-labelledby="v-pills-keji-tab">科技</div>
		  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">通知公告</div>
		</div>
	</div>	
</template>

<script>
	export default{
		name:"secondnav"
	}
	
</script>

<style scoped>
	.secondnav{
		width: 100%;
	}
	#v-pills-tab{
		background: #e9ecef;
		height: 720px;
	}
	#v-pills-tab a{
		color: black;
	}
	#v-pills-tab{
		width: 20%;
		float: left;
	}
	.suojin-tab{
		margin-left: 30px;
	}
	.tab-pane{
		width: 47%;
		margin: 0 auto;
		padding: 5px 0;
	}
	.tab-pane img{
		width: 454px;
		height: 200px;
		text-align: center;
	}
</style>