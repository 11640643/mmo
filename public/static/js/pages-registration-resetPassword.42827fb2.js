(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registration-resetPassword"],{"43ac":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-27f1e91b]{background:#2f3132}.inTitle[data-v-27f1e91b]{padding-left:%?30?%;color:#fff;font-size:%?30?%;line-height:%?60?%;margin-top:%?26?%}.input1[data-v-27f1e91b]{height:%?94?%;border-radius:%?10?%;display:flex;align-items:center;border:%?2?% solid #5d0e00;background:#5d0e00;padding-left:%?20?%;padding-right:%?10?%}.textphone[data-v-27f1e91b]{font-size:14px;font-family:PingFang SC;font-weight:800;color:#fee9e7;margin-left:%?20?%}.input_width[data-v-27f1e91b]{height:100%;width:95%;margin-left:%?26?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.input_width2[data-v-27f1e91b]{height:100%;width:95%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.input_width3[data-v-27f1e91b]{height:100%;width:70%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.send_code[data-v-27f1e91b]{height:100%;background:linear-gradient(90deg,#7f1401,#ac1a00);color:#fee9e7;display:flex;align-items:center;justify-content:center;padding:0 %?15?%}[data-v-27f1e91b] .uni-input-input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}[data-v-27f1e91b] .uni-input-input{-webkit-text-fill-color:#fee9e7}.zhuce[data-v-27f1e91b]{display:flex;justify-content:center;align-items:center;width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#7f1401,#ac1a00);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff}.not[data-v-27f1e91b]{display:flex;justify-content:center;align-items:center;width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#666,#999);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff}body.?%PAGE?%[data-v-27f1e91b]{background:#2f3132}",""]),e.exports=t},"4afa":function(e,t,i){"use strict";i.r(t);var n=i("9a3d"),a=i("cea4");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("901c");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"27f1e91b",null,!1,n["a"],o);t["default"]=c.exports},"57ff":function(e,t,i){"use strict";var n=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("96cf");var a=n(i("1da1")),s={data:function(){return{array:["1","34","60","62","63","65","66","673","81","82","84","850","852","853","855","856","86","886","880","90","91","92","93","94","95","960","961","962","963","964","965","966","968","972","973","974","975","976","977","98","7","30","31","32","33","350","351","352","353","354","355","356","357","358","359","336","349","338","39","223","396","40","41","4175","43","44","45","46","47","48","20","210","213","216","218","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","247","248","249","250","251","252","253","254","255","256","257","258","260","261","262","263","264","265","266","267","268","269","27","290","297","298","1808","1809","1907","299","500","501","502","503","504","505","506","507","509","51","52","53","54","55","56","57","58","591","592","593","594","595","596","597","598","61","64","671","6722","6723","6724","674","676","677","678","679","682","683","684","685","686","688"],index:0,phone:"",password:"",twopassword:"",yaoqing:"",yaoqingLink:!1,yzm:"",sms:"",src:"",code_rand:"",setState:!0,setCode:0}},computed:{i18n:function(){return this.$t("message")}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("message").tabbar.regis})},onLoad:function(e){console.log(e,33333)},onShow:function(){this.getParam(location.href,"idcode")?(this.yaoqing=this.getParam(location.href,"idcode"),this.yaoqingLink=!0):(this.yaoqingLink=!1,this.yaoqing=""),this.codes(),null!=getApp().globalData.qrcode&&(this.yaoqing=getApp().globalData.qrcode)},methods:{bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",e.target.value),this.index=e.target.value},getParam:function(e,t){var i=new RegExp("(^|\\?|&)"+t+"=([^&]*)(\\s|&|$)","i");return i.test(e)?unescape(RegExp.$2.replace(/\+/g," ")):""},codes:function(){for(var e=[],t=0;t<4;t++){var i=Math.random();i*=10,i=Math.ceil(i),e.push(i)}console.log(e.join("")),this.code_rand=e.join("");var n=this;uni.request({url:uni.$url+"/api/users/code",data:{code_rand:e.join("")},responseType:"arraybuffer",success:function(e){console.log(e,555555555);var t=new Blob([e.data],{type:"image/png"});n.blobToDataURL(t,(function(e){console.log(e),n.src=e}))}})},blobToDataURL:function(e,t){var i=new FileReader;i.onload=function(e){t(e.target.result)},i.readAsDataURL(e)},zhuce:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.phone&&""!=e.password&&""!=e.twopassword&&""!=e.yzm&&""!=e.yaoqing){t.next=4;break}uni.showToast({title:e.$t("message").drawing.drawingTitle1,icon:"none"}),t.next=16;break;case 4:if(e.password==e.twopassword){t.next=8;break}uni.showToast({title:e.$t("message").drawing.drawingTitle3,icon:"none"}),t.next=16;break;case 8:return e.setState=!1,i={username:e.phone,dest:e.array[e.index],password:e.password,re_password:e.twopassword,sms_code:e.sms,code:e.yzm,code_rand:e.code_rand,idcode:e.yaoqing},setTimeout((function(){e.setState=!0,e.codes()}),3500),t.next=13,e.$api.resetPassword(i);case 13:n=t.sent,console.log(n,"zheshifanhui"),1==n.code?(uni.showToast({title:n.code_dec,icon:"success"}),setTimeout((function(){uni.navigateTo({url:"../login/login"})}),1500)):uni.showToast({title:n.code_dec,icon:"none"});case 16:case"end":return t.stop()}}),t)})))()},sendCode:function(){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.phone&&""!=e.yzm){t.next=4;break}uni.showToast({title:e.$t("message").drawing.drawingTitle1,icon:"none"}),t.next=9;break;case 4:return i={mobile:e.phone,dest:e.array[e.index],code:e.yzm,code_rand:e.code_rand},t.next=7,e.$api.sendCode(i);case 7:n=t.sent,1==n.code?(e.setCode=60,setInterval((function(){e.setCode-=1}),1e3)):uni.showToast({title:n.code_dec,icon:"none"});case 9:case"end":return t.stop()}}),t)})))()}}};t.default=s},"901c":function(e,t,i){"use strict";var n=i("e2a6"),a=i.n(n);a.a},"9a3d":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticStyle:{padding:"0 15rpx",position:"fixed",left:"50%",transform:"translateX(-50%)","z-index":"20",width:"100%",height:"100vh","box-sizing":"border-box","padding-bottom":"150rpx","overflow-y":"scroll"}},[i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"36rpx",height:"48rpx","margin-left":"4rpx"},attrs:{src:"/static/image/iphone.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"textphone",staticStyle:{display:"flex"}},[e._v("+"),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:e.index,range:e.array},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.array[e.index]))])],1)],1)],1)],1)],1),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder1,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"38rpx",height:"42rpx"},attrs:{src:"/static/image/block.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder2,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/blockmi.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder3,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.twopassword,callback:function(t){e.twopassword=t},expression:"twopassword"}})],1),i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/yqm.png",mode:"widthFix"}}),!0===e.yaoqingLink?i("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").resetPassword.regisplaceholder4,disabled:!0,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.yaoqing,callback:function(t){e.yaoqing=t},expression:"yaoqing"}}):e._e(),!1===e.yaoqingLink?i("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").resetPassword.regisplaceholder4,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.yaoqing,callback:function(t){e.yaoqing=t},expression:"yaoqing"}}):e._e()],1),i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width2",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder5,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.yzm,callback:function(t){e.yzm=t},expression:"yzm"}})],1),i("v-uni-view",{staticClass:"inTitle"},[e._v("注册手机号码")]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width3",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder6,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:e.sms,callback:function(t){e.sms=t},expression:"sms"}}),e.setCode<=0?i("v-uni-view",{staticClass:"send_code",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e._v(e._s(this.$t("message").resetPassword.code))]):e._e(),e.setCode>0?i("v-uni-view",{staticClass:"send_code"},[e._v(e._s(e.setCode)+"s")]):e._e()],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"50rpx",display:"flex","justify-content":"center"}},[i("v-uni-image",{staticStyle:{width:"280rpx",height:"50rpx"},attrs:{src:e.src,mode:"widthFix"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.codes.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[!0===e.setState?i("v-uni-view",{staticClass:"zhuce",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.zhuce.apply(void 0,arguments)}}},[e._v(e._s(this.$t("message").resetPassword.Zhuce))]):e._e(),!1===e.setState?i("v-uni-view",{staticClass:"not"},[e._v(e._s(this.$t("message").resetPassword.Zhuce))]):e._e()],1)],1),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",display:"flex"}},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"266rpx",display:"flex"},attrs:{src:"/static/image/tu.png",mode:""}})],1)],1)},s=[]},cea4:function(e,t,i){"use strict";i.r(t);var n=i("57ff"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},e2a6:function(e,t,i){var n=i("43ac");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f065").default;a("6ac0f1d5",n,!0,{sourceMap:!1,shadowMode:!1})}}]);