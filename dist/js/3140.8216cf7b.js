(self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[]).push([[3140],{3140:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return $}});var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-6"},[i("div",{staticClass:"lg:w-3/4 lg:mx-auto"},[i("p",{staticClass:"font-bold text-lg"},[e._v("Quotation Form")]),1==e.vehicle_category_id?i("p",{staticClass:"mt-2"},[e._v("Third party Vehicle Cover")]):2==e.vehicle_category_id?i("p",{staticClass:"mt-2"},[e._v("Comprehensive Vehicle Cover")]):3==e.vehicle_category_id?i("p",{staticClass:"mt-2"},[e._v("ChiPrime Vehicle Cover")]):4==e.vehicle_category_id?i("p",{staticClass:"mt-2"},[e._v("ChiPrime Silver Vehicle Cover")]):5==e.vehicle_category_id?i("p",{staticClass:"mt-2"},[e._v("ChiPrime Gold Vehicle Cover")]):e._e(),i("hr",{staticClass:"mt-4"}),1===e.underwriterId?i("ChiForm",{on:{submitComprehensiveQuote:e.buyComprehensive,submitThirdPartyQuote:e.buyThirdParty,submitPrimeQuote:e.buyPrime}}):2===e.underwriterId?i("AIICOForm",{on:{submitComprehensiveQuote:e.buyComprehensive,submitThirdPartyQuote:e.buyThirdParty}}):e._e()],1)])},s=[],l=(i(4114),i(2505)),o=i.n(l),r=i(3717),n=i(5353),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{staticClass:"mt-6",on:{submit:function(t){return t.preventDefault(),e.validateForm.apply(null,arguments)}}},[i("p",{staticClass:"text-green-500"},[e._v("Vehicle Cover")]),i("div",{staticClass:"mt-4 lg:flex"},[i("div",{staticClass:"lg:w-3/4 lg:mr-3"},[i("div",{staticClass:"lg:flex"},[i("div",{staticClass:"lg:w-full lg:mr-3"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Make")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle,expression:"vehicle"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_make,(function(t){return i("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})),0),0===Object.keys(e.vehicle).length?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("E.g Toyota")]):e._e()]),i("div",{staticClass:"mt-4"},[e._m(0),i("div",{staticClass:"relative"},[2==e.vehicle_category_id?i("span",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.payment_frequency_id,expression:"payment_frequency_id"}],staticClass:"block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.payment_frequency_id=t.target.multiple?i:i[0]}}},e._l(e.data.payment_frequency,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name))])})),0),""==e.payment_frequency_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Frequency")]):e._e()]):i("span",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.payment_frequency_id,expression:"payment_frequency_id"}],staticClass:"block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.payment_frequency_id=t.target.multiple?i:i[0]}}},[i("option",{domProps:{value:e.data.payment_frequency[2].id}},[e._v(e._s(e.data.payment_frequency[2].name))])]),""==e.payment_frequency_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Frequency")]):e._e()])])])]),i("div",{staticClass:"lg:w-full lg:mr-3 lg:ml-3 mt-4 lg:mt-0"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Model")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_model_id,expression:"vehicle_model_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_model_id=t.target.multiple?i:i[0]}}},e._l(e.models,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),""==e.vehicle_model_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Model")]):e._e()]),2==e.vehicle_category_id?i("div",{staticClass:"mt-4"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Car Value (in Naira)")]),i("money",e._b({staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},model:{value:e.vehicle_value,callback:function(t){e.vehicle_value=t},expression:"vehicle_value"}},"money",e.money,!1)),e.error.value?i("p",{staticClass:"text-red-500 text-sm"},[e._v("Please enter a valid amount")]):e._e()],1):e._e()]),i("div",{staticClass:"lg:w-full lg:ml-3 mt-4 lg:mt-0"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Type")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_class_id,expression:"vehicle_class_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_class_id=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_class,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),""==e.vehicle_class_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Type")]):e._e()])])])]),i("div",{staticClass:"lg:w-1/4 lg:ml-3 mt-4 lg:mt-0"},[i("div",[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Usage")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_usage_id,expression:"vehicle_usage_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_usage_id=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_usage,(function(t){return i("option",{key:t.id,class:1!==e.vehicle_category_id&&2!==e.vehicle_category_id&&"Commercial"===t.name?"hidden":t.name,domProps:{value:t.id}},[e._v(e._s(1!==e.vehicle_category_id&&2!==e.vehicle_category_id&&"Commercial"===t.name?null:t.name))])})),0),""==e.vehicle_usage_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Type")]):e._e()])])])]),i("div",{staticClass:"pt-6"},[i("hr"),e._m(1),i("div",{staticClass:"lg:ml-3"}),2==e.vehicle_category_id?i("div",{staticClass:"mt-4"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Do you want flood cover?(extra charges apply)")]),i("label",{staticClass:"container mt-4"},[e._v("Yes "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.flood_cover,expression:"flood_cover"}],attrs:{type:"radio"},domProps:{value:1,checked:e._q(e.flood_cover,1)},on:{change:function(t){e.flood_cover=1}}}),i("span",{staticClass:"checkmark"})]),i("label",{staticClass:"container"},[e._v("No "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.flood_cover,expression:"flood_cover"}],attrs:{type:"radio"},domProps:{value:0,checked:e._q(e.flood_cover,0)},on:{change:function(t){e.flood_cover=0}}}),i("span",{staticClass:"checkmark"})])]):e._e()]),i("div",{staticClass:"hidden lg:flex justify-between mt-10"},[i("button",{staticClass:"block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none"},[i("router-link",{staticClass:"w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center",attrs:{to:"/app/dashboard/buyvehicle/2"}},[i("font-awesome-icon",{staticClass:"mr-8",attrs:{icon:"arrow-left"}}),e._v(" Back ")],1)],1),i("button",{staticClass:"block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"},[e._v(" Get Quote "),i("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1)]),i("div",{staticClass:"block lg:hidden mt-10"},[i("button",{staticClass:"block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"},[e._v(" Get Quote "),i("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1),i("button",{staticClass:"block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none"},[i("router-link",{staticClass:"w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center",attrs:{to:"/app/dashboard/buyvehicle/2"}},[i("font-awesome-icon",{staticClass:"mr-8",attrs:{icon:"arrow-left"}}),e._v(" Back ")],1)],1)])])},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"text-sm font-bold"},[e._v("Payment Frequency"),i("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mt-6"},[i("div",{staticClass:"mt-4"})])}],d=i(5458),v={components:{Money:d.Money},data(){return{money:{thousands:",",prefix:"₦ ",precision:0,masked:!1},vehicle:{},vehicle_make_id:"",vehicle_model_id:"",vehicle_class_id:"",vehicle_usage_id:"",vehicle_value:0,payment_frequency_id:"",models:[],flood_cover:0,error:{value:!1}}},methods:{validateForm(){if(!Object.values(this.error).includes(!0)){this.$store.commit("setPaymentFrequencyId",this.payment_frequency_id);const e={underwriter_id:this.underwriterId,enrollee_id:this.beneficiary.user_id,vehicle_make_id:this.vehicle_make_id,vehicle_model_id:this.vehicle_model_id,vehicle_class_id:this.vehicle_class_id,vehicle_usage_id:this.vehicle_usage_id,vehicle_value:100*this.vehicle_value,flood_cover:parseInt(this.flood_cover),excess_buyback:1,payment_frequency_id:this.payment_frequency_id},t={underwriter_id:this.underwriterId,enrollee_id:this.beneficiary.user_id,vehicle_make_id:this.vehicle_make_id,vehicle_model_id:this.vehicle_model_id,vehicle_class_id:this.vehicle_class_id,vehicle_usage_id:this.vehicle_usage_id,vehicle_value:0,flood_cover:parseInt(this.flood_cover),excess_buyback:1,payment_frequency_id:this.payment_frequency_id},i={underwriter_id:this.underwriterId,enrollee_id:this.beneficiary.user_id,vehicle_make_id:this.vehicle_make_id,vehicle_model_id:this.vehicle_model_id,vehicle_class_id:this.vehicle_class_id,vehicle_usage_id:this.vehicle_usage_id,vehicle_category_id:this.vehicle_category_id,payment_frequency_id:this.payment_frequency_id};1==this.vehicle_category_id?(this.$store.commit("saveVehicleQuote",t),this.$emit("submitThirdPartyQuote",t)):2==this.vehicle_category_id?(this.$store.commit("saveVehicleQuote",e),this.$emit("submitComprehensiveQuote",e)):(3==this.vehicle_category_id||4==this.vehicle_category_id||5==this.vehicle_category_id)&&(this.$store.commit("saveVehicleQuote",i),this.$emit("submitPrimeQuote",i))}},getResources(){this.$store.commit("startLoading"),o().get(`${r.A}/vehicle/resources`).then((e=>{this.$store.commit("setChiVehicleResources",e.data.data),this.$store.commit("endLoading")})).catch((e=>{this.$store.dispatch("handleError",e)}))}},watch:{vehicle(){this.vehicle.id&&(this.vehicle_make_id=this.vehicle.id,this.models=this.vehicle.models)},vehicle_make_id(){this.vehicle_model_id=""},state(){this.state.id&&(this.state_id=this.state.id,this.stateModels=this.state.models)},state_id(){this.lga_id=""},vehicle_value(){/^\d*$/.test(this.vehicle_value)?this.error.value=!1:this.error.value=!0},bvn(){/^\d{11}$/.test(this.bvn)?this.error.bvn=!1:this.error.bvn=!0}},computed:{...(0,n.aH)({vehicle_category_id:e=>e.vehicle_category_id,beneficiary:e=>e.beneficiary,underwriterId:e=>e.underwriter_id,data:e=>e.vehicle.chiResources})},mounted(){0==Object.keys(this.data).length&&this.getResources(),console.log(1===this.vehicle_category_id||2===this.vehicle_category_id)}},m=v,_=i(1656),h=(0,_.A)(m,c,u,!1,null,"1c9920f6",null),f=h.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{staticClass:"mt-6",on:{submit:function(t){return t.preventDefault(),e.validateForm.apply(null,arguments)}}},[i("p",{staticClass:"text-green-500"},[e._v("Vehicle Cover")]),i("div",{staticClass:"mt-4 lg:flex"},[i("div",{staticClass:"lg:w-3/4 lg:mr-3"},[i("div",{staticClass:"lg:flex"},[i("div",{staticClass:"lg:w-full lg:mr-3"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Make")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle,expression:"vehicle"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_make,(function(t){return i("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})),0),0===Object.keys(e.vehicle).length?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("E.g Toyota")]):e._e()]),i("div",{staticClass:"mt-4"},[e._m(0),i("div",{staticClass:"relative"},[1!==e.vehicle_category_id?i("span",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.payment_frequency_id,expression:"payment_frequency_id"}],staticClass:"block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.payment_frequency_id=t.target.multiple?i:i[0]}}},e._l(e.data.payment_frequency,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(" "+e._s(t.name))])})),0),""==e.payment_frequency_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Frequency")]):e._e()]):i("span",[i("select",{directives:[{name:"model",rawName:"v-model",value:e.payment_frequency_id,expression:"payment_frequency_id"}],staticClass:"block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.payment_frequency_id=t.target.multiple?i:i[0]}}},[i("option",{domProps:{value:e.data.payment_frequency[2].id}},[e._v(e._s(e.data.payment_frequency[2].name))])]),""==e.payment_frequency_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Frequency")]):e._e()])])])]),i("div",{staticClass:"lg:w-full lg:mr-3 lg:ml-3 mt-4 lg:mt-0"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Model")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_model_id,expression:"vehicle_model_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_model_id=t.target.multiple?i:i[0]}}},e._l(e.models,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),""==e.vehicle_model_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Model")]):e._e()]),2===e.vehicle_category_id?i("div",{staticClass:"mt-4"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Car Value (in Naira)")]),i("money",e._b({staticClass:"block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},model:{value:e.vehicle_value,callback:function(t){e.vehicle_value=t},expression:"vehicle_value"}},"money",e.money,!1)),e.error.value?i("p",{staticClass:"text-red-500 text-sm"},[e._v("Please enter a valid amount")]):e._e()],1):e._e()]),i("div",{staticClass:"lg:w-full lg:ml-3 mt-4 lg:mt-0"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Type")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_class_id,expression:"vehicle_class_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_class_id=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_class,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),""==e.vehicle_class_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Type")]):e._e()])])]),i("div",{staticClass:"mt-4 lg:flex"})]),i("div",{staticClass:"lg:w-1/4 lg:ml-3 mt-4 lg:mt-0"},[i("div",[i("label",{staticClass:"text-sm font-bold"},[e._v("Vehicle Usage")]),i("div",{staticClass:"relative"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.vehicle_usage_id,expression:"vehicle_usage_id"}],staticClass:"rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",attrs:{required:""},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.vehicle_usage_id=t.target.multiple?i:i[0]}}},e._l(e.data.vehicle_usage,(function(t){return i("option",{key:t.id,domProps:{value:t.id}},[e._v(e._s(t.name))])})),0),""==e.vehicle_usage_id?i("p",{staticClass:"absolute text-gray-500",staticStyle:{top:"8px",left:"8px"}},[e._v("Select Type")]):e._e()])])])]),i("div",{staticClass:"pt-6"},[i("hr"),i("div",{staticClass:"mt-6"},[i("div",{staticClass:"mt-8 lg:flex justify-between"},[i("div",{staticClass:"mr-3"},[i("div",{staticClass:"mt-4"}),i("div",{staticClass:"lg:ml-3"},[1!==e.vehicle_category_id?i("div",{staticClass:"mt-4"},[i("label",{staticClass:"text-sm font-bold"},[e._v("Do you want flood cover?(extra charges apply)")]),i("label",{staticClass:"container mt-4"},[e._v("Yes "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.flood_cover,expression:"flood_cover"}],attrs:{type:"radio"},domProps:{value:1,checked:e._q(e.flood_cover,1)},on:{change:function(t){e.flood_cover=1}}}),i("span",{staticClass:"checkmark"})]),i("label",{staticClass:"container"},[e._v("No "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.flood_cover,expression:"flood_cover"}],attrs:{type:"radio"},domProps:{value:0,checked:e._q(e.flood_cover,0)},on:{change:function(t){e.flood_cover=0}}}),i("span",{staticClass:"checkmark"})])]):e._e()])])])])]),i("div",{staticClass:"hidden lg:flex justify-between mt-10"},[i("button",{staticClass:"block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none"},[i("router-link",{staticClass:"w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center",attrs:{to:"/app/dashboard/buyvehicle/2"}},[i("font-awesome-icon",{staticClass:"mr-8",attrs:{icon:"arrow-left"}}),e._v(" Back ")],1)],1),i("button",{staticClass:"block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"},[e._v(" Get Quote "),i("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1)]),i("div",{staticClass:"block lg:hidden mt-10"},[i("button",{staticClass:"block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none"},[e._v(" Get Quote "),i("font-awesome-icon",{staticClass:"ml-3",attrs:{icon:"arrow-right"}})],1),i("button",{staticClass:"block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none"},[i("router-link",{staticClass:"w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center",attrs:{to:"/app/dashboard/buyvehicle/2"}},[i("font-awesome-icon",{staticClass:"mr-8",attrs:{icon:"arrow-left"}}),e._v(" Back ")],1)],1)])])},g=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("label",{staticClass:"text-sm font-bold"},[e._v("Payment Frequency"),i("span",{staticClass:"text-red-500"},[e._v("*")])])}],y={components:{Money:d.Money},data(){return{money:{thousands:",",prefix:"₦ ",precision:0,masked:!1},vehicle:{},vehicle_make_id:"",vehicle_model_id:"",vehicle_class_id:"",vehicle_usage_id:"",payment_frequency_id:"",vehicle_value:0,models:[],flood_cover:0,error:{value:!1}}},methods:{idUpload(){this.idImageName=this.$refs.idImage.files[0].name,this.error.idImage=!1;let e=this.$refs.idImage.files[0],t=new FileReader,i=this;t.onload=function(e){i.idImage=e.target.result},t.readAsDataURL(e)},regUpload(){this.regImageName=this.$refs.regImage.files[0].name,this.error.regImage=!1;let e=this.$refs.regImage.files[0],t=new FileReader,i=this;t.onload=function(e){i.regImage=e.target.result},t.readAsDataURL(e)},validateForm(){if(!Object.values(this.error).includes(!0)){this.$store.commit("setPaymentFrequencyId",this.payment_frequency_id);const e={underwriter_id:this.underwriterId,enrollee_id:this.beneficiary.user_id,address:this.beneficiary.address,vehicle_make_id:this.vehicle_make_id,vehicle_model_id:this.vehicle_model_id,vehicle_class_id:this.vehicle_class_id,vehicle_usage_id:this.vehicle_usage_id,vehicle_value:0,flood_cover:parseInt(this.flood_cover),excess_buyback:1,payment_frequency_id:this.payment_frequency_id};1==this.vehicle_category_id?(this.$store.commit("saveVehicleQuote",e),this.$emit("submitThirdPartyQuote",e)):(this.$store.commit("saveVehicleQuote",e),this.$emit("submitComprehensiveQuote",e))}},getResources(){this.$store.commit("startLoading"),o().get(`${r.A}/vehicle/resources/aiico`).then((e=>{this.$store.commit("setAiccoVehicleResources",e.data.data),this.$store.commit("endLoading")})).catch((e=>{this.$store.dispatch("handleError",e)}))}},watch:{vehicle(){this.vehicle.id&&(this.vehicle_make_id=this.vehicle.id,this.models=this.vehicle.models)},vehicle_make_id(){this.vehicle_model_id=""},vehicle_value(){/^\d*$/.test(this.vehicle_value)?this.error.value=!1:this.error.value=!0},bvn(){/^\d{11}$/.test(this.bvn)?this.error.bvn=!1:this.error.bvn=!0}},computed:{...(0,n.aH)({vehicle_category_id:e=>e.vehicle_category_id,beneficiary:e=>e.beneficiary,underwriterId:e=>e.underwriter_id,data:e=>e.vehicle.aiicoResources})},mounted(){0==Object.keys(this.data).length&&this.getResources()}},b=y,x=(0,_.A)(b,p,g,!1,null,null,null),C=x.exports,w={components:{ChiForm:f,AIICOForm:C},data(){return{}},methods:{buyThirdParty(e){this.$store.commit("startLoading"),o()({url:`${r.A}/vehicle/thirdparty/quote`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.$router.push("/app/dashboard/buyvehicle/4")})).catch((e=>{this.$store.dispatch("handleError",e)}))},buyComprehensive(e){this.$store.commit("startLoading"),o()({url:`${r.A}/vehicle/comprehensive/quote`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.$router.push("/app/dashboard/buyvehicle/4")})).catch((e=>{this.$store.dispatch("handleError",e)}))},buyPrime(e){this.$store.commit("startLoading"),o()({url:`${r.A}/vehicle/chiprime/quote`,data:e,method:"POST"}).then((e=>{this.$store.commit("endLoading"),this.$store.commit("saveQuote",e.data.data),this.$router.push("/app/dashboard/buyvehicle/4")})).catch((e=>{this.$store.dispatch("handleError",e)}))}},computed:{...(0,n.aH)({vehicle_category_id:e=>e.vehicle_category_id,beneficiary:e=>e.beneficiary,underwriterId:e=>e.underwriter_id})},mounted(){}},k=w,q=(0,_.A)(k,a,s,!1,null,"528c4f7e",null),$=q.exports},5458:function(e){(function(t,i){e.exports=i()})(0,(function(){return function(e){function t(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,i){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,i){"use strict";var a=i(2),s=i(5),l=i(0);t.a=function(e,t){if(t.value){var o=i.i(s.a)(l.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var r=e.getElementsByTagName("input");1!==r.length||(e=r[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=i.i(a.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),i.i(a.b)(e,t),e.dispatchEvent(i.i(a.c)("change"))},e.onfocus=function(){i.i(a.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(i.i(a.c)("input"))}}},function(e,t,i){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var i=e.indexOf("-")>=0?"-":"",a=l(e),s=n(a,t.precision),r=d(s).split("."),v=r[0],m=r[1];return v=c(v,t.thousands),t.prefix+i+u(v,m,t.decimal)+t.suffix}function s(e,t){var i=e.indexOf("-")>=0?-1:1,a=l(e),s=n(a,t);return parseFloat(s)*i}function l(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return r(0,e,20)}function r(e,t,i){return Math.max(e,Math.min(t,i))}function n(e,t){var i=Math.pow(10,t);return(parseFloat(e)/i).toFixed(o(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function u(e,t,i){return t?e+i+t:e}function d(e){return e?e.toString():""}function v(e,t){var i=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(i(),setTimeout(i,1))}function m(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var _=i(0);i.d(t,"a",(function(){return a})),i.d(t,"d",(function(){return s})),i.d(t,"b",(function(){return v})),i.d(t,"c",(function(){return m}))},function(e,t,i){"use strict";function a(e,t){t&&Object.keys(t).map((function(e){r.a[e]=t[e]})),e.directive("money",o.a),e.component("money",l.a)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(6),l=i.n(s),o=i(1),r=i(0);i.d(t,"Money",(function(){return l.a})),i.d(t,"VMoney",(function(){return o.a})),i.d(t,"options",(function(){return r.a})),i.d(t,"VERSION",(function(){return n}));var n="0.8.1";t.default=a,"undefined"!=typeof window&&window.Vue&&window.Vue.use(a)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(1),s=i(0),l=i(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return s.a.precision}},decimal:{type:String,default:function(){return s.a.decimal}},thousands:{type:String,default:function(){return s.a.thousands}},prefix:{type:String,default:function(){return s.a.prefix}},suffix:{type:String,default:function(){return s.a.suffix}}},directives:{money:a.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var a=i.i(l.a)(e,this.$props);a!==this.formattedValue&&(this.formattedValue=a)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:i.i(l.d)(e.target.value,this.precision))}}}},function(e,t,i){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce((function(i,a){return i[a]=void 0===t[a]?e[a]:t[a],i}),{})}},function(e,t,i){var a=i(7)(i(4),i(8),null,null);e.exports=a.exports},function(e,t){e.exports=function(e,t,i,a){var s,l=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(s=e,l=e.default);var r="function"==typeof l?l.options:l;if(t&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns),i&&(r._scopeId=i),a){var n=r.computed||(r.computed={});Object.keys(a).forEach((function(e){var t=a[e];n[e]=function(){return t}}))}return{esModule:s,exports:l,options:r}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,i){e.exports=i(3)}])}))}}]);
//# sourceMappingURL=3140.8216cf7b.js.map