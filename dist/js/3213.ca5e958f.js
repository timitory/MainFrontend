"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[3213],{671:function(t,e,s){s.d(e,{A:function(){return r}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lg:flex mt-6 lg:mt-4 justify-between plans"},[s("div",{staticClass:"relative border border-solid pb-4 plan"},[s("div",{staticClass:"py-3 px-6 mt-4"},[t._m(0),s("hr",{staticClass:"mt-4"}),s("ul",{staticClass:"mt-4"},[s("li",{staticClass:"flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1)])])]),s("div",{staticClass:"relative border border-solid pb-4 plan"},[s("div",{staticClass:"py-3 px-6 mt-4"},[t._m(1),s("hr",{staticClass:"mt-4"}),s("ul",{staticClass:"mt-4"},[s("li",{staticClass:"flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1),s("li",{staticClass:"mt-4 flex items-center"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"skeleton skeleton-text"})],1)])])])])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between items-center"},[s("p",{staticClass:"mr-3 skeleton skeleton-text"}),s("p",{staticClass:" ml-3 text-green-500 font-light skeleton skeleton-text"},[s("span",{staticClass:"font-extrabold text-lg"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between items-center"},[s("p",{staticClass:"mr-3 skeleton skeleton-text"}),s("p",{staticClass:"lg:mt-0 ml-3 text-green-500 font-light skeleton skeleton-text"},[s("span",{staticClass:"font-extrabold text-lg"})])])}],n={},i=n,o=s(1656),c=(0,o.A)(i,a,l,!1,null,"820cfcc2",null),r=c.exports},3213:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-8"},[s("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[t._m(0),0==t.plans.length?s("skeleton"):s("form",{on:{submit:function(e){return e.preventDefault(),t.validate.apply(null,arguments)}}},[s("div",{staticClass:"relative"},[t.plans.length>2?s("button",{staticClass:"focus:outline-none absolute svg svgleft flex items-center justify-center rounded-full bg-white shadow-lg border",staticStyle:{width:"50px",height:"50px"},attrs:{type:"button"},on:{click:t.scrollLeft}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M8.28809 12L14.2981 18.01L15.7121 16.596L11.1121 11.996L15.7121 7.39601L14.2981 5.99001L8.28809 12Z",fill:"#2E3A59"}})])]):t._e(),t.plans.length>2?s("button",{staticClass:"focus:outline-none absolute svg flex svgright items-center justify-center rounded-full bg-white shadow-lg border",staticStyle:{width:"50px",height:"50px"},attrs:{type:"button"},on:{click:t.scrollRight}},[s("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z",fill:"#2E3A59"}})])]):t._e(),s("div",{ref:"plans",staticClass:"lg:flex mt-6 lg:mt-4 justify-between plans"},t._l(t.plans,(function(e,a){return s("div",{key:a,staticClass:"plan cursor-pointer relative lg:w-full border border-solid mt-4 pb-4",class:[t.planId==e.id?"border-green-500":"border-gray-300"],on:{click:function(s){return t.addListeners(a,e)}}},[s("div",{staticClass:"py-3 px-6 "},[s("div",{staticClass:"flex justify-between items-center"},[s("p",{staticClass:"text-base"},[t._v(t._s(e.name))]),s("p",{staticClass:"lg:mt-0 text-green-500 font-light"},[s("span",{staticClass:"font-extrabold text-lg"},[t._v(t._s(e.cost))]),t._v("/per month")])]),s("hr",{staticClass:"mt-4"}),s("ul",{staticClass:"mt-4"},[t._l(e.benefits,(function(e,a){return s("li",{key:a,staticClass:"flex items-center mb-4"},[s("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),s("p",{staticClass:"text-sm"},[t._v(" "+t._s(e.name)+" ")])],1)})),s("li",{staticClass:"lastitem flex items-center mt-4"},[s("a",{staticClass:"block relative mt-4 mb-2 download",attrs:{href:"/bronchure/HomeContent.png",download:"home-content.png",target:"_blank",rel:"noopener noreferrer"}},[s("svg",{staticClass:"absolute left-0",attrs:{width:"24",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M19 22H5V20H19V22ZM12 18L6 12L7.41 10.59L11 14.17V2H13V14.17L16.59 10.59L18 12L12 18Z",fill:"#2E3A59"}})]),s("p",{staticClass:"plantext text-xs shadow-md"},[t._v("Download brochure")])]),s("label",{staticClass:"container col1",class:[t.planId==e.id?"text-green-500":"text-gray-300"]},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.planId,expression:"planId"}],attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.planId,e.id)},on:{change:function(s){t.planId=e.id}}}),s("span",{staticClass:"checkmark"})])])],2)])])})),0)]),s("div",{staticClass:"hidden lg:flex justify-between mt-10"},[s("router-link",{staticClass:"bg-gray-500 py-2 rounded text-white block px-6 text-center",attrs:{to:"/app/dashboard/buyhome/1"}},[t._v(" Back ")]),s("button",{staticClass:"block text-center bg-green-500 rounded py-2 px-6 text-white outline-none focus:outline-none",class:[t.selected?"":"opacity-30"],attrs:{disabled:!t.selected}},[t._v(" Proceed "),s("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1)],1),s("div",{staticClass:"block lg:hidden mt-10"},[s("button",{staticClass:"block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden outline-none focus:outline-none",class:[t.selected?"":"opacity-30"],attrs:{disabled:!t.selected}},[t._v(" Proceed "),s("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1),s("router-link",{staticClass:"bg-gray-500 py-3 rounded text-white block w-full mt-4 text-center",attrs:{to:"/app/dashboard/buyhome/1"}},[t._v(" Back ")])],1)])],1)])},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"lg:flex justify-between"},[s("p",{staticClass:"font-bold"},[t._v("Available Plans & Prices")]),s("p",{staticClass:"text-gray-500 lg:text-right mt-4 lg:mt-0"},[t._v("Select your preferred plan")])])}],n=(s(4114),s(5353)),i=s(2505),o=s.n(i),c=s(850),r=s(671),d={components:{Skeleton:r.A},data(){return{selected:!1,planId:""}},watch:{planId(){""!==this.planId?this.selected=!0:this.selected=!1}},computed:{...(0,n.aH)({dependants:t=>t.dependants,plans:t=>t.home.resources.plans})},methods:{scrollRight(){this.$refs.plans.scrollLeft+=200},scrollLeft(){this.$refs.plans.scrollLeft-=200},validate(){this.$store.commit("setHomePlanId",this.planId),this.$router.push("/app/dashboard/buyhome/3")},addListeners(t,e){let s=document.getElementsByClassName("plan");s[t].querySelector(".lastitem > .container input").checked=!0,this.planId=e.id},getPlans(){this.$store.commit("startLoading"),o().get(`${c.A}/homecontent/resources`).then((t=>{this.$store.commit("setHomeResources",t.data.data),this.$store.commit("endLoading")})).catch((t=>{this.$store.dispatch("handleError",t)}))}},mounted(){0==Object.keys(this.plans).length&&this.getPlans()}},m=d,p=s(1656),h=(0,p.A)(m,a,l,!1,null,"60d78e66",null),u=h.exports}}]);
//# sourceMappingURL=3213.ca5e958f.js.map