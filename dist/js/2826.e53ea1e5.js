"use strict";(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[2826],{2826:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"mt-8"},[t("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[t("p",{staticClass:"font-semibold"},[e._v("Choose your preferred Insurance provider?")]),t("div",{staticClass:"mt-8 box"},e._l(e.underwriters,(function(r,s){return t("label",{key:s,staticClass:" border border-gray-300 text-lg border-solid",class:[2!==r.id&&6!==r.id?"opacity-50 hidden":"container"]},[6==r.id?t("p",{staticClass:"name"},[e._v("Allianz ")]):2==r.id?t("p",{staticClass:"name"},[e._v("AIICO Insurance")]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.underwriter,expression:"underwriter"}],attrs:{type:"radio",disabled:2!==r.id&&6!==r.id},domProps:{value:r.id,checked:e._q(e.underwriter,r.id)},on:{change:function(t){e.underwriter=r.id}}}),t("span",{staticClass:"checkmark"}),2!==r.id&&6!==r.id?t("span",{staticClass:"tooltiptext text-sm shadow"},[e._v(e._s(r.name)+" is coming soon")]):e._e()])})),0)])])},i=[],a=(t(4114),t(5353)),d=t(2505),n=t.n(d),o=t(430),u={components:{},data(){return{underwriter:""}},computed:{...(0,a.aH)({underwriters:e=>e.underwriters})},watch:{underwriter(){""!==this.underwriter&&(this.$store.commit("setUnderwriterId",this.underwriter),2===this.underwriter?this.$router.push("/app/dashboard/buytravel/2"):6===this.underwriter&&this.$router.push("/app/dashboard/buytravel/allianz"))}},methods:{getUnderwriters(){n().get(`${o.A}/underwriter`).then((e=>{console.log("res :",e),this.$store.commit("setUnderwriters",e.data.data)})).catch((e=>{this.$store.dispatch("handleError",e)}))}},mounted(){this.getUnderwriters()}},l=u,c=t(1656),h=(0,c.A)(l,s,i,!1,null,"3e273d11",null),p=h.exports}}]);
//# sourceMappingURL=2826.e53ea1e5.js.map