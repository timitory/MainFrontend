<template>
  <section class=" ">
    <div style="height: 82vh;">
      <div class="relative">
        <div class="relative">
          <Gadget class="lg:block hidden" />
          <GadgetMobile class="lg:hidden block" />
          <div class="absolute top-10 flex flex-col justify-center items-center w-full z-10">
            <h1 class="lg:text-5xl xl:text-7xl text-5xl text-center">Protect Your <span class="text-army">Gadget</span> <br> with
              <span class="font-bold" style="color: #3E4095">Insurance</span>
            </h1>
          </div>
        </div>
        <div class="absolute w-full pt-2 py-5 lg:py-10 -bottom-0 lg:bottom-0 bg-custom flex lg:flex-row flex-col justify-center lg:gap-4 z-10"
             :class="isDivVisible ? 'block expand-up gap-y-12': 'lg:hidden expand-down gap-y-6' ">
          <div class="lg:hidden flex justify-center ">
            <span @click="isDivVisible = !isDivVisible; mobileshow = !mobileshow">
              <ArrowUp :class="isDivVisible ? '' : 'upsidedown'" />
            </span>
          </div>
          <div class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Bronze ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <span class="rounded-full px-6 py-1 bg-custom text-white text-xs " style="background-color: #3E4095">FOR INDIVIDUAL</span>
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Gadget</h1>
<!--                  <p class="text-sm">As low as NGN 250 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Bronze ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦400,000</li>
                    <li class="text-sm">Burglary: ₦200,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦40,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦4,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦400,000</li>
                  </ul>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = false"
                   v-if="showDetails.Bronze">Collapse</p>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = true" v-else>Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"
                        style="background-color: #00A859" @click="show = true; policyType = 'Individual'">
                  Buy
                </button>
<!--                <p class="text-sm text-army cursor-pointer" >Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">-->
<!--                  coming soon-->
<!--                </button>-->
              </div>
            </div>
          </div>
          <div :class="mobileshow ? 'block' : 'hidden'" class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Silver ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <span class="rounded-full px-6 py-1 bg-custom text-white text-xs " style="background-color: #3E4095">FOR CORPORATE</span>
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Gadget Plus</h1>
<!--                  <p class="text-sm">As low as NGN 500 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Silver ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦800,000</li>
                    <li class="text-sm">Burglary: ₦400,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦80,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦8,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦800,000</li>
                  </ul>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = false"
                   v-if="showDetails.Silver">Collapse</p>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = true" v-else>Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"
                        style="background-color: #00A859" @click="show = true; policyType = 'Corporate'">
                  Buy
                </button>
<!--                <p class="text-sm text-army cursor-pointer" >Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">-->
<!--                  coming soon-->
<!--                </button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <successModal v-if="success" type="Gadget" v-on:continue="continueProcess" />
      <GadgetModal v-if="show"  :policyType="policyType" v-on:show="show = false" v-on:submit="buyGadget" :term="term" :data="data" v-on:terms="showTermsModal = true; show = false; term = true"/>
      <Securitynotification v-if="showSecurity" />
      <Complete type="Gadget" v-if="complete" />
      <div v-show="showPaystack">
        <Paystack
            ref="paystackbutton"
            class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
            :amount="paystackData.amount"
            :email="paystackData.email"
            :paystackkey="paystackData.public_key"
            :reference="paystackData.reference"
            :subaccount="paystackData.subaccount"
            :transactionCharge="paystackData.transactionCharge"
            :callback="verifyPayment"
            :close="closePayment"
        >
        </Paystack>
      </div>
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false; show = true"  />
      </transition>
    </div>
  </section>
</template>

<script>
import Gadget from "../../components/ProductImage/lottiegadget.vue"
import GadgetMobile from "../../components/ProductImage/gadgetmobileimage.vue"
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import GadgetModal from "./Modals/Gadget.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";
import axios from "axios";
import baseURL from "@/main";
import Paystack from "vue-paystack";
import SuccessModal from "@/views/Products/Modals/Success.vue";
import Securitynotification from "@/views/Products/Modals/Securitynotification.vue";
import TermsModal from "@/components/TermsModal.vue";
import Complete from "@/views/Products/Modals/Complete.vue";

export default {
  components: {
    Complete,
    TermsModal,
    Securitynotification, SuccessModal, Paystack, ArrowUp, BuyLine, Gadget, GadgetModal, GadgetMobile },
  data() {
    return {
      term: false,
      showTermsModal: false,
      isDivVisible: false,
      showPaystack: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      complete: false,
      show: false,
      showSecurity: false,
      mobileshow: false,
      policyType: '',
      user_gadget_id: 0,
      success: false,
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      data: {
        //policy_type: "",
        firstname: "",
        lastname: "",
        telephone: "",
        nationality: "",
        //dob: "",
        address: "",
        email: "",                             
        
        occupation: "",
        customer_id_type: "",
        customer_id_number: "",
        id_image: "",
        //tax_id: "",
        // name_of_corporation: "",
        // corporation_number: "",
        // nature_of_business: "",
        // country_of_corporation:  "",
        // utility_type: "",
        // utility_bill_image: "",
        // corporate_certificate: "",
        // registered_business_address: "",
        gadget: [
          {
            gadget_name: '',
            gadget_price: '',
          }
        ]
      },

    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        this.isDivVisible = false;
      }else {
        if (!this.isScrolling) {
          this.isScrolling = true;

          this.isDivVisible = true;
        }
        const scrollY =
            window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        this.isDivVisible = scrollY > 2;
      }
    },
    buyGadget(data){
      console.log('buydata', data)
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/gadget/policy/new`, data: data, method: 'POST',
        headers: {
          'Content-Type': this.policyType === 'Individual' ? 'application/json' : 'multipart/form-data'
        }})
          .then((res) => {
            console.log(res.data.data)
            this.show = false
            this.authToken = res.data.data.access_token
            this.user_gadget_id = res.data.data.user_gadget_id
            this.showDetails = res.data.data
            this.newUser = res.data.data.is_new_user
            this.$store.commit('endLoading')
            this.payNow()
          })
          .catch((err) => {
            this.$store.dispatch('handleError', err)
          })
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_gadget_id : this.user_gadget_id,
        card_id : 0
      }
      axios({url: `${baseURL}/gadget/payment/init`, data: data, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.showPaystack = true
            this.show = false
            console.log(res.data.data)

            this.paystackData.public_key = res.data.data.public_key
            this.paystackData.email = res.data.data.email
            this.paystackData.amount = res.data.data.amount
            this.paystackData.reference = res.data.data.reference
            this.paystackData.subaccount = res.data.data.subaccount
            this.paystackData.transactionCharge = res.data.data.flatfee

            console.log(this.paystackData)
            this.$refs.paystackbutton.payWithPaystack(this.paystackData)
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    verifyPayment(){
      axios({url: `${baseURL}/gadget/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            this.showPaystack = false
            // this.success = true
            this.continueProcess()
            // this.$router.push('/app/dashboard/managehealth')
            // this.$store.commit('setReviewmodal', true)
          })
          .catch(err=>{
            this.$store.commit('endLoading')
            this.$store.commit('setError', {status: true, msg: err.response.data.message})
          })
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    },
    continueProcess() {
      if(this.newUser){
        this.success = false;
        this.securityNotification = true
      }else {
        this.complete = true;
        // this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>

.upsidedown {
  transform: rotate(180deg);
}

.expand-up {
  animation: expandUp 0.5s ease forwards;
  padding-bottom: 4rem;
}

@keyframes expandUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.expand-down {
  animation: expandDown 0.5s ease forwards;
  padding-bottom: 4rem;
}

@keyframes expandDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>