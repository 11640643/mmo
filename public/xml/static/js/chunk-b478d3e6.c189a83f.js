(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b478d3e6"],{"2e69":function(t,r,a){"use strict";var e=a("67a5"),n=a.n(e);n.a},"67a5":function(t,r,a){},8553:function(t,r,a){"use strict";a.r(r);var e=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{staticClass:"PageBox"},[a("div",{staticClass:"ScrollBox"},[a("van-cell",{staticClass:"mt15",attrs:{icon:"cluster",title:""+t.$t("dayReport[1]")+t.InitData.currency+t.reportData.myTotalProfit,value:t.$Util.DateFormat("YY-MM-DD",new Date)}}),a("van-grid",{staticClass:"MyEarnings",attrs:{"column-num":2,border:!1,gutter:"1"}},[a("van-grid-item",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" "+t._s(t.$t("dayReport[2]"))+"("+t._s(t.$t("dayReport[6]"))+") ")]},proxy:!0},{key:"text",fn:function(){return[t._v(" "+t._s(t.reportData.myTaskFinish)+" ")]},proxy:!0}])}),a("van-grid-item",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" "+t._s(t.$t("dayReport[3]"))+"("+t._s(t.InitData.currency)+") ")]},proxy:!0},{key:"text",fn:function(){return[t._v(" "+t._s(t.reportData.myTaskProfit)+" ")]},proxy:!0}])}),a("van-grid-item",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" "+t._s(t.$t("dayReport[4]"))+"("+t._s(t.$t("dayReport[6]"))+") ")]},proxy:!0},{key:"text",fn:function(){return[t._v(" "+t._s(t.reportData.branchTaskFinish)+" ")]},proxy:!0}])}),a("van-grid-item",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" "+t._s(t.$t("dayReport[5]"))+"("+t._s(t.InitData.currency)+") ")]},proxy:!0},{key:"text",fn:function(){return[t._v(" "+t._s(t.reportData.branchTaskProfit)+" ")]},proxy:!0}])})],1),a("van-cell",{staticClass:"mt10",attrs:{border:!1,icon:"cluster",title:t.$t("dayReport[0]"),value:t.$t("dayReport[7]")}}),a("table",{attrs:{width:"100%"}},[a("thead",[a("tr",[a("th",[t._v(t._s(t.$t("dayReport[8]")))]),a("th",[t._v(t._s(t.$t("dayReport[9]")))]),a("th",[t._v(t._s(t.$t("dayReport[10]")))]),a("th",[t._v(t._s(t.$t("dayReport[11]")))]),a("th",[t._v(t._s(t.$t("dayReport[12]")))])])]),a("tbody",t._l(t.reportData.daily,(function(r,e){return a("tr",{key:e},[a("td",[t._v(t._s(r.count))]),a("td",[a("em",[t._v(t._s(r.task))])]),a("td",[t._v(t._s(r.branch))]),a("td",[a("em",[t._v(t._s(r.consume))])]),a("td",[t._v(t._s(r.date))])])})),0)])],1)])},n=[],o={name:"DayReport",components:{},props:[],data(){return{reportData:{myTotalProfit:"0.00",myTaskFinish:"0",myTaskProfit:"0.00",branchTaskFinish:"0",branchTaskProfit:"0.00",daily:[]}}},computed:{},watch:{},created(){this.$parent.navBarTitle=this.$t("dayReport[0]"),this.$Model.DailyReport(t=>{1==t.code&&(this.reportData=t.data)})},mounted(){},activated(){},destroyed(){},methods:{}},s=o,i=(a("2e69"),a("2877")),c=Object(i["a"])(s,e,n,!1,null,"ddf8e238",null);r["default"]=c.exports}}]);