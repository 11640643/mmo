(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-team"],{2803:function(t,e,i){"use strict";var a=i("4ea4");i("99af"),i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var s=a(i("1da1")),n={data:function(){return{TeamPhone:this.$t("message").team.TeamPhone,Teamsupply:this.$t("message").team.Teamsupply,Teamrecharge:this.$t("message").team.Teamrecharge,Teamwithdraw:this.$t("message").team.Teamwithdraw,statusBarHeight:0,qian:"",hou:"",idcode:1,team:{size:0,money:"42.7614",lianjie:"https://app.busd-coin.com/Trcareas/#/pages/login/login?r_code=5j0h23"},type:1,page:1,list:[]}},onLoad:function(){this.statusBarHeight=uni.upx2px(uni.getSystemInfoSync().statusBarHeight)+20,console.log(this.statusBarHeight,"padding-top"),this.getuserinfos(),this.getlianjie()},onShow:function(){this.TeamPhone=this.$t("message").team.TeamPhone,this.Teamsupply=this.$t("message").team.Teamsupply,this.Teamrecharge=this.$t("message").team.Teamrecharge,this.Teamwithdraw=this.$t("message").team.Teamwithdraw,this.myteams()},onPullDownRefresh:function(){console.log("下拉"),this.lodings=!0,this.list=[],this.page=1,this.myteams()},onReachBottom:function(){console.log("触底加载",this.list.length),this.list.length>=20&&(this.page=this.page+1,this.myteams())},computed:{i18n:function(){return this.$t("message")}},methods:{getuserinfos:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getuserinfo();case 2:i=e.sent,console.log(i,"shuju2222"),t.hou=i.info.idcode,console.log(t.hou,22222);case 6:case"end":return e.stop()}}),e)})))()},getlianjie:function(){this.getuserinfos();var t=this;uni.request({url:"http://tr.jrytc.cn/api/Index/systemconfig",success:function(e){console.log(e,"biaoshi"),t.qian=e.data.regurl,console.log(t.qian,1111111)}})},myteams:function(){var t=this;return(0,s.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i={level:t.type,page_no:t.page,page_size:20},e.next=3,t.$api.myteam(i);case 3:a=e.sent,a.data.forEach((function(e){t.list.push(e)})),console.log(a);case 6:case"end":return e.stop()}}),e)})))()},togoxiang:function(){console.log("详情"),uni.navigateTo({url:"../machine/assets?type=2"})},tiao:function(){console.log("任务奖励"),uni.navigateTo({url:"./task"})},copy:function(t){console.log(t,33333333);var e=this;if(t!=this.hou){var i="".concat(this.qian,"\n").concat(this.hou);uni.setClipboardData({data:i,success:function(){console.log("success"),uni.showToast({title:e.$t("message").team.TeamYes,icon:"none"})}})}else uni.setClipboardData({data:t,success:function(){console.log("success"),uni.showToast({title:e.$t("message").team.TeamYes,icon:"none"})}})},choose:function(t){console.log(t),this.type=t,this.list=[],this.page=1,this.myteams()}}};e.default=n},"5e02":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".hearer[data-v-c906c246]{box-sizing:border-box;width:100%;background:linear-gradient(200deg,#4e26b6,#6a1db2);padding:%?62?% %?30?% %?10?% %?30?%;position:relative}.idfont[data-v-c906c246]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#fff}.moneyfont[data-v-c906c246]{font-size:%?34?%;font-family:PingFang SC;font-weight:800;color:#fff}.tiffont[data-v-c906c246]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;margin:%?110?% 0 %?10?% 0}.xiangbut[data-v-c906c246]{width:%?150?%;height:%?60?%;background:#fff;border-radius:%?10?%;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#222;display:flex;justify-content:center;align-items:center;margin-top:%?24?%}.busson[data-v-c906c246]{min-width:%?360?%;height:%?60?%;background:linear-gradient(-90deg,#f3a014,#f68b2b);border-radius:%?30?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.reffrralBg[data-v-c906c246]{background-color:#fff;padding:%?30?%;margin-top:%?20?%}.ReferralText1[data-v-c906c246]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?30?%}.ReferralShow[data-v-c906c246]{width:%?504?%;color:#fff;height:%?64?%;\n\t/* padding: 20rpx; */box-sizing:border-box;background:#eaecee;border:%?4?% solid #b5b5b5;border-radius:%?10?%;display:flex;margin-right:%?20?%;padding:0 %?20?%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ReferralShowText[data-v-c906c246]{\n\t/* width: 100%; */font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#222;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:flex;align-items:center}.ReferralsBtnCopy[data-v-c906c246]{width:%?184?%;height:%?64?%;border:%?4?% solid #a72958;border-radius:%?16?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#a72958;display:flex;align-items:center;justify-content:center;box-sizing:border-box}.expText1[data-v-c906c246]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?20?%}.expLvBox[data-v-c906c246]{display:flex;flex-wrap:wrap}.expLvText[data-v-c906c246]{width:50%;font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#36b115;margin-top:%?20?%}.ReferralLine[data-v-c906c246]{margin-top:%?10?%}.switchBtnList[data-v-c906c246]{width:%?730?%;border-radius:%?180?%;background-color:#b1b1b1;display:flex;justify-content:space-between}.choseStatus[data-v-c906c246]{background:-webkit-linear-gradient(left,#8e4aef,#6a47f8);background:linear-gradient(90deg,#8e4aef,#6a47f8)}.switchBtn[data-v-c906c246]{font-size:%?34?%;text-align:center;width:29%;color:#fff;border-radius:%?180?%}.card[data-v-c906c246]{background:#fff;border-radius:%?16?%;padding:%?20?%;margin-top:%?20?%}.shuipin[data-v-c906c246]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#666}",""]),t.exports=e},"7be0":function(t,e,i){"use strict";var a=i("f137"),s=i.n(a);s.a},"9d06":function(t,e,i){"use strict";i.r(e);var a=i("d4e2"),s=i("d2aa");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);i("7be0");var o,r=i("f0c5"),c=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"c906c246",null,!1,a["a"],o);e["default"]=c.exports},d2aa:function(t,e,i){"use strict";i.r(e);var a=i("2803"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},d4e2:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{background:"#EBEBEB","min-height":"100vh","padding-bottom":"60rpx"}},[i("v-uni-view",{staticClass:"hearer",style:{paddingTop:t.statusBarHeight+"px"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("v-uni-view",[i("v-uni-view",{staticStyle:{position:"absolute",left:"0",top:"106rpx",width:"320rpx",height:"34rpx",background:"#471F91","border-radius":"0 0 30rpx 0"}},[i("v-uni-view",{staticStyle:{"min-width":"320rpx",height:"34rpx",display:"flex"}},[i("v-uni-view",{staticClass:"idfont",staticStyle:{"margin-left":"20rpx"}},[t._v(t._s(this.$t("message").team.Teamsize)+":"),i("span",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(t.team.size))])])],1)],1),i("v-uni-view",{staticClass:"tiffont"},[t._v(t._s(this.$t("message").team.TeamEarnings))]),i("v-uni-view",{staticClass:"moneyfont"},[t._v(t._s(t.team.money)),i("span",{staticStyle:{"margin-left":"10rpx"}},[t._v("USDT")])]),i("v-uni-view",{staticClass:"xiangbut",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togoxiang.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").team.TeamsDetails))])],1),i("v-uni-image",{staticStyle:{width:"354rpx",height:"224rpx"},attrs:{src:"/static/image/teamtuan.png",mode:""}})],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"12rpx"}},[i("v-uni-view",{staticClass:"busson",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tiao.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").team.TaskRewards))])],1),i("v-uni-view",{staticClass:"reffrralBg"},[i("v-uni-view",{staticClass:"ReferralBox"},[i("v-uni-view",{staticClass:"ReferralText1"},[t._v(t._s(this.$t("message").team.ReferralCode))]),i("v-uni-view",{staticClass:"ReferralLine",staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",{staticClass:"ReferralShow"},[i("v-uni-view",{staticClass:"ReferralShowText"},[t._v(t._s(t.hou))])],1),i("v-uni-view",{staticClass:"ReferralsBtnCopy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.hou)}}},[t._v(t._s(this.$t("message").team.TeamCopy))])],1),i("v-uni-view",{staticClass:"ReferralText1"},[t._v(t._s(this.$t("message").team.ReferralLink))]),i("v-uni-view",{staticClass:"ReferralLine",staticStyle:{display:"flex","justify-content":"space-between"}},[i("v-uni-view",{staticClass:"ReferralShow"},[i("v-uni-view",{staticClass:"ReferralShowText"},[t._v(t._s(t.qian)+t._s(t.hou))])],1),i("v-uni-view",{staticClass:"ReferralsBtnCopy",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copy(t.qian,t.hou)}}},[t._v(t._s(this.$t("message").team.TeamCopy))])],1)],1),i("v-uni-view",{staticClass:"expText1"},[t._v(t._s(this.$t("message").team.TeamText))]),i("v-uni-view",{staticClass:"expLvBox"},[i("v-uni-view",{staticClass:"expLvText"},[t._v(t._s(this.$t("message").team.TeamFriend)+" LV1: 10%")]),i("v-uni-view",{staticClass:"expLvText"},[t._v(t._s(this.$t("message").team.TeamFriend)+" LV2: 7%")]),i("v-uni-view",{staticClass:"expLvText"},[t._v(t._s(this.$t("message").team.TeamFriend)+" LV3: 5%")])],1)],1),i("v-uni-view",{staticClass:"switchBtnList",staticStyle:{margin:"30rpx auto"}},[i("v-uni-view",{class:1==t.type?"switchBtn choseStatus":"switchBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(1)}}},[t._v("LV1")]),i("v-uni-view",{class:2==t.type?"switchBtn choseStatus":"switchBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(2)}}},[t._v("LV2")]),i("v-uni-view",{class:3==t.type?"switchBtn choseStatus":"switchBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(3)}}},[t._v("LV3")])],1),i("v-uni-view",[0==t.list.length?i("v-uni-view",{staticClass:"box",staticStyle:{"margin-top":"140rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[i("v-uni-image",{staticStyle:{width:"104rpx",height:"116rpx"},attrs:{src:"/static/image/wuzhuangtai.png"}}),i("v-uni-view",{staticStyle:{"font-size":"30rpx","text-align":"center",color:"rgb(197, 197, 197)","margin-top":"30rpx"}},[t._v(t._s(this.$t("message").team.TeamNODATA))])],1)],1):i("v-uni-view",{staticStyle:{padding:"0 20rpx"}},t._l(t.list,(function(e,a){return i("v-uni-view",{staticClass:"card"},[i("v-uni-view",{staticClass:"shuipin"},[t._v(t._s(t.TeamPhone)+":"),i("span",{staticStyle:{color:"#222","margin-left":"10rpx"}},[t._v(t._s(e.username))])]),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"30rpx"}},[i("v-uni-view",{staticClass:"shuipin"},[t._v(t._s(t.Teamsupply)+":"),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v(t._s(e.profit))]),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v("USDT")])]),i("v-uni-view",{staticClass:"shuipin"},[t._v(t._s(e.reg_time))])],1),i("v-uni-view",{staticClass:"shuipin",staticStyle:{"margin-top":"30rpx"}},[t._v(t._s(t.Teamrecharge)+":"),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v(t._s(e.recharge))]),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v("USDT")])]),i("v-uni-view",{staticClass:"shuipin",staticStyle:{"margin-top":"30rpx"}},[t._v(t._s(t.Teamwithdraw)+":"),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v(t._s(e.withdrawals))]),i("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[t._v("USDT")])])],1)})),1)],1)],1)},n=[]},f137:function(t,e,i){var a=i("5e02");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("f086b3d4",a,!0,{sourceMap:!1,shadowMode:!1})}}]);