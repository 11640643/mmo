(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70a9c886"],{"4b39":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Main"},[a("van-nav-bar",{attrs:{fixed:"",border:!1,title:"APP下载","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),a("div",{staticClass:"PageBox",staticStyle:{"text-align":"center"}},[a("div",{staticStyle:{display:"inline-block",margin:"50px 0 10px"},attrs:{id:"QRCode"}}),a("p",[t._v("扫描二维码下载APP")]),t.isPlus?a("div",{staticStyle:{padding:"20px 16px"}},[a("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"primary"},on:{click:t.saveQRCode}},[t._v("保存二维码")])],1):t._e()])],1)},s=[],o=a("97d7"),n=o["a"],c=a("cba8"),r=Object(c["a"])(n,i,s,!1,null,"1d64265b",null);e["default"]=r.exports},"97d7":function(t,e,a){"use strict";(function(t){var i=a("1f57"),s=a.n(i);e["a"]={name:"AppDown",components:{},props:{},data(){return{saveN:0,isPlus:window.plus}},computed:{},watch:{},created(){},mounted(){new s.a(document.getElementById("QRCode"),{text:AppDown,width:200,height:200,correctLevel:s.a.CorrectLevel.H})},activated(){},destroyed(){},methods:{saveQRCode(){this.saveN+=1;var e=t("#QRCode").find("img").attr("src").replace("data:image/png;base64,",""),a=new plus.nativeObj.Bitmap;a.loadBase64Data(e,()=>{a.save("_doc/下载APP"+this.saveN+".jpg",{overwrite:!0,format:"jpg"},t=>{plus.gallery.save(t.target,t=>{this.$Dialog.Toast("保存二维码成功")},t=>{this.$Dialog.Toast("保存二维码失败")})},t=>{this.$Dialog.Toast("保存二维码失败")}),setTimeout((function(){a.recycle()}),1e3)},t=>{this.$Dialog.Toast("保存二维码失败")})}}}}).call(this,a("c65b"))}}]);