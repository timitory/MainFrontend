"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[5722],{1354:function(e,t,s){s.d(t,{A:function(){return k}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"l-modal"},[s("div",{staticClass:"loading-modal w-full"},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.close,expression:"close"}],staticClass:"loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6"},[s("div",{staticClass:"pt-6"},[s("hr"),s("div",{staticClass:"mt-6"},[s("div",{staticClass:"relative"},[s("font-awesome-icon",{staticClass:"cursor-pointer text-red-500 text-base lg:text-xl absolute right-2 top-0",attrs:{icon:"times-circle"},on:{click:function(t){return e.$emit("close")}}}),s("div",{staticClass:"flex justify-between pt-8"},[s("p",{staticClass:"text-sm mt-4 py-2 w-full border-solid border-r cursor-pointer",class:["single"==e.show?"text-green-500 font-bold":""],on:{click:function(t){e.show="single"}}},[s("font-awesome-icon",{staticClass:"text-green-500",attrs:{icon:"user-plus"}}),e._v(" Single User ")],1),s("div",{staticClass:"flex gap-2 py-2 w-full justify-end items-end cursor-pointer",on:{click:function(t){e.show="upload"}}},[s("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M20 21H4C2.89543 21 2 20.1046 2 19V5C2 3.89543 2.89543 3 4 3H10C10.2652 3 10.5195 3.10545 10.707 3.293L12.414 5H20C21.1046 5 22 5.89543 22 7V19C22 20.1046 21.1046 21 20 21ZM4 7V19H20V7H4ZM13 17H11V14H8V12H11V9H13V12H16V14H13V17Z",fill:"#10B981"}})]),s("p",{staticClass:"text-sm",class:["upload"==e.show?"text-green-500 font-bold":""]},[e._v("Batch Upload")])])]),"single"==e.show?s("SingleUser",{on:{close:e.close}}):s("BatchUpload",{on:{close:e.close}})],1)])])])])])},i=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(t){return t.preventDefault(),e.validateForm.apply(null,arguments)}}},[s("div",{staticClass:"mt-8 "},[s("div",{staticClass:"lg:mr-3 lg:w-full"},[s("div",{staticClass:"lg:flex"},[s("div",{staticClass:"lg:w-full lg:mr-3"},[s("label",{staticClass:"text-sm text-left"},[e._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dependant.firstname,expression:"dependant.firstname"}],staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:e.dependant.firstname},on:{input:function(t){t.target.composing||e.$set(e.dependant,"firstname",t.target.value)}}})]),s("div",{staticClass:"lg:w-full lg:ml-3"},[s("label",{staticClass:"text-sm text-left"},[e._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dependant.lastname,expression:"dependant.lastname"}],staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:e.dependant.lastname},on:{input:function(t){t.target.composing||e.$set(e.dependant,"lastname",t.target.value)}}})])]),s("div",{staticClass:"mt-4"},[s("label",{staticClass:"text-sm text-left"},[e._v("Email address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dependant.email,expression:"dependant.email"}],staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"email",required:""},domProps:{value:e.dependant.email},on:{input:function(t){t.target.composing||e.$set(e.dependant,"email",t.target.value)}}})]),e.error.email?s("p",{staticClass:"text-red-500 text-sm mt-2"},[e._v("You already added a dependant with this email")]):e._e(),s("div",{staticClass:"mt-4"},[s("label",{staticClass:"text-sm text-left"},[e._v("Phone number")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dependant.phone,expression:"dependant.phone"}],staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"numeric",required:""},domProps:{value:e.dependant.phone},on:{input:function(t){t.target.composing||e.$set(e.dependant,"phone",t.target.value)}}})]),e.error.phone?s("p",{staticClass:"text-red-500 text-sm mt-2"},[e._v("Please enter a valid phone number")]):e._e()]),s("div",{staticClass:"mt-4 lg:w-full"},[s("div",{},[s("label",{staticClass:"text-sm"},[e._v("Home address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dependant.address,expression:"dependant.address"}],staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:e.dependant.address},on:{input:function(t){t.target.composing||e.$set(e.dependant,"address",t.target.value)}}})]),s("button",{staticClass:"hidden lg:inline-block w-full mt-12 text-white px-12 py-2 rounded focus:outline-none",staticStyle:{background:"#131b47"}},[e._v("Add ")]),s("button",{staticClass:"block lg:hidden w-full mt-12 text-white px-12 py-2 rounded focus:outline-none",staticStyle:{background:"#131b47"}},[e._v("Add ")])])])])},n=[],o=s(850),l=s(2505),d=s.n(l),c={data(){return{dependant:{firstname:"",lastname:"",email:"",phone:"",address:""},error:{phone:!1,email:!1}}},computed:{phone(){return this.dependant.phone},email(){return this.dependant.email}},watch:{phone(){/^\d{11}$/.test(this.dependant.phone)?this.error.phone=!1:this.error.phone=!0},email(){this.email.length>1&&(this.error.email=!1)}},methods:{validateForm(){Object.values(this.error).includes(!0)||(this.$store.commit("startLoading"),d()({url:`${o.A}/dependant/add`,data:this.dependant,method:"POST"}).then((()=>{this.$store.dispatch("getDependants").then((()=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:"Dependant added successfully"}),this.$store.dispatch("getDependants"),this.$emit("close")}))})).catch((e=>{this.$store.commit("endLoading"),"dependant already exist"==e.response.data.message?this.error.email=e.response.data.message:this.$store.commit("setError",{status:!0,msg:e.response.data.message})})))}}},u=c,m=s(1656),h=(0,m.A)(u,r,n,!1,null,null,null),p=h.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"px-4 py-6 mt-6 lg:py-10",staticStyle:{"min-height":"30vh"},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[s("p",{staticClass:"mb-4"},[e._v("For batch uploads, please upload an excel sheet using this "),s("span",[s("a",{staticClass:"text-blue-500",attrs:{href:e.templateLink,download:"batch_upload_template"}},[e._v("format")])])]),s("input",{ref:"excelfile",staticClass:"hidden",attrs:{type:"file",id:"file"},on:{change:e.upload}}),s("div",{staticClass:"input rounded relative border border-solid border-green-500"},[s("label",{staticClass:"cursor-pointer",attrs:{for:"file"}},[s("svg",{staticClass:"absolute filesvg",attrs:{width:"60",height:"60",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{"clip-path":"url(#clip0)"}},[s("path",{attrs:{d:"M18.9999 20H5.99992C2.87429 20.0018 0.270809 17.6038 0.0162787 14.4886C-0.238251 11.3733 1.94144 8.58453 5.02592 8.07899C6.44563 5.56188 9.11003 4.0035 11.9999 3.99993C13.8019 3.99312 15.5524 4.60129 16.9619 5.72399C18.346 6.82185 19.33 8.34497 19.7619 10.058C22.3458 10.455 24.1877 12.7755 23.9879 15.3821C23.7882 17.9887 21.6141 20.0014 18.9999 20ZM11.9999 5.99998C9.83163 6.00255 7.83259 7.17209 6.76792 9.06099L6.29992 9.89999L5.35091 10.055C3.3012 10.3984 1.85592 12.2543 2.02513 14.3257C2.19433 16.3971 3.92164 17.9938 5.99992 18H18.9999C20.5685 18.0016 21.8735 16.7946 21.9941 15.2307C22.1147 13.6667 21.0102 12.2739 19.4599 12.035L18.1439 11.835L17.8219 10.543C17.1572 7.8698 14.7545 5.99495 11.9999 5.99998ZM13.4499 16H10.5499V13H7.99992L11.9999 8.99999L15.9999 13H13.4499V16Z",fill:"#10B981"}})]),s("defs",[s("clipPath",{attrs:{id:"clip0"}},[s("rect",{attrs:{width:"24",height:"24",fill:"white"}})])])])]),e.fileError?s("div",{staticClass:"flex items-center justify-center p-2"},[s("p",{staticClass:"text-red-500 text-xs font-bold mr-2"},[e._v(e._s(e.filename))]),s("font-awesome-icon",{staticClass:"cursor-pointer text-red-500 text-xl",class:[e.filename.length>0?"":"opacity-0"],attrs:{icon:"times-circle"}})],1):s("div",{staticClass:"flex items-center lg:justify-center p-2 "},[s("p",{staticClass:"text-green-500 text-xs font-bold mr-2"},[e._v(e._s(e.filename))]),s("font-awesome-icon",{staticClass:"cursor-pointer text-green-500 text-xl",attrs:{icon:"check-circle"}})],1)]),e.fileError?s("p",{staticClass:"text-red-500 mt-2 font-bold",class:[e.filename.length>0?"":"opacity-0"]},[e._v("Please upload a valid excel file")]):e._e(),s("button",{staticClass:"mt-4 bg-green-500 text-white block w-full focus:outline-none px-4 py-2 rounded",class:[e.fileError?"opacity-30":""],attrs:{disabled:e.fileError}},[e._v("Submit")])])},v=[],g={data(){return{filename:"",excelfile:"",fileError:!0,templateLink:`${o.A}/dependant/template`}},methods:{upload(){switch(this.filename=this.$refs.excelfile.files[0].name,this.excelfile=this.$refs.excelfile.files[0],this.$refs.excelfile.files[0].type){case"application/vnd.ms-excel":this.fileError=!1;break;case"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":this.fileError=!1;break;case"application/excel":this.fileError=!1;break;case"application/x-excel":this.fileError=!1;break;case"application/x-msexcel":this.fileError=!1;break;default:this.fileError=!0}},submit(){this.$store.commit("startLoading");let e=new FormData;e.append("excel",this.excelfile),d().post(`${o.A}/dependant/batch/add`,e,{headers:{"Content-Type":"multipart/form-data"}}).then((()=>{this.$store.dispatch("getDependants").then((()=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:"Dependant added successfully"}),this.$emit("close")}))})).catch((e=>{this.$store.dispatch("handleError",e)}))}}},b=g,y=(0,m.A)(b,f,v,!1,null,"1586c1ba",null),C=y.exports,x=s(9499),w={mixins:[x.co],components:{SingleUser:p,BatchUpload:C},data(){return{show:"single"}},methods:{close(){this.$emit("close")}}},_=w,$=(0,m.A)(_,a,i,!1,null,"14791f8a",null),k=$.exports},4808:function(e,t,s){s.r(t),s.d(t,{default:function(){return M}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[1===e.coverform?s("div",{staticClass:"mt-8"},[s("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[s("p",{staticClass:"font-semibold"},[e._v("Who's this policy for?")]),s("form",{on:{submit:function(t){return t.preventDefault(),e.validate.apply(null,arguments)}}},[s("div",{staticClass:"mt-4 lg:flex lg:justify-between "},[s("div",{staticClass:"lg:w-full lg:mr-4"},[s("label",{staticClass:"container border border-solid",class:[e.user.includes(e.self)?"border-green-500":"border-gray-300"]},[e._v("Myself ("+e._s(e.self.firstname)+" "+e._s(e.self.lastname)+") "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"checkbox"},domProps:{value:e.self,checked:Array.isArray(e.user)?e._i(e.user,e.self)>-1:e.user},on:{change:function(t){var s=e.user,a=t.target,i=!!a.checked;if(Array.isArray(s)){var r=e.self,n=e._i(s,r);a.checked?n<0&&(e.user=s.concat([r])):n>-1&&(e.user=s.slice(0,n).concat(s.slice(n+1)))}else e.user=i}}}),s("span",{staticClass:"checkmark"})]),e.$store.state.dependants.length<1?s("p",{staticClass:"mt-6 text-sm hidden lg:block"},[e._v("Once a user has been selected, you can continue by clicking the "),s("span",{staticClass:"text-green-500"},[e._v("“Proceed for a plan”")]),e._v(" button ")]):s("p",{staticClass:"mt-6 text-sm hidden lg:block"},[e._v("You currently have more than one dependent, you can select one of them, then proceed to buy policies for them by clicking the "),s("span",{staticClass:"text-green-500"},[e._v("“Proceed for a plan”")]),e._v(" button")])]),s("div",{staticClass:"lg:w-full lg:ml-4 mt-6 lg:mt-0"},[s("div",{staticClass:"border border-solid px-2 relative",class:[e.others.hasOwnProperty("firstname")?"border-green-500":"border-gray-300"],staticStyle:{padding:"10px"}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.others,expression:"others"}],staticClass:"outline-none w-full cursor-pointer",on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.others=t.target.multiple?s:s[0]}}},[s("option",{attrs:{selected:"",disabled:""},domProps:{value:{}}},[e._v("Others (Choose dependant)")]),e._l(e.dependants,(function(t){return s("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.firstname)+" "+e._s(t.lastname))])}))],2)]),e.$store.state.dependants.length<1?s("p",{staticClass:"mt-6 text-sm lg:hidden"},[e._v("Once a user has been added, you can continue by clicking the "),s("span",{staticClass:"text-green-500"},[e._v("“Proceed for a plan”")]),e._v(" button")]):s("p",{staticClass:"mt-6 text-sm lg:hidden"},[e._v("You currently have more than one dependent, you can select one of them, then proceed to buy policies for them by clicking the "),s("span",{staticClass:"text-green-500"},[e._v("“Proceed for a plan”")]),e._v(" button")]),s("div",{staticClass:"mt-4 flex justify-between items-center"},[s("button",{staticClass:"block text-sm cursor-pointer",attrs:{type:"button"},on:{click:e.showAddDependant}},[s("font-awesome-icon",{staticClass:"text-green-500",attrs:{icon:"user-plus"}}),e._v(" Add user ")],1)])])]),s("div",{staticClass:"hidden lg:block mt-10"},[e.beneficiaryAdded?s("button",{staticClass:"block w-full text-green-500 text-right focus:outline-none"},[e._v(" Proceed for a plan "),s("font-awesome-icon",{staticClass:"text-green-500",attrs:{icon:"arrow-right"}})],1):s("p",{staticClass:"text-green-500 text-right opacity-20"},[e._v("Proceed for a plan "),s("font-awesome-icon",{staticClass:"ml-2 text-green-500",attrs:{icon:"arrow-right"}})],1)]),s("div",{staticClass:"block lg:hidden mt-10"},[e.beneficiaryAdded?s("button",{staticClass:" block text-center bg-green-500 rounded py-3 w-full text-white lg:hidden focus:outline-none"},[e._v(" Proceed for a plan "),s("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1):s("p",{staticClass:"bg-green-500 text-white py-3 text-center rounded opacity-20"},[e._v("Proceed for a plan "),s("font-awesome-icon",{staticClass:"ml-2",attrs:{icon:"arrow-right"}})],1)])]),e.addDependent?s("AddDependent",{on:{close:e.closeModal}}):e._e()],1)]):2===e.coverform?s("CoverProvider"):3===e.coverform?s("CoverForm"):e._e()],1)},i=[],r=(s(4114),s(1354)),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-8"},[s("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[s("p",{staticClass:"font-semibold"},[e._v("Choose your preferred Insurance provider?")]),s("div",{staticClass:"mt-8 box"},e._l(e.underwriters,(function(t,a){return s("label",{key:a,staticClass:"container border border-gray-300 text-lg border-solid",class:[1!==t.id?"opacity-50":""]},[1==t.id?s("p",{staticClass:"name"},[e._v("Consolidated Hallmark Insurance")]):2==t.id?s("p",{staticClass:"name"},[e._v("AIICO Insurance")]):3==t.id?s("p",{staticClass:"name"},[e._v("FBN Insurance")]):4==t.id?s("p",{staticClass:"name"},[e._v("Royal Exchange Insurance")]):e._e(),s("input",{directives:[{name:"model",rawName:"v-model",value:e.underwriter,expression:"underwriter"}],attrs:{type:"radio",disabled:1!==t.id},domProps:{value:t.id,checked:e._q(e.underwriter,t.id)},on:{change:function(s){e.underwriter=t.id}}}),s("span",{staticClass:"checkmark"}),1!==t.id?s("span",{staticClass:"tooltiptext text-sm shadow"},[e._v(e._s(t.name)+" is coming soon")]):e._e()])})),0)])])},o=[],l=s(5353),d=s(2505),c=s.n(d),u=s(850),m={components:{},data(){return{underwriter:""}},computed:{...(0,l.aH)({underwriters:e=>e.underwriters})},watch:{underwriter(){""!==this.underwriter&&(this.$store.commit("setUnderwriterId",this.underwriter),this.$store.commit("setCoverForm",3))}},methods:{getUnderwriters(){c().get(`${u.A}/underwriter`).then((e=>{this.$store.commit("setUnderwriters",e.data.data)})).catch((e=>{this.$store.dispatch("handleError",e)}))}},mounted(){0==this.underwriters.length&&this.getUnderwriters()}},h=m,p=s(1656),f=(0,p.A)(h,n,o,!1,null,"2b8444c0",null),v=f.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-6"},[s("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[s("p",{staticClass:"font-bold text-lg"},[e._v("Cover Form")]),s("hr",{staticClass:"mt-4"}),1===e.underwriterId?s("ChiForm",{on:{submitComprehensive:e.buyComprehensive,submitThirdParty:e.buyThirdParty,submitPrime:e.buyPrime}}):2===e.underwriterId?s("AIICOForm",{on:{submitComprehensive:e.buyComprehensive,submitThirdParty:e.buyThirdParty}}):e._e(),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showPaystack,expression:"showPaystack"}]},[s("Paystack",{ref:"paystackbutton",staticClass:" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none",attrs:{amount:e.paystackData.amount,email:e.paystackData.email,paystackkey:e.paystackData.public_key,reference:e.paystackData.reference,callback:e.verifyPayment,close:e.closePayment,channels:e.paystackData.channels}})],1),s("transition",{attrs:{name:"scale"}},[e.showMethodModal?s("PaymentMethod",{on:{useCard:e.payWithCard}}):e._e()],1)],1)])},b=[],y=s(8724),C=s(5429),x=s(2561),w=s(9401),_=s.n(w),$={components:{ChiForm:y.A,AIICOForm:C.A,PaymentMethod:x.A,Paystack:_()},data(){return{paystackData:{public_key:"",email:"",amount:0,reference:""},paystackChannels:["card","bank","mobile_money","bank_transfer"],showPaystack:!1,check:[],showError:!1,showTermsModal:!1,showMethodModal:!1,user_vehicle_id:0}},methods:{buyThirdParty(e){this.$store.commit("startLoading"),c()({url:`${u.A}/vehicle/thirdparty/create`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.user_vehicle_id=e.data.data.user_vehicle_id,this.initiatePayment()})).catch((e=>{this.$store.dispatch("handleError",e)}))},buyComprehensive(e){this.$store.commit("startLoading"),c()({url:`${u.A}/vehicle/comprehensive/create`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.user_vehicle_id=e.data.data.user_vehicle_id,this.initiatePayment()})).catch((e=>{this.$store.dispatch("handleError",e)}))},buyPrime(e){this.$store.commit("startLoading"),c()({url:`${u.A}/vehicle/chiprime/create`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.$router.push("/app/dashboard/managevehicle")})).catch((e=>{this.$store.dispatch("handleError",e)}))},initiatePayment(){this.showMethodModal=!0},payWithCard(e){this.showMethodModal=!1,"old"===e?this.$router.push("/app/dashboard/buyvehicle/5"):"new"===e&&this.payNow()},payNow(){this.$store.commit("startLoading");let e={user_vehicle_id:this.user_vehicle_id,card_id:0};c()({url:`${u.A}/vehicle/payment/init`,data:e,method:"POST"}).then((e=>{this.showPaystack=!0,this.paystackData=e.data.data,this.paystackData.channels=this.paystackChannels,this.$refs.paystackbutton.payWithPaystack(this.paystackData)})).catch((e=>{this.$store.dispatch("handleError",e)}))},verifyPayment(){c()({url:`${u.A}/vehicle/payment/verify`,data:{reference:this.paystackData.reference},method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:e.data.message}),this.$router.push("/app/dashboard/managevehicle")})).catch((e=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:e.response.data.message})}))},closePayment(){this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:"Payment cancelled"})}},computed:{...(0,l.aH)({vehicle_category_id:e=>e.vehicle_category_id,beneficiary:e=>e.beneficiary,underwriterId:e=>e.underwriter_id})},mounted(){}},k=$,P=(0,p.A)(k,g,b,!1,null,"21ee9dd8",null),A=P.exports,E={components:{AddDependent:r.A,CoverProvider:v,CoverForm:A},data(){return{user:[],others:{},beneficiaryAdded:!1,addDependent:!1,form:1}},watch:{user(){this.user.length>0?(this.beneficiaryAdded=!0,this.others={}):this.user.length<1&&!this.others.firstname&&(this.beneficiaryAdded=!1)},others(){this.others.firstname?(this.user=[],this.beneficiaryAdded=!0):this.user.length<1&&!this.others.firstname&&(this.beneficiaryAdded=!1)}},computed:{...(0,l.aH)({dependants:e=>e.dependants,self:e=>e.user,coverform:e=>e.coverform})},methods:{validate(){this.user.length>0?(this.$store.commit("setBeneficiary",this.user[0]),this.$store.commit("setBeneficiaryType","single"),this.$store.commit("setCoverForm",2)):(this.$store.commit("setBeneficiary",this.others),this.$store.commit("setBeneficiaryType","single"),this.$router.push("/app/dashboard/buyhealth/choose"))},buyMultiple(){this.$store.commit("setBeneficiaryType","multiple"),this.$router.push("/app/dashboard/buyhealth/choose")},showAddDependant(){this.addDependent=!0,this.$store.commit("setActiveModal",1)},closeModal(){this.addDependent=!1,this.$store.commit("setActiveModal",0)}},mounted(){this.$store.commit("setActiveModal",0)}},D=E,L=(0,p.A)(D,a,i,!1,null,null,null),M=L.exports}}]);
//# sourceMappingURL=5722.2178d0fb.js.map