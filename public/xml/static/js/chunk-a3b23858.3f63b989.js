(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a3b23858"],{"06fa":function(t,s,i){},"7b73":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"vipListPage"},[i("nav-bar",{staticClass:"navBar",attrs:{title:t.$t("task.list[0]"),rightText:t.$t("task.default[0]")},on:{lookDetail:t.lookDetail}}),i("div",{staticClass:"center_wrap"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[i("van-list",{class:{Empty:!t.listData.length},attrs:{finished:t.isFinished,"finished-text":t.listData.length?t.$t("vanPull[0]"):t.$t("vanPull[1]")},on:{load:t.onLoad},model:{value:t.isLoad,callback:function(s){t.isLoad=s},expression:"isLoad"}},[i("div",{staticClass:"itemlist_wrap"},t._l(t.listData,(function(s,a){return i("div",{key:a,staticClass:"itemlist_flex",on:{click:function(i){return t.receiveTask(s.task_id,s)}}},[i("div",{staticClass:"itemlist"},[i("div",{staticClass:"vip_dec"},[t._v(t._s(s.vip_dec))]),i("div",{staticClass:"imgWrap"},[i("img",{attrs:{src:s.cover_img,alt:""}})]),i("div",{staticClass:"titles"},[t._v(" "+t._s(s.title)+" ")]),i("div",{staticClass:"price"},[t._v(" "+t._s(t.$t("task.info[21]"))+":"+t._s(t.InitData.currency)+t._s(s.total_price)+" ")]),i("div",{staticClass:"commission"},[t._v(" "+t._s(t.$t("task.info[22]"))+":"+t._s(t.InitData.currency)),i("span",{staticClass:"nubmer"},[t._v(t._s(s.reward_price))])]),i("div",{staticClass:"website"},[i("div",{staticClass:"web"},[t._v(t._s(s.group_name))]),i("div",{staticClass:"site"},[t._v(t._s(s.group_info))])])])])})),0)])],1)],1)],1)},e=[],o={name:"vipListPage",components:{},props:["taskType","taskGrade"],data(){return{list:[{title:"静音音响系统入门包事发地点发鬼地方个梵蒂冈分公司的风格",price:"100",commis:"150",web:"AMAZON",site:"amazon.com"},{title:"静音音响系统入门包事发地点发鬼地方个梵蒂冈分公司的风格",price:"100",commis:"150",web:"AMAZON",site:"amazon.com"},{title:"静音音响系统入门包事发地点发鬼地方个梵蒂冈分公司的风格",price:"100",commis:"150",web:"AMAZON",site:"amazon.com"},{title:"静音音响系统入门包事发地点发鬼地方个梵蒂冈分公司的风格",price:"100",commis:"150",web:"AMAZON",site:"amazon.com"},{title:"静音音响系统入门包事发地点发鬼地方个梵蒂冈分公司的风格",price:"100",commis:"150",web:"AMAZON",site:"amazon.com"}],listData:[],isLoad:!1,isFinished:!1,isRefresh:!1,pageNo:1,page_size:10}},computed:{},watch:{},created(){this.getListData("init")},mounted(){},activated(){},destroyed(){},methods:{lookDetail(){this.$router.push({path:"/myTask"})},onLoad(){this.getListData("load")},getListData(t){this.isLoad=!0,this.isRefresh=!1,"load"==t?this.pageNo+=1:(this.pageNo=1,this.isFinished=!1),this.$Model.GetTaskList({group_id:this.taskType,task_level:this.taskGrade,page_no:this.pageNo,is_u:0,page_size:this.page_size},s=>{this.$nextTick(()=>{this.isLoad=!1}),1==s.code?("load"==t?1==this.pageNo?this.listData=s.info:this.listData=this.listData.concat(s.info):this.listData=s.info,this.pageNo==s.data_total_page?this.isFinished=!0:this.isFinished=!1):(this.listData="",this.isFinished=!0)})},onRefresh(){this.getListData("init")},receiveTask(t,s){localStorage["Token"]?this.$Model.ReceiveTask(t,t=>{1==t.code?this.$router.push("/myTask"):2==t.code&&this.$Dialog.Confirm(t.code_dec,()=>{this.$router.push("/vip")},this.$t("task.index[2]"))}):this.$router.push("/login")}}},l=o,n=(i("89f4"),i("cba8")),c=Object(n["a"])(l,a,e,!1,null,"79c6d619",null);s["default"]=c.exports},"89f4":function(t,s,i){"use strict";i("06fa")}}]);