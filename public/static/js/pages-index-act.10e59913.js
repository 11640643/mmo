(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-act"],{"337d":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-64494e96]{background:#2f3132}.u1[data-v-64494e96]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#874ec2;white-space:nowrap;border-bottom:%?4?% solid #874ec2}.u2[data-v-64494e96]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#666;white-space:nowrap}.biaoti[data-v-64494e96]{display:flex;justify-content:space-between;width:100%;box-sizing:border-box;padding:0 %?20?%}.xiahuaxian[data-v-64494e96]{width:100%;height:%?4?%;background:#c9c9c9;display:flex;justify-content:space-between}\n\n/* .xhx1 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #874EC2;\n}\n\n.xhx2 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #874EC2;\n\tmargin-left: 40rpx;\n}\n\n.xhx3 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #874EC2;\n\tmargin-left: 120rpx;\n}\n\n.xhx4 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #874EC2;\n} */body.?%PAGE?%[data-v-64494e96]{background:#2f3132}",""]),t.exports=n},"3a22":function(t,n,e){"use strict";var i=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("96cf");var a=i(e("1da1")),r=i(e("449e")),o={components:{uParse:r.default},data:function(){return{flag:0,content:"",list:[]}},computed:{i18n:function(){return this.$t("message")}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("平台活动")})},onLoad:function(t){this.getList()},methods:{getList:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.$api.systemconfig().then((function(n){t.content=n.activity_img}));case 1:case"end":return n.stop()}}),n)})))()}}};n.default=o},4401:function(t,n,e){"use strict";e.r(n);var i=e("3a22"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},5913:function(t,n,e){var i=e("337d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("1f972f50",i,!0,{sourceMap:!1,shadowMode:!1})},"9cdd":function(t,n,e){"use strict";var i=e("5913"),a=e.n(i);a.a},c2b4:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{padding:"30rpx  0 10rpx"}},[e("v-uni-view",[0==t.flag?e("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[e("v-uni-image",{staticStyle:{width:"100%",height:"1444rpx"},attrs:{src:t.content,mode:"widthFix"}})],1):t._e()],1)],1)},r=[]},e648:function(t,n,e){"use strict";e.r(n);var i=e("c2b4"),a=e("4401");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("9cdd");var o,c=e("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"64494e96",null,!1,i["a"],o);n["default"]=u.exports}}]);