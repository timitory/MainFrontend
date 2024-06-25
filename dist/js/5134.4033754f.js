"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[5134],{5134:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white",staticStyle:{"box-shadow":"0px 20px 33px #00000029"}},[s("router-link",{staticClass:"absolute left-4 top-2",attrs:{to:"/app/dashboard"}},[s("font-awesome-icon",{staticClass:"text-green-600 ",attrs:{icon:"times-circle"}})],1),t._m(0),s("div",{staticClass:"overflow-x-auto xl:overflow-x-hidden tablecont"},[t.dependants.length>0?s("table",{staticClass:"w-full mt-8"},[t._m(1),s("tbody",t._l(t.dependants,(function(a){return s("tr",{key:a.id,staticClass:"border border-solid border-gray-300"},[s("td",{staticClass:"p-3"},[t._v(t._s(a.firstname))]),s("td",[t._v(t._s(a.lastname))]),s("td",[t._v(t._s(a.plan))]),s("td",[t._v(t._s(a.amount))]),s("td",[t._v(t._s(a.status))]),s("td",[t._v(t._s(a.start))]),s("td",[t._v(t._s(a.end))]),s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none",on:{change:[function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.action=a.target.multiple?e:e[0]},function(e){return t.makeAction(a.id)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select")]),s("option",{attrs:{value:"renew"}},[t._v("Renew")]),s("option",{attrs:{value:"stop"}},[t._v("Stop")]),s("option",{attrs:{value:"claim"}},[t._v("Make Claim")])])]),t._m(2,!0)])})),0)]):s("div",{staticClass:"w-full text-center py-4"},[s("img",{staticClass:"block  mx-auto",attrs:{src:e(9190),alt:""}}),s("p",{staticClass:"mt-4 text-center font-bold text-green-500 font-lg"},[t._v("No records")])])]),s("div",{staticClass:"mt-24 flex justify-between"},[s("router-link",{staticClass:"text-green-500 block",attrs:{to:"/app/dashboard"}},[t._v("Back")])],1)],1),s("p",{staticClass:"mt-8 text-sm text-center"},[t._v("It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies")])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"flex items-center"},[s("img",{staticStyle:{height:"140px",width:"170px"},attrs:{src:e(1360),alt:""}}),s("div",{staticClass:"ml-3 w-full lg:flex justify-between items-center"},[s("p",{staticClass:"text-lg font-bold lg:w-1/5"},[t._v("Gadget Cover")]),s("div",{staticClass:" lg:w-3/4"},[s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",{staticClass:"font-bold"},[t._v("Surname")]),e("td",{staticClass:"font-bold"},[t._v("Name")]),e("td",{staticClass:"font-bold"},[t._v("Plan")]),e("td",{staticClass:"font-bold"},[t._v("Amount")]),e("td",{staticClass:"font-bold"},[t._v("Status")]),e("td",{staticClass:"font-bold"},[t._v("Start Date")]),e("td",{staticClass:"font-bold"},[t._v("Expiry Date")]),e("td",{staticClass:"font-bold"},[t._v("Action")]),e("td",{staticClass:"font-bold"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("td",[e("a",{staticClass:"text-green-500",attrs:{href:"#"}},[t._v("View certificate")])])}],l=(e(4114),{data(){return{dependants:[{id:1,firstname:"Obiwan",lastname:"Pelosi",plan:"Basic",status:"active",amount:"50000",start:"05-06-2021",end:"05-07-2021"},{id:2,firstname:"Obiwan",lastname:"Pelosi",plan:"Premium",status:"active",amount:"150000",start:"05-06-2021",end:"05-07-2021"}],action:""}},methods:{makeAction(t){"claim"==this.action&&this.$router.push(`/app/dashboard/deviceclaim/${t}`)}}}),i=l,o=e(1656),r=(0,o.A)(i,s,n,!1,null,"3155bdfe",null),c=r.exports},9190:function(t,a,e){t.exports=e.p+"img/Page-1.75b8f912.svg"},1360:function(t,a,e){t.exports=e.p+"img/Image 11.d86c52c6.png"}}]);
//# sourceMappingURL=5134.4033754f.js.map