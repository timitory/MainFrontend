"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2365],{9160:function(t,e,a){a.r(e),a.d(e,{default:function(){return T}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white",staticStyle:{"box-shadow":"0px 20px 33px #00000029"}},[s("router-link",{staticClass:"absolute left-4 top-2",attrs:{to:"/app/dashboard"}},[s("font-awesome-icon",{staticClass:"text-green-600 ",attrs:{icon:"times-circle"}})],1),t._m(0),s("div",{staticClass:"overflow-x-auto xl:overflow-x-hidden tablecont"},[!t.$store.state.loading&&t.paginatedEnrollees.length>0?s("table",{staticClass:"w-full mt-8"},[t._m(1),s("tbody",t._l(t.paginatedEnrollees,(function(e){return s("tr",{key:e.id,staticClass:"border border-solid border-gray-300"},[e.enrollee.name===t.fullname?s("td",{staticClass:"p-3"},[t._v("Myself")]):s("td",{staticClass:"p-3"},[t._v(t._s(e.enrollee.name))]),s("td",[t._v(t._s(e.plan))]),s("td",[t._v(t._s(e.amount))]),"Success"==e.status?s("td",{staticClass:"text-green-500"},[t._v(t._s(e.status))]):"Pending"==e.status?s("td",{staticClass:"text-yellow-500"},[t._v(t._s(e.status))]):"Active"==e.status||"Completed"==e.status?s("td",{staticClass:"text-green-500"},[t._v(t._s(e.status))]):s("td",{staticClass:"text-red-500"},[t._v(t._s(e.status))]),s("td",[t._v(t._s(e.start))]),s("td",[t._v(t._s(e.policy_number))]),s("td",[t._v(t._s(e.end))]),s("td",[e.id_card?s("a",{staticClass:"text-green-500 underline outline-none focus:outline-none",attrs:{href:e.id_card,target:"_blank"}},[t._v("View ID")]):s("p",[t._v("View ID")])]),"Active"==e.status?s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none py-2 border border-solid border-gray-300 rounded",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.action=e.target.multiple?a:a[0]},function(a){return t.selectEnrollee(e)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select action")]),s("option",{attrs:{value:"view"}},[t._v("View Details")]),s("option",{attrs:{value:"renew_policy"}},[t._v("Renew Policy")]),s("option",{on:{click:function(a){return t.contactAdmin(e)}}},[t._v("Contact Admin")])])]):"Success"==e.status?s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none py-2 border border-solid border-gray-300 rounded",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.action=e.target.multiple?a:a[0]},function(a){return t.selectEnrollee(e)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select action")]),s("option",{attrs:{value:"view"}},[t._v("View Details")]),s("option",{on:{click:function(a){return t.contactAdmin(e)}}},[t._v("Contact Admin")])])]):"Pending"==e.status||"Failed"==e.status?s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none py-2 border border-solid border-gray-300 rounded",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.action=e.target.multiple?a:a[0]},function(a){return t.selectEnrollee(e)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select action")]),s("option",{on:{click:function(a){return t.contactAdmin(e)}}},[t._v("Contact Admin")])])]):"Incomplete"==e.status?s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none py-2 border border-solid border-gray-300 rounded",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.action=e.target.multiple?a:a[0]},function(a){return t.selectEnrollee(e)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select action")]),s("option",{attrs:{value:"complete"}},[t._v("Complete Payment")]),s("option",{on:{click:function(a){return t.contactAdmin(e)}}},[t._v("Contact Admin")])])]):"Completed"==e.status?s("td",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.action,expression:"action"}],staticClass:"focus:outline-none py-2 border border-solid border-gray-300 rounded",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.action=e.target.multiple?a:a[0]},function(a){return t.selectEnrollee(e)}]}},[s("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("Select action")]),s("option",{attrs:{value:"view"}},[t._v("View Details")]),s("option",{attrs:{value:"renew_policy"}},[t._v("Renew Policy")]),s("option",{on:{click:function(a){return t.contactAdmin(e)}}},[t._v("Contact Admin")])])]):s("td",{staticClass:"text-red-500"},[t._v(" "+t._s(e.status)+" ")])])})),0)]):!t.$store.state.loading&&t.paginatedEnrollees.length<1?s("div",{staticClass:"w-full text-center py-4"},[s("img",{staticClass:"block  mx-auto",attrs:{src:a(9190),alt:""}}),s("p",{staticClass:"mt-4 text-center font-bold text-green-500 font-lg"},[t._v("No records")])]):t._e(),t.paginatedEnrollees.length>0?s("nav",{staticClass:"mt-8",attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"w-1/2 mx-auto  flex justify-between",staticStyle:{"max-width":"250px"}},[s("li",{staticClass:"page-item"},[1!=t.page?s("button",{staticClass:"inline text-green-500",attrs:{type:"button"},on:{click:function(e){t.page--}}},[t._v(" Previous ")]):s("button",{staticClass:"inline text-green-500 opacity-20"},[t._v("Previous")])]),s("li",{staticClass:"page-item"},[t.page<t.pages.length?s("button",{staticClass:"inline text-green-500",attrs:{type:"button"},on:{click:function(e){t.page++}}},[t._v(" Next ")]):s("button",{staticClass:"inline text-green-500 opacity-20"},[t._v("Next")])])])]):t._e()]),s("div",{staticClass:"mt-24 flex justify-between"},[s("router-link",{staticClass:"text-green-500 block",attrs:{to:"/app/dashboard"}},[t._v("Back")])],1)],1),s("p",{staticClass:"mt-8 text-sm text-center"},[t._v("It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies")]),t.showUpdateModal?s("UpdateEnrolleeModal",{attrs:{enrollee:t.selectedEnrollee},on:{close:t.closeUpdateModal,refresh:t.refreshList}}):t._e(),t.showUpgrade?s("Upgrade",{attrs:{plans:t.plans},on:{close:t.closeModal}}):t._e(),t.showMeta?s("metadata-modal",{attrs:{enrollee:t.selectedEnrollee,close:t.closeModal}}):t._e(),t.showRenewal?s("RenewPolicy",{attrs:{renewalInfo:t.renewalInfo,enrollee:t.selectedEnrollee},on:{close:t.closeModal,getLga:t.getLga,getHospital:t.getHospital,submit:t.renewPolicy}}):t._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showPaystack,expression:"showPaystack"}]},[s("Paystack",{ref:"paystackbutton",staticClass:" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none",attrs:{amount:t.paystackData.amount,email:t.paystackData.email,paystackkey:t.paystackData.public_key,reference:t.paystackData.reference,subaccount:t.paystackData.subaccount,transactionCharge:t.paystackData.transactionCharge,callback:t.verifyPayment,bearer:t.paystackData.bearer,close:t.closePayment}})],1),s("transition",{attrs:{name:"scale"}},[t.showMethodModal?s("PaymentMethod",{on:{useCard:t.payWithCard}}):t._e()],1),t.showContact?s("Contact",{attrs:{enrollee:t.enrollee},on:{close:t.closeModal}}):t._e()],1)},l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex items-center"},[s("img",{staticStyle:{height:"140px",width:"170px"},attrs:{src:a(5173),alt:""}}),s("div",{staticClass:"ml-3 w-full lg:flex justify-between items-center"},[s("p",{staticClass:"text-lg font-bold lg:w-1/5"},[t._v("Health Insurance")]),s("div",{staticClass:" lg:w-3/4"},[s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",{staticClass:"font-bold"},[t._v("Name")]),a("td",{staticClass:"font-bold"},[t._v("Plan")]),a("td",{staticClass:"font-bold"},[t._v("Amount")]),a("td",{staticClass:"font-bold"},[t._v("Status")]),a("td",{staticClass:"font-bold"},[t._v("Start Date")]),a("td",{staticClass:"font-bold"},[t._v("Policy Number")]),a("td",{staticClass:"font-bold"},[t._v("Due Date")]),a("td",{staticClass:"font-bold"},[t._v("ID Card")]),a("td",{staticClass:"font-bold"},[t._v("Action")])])])}],o=(a(4114),a(2505)),n=a.n(o),i=a(7816),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-modal"},[a("div",{staticClass:"loading-modal w-full"},[a("div",{staticClass:"loader bg-white mx-auto py-6 pb-8 px-10 relative"},[a("font-awesome-icon",{staticClass:"absolute  cursor-pointer text-red-500 text-xl right-2 top-2",attrs:{icon:"times-circle"},on:{click:function(e){return t.$emit("close")}}}),a("p",{staticClass:"text-gray-500 mt-4"},[t._v("Select a preferred plan")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.validate.apply(null,arguments)}}},[a("div",{staticClass:"lg:flex mt-6 lg:mt-4 justify-between plans"},t._l(t.newPlans,(function(e,s){return a("div",{key:s,staticClass:"relative border border-solid pb-8 plan",class:[t.planId==e.id?"border-green-500":"border-gray-300"]},[a("div",{staticClass:"py-3 px-6 mt-4"},[a("div",{staticClass:"flex justify-between items-center"},[a("p",{staticClass:"text-base mr-3"},[t._v(t._s(e.name))]),a("p",{staticClass:"lg:mt-0 ml-3 text-green-500 font-light"},[a("span",{staticClass:"font-extrabold text-lg"},[t._v(t._s(e.amount))]),t._v("/per month")])]),a("hr",{staticClass:"mt-4"}),a("ul",{staticClass:"mt-4"},[a("li",{staticClass:"flex items-center"},[a("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),a("p",[t._v(" 2 sessions of surgeries in a year ")])],1),a("li",{staticClass:"mt-4 flex items-center"},[a("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),a("p",[t._v("A single dental care check per quarter")])],1),a("li",{staticClass:"mt-4 flex items-center"},[a("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),a("p",[t._v(" 2 dependants eligible ")])],1),a("li",{staticClass:"mt-4 flex items-center"},[a("font-awesome-icon",{staticClass:"text-sm text-gray-300 mr-4",attrs:{icon:"check"}}),a("p",[t._v(" Gym sessions for 6 months ")])],1),a("li",{staticClass:"absolute lastitem"},[a("label",{staticClass:"container col1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.planId,expression:"planId"}],attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.planId,e.id)},on:{change:function(a){t.planId=e.id}}}),a("span",{staticClass:"checkmark"})])])])])])})),0),a("div",{staticClass:"hidden lg:block mt-10"},[t.selected?a("button",{staticClass:"block w-full text-green-500 text-right focus:outline-none"},[t._v(" Proceed "),a("font-awesome-icon",{staticClass:"text-green-500",attrs:{icon:"arrow-right"}})],1):a("p",{staticClass:"text-green-500 text-right opacity-50"},[t._v("Proceed"),a("font-awesome-icon",{staticClass:"ml-2 text-green-500",attrs:{icon:"arrow-right"}})],1)]),a("div",{staticClass:"block lg:hidden mt-10"},[t.selected?a("button",{staticClass:"block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden outline-none focus:outline-none"},[t._v(" Proceed "),a("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1):a("p",{staticClass:"bg-green-500 text-white py-3 text-center rounded opacity-70"},[t._v("Proceed"),a("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"arrow-right"}})],1)])])],1)])])},c=[],d=a(5353),u={props:["plans"],data(){return{planId:"",selected:!1}},watch:{planId(){""!==this.planId?this.selected=!0:this.selected=!1}},computed:{...(0,d.aH)({enrollee:t=>t.enrollee}),newPlans(){return this.plans.filter((t=>t.name!==this.enrollee.policy.plan))}},methods:{validate(){this.$store.commit("startLoading"),this.$emit("close");const t={enrollee_id:this.enrollee.policy.enrollee_id,plan_id:this.planId};n()({url:`${i.A}/health/upgrade`,data:t,method:"POST"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message})})).catch((t=>{this.$store.dispatch("handleError",t),this.$store.commit("endLoading")}))}},destroyed(){this.$store.commit("setActiveModal",0)}},m=u,p=a(1656),h=(0,p.A)(m,r,c,!1,null,"204629ae",null),v=h.exports,g=a(1845),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-modal"},[a("div",{staticClass:"loading-modal w-full"},[a("div",{staticClass:"loader bg-white mx-auto py-6 pb-8 px-10 relative"},[a("font-awesome-icon",{staticClass:"absolute  cursor-pointer text-red-500 text-xl right-2 top-2",attrs:{icon:"times-circle"},on:{click:function(e){return t.$emit("close")}}}),a("h1",{staticClass:"text-center font-bold text-2xl"},[t._v("Send Message to Paddycover Admin")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"border-solid border rounded mt-6 mx-auto w-full p-2 focus:outline-none",domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),a("button",{staticClass:"block w-full mt-6 text-white text-sm rounded bg-green-500 p-2 focus:outline-none",on:{click:t.sendMessage}},[t._v("Send Message")])],1)])])},_=[],b={props:["enrollee"],data(){return{message:""}},methods:{sendMessage(){this.$store.commit("startLoading"),n()({url:`${i.A}/support/admin`,data:{message:this.message},method:"POST"}).then((t=>{this.$store.commit("setSuccess",{status:!0,msg:t.data.message}),this.$emit("close"),this.$store.commit("endLoading")})).catch((t=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",t)}))}},mounted(){this.message=`I bought a ${this.enrollee.policy.plan} policy for ${this.enrollee.policy.enrollee} but the status is ${this.enrollee.policy.status}`}},y=b,C=(0,p.A)(y,f,_,!1,null,"638e102d",null),w=C.exports,x=a(9401),$=a.n(x),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-modal"},[a("div",{staticClass:"loading-modal w-full"},[a("div",{staticClass:"loaderssss bg-white w-3/4 mx-auto rounded px-4 lg:px-8 py-6"},[a("div",{staticClass:"flex justify-end"},[a("div",{staticClass:"top-2",on:{click:t.close}},[a("font-awesome-icon",{staticClass:"text-green-600",attrs:{icon:"times-circle"}})],1)]),t._m(0),a("div",{staticClass:"pt-6 relative metaData_container"},[a("div",{staticClass:"flex justify-between p-2.5"},[a("div",[a("label",[t._v("Hospital")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.hospital))])]),a("div",[a("label",[t._v("Name")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.enrollee.name))])]),a("div",[a("label",[t._v("dob")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.dob))])]),a("div",[a("label",[t._v("Email")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.enrollee.email))])])]),a("div",{staticClass:"flex justify-between p-2.5"},[a("div",[a("label",[t._v("Address")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.address))])]),a("div",[a("label",[t._v("Occupation")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.occupation))])]),a("div",[a("label",[t._v("Country")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.country))])]),a("div",[a("label",[t._v("Blood group")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.blood_group))])])]),a("div",{staticClass:"flex justify-between p-2.5"},[a("div",[a("label",[t._v("Plan")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.plan))])]),a("div",[a("label",[t._v("Marital Status")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.marital_status))])]),a("div",[a("label",[t._v("Genotype")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.genotype))])]),a("div",[a("label",[t._v("Medical History")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.medical_history))])])]),a("div",{staticClass:"flex justify-start p-2.5"},[a("div",[a("label",[t._v("Employer")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.lga_of_residence))])]),a("div",[a("label",[t._v("Payment Frequency")]),a("p",{staticClass:"font-semibold"},[t._v(t._s(t.enrollee.metadata.payment_frequency)+" Month(s)")])])]),a("hr",{staticClass:"p-2.5"}),a("section",{staticClass:"w-10/12"})])])])])},P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between p-2.5"},[a("p",{staticClass:"text-green-500 font-bold"},[t._v("Policy Details")]),a("div",{staticClass:" lg:w-3/4"},[a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])}],I={components:{},props:["close","enrollee"]},M=I,D=(0,p.A)(M,k,P,!1,null,"76a515c3",null),A=D.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-modal"},[a("div",{staticClass:"loading-modal w-full"},[a("div",{staticClass:"loader bg-white w-1/2 mx-auto rounded px-4 lg:px-8 py-6"},[a("div",{staticClass:"flex justify-end"},[a("div",{staticClass:"top-2",on:{click:t.close}},[a("font-awesome-icon",{staticClass:"text-green-600 ",attrs:{icon:"times-circle"}})],1)]),t._m(0),a("form",{staticClass:"pt-6 relative metaData_container",on:{submit:function(e){return e.preventDefault(),t.renewPolicy.apply(null,arguments)}}},[a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Choose Plan")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.planID,expression:"planID"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.planID=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Plan")]),t._l(t.renewalInfo.renewalPlans,(function(e,s){return a("option",{key:s,domProps:{value:e.PlanId}},[t._v(t._s(e.Name+"("+e.MonthlyCost+"/ "+e.AnnualCost+")"))])}))],2)])]),a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold"},[t._v("State of Residence")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.stateID,expression:"stateID"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{disabled:""==t.planID,required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stateID=e.target.multiple?a:a[0]},t.onLgaChange]}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select State")]),t._l(t.renewalInfo.states,(function(e,s){return a("option",{key:s,domProps:{value:e.StateID}},[t._v(t._s(e.Name))])}))],2)])]),a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold"},[t._v("LGA of Residence")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.lgaID,expression:"lgaID"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{placeholder:"Select Lga",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.lgaID=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Lga")]),t._l(t.lga,(function(e,s){return a("option",{key:s,domProps:{value:e.LgaID}},[t._v(t._s(e.Name))])}))],2)])])]),a("div",{staticClass:"flex justify-between pt-2.5"},[a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Choose hospital")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.hospital_id,expression:"hospital_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.hospital_id=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Preferred Hospital")]),t._l(t.renewalInfo.hospitals,(function(e,s){return a("option",{key:s,domProps:{value:e.ID}},[t._v(t._s(e.HospitalName))])}))],2)]),a("p",{staticClass:"text-sm text-red-600 italic"},[t._v(t._s(t.err.hospital))])]),a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold"},[t._v("Payment Frequency")]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model.number",value:t.payment_frequency,expression:"payment_frequency",modifiers:{number:!0}}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var a="_value"in e?e._value:e.value;return t._n(a)}));t.payment_frequency=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[t._v("Select Payment Frequency")]),a("option",{attrs:{value:"1"}},[t._v("1 Month")]),a("option",{attrs:{value:"2"}},[t._v("2 Months")]),a("option",{attrs:{value:"3"}},[t._v("3 Months")]),a("option",{attrs:{value:"4"}},[t._v("4 Months")]),a("option",{attrs:{value:"5"}},[t._v("5 Months")]),a("option",{attrs:{value:"6"}},[t._v("6 Months")]),a("option",{attrs:{value:"7"}},[t._v("7 Months")]),a("option",{attrs:{value:"8"}},[t._v("8 Months")]),a("option",{attrs:{value:"9"}},[t._v("9 Months")]),a("option",{attrs:{value:"10"}},[t._v("10 Months")]),a("option",{attrs:{value:"11"}},[t._v("11 Months")]),a("option",{attrs:{value:"12"}},[t._v("12 Months")])])])]),t._m(1)]),a("button",{staticClass:"block w-full mx-auto bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none",staticStyle:{"max-width":"300px"}},[t._v("Submit")]),a("section",{staticClass:"w-10/12"})])])])])},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-between p-2.5"},[a("h1",{staticClass:"font-bold"},[t._v("Renew Policy")]),a("div",{staticClass:" lg:w-3/4"},[a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm font-bold pt-2.5"}),a("div",{staticClass:"relative"},[a("input",{attrs:{hidden:""}})])])}],L={data(){return{planID:"",stateID:"",lgaID:"",payment_frequency:"",hospital_id:"",lga:[],err:{hospital:""}}},props:{renewalInfo:{type:Object,default:null},enrollee:{type:Object,default:null}},methods:{getHospital(t){n()({url:`${i.A}/hmo/hospitals`,data:t,method:"POST"}).then((t=>{console.log(t.data.data),console.log(t.data.data.hospitals),this.renewalInfo.hospitals=t.data.data.hospitals,this.err.hospital=""})).catch((t=>{console.log(t.response.data.message),this.err.hospital=t.response.data.message,this.$store.dispatch("handleError",t)}))},getLga(t){console.log(this.renewalInfo.lgas),n()({url:`${i.A}/hmo/lga`,data:{state_id:t},method:"POST"}).then((t=>{console.log(t),this.lga=t.data.data,console.log(this.lga)})).catch((t=>{console.log(t),this.$store.dispatch("handleError",t)}))},async onLgaChange(t){const e=t.target.value;await this.getLga(e)},renewPolicy(){let t={user_id:this.enrollee.user.id,plan_id:this.planID.toString(),payment_frequency:this.payment_frequency,state_of_residence:this.stateID,lga_of_residence:this.lgaID,hospital_id:this.hospital_id.toString(),user_hmo_id:this.enrollee.user_hmo_id};console.log(t),this.$emit("submit",t)},close(){this.$emit("close")}},watch:{lgaID(){if(this.lgaID){let t={PlanID:this.planID.toString(),StateId:this.stateID.toString(),LgaId:this.lgaID.toString()};console.log(t),this.getHospital(t)}}},created(){console.log(this.renewalInfo.renewalPlans)}},N=L,j=(0,p.A)(N,E,S,!1,null,"7c32bed5",null),q=j.exports,H=a(968),O={components:{PaymentMethod:H.A,RenewPolicy:q,MetadataModal:A,Upgrade:v,Contact:w,Paystack:$(),UpdateEnrolleeModal:g.A},data(){return{showRenewal:!1,enrollees:[],enrollee:{},action:"",dependant:{},selectedEnrollee:{},showMeta:!1,showUpdateModal:!1,plans:[],showUpgrade:!1,showContact:!1,showMethodModal:!1,paystackData:{public_key:"",email:"",amount:0,reference:"",subaccount:"",bearer:"subaccount",transactionCharge:0},showPaystack:!1,fullname:"",page:1,perPage:10,health_id:"",pages:[],renewalInfo:{renewalPlans:[],states:[],lgas:[],hospitals:[]}}},watch:{enrollees(){this.setPages()}},computed:{...(0,d.aH)({user:t=>t.user}),paginatedEnrollees(){return this.paginate(this.enrollees)}},methods:{veiwHealthDetail(t){this.selectedEnrollee=t,this.showMeta=!0},updateEnrollee(t){this.selectedEnrollee=t,this.showUpdateModal=!0},closeUpdateModal(){this.showUpdateModal=!1,this.selectedEnrollee={}},selectEnrollee(t){console.log(t),"view"==this.action?(this.selectedEnrollee=t,this.showMeta=!0):"stop"==this.action?(this.cancelPolicy(t.policy.user_health_id),this.action=""):"complete"==this.action?(this.health_id=t.user_hmo_id,this.initiatePayment(),this.action=""):"renew_policy"==this.action?(this.showRenewal=!0,console.log(t),this.selectedEnrollee=t,this.action=""):"upgrade"==this.action?(this.$store.commit("setEnrollee",t),this.showUpgrade=!0,this.$store.commit("setActiveModal",1)):"id"==this.action&&this.$router.push(t.id_card)},getPlan(){n().get(`${i.A}/hmo/plans`).then((t=>{this.renewalInfo.renewalPlans=t.data.data})).catch((t=>{this.$store.dispatch("handleError",t)}))},getChiHMOStates(){n().get(`${i.A}/hmo/states`).then((t=>{this.renewalInfo.states=t.data.data})).catch((t=>{this.$store.dispatch("handleError",t)}))},getHospital(t){n()({url:`${i.A}/hmo/hospitals`,data:t,method:"POST"}).then((t=>{console.log(t.data.data),console.log(t.data.data.hospitals),this.renewalInfo.hospitals=t.data.data.hospitals})).catch((t=>{console.log(t),this.$store.dispatch("handleError",t)}))},getLga(t){n()({url:`${i.A}/hmo/lga`,data:{state_id:t},method:"POST"}).then((t=>{console.log(t),this.renewalInfo.states=t.data.data})).catch((t=>{console.log(t),this.$store.dispatch("handleError",t)}))},contactAdmin(t){this.$store.commit("setActiveModal",1),this.showContact=!0,this.enrollee=t},cancelPolicy(t){this.$store.commit("startLoading"),n()({url:`${i.A}/health/policy/cancel`,data:{user_health_id:t},method:"POST"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message})})).catch((t=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",t)}))},closeModal(){this.showUpgrade=!1,this.showContact=!1,this.showMeta=!1,this.showRenewal=!1,this.action="",this.$store.commit("setActiveModal",0)},setPages(){let t=Math.ceil(this.enrollees.length/this.perPage);for(let e=1;e<=t;e++)this.pages.push(e)},paginate(t){let e=this.page,a=this.perPage,s=e*a-a,l=e*a;return t.slice(s,l)},initiatePayment(){this.showMethodModal=!0,this.showRenewal=!1},payNow(){this.$store.commit("startLoading");let t={user_hmo_id:this.health_id,card_id:0};console.log(t),n()({url:`${i.A}/hmo/payment/init`,data:t,method:"POST"}).then((t=>{this.showPaystack=!0,console.log(t.data.data),this.paystackData.public_key=t.data.data.public_key,this.paystackData.email=t.data.data.email,this.paystackData.amount=t.data.data.amount,this.paystackData.reference=t.data.data.reference,this.paystackData.subaccount=t.data.data.subaccount,this.paystackData.transactionCharge=t.data.data.flatfee,console.log(this.paystackData),this.$refs.paystackbutton.payWithPaystack(this.paystackData)})).catch((t=>{this.$store.dispatch("handleError",t)}))},verifyPayment(){n()({url:`${i.A}/hmo/payment/verify`,data:{reference:this.paystackData.reference},method:"POST"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message})})).catch((t=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:t.response.data.message})}))},closePayment(){this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:"Payment cancelled"})},payWithCard(t){this.showMethodModal=!1,"old"===t?this.$router.push("/app/dashboard/buyhealth/4"):"new"===t&&this.payNow()},renewPolicy(t){console.log(t),this.$store.commit("startLoading"),n().post(`${i.A}/hmo/policy/renew`,t).then((t=>{console.log(t),this.health_id=t.data.data.user_hmo_id,this.$store.commit("endLoading"),this.initiatePayment()})).catch((t=>{this.$store.commit("endLoading"),console.log(t)}))}},mounted(){this.fullname=`${this.user.firstname} ${this.user.lastname}`,this.$store.commit("setActiveModal",0),this.$store.commit("startLoading"),n().get(`${i.A}/hmo/policy`).then((t=>{this.enrollees=t.data.data,this.$store.commit("endLoading")})).catch((t=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",t)}))},created(){this.getPlan(),this.getChiHMOStates()}},U=O,R=(0,p.A)(U,s,l,!1,null,"86113b20",null),T=R.exports},5173:function(t,e,a){t.exports=a.p+"img/Image 9.1716ee50.png"}}]);
//# sourceMappingURL=2365.d0d3a934.js.map