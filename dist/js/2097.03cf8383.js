(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2097],{2097:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return L}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-6 lg:pl-12 lg:pb-10"},[a("section",{staticClass:"mt-8"},[a("div",{staticClass:"flex lg:block justify-between"},[a("h1",{staticClass:"text-xl lg:text-2xl text-green-500"},[t._v("Account Setup & Settings")]),a("div",{staticClass:"lg:hidden relative ml-6",on:{click:function(e){t.showList=!t.showList}}},[a("img",{staticStyle:{width:"30px"},attrs:{src:s(1606),alt:""}}),t.showList?a("div",{staticClass:"bg-white rounded absolute py-6 px-6 -left-32 top-4 showList shadow-md",staticStyle:{width:"180px","z-index":"100000"}},[a("router-link",{staticClass:"block text-sm text-blue-500",attrs:{to:"/app/dashboard/adduser"}},[t._v("Add Dependant")]),a("router-link",{staticClass:"mt-2 block text-sm text-blue-500",attrs:{to:"/app/dashboard/viewdependants"}},[t._v("View Dependants")])],1):t._e()])]),a("div",{staticClass:"mt-4 relative flex justify-between items-start lg:pr-20"},[a("div",{},[a("p",{staticClass:" text-lg lg:mt-4 font-bold lg:text-xl"},[t._v("Welcome "+t._s(t.name)+",")]),a("p",{staticClass:"lg:mt-2"},[t._v("Below are the necessary steps to get you up to speed, please do fill them accurately.")])]),a("div",{staticClass:"absolute flex top-0 right-0 hidden lg:block"},[a("router-link",{staticClass:"text-green-500 inline underline font-semibold mr-6",attrs:{to:"/app/dashboard/transactionhistory"}},[t._v("View Transaction History")]),a("div",{staticClass:"inline relative ml-6",on:{click:function(e){t.showList=!t.showList}}},[a("img",{staticStyle:{width:"50px",display:"inline"},attrs:{src:s(1606),alt:""}}),t.showList?a("div",{staticClass:"bg-white rounded absolute py-6 px-6 -left-24 top-4 showList shadow-md",staticStyle:{width:"180px","z-index":"100000"}},[a("router-link",{staticClass:"block text-sm text-blue-500 focus:underline",attrs:{to:"/app/dashboard/adduser"}},[t._v("Add Dependant")]),a("router-link",{staticClass:"mt-2 block text-sm text-blue-500",attrs:{to:"/app/dashboard/viewdependants"}},[t._v("View Dependants")])],1):t._e()])],1)])]),a("div",{staticClass:"mt-6"},[a("p",{staticClass:"font-bold text-lg lg:text-xl"},[t._v("Bio")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.updatebio.apply(null,arguments)}}},[a("div",{staticClass:"mt-8 lg:flex justify-between formdiv"},[a("div",{staticClass:"lg:mr-3 lg:w-full "},[a("div",{staticClass:"lg:flex"},[a("div",{staticClass:"lg:w-full lg:mr-3"},[a("label",{staticClass:"text-sm"},[t._v("First Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.firstname,expression:"firstname"}],staticClass:"block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:t.firstname},on:{input:function(e){e.target.composing||(t.firstname=e.target.value)}}})]),a("div",{staticClass:"mt-4 lg:mt-0 lg:w-full lg:ml-3"},[a("label",{staticClass:"text-sm"},[t._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.lastname,expression:"lastname"}],staticClass:"block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:t.lastname},on:{input:function(e){e.target.composing||(t.lastname=e.target.value)}}})])]),a("div",{staticClass:"mt-4"},[a("label",{staticClass:"text-sm"},[t._v("Email address")]),a("p",{staticClass:"email rounded py-2 px-4"},[t._v(t._s(t.email))])]),a("div",{staticClass:"mt-4"},[a("label",{staticClass:"text-sm"},[t._v("Phone number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),a("div",{staticClass:"lg:ml-32 lg:w-full"},[a("div",{staticClass:"mt-4 lg:mt-0"},[a("label",{staticClass:"text-sm"},[t._v("Home address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"text",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})])])]),a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded hidden lg:inline-block",staticStyle:{background:"#131b47"}},[t._v("Save")]),a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded lg:hidden block w-full",staticStyle:{background:"#131b47"}},[t._v("Save")])]),a("hr",{staticClass:"mt-6"}),a("div",{staticClass:"mt-8"},[a("p",{staticClass:"font-bold text-lg lg:text-xl"},[t._v("Reset Password")]),t.showPassword?a("form",{on:{submit:function(e){return e.preventDefault(),t.resetPassword.apply(null,arguments)}}},[a("div",{staticClass:"mt-8 lg:mt-18 formdiv"},[a("div",{staticClass:"mt-4 lg:w-1/3"},[a("label",{staticClass:"text-sm"},[t._v("Current password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentpassword,expression:"currentpassword"}],ref:"confirm",staticClass:"block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent",attrs:{type:"password"},domProps:{value:t.currentpassword},on:{input:function(e){e.target.composing||(t.currentpassword=e.target.value)}}})]),a("div",{staticClass:"mt-4 lg:w-1/3"},[a("label",{staticClass:"text-sm"},[t._v("New password")]),a("div",{staticClass:"mt-2 blue-bg ring-1 ring-blue-300 w-full rounded relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newpassword,expression:"newpassword"}],ref:"password",staticClass:"w-full py-2 px-3 rounded blue-bg outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{type:"password",required:""},domProps:{value:t.newpassword},on:{input:function(e){e.target.composing||(t.newpassword=e.target.value)}}}),t.showEye?a("font-awesome-icon",{staticClass:"absolute eye text-gray-500",attrs:{icon:"eye"},on:{click:t.showePassword}}):a("font-awesome-icon",{staticClass:"absolute eye text-gray-500",attrs:{icon:"eye-slash"},on:{click:t.hidePassword}})],1)]),t.error.password?a("p",{staticClass:"text-red-500 text-sm mt-2"},[t._v("Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)")]):t._e()]),a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded hidden lg:inline-block",staticStyle:{background:"#131b47"}},[t._v("Reset password")]),a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded lg:hidden block w-full",staticStyle:{background:"#131b47"}},[t._v("Reset Password")])]):a("div",[a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded hidden lg:inline-block",staticStyle:{background:"#131b47"},on:{click:function(e){t.showPassword=!0}}},[t._v("Change password")]),a("button",{staticClass:"mt-12 text-white px-12 py-2 rounded lg:hidden block w-full",staticStyle:{background:"#131b47"},on:{click:function(e){t.showPassword=!0}}},[t._v("Change Password")])])]),a("hr",{staticClass:"mt-6"}),a("CardManagement")],1)])},r=[],o=(s(4114),s(5353)),i=s(2505),n=s.n(i),l=s(430),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("div",{staticClass:"mt-8 lg:mt-18"},[a("p",{staticClass:"font-bold text-lg lg:text-xl"},[t._v("Card Management")]),a("p",{staticClass:"mt-2"},[t._v("We would not debit your account until a policy has been issued. Your active card is where your repayments will be debitted from")]),a("div",{staticClass:"lg:w-3/4"},[a("div",{staticClass:"lg:w-1/2"},t._l(t.cards,(function(e,r){return a("div",{key:r,staticClass:"relative cursor-pointer flex justify-between p-4 border-solid  mt-4",class:["Active"==e.status?"border-green-500 border-2 active":"border border-gray-200"],on:{click:function(s){return t.showOptions(e)}}},[a("div",{staticClass:"flex w-full"},["visa "==e.card_type?a("img",{staticStyle:{width:"50px"},attrs:{src:s(8528),alt:""}}):"mastercard"==e.card_type?a("img",{staticStyle:{width:"50px"},attrs:{src:s(967),alt:""}}):"verve"==e.card_type?a("img",{staticStyle:{width:"50px"},attrs:{src:s(2307),alt:""}}):t._e(),a("p",{staticClass:"font-bold ml-4"},[a("span",{staticClass:"text-2xl"},[t._v("....")]),t._v(" "+t._s(e.last_four))])]),a("button",{staticClass:"circle bg-gray-200 cursor-pointer",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),t.removeCard(e)}}},[a("font-awesome-icon",{staticClass:"text-red-500",attrs:{icon:"trash"}})],1),a("p",{staticClass:"tooltip hidden absolute rounded shadow p-2"},[t._v("This is your active card")])])})),0),a("button",{staticClass:"addbtn mt-6 cursor-pointer px-12 py-2 rounded flex items-center gap-2",attrs:{type:"button"},on:{click:t.addCard}},[t._v("Add new card")])])])]),t.showModal?a("Modal",{attrs:{card:t.selectedCard},on:{close:t.closeModal,activated:t.newActiveCard}}):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPaystack,expression:"showPaystack"}]},[a("Paystack",{ref:"paystackbutton",staticClass:"hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none",attrs:{amount:t.paystackData.amount,email:t.paystackData.email,paystackkey:t.paystackData.public_key,reference:t.paystackData.reference,callback:t.verifyCard,close:t.cancelPayment}})],1)],1)},c=[],u=s(9401),m=s.n(u),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"l-modal"},[s("div",{staticClass:"loading-modal w-full"},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.close,expression:"close"}],staticClass:"loader bg-white w-4/5 mx-auto rounded px-4 lg:px-8 pb-6"},[s("div",{staticClass:"pt-6 relative"},[s("div",{staticClass:"py-4"},[s("h1",{staticClass:"font-bold text-xl text-center"},[t._v("Activate this card")]),s("div",{staticClass:"mt-8 md:flex md:w-3/4 md:mx-auto md:items-center gap-6"},[s("button",{staticClass:"focus:outline-none block w-full rounded border border-solid border-green-500 text-green-500 text-white md:px-3 py-2",on:{click:t.activate}},[t._v("Yes, proceed")]),s("button",{staticClass:"mt-4 md:mt-0 block w-full focus:outline-none rounded border border-solid border-red-500 text-red-500 text-white md:px-3 py-2",on:{click:t.close}},[t._v("No. cancel")])])])])])])])},h=[],f=s(9499),g={mixins:[f.co],props:["card"],data(){return{}},methods:{close(){this.$emit("close")},activate(){this.$store.commit("startLoading"),n()({url:`${l.A}/card/activate`,data:{card_id:parseInt(this.card.id)},method:"PATCH"}).then((()=>{this.$store.commit("endLoading"),this.$emit("activated")})).catch((t=>{this.$store.dispatch("handleError",t)}))}}},A=g,w=s(1656),y=(0,w.A)(A,p,h,!1,null,"1b304f43",null),b=y.exports,v={components:{Paystack:m(),Modal:b},data(){return{cards:[],showModal:!1,selectedCard:{},paystackData:{public_key:"",email:"",amount:0,reference:""},showPaystack:!1}},filters:{hide(t){return t.slice(8,12)}},methods:{addCard(){n()({url:`${l.A}/card`,method:"POST"}).then((t=>{this.showPaystack=!0,this.paystackData=t.data.data,this.$refs.paystackbutton.payWithPaystack(this.paystackData)})).catch((t=>{this.$store.dispatch("handleError",t)}))},newActiveCard(){this.closeModal(),this.$store.commit("setSuccess",{status:!0,msg:"New Card Activated!"}),this.getCards()},removeCard(t){this.$store.commit("startLoading"),n()({url:`${l.A}/card`,data:{card_id:t.id},method:"DELETE"}).then((t=>{this.$store.commit("setSuccess",{status:!0,msg:t.data.message}),this.$store.commit("endLoading"),this.getCards()})).catch((t=>{this.$store.dispatch("handleError",t)}))},showOptions(t){"Active"!=t.status&&(this.selectedCard=t,this.showModal=!0)},closeModal(){this.showModal=!1,this.selectedCard={}},cancelPayment(){this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:"Payment cancelled"})},verifyCard(){n()({url:`${l.A}/card/verify`,data:{reference:this.paystackData.reference},method:"POST"}).then((()=>{this.$store.commit("setSuccess",{status:!0,msg:"New card added and set to be active"}),this.getCards()})).catch((t=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:t.response.data.message})}))},getCards(){n().get(`${l.A}/cards`).then((t=>{this.$store.commit("endLoading"),this.cards=t.data.data})).catch((t=>{this.$store.dispatch("handleError",t)}))}},mounted(){this.getCards(),this.$store.commit("endLoading")}},C=v,x=(0,w.A)(C,d,c,!1,null,"36dad548",null),k=x.exports,P={components:{CardManagement:k},data(){return{showList:!1,currentpassword:"",newpassword:"",firstname:"",lastname:"",phone:"",email:"",address:"",showPassword:!1,error:{password:!1},showEye:!0}},computed:{...(0,o.aH)({user:t=>t.user}),name(){return this.$store.state.user.firstname}},watch:{newpassword(){/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.newpassword)?this.error.password=!1:this.error.password=!0}},methods:{showePassword(){this.$refs.password.type="text",this.$refs.confirm.type="text",this.showEye=!1},hidePassword(){this.$refs.password.type="password",this.$refs.confirm.type="password",this.showEye=!0},updatebio(){this.$store.commit("startLoading");const t={firstname:this.firstname,lastname:this.lastname,email:this.email,phone:this.phone,address:this.address};n()({url:`${l.A}/profile/update`,data:t,method:"PATCH"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message}),this.$store.commit("setUser",t.data.data),this.$store.state.addAddress&&(this.$store.commit("addAddress",!1),this.$router.push("/app/dashboard/buyvehicle/1"))})).catch((t=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:t.response.data.message})}))},resetPassword(){this.$store.commit("startLoading");const t={current_password:this.currentpassword,new_password:this.newpassword};n()({url:`${l.A}/password`,data:t,method:"PATCH"}).then((t=>{this.$store.commit("endLoading"),this.$store.commit("setSuccess",{status:!0,msg:t.data.message})})).catch((t=>{this.$store.commit("endLoading"),this.$store.commit("setError",{status:!0,msg:t.response.data.message})}))}},mounted(){this.$store.commit("changeview","settings"),this.$store.commit("setCollapse",!1),this.firstname=this.user.firstname,this.lastname=this.user.lastname,this.email=this.user.email,this.phone=this.user.phone,this.address=this.user.address}},S=P,E=(0,w.A)(S,a,r,!1,null,"f823bac2",null),L=E.exports},9401:function(t){!function(e,s){t.exports=s()}(window,(function(){return s={},t.m=e=[function(t,e,s){"use strict";s.r(e);var a,r,o,i,n,l,d,c,u,m,p;i=!(o=[]),d=l=n=null,p="function"==typeof(a={props:{embed:{type:Boolean,default:!1},paystackkey:{type:String,required:!0},email:{type:String,required:!0},firstname:{type:String,default:""},lastname:{type:String,default:""},amount:{type:Number,required:!0},reference:{type:String,required:!0},channels:{type:Array,default:function(){return["card","bank"]}},accessCode:{type:String,default:""},callback:{type:Function,required:!0,default:function(){}},close:{type:Function,required:!0,default:function(){}},metadata:{type:Object,default:function(){return{}}},currency:{type:String,default:"NGN"},plan:{type:String,default:""},quantity:{type:String,default:""},subaccount:{type:String,default:""},split:{type:Object,default:function(){return{}}},splitCode:{type:String,default:""},transactionCharge:{type:Number,default:0},bearer:{type:String,default:""}},data:function(){return{scriptLoaded:null}},created:function(){var t=this;this.scriptLoaded=new Promise((function(e){t.loadScript((function(){e()}))}))},mounted:function(){this.embed&&this.payWithPaystack()},methods:{loadScript:function(t){var e=document.createElement("script");e.src="https://js.paystack.co/v1/inline.js",document.getElementsByTagName("head")[0].appendChild(e),e.readyState?e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onreadystatechange=null,t())}:e.onload=function(){t()}},isDynamicSplit:function(){return this.split.constructor===Object&&0<Object.keys(this.split).length},payWithPaystack:function(){var t=this;this.scriptLoaded&&this.scriptLoaded.then((function(){var e={key:t.paystackkey,email:t.email,firstname:t.firstname,lastname:t.lastname,channels:t.channels,amount:t.amount,access_code:t.accessCode,ref:t.reference,callback:function(e){t.callback(e)},onClose:function(){t.close()},metadata:t.metadata,currency:t.currency,plan:t.plan,quantity:t.quantity,subaccount:t.isDynamicSplit()?"":t.subaccount,split:t.isDynamicSplit()?t.split:null,split_code:t.isDynamicSplit()?"":t.splitCode,transaction_charge:t.isDynamicSplit()?0:t.transactionCharge,bearer:t.isDynamicSplit()?"":t.bearer};t.embed&&(e.container="paystackEmbedContainer"),e=window.PaystackPop.setup(e),t.embed||e.openIframe()}))}}})?a.options:a,(r=function(){var t=this,e=t._self._c||t.$createElement;return t.embed?e("div",{attrs:{id:"paystackEmbedContainer"}}):e("button",{staticClass:"payButton",on:{click:t.payWithPaystack}},[t._t("default",[t._v("Make Payment")])],2)})&&(p.render=r,p.staticRenderFns=o,p._compiled=!0),i&&(p.functional=!0),l&&(p._scopeId="data-v-"+l),d?p._ssrRegister=u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(d)}:n&&(u=c?function(){n.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:n),u&&(p.functional?(p._injectStyles=u,m=p.render,p.render=function(t,e){return u.call(e),m(t,e)}):p.beforeCreate=(c=p.beforeCreate)?[].concat(c,u):[u]),s={exports:a,options:p};e.default=s.exports}],t.c=s,t.d=function(e,s,a){t.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:a})},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},t.t=function(e,s){if(1&s&&(e=t(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var r in e)t.d(a,r,function(t){return e[t]}.bind(null,r));return a},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.p="/dist/",t(t.s=0);function t(a){if(s[a])return s[a].exports;var r=s[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var e,s}))},1606:function(t,e,s){"use strict";t.exports=s.p+"img/Group 40.c6ee5ed7.svg"},967:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA3lBMVEUAAADoABr0mxv/XwHnABsAAAL/XAD3nRv/XgAAAgDrABr/YgDvABv7nxwAAAT1mx3EARd9UBDqDRb4gRL5jhdZAAvynR0hFAW5ARXdARkaAAQ/AQaDAxCmABW0ABXRARUPBwNOMA2PXheycRHDehXThBfcihjLgxe6eBM7IwUiAQV7Ag8wHgVySg0WDwZTAAxBLQYqAQilaRdsAA3ikBhaOgzYWQr8bwq4chX8UgiYAxH3RwvvMRMzAQj9eA+HWBJmQgz3iRPzNRBLAQwvAQcXGQebYhRTNQwrHAaPAhN84MjjAAAEs0lEQVR4nO3b+1faShAH8CTuEhKyBukVecijoICKIo9bC5ZqW1vr//8PdXlcK0lkB7w9e5f7/fzg8bQ5HmbO7OxsEiwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg/8KzLF4+rlSztVotW61clLkXvYRzy6q/bzRPTlutVrvTPDjjFtfxWf+U8+MCCwLf9xmz5c8gYIWL89VLeLfRdoVwF0L5a/7k8mr2H1o+8b+M9wp+4Nur5L9Ue89XWPy+LeN3VrnCaV7vRBJ62cBn0RQs0pCdZUGGuH/ZEiJ0Eriic607gDfyvH41VgIvs1Dtyxxct2Ml8DILg7rBlSA/+gULXs2AbTMWsKHVcF/PwIwY/a07kjfglTVFsMiCH3wQ+bUpkKXgNnRHsrV6dl0RLAohN07fJHaC1VJoGrocStmAKXJg51KZvdRNqMyC6BiZBK5OAZulYC+dulEWgiM+6o5nC15VtRCksUyBlPqsagkyCQPzKmGirgJ2u0iBTMI7QhIOzJqWuHeo7gX2p39SIJPwlzIHbv5Md1ibqRcVm+K8Gez9zkFGmYPQbeuOajMTQjO4/V0GxNVwae3rDozMm/obrYSZjHpKCEcGTc1yT1DmgI1XUpCWe4N6SrjTHRldnyn3BDu3F0EoBHdkTh08qbsBu43mgNQR7nWHRsVrm20Ky9VAmBbdE92xUZUJm0KkI86ToJ4RHOfKiNXAOWFjZLfxHOzUYsgql4Ltj2MpkOdHws4w0B0cjaeeDeK7wmwtqGdFx5RZsU9oB7n4UpDUu6MT6o6OpkdoB1+TckA4OOXFle7wSC62zsEXdR0IM261k7aFpKWQeqdeCsKMe8x/MgembI4T9daYNB7sVg62G5GIOTBjLRxvnYMvykExNKQnHm6/NxKG5SPd4ZFMCTlIODKR5oPQkBmJq3ti8pxIuYtyqjs6Go9wZrJjtw/mZyb1Uujojo6osuXZ+fP6Z/DzHBzoDo6I0BTthKZIaAemtETZEIrq03PC4ZnSDgw5OksVwqQ4jhYC6cHrnTHPHMubPWwkTwdueGTFXmz8b+JWlvCcKXI3LU3ZFQy5kzbjEW6jyEJIr+SAMCA5XZPeViwok8D8lY5A6gY/rPePXd2hkU3VdbAyL6cJ9xLDUd3qXhrzEgL3SI/bXryDQX22YM5SkJ+04Ks3yOfVQBqTB8u/bAxeKqr3htyyK6YI45Fom/P+xbMys9Xv5i2aQSZUloGQzcBA32zVamDzvpjOEKajkSkHhYhvhBezPs1ToFoKonW0b8qEGPFQU48JOcpCODGpFUYpX1wPKt/bQrEO3B+6w3gLzxoW15VCUBvKCr/Lr8mCK1qPusN4q/3Ja1/j8IPiU31+zc+mI5yknhCGYnRn4J4Y8zApJqwImYFJf3kFt66bYfz7PK4Qo8aVUWPR60rDQjEIlonw7dmX+4qFYWnlmp8HbUcIEbrLHiB/H3Xud6EGnp0fPhVqRTb7imMtW3jqnSdc070ftFuj0JUV0TrtNB7NeNVgQ6WH6XT6UFp7zVH37KzbXYa/G8sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOh+ASqjY0OeIJZ4AAAAAElFTkSuQmCC"},8528:function(t){"use strict";t.exports="data:image/png;base64,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"},2307:function(t,e,s){"use strict";t.exports=s.p+"img/vlogo.b1c8d28d.png"}}]);
//# sourceMappingURL=2097.03cf8383.js.map