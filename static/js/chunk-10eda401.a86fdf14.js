(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10eda401"],{"07db":function(e,t,a){},8701:function(e,t,a){"use strict";a("07db")},c088:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[e._v(" 选择时间锁 "),a("el-radio-group",{on:{input:e.changeRadio},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:"TimeLock"}},[e._v("时间锁4小时")]),a("el-radio",{attrs:{label:"TimeLock24"}},[e._v("时间锁24小时")])],1)],1)]),e.TimeLockList&&e.TimeLockList.length?a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[e._v(" 选择要执行时间锁的合约 "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.getAbiValue},model:{value:e.abivalue,callback:function(t){e.abivalue=t},expression:"abivalue"}},e._l(e.TimeLockList,(function(e){return a("el-option",{key:e.abiJson+e.abi,attrs:{label:e.label||e.abi,value:e.abiJson}})})),1)],1),e.TimeLockAbiData&&e.TimeLockAbiData.hasSecond?a("div",{staticClass:"mb-20"},[e._v(" 选择要执行时间锁的合约方法 "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.getAbiFunValue},model:{value:e.abiFunvalue,callback:function(t){e.abiFunvalue=t},expression:"abiFunvalue"}},e._l(e.TimeLockAbiData.secondLsit,(function(e){return a("el-option",{key:e.functionKey,attrs:{label:e.label,value:e.functionKey}})})),1)],1):e._e(),e.chooseFunData.paramType&&e.chooseFunData.paramType.length?a("div",{staticClass:"mb-20"},[e.chooseFunData.address?e._e():a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入合约执行地址"},model:{value:e.createAddress,callback:function(t){e.createAddress=t},expression:"createAddress"}})],1),e._l(e.chooseFunData.paramType,(function(t,i){return a("div",{key:t.textShow+i,staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+t.textShow},model:{value:e.abiFunEnterTextList[i],callback:function(t){e.$set(e.abiFunEnterTextList,i,t)},expression:"abiFunEnterTextList[index]"}})],1)})),a("el-button",{attrs:{type:"info"},on:{click:e.getTimeLockData}},[e._v("生成时间锁执行方法的DATA")])],2):e._e()]):e._e(),e.useMulitkey?a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[e._v("时间锁执行数据")]),a("div",{staticClass:"mb-20"},[e._v("时间锁地址："+e._s(e.shortaddress()))]),e._l(e.TimeLockParamTypeList,(function(t,i){return a("div",{key:t.type+i,staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+t.textShow},model:{value:e.timeLockEnterTextList[i],callback:function(t){e.$set(e.timeLockEnterTextList,i,t)},expression:"timeLockEnterTextList[index]"}})],1)})),a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"发布时间锁描述"},model:{value:e.sumbitDec,callback:function(t){e.sumbitDec=t},expression:"sumbitDec"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.sumitImplementTimeLock}},[e._v("发布时间锁多签提案")])],1),a("el-card",{staticClass:"card-contain"},[a("el-button",{attrs:{type:"primary"},on:{click:e.implementTimeLock}},[e._v("执行时间锁")])],1),a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"取消时间锁描述"},model:{value:e.cancelDec,callback:function(t){e.cancelDec=t},expression:"cancelDec"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:e.cancelImplementTimeLock}},[e._v("取消时间锁多签提案")])],1)],2):e._e()],1)},s=[],n=a("c7eb"),c=a("1da1"),r=(a("7db0"),a("d3b7"),a("d81d"),a("b64b"),a("5d3f")),o=a("3de1"),u=a("5e3a"),l=a("92ff"),d={name:"",data:function(){return{info:u["a"],userAddress:this.$store.state.user.userAddress,useMulitkey:"",hasRoule:!1,TimeLockList:null,TimeLockAbiData:null,abivalue:"",abiFunvalue:"",chooseFunData:{},abiFunEnterTextList:[],timeLockEnterTextList:["","","","",""],TimeLockParamTypeList:[{type:"address",textShow:"执行地址"},{type:"uint256",textShow:"发送BNB数量"},{type:"string",textShow:"signature默认不填"},{type:"bytes",textShow:"生成的Data"},{type:"uint256",textShow:"排队结束时间戳"}],cancelDec:"",sumbitDec:"",useTimeLock:r["a"].TimeLock,radio:"",createAddress:""}},watch:{},mounted:function(){},methods:{changeRadio:function(e){this.useTimeLock=r["a"][e],this.getMulitList(e)},shortaddress:function(){return Object(o["k"])(this.useTimeLock)},getMulitList:function(e){var t=this;return Object(c["a"])(Object(n["a"])().mark((function a(){return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["q"])("GovernanceMulti",t.$store.state.user.userAddress);case 2:t.hasRoule=a.sent,t.timeLockEnterTextList=[],t.abiFunvalue="",t.abivalue="",t.abiFunEnterTextList=[],t.chooseFunData={},t.TimeLockAbiData=null,t.useMulitkey="GovernanceMulti",t.TimeLockList=u["a"].LockTimeFun[e],t.useTimeLock=r["a"][t.radio];case 12:case"end":return a.stop()}}),a)})))()},getAbiValue:function(e){this.abiFunvalue="",this.abiFunEnterTextList=[],this.chooseFunData={},this.TimeLockAbiData=this.TimeLockList.find((function(t){return t.abiJson==e})),this.useTimeLock=this.TimeLockAbiData.lockAddress,this.createAddress=this.TimeLockAbiData.address},getAbiFunValue:function(e){this.abiFunEnterTextList=[],this.chooseFunData=this.TimeLockAbiData.secondLsit.find((function(t){return t.functionKey==e})),this.chooseFunData.lockAddress&&(this.useTimeLock=this.chooseFunData.lockAddress),this.createAddress=this.chooseFunData.address||""},getTimeLockData:function(){var e=this;if(this.abiFunEnterTextList.length!=this.chooseFunData.paramType.length)return this.$message("请输入正确的值"),!1;var t=this.abiFunEnterTextList.map((function(t,a){var i=e.chooseFunData.paramType[a].type;return i.indexOf("tuple[]")>-1?JSON.parse(t):i.indexOf("[]")>-1?i.indexOf("address")>-1?(t||"").split("-").map(l["b"]):(t||"").split("-"):i.indexOf("address")>-1?Object(l["b"])(t):t||""})),a=Object(l["r"])(this.chooseFunData.abiJson,this.chooseFunData.functionKey.split("-")[0],this.chooseFunData.useParamTypeAddress?[this.createAddress]:t);a&&(this.timeLockEnterTextList=["","0","","",""],this.chooseFunData.useParamTypeAddress?this.timeLockEnterTextList[0]=this.abiFunEnterTextList[0]:this.timeLockEnterTextList[0]=this.createAddress,this.timeLockEnterTextList[3]=a)},sumitImplementTimeLock:function(){var e=this;return Object(c["a"])(Object(n["a"])().mark((function t(){var a,i,s;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasRoule){t.next=3;break}return e.$message("您不是该多签的议员，无法创建提案"),t.abrupt("return",!1);case 3:return e.changeData(),t.next=6,Object(l["i"])(e.useTimeLock||r["a"].TimeLock,"queueTransaction",Object(l["e"])(["address","uint256","string","bytes","uint256"],e.timeLockEnterTextList),"TimeLock",["address","uint256","string","bytes","uint256"]);case 6:return a=t.sent,i=[e.useTimeLock||r["a"].TimeLock,0,a],t.next=10,Object(l["m"])(e.useMulitkey,i,e.sumbitDec||"");case 10:s=t.sent,s&&e.$message("提交成功");case 12:case"end":return t.stop()}}),t)})))()},implementTimeLock:function(){var e=this;return Object(c["a"])(Object(n["a"])().mark((function t(){var a;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.changeData(),t.next=3,Object(l["c"])(e.timeLockEnterTextList,"executeTransaction",e.useTimeLock||r["a"].TimeLock);case 3:a=t.sent,a&&e.$message("提交成功");case 5:case"end":return t.stop()}}),t)})))()},cancelImplementTimeLock:function(){var e=this;return Object(c["a"])(Object(n["a"])().mark((function t(){var a,i,s;return Object(n["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hasRoule){t.next=3;break}return e.$message("您不是该多签的议员，无法创建提案"),t.abrupt("return",!1);case 3:return e.changeData(),t.next=6,Object(l["i"])(e.useTimeLock||r["a"].TimeLock,"cancelTransaction",Object(l["e"])(["address","uint256","string","bytes","uint256"],e.timeLockEnterTextList),"TimeLock",["address","uint256","string","bytes","uint256"]);case 6:return a=t.sent,i=[e.useTimeLock||r["a"].TimeLock,0,a],t.next=10,Object(l["m"])(e.useMulitkey,i,e.cancelDec||"");case 10:s=t.sent,s&&e.$message("提交成功");case 12:case"end":return t.stop()}}),t)})))()},changeData:function(){this.timeLockEnterTextList[0]=this.timeLockEnterTextList[0]||"",this.timeLockEnterTextList[1]=this.timeLockEnterTextList[1]||"0",this.timeLockEnterTextList[2]=this.timeLockEnterTextList[2]||"",this.timeLockEnterTextList[3]=this.timeLockEnterTextList[3]||"",this.timeLockEnterTextList[4]=this.timeLockEnterTextList[4]||""}}},m=d,b=(a("8701"),a("2877")),h=Object(b["a"])(m,i,s,!1,null,null,null);t["default"]=h.exports}}]);