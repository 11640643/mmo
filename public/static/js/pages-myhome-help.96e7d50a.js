(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-myhome-help"],{3287:function(t,e,i){"use strict";var n=i("8bc3"),a=i.n(n);a.a},"58ed":function(t,e,i){"use strict";i.r(e);var n=i("dc03"),a=i("dd49");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("3287");var r,o=i("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"22589729",null,!1,n["a"],r);e["default"]=c.exports},"6b4e":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-22589729]{background:#2f3132}.u1[data-v-22589729]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#ff493a;white-space:nowrap;border-bottom:%?4?% solid #ff493a}.u2[data-v-22589729]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#fee9e7;white-space:nowrap}.biaoti[data-v-22589729]{display:flex;justify-content:space-between;width:100%;box-sizing:border-box;padding:0 %?20?%}.xiahuaxian[data-v-22589729]{width:100%;height:%?4?%;background:#ff493a;display:flex;justify-content:space-between;color:#fee9e7}\n\n/* .xhx1 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #FEE9E7;\n}\n\n.xhx2 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #FEE9E7;\n\tmargin-left: 40rpx;\n}\n\n.xhx3 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #FEE9E7;\n\tmargin-left: 120rpx;\n}\n\n.xhx4 {\n\twidth: 25%;\n\theight: 4rpx;\n\tbackground: #FEE9E7;\n} */body.?%PAGE?%[data-v-22589729]{background:#2f3132}",""]),t.exports=e},"8bc3":function(t,e,i){var n=i("6b4e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f065").default;a("6f61d440",n,!0,{sourceMap:!1,shadowMode:!1})},dc03:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{padding:"30rpx  0 10rpx"}},[i("v-uni-view",{staticClass:"biaoti"},t._l(t.list,(function(e,n){return i("v-uni-view",{key:n,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.dian(n)}}},[i("v-uni-view",{class:t.flag==n?"u1":"u2"},[t._v(t._s(e.kins))])],1)})),1),i("v-uni-view",{staticClass:"xiahuaxian"},[i("v-uni-view",{class:0==t.flag?"xhx1":""}),i("v-uni-view",{class:1==t.flag?"xhx2":""}),i("v-uni-view",{class:2==t.flag?"xhx3":""}),i("v-uni-view",{class:3==t.flag?"xhx4":""})],1),i("v-uni-view",[0==t.flag?i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"1444rpx"},attrs:{src:"/static/image/11.png",mode:"widthFix"}})],1):t._e(),1==t.flag?i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"1500rpx"},attrs:{src:"/static/image/22.png",mode:"widthFix"}})],1):t._e(),2==t.flag?i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"2200rpx"},attrs:{src:"/static/image/33.png",mode:"widthFix"}})],1):t._e(),3==t.flag?i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-image",{staticStyle:{width:"100%",height:"1500rpx"},attrs:{src:"/static/image/44.png",mode:"widthFix"}})],1):t._e()],1)],1)},s=[]},dd49:function(t,e,i){"use strict";i.r(e);var n=i("e219"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},e219:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),s=n(i("449e")),r={components:{uParse:s.default},data:function(){return{flag:0,content:"",list:[{kins:this.$t("message").myhome.help1},{kins:this.$t("message").myhome.help2},{kins:this.$t("message").myhome.help3},{kins:this.$t("message").myhome.help4}]}},computed:{i18n:function(){return this.$t("message")}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("message").tabbar.help})},onLoad:function(t){console.log(t),t.folg?this.flag=t.folg:this.flag=0,this.getList()},methods:{getList:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.helps();case 2:i=e.sent,t.content=i.data[t.flag]["content"];case 4:case"end":return e.stop()}}),e)})))()},dian:function(t){this.flag=t,console.log(this.flag),this.getList()}}};e.default=r}}]);