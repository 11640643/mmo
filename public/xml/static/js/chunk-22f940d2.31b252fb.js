(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f940d2"],{3129:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"record"},[i("nav-bar",{attrs:{title:t.$t("investRecord.title")}}),i("div",{staticStyle:{height:"1.1rem"}}),i("div",{staticClass:"center_wrap"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isRefresh,callback:function(s){t.isRefresh=s},expression:"isRefresh"}},[i("van-list",{class:{Empty:!t.list.length},attrs:{finished:t.isFinished,"finished-text":t.list.length?t.$t("vanPull[0]"):t.$t("vanPull[1]")},on:{load:t.onLoad},model:{value:t.isLoad,callback:function(s){t.isLoad=s},expression:"isLoad"}},t._l(t.list,(function(s,e){return i("div",{key:e,staticClass:"itemlist"},[i("div",{staticClass:"item_left"},[i("div",{staticClass:"text1"},[t._v(t._s(t.$t("investRecord.default[0]"))+"："+t._s(t.InitData.currency)+t._s(s.money))]),i("div",{staticClass:"text2"},[t._v(t._s(t.$t("investRecord.default[1]"))+"："+t._s(s.status))]),i("div",{staticClass:"text3"},[t._v(t._s(t.$t("investRecord.default[2]"))+"："),i("span",{staticClass:"red"},[t._v("$"+t._s(s.lilv*s.money))])])]),i("div",{staticClass:"item_right"},[i("div",{staticClass:"day"},[t._v(t._s(s.daynum)+t._s(t.$t("investRecord.default[5]")))]),i("div",{staticClass:"start_time"},[t._v(t._s(t.$t("investRecord.default[3]"))+"："+t._s(s.start_time))]),i("div",{staticClass:"end_time"},[t._v(t._s(t.$t("investRecord.default[4]"))+"："+t._s(s.end_time))])])])})),0)],1)],1)],1)},a=[],n={name:"record",data(){return{isLoad:!1,isFinished:!1,isRefresh:!1,pageNo:1,page_size:10,list:[]}},created(){this.getListData("init")},mounted(){},methods:{onLoad(){this.getListData("load")},getListData(t){this.isLoad=!0,this.isRefresh=!1,"load"==t?this.pageNo+=1:(this.pageNo=1,this.isFinished=!1),this.$Model.getUserYuebaoList({page_no:this.pageNo,page_size:this.page_size,state:0},s=>{this.$nextTick(()=>{this.isLoad=!1}),1==s.code?("load"==t?1==this.pageNo?this.list=s.info:this.list=this.list.concat(s.info):this.list=s.info,this.pageNo==s.data_total_page<=0||s.data_total_page?this.isFinished=!0:this.isFinished=!1):(this.list=[],this.isFinished=!0)})},onRefresh(){this.getListData("init")}}},d=n,l=(i("518e"),i("2877")),o=Object(l["a"])(d,e,a,!1,null,"402cdf2f",null);s["default"]=o.exports},"518e":function(t,s,i){"use strict";var e=i("b08a"),a=i.n(e);a.a},b08a:function(t,s,i){}}]);