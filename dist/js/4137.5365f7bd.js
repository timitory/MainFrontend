"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[4137],{4137:function(t,e,a){a.r(e),a.d(e,{default:function(){return O}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mt-8 px-6 pt-6 pb-20 relative shadow-lg lg:px-12 bg-white",staticStyle:{"box-shadow":"0px 20px 33px #00000029"}},[a("router-link",{staticClass:"absolute left-4 top-2",attrs:{to:"/app/dashboard/managetravel"}},[a("font-awesome-icon",{staticClass:"text-green-600 ",attrs:{icon:"times-circle"}})],1),t._m(0),2==t.enrollee.underwriter.id?a("p",{staticClass:"mt-6 text-lg lg:px-12 font-bold"},[t._v("Required Information: AIICO Insurance ")]):1==t.enrollee.underwriter.id?a("p",{staticClass:"mt-6 text-lg lg:px-12 font-bold"},[t._v("Required Information: Consollidated Hallmark Insurance ")]):t._e(),2==t.enrollee.underwriter.id?a("AiicoClaim",{attrs:{enrollee:t.enrollee}}):t._e()],1),a("p",{staticClass:"mt-8 text-sm text-center"},[t._v("It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies")])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center"},[r("img",{staticStyle:{height:"140px",width:"170px"},attrs:{src:a(2755),alt:""}}),r("div",{staticClass:"ml-3 w-full lg:flex justify-between items-center"},[r("p",{staticClass:"text-lg font-bold lg:w-1/5"},[t._v("Travel Insurance")]),r("div",{staticClass:" lg:w-3/4"},[r("hr",{staticClass:"mt-2"}),r("hr",{staticClass:"mt-2"}),r("hr",{staticClass:"mt-2 border-green-500 border-2 bg-green-500"})])])])}],s=a(5353),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4 lg:mt-6 lg:px-12 lg:pb-10"},[a("MobileNav",{staticClass:"md:hidden",attrs:{currentStep:t.currentStep}}),a("WebNav",{staticClass:"hidden md:block",attrs:{currentStep:t.currentStep}}),a("transition",{attrs:{name:"slide"}},[1==t.currentStep?a("Step1"):t._e()],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-6"},[a("div",{staticClass:"font-bold text-lg flex items-center gap-2"},[a("p",[t._v("Travel Claim")]),a("span",[a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z",fill:"#000000"}})])])])])},u=[],c={props:["currentStep"]},d=c,m=a(1656),p=(0,m.A)(d,i,u,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"font-bold text-lg flex items-center gap-2"},[a("p",[t._v("Travel Claim")]),a("span",[a("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M15.7131 12L9.70209 5.99001L8.28809 7.40401L12.8881 12.004L8.28809 16.597L9.70209 18.011L15.7131 12Z",fill:"#000000"}})])])])])},g=[],_={props:["currentStep"]},b=_,h=(0,m.A)(b,f,g,!1,null,null,null),x=h.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[a("div",{staticClass:"md:flex md:gap-24"},[a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Departure Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.departure,expression:"departure"}],staticClass:"input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"date",required:""},domProps:{value:t.departure},on:{input:function(e){e.target.composing||(t.departure=e.target.value)}}})]),a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Details Of Incident")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.travel_incident,expression:"travel_incident"}],staticClass:"input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{rows:"5",required:""},domProps:{value:t.travel_incident},on:{input:function(e){e.target.composing||(t.travel_incident=e.target.value)}}})])]),a("div",{staticClass:"md:flex md:gap-24"},[a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Date of Occurence")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.travel_occurence,expression:"travel_occurence"}],staticClass:"input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"date",required:""},domProps:{value:t.travel_occurence},on:{input:function(e){e.target.composing||(t.travel_occurence=e.target.value)}}})]),a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Source")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.travel_source,expression:"travel_source"}],staticClass:"input rounded mt-4 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{rows:"5",required:""},domProps:{value:t.travel_source},on:{input:function(e){e.target.composing||(t.travel_source=e.target.value)}}})])]),a("div",{staticClass:"md:flex md:gap-24"},[a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Location of Occurence")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.travel_location,expression:"travel_location"}],staticClass:"input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:t.travel_location},on:{input:function(e){e.target.composing||(t.travel_location=e.target.value)}}})]),a("div",{staticClass:"mt-4 md:w-full"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Travel Return Date")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.travel_return,expression:"travel_return"}],staticClass:"input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"date",required:""},domProps:{value:t.travel_return},on:{input:function(e){e.target.composing||(t.travel_return=e.target.value)}}})])]),t._m(0)])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-12 lg:flex lg:justify-between"},[a("button",{staticClass:"block w-full lg:w-auto bg-green-500 text-white px-12 py-2 rounded focus:outline-none"},[t._v("Make Claim")])])}],y=(a(4114),a(2505)),S=a.n(y),L=a(7816),$={data(){return{purpose:"",carriage:"",departure:"",travel_return:"",travel_occurence:"",travel_location:"",travel_incident:"",travel_source:""}},computed:{...(0,s.aH)({enrollee:t=>t.enrollee,claimData:t=>t.chiclaim.claimData})},methods:{save(){let t={user_travel_id:this.enrollee.user_vehicle_id,departure_date:this.departure,return_date:this.travel_return,date_of_occurence:this.travel_occurence,location_of_occurence:this.travel_location,details_of_incident:this.travel_incident,source:this.travel_source};S()({url:`${L.A}/claim/travel/aiico`,data:t,method:"POST"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message}),this.$router.push("/app/dashboard/managetravel")})).catch((t=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:t.response.data.message})}))}},mounted(){}},k=$,T=(0,m.A)(k,C,w,!1,null,"99eac4f2",null),N=T.exports,A={components:{Step1:N,MobileNav:v,WebNav:x},data(){return{}},watch:{currentStep(){window.scrollTo(0,300)}},computed:{...(0,s.aH)({currentStep:t=>t.chiclaim.currentStep})},methods:{},destroyed(){this.$store.commit("resetChiClaimStep"),this.$store.commit("resetChiClaimData")}},D=A,I=(0,m.A)(D,n,o,!1,null,"105fbd8c",null),q=I.exports,E={components:{AiicoClaim:q},data(){return{underwriter_id:1}},computed:{...(0,s.aH)({enrollee:t=>t.enrollee})}},P=E,M=(0,m.A)(P,r,l,!1,null,"7df5a132",null),O=M.exports},2755:function(t,e,a){t.exports=a.p+"img/Group 65.e289d27f.png"}}]);
//# sourceMappingURL=4137.5365f7bd.js.map