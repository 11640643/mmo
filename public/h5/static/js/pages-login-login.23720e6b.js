(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0758":function(t,i,e){"use strict";var n=e("ab47"),a=e.n(n);a.a},"0a4a":function(t,i,e){"use strict";e.r(i);var n=e("d1dc"),a=e("9726");for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);e("0758");var o,r=e("f0c5"),c=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"b56bf6c0",null,!1,n["a"],o);i["default"]=c.exports},"4df9":function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var a=n(e("1da1")),s=(e("4aea"),{data:function(){return{show:!1,english:!1,phone:"",password:"",yzm:"",src:"",code_rand:""}},computed:{i18n:function(){return this.$t("message")}},onShow:function(){this.codes()},methods:{codes:function(){for(var t=[],i=0;i<4;i++){var e=Math.random();e*=10,e=Math.ceil(e),t.push(e)}console.log(t.join("")),this.code_rand=t.join("");var n=this;uni.request({url:"http://tr.jrytc.cn/api/users/code",data:{code_rand:t.join("")},responseType:"arraybuffer",success:function(t){console.log(t);var i=new Blob([t.data],{type:"image/png"});n.blobToDataURL(i,(function(t){console.log(t),n.src=t}))}})},blobToDataURL:function(t,i){var e=new FileReader;e.onload=function(t){i(t.target.result)},e.readAsDataURL(t)},chooseeng:function(){console.log("英文"),this.lang="en-US",this.$i18n.locale=this.lang,uni.setStorageSync("locale",this.lang)},chooseesp:function(){console.log("西班牙"),this.lang="es",this.$i18n.locale=this.lang,uni.setStorageSync("locale",this.lang)},sign:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function i(){var e,n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(""!=t.phone&&""!=t.password&&""!=t.yzm){i.next=5;break}return uni.showToast({title:t.$t("message").login.loginTitle,icon:"none"}),i.abrupt("return");case 5:return e={username:t.phone,password:t.password,code_rand:t.code_rand,code:t.yzm},i.next=8,t.$api.login(e);case 8:if(n=i.sent,console.log(n),uni.setStorageSync("token",n.info.token),1!=n.info.state){i.next=18;break}return i.next=14,t.$api.getuserinfo();case 14:a=i.sent,console.log(a),uni.setStorageSync("memberInfo",a.info),uni.switchTab({url:"../index/index"});case 18:case"end":return i.stop()}}),i)})))()},zhuce:function(){uni.navigateTo({url:"../registration/registration"})}}});i.default=s},9726:function(t,i,e){"use strict";e.r(i);var n=e("4df9"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},a16a:function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,"uni-page-body[data-v-b56bf6c0]{background:#ebebeb}.content[data-v-b56bf6c0]{padding:%?120?% %?20?% 0 %?20?%;position:relative;z-index:999}.input1[data-v-b56bf6c0]{height:%?94?%;border-radius:%?10?%;display:flex;align-items:center;border:%?2?% solid #b5b5b5;padding-left:%?20?%;padding-right:%?10?%}.textphone[data-v-b56bf6c0]{font-size:14px;font-family:PingFang SC;font-weight:800;color:#222;margin-left:%?20?%}.input_width[data-v-b56bf6c0]{height:100%;width:95%;margin-left:%?26?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#222}.input_width2[data-v-b56bf6c0]{height:100%;width:95%;margin-left:%?20?%;font-size:%?26?%;font-family:PingFang SC;font-weight:800;color:#222}.mimabox[data-v-b56bf6c0]{font-size:%?28?%;font-family:PingFang SC;font-weight:800;text-decoration:underline;color:#222}.login[data-v-b56bf6c0]{width:%?600?%;height:%?100?%;background:linear-gradient(-90deg,#6b47f8,#8e4aef);border-radius:%?50?%;font-size:%?28?%;font-family:PingFang SC;font-weight:700;color:#fff;display:flex;justify-content:center;align-items:center}.Language[data-v-b56bf6c0]{width:%?254?%;height:%?62?%;border:%?2?% solid #8048f2;border-radius:%?30?%;color:#7647f6;display:flex;justify-content:center;align-items:center;background:#fff}.headimg[data-v-b56bf6c0]{width:%?150?%;height:%?150?%;border-radius:50%;position:absolute;top:%?-100?%}\n\n/* 弹出框样式此处开始 */.popup[data-v-b56bf6c0]{height:100vh;width:%?750?%;position:absolute;top:0;z-index:99999;background-color:rgba(9,9,9,.5);display:flex;justify-content:center;padding-top:%?600?%}.popup_box[data-v-b56bf6c0]{width:%?660?%;height:%?500?%;background:#fff;border-radius:%?16?%}.kefu[data-v-b56bf6c0]{width:%?196?%;height:%?196?%;margin-right:%?175?%;margin-top:%?-120?%}.xx[data-v-b56bf6c0]{width:%?30?%;height:%?30?%;margin-right:%?30?%}.text2[data-v-b56bf6c0]{font-size:%?32?%;font-family:PingFang SC;font-weight:700;color:#222;letter-spacing:%?4?%}.box1[data-v-b56bf6c0]{width:%?204?%;height:%?164?%;border:%?4?% solid #22ac38;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.box2[data-v-b56bf6c0]{width:%?204?%;height:%?164?%;border:%?4?% solid #32abdf;border-radius:%?10?%;display:flex;justify-content:center;align-items:center}.text3[data-v-b56bf6c0]{font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#222}\n\n/* 此处结束 */\n\n/* 语言切换弹框样式此处开始 */.Eject[data-v-b56bf6c0]{height:100vh;width:%?750?%;position:absolute;top:0;z-index:9999;background-color:rgba(9,9,9,.5)}.eject_fu[data-v-b56bf6c0]{position:absolute;top:%?600?%;left:%?100?%;z-index:99999}.bluekuang[data-v-b56bf6c0]{width:%?522?%;height:%?70?%;background-color:#5a4be4;border-radius:%?15?% %?15?% 0 0;display:flex;justify-content:flex-end;padding:%?10?% %?30?% 0 0;box-sizing:border-box}.zhukuang[data-v-b56bf6c0]{margin-top:%?-10?%;width:%?522?%;height:%?310?%;background:#fff;border-radius:%?15?%;padding-top:%?50?%;box-sizing:border-box}.xuanze[data-v-b56bf6c0]{margin-top:%?20?%;width:%?166?%;height:%?70?%;background:linear-gradient(-90deg,#6e4af8,#8e4def);border-radius:%?36?%;display:flex;justify-content:center;align-items:center;font-size:%?32?%;font-family:PingFang SC;font-weight:800;color:#fff}\n\n/* 此处结束 */body.?%PAGE?%[data-v-b56bf6c0]{background:#ebebeb}",""]),t.exports=i},ab47:function(t,i,e){var n=e("a16a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("29756036",n,!0,{sourceMap:!1,shadowMode:!1})},d1dc:function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"center"}},[e("v-uni-image",{staticStyle:{width:"300rpx",height:"262rpx"},attrs:{src:"/static/image/logo.png",mode:""}})],1),e("v-uni-view",{staticStyle:{"margin-top":"100rpx"}},[e("v-uni-view",{staticClass:"input1"},[e("v-uni-image",{staticStyle:{width:"36rpx",height:"48rpx","margin-left":"4rpx"},attrs:{src:"/static/image/iphone.png",mode:"widthFix"}}),e("v-uni-view",{staticClass:"textphone"},[t._v("+852")]),e("v-uni-input",{staticClass:"input_width",attrs:{type:"number",placeholder:this.$t("message").login.loginplaceholder1,"placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #999999;"},model:{value:t.phone,callback:function(i){t.phone=i},expression:"phone"}})],1),e("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"40rpx"}},[e("v-uni-image",{staticStyle:{width:"38rpx",height:"42rpx"},attrs:{src:"/static/image/block.png",mode:""}}),e("v-uni-input",{staticClass:"input_width",attrs:{type:"text",placeholder:this.$t("message").login.loginplaceholder2,password:"true","placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #999999;"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),e("v-uni-view",{staticClass:"input1",staticStyle:{"margin-top":"40rpx"}},[e("v-uni-image",{staticStyle:{width:"44rpx",height:"36rpx"},attrs:{src:"/static/image/yzm.png",mode:"widthFix"}}),e("v-uni-input",{staticClass:"input_width2",attrs:{type:"number",placeholder:this.$t("message").login.loginplaceholder3,"placeholder-style":"font-family: PingFang SC;font-size: 13px;font-weight: 800;color: #999999;"},model:{value:t.yzm,callback:function(i){t.yzm=i},expression:"yzm"}})],1)],1),e("v-uni-view",{staticStyle:{"margin-top":"50rpx",display:"flex","justify-content":"center"}},[e("v-uni-image",{staticStyle:{width:"280rpx",height:"50rpx",background:"#006BFF"},attrs:{src:t.src,mode:"widthFix"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.codes.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"30rpx"}},[e("v-uni-view",{staticClass:"login",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.sign.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.loginBUtton))])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"20rpx"}},[e("v-uni-view",{staticClass:"mimabox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show=!0}}},[t._v(t._s(this.$t("message").login.forgetpassword))]),e("v-uni-view",{staticStyle:{margin:"0 10rpx",color:"#DAB62A"}},[t._v("/")]),e("v-uni-view",{staticClass:"mimabox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.zhuce.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.Registration))])],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"50rpx"}},[e("v-uni-view",{staticClass:"Language",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.english=!0}}},[t._v(t._s(this.$t("message").login.locain))])],1)],1),e("v-uni-view",{staticStyle:{position:"absolute",bottom:"0",left:"0",display:"flex"}},[e("v-uni-image",{staticStyle:{width:"750rpx",height:"3000rpx"},attrs:{src:"/static/image/tu.png",mode:"widthFix"}})],1),1==t.show?e("v-uni-view",{staticClass:"popup"},[e("v-uni-view",{staticClass:"popup_box"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"flex-end","padding-top":"20rpx"}},[e("v-uni-image",{staticClass:"kefu",attrs:{src:"/static/image/kefutou.png"}}),e("v-uni-image",{staticClass:"xx",attrs:{src:"/static/image/closecha.png"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.show=!1}}})],1),e("v-uni-view",{staticStyle:{"margin-top":"30rpx",display:"flex","justify-content":"center"}},[e("v-uni-view",{staticClass:"text2"},[t._v(t._s(this.$t("message").login.service))])],1),e("v-uni-view",{staticStyle:{padding:"0 54rpx",display:"flex","justify-content":"space-between","margin-top":"40rpx"}},[e("v-uni-view",{staticClass:"box1"},[e("v-uni-image",{staticStyle:{width:"142rpx",height:"132rpx"},attrs:{src:"/static/image/whastapp.png"}})],1),e("v-uni-view",{staticClass:"box2"},[e("v-uni-image",{staticStyle:{width:"128rpx",height:"130rpx"},attrs:{src:"/static/image/telegram.png"}})],1)],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"center","margin-top":"40rpx"}},[e("v-uni-view",{staticClass:"text3"},[t._v(t._s(this.$t("message").login.servicetime)+": 09:00-22:00")])],1)],1)],1):t._e(),e("v-uni-view",[1==t.english?e("v-uni-view",{staticClass:"Eject",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.english=!1}}}):t._e(),1==t.english?e("v-uni-view",{staticClass:"eject_fu"},[e("v-uni-view",{staticClass:"bluekuang"}),e("v-uni-view",{staticClass:"zhukuang"},[e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0 50rpx"}},[e("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/english.png",mode:""}}),e("v-uni-image",{staticStyle:{width:"128rpx",height:"152rpx"},attrs:{src:"/static/image/xibanya.png",mode:""}})],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",padding:"0 30rpx"}},[e("v-uni-view",{staticClass:"xuanze",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseeng.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.Choose))]),e("v-uni-view",{staticClass:"xuanze",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.chooseesp.apply(void 0,arguments)}}},[t._v(t._s(this.$t("message").login.Choose))])],1)],1)],1):t._e()],1)],1)},s=[]}}]);