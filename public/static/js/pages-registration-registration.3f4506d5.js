(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registration-registration"],{2462:function(t,e,i){"use strict";i.r(e);var n=i("5275"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"34f5":function(t,e,i){var n=i("ff5f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("461a18da",n,!0,{sourceMap:!1,shadowMode:!1})},5275:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),s={data:function(){return{phone:"",password:"",twopassword:"",yaoqing:"",yzm:"",src:"",code_rand:""}},computed:{i18n:function(){return this.$t("message")}},onShow:function(){this.codes()},methods:{codes:function(){for(var t=[],e=0;e<4;e++){var i=Math.random();i*=10,i=Math.ceil(i),t.push(i)}console.log(t.join("")),this.code_rand=t.join("");var n=this;uni.request({url:"http://tr.jrytc.cn/api/users/code",data:{code_rand:t.join("")},responseType:"arraybuffer",success:function(t){console.log(t,555555555);var e=new Blob([t.data],{type:"image/png"});n.blobToDataURL(e,(function(t){console.log(t),n.src=t}))}})},blobToDataURL:function(t,e){var i=new FileReader;i.onload=function(t){e(t.target.result)},i.readAsDataURL(t)},zhuce:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.phone&&""!=t.password&&""!=t.twopassword&&""!=t.yzm&&""!=t.yaoqing){e.next=4;break}uni.showToast({title:t.$t("message").drawing.drawingTitle1,icon:"none"}),e.next=14;break;case 4:if(t.password==t.twopassword){e.next=8;break}uni.showToast({title:t.$t("message").drawing.drawingTitle3,icon:"none"}),e.next=14;break;case 8:return i={username:t.phone,password:t.password,re_password:t.twopassword,code:t.yzm,code_rand:t.code_rand,idcode:t.yaoqing},e.next=11,t.$api.register(i);case 11:n=e.sent,console.log(n,"zheshifanhui"),1==n.code?(uni.showToast({title:n.code_dec,icon:"success"}),setTimeout((function(){uni.navigateTo({url:"../login/login"})}),1500)):uni.showToast({title:n.code_dec,icon:"none"});case 14:case"end":return e.stop()}}),e)})))()}}};e.default=s},"69b5":function(t,e,i){"use strict";var n=i("34f5"),a=i.n(n);a.a},8654:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{padding:"0 20rpx",position:"fixed",left:"50%",transform:"translateX(-50%)","z-index":"20"}},[i("v-uni-view",{staticStyle:{"margin-top":"100rpx"}},[i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"36rpx",height:"48rpx","margin-left":"4rpx"},attrs:{src:"/static/image/iphone.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"textphone"},[t._v("+852")]),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").registration.regisplaceholder1,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #999999;"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"26rpx"}},[i("v-uni-image",{staticStyle:{width:"38rpx",height:"42rpx"},attrs:{src:"/static/image/block.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").registration.regisplaceholder2,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #999999;"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"26rpx"}},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/blockmi.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").registration.regisplaceholder3,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #999999;"},model:{value:t.twopassword,callback:function(e){t.twopassword=e},expression:"twopassword"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"26rpx"}},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/yqm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").registration.regisplaceholder4,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #999999;"},model:{value:t.yaoqing,callback:function(e){t.yaoqing=e},expression:"yaoqing"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"26rpx"}},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width2",attrs:{type:"text",placeholder:this.$t("message").registration.regisplaceholder5,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #999999;"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}})],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"50rpx",display:"flex","justify-content":"center"}},[i("v-uni-image",{staticStyle:{width:"280rpx",height:"50rpx"},attrs:{src:t.src,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.codes.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[i("v-uni-view",{staticClass:"zhuce",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuce.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").registration.Zhuce))])],1)],1),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",display:"flex"}},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"266rpx",display:"flex"},attrs:{src:"/static/image/tu.png",mode:""}})],1)],1)},s=[]},a88c:function(t,e,i){"use strict";i.r(e);var n=i("8654"),a=i("2462");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("69b5");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"4958cf24",null,!1,n["a"],o);e["default"]=c.exports},ff5f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".input1[data-v-4958cf24]{height:%?94?%;border-radius:%?10?%;display:flex;align-items:center;border:%?2?% solid #b5b5b5;padding-left:%?20?%;padding-right:%?10?%}.textphone[data-v-4958cf24]{font-size:14px;font-family:PingFang SC;font-weight:800;color:#222;margin-left:%?20?%}.input_width[data-v-4958cf24]{height:100%;width:95%;margin-left:%?26?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#222}.input_width2[data-v-4958cf24]{height:100%;width:95%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#222}.zhuce[data-v-4958cf24]{display:flex;justify-content:center;align-items:center;width:%?600?%;height:%?100?%;background:linear-gradient(-90deg,#6b47f8,#8e4aef);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff}",""]),t.exports=e}}]);