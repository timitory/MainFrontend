"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[1754],{275:function(e,t,s){s.d(t,{A:function(){return m}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l-modal"},[s("div",{staticClass:"loading-modal w-full"},[s("div",{staticClass:"loader bg-white mx-auto py-6 pb-8 px-10 relative"},[s("font-awesome-icon",{staticClass:"absolute  cursor-pointer text-red-500 text-xl right-2 top-2",attrs:{icon:"times-circle"},on:{click:function(t){return e.$emit("close")}}}),s("h1",{staticClass:"text-center font-bold text-2xl"},[e._v("Send Message to Paddycover Admin")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"border-solid border rounded mt-6 mx-auto w-full p-2 focus:outline-none",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("button",{staticClass:"block w-full mt-6 text-white text-sm rounded bg-green-500 p-2 focus:outline-none",on:{click:e.sendMessage}},[e._v("Send Message")])],1)])])},i=[],o=s(2505),l=s.n(o),n=s(430),r={props:["enrollee"],data(){return{message:""}},methods:{sendMessage(){this.$store.commit("startLoading"),l()({url:`${n.A}/support/admin`,data:{message:this.message},method:"POST"}).then((e=>{this.$store.commit("setSuccess",{status:!0,msg:e.data.message}),this.$emit("close"),this.$store.commit("endLoading")})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))}},mounted(){this.message=`I bought a ${this.enrollee.policy.vehicle_category} policy for ${this.enrollee.policy.enrollee.firstname} ${this.enrollee.policy.enrollee.firstname} but the status is ${this.enrollee.policy.status}`}},c=r,d=s(1656),u=(0,d.A)(c,a,i,!1,null,"d5f47a52",null),m=u.exports},1754:function(e,t,s){s.r(t),s.d(t,{default:function(){return P}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"mt-8 px-6 pt-6 lg:px-20 pb-20 relative shadow-lg bg-white",staticStyle:{"box-shadow":"0px 20px 33px #00000029"}},[a("router-link",{staticClass:"absolute left-4 top-2",attrs:{to:"/app/dashboard"}},[a("font-awesome-icon",{staticClass:"text-green-600 ",attrs:{icon:"times-circle"}})],1),e._m(0),a("div",{staticClass:"overflow-x-auto xl:overflow-x-auto tablecont"},[!e.$store.state.loading&&e.paginatedEnrollees.length>0?a("table",{staticClass:"w-full mt-8"},[e._m(1),a("tbody",e._l(e.paginatedEnrollees,(function(t,s){return a("tr",{key:s,staticClass:"border border-solid border-gray-300"},[a("td",[e._v(e._s(s+1))]),t.policy.enrollee.firstname+" "+t.policy.enrollee.lastname===e.fullname?a("td",{staticClass:"p-3"},[e._v("Myself")]):a("td",{staticClass:"p-3"},[e._v(e._s(t.policy.enrollee.firstname)+" "+e._s(t.policy.enrollee.lastname))]),a("td",[e._v(e._s(t.policy.vehicle_category))]),a("td",[e._v(e._s(t.policy.amount))]),t.policy.policy_number?a("td",[e._v(e._s(t.policy.policy_number))]):a("td",[e._v("Nil")]),a("td",[e._v(e._s(t.underwriter.name.toUpperCase()))]),"Active"==t.policy.status||"Success"==t.policy.status?a("td",{staticClass:"text-green-500"},[e._v(e._s(t.policy.status))]):"Pending"==t.policy.status||"Incomplete"==t.policy.status?a("td",{staticClass:"text-yellow-500"},[e._v(e._s(t.policy.status))]):a("td",{staticClass:"text-red-500"},[e._v(e._s(t.policy.status))]),a("td",[e._v(e._s(t.policy.start))]),a("td",[e._v(e._s(t.policy.end))]),"Active"!=t.policy.status&&"Success"!=t.policy.status||0!=t.claim?"Success"==t.policy.status&&1==t.claim?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"view"}},[e._v("View repayment schedule")]),a("option",{attrs:{value:"claim"}},[e._v("Make Claim")]),a("option",{attrs:{value:"inspection"}},[e._v("Vehicle Inspection")]),a("option",{attrs:{value:"cert"}},[e._v("View certificate")]),a("option",{attrs:{value:"viewvehicle"}},[e._v("Vehicle Details")]),a("option",{attrs:{value:"stop"}},[e._v("Cancel Policy")]),a("option",{attrs:{value:"renew"}},[e._v("Annual Renewal")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])]):"Active"==t.policy.status&&1==t.claim?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"view"}},[e._v("View repayment schedule")]),a("option",{attrs:{value:"claim"}},[e._v("Make Claim")]),a("option",{attrs:{value:"cert"}},[e._v("View certificate")]),a("option",{attrs:{value:"viewvehicle"}},[e._v("Vehicle Details")]),a("option",{attrs:{value:"renew"}},[e._v("Annual Renewal")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])]):"Incomplete"==t.policy.status?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"complete"}},[e._v("Complete Payment")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")]),a("option",{attrs:{value:"delete"}},[e._v("Delete")])])]):"Pending"==t.policy.status?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])]):"Declined"==t.policy.status||"Cancelled"==t.policy.status?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])]):"Cancel Initiated"==t.policy.status||"Cancelled"==t.policy.status?a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])]):e._e():a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.action,expression:"action"}],staticClass:"focus:outline-none p-2 border border-solid border-gray-300 rounded",on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.action=t.target.multiple?s:s[0]},function(s){return e.selectEnrollee(t)}]}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[e._v("Select action")]),a("option",{attrs:{value:"view"}},[e._v("View repayment schedule")]),a("option",{attrs:{value:"claim"}},[e._v("Make Claim")]),a("option",{attrs:{value:"inspection"}},[e._v("Vehicle Inspection")]),a("option",{attrs:{value:"cert"}},[e._v("View certificate")]),a("option",{attrs:{value:"viewvehicle"}},[e._v("Vehicle Details")]),a("option",{attrs:{value:"stop"}},[e._v("Cancel Policy")]),a("option",{attrs:{value:"renew"}},[e._v("Annual Renewal")]),a("option",{attrs:{value:"contact"}},[e._v("Contact Admin")])])])])})),0)]):!e.$store.state.loading&&e.paginatedEnrollees.length<1?a("div",{staticClass:"w-full text-center py-4"},[a("img",{staticClass:"block  mx-auto",attrs:{src:s(9190),alt:""}}),a("p",{staticClass:"mt-4 text-center font-bold text-green-500 font-lg"},[e._v("No records")])]):e._e(),e.paginatedEnrollees.length>0?a("nav",{staticClass:"mt-8",attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"w-1/2 mx-auto  flex justify-between",staticStyle:{"max-width":"250px"}},[a("li",{staticClass:"page-item"},[1!=e.page?a("button",{staticClass:"inline text-green-500",attrs:{type:"button"},on:{click:function(t){e.page--}}},[e._v(" Previous ")]):a("button",{staticClass:"inline text-green-500 opacity-20"},[e._v("Previous")])]),a("li",{staticClass:"page-item"},[e.page<e.pages.length?a("button",{staticClass:"inline text-green-500",attrs:{type:"button"},on:{click:function(t){e.page++}}},[e._v(" Next ")]):a("button",{staticClass:"inline text-green-500 opacity-20"},[e._v("Next")])])])]):e._e()]),a("div",{staticClass:"mt-24 flex justify-between"},[a("router-link",{staticClass:"text-green-500 block",attrs:{to:"/app/dashboard"}},[e._v("Back")])],1)],1),a("p",{staticClass:"mt-8 text-sm text-center"},[e._v("It’s important to note that you can purchase more than one policy and you can also add a dependent to any or multiple of these policies")]),e.showContact?a("Contact",{attrs:{enrollee:e.enrollee},on:{close:e.closeModal}}):e._e(),e.showCancel?a("Cancel",{attrs:{enrollee:e.enrollee},on:{close:e.closeCancel}}):e._e(),e.show?a("Inspection",{attrs:{enrollee:e.enrollee},on:{close:function(t){e.show=!1},submit:e.vehicleInspection}}):e._e()],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex items-center"},[a("img",{staticStyle:{height:"140px",width:"170px"},attrs:{src:s(1537),alt:""}}),a("div",{staticClass:"ml-3 w-full lg:flex justify-between items-center"},[a("p",{staticClass:"text-lg font-bold lg:w-1/5"},[e._v("Vehicle Insurance")]),a("div",{staticClass:" lg:w-3/4"},[a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2"}),a("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",{staticClass:"font-bold"},[e._v("S/N")]),s("td",{staticClass:"font-bold"},[e._v("Name")]),s("td",{staticClass:"font-bold"},[e._v("Plan")]),s("td",{staticClass:"font-bold"},[e._v("Amount")]),s("td",{staticClass:"font-bold"},[e._v("Policy Number")]),s("td",{staticClass:"font-bold"},[e._v("Underwriter")]),s("td",{staticClass:"font-bold"},[e._v("Status")]),s("td",{staticClass:"font-bold"},[e._v("Start Date")]),s("td",{staticClass:"font-bold"},[e._v("Due Date")]),s("td",{staticClass:"font-bold"},[e._v("Action")]),s("td",{staticClass:"font-bold"})])}],o=(s(4114),s(2505)),l=s.n(o),n=s(430),r=s(275),c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l-modal"},[s("div",{staticClass:"loading-modal w-full"},[s("div",{staticClass:"loader bg-white mx-auto py-6 pb-8 px-10 relative"},[s("font-awesome-icon",{staticClass:"absolute  cursor-pointer text-red-500 text-xl right-2 top-2",attrs:{icon:"times-circle"},on:{click:function(t){return e.$emit("close")}}}),s("h1",{staticClass:"text-center font-bold text-2xl"},[e._v("Hi Our Paddy, we will like to know why you are cancelling your policy")]),s("br"),s("label",{staticClass:"container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"radio",value:"I sold my car"},domProps:{checked:e._q(e.message,"I sold my car")},on:{change:function(t){e.message="I sold my car"}}}),e._v("I sold my car "),s("span",{staticClass:"checkmark"})]),s("br"),s("br"),s("label",{staticClass:"container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"radio",value:"I want to change the Underwriter/Insurance provider"},domProps:{checked:e._q(e.message,"I want to change the Underwriter/Insurance provider")},on:{change:function(t){e.message="I want to change the Underwriter/Insurance provider"}}}),e._v("I want to change the Underwriter/Insurance provider "),s("span",{staticClass:"checkmark"})]),s("br"),s("br"),s("label",{attrs:{for:""}},[e._v("Others (please state reason)")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"border-solid border rounded mx-auto w-full p-2 focus:outline-none",attrs:{value:""},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("button",{staticClass:"block w-full mt-6 text-white text-sm rounded bg-red-500 p-2 focus:outline-none",on:{click:e.sendMessage}},[e._v("Initiate Cancel")])],1)])])},d=[],u={props:["enrollee"],data(){return{message:"",soldCar:"I sold my car",changeUnderwriter:"I want to change Undewriter/Insurance provider"}},methods:{sendMessage(){this.$store.commit("startLoading"),l()({url:`${n.A}/vehicle/policy/cancel`,data:{user_vehicle_id:this.enrollee.policy.user_vehicle_id,reason:this.message},method:"POST"}).then((e=>{this.$store.commit("setSuccess",{status:!0,msg:e.data.message}),this.$emit("close"),this.$store.commit("endLoading")})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))}},mounted(){}},m=u,p=s(1656),v=(0,p.A)(m,c,d,!1,null,"0f40809c",null),h=v.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l-modal"},[s("div",{staticClass:"loading-modal w-full"},[s("div",{staticClass:"loaderssss bg-white w-2/4 mx-auto rounded px-4 lg:px-8 py-6"},[s("div",{staticClass:"flex justify-end"},[s("div",{staticClass:"top-2",on:{click:function(t){return e.$emit("close")}}},[s("font-awesome-icon",{staticClass:"text-green-600",attrs:{icon:"times-circle"}})],1)]),e._m(0),e._m(1),s("div",{staticClass:"mt-4"},[e._m(2),e._m(3),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"lg:w-full mt-2"},[s("input",{ref:"idVideo",staticClass:"fileinput hidden",attrs:{id:"idVideo",type:"file"},on:{change:e.videoUpload}})])]),s("div",{staticClass:"input rounded flex flex-col items-center py-2.5 justify-center border border-solid border-green-500"},[s("label",{staticClass:"cursor-pointer",attrs:{for:"idVideo"}},[s("svg",{staticClass:" ",attrs:{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0)"}},[s("path",{attrs:{d:"M18.9999 20H5.99992C2.87429 20.0018 0.270809 17.6038 0.0162787 14.4886C-0.238251 11.3733 1.94144 8.58453 5.02592 8.07899C6.44563 5.56188 9.11003 4.0035 11.9999 3.99993C13.8019 3.99312 15.5524 4.60129 16.9619 5.72399C18.346 6.82185 19.33 8.34497 19.7619 10.058C22.3458 10.455 24.1877 12.7755 23.9879 15.3821C23.7882 17.9887 21.6141 20.0014 18.9999 20ZM11.9999 5.99998C9.83163 6.00255 7.83259 7.17209 6.76792 9.06099L6.29992 9.89999L5.35091 10.055C3.3012 10.3984 1.85592 12.2543 2.02513 14.3257C2.19433 16.3971 3.92164 17.9938 5.99992 18H18.9999C20.5685 18.0016 21.8735 16.7946 21.9941 15.2307C22.1147 13.6667 21.0102 12.2739 19.4599 12.035L18.1439 11.835L17.8219 10.543C17.1572 7.8698 14.7545 5.99495 11.9999 5.99998ZM13.4499 16H10.5499V13H7.99992L11.9999 8.99999L15.9999 13H13.4499V16Z",fill:"#10B981"}})]),s("defs",[s("clipPath",{attrs:{id:"clip0"}},[s("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])])]),s("p",{staticClass:"inline ml-3 text-xs"},[e._v(e._s(e.idVideoName))])]),e.videoUploadFile?s("p",{staticClass:"text-red-500 text-sm mt-2"},[e._v(e._s(e.error.idVideo))]):e._e(),s("div",{staticClass:"flex justify-end"},[s("button",{staticClass:" block w-full lg:w-auto lg:float-right  mt-12 text-white px-12 py-2 rounded focus:outline-none",class:e.isUploaded?"bg-green-500":"bg-grey text-white",on:{click:function(t){e.isUploaded&&e.submit()}}},[e._v("Submit")])])])])])])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"flex justify-between p-2.5"},[s("p",{staticClass:"text-green-500 font-bold"},[e._v("Vehicle Inspection")]),s("div",{staticClass:" lg:w-3/4"},[s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2"}),s("hr",{staticClass:"mt-2 border-green-500 bg-green-500 border-2"})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-4 md:w-full"},[s("h1",[e._v("Instruction")]),s("ul",{staticClass:"list-disc pl-5"},[s("li",[e._v("Upload live video of the record on the same date the policy is bought")]),s("li",[e._v("The video should include front and back of the vehicle with plate number")]),s("li",[e._v("The video should include the vehicle number and vin number")]),s("li",[e._v("Upload live video of the record on the same date the policy is bought")]),s("li",[e._v("State Your Name, Age and Years of experience")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"text-sm font-bold"},[e._v("Upload Video of vehicle "),s("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"text-xs text-red-600"},[s("span",[e._v("Note*")]),e._v(" The video size should not be more than 8mb")])}],_=s(5353),C={components:{},data(){return{idVideoName:"",idVideo:"",error:{idVideo:""},imageUpload:{idVideoName:""},video:null,videoUploadFile:!1,isUploaded:!1}},props:["close"],computed:{...(0,_.aH)({enrollee:e=>e.enrollee})},methods:{submit(){let e=new FormData;e.append("video",this.video),e.append("user_vehicle_id",this.enrollee.user_vehicle_id),this.$emit("submit",e)},videoUpload(){const e=this.$refs.idVideo.files,t=10485760;switch(e[0].type){case"video/mp4":case"video/webm":case"video/ogg":case"video/quicktime":this.error.idVideo="",this.videoUploadFile=!1,this.isUploaded=!1;break;default:this.error.idVideo="Invalid video format",this.videoUploadFile=!0}if(!this.videoUploadFile){if(e.length>0&&(this.idVideoName=e[0].name),e[0].size>t)return this.idVideoName="",this.videoUploadFile=!0,void(this.error.idVideo="File size exceeds 8MB limit.");this.error.idVideo="",this.video=e[0],this.isUploaded=!0}}}},b=C,y=(0,p.A)(b,g,f,!1,null,"8548585c",null),w=y.exports,x={components:{Inspection:w,Contact:r.A,Cancel:h},data(){return{enrollees:[],enrollee:{},action:"",showContact:!1,showCancel:!1,dependant:{},fullname:"",page:1,perPage:10,pages:[],show:!1}},computed:{user(){return this.$store.state.user},paginatedEnrollees(){return this.paginate(this.enrollees)}},watch:{enrollees(){this.setPages()}},methods:{selectEnrollee(e){"view"==this.action?(this.$store.commit("setEnrollee",e),this.$router.push("/app/dashboard/vehicle/viewrepayment")):"claim"==this.action?(this.$store.commit("setEnrollee",e),this.$router.push("/app/dashboard/claim/vehicle")):"inspection"==this.action?(this.$store.commit("setEnrollee",e),this.show=!0):"stop"==this.action?this.cancelPolicy(e):"renew"==this.action?this.renewPolicy(e.policy.user_vehicle_id):"cert"==this.action?window.open(e.policy.certificate,"_blank"):"contact"==this.action?this.contactAdmin(e):"delete"==this.action?this.deletePolicy(e.policy.user_vehicle_id):"complete"==this.action?(this.$store.commit("saveQuote",e),this.$router.push(`/app/dashboard/buyvehicle/complete/${e.policy.user_vehicle_id}`)):"viewvehicle"==this.action&&(this.$store.commit("setVehiclePolicy",e),this.$router.push("/app/dashboard/vehicle/viewpolicy")),this.action=""},renewPolicy(e){this.$store.commit("startLoading"),l()({url:`${n.A}/vehicle/policy/renew`,data:{user_vehicle_id:e},method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:e.data.message})})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))},contactAdmin(e){this.$store.commit("setActiveModal",1),this.showContact=!0,this.enrollee=e},closeModal(){this.showContact=!1,this.action="",this.$store.commit("setActiveModal",0)},closeCancel(){this.showCancel=!1,this.action="",this.$store.commit("setActiveModal",0)},cancelPolicy(e){this.$store.commit("setActiveModal",1),this.showCancel=!0,this.enrollee=e},deletePolicy(e){this.$store.commit("startLoading"),l()({url:`${n.A}/vehicle/policy/delete`,data:{user_vehicle_id:e},method:"PATCH"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:e.data.message}),this.getPolicy()})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))},setPages(){let e=Math.ceil(this.enrollees.length/this.perPage);for(let t=1;t<=e;t++)this.pages.push(t)},paginate(e){let t=this.page,s=this.perPage,a=t*s-s,i=t*s;return e.slice(a,i)},getPolicy(){this.fullname=`${this.user.firstname} ${this.user.lastname}`,this.$store.commit("setActiveModal",0),this.$store.commit("startLoading"),l().get(`${n.A}/vehicle/policy`).then((e=>{this.enrollees=e.data.data,this.$store.commit("endLoading")})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))},async vehicleInspection(e){this.$store.commit("startLoading"),await l()({url:`${n.A}/vehicle/video/upload`,data:e,method:"POST",headers:{"Content-Type":"multipart/form-data"}}).then((e=>{this.$store.commit("endLoading"),console.log(e.data.data.transcript),this.show=!1,this.$store.commit("setSuccess",{status:!0,msg:"Success, Your video has been submitted successfully"})})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))}},mounted(){this.fullname=`${this.user.firstname} ${this.user.lastname}`,this.$store.commit("setActiveModal",0),this.$store.commit("startLoading"),l().get(`${n.A}/vehicle/policy`).then((e=>{this.enrollees=e.data.data,this.$store.commit("endLoading")})).catch((e=>{this.$store.commit("endLoading"),this.$store.dispatch("handleError",e)}))}},$=x,A=(0,p.A)($,a,i,!1,null,"382d7f58",null),P=A.exports},9190:function(e,t,s){e.exports=s.p+"img/Page-1.75b8f912.svg"},1537:function(e,t,s){e.exports=s.p+"img/vehiclecard.e4c6df96.svg"}}]);
//# sourceMappingURL=1754.401ba77a.js.map