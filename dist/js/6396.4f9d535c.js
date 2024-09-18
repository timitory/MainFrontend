"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[6396],{6396:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("NavBar",{}),s("section",{staticClass:"bg-white px-6 lg:pr-12 lg:pl-0"},[s("div",{staticClass:"lg:flex lg:justify-between lg:pt-12 lg:items-start flexcont"},[t._m(0),s("form",{staticClass:"w-full lg:ml-40 mt-12 lg:mt-0",on:{submit:function(e){return e.preventDefault(),t.validateForm.apply(null,arguments)}}},[s("h1",{staticClass:"text-army text-3xl lg:text-5xl font-extrabold"},[t._v("Reset Password")]),s("p",{staticClass:"mt-4 text-charcoal"},[t._v("Enter the email address you registered with")]),s("div",{staticClass:"mt-4 lg:mt-6 lg:w-4/5"},[s("label",{staticClass:"greent font-semibold"},[t._v("Email Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"mt-2 bg-white w-full py-2 px-3 border border-gray-200 rounded outline-none focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent",attrs:{type:"email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),s("p",{staticClass:"mt-2 text-red-500 "},[t._v(t._s(t.errorMsg))])]),s("button",{staticClass:"mt-10 rounded focus:outline-none bg-army py-2 w-full lg:w-4/5 text-white"},[t._v("Proceed")]),s("p",{staticClass:"mt-4 text-sm"},[t._v("Don't have an account? "),s("router-link",{staticClass:"greent font-bold",attrs:{to:"/signup"}},[t._v("Register")])],1)])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hidden mt-20 lg:mt-0 w-full lg:block "},[a("h1",{staticClass:"text-dark font-extrabold text-4xl"},[t._v("Pay as you go insurance you control.")]),a("p",{staticClass:"mt-6 text-charcoal font-medium text-base"},[t._v("You can use PaddyCover to get monthly Home Content Insurance from as low as N250 per week OR monthly Vehicle Insurance")]),a("div",{staticClass:"mt-8"},[a("img",{staticClass:"block w-full",attrs:{src:s(4848),alt:"map-img"}})])])}],r=(s(4114),s(9181)),l=s(7816),i=s(2505),n=s.n(i),m={components:{NavBar:r.A},data(){return{email:"",errorMsg:""}},methods:{validateForm(){this.$store.commit("startLoading"),n()({url:`${l.A}/password/forgot`,data:{email:this.email},method:"POST"}).then((t=>{this.$store.commit("endLoading"),"success, reset password code sent"==t.data.message&&this.$store.commit("setSuccess",{status:!0,msg:"A reset password code has been sent to your mail"}),this.$router.push("/resetpassword?email="+this.email)})).catch((t=>{this.$store.commit("endLoading"),t.response&&"user does not exist"==t.response.data.message&&(this.errorMsg=t.response.data.message)}))}},created(){1==this.$store.state.homeCollapse&&this.$store.commit("setHomeCollapse",!1)}},c=m,d=s(1656),u=(0,d.A)(c,a,o,!1,null,"a6387adc",null),g=u.exports},4848:function(t,e,s){t.exports=s.p+"img/map.1bb2f3ed.png"}}]);
//# sourceMappingURL=6396.4f9d535c.js.map