(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03ceac2b"],{"9bb4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"card-contain"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"mb-10"},[a("span",{staticClass:"mb-10"},[t._v("合约选择：")]),a("el-select",{attrs:{placeholder:"请选择"},on:{change:function(e){return t.getMulitList({name:e},1)}},model:{value:t.useMulitkey,callback:function(e){t.useMulitkey=e},expression:"useMulitkey"}},t._l(t.info.mulitList,(function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),1)],1),a("el-tabs",{attrs:{type:"card",value:t.useMulitkey},on:{"tab-click":function(e){return t.getMulitList(e,1)}}},t._l(t.info.mulitList,(function(e){return a("el-tab-pane",{key:e.key,attrs:{label:e.label,name:e.key}},[a("div",{staticClass:"mb-20"},[a("el-button",{staticClass:"text item",attrs:{type:"primary"},on:{click:function(e){return t.addNewItem()}}},[t._v(" 创建提案 ")]),a("el-button",{staticClass:"text item",attrs:{type:""},on:{click:function(e){return t.getMulitList({name:t.useMulitkey},t.listPage)}}},[t._v(" 刷新数据 ")])],1),a("div",{staticClass:"mb-20"},[a("el-radio-group",{model:{value:t.radio1,callback:function(e){t.radio1=e},expression:"radio1"}},[a("el-radio",{attrs:{label:"all"}},[t._v("全部")]),a("el-radio",{attrs:{label:"wait"}},[t._v("未执行")]),a("el-radio",{attrs:{label:"success"}},[t._v("已执行")]),a("el-radio",{attrs:{label:"discard"}},[t._v("已废弃")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.showList}},[a("el-table-column",{attrs:{prop:"id",label:"编号id"}}),a("el-table-column",{attrs:{prop:"time",label:"日期"}}),a("el-table-column",{attrs:{prop:"dec",label:"简述"}}),a("el-table-column",{attrs:{prop:"startAddree",label:"目标地址"}}),a("el-table-column",{attrs:{prop:"submitterShort",label:"提案地址"}}),a("el-table-column",{attrs:{prop:"itemstatus",label:"状态",width:500},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.isConfirmed&&"wait"==e.row.itemstatus?a("el-button",{staticClass:"text item",attrs:{type:"primary"},on:{click:function(a){return t.executeTransaction(e.row)}}},[t._v(" 执行提案 ")]):t._e(),e.row.canCancel&&"wait"==e.row.itemstatus?a("el-button",{staticClass:"text item",attrs:{type:"warning"},on:{click:function(a){return t.abandonmentTransaction(e.row)}}},[t._v(" 废弃提案 ")]):t._e(),e.row.canCancel||e.row.isConfirmed||"wait"!=e.row.itemstatus?t._e():a("span",{staticClass:"text item mr-5",staticStyle:{color:"#a6a9ad"}},[t._v(" 超时 ")]),"wait"==e.row.itemstatus?a("el-button",{staticClass:"text item",attrs:{type:"info"},on:{click:function(a){return t.getVoteData(e.row)}}},[t._v(" 投票 ")]):t._e(),"success"==e.row.itemstatus?a("div",{staticClass:"text item",staticStyle:{color:"#67c23a"}},[t._v(" 已执行 ")]):t._e(),"discard"==e.row.itemstatus?a("div",{staticClass:"text item",staticStyle:{color:"#e6a23c"}},[t._v(" 已废弃 ")]):t._e()]}}],null,!0)})],1),a("el-pagination",{attrs:{"page-size":t.listPageSize,"pager-count":7,layout:"prev, pager, next",total:t.listLength},on:{"current-change":t.handleCurrentChange}})],1)})),1)],1),a("VoteDialog",{ref:"dialogRef",attrs:{mulitkey:t.useMulitkey},on:{getNewStatus:function(e){return t.getMulitList({name:t.useMulitkey},t.listPage)}}}),a("AddMulitItem",{ref:"addMulitItem",on:{getNewStatus:function(e){return t.getMulitList({name:t.useMulitkey},t.listPage)}}})],1)},r=[],s=a("c7eb"),i=a("1da1"),c=a("5530"),o=(a("b0c0"),a("b64b"),a("e9c4"),a("4de4"),a("d3b7"),a("25f0"),a("d81d"),a("2f62")),u=a("db49"),l=(a("99af"),a("5d3f")),d=a("3de1"),b=(a("901e"),[{value:"0",label:"转账代币",secondLsit:[],hasSecond:!0},{value:"4",label:"自定义",functionData:{paramType:["address","uint256","bytes32"],paramName:["destination","value","data"],functionKey:"",abi:""}},{value:"16",label:"deposit to WBNB",functionData:{paramType:["value"],paramName:["owner"],functionKey:"deposit",abi:"",data:"0xd0e30db0"}},{value:"replaceOwner",label:"替换议员",functionData:{paramType:["address","address"],paramName:["oldOwner","newOwner"],functionKey:"replaceOwner",abi:"RobustMultiSigWallet"}}]),f={RibbonHash:"0x527d6c7a5158958dfa9ca07d7536a473493922816d4b21fbcccd2c0935aa819a",RibbonIsWhiteHash:"0xaa78df56d54872f9f607ac9f5f9ab30fede21db24fd6cbdd128f9689a8ddd661",mulitList:[{key:"RobustMultiSigWallet",label:"BH主账户",address:l["a"].RobustMultiSigWallet}],coinList:[],BURN_ADDRESS:"0x0000000000000000000000000000000000000001",RobustMultiSigWallet:[].concat(b)},p=[{value:"0",label:"转账代币",secondLsit:[],hasSecond:!0},{value:"4",label:"自定义",functionData:{paramType:["address","uint256","bytes32"],paramName:["destination","value","data"],functionKey:"",abi:""}},{value:"6",label:"添加议员",functionData:{paramType:["address"],paramName:["owner"],functionKey:"addOwner",abi:"MultiSigWallet"}},{value:"7",label:"移除议员",functionData:{paramType:["address"],paramName:["owner"],functionKey:"removeOwner",abi:"MultiSigWallet"}},{value:"8",label:"改变多签可执行票数",functionData:{paramType:["uint256"],paramName:["_required"],functionKey:"changeRequirement",abi:"MultiSigWallet"}}],m={RibbonHash:"0x527d6c7a5158958dfa9ca07d7536a473493922816d4b21fbcccd2c0935aa819a",RibbonIsWhiteHash:"0xaa78df56d54872f9f607ac9f5f9ab30fede21db24fd6cbdd128f9689a8ddd661",mulitList:[{key:"CoreMulti",label:"核心多签",address:l["a"].CoreMulti}],coinList:[],BURN_ADDRESS:"T9yD14Nj9j7xAB4dbGeiX9h8unkKLxmGkn",CoreMulti:[].concat(p)},h={BSC:f,BSCTEST:f,TRON:m,SHASTA:m},v=h[u["b"]],w=a("2909"),g=(a("ac1f"),a("00b4"),a("7db0"),a("cb29"),a("a15b"),a("e07e")),O=a("291a"),y=a("c030"),j=a("6779"),x=a("5c96"),D=a("5a0c"),k=a.n(D),S=a("c843"),L=a("51d3"),C=(a("c0d8"),a("2ef0"));function _(t,e,a){var n=new y["a"].utils.Interface(L["a"][t]),r=n.encodeFunctionData(e,a);return r}function N(t,e){return M.apply(this,arguments)}function M(){return M=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"isOwner",params:[a],type:"call"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),M.apply(this,arguments)}function T(t,e,a){return B.apply(this,arguments)}function B(){return B=Object(i["a"])(Object(s["a"])().mark((function t(e,a,n){var r,i,c,o,u,b;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n,t.next=3,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"transactionCount",params:[],type:"call"});case 3:return i=t.sent,console.log(i,"maxLength"),c=new Array(parseInt(i-(a-1)*r>=r?r:i-(a-1)*r)).fill(1),console.log(c,"arr",c.map((function(t,n){return{abi:"RobustMultiSigWallet",address:l["a"][e],method:"getConfirmationCount",params:[i-(n+(a-1)*r)-1]}}))),t.next=9,Object(O["a"])(c.map((function(t,n){return{abi:"RobustMultiSigWallet",address:l["a"][e],method:"getConfirmationCount",params:[i-(n+(a-1)*r)-1]}})));case 9:return o=t.sent,t.next=12,Object(O["a"])(c.map((function(t,n){return{abi:"RobustMultiSigWallet",address:l["a"][e],method:"transactions",params:[i-(n+(a-1)*r)-1]}})));case 12:return u=t.sent,Array.isArray(o)||(o=[o]),console.log(u,"res",o.toString()),b=u.map((function(t,e){return{typeText:e,dec:"",time:k()(1e3*(t.submitTime||t[6])).format("YYYY-MM-DD HH:mm:ss"),submitterShort:Object(d["k"])(Object(S["b"])(t.owner||t[5])),submitter:Object(S["b"])(t.owner||t[4]),isDiscard:t.canceled||t[5],data:t.data||t[2],itemstatus:t.canceled||t[5]?"discard":t.executed||t[3]?"success":"wait",startAddree:Object(d["k"])(Object(S["b"])(t.destination||t[0])),startAddreeLong:Object(S["b"])(t.destination||t[0]),id:[i-(e+(a-1)*r)-1],isConfirmed:"0xe20056e6"==(t.data||t[2]).substring(0,10)?o[e]>=3||new Date/1e3-(t.submitTime||t[6])>1209600&&o[e]>=2:o[e]>=3||new Date/1e3-(t.submitTime||t[6])>604800&&o[e]>0,bnbValue:Object(d["i"])(t.value||t[1]),canCancel:"0xe20056e6"==(t.data||t[2]).substring(0,10)?o[e]<3&&new Date/1e3-(t.submitTime||t[6])<=1209600:o[e]<3&&new Date/1e3-(t.submitTime||t[6])<=604800,isSpecial:"0xe20056e6"==(t.data||t[2]).substring(0,10)}})),t.abrupt("return",{poolArr:b,length:i});case 17:case"end":return t.stop()}}),t)}))),B.apply(this,arguments)}function A(t,e){return R.apply(this,arguments)}function R(){return R=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"executeTransaction",params:Object(C["isArray"])(a)?a:[a],type:"send"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),R.apply(this,arguments)}function W(t,e){return I.apply(this,arguments)}function I(){return I=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"cancelTransaction",params:Object(C["isArray"])(a)?a:[a],type:"send"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function $(t,e){return V.apply(this,arguments)}function V(){return V=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"getConfirmations",params:[a],type:"call"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}function K(t){return P.apply(this,arguments)}function P(){return P=Object(i["a"])(Object(s["a"])().mark((function t(e){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",3);case 1:case"end":return t.stop()}}),t)}))),P.apply(this,arguments)}function J(t,e){return F.apply(this,arguments)}function F(){return F=Object(i["a"])(Object(s["a"])().mark((function t(e,a){var n,r;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][a],method:"getOwners",params:[],type:"call"});case 2:return n=t.sent,Array.isArray(n)||(n=[n]),t.next=6,Object(O["a"])(n.map((function(t){return{abi:"RobustMultiSigWallet",address:l["a"][a],method:"confirmations",params:[e,t]}})));case 6:return r=t.sent,t.abrupt("return",r.map((function(t,e){return{address:Object(S["b"])(n[e]),isOked:t}})));case 8:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function E(t,e){return H.apply(this,arguments)}function H(){return H=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"confirmTransaction",params:[a],type:"send"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}function G(t,e){return z.apply(this,arguments)}function z(){return z=Object(i["a"])(Object(s["a"])().mark((function t(e,a){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({abi:"RobustMultiSigWallet",address:l["a"][e],method:"revokeConfirmation",params:Object(C["isArray"])(a)?a:[a],type:"send"});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),z.apply(this,arguments)}function U(t,e,a,n,r){return Y.apply(this,arguments)}function Y(){return Y=Object(i["a"])(Object(s["a"])().mark((function t(e,a,n,r,i){var c;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("BSCTEST"!==u["b"]&&"BSC"!==u["b"]){t.next=6;break}return t.next=3,_(r,a,n);case 3:return t.abrupt("return",t.sent);case 6:return t.next=8,window.tronWeb.transactionBuilder.triggerSmartContract(e,"".concat(a,"(").concat(i.join(","),")"),{},n);case 8:return c=t.sent,t.abrupt("return","0x"+c.transaction.raw_data.contract[0].parameter.value.data);case 10:case"end":return t.stop()}}),t)}))),Y.apply(this,arguments)}function q(t,e,a){return X.apply(this,arguments)}function X(){return X=Object(i["a"])(Object(s["a"])().mark((function t(e,a,n){var r,i;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("BSCTEST"!==u["b"]&&"BSC"!==u["b"]){t.next=6;break}return r=new y["a"].utils.Interface(a),i=r.encodeFunctionData(e,n),t.abrupt("return",i);case 6:console.log("未完成");case 7:case"end":return t.stop()}}),t)}))),X.apply(this,arguments)}function Q(t,e){if("BSCTEST"===u["b"]||"BSC"===u["b"]){var a=t.map((function(t,a){var n=e[a];return/\[\d*\]/.test(t)&&t.indexOf("bool")>-1?n=Object(w["a"])(n.split("-").filter((function(t){return t})).map((function(t){return"1"==t}))):/\[\d*\]/.test(t)?(n=Object(w["a"])(n.split("-").filter((function(t){return t}))),t.indexOf("uint24[2]")>-1&&(n=n.map(JSON.parse))):t.indexOf("bool")>-1&&(n="1"==n),n}));return a}var n=t.map((function(t,a){var n=e[a];return/\[\d*\]/.test(t)&&t.indexOf("bool")>-1?n=Object(w["a"])(n.split("-").filter((function(t){return t})).map((function(t){return"1"==t}))):/\[\d*\]/.test(t)?(n=Object(w["a"])(n.split("-").filter((function(t){return t}))),t.indexOf("uint24[2]")>-1&&(n=n.map(JSON.parse))):t.indexOf("bool")>-1&&(n="1"==n),{type:t,value:n}}));return n}function Z(t,e,a){return tt.apply(this,arguments)}function tt(){return tt=Object(i["a"])(Object(s["a"])().mark((function t(e,a,n){var r,i;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("BSCTEST"!==u["b"]&&"BSC"!==u["b"]){t.next=6;break}return t.next=3,_("erc20","transfer",[e,a]);case 3:return t.abrupt("return",t.sent);case 6:return r=[{type:"address",value:e},{type:"uint256",value:a}],console.log(r,"多签入参"),t.next=10,window.tronWeb.transactionBuilder.triggerSmartContract(n,"transfer(address,uint256)",{},r);case 10:return i=t.sent,t.abrupt("return","0x"+i.transaction.raw_data.contract[0].parameter.value.data);case 12:case"end":return t.stop()}}),t)}))),tt.apply(this,arguments)}function et(t,e,a){return at.apply(this,arguments)}function at(){return at=Object(i["a"])(Object(s["a"])().mark((function t(e,a,n){var r,i=arguments;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=i.length>3&&void 0!==i[3]&&i[3],"";try{j["utils"].formatBytes32String(n)}catch(s){x["Message"].warning("多签描述超过bytes32位")}return t.next=5,Object(g["a"])({abi:"RobustMultiSigWallet",address:r?e:l["a"][e],method:"submitTransaction",params:Object(w["a"])(a),type:"send"});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)}))),at.apply(this,arguments)}var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"投票",visible:t.dialogShow,width:"70%"},on:{"update:visible":function(e){t.dialogShow=e}}},[a("el-descriptions",{staticClass:"mt-10",attrs:{title:t.formData.typeText,column:1,border:!0}},[a("template",{slot:"extra"},[(t.formData.isfavo&&t.formData.canGoPro||!t.formData.canGoPro)&&t.hasRoule?a("el-button",{attrs:{className:"contentButton mb-10",type:t.formData.isfavo?"warning":"primary"},on:{click:function(e){return t.voteProposal(t.formData.isfavo)}}},[t._v(" "+t._s(t.formData.isfavo?"撤回投票("+t.formData.agreeNum+"/"+t.formData.voteLength+")":"赞成("+t.formData.agreeNum+"/"+t.formData.voteLength+")")+" ")]):t._e()],1),a("el-descriptions-item",{attrs:{label:"详细DATA"}},[t._v(" "+t._s(t.formData.data)+" ")]),a("el-descriptions-item",{attrs:{label:"目标地址"}},[t._v(" "+t._s(t.formData.addressName)+" ："+t._s(t.formData.startAddreeLong)+" ")]),a("el-descriptions-item",{attrs:{label:"signature"}},[t._v(" "+t._s(t.formData.dataInfo&&t.formData.dataInfo.signature)+" ")]),a("el-descriptions-item",{attrs:{label:"参数"}},[t._v(" "+t._s(JSON.stringify(t.formData.dataInfo&&t.formData.dataInfo.args.map((function(t){return t.toString()}))))+" ")])],2),a("el-descriptions",{staticClass:"mt-10",attrs:{column:2,border:!0}},[a("el-descriptions-item",{attrs:{label:"BNB 数量"}},[t._v(" "+t._s(t.formData.bnbValue)+" ")])],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t.hasRoule?a("el-button",{attrs:{className:"contentButton mb-10"},on:{click:function(e){return t.getVateTouList()}}},[t._v(" 投票列表列表 ")]):t._e(),a("el-button",{attrs:{type:"primary"},on:{click:t.closeDialog}},[t._v("关闭")])],1)],1)},rt=[],st={name:"voteDialog",props:{mulitkey:{type:String,required:!0}},data:function(){return{dialogShow:!1,formData:{},hasRoule:!1,showList:[],mulitName:""}},methods:{showDialog:function(t,e,a){this.dialogShow=!0,this.formData=t,this.hasRoule=e,this.mulitName=a},closeDialog:function(){this.dialogShow=!1},getVateTouList:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,J(t.formData.id,t.mulitName);case 2:a=e.sent,t.$alert("\n        <div>\n          ".concat(a.map((function(t){return"<div class='flex-row fl-jc-between'>\n            <div>".concat(Object(d["k"])(t.address)," </div>\n            <div>").concat(t.isOked?"已投票":"未投票","</div>\n            \n            </div>")})).join(""),"\n        </div>\n      "),"投票列表",{dangerouslyUseHTMLString:!0});case 4:case"end":return e.stop()}}),e)})))()},voteProposal:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasRoule){a.next=3;break}return e.$message("您不是该多签的议员，无法投票"),a.abrupt("return",!1);case 3:if(n=null,!t){a.next=10;break}return a.next=7,G(e.mulitName,e.formData.id);case 7:n=a.sent,a.next=13;break;case 10:return a.next=12,E(e.mulitName,e.formData.id);case 12:n=a.sent;case 13:n&&(e.$message("投票成功"),e.closeDialog(),e.$emit("getNewStatus"));case 14:case"end":return a.stop()}}),a)})))()}}},it=st,ct=a("2877"),ot=Object(ct["a"])(it,nt,rt,!1,null,null,null),ut=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"创建提案",visible:t.dialogShow,width:"70%"},on:{"update:visible":function(e){t.dialogShow=e}}},[a("div",{staticClass:"mb-20"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.getChooseData},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.chooseList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),t.chooseData.hasSecond?a("div",{staticClass:"mb-20"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.getSecondData},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.chooseData.secondLsit,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1):t._e(),"0"==t.chooseData.value&&t.secondData.value?a("div",{staticClass:"mb-20"},[t._v(" 可用额度："+t._s(t.banlceOf)+" ")]):t._e(),t.secondData.showTextObj&&t.secondData.showTextObj.length>0?a("div",{staticClass:"mb-20"},t._l(this.secondData.showTextObj,(function(e){return a("div",{staticClass:"mb-10"},[t._v(" "+t._s(e.showText)+"："+t._s(e.showVlaue)+" ")])})),0):t._e(),"16"==t.chooseData.value?a("div",{staticClass:"mb-20"},[t._v(" 可用额度："+t._s(t.bnbbanlceOf)+" ")]):t._e(),t.secondData.paramType&&t.secondData.paramType.length?a("div",{staticClass:"mb-20"},[t._l(t.secondData.paramName,(function(e,n){return a("div",{key:e+n+t.secondData.value,staticClass:"mb-20",attrs:{value:e}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+e+":"+t.secondData.paramType[n]},model:{value:t.enterList[n],callback:function(e){t.$set(t.enterList,n,e)},expression:"enterList[index]"}})],1)})),t.secondData.showBNBInput?a("div",{staticClass:"mb-20"},[a("el-input",{attrs:{clearable:"",placeholder:"请输入BNB数量"},model:{value:t.enterBNBnum,callback:function(e){t.enterBNBnum=e},expression:"enterBNBnum"}})],1):t._e()],2):t._e(),!t.chooseData.hasSecond&&t.chooseData.functionData?a("div",{staticClass:"mb-20"},t._l(t.chooseData.functionData.paramName,(function(e,n){return a("div",{key:e+n+t.chooseData.value,staticClass:"mb-20",attrs:{value:e}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入"+e+":"+t.chooseData.functionData.paramType[n]},model:{value:t.enterList[n],callback:function(e){t.$set(t.enterList,n,e)},expression:"enterList[index]"}})],1)})),0):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogShow=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.submitTiAn}},[t._v("确 定")])],1)])},dt=[],bt=a("ade3"),ft=(a("14d9"),a("159b"),a("b680"),a("6514")),pt=a("bed7"),mt=(a("0268"),a("2934")),ht={name:"voteDialog",props:{},data:function(){return{dialogShow:!1,value:"",value2:"",chooseList:[],chooseData:{},secondData:{},enterList:[],enterDec:"",coinList:[],paramTypeData:{},banlceOf:0,bnbbanlceOf:0,enterBNBnum:""}},created:function(){this.getCoinList()},watch:{},methods:{getCoinList:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,n,r,i;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(ft["d"])();case 2:a=e.sent,n=a.tokenList,r=Object(w["a"])(n.map((function(t){return{value:t.symbol,label:t.symbol,address:t.symbol===Object(pt["b"])().defaultCurrencyName?"":t.address,decimal:t.decimal,abi:"erc20",functionKey:"transfer",paramType:["address","uint256"],paramName:["_users","enterNum"]}}))),r.find((function(t){return"V42"==t.label}))||r.push((i={address:l["a"].V42,decimal:pt["a"]["V42"],value:"addUsers"},Object(bt["a"])(i,"value","V42"),Object(bt["a"])(i,"label","V42"),Object(bt["a"])(i,"abi","erc20"),Object(bt["a"])(i,"functionKey","transfer"),Object(bt["a"])(i,"paramType",["address","uint256"]),Object(bt["a"])(i,"paramName",["_users","enterNum"]),i)),t.coinList=Object(w["a"])(r);case 4:case"end":return e.stop()}}),e)})))()},showDialog:function(t,e){var a=this;return Object(i["a"])(Object(s["a"])().mark((function n(){return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.dialogShow=!0,a.chooseList=v[e],a.mulitName=e,a.value="",a.value2="",a.chooseData={},a.secondData={},a.hasRoule=t,n.next=10,Object(mt["b"])("",l["a"][e],18);case 10:a.bnbbanlceOf=n.sent;case 11:case"end":return n.stop()}}),n)})))()},closeDialog:function(){this.dialogShow=!1},getChooseData:function(t){this.chooseData=this.chooseList.find((function(e){return e.value==t})),"0"==t&&(this.chooseData.secondLsit=this.coinList),this.value2="",this.clearData(!0)},getSecondData:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var n,r,c,o;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.secondData=e.chooseData.secondLsit.find((function(e){return e.value==t})),"0"!=e.chooseData.value){a.next=6;break}return a.next=4,Object(mt["b"])(e.secondData.address,l["a"][e.mulitName],e.secondData.decimal);case 4:n=a.sent,e.banlceOf=Object(d["a"])(n);case 6:if(!(e.secondData.muticallData&&e.secondData.muticallData.length>0)){a.next=15;break}return a.next=9,Object(O["a"])(e.secondData.muticallData);case 9:return r=a.sent,c=Object(d["h"])(),a.next=13,c.getBlockNumber();case 13:o=a.sent,e.secondData.showTextObj.forEach(function(){var t=Object(i["a"])(Object(s["a"])().mark((function t(e,a){var n;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.dataKey?r[a][e.dataKey]:r[a],e.showVlaue=e.showFun?e.showFun(n,o,r):n;case 2:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}());case 15:e.clearData();case 16:case"end":return a.stop()}}),a)})))()},clearData:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t&&(this.secondData={}),this.enterList=[],this.enterDec="",this.enterBNBnum="",e&&e()},submitTiAn:function(){var t=this;return Object(i["a"])(Object(s["a"])().mark((function e(){var a,n,r,i,c,o,u,b,f,p,m,h;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=[],"0"!=t.chooseData.value){e.next=12;break}if(t.secondData.value==Object(pt["b"])().defaultCurrencyName){e.next=9;break}return e.next=5,Z(t.enterList[0],Object(d["j"])(t.enterList[1],t.secondData.decimal).toFixed(0,1),t.secondData.address);case 5:n=e.sent,a=[t.secondData.address,0,n],e.next=10;break;case 9:a=[t.enterList[0],Object(d["j"])(t.enterList[1],t.secondData.decimal).toFixed(0,1),"0x"];case 10:e.next=42;break;case 12:if("4"!=t.chooseData.value){e.next=16;break}a=[t.enterList[0],Object(d["j"])(t.enterList[1]||"0",pt["a"][Object(pt["b"])().defaultCurrencyName]).toFixed(0,1),t.enterList[2]],e.next=42;break;case 16:if("16"!=t.chooseData.value){e.next=20;break}a=[l["a"].WBNB,Object(d["j"])(t.enterList[0]||"0",pt["a"][Object(pt["b"])().defaultCurrencyName]).toFixed(0,1),t.chooseData.functionData.data],e.next=42;break;case 20:if("17"!=t.chooseData.value&&"117"!=t.chooseData.value){e.next=30;break}return r=JSON.parse(JSON.stringify(t.enterList)),r.shift(),e.next=25,q(t.chooseData.functionData.functionKey,t.chooseData.functionData.abiObj,r);case 25:i=e.sent,a=[t.enterList[0]||"",Object(d["j"])(t.enterBNBnum||0).toFixed(0,1),i],console.log(a,"enterdata"),e.next=42;break;case 30:return c="",o=t.secondData.address,u=[],b="",f="",t.chooseData.functionData?(o=l["a"][t.mulitName],u=t.chooseData.functionData.paramType,b=t.chooseData.functionData.functionKey.split("-")[0],f=t.chooseData.functionData.abi):(o=t.secondData.address,u=t.secondData.paramType,b=t.secondData.functionKey.split("-")[0],f=t.secondData.abi),p=Q(u,t.enterList),m="".concat(b),e.next=40,U(o,m,p,f,u);case 40:c=e.sent,a=[o,Object(d["j"])(t.enterBNBnum||0).toFixed(0,1),c];case 42:return e.next=44,et(t.mulitName,a,t.enterDec);case 44:h=e.sent,h&&t.clearData(!0,(function(){t.chooseData={},t.dialogShow=!1,t.$message("提案成功"),t.$emit("getNewStatus")}));case 46:case"end":return e.stop()}}),e)})))()}}},vt=ht,wt=Object(ct["a"])(vt,lt,dt,!1,null,null,null),gt=wt.exports,Ot={name:"",components:{VoteDialog:ut,AddMulitItem:gt},data:function(){return{info:v,showList:[],radio1:"wait",getInfo:{},useMulitkey:"",hasRoule:!1,listLength:0,listPage:1,listPageSize:10}},computed:Object(c["a"])({},Object(o["b"])(["userAddress"])),watch:{radio1:function(t,e){t!=e&&this.getShowList(this.allShowList,"wait"==t)},userAddress:{handler:function(){this.getMulitList({name:this.useMulitkey},this.listPage)}}},methods:{isSameAddress:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.toLocaleLowerCase()==(this.userAddress||"").toLocaleLowerCase()},handleCurrentChange:function(t){this.listPage=t,this.getMulitList({name:this.useMulitkey},t)},getMulitList:function(t){var e=arguments,a=this;return Object(i["a"])(Object(s["a"])().mark((function n(){var r,i;return Object(s["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>1&&void 0!==e[1]?e[1]:a.listPage,a.$loading(),a.showList=[],n.next=5,T(t.name,r,a.listPageSize);case 5:return i=n.sent,n.next=8,N(t.name,a.userAddress);case 8:a.hasRoule=n.sent,a.useMulitkey=t.name,a.listLength=parseInt(i.length),a.allShowList=JSON.parse(JSON.stringify(i.poolArr)),a.getShowList(a.allShowList,"wait"==a.radio1),a.$loading().close();case 14:case"end":return n.stop()}}),n)})))()},getShowList:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.filter((function(t,a){return t.itemstatus==e.radio1||"all"==e.radio1}));this.showList=a?JSON.parse(JSON.stringify(n.reverse())):JSON.parse(JSON.stringify(n))},implementFunAfter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"执行成功",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"执行失败",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;t?(this.$message(e),this.getMulitList({name:this.useMulitkey},this.listPage),n&&n()):this.$message(a)},executeTransaction:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,A(e.useMulitkey,t.id);case 2:n=a.sent,e.implementFunAfter(n);case 4:case"end":return a.stop()}}),a)})))()},abandonmentTransaction:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var n;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.hasRoule){a.next=3;break}return e.$message("您不是该多签的议员，无法废弃"),a.abrupt("return",!1);case 3:if(!t.isSpecial||(e.isSameAddress(t.submitter)||t.data.indexOf((e.userAddress||"").substring(2).toLocaleLowerCase())>-1)){a.next=6;break}return e.$message("您不是这个替换提案的发起者，或者被替换人"),a.abrupt("return",!1);case 6:return a.next=8,W(e.useMulitkey,t.id);case 8:n=a.sent,e.implementFunAfter(n,"废弃成功","废弃失败");case 10:case"end":return a.stop()}}),a)})))()},getVoteData:function(t){var e=this;return Object(i["a"])(Object(s["a"])().mark((function a(){var n,r,i,c,o,u;return Object(s["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.id.toString(),a.next=3,$(e.useMulitkey,n);case 3:return r=a.sent,a.next=6,K(e.useMulitkey);case 6:i=a.sent,Array.isArray(r)||(r=[r]),r=r.map((function(t){return Object(S["b"])(t).toLocaleLowerCase()}));try{o=Object(C["findKey"])(JSON.parse(JSON.stringify(l["a"])),(function(e){return console.log(e),e.toString().toLocaleLowerCase()==t.startAddreeLong.toLocaleLowerCase()})),u=new y["a"].utils.Interface(L["a"][o]),c=u.parseTransaction({data:t.data})}catch(s){console.log(s),c={signature:"查询失败:更新ABI",args:["查询失败:更新ABI"]}}e.$refs.dialogRef.showDialog({typeText:"提案编号：".concat(n),data:t.data,id:n,voteLength:i.toString(),agreeNum:r.length,canGoPro:r.length>=i,startAddreeLong:t.startAddreeLong,dataInfo:c,addressName:o||"暂无",isfavo:r.indexOf(e.userAddress.toLocaleLowerCase())>-1,bnbValue:Object(d["a"])(t.bnbValue)},e.hasRoule,e.useMulitkey);case 11:case"end":return a.stop()}}),a)})))()},addNewItem:function(){if(!this.hasRoule)return this.$message("您不是该多签的议员，无法投票"),!1;this.$refs.addMulitItem.showDialog(this.hasRoule,this.useMulitkey)}}},yt=Ot,jt=Object(ct["a"])(yt,n,r,!1,null,null,null);e["default"]=jt.exports},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("e330"),s=a("44ad"),i=a("fc6a"),c=a("a640"),o=r([].join),u=s!=Object,l=u||!c("join",",");n({target:"Array",proto:!0,forced:l},{join:function(t){return o(i(this),void 0===t?",":t)}})}}]);