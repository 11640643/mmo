(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-machine-assets"],{"31ce":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{"min-height":"100vh"}},[n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"switchBtnList"},[n("v-uni-view",{class:0==t.type?"switchBtn choseStatus":"switchBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(0)}}},[t._v(t._s(this.$t("message").assets.MinerEarnings))]),n("v-uni-view",{class:1==t.type?"switchBtn choseStatus":"switchBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose(1)}}},[t._v(t._s(this.$t("message").assets.TeamEarnings))])],1),0==t.list.length?n("v-uni-view",{staticClass:"box",staticStyle:{"margin-top":"140rpx"}},[n("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","align-items":"center","flex-direction":"column"}},[n("v-uni-image",{staticStyle:{width:"104rpx",height:"116rpx"},attrs:{src:"/static/image/wuzhuangtai.png"}}),n("v-uni-view",{staticStyle:{"font-size":"30rpx","text-align":"center",color:"rgb(197, 197, 197)","margin-top":"30rpx"}},[t._v(t._s(this.$t("message").assets.NODATA))])],1)],1):n("v-uni-view",{staticStyle:{padding:"0 20rpx"}},t._l(t.list,(function(e,i){return n("v-uni-view",{staticClass:"card"},[n("v-uni-view",{staticClass:"timefont"},[t._v(t._s(e.trade_time))]),n("v-uni-view",{staticClass:"shoufont",staticStyle:{display:"flex"}},[t._v(t._s(t.income)+":"),n("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v(t._s(e.trade_amount)),n("span",{staticStyle:{"margin-left":"10rpx"}},[t._v("USDT")])])],1)],1)})),1)],1)],1)},s=[]},"561d":function(t,e,n){var i=n("f0ee");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("50444b12",i,!0,{sourceMap:!1,shadowMode:!1})},"67ab":function(t,e,n){"use strict";n.r(e);var i=n("9443"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},9443:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s={data:function(){return{type:0,page:1,income:this.$t("message").assets.income,list:[]}},onPullDownRefresh:function(){console.log("下拉"),this.lodings=!0,this.list=[],this.page=1,this.ListUser()},onReachBottom:function(){console.log("触底加载",this.list.length),this.list.length>=20&&(this.page=this.page+1,this.ListUser())},onReady:function(){uni.setNavigationBarTitle({title:this.$t("message").tabbar.assets})},onLoad:function(t){console.log(t),t.too?(this.type=t.too,this.choose(t.too)):(this.type=0,this.choose(0)),console.log(this.type,666666666)},computed:{i18n:function(){return this.$t("message")}},methods:{choose:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function n(){var i,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.type=t,1!=t){n.next=11;break}return i={page_no:e.page,page_size:20,trade_type:10},n.next=5,e.$api.trade_details(i);case 5:a=n.sent,console.log(a),e.list=a.data,console.log(e.list),n.next=18;break;case 11:return i={page_no:e.page,page_size:20,trade_type:5},n.next=14,e.$api.trade_details(i);case 14:s=n.sent,console.log(s),e.list=s.data,console.log(e.list);case 18:case"end":return n.stop()}}),n)})))()}}};e.default=s},"9b8e":function(t,e,n){"use strict";n.r(e);var i=n("31ce"),a=n("67ab");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("c50a");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"0fe06974",null,!1,i["a"],o);e["default"]=c.exports},c50a:function(t,e,n){"use strict";var i=n("561d"),a=n.n(i);a.a},f0ee:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-0fe06974]{background:#2f3132}.box[data-v-0fe06974]{padding-top:%?40?%}.switchBtnList[data-v-0fe06974]{width:96%;margin:auto;display:flex;justify-content:space-between;border-radius:%?180?%;background-color:#9d3523}.choseStatus[data-v-0fe06974]{background:-webkit-linear-gradient(-90deg,#f8b616,#f44e41);background:linear-gradient(-90deg,#f8b616,#f44e41)}.switchBtn[data-v-0fe06974]{font-size:%?30?%;text-align:center;width:40%;color:#fff;border-radius:%?180?%}.card[data-v-0fe06974]{background:linear-gradient(90deg,#05121a,#12232b 60%,#05121a);border-radius:%?16?%;padding:%?20?%;margin-top:%?14?%}.timefont[data-v-0fe06974]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#fee9e7}.shoufont[data-v-0fe06974]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;color:#fee9e7;margin-top:%?30?%}body.?%PAGE?%[data-v-0fe06974]{background:#2f3132}",""]),t.exports=e}}]);