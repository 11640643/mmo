(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-team-team"],{"21d1":function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return i}));var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{background:"#EBEBEB","min-height":"100vh","padding-bottom":"60rpx"}},[a("v-uni-view",{staticClass:"hearer",style:{paddingTop:e.statusBarHeight+"px"}},[a("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("v-uni-view",[a("v-uni-view",{staticStyle:{position:"absolute",left:"0",top:"106rpx",width:"320rpx",height:"34rpx",background:"#471F91","border-radius":"0 0 30rpx 0"}},[a("v-uni-view",{staticStyle:{"min-width":"320rpx",height:"34rpx",display:"flex"}},[a("v-uni-view",{staticClass:"idfont",staticStyle:{"margin-left":"20rpx"}},[e._v(e._s(this.$t("message").team.Teamsize)+":"),a("span",{staticStyle:{"margin-left":"10rpx"}},[e._v(e._s(e.team.size))])])],1)],1),a("v-uni-view",{staticClass:"tiffont"},[e._v(e._s(this.$t("message").team.TeamEarnings))]),a("v-uni-view",{staticClass:"moneyfont"},[e._v(e._s(e.team.money)),a("span",{staticStyle:{"margin-left":"10rpx"}},[e._v("USDT")])]),a("v-uni-view",{staticClass:"xiangbut",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.togoxiang.apply(void 0,arguments)}}},[e._v(e._s(this.$t("message").team.TeamsDetails))])],1),a("v-uni-image",{staticStyle:{width:"354rpx",height:"224rpx"},attrs:{src:"/static/image/teamtuan.png",mode:""}})],1)],1),a("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"12rpx"}},[a("v-uni-view",{staticClass:"busson",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tiao.apply(void 0,arguments)}}},[e._v(e._s(this.$t("message").team.TaskRewards))])],1),a("v-uni-view",{staticClass:"reffrralBg"},[a("v-uni-view",{staticClass:"ReferralBox"},[a("v-uni-view",{staticClass:"ReferralText1"},[e._v(e._s(this.$t("message").team.ReferralCode))]),a("v-uni-view",{staticClass:"ReferralLine",staticStyle:{display:"flex","justify-content":"space-between"}},[a("v-uni-view",{staticClass:"ReferralShow"},[a("v-uni-view",{staticClass:"ReferralShowText"},[e._v(e._s(e.idcode))])],1),a("v-uni-view",{staticClass:"ReferralsBtnCopy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy(e.idcode)}}},[e._v(e._s(this.$t("message").team.TeamCopy))])],1),a("v-uni-view",{staticClass:"ReferralText1"},[e._v(e._s(this.$t("message").team.ReferralLink))]),a("v-uni-view",{staticClass:"ReferralLine",staticStyle:{display:"flex","justify-content":"space-between"}},[a("v-uni-view",{staticClass:"ReferralShow"},[a("v-uni-view",{staticClass:"ReferralShowText"},[e._v(e._s(e.team.lianjie))])],1),a("v-uni-view",{staticClass:"ReferralsBtnCopy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copy(e.team.lianjie)}}},[e._v(e._s(this.$t("message").team.TeamCopy))])],1)],1),a("v-uni-view",{staticClass:"expText1"},[e._v(e._s(this.$t("message").team.TeamText))]),a("v-uni-view",{staticClass:"expLvBox"},[a("v-uni-view",{staticClass:"expLvText"},[e._v(e._s(this.$t("message").team.TeamFriend)+" LV1: 10%")]),a("v-uni-view",{staticClass:"expLvText"},[e._v(e._s(this.$t("message").team.TeamFriend)+" LV2: 7%")]),a("v-uni-view",{staticClass:"expLvText"},[e._v(e._s(this.$t("message").team.TeamFriend)+" LV3: 5%")])],1)],1),a("v-uni-view",{staticClass:"switchBtnList",staticStyle:{margin:"30rpx auto"}},[a("v-uni-view",{class:1==e.type?"switchBtn choseStatus":"switchBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose(1)}}},[e._v("LV1")]),a("v-uni-view",{class:2==e.type?"switchBtn choseStatus":"switchBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose(2)}}},[e._v("LV2")]),a("v-uni-view",{class:3==e.type?"switchBtn choseStatus":"switchBtn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.choose(3)}}},[e._v("LV3")])],1),a("v-uni-view",[0==e.list.length?a("v-uni-view",{staticClass:"box",staticStyle:{"margin-top":"140rpx"}},[a("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[a("v-uni-image",{staticStyle:{width:"104rpx",height:"116rpx"},attrs:{src:"/static/image/wuzhuangtai.png"}}),a("v-uni-view",{staticStyle:{"font-size":"30rpx","text-align":"center",color:"rgb(197, 197, 197)","margin-top":"30rpx"}},[e._v(e._s(this.$t("message").team.TeamNODATA))])],1)],1):a("v-uni-view",{staticStyle:{padding:"0 20rpx"}},e._l(e.list,(function(t,i){return a("v-uni-view",{staticClass:"card"},[a("v-uni-view",{staticClass:"shuipin"},[e._v(e._s(e.TeamPhone)+":"),a("span",{staticStyle:{color:"#222","margin-left":"10rpx"}},[e._v(e._s(t.username))])]),a("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","margin-top":"30rpx"}},[a("v-uni-view",{staticClass:"shuipin"},[e._v(e._s(e.Teamsupply)+":"),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v(e._s(t.profit))]),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v("USDT")])]),a("v-uni-view",{staticClass:"shuipin"},[e._v(e._s(t.reg_time))])],1),a("v-uni-view",{staticClass:"shuipin",staticStyle:{"margin-top":"30rpx"}},[e._v(e._s(e.Teamrecharge)+":"),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v(e._s(t.recharge))]),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v("USDT")])]),a("v-uni-view",{staticClass:"shuipin",staticStyle:{"margin-top":"30rpx"}},[e._v(e._s(e.Teamwithdraw)+":"),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v(e._s(t.withdrawals))]),a("span",{staticStyle:{color:"#F0803B","margin-left":"10rpx"}},[e._v("USDT")])])],1)})),1)],1)],1)},n=[]},"3aec":function(e,t,a){"use strict";var i=a("4ea4");a("4160"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("96cf");var s=i(a("1da1")),n={data:function(){return{TeamPhone:this.$t("message").team.TeamPhone,Teamsupply:this.$t("message").team.Teamsupply,Teamrecharge:this.$t("message").team.Teamrecharge,Teamwithdraw:this.$t("message").team.Teamwithdraw,statusBarHeight:0,idcode:1,team:{size:0,money:"42.7614",lianjie:"https://app.busd-coin.com/Trcareas/#/pages/login/login?r_code=5j0h23"},type:1,page:1,list:[]}},onLoad:function(){this.statusBarHeight=uni.upx2px(uni.getSystemInfoSync().statusBarHeight)+20,console.log(this.statusBarHeight,"padding-top")},onShow:function(){this.TeamPhone=this.$t("message").team.TeamPhone,this.Teamsupply=this.$t("message").team.Teamsupply,this.Teamrecharge=this.$t("message").team.Teamrecharge,this.Teamwithdraw=this.$t("message").team.Teamwithdraw,this.myteams(),this.getuserinfos()},onPullDownRefresh:function(){console.log("下拉"),this.lodings=!0,this.list=[],this.page=1,this.myteams()},onReachBottom:function(){console.log("触底加载",this.list.length),this.list.length>=20&&(this.page=this.page+1,this.myteams())},computed:{i18n:function(){return this.$t("message")}},methods:{getuserinfos:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getuserinfo();case 2:a=t.sent,console.log(a),e.idcode=a.info.idcode;case 5:case"end":return t.stop()}}),t)})))()},myteams:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={level:e.type,page_no:e.page,page_size:20},t.next=3,e.$api.myteam(a);case 3:i=t.sent,i.data.forEach((function(t){e.list.push(t)})),console.log(i);case 6:case"end":return t.stop()}}),t)})))()},togoxiang:function(){console.log("详情"),uni.navigateTo({url:"../machine/assets?type=2"})},tiao:function(){console.log("任务奖励"),uni.navigateTo({url:"./task"})},copy:function(e){console.log(e);var t=this;uni.setClipboardData({data:e,success:function(){console.log("success"),uni.showToast({title:t.$t("message").team.TeamYes,icon:"none"})}})},choose:function(e){console.log(e),this.type=e,this.list=[],this.page=1,this.myteams()}}};t.default=n},"3fd5":function(e,t,a){"use strict";var i=a("c081"),s=a.n(i);s.a},"4c55":function(e,t,a){"use strict";a.r(t);var i=a("3aec"),s=a.n(i);for(var n in i)"default"!==n&&function(e){a.d(t,e,(function(){return i[e]}))}(n);t["default"]=s.a},ba4c:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".hearer[data-v-ec7ebca0]{box-sizing:border-box;width:100%;background:linear-gradient(200deg,#4e26b6,#6a1db2);padding:%?62?% %?30?% %?10?% %?30?%;position:relative}.idfont[data-v-ec7ebca0]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#fff}.moneyfont[data-v-ec7ebca0]{font-size:%?34?%;font-family:PingFang SC;font-weight:800;color:#fff}.tiffont[data-v-ec7ebca0]{font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;margin:%?110?% 0 %?10?% 0}.xiangbut[data-v-ec7ebca0]{width:%?150?%;height:%?60?%;background:#fff;border-radius:%?10?%;font-size:%?30?%;font-family:PingFang SC;font-weight:700;color:#222;display:flex;justify-content:center;align-items:center;margin-top:%?24?%}.busson[data-v-ec7ebca0]{min-width:%?360?%;height:%?60?%;background:linear-gradient(-90deg,#f3a014,#f68b2b);border-radius:%?30?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.reffrralBg[data-v-ec7ebca0]{background-color:#fff;padding:%?30?%;margin-top:%?20?%}.ReferralText1[data-v-ec7ebca0]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?30?%}.ReferralShow[data-v-ec7ebca0]{width:%?504?%;color:#fff;height:%?64?%;\n\t/* padding: 20rpx; */box-sizing:border-box;background:#eaecee;border:%?4?% solid #b5b5b5;border-radius:%?10?%;display:flex;margin-right:%?20?%;padding:0 %?20?%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ReferralShowText[data-v-ec7ebca0]{\n\t/* width: 100%; */font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#222;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;display:flex;align-items:center}.ReferralsBtnCopy[data-v-ec7ebca0]{width:%?184?%;height:%?64?%;border:%?4?% solid #a72958;border-radius:%?16?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#a72958;display:flex;align-items:center;justify-content:center;box-sizing:border-box}.expText1[data-v-ec7ebca0]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?20?%}.expLvBox[data-v-ec7ebca0]{display:flex;flex-wrap:wrap}.expLvText[data-v-ec7ebca0]{width:50%;font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#36b115;margin-top:%?20?%}.ReferralLine[data-v-ec7ebca0]{margin-top:%?10?%}.switchBtnList[data-v-ec7ebca0]{width:%?730?%;border-radius:%?180?%;background-color:#b1b1b1;display:flex;justify-content:space-between}.choseStatus[data-v-ec7ebca0]{background:-webkit-linear-gradient(left,#8e4aef,#6a47f8);background:linear-gradient(90deg,#8e4aef,#6a47f8)}.switchBtn[data-v-ec7ebca0]{font-size:%?34?%;text-align:center;width:29%;color:#fff;border-radius:%?180?%}.card[data-v-ec7ebca0]{background:#fff;border-radius:%?16?%;padding:%?20?%;margin-top:%?20?%}.shuipin[data-v-ec7ebca0]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#666}",""]),e.exports=t},c081:function(e,t,a){var i=a("ba4c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("63df8466",i,!0,{sourceMap:!1,shadowMode:!1})},dd7a:function(e,t,a){"use strict";a.r(t);var i=a("21d1"),s=a("4c55");for(var n in s)"default"!==n&&function(e){a.d(t,e,(function(){return s[e]}))}(n);a("3fd5");var o,r=a("f0c5"),c=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"ec7ebca0",null,!1,i["a"],o);t["default"]=c.exports}}]);