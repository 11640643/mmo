(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-money-help"],{"0231":function(t,e,n){"use strict";n.r(e);var a=n("2b40"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"0c4e":function(t,e,n){var a=n("f6e2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("15ec639a",a,!0,{sourceMap:!1,shadowMode:!1})},1235:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{padding:"30rpx  0 10rpx"}},[n("v-uni-view",{domProps:{innerHTML:t._s(t.help)}})],1)},o=[]},"2b40":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{help:""}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("充值帮助")})},onLoad:function(){this.getuserinfos()},methods:{getuserinfos:function(){var t=this;uni.request({url:uni.$url+"/api/Index/systemconfig",success:function(e){console.log(e),t.help=e.data.recharge_help}})}}};e.default=a},6129:function(t,e,n){"use strict";n.r(e);var a=n("1235"),i=n("0231");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9b0a");var r,c=n("f0c5"),u=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"2daac020",null,!1,a["a"],r);e["default"]=u.exports},"9b0a":function(t,e,n){"use strict";var a=n("0c4e"),i=n.n(a);i.a},f6e2:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-2daac020]{background:#2f3132}.u1[data-v-2daac020]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#874ec2;white-space:nowrap;border-bottom:%?4?% solid #874ec2}.u2[data-v-2daac020]{text-align:center;width:%?165?%;height:%?50?%;overflow:hidden;font-size:%?22?%;font-family:PingFang SC;color:#666;white-space:nowrap}.biaoti[data-v-2daac020]{display:flex;justify-content:space-between;width:100%;box-sizing:border-box;padding:0 %?20?%}.xiahuaxian[data-v-2daac020]{width:100%;height:%?4?%;background:#c9c9c9;display:flex;justify-content:space-between}body.?%PAGE?%[data-v-2daac020]{background:#2f3132}",""]),t.exports=e}}]);