(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-money-withdrawal"],{"1b2f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),s={data:function(){return{usermoney:"42.9214",userphone:"962190067",useradress:"TPbsFRkjrkVEa1sqmSi5QYYrrQaf1xR2Y3",money:"",password:"",nowWeek:"",nowDate:"",nowTime:"",show:!1,keshow:!1,phone:"",telegram:"",shezhi:0}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("message").tabbar.withdrawal})},onLoad:function(){this.setNowTimes(),this.getuserinfos()},computed:{i18n:function(){return this.$t("message")}},onShow:function(){this.merList()},methods:{getuserinfos:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getuserinfo();case 2:i=e.sent,console.log(i,"我的信息"),t.shezhi=i.info.is_fund_password,console.log(t.shezhi,"是否设置过密码");case 6:case"end":return e.stop()}}),e)})))()},ccshow:function(){var t=this;t.keshow=!0,uni.request({url:"https://www.asdasdbsn.xyz/api/Index/systemconfig",success:function(e){console.log(e),t.phone=e.data.whastapp,t.telegram=e.data.telegram}})},merList:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getuserinfo();case 2:i=e.sent,t.usermoney=i.info.balance,t.userphone=i.info.username,t.useradress=i.info.address,uni.setStorageSync("memberInfo",i.info);case 7:case"end":return e.stop()}}),e)})))()},setNowTimes:function(){var t=new Date,e=t.getDay(),i=(String(t.getFullYear()),t.getMonth(),String(t.getDate()<10?"0"+t.getDate():t.getDate()),String(t.getHours()<10?"0"+t.getHours():t.getHours()),String(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes()),String(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds()),["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]),n=i[e];this.nowWeek=n,console.log(this.nowWeek)},submit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("星期六"!=t.nowWeek&&"星期日"!=t.nowWeek){e.next=4;break}uni.showToast({title:t.$t("message").Withdrawal.WithdrawalTitle,icon:"none"}),e.next=14;break;case 4:if(""!=t.money&&""!=t.password){e.next=8;break}uni.showToast({title:t.$t("message").drawing.drawingTitle1,icon:"none"}),e.next=14;break;case 8:return i={amount:t.money,fund_password:t.password},e.next=11,t.$api.withdrawal(i);case 11:n=e.sent,console.log(n),1==n.code?(uni.showToast({title:n.code_dec,icon:"success"}),setTimeout((function(){uni.navigateBack({delta:1})}),1500)):uni.showToast({title:n.code_dec,icon:"none"});case 14:case"end":return e.stop()}}),e)})))()},close:function(){this.show=!1},callphone:function(){console.log("dadianhua "),window.location.href=this.phone},youxiang:function(){console.log("邮箱"),window.location.href=this.telegram},record:function(){uni.navigateTo({url:"./record"})}}};e.default=s},"2d17":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uPopup:i("3d7b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{background:"#EBEBEB","min-height":"100vh","padding-top":"20rpx"}},[i("v-uni-view",{staticStyle:{padding:"0 16rpx"}},[i("v-uni-view",{staticClass:"titlecard"},[i("v-uni-view",[i("v-uni-view",{staticStyle:{"font-size":"26rpx","font-family":"PingFang SC","font-weight":"500",color:"#FFFFFF"}},[t._v(t._s(this.$t("message").Withdrawal.Residualassets))]),i("v-uni-view",{staticClass:"moefont"},[t._v(t._s(t.usermoney)),i("span",{staticStyle:{"margin-left":"10rpx"}},[t._v("USDT")])])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center"}},[i("v-uni-view",{staticClass:"jilu",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.record.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalRecords))])],1)],1)],1),i("v-uni-view",{staticStyle:{background:"#fff",padding:"20rpx 30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"36rpx",height:"58rpx","margin-right":"16rpx"},attrs:{src:"/static/image/iphone.png",mode:""}}),i("v-uni-view",{staticClass:"jufont"},[t._v(t._s(t.userphone))])],1),i("v-uni-view",{staticStyle:{display:"flex","margin-top":"20rpx","align-items":"center"}},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"54rpx","margin-right":"8rpx"},attrs:{src:"/static/image/adress.png",mode:""}}),i("v-uni-view",{staticClass:"adressfont"},[i("v-uni-input",{attrs:{type:"text",value:""},model:{value:t.useradress,callback:function(e){t.useradress=e},expression:"useradress"}})],1),""!=t.useradress?i("v-uni-view",{staticClass:"throuthfont",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!0}}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalCheck))]):t._e()],1),i("v-uni-view",{staticClass:"cifont"},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalText))])],1),i("v-uni-view",{staticStyle:{background:"#fff",padding:"20rpx 30rpx","margin-top":"20rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"32rpx","font-family":"PingFang SC","font-weight":"bold",color:"#222222"}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalAmount))]),i("v-uni-view",{staticClass:"putkuang",staticStyle:{"margin-top":"10rpx"}},[i("v-uni-image",{staticStyle:{width:"62rpx",height:"62rpx","margin-right":"34rpx"},attrs:{src:"/static/image/tixian.png",mode:""}}),i("v-uni-input",{attrs:{type:"number","placeholder-style":"font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #666666;",value:"",placeholder:this.$t("message").Withdrawal.WithdrawalInput},model:{value:t.money,callback:function(e){t.money=e},expression:"money"}})],1),i("v-uni-view",{staticClass:"putkuang",staticStyle:{"margin-top":"20rpx"}},[i("v-uni-image",{staticStyle:{width:"56rpx",height:"68rpx","margin-right":"34rpx"},attrs:{src:"/static/image/block.png",mode:""}}),i("v-uni-input",{attrs:{type:"password","placeholder-style":"font-size: 28rpx;font-family: PingFang SC;font-weight: bold;color: #666666;",value:"",placeholder:this.$t("message").Withdrawal.WithdrawalInput2},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"fufont2"},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalText2))]),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[i("v-uni-view",{staticClass:"tibutt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalTijiao))])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{"font-size":"24rpx","font-family":"PingFang SC","font-weight":"bold",color:"#666666"}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalTime))])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[i("v-uni-view",[i("v-uni-view",{staticStyle:{"font-size":"28rpx","font-family":"PingFang SC","font-weight":"bold",color:"#F68A2A","text-align":"center","border-bottom":"solid 5rpx #F68A2A","padding-bottom":"10rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ccshow.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").Withdrawal.WithdrawalForget))])],1)],1)],1),i("u-popup",{attrs:{show:t.show,round:10,mode:"center"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-view",{staticStyle:{padding:"30rpx",width:"600rpx",height:"264rpx"}},[i("v-uni-view",{staticClass:"titlede2"},[t._v(t._s(t.useradress))]),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"100rpx"}},[i("v-uni-view",{staticClass:"knowbutt",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[t._v(t._s(this.$t("message").Withdrawal.chakanShutdown))])],1)],1)],1),1==t.keshow?i("v-uni-view",{staticClass:"popup"},[i("v-uni-view",{staticClass:"popup_box"},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"flex-end","padding-top":"20rpx"}},[i("v-uni-image",{staticClass:"kefu",attrs:{src:"/static/image/kefutou.png"}}),i("v-uni-image",{staticClass:"xx",attrs:{src:"/static/image/closecha.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.keshow=!1}}})],1),i("v-uni-view",{staticStyle:{"margin-top":"30rpx",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticClass:"text2"},[t._v(t._s(this.$t("message").Withdrawal.kefu1))])],1),i("v-uni-view",{staticStyle:{padding:"0 54rpx",display:"flex","justify-content":"space-between","margin-top":"40rpx"}},[i("v-uni-view",{staticClass:"box1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.callphone.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"142rpx",height:"132rpx"},attrs:{src:"/static/image/whastapp.png"}})],1),i("v-uni-view",{staticClass:"box2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.youxiang.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"128rpx",height:"130rpx"},attrs:{src:"/static/image/telegram.png"}})],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"40rpx"}},[i("v-uni-view",{staticClass:"text3"},[t._v(t._s(this.$t("message").Withdrawal.kefu2)+": 09:00-22:00")])],1)],1)],1):t._e()],1)},s=[]},6721:function(t,e,i){"use strict";var n=i("f376"),a=i.n(n);a.a},"772b":function(t,e,i){"use strict";i.r(e);var n=i("1b2f"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},a1b3:function(t,e,i){"use strict";i.r(e);var n=i("2d17"),a=i("772b");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("6721");var o,r=i("f0c5"),l=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"28385f7a",null,!1,n["a"],o);e["default"]=l.exports},f376:function(t,e,i){var n=i("fd8d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3800b968",n,!0,{sourceMap:!1,shadowMode:!1})},fd8d:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".titlecard[data-v-28385f7a]{background:linear-gradient(196deg,#4f27b7,#6b1cb1);border-radius:%?16?%;padding:%?20?% %?30?%;display:flex;justify-content:space-between;align-items:center}.jilu[data-v-28385f7a]{height:%?80?%;width:%?270?%;background:#fff;border-radius:%?32?%;font-size:%?24?%;font-family:PingFang SC;font-weight:800;color:#222;display:flex;justify-content:center;align-items:center}.moefont[data-v-28385f7a]{font-size:%?38?%;font-family:PingFang SC;font-weight:800;color:#fff;margin-top:%?22?%}.adressfont[data-v-28385f7a]{width:%?534?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.throuthfont[data-v-28385f7a]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;text-decoration:underline;color:#f68a2a}.jufont[data-v-28385f7a]{font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#222}.tiaobut[data-v-28385f7a]{width:%?584?%;height:%?64?%;background:linear-gradient(-90deg,#6b47f8,#8d4aef);border-radius:%?30?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#fefefe;display:flex;justify-content:center;align-items:center}.cifont[data-v-28385f7a]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?30?%}.putkuang[data-v-28385f7a]{border:%?2?% solid #999;background:linear-gradient(-90deg,#eaecee,#eaecee);border-radius:%?16?%;padding:%?20?%;display:flex;align-items:center}.fufont2[data-v-28385f7a]{font-size:%?24?%;font-family:PingFang SC;font-weight:700;color:#666;margin-top:%?26?%}.tibutt[data-v-28385f7a]{width:%?584?%;height:%?80?%;background:linear-gradient(-90deg,#6b47f8,#8d4aef);border-radius:%?40?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.knowbutt[data-v-28385f7a]{width:%?200?%;height:%?70?%;background:linear-gradient(-90deg,#6d47f7,#8d4af0);border-radius:%?36?%;font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.popup[data-v-28385f7a]{height:100vh;width:%?750?%;position:fixed;top:0;z-index:99999;background-color:rgba(9,9,9,.5);display:flex;justify-content:center;padding-top:%?600?%}.popup_box[data-v-28385f7a]{width:%?660?%;height:%?500?%;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:#fff;border-radius:%?16?%}.kefu[data-v-28385f7a]{width:%?196?%;height:%?196?%;margin-right:%?175?%;margin-top:%?-120?%}.xx[data-v-28385f7a]{width:%?30?%;height:%?30?%;margin-right:%?30?%}.text2[data-v-28385f7a]{font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#222;letter-spacing:%?4?%}.box1[data-v-28385f7a]{width:%?204?%;height:%?164?%;border:%?4?% solid #22ac38;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.box2[data-v-28385f7a]{width:%?204?%;height:%?164?%;border:%?4?% solid #32abdf;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.text3[data-v-28385f7a]{font-size:%?28?%;font-family:PingFang SC;font-weight:800;color:#222}",""]),t.exports=e}}]);