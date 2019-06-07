<template>
	<div class="secondnav">
		<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
		  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">就业新闻</a>
		  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">热点关注</a>
		 
		  <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">政策公告 </a>
		</div>
		
		<div class="tab-content" id="v-pills-tabContent">
		  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
		  	<h2 style="text-align: center;">“莫道桑榆晚 为霞尚满天” 积极看待启动老年就业市场</h2>
		  	<p style="font-size: large; font-weight: 700;">全国政协委员白岩松建议尽快启动老年就业市场</p>
		  	<p style="font-weight: 600;">舆情概述</p>&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;今年两会，不少委员格外关注老年人就业问题。全国政协委员白岩松表示，建议开始启动老年就业市场建设。他提出试点推动老年就业市场的建立，首先就是要保障这套就业体系与法律的接轨，同时还包括机构的建立以及舆论和观念的推进，尽早为未来做好准备。全国政协委员鲁晓明拟提交《关于为老年人就业提供平等法律保护的提案》，建议赋予老年人平等的就业权。这个话题也引发网民热议，新浪微博话题#建议尽快启动老年就业市场#阅读量达1.1亿次，网民讨论近7000次。
  <p style="font-weight: 600;">媒体观点</p>&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;媒体报道上，有关老年人就业的言论整体表现出理性、积极的一面。
海外网认为，老有所为有多种，工作、娱乐可随心，关键是养老的“基础设施”要建稳，才能去除后顾之忧、让老人更青春！
东方网、《中国老年报》则充分肯定老年人就业的意义和价值，称“一个旨在让‘劳动更有价值，劳动者更有尊严’的社会，老年人不能被排斥在外。建立‘老年就业市场’，不仅需要法律体系的与时俱进，也需要公众实现价值观念的重塑与更新——老年人并非无用之人，只要找到合适的空间，他们依然可以发光发热。”
中安在线指出，老年群体是全社会的宝贵财富，老年人的就业问题，事关老有所养、老有所为、老有所乐，事关每个人的晚年幸福，需要全社会共同面对、共同作答。
  <br />&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;
我国人口老龄化呈现“独居老人和空巢老人比重将越来越高”“‘未富先老’态势明显”等特点，易导致社会不稳定因素的累积。未雨绸缪就显得尤其重要，比如，做好未来应对人口老龄化的规划和顶层设计，逐步建立和完善应对人口老龄化的政策体系，积极引导企业、社会主体、个人提前进入老年事业建设，出台鼓励老年人就业的相关政策，探索老年人和年轻人错位就业政策等。
“莫道桑榆晚，为霞尚满天”。从舆论反馈可以看出，主流人群对待老年人就业也是积极理性的，启动老年就业市场是存在广泛的民意基础的。相信随着老年就业政策的完善，退休只是大部分老年人“职业第二春”的开始。
		  </div>
		  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">这是第二篇文章</div>
		  <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">政策公告</div>
		</div>
	</div>	
</template>

<script>
	export default{
		name:"thirdnav"
	}
	
</script>

<style scoped>
	.secondnav{
		width: 100%;
	}
	#v-pills-tab{
		background: #e9ecef;
		height: 800px;
		color: black;
		width: 20%;
		float: left;
	}
	
	.tab-pane{
		width: 53%;
		height: 600px;
		margin: 0 auto;
		padding: 5px 0;
	}
	.tab-pane img{
		width: 454px;
		height: 200px;
		display: block;
		text-align: center;
	}
</style>