(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registration-resetPassword"],{"08a8":function(t,e,i){"use strict";var a=i("3ba6"),n=i.n(a);n.a},"0ab6":function(t,e,i){"use strict";var a=i("4ea4");i("4d63"),i("ac1f"),i("25f0"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("1da1")),s={data:function(){return{array:["1","34","60","62","63","65","66","673","81","82","84","850","852","853","855","856","86","886","880","90","91","92","93","94","95","960","961","962","963","964","965","966","968","971","972","973","974","975","976","977","98","7","30","31","32","33","350","351","352","353","354","355","356","357","358","359","36","37","370","371","372","373","374","375","376","377","378","379","38","380","381","382","383","384","385","386","387","388","389","336","349","338","39","223","396","40","41","4175","42","420","421","422","423","424","43","44","45","46","47","48","49","20","210","213","216","218","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","247","248","249","250","251","252","253","254","255","256","257","258","260","261","262","263","264","265","266","267","268","269","27","290","297","298","1808","1809","1907","299","500","501","502","503","504","505","506","507","509","51","52","53","54","55","56","57","58","591","592","593","594","595","596","597","598","61","64","671","6722","6723","6724","674","676","677","678","679","682","683","684","685","686","688"],index:0,phone:"",password:"",twopassword:"",yaoqing:"",yaoqingLink:!1,yzm:"",sms:"",src:"",code_rand:"",setState:!0,setCode:0}},computed:{i18n:function(){return this.$t("message")}},onReady:function(){uni.setNavigationBarTitle({title:this.$t("message").tabbar.reset})},onLoad:function(t){console.log(t,33333)},onShow:function(){this.getParam(location.href,"idcode")?(this.yaoqing=this.getParam(location.href,"idcode"),this.yaoqingLink=!0):(this.yaoqingLink=!1,this.yaoqing=""),this.codes(),null!=getApp().globalData.qrcode&&(this.yaoqing=getApp().globalData.qrcode)},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},getParam:function(t,e){var i=new RegExp("(^|\\?|&)"+e+"=([^&]*)(\\s|&|$)","i");return i.test(t)?unescape(RegExp.$2.replace(/\+/g," ")):""},codes:function(){for(var t=[],e=0;e<4;e++){var i=Math.random();i*=10,i=Math.ceil(i),t.push(i)}console.log(t.join("")),this.code_rand=t.join("");var a=this;uni.request({url:uni.$url+"/api/users/code",data:{code_rand:t.join("")},responseType:"arraybuffer",success:function(t){console.log(t,555555555);var e=new Blob([t.data],{type:"image/png"});a.blobToDataURL(e,(function(t){console.log(t),a.src=t}))}})},blobToDataURL:function(t,e){var i=new FileReader;i.onload=function(t){e(t.target.result)},i.readAsDataURL(t)},zhuce:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.phone&&""!=t.password&&""!=t.twopassword&&""!=t.yzm&&""!=t.yaoqing){e.next=4;break}uni.showToast({title:t.$t("message").drawing.drawingTitle1,icon:"none"}),e.next=16;break;case 4:if(t.password==t.twopassword){e.next=8;break}uni.showToast({title:t.$t("message").drawing.drawingTitle3,icon:"none"}),e.next=16;break;case 8:return t.setState=!1,i={username:t.phone,dest:t.array[t.index],password:t.password,re_password:t.twopassword,smscode:t.sms,code:t.yzm,code_rand:t.code_rand,idcode:t.yaoqing},setTimeout((function(){t.setState=!0,t.codes()}),3500),e.next=13,t.$api.resetPassword(i);case 13:a=e.sent,console.log(a,"zheshifanhui"),1==a.code?(uni.showToast({title:a.code_dec,icon:"success"}),setTimeout((function(){uni.navigateTo({url:"../login/login"})}),1500)):uni.showToast({title:a.code_dec,icon:"none"});case 16:case"end":return e.stop()}}),e)})))()},sendCode:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.phone&&""!=t.yzm){e.next=4;break}uni.showToast({title:t.$t("message").drawing.drawingTitle1,icon:"none"}),e.next=9;break;case 4:return i={mobile:t.phone,dest:t.array[t.index],code:t.yzm,code_rand:t.code_rand},e.next=7,t.$api.sendCodePW(i);case 7:e.sent,t.countDown();case 9:case"end":return e.stop()}}),e)})))()},countDown:function(){var t=this;this.setCode=60,setInterval((function(){t.setCode-=1}),1e3)}}};e.default=s},"1bb0":function(t,e,i){"use strict";i.r(e);var a=i("0ab6"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"3ba6":function(t,e,i){var a=i("645d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("dd3bbd68",a,!0,{sourceMap:!1,shadowMode:!1})},"3c09":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticStyle:{padding:"0 15rpx",position:"fixed",left:"50%",transform:"translateX(-50%)","z-index":"20",width:"100%",height:"100vh","box-sizing":"border-box","padding-bottom":"150rpx","overflow-y":"scroll"}},[i("v-uni-view",{staticStyle:{"margin-top":"10rpx"}},[i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title1))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"36rpx",height:"48rpx","margin-left":"4rpx"},attrs:{src:"/static/image/iphone.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"textphone",staticStyle:{display:"flex"}},[t._v("+"),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))])],1)],1)],1)],1)],1),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder1,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title2))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"38rpx",height:"42rpx"},attrs:{src:"/static/image/block.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder2,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title3))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/blockmi.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder3,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.twopassword,callback:function(e){t.twopassword=e},expression:"twopassword"}})],1),i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title4))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"42rpx",height:"42rpx"},attrs:{src:"/static/image/yqm.png",mode:"widthFix"}}),!0===t.yaoqingLink?i("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").resetPassword.regisplaceholder4,disabled:!0,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.yaoqing,callback:function(e){t.yaoqing=e},expression:"yaoqing"}}):t._e(),!1===t.yaoqingLink?i("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").resetPassword.regisplaceholder4,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.yaoqing,callback:function(e){t.yaoqing=e},expression:"yaoqing"}}):t._e()],1),i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title5))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width2",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder5,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}}),i("v-uni-image",{staticStyle:{width:"280rpx",height:"50rpx"},attrs:{src:t.src,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.codes.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"inTitle"},[t._v(t._s(this.$t("message").resetPassword.title6))]),i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width3",attrs:{type:"text",placeholder:this.$t("message").resetPassword.regisplaceholder6,"placeholder-style":"font-family: PingFang SC;font-size: 13px;\n\t\tfont-weight: 800;color: #FEE9E7;"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}}),t.setCode<=0?i("v-uni-view",{staticClass:"send_code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").resetPassword.code))]):t._e(),t.setCode>0?i("v-uni-view",{staticClass:"send_code"},[t._v(t._s(t.setCode)+"s")]):t._e()],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"50rpx",display:"flex","justify-content":"center"}}),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[!0===t.setState?i("v-uni-view",{staticClass:"zhuce",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuce.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").resetPassword.Zhuce))]):t._e(),!1===t.setState?i("v-uni-view",{staticClass:"not"},[t._v(t._s(this.$t("message").resetPassword.Zhuce))]):t._e()],1)],1),i("v-uni-view",{staticStyle:{position:"fixed",bottom:"0",left:"0",display:"flex"}},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"266rpx",display:"flex"},attrs:{src:"/static/image/tu.png",mode:""}})],1)],1)},s=[]},"645d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-0b29dcca]{background:#2f3132}.inTitle[data-v-0b29dcca]{padding-left:%?30?%;color:#fff;font-size:%?30?%;line-height:%?60?%;margin-top:%?26?%}.input1[data-v-0b29dcca]{height:%?94?%;border-radius:%?10?%;display:flex;align-items:center;border:%?2?% solid #5d0e00;background:#5d0e00;padding-left:%?20?%;padding-right:%?10?%}.textphone[data-v-0b29dcca]{font-size:14px;font-family:PingFang SC;font-weight:800;color:#fee9e7;margin-left:%?20?%}.input_width[data-v-0b29dcca]{height:100%;width:95%;margin-left:%?26?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.input_width2[data-v-0b29dcca]{height:100%;width:95%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.input_width3[data-v-0b29dcca]{height:100%;width:70%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.send_code[data-v-0b29dcca]{min-width:50px;height:100%;background:linear-gradient(90deg,#7f1401,#ac1a00);color:#fee9e7;display:flex;align-items:center;justify-content:center;padding:0 %?15?%}[data-v-0b29dcca] .uni-input-input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}[data-v-0b29dcca] .uni-input-input{-webkit-text-fill-color:#fee9e7}.zhuce[data-v-0b29dcca]{display:flex;justify-content:center;align-items:center;width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#7f1401,#ac1a00);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff}.not[data-v-0b29dcca]{display:flex;justify-content:center;align-items:center;width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#666,#999);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff}body.?%PAGE?%[data-v-0b29dcca]{background:#2f3132}",""]),t.exports=e},d6ad:function(t,e,i){"use strict";i.r(e);var a=i("3c09"),n=i("1bb0");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("08a8");var o,r=i("f0c5"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"0b29dcca",null,!1,a["a"],o);e["default"]=c.exports}}]);