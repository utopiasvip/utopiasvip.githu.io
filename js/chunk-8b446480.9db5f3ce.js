(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b446480"],{c2ce:function(t,e,n){"use strict";n("d613")},cc6d:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-overlay",{staticClass:"bind-inviter",attrs:{show:t.visbily}},[n("div",[n("div",{staticClass:"title"},[n("span",{domProps:{textContent:t._s(t.$t("app.text1"))}}),n("van-icon",{attrs:{name:"cross"},nativeOn:{click:function(e){t.visbily=!1}}})],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inviterCode,expression:"inviterCode"}],attrs:{type:"text",placeholder:t.$t("app.text2"),maxlength:"6"},domProps:{value:t.inviterCode},on:{input:function(e){e.target.composing||(t.inviterCode=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.selfCode,expression:"selfCode"}],attrs:{type:"text",placeholder:t.$t("app.text3"),maxlength:"6"},domProps:{value:t.selfCode},on:{input:function(e){e.target.composing||(t.selfCode=e.target.value)}}}),n("van-button",{on:{click:t.bind}},[t._v(t._s(t.$t("app.text4")))])],1)])},o=[],s=n("5530"),r=(n("d3b7"),n("3ca3"),n("ddb0"),n("3835")),i=(n("96cf"),n("1da1")),l={data:function(){return{visbily:!1,inviterCode:null,selfCode:null}},methods:{show:function(){this.visbily=!0},bind:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,o,s,i,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(6===t.inviterCode.length&&6===t.selfCode.length){e.next=2;break}return e.abrupt("return",vant.Toast.fail(t.$t("app.text5")));case 2:return vant.Toast.loading({message:t.$t("app.text6"),loadingType:"spinner",forbidClick:!0,duration:0}),n=t.$utils.web3.utils.stringToHex(t.inviterCode.toUpperCase()),a=t.$utils.web3.utils.stringToHex(t.selfCode.toUpperCase()),e.next=7,Promise.all([t.$contracts.Relations.methods.ShortCodeToAddress(n).call(),t.$contracts.Relations.methods.ShortCodeToAddress(a).call()]);case 7:if(o=e.sent,s=Object(r["a"])(o,2),i=s[0],l=s[1],parseInt(i,16)){e.next=16;break}return vant.Toast.clear(),e.abrupt("return",vant.Toast.fail(t.$t("app.text7")));case 16:if(!parseInt(l,16)){e.next=19;break}return vant.Toast.clear(),e.abrupt("return",vant.Toast.fail(t.$t("app.text8")));case 19:t.$contracts.Relations.methods.BindRelationEx(i,a).send({from:t.$address}).on("receipt",(function(e){t.visbily=!1,t.$emit("reload"),vant.Toast.clear(),vant.Toast.success(t.$t("app.text9"))})).on("error",(function(e){console.log(e),vant.Toast.clear(),vant.Toast.fail(t.$t("app.text10"))}));case 20:case"end":return e.stop()}}),e)})))()}}},c=Object(s["a"])({},l),d=c,p=(n("c2ce"),n("2877")),u=Object(p["a"])(d,a,o,!1,null,"36b93f29",null);e["default"]=u.exports},d613:function(t,e,n){}}]);