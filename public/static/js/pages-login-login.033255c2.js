(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0bba":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var a=n(i("1da1")),s=(i("6bdd"),{data:function(){return{array:["1","34","60","62","63","65","66","673","81","82","84","850","852","853","855","856","86","886","880","90","91","92","93","94","95","960","961","962","963","964","965","966","968","971","972","973","974","975","976","977","98","995","7","30","31","32","33","350","351","352","353","354","355","356","357","358","359","36","37","370","371","372","373","374","375","376","377","378","379","38","380","381","382","383","384","385","386","387","388","389","336","349","338","39","223","396","40","41","4175","42","420","421","422","423","424","43","44","45","46","47","48","49","20","210","213","216","218","220","221","222","223","224","225","226","227","228","229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","247","248","249","250","251","252","253","254","255","256","257","258","260","261","262","263","264","265","266","267","268","269","27","290","297","298","1808","1809","1907","299","500","501","502","503","504","505","506","507","509","51","52","53","54","55","56","57","58","591","592","593","594","595","596","597","598","61","64","671","6722","6723","6724","674","676","677","678","679","682","683","684","685","686","688"],index:0,show:!1,english:!1,phone:"",password:"",yzm:"",src:"",code_rand:"",logo:"",setState:!0}},computed:{i18n:function(){return this.$t("message")}},onShow:function(){this.gettu(),this.codes()},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},gettu:function(){var t=this;uni.request({url:uni.$url+"/api/index/systemconfig",success:function(e){console.log(e),t.logo=e.data.pic_s,uni.setStorageSync("title",e.data.title),console.log(t.logo,5555)}})},codes:function(){for(var t=[],e=0;e<4;e++){var i=Math.random();i*=10,i=Math.ceil(i),t.push(i)}console.log(t.join("")),this.code_rand=t.join("");var n=this;uni.request({url:uni.$url+"/api/users/code",data:{code_rand:t.join("")},responseType:"arraybuffer",success:function(t){console.log(t);var e=new Blob([t.data],{type:"image/png"});n.blobToDataURL(e,(function(t){console.log(t),n.src=t}))}})},blobToDataURL:function(t,e){var i=new FileReader;i.onload=function(t){e(t.target.result)},i.readAsDataURL(t)},chooseLang:function(t){console.log("语言",t),this.$i18n.locale=t,this.lang=t,this.english=!1,uni.setStorageSync("locale",t)},sign:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.phone&&""!=t.password&&""!=t.yzm){e.next=5;break}return uni.showToast({title:t.$t("message").login.loginTitle,icon:"none"}),e.abrupt("return");case 5:return t.setState=!1,i={username:t.phone,password:t.password,code_rand:t.code_rand,code:t.yzm},setTimeout((function(){t.setState=!0,t.codes()}),3500),e.next=10,t.$api.login(i);case 10:if(n=e.sent,uni.setStorageSync("token",n.info.token),uni.setStorageSync("phone",t.phone),1!=n.info.state){e.next=20;break}return e.next=16,t.$api.getuserinfo();case 16:a=e.sent,console.log(a),uni.setStorageSync("memberInfo",a.info),uni.switchTab({url:"../index/index"});case 20:case"end":return e.stop()}}),e)})))()},zhuce:function(){uni.navigateTo({url:"../registration/registration"})},reset:function(){uni.navigateTo({url:"../registration/resetPassword"})}}});e.default=s},"5e36":function(t,e,i){"use strict";var n=i("8447"),a=i.n(n);a.a},"6ea1":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center"}},[i("v-uni-image",{staticStyle:{width:"182rpx",height:"182rpx"},attrs:{src:"/static/image/logo2.png",mode:""}})],1),i("v-uni-view",{staticStyle:{"margin-top":"80rpx"}},[i("v-uni-view",{staticClass:"input1"},[i("v-uni-image",{staticStyle:{width:"36rpx",height:"48rpx","margin-left":"4rpx"},attrs:{src:"/static/image/iphone.png",mode:"widthFix"}}),i("v-uni-view",{staticClass:"textphone",staticStyle:{display:"flex"}},[t._v("+"),i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell"},[i("v-uni-view",{staticClass:"uni-list-cell-db"},[i("v-uni-picker",{attrs:{value:t.index,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))])],1)],1)],1)],1)],1),i("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").login.loginplaceholder1,"placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #FEE9E7;"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"30rpx"}},[i("v-uni-image",{staticStyle:{width:"38rpx",height:"42rpx"},attrs:{src:"/static/image/block.png",mode:""}}),i("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").login.loginplaceholder2,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #FEE9E7;"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),i("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"30rpx"}},[i("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),i("v-uni-input",{staticClass:"input_width2",attrs:{type:"number",placeholder:this.$t("message").login.loginplaceholder3,"placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #FEE9E7;"},model:{value:t.yzm,callback:function(e){t.yzm=e},expression:"yzm"}})],1)],1),i("v-uni-view",{staticStyle:{"margin-top":"40rpx",display:"flex","justify-content":"center"}},[i("v-uni-image",{staticStyle:{width:"280rpx",height:"50rpx",background:"#2F3132"},attrs:{src:t.src,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.codes.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"30rpx"}},[!0===t.setState?i("v-uni-view",{staticClass:"login",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sign.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.loginBUtton))]):t._e(),!1===t.setState?i("v-uni-view",{staticClass:"login_not"},[t._v(t._s(this.$t("message").login.loginBUtton))]):t._e()],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"20rpx"}},[i("v-uni-view",{staticClass:"mimabox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.reset.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.forgetpassword))]),i("v-uni-view",{staticStyle:{margin:"0 10rpx",color:"#FEE9E7"}},[t._v("/")]),i("v-uni-view",{staticClass:"mimabox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.zhuce.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.Registration))])],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[i("v-uni-view",{staticClass:"Language",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.english=!0}}},[t._v(t._s(this.$t("message").login.locain))])],1)],1),i("v-uni-view",{staticStyle:{position:"absolute",bottom:"0",left:"0",display:"flex"}},[i("v-uni-image",{staticStyle:{width:"750rpx",height:"3000rpx"},attrs:{src:"/static/image/tu.png",mode:"widthFix"}})],1),1==t.show?i("v-uni-view",{staticClass:"popup"},[i("v-uni-view",{staticClass:"popup_box"},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"flex-end","padding-top":"20rpx"}},[i("v-uni-image",{staticClass:"kefu",attrs:{src:"/static/image/kefutou.png"}}),i("v-uni-image",{staticClass:"xx",attrs:{src:"/static/image/closecha.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}})],1),i("v-uni-view",{staticStyle:{"margin-top":"30rpx",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticClass:"text2"},[t._v(t._s(this.$t("message").login.service))])],1),i("v-uni-view",{staticStyle:{padding:"0 54rpx",display:"flex","justify-content":"space-between","margin-top":"40rpx"}},[i("v-uni-view",{staticClass:"box1"},[i("v-uni-image",{staticStyle:{width:"142rpx",height:"132rpx"},attrs:{src:"/static/image/whastapp.png"}})],1),i("v-uni-view",{staticClass:"box2"},[i("v-uni-image",{staticStyle:{width:"128rpx",height:"130rpx"},attrs:{src:"/static/image/telegram.png"}})],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"40rpx"}},[i("v-uni-view",{staticClass:"text3"},[t._v(t._s(this.$t("message").login.servicetime)+": 09:00-22:00")])],1)],1)],1):t._e(),i("v-uni-view",[1==t.english?i("v-uni-view",{staticClass:"Eject",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.english=!1}}}):t._e(),1==t.english?i("v-uni-view",{staticClass:"eject_fu"},[i("v-uni-view",{staticClass:"bluekuang"}),i("v-uni-view",{staticClass:"zhukuang"},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0 50rpx"}},[i("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/english.png",mode:""}}),i("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/q_chinese.png",mode:""}}),i("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/putaoya.png",mode:""}}),i("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/xibanya.png",mode:""}})],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0 30rpx"}},[i("v-uni-view",{staticClass:"xuanze",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLang("en-US")}}},[t._v("Choose")]),i("v-uni-view",{staticClass:"xuanze",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLang("zh-CN")}}},[t._v("选择")]),i("v-uni-view",{staticClass:"xuanze",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLang("por")}}},[t._v("escolher")]),i("v-uni-view",{staticClass:"xuanze",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseLang("es")}}},[t._v("Escoger")])],1)],1)],1):t._e()],1)],1)},s=[]},"6fe5":function(t,e,i){"use strict";i.r(e);var n=i("0bba"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"83ee":function(t,e,i){"use strict";i.r(e);var n=i("6ea1"),a=i("6fe5");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("5e36");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"01f0ce12",null,!1,n["a"],o);e["default"]=c.exports},8447:function(t,e,i){var n=i("c2f5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("20a46094",n,!0,{sourceMap:!1,shadowMode:!1})},c2f5:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-01f0ce12]{background:#2f3132}.content[data-v-01f0ce12]{padding:%?120?% %?20?% 0 %?20?%;position:relative;z-index:999}.input1[data-v-01f0ce12]{height:%?94?%;border-radius:%?10?%;display:flex;align-items:center;border:%?2?% solid #b5b5b5;background:linear-gradient(90deg,#05121a,#12232b 60%,#05121a);padding-left:%?20?%;padding-right:%?10?%}.textphone[data-v-01f0ce12]{font-size:14px;font-family:PingFang SC;font-weight:800;color:#fee9e7;margin-left:%?20?%}.input_width[data-v-01f0ce12]{height:100%;width:95%;margin-left:%?26?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}.input_width2[data-v-01f0ce12]{height:100%;width:95%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#fee9e7}[data-v-01f0ce12] .uni-input-input:-webkit-autofill{-webkit-transition:background-color 5000s ease-in-out 0s;transition:background-color 5000s ease-in-out 0s}[data-v-01f0ce12] .uni-input-input{-webkit-text-fill-color:#fee9e7}.mimabox[data-v-01f0ce12]{font-size:%?28?%;font-family:PingFang SC;font-weight:800;text-decoration:underline;color:#fee9e7}.login[data-v-01f0ce12]{width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#7f1401,#ac1a00);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.login_not[data-v-01f0ce12]{width:%?600?%;height:%?100?%;background:linear-gradient(90deg,#666,#999);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.Language[data-v-01f0ce12]{width:%?254?%;height:%?62?%;border:%?2?% solid linear-gradient(0deg,#7f1401,#ac1a00);border-radius:%?30?%;color:#fee9e7;display:flex;justify-content:center;align-items:center;background:#5d0e00}.headimg[data-v-01f0ce12]{width:%?150?%;height:%?150?%;border-radius:50%;position:absolute;top:%?-100?%}\n\n/* 弹出框样式此处开始 */.popup[data-v-01f0ce12]{height:100vh;width:%?750?%;position:absolute;top:0;z-index:99999;background-color:hsla(0,0%,100%,.3);display:flex;justify-content:center;padding-top:%?600?%}.popup_box[data-v-01f0ce12]{width:%?660?%;height:%?500?%;background:#fff;border-radius:%?16?%}.kefu[data-v-01f0ce12]{width:%?196?%;height:%?196?%;margin-right:%?175?%;margin-top:%?-120?%}.xx[data-v-01f0ce12]{width:%?30?%;height:%?30?%;margin-right:%?30?%}.text2[data-v-01f0ce12]{font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#222;letter-spacing:%?4?%}.box1[data-v-01f0ce12]{width:%?204?%;height:%?164?%;border:%?4?% solid #22ac38;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.box2[data-v-01f0ce12]{width:%?204?%;height:%?164?%;border:%?4?% solid #32abdf;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.text3[data-v-01f0ce12]{font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#222}\n\n/* 此处结束 */\n\n/* 语言切换弹框样式此处开始 */.Eject[data-v-01f0ce12]{height:100vh;width:%?750?%;position:absolute;top:0;z-index:9999;background-color:hsla(0,0%,100%,.3)}.eject_fu[data-v-01f0ce12]{position:absolute;top:%?600?%;left:%?25?%;z-index:99999}.bluekuang[data-v-01f0ce12]{width:%?700?%;height:%?70?%;background-color:#bd4833;border-radius:%?15?% %?15?% 0 0;display:flex;justify-content:flex-end;padding:%?10?% %?30?% 0 0;box-sizing:border-box}.zhukuang[data-v-01f0ce12]{margin-top:%?-10?%;width:%?700?%;height:%?310?%;background:#fff3f2;border-radius:%?15?%;padding-top:%?50?%;box-sizing:border-box}.xuanze[data-v-01f0ce12]{margin-top:%?20?%;width:%?150?%;height:%?70?%;background:linear-gradient(90deg,#7f1401,#ac1a00);border-radius:%?36?%;display:flex;justify-content:center;align-items:center;font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#fff}\n\n/* 此处结束 */body.?%PAGE?%[data-v-01f0ce12]{background:#2f3132}",""]),t.exports=e}}]);