(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ec52b88"],{1513:function(t,e,a){"use strict";a("6591")},6591:function(t,e,a){},"86aa":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticStyle:{"margin-bottom":"20px"}},[t._v(" 选择要添加池子 "),a("el-radio-group",{on:{input:t.changeRadio},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio",{attrs:{label:"MasterChef"}},[t._v("MasterChef")]),a("el-radio",{attrs:{label:"SousChef"}},[t._v("SousChef")]),a("el-radio",{attrs:{label:"NftChef"}},[t._v("NftChef")]),a("el-radio",{attrs:{label:"StableFarm"}},[t._v("StableFarm")])],1)],1)]),t.radio?a("el-card",{staticClass:"card-contain"},[t._l(t.chooseFunData.paramTypeList,(function(e,s){return a("div",{key:e.textshowp+s,staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+e.textshowp},model:{value:t.abiFunEnterTextList[s],callback:function(e){t.$set(t.abiFunEnterTextList,s,e)},expression:"abiFunEnterTextList[index]"}})],1)})),a("el-button",{attrs:{type:"info"},on:{click:t.getTimeLockData}},[t._v("生成时间锁执行方法的DATA")])],2):t._e(),t.radio?a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[t._v("时间锁执行数据")]),a("div",{staticClass:"mb-20"},[t._v("时间锁地址："+t._s(t.shortaddress()))]),t._l(t.TimeLockParamTypeList,(function(e,s){return a("div",{key:e.type+s,staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+e.textShow},model:{value:t.timeLockEnterTextList[s],callback:function(e){t.$set(t.timeLockEnterTextList,s,e)},expression:"timeLockEnterTextList[index]"}})],1)})),a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"发布时间锁描述"},model:{value:t.sumbitDec,callback:function(e){t.sumbitDec=e},expression:"sumbitDec"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:t.sumitImplementTimeLock}},[t._v("发布时间锁多签提案")])],1),a("el-card",{staticClass:"card-contain"},[a("el-button",{attrs:{type:"primary"},on:{click:t.implementTimeLock}},[t._v("执行时间锁")])],1),a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"取消时间锁描述"},model:{value:t.cancelDec,callback:function(e){t.cancelDec=e},expression:"cancelDec"}})],1),a("el-button",{attrs:{type:"primary"},on:{click:t.cancelImplementTimeLock}},[t._v("取消时间锁多签提案")])],1)],2):t._e()],1)},i=[],n=a("2909"),r=a("c7eb"),c=a("1da1"),o=(a("99af"),a("5d3f")),u=a("3de1"),l=a("5e3a"),h=a("92ff"),p={name:"",data:function(){return{info:l["a"],userAddress:this.$store.state.user.userAddress,useMulitkey:"GovernanceMulti",hasRoule:!1,TimeLockList:null,TimeLockAbiData:null,abivalue:"",abiFunvalue:"",chooseFunData:{},abiFunEnterTextList:[],timeLockEnterTextList:["","","","",""],TimeLockParamTypeList:[{type:"address",textShow:"执行地址"},{type:"uint256",textShow:"发送BNB数量"},{type:"string",textShow:"描述"},{type:"bytes",textShow:"生成的Data"},{type:"uint256",textShow:"排队结束时间戳"}],InputListData:{MasterChef:{abi:"MasterChef",abiJson:"MasterChef",lockAddress:o["a"].TimeLock,address:o["a"].MasterChef,functionKey:"addPools",paramTypeList:[{paramT:"address",textshowp:"抵押token地址token"},{paramT:"uint256",textshowp:"分配点allocPoint"},{paramT:"uint256",textshowp:"区块号lastRewardBlocklastRewardBlock"},{paramT:"uint256",textshowp:"accT42PerShare"},{paramT:"address",textshowp:"VIP池门票ticket"},{paramT:"uint256",textshowp:"池子种类pooltype"}]},SousChef:{abi:"SousChef",abiJson:"SousChef",lockAddress:o["a"].TimeLock,address:o["a"].SousChef,functionKey:"poolAdd",paramTypeList:[{paramT:"address",textshowp:"抵押token地址token"},{paramT:"uint256",textshowp:"池子类型poolType"},{paramT:"uint256",textshowp:"最低充值minDeposit"},{paramT:"uint256",textshowp:"开始时间区块号startBlock"},{paramT:"uint256",textshowp:"可直接提现比例claimDirectPercent"},{paramT:"uint256",textshowp:"分配点数allocPoint"},{paramT:"uint256",textshowp:"到期赎回时间redemptionDelay"},{paramT:"uint256",textshowp:"赎回周期,0表示活期redemptionPeriod"}]},NftChef:{abi:"NftChef",abiJson:"NftChef",lockAddress:o["a"].TimeLock,address:o["a"].NftChef,functionKey:"poolAdd",paramTypeList:[{paramT:"address",textshowp:"抵押NFT地址"},{paramT:"uint256",textshowp:"分配点allocPoint"},{paramT:"address",textshowp:"junior"},{paramT:"uint48",textshowp:"startBlock"},{paramT:"uint48",textshowp:"lastRewardBlock"},{paramT:"uint256",textshowp:"accV42PerShare"},{paramT:"uint256",textshowp:"deposit"}]},StableFarm:{abi:"StableFarm",abiJson:"StableFarm",lockAddress:o["a"].TimeLock,address:o["a"].StableFarm,functionKey:"addPool",paramTypeList:[{paramT:"address",textshowp:"token"},{paramT:"uint32",textshowp:"period_"},{paramT:"uint24",textshowp:"pctStatic_"},{paramT:"uint8",textshowp:"pctWithdrawFee_"},{paramT:"uint8",textshowp:"pctAdvance_"}]}},cancelDec:"",sumbitDec:"",useTimeLock:o["a"].TimeLock,radio:""}},watch:{},mounted:function(){},methods:{changeRadio:function(t){var e=this;return Object(c["a"])(Object(r["a"])().mark((function a(){return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(h["q"])(e.useMulitkey,e.$store.state.user.userAddress);case 2:e.hasRoule=a.sent,e.chooseFunData=e.InputListData[t],e.radio=t,e.abiFunEnterTextList=[];case 6:case"end":return a.stop()}}),a)})))()},shortaddress:function(){return Object(u["k"])(this.useTimeLock)},getTimeLockData:function(){if(this.abiFunEnterTextList.length!=this.chooseFunData.paramTypeList.length)return this.$message("请输入正确的值"),!1;this.changeData(this.chooseFunData.paramTypeList.length,"abiFunEnterTextList");var t="";"MasterChef"==this.chooseFunData.abi?t=Object(h["r"])(this.chooseFunData.abiJson,this.chooseFunData.functionKey.split("-")[0],[[this.abiFunEnterTextList]]):"SousChef"==this.chooseFunData.abi?t=Object(h["r"])(this.chooseFunData.abiJson,this.chooseFunData.functionKey.split("-")[0],[[[].concat(Object(n["a"])(this.abiFunEnterTextList),[[0,0,this.abiFunEnterTextList[3],0,0]])]]):"NftChef"==this.chooseFunData.abi?t=Object(h["r"])(this.chooseFunData.abiJson,this.chooseFunData.functionKey.split("-")[0],[[this.abiFunEnterTextList]]):"StableFarm"==this.chooseFunData.abi&&(t=Object(h["r"])(this.chooseFunData.abiJson,this.chooseFunData.functionKey.split("-")[0],this.abiFunEnterTextList)),t&&(this.timeLockEnterTextList=["","0","","",""],this.timeLockEnterTextList[0]=this.chooseFunData.address,this.timeLockEnterTextList[3]=t)},sumitImplementTimeLock:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a,s,i;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasRoule){e.next=3;break}return t.$message("您不是该多签的议员，无法创建提案"),e.abrupt("return",!1);case 3:return t.changeData(),e.next=6,Object(h["i"])(t.useTimeLock||o["a"].TimeLock,"queueTransaction",Object(h["e"])(["address","uint256","string","bytes","uint256"],t.timeLockEnterTextList),"TimeLock",["address","uint256","string","bytes","uint256"]);case 6:return a=e.sent,s=[t.useTimeLock||o["a"].TimeLock,0,a],e.next=10,Object(h["m"])(t.useMulitkey,s,t.sumbitDec||"");case 10:i=e.sent,i&&t.$message("提交成功");case 12:case"end":return e.stop()}}),e)})))()},implementTimeLock:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.changeData(),e.next=3,Object(h["c"])(t.timeLockEnterTextList,"executeTransaction",t.useTimeLock||o["a"].TimeLock);case 3:a=e.sent,a&&t.$message("提交成功");case 5:case"end":return e.stop()}}),e)})))()},cancelImplementTimeLock:function(){var t=this;return Object(c["a"])(Object(r["a"])().mark((function e(){var a,s,i;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.hasRoule){e.next=3;break}return t.$message("您不是该多签的议员，无法创建提案"),e.abrupt("return",!1);case 3:return t.changeData(),e.next=6,Object(h["i"])(t.useTimeLock||o["a"].TimeLock,"cancelTransaction",Object(h["e"])(["address","uint256","string","bytes","uint256"],t.timeLockEnterTextList),"TimeLock",["address","uint256","string","bytes","uint256"]);case 6:return a=e.sent,s=[t.useTimeLock||o["a"].TimeLock,0,a],e.next=10,Object(h["m"])(t.useMulitkey,s,t.cancelDec||"");case 10:i=e.sent,i&&t.$message("提交成功");case 12:case"end":return e.stop()}}),e)})))()},changeData:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"timeLockEnterTextList",a=0;a<t;a++)this[e][a]=this[e][a]||""}}},m=p,d=(a("1513"),a("2877")),b=Object(d["a"])(m,s,i,!1,null,null,null);e["default"]=b.exports}}]);