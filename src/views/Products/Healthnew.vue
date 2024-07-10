<template>
  <section class=" ">
    <div class="mobileheight">
      <div class="relative">
        <div class="relative">
          <Health class="lg:block hidden" />
          <HealthMobile class="lg:hidden block" />
          <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-5xl xl:text-7xl text-5xl font-light text-center">
              Get Quality
              <span class="text-army">Health</span> <br>
              <span class="font-bold"  style="color: #3E4095">Insurance</span>
            </h1>
          </div>
        </div>
        <div class="absolute w-full pt-2 py-5 lg:py-10 -bottom-0 lg:bottom-0 bg-custom flex lg:flex-row flex-col justify-center gap-y-12 lg:gap-4 z-10"
             :class="isDivVisible ? 'block expand-up': 'lg:hidden expand-down ' ">
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
                     :class="showDetails.Gold ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <p class="rounded-full text-white text-xs uppercase text-center py-1 my-1.5 px-10" style="background-color: #3E4095">For Sapphire</p>
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Sapphire</h1>
                  <p class="text-sm">As low as NGN 1,800 Per Month</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Gold ? 'block' : 'hidden'">
                    <li class="text-sm">Minor Surgeries</li>
                    <li class="text-sm">Accident and emergency care</li>
                    <li class="text-sm">Ambulance services</li>
                    <li class="text-sm">Diagnostics and imaging</li>
                    <li class="text-sm">Primary dental care</li>
                  </ul>
                  <div :class="showDetails.Gold ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/PaddycoverHealth.pdf" download="health.pdf" target="_blank" rel="noopener noreferrer" >
                      <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6859 13.89C23.1396 9.5875 19.4546 6.25 15.0059 6.25C11.5609 6.25 8.56836 8.26375 7.20211 11.4375C4.51711 12.24 2.50586 14.775 2.50586 17.5C2.50586 20.9463 5.30961 23.75 8.75586 23.75H10.0059V21.25H8.75586C6.68836 21.25 5.00586 19.5675 5.00586 17.5C5.00586 15.745 6.50461 14.0538 8.34711 13.73L9.07336 13.6025L9.31336 12.905C10.1921 10.3413 12.3734 8.75 15.0059 8.75C18.4521 8.75 21.2559 11.5538 21.2559 15V16.25H22.5059C23.8846 16.25 25.0059 17.3713 25.0059 18.75C25.0059 20.1288 23.8846 21.25 22.5059 21.25H20.0059V23.75H22.5059C25.2634 23.75 27.5059 21.5075 27.5059 18.75C27.5044 17.6294 27.1273 16.5416 26.4348 15.6606C25.7423 14.7796 24.7744 14.1562 23.6859 13.89Z" fill="#00A859"/>
                        <path d="M16.2559 17.5V12.5H13.7559V17.5H10.0059L15.0059 23.75L20.0059 17.5H16.2559Z" fill="#00A859"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = false"
                   v-if="showDetails.Gold">Collapse</p>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = true" v-else>Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"
                        style="background-color: #00A859" @click="plan('sapphire')">
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
                     :class="showDetails.Bronze ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <p class="rounded-full text-white text-xs uppercase text-center py-1 my-1.5 px-10" style="background-color: #3E4095">For Individual</p>
                  <h1 class="text-xl font-bold text-center px-10" style="color: #3E4095">Paddy Individual</h1>
                  <p class="text-sm">As low as NGN 3,500 Per Month</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Bronze ? 'block' : 'hidden'">
                    <li class="text-sm">Minor Surgeries</li>
                    <li class="text-sm">Accident and emergency care</li>
                    <li class="text-sm">Ambulance services</li>
                    <li class="text-sm">Diagnostics and imaging</li>
                    <li class="text-sm">Primary dental care</li>
                  </ul>
                  <div :class="showDetails.Bronze ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/PaddycoverHealth.pdf" download="health.pdf" target="_blank" rel="noopener noreferrer" >
                      <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6859 13.89C23.1396 9.5875 19.4546 6.25 15.0059 6.25C11.5609 6.25 8.56836 8.26375 7.20211 11.4375C4.51711 12.24 2.50586 14.775 2.50586 17.5C2.50586 20.9463 5.30961 23.75 8.75586 23.75H10.0059V21.25H8.75586C6.68836 21.25 5.00586 19.5675 5.00586 17.5C5.00586 15.745 6.50461 14.0538 8.34711 13.73L9.07336 13.6025L9.31336 12.905C10.1921 10.3413 12.3734 8.75 15.0059 8.75C18.4521 8.75 21.2559 11.5538 21.2559 15V16.25H22.5059C23.8846 16.25 25.0059 17.3713 25.0059 18.75C25.0059 20.1288 23.8846 21.25 22.5059 21.25H20.0059V23.75H22.5059C25.2634 23.75 27.5059 21.5075 27.5059 18.75C27.5044 17.6294 27.1273 16.5416 26.4348 15.6606C25.7423 14.7796 24.7744 14.1562 23.6859 13.89Z" fill="#00A859"/>
                        <path d="M16.2559 17.5V12.5H13.7559V17.5H10.0059L15.0059 23.75L20.0059 17.5H16.2559Z" fill="#00A859"/>
                      </svg>
                    </a>
                  </div>
                </div>
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = false"-->
<!--                   v-if="showDetails.Bronze">Collapse</p>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859" @click="plan('individual')">-->
<!--                  Buy-->
<!--                </button>-->
                <p class="text-sm text-army cursor-pointer" >Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">
                  coming soon
                </button>
              </div>
            </div>
          </div>
          <div :class="mobileshow ? 'block' : 'hidden'" class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Silver ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <p class="rounded-full text-white text-xs uppercase text-center py-1 my-1.5 px-10" style="background-color: #3E4095">For Family</p>
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Family</h1>
                  <p class="text-sm">As low as NGN 15,500 Per Month</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Silver ? 'block' : 'hidden'">
                    <li class="text-sm">General and specialist consultation</li>
                    <li class="text-sm">Hospital ward care – Standard ward</li>
                    <li class="text-sm">Physiotherapy Sessions (5 sessions)</li>
                    <li class="text-sm">Fertility Services</li>
                    <li class="text-sm">Surgical services up to N250,000</li>
                  </ul>
                  <div :class="showDetails.Silver ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/PaddycoverHealth.pdf" download="health.pdf" target="_blank" rel="noopener noreferrer" >
                      <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6859 13.89C23.1396 9.5875 19.4546 6.25 15.0059 6.25C11.5609 6.25 8.56836 8.26375 7.20211 11.4375C4.51711 12.24 2.50586 14.775 2.50586 17.5C2.50586 20.9463 5.30961 23.75 8.75586 23.75H10.0059V21.25H8.75586C6.68836 21.25 5.00586 19.5675 5.00586 17.5C5.00586 15.745 6.50461 14.0538 8.34711 13.73L9.07336 13.6025L9.31336 12.905C10.1921 10.3413 12.3734 8.75 15.0059 8.75C18.4521 8.75 21.2559 11.5538 21.2559 15V16.25H22.5059C23.8846 16.25 25.0059 17.3713 25.0059 18.75C25.0059 20.1288 23.8846 21.25 22.5059 21.25H20.0059V23.75H22.5059C25.2634 23.75 27.5059 21.5075 27.5059 18.75C27.5044 17.6294 27.1273 16.5416 26.4348 15.6606C25.7423 14.7796 24.7744 14.1562 23.6859 13.89Z" fill="#00A859"/>
                        <path d="M16.2559 17.5V12.5H13.7559V17.5H10.0059L15.0059 23.75L20.0059 17.5H16.2559Z" fill="#00A859"/>
                      </svg>
                    </a>
                  </div>
                </div>
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = false"-->
<!--                   v-if="showDetails.Silver">Collapse</p>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859" @click="plan('family')">-->
<!--                  Buy-->
<!--                </button>-->
                <p class="text-sm text-army cursor-pointer" >Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">
                  coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HealthModal v-if="planType" :plans="plans" v-on:show="$store.commit('setPlansTypes', false)" v-on:Submit="buyHMO" v-on:Term = "showTermsModal = true; show = false"  :data="data"/>
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
      <Securitynotification v-if="securityNotification" />
      <successModal v-if="success" type="Health" v-on:continue="continueProcess" />
      <Complete type="Health" v-if="complete" />
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false; show = true"/>
      </transition>
    </div>
  </section>
</template>

<script>
import HealthModal from "./Modals/Health.vue"
import Health from "@/components/ProductImage/Health.vue";
import HealthMobile from "@/components/ProductImage/healthmobileimage.vue";
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import axios from "axios";
import baseURL from "@/main";
import Paystack from "vue-paystack";
import Securitynotification from "@/views/Products/Modals/Securitynotification.vue";
import SuccessModal from "@/views/Products/Modals/Success.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";
import TermsModal from "@/components/TermsModal.vue";
import Complete from "@/views/Products/Modals/Complete.vue";
import {mapState} from "vuex";

export default {
  components: {
    Complete,
    TermsModal,
    ArrowUp, SuccessModal, Securitynotification, BuyLine, Health, HealthMobile , HealthModal, Paystack },
  data() {
    return {
      isDivVisible: false,
      showTermsModal: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      complete: false,
      show: false,
      showSecurity: false,
      mobileshow: false,
      securityNotification: false,
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      showPaystack: false,
      health_id: '',
      authToken: '',
      newUser: false,
      success: false,
      data: {
        "title": "",
        "lastname": "",
        "firstname": "",
        "underwriter_id": 1,
        "passport": "",
        "plan_id": "",
        "email": "",
        "phone": "",
        "dob": "",
        "gender": null,
        "marital_status": "",
        "occupation": "",
        "religion": "",
        "blood_group": "",
        "genotype": "",
        "company": "",
        "nationality": "",
        "country": "Nigeria",
        "state_of_origin": null,
        "lga_of_origin": null,
        "payment_frequency": null,
        "state_of_residence": null,
        "lga_of_residence": null,
        "address": "",
        "medical_history": "nill",
        "hospital_id": ""
      },

    }
  },
  computed: {
    ...mapState({
      plans: state => state.plans,
      planType: state => state.planType
    }),
  },
  mounted() {
    this.Category()
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
          console.log('Scroll initiated!');
          this.isScrolling = true;

          this.isDivVisible = true;
        }
        const scrollY =
            window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        console.log('Scroll Position:', scrollY);
        this.isDivVisible = scrollY > 2;
      }
    },
    async Category() {
      await axios({url: `${baseURL}/hmo/plans`, method: 'GET'})
          .then(res => {
            console.log(res.data.data);
            let plan = res.data.data
            console.log(plan)
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
    },
    async plan(type) {
      this.$store.commit('setPlansTypes', true)
      await axios({url: `${baseURL}/hmo/plans`, method: 'GET'})
          .then(res => {
            console.log(res.data.data);
            let plan = res.data.data
            const filteredObjects = plan.filter(obj =>
                obj.Name.toLowerCase().includes(type)
            );
            this.$store.commit('setPlans', filteredObjects)
            // this.plans = filteredObjects;
            console.log(filteredObjects);
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
    },
    buyHMO(data){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/hmo/policy/new`, data: data, method: 'POST'})
          .then((res) => {
            console.log(res.data.data)
            this.show = false
            this.authToken = res.data.data.access_token
            this.health_id = res.data.data.user_hmo_id
            this.newUser = res.data.data.is_new_user
            this.$store.commit('setUserHealthId', this.health_id)
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
        user_hmo_id : this.health_id,
        card_id : 0
      }
      axios({url: `${baseURL}/hmo/payment/init`, data: data, method: 'POST',
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
      axios({url: `${baseURL}/hmo/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            this.continueProcess()            // this.$router.push('/app/dashboard/managehealth')
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
  },
}
</script>

<style scoped>
.arrow1 {
  animation-name: arrow;
  animation-duration: 1s;
  //animation-delay: 0;
  animation-iteration-count: infinite;
}

@keyframes arrow {
  0% {
    transform: translateX(-2px);
    opacity: 0
  }

  80% {
    transform: translateX(2px);
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(0px);
  }
}

.scroll-show-div {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  display: none;
}

.scroll-show-div.show {
  display: block;
}


@media screen and (max-width: 1280px) {
  .bottomstyle {
    bottom: 1rem !important;
  }
}

.centernewshow {
  width: 96%;
  //left: 50%;
  //transform: translate(-50%, 0%);
}

.mobileheight {
  height: 82vh;
}

@media (max-width: 912px) {
  .mobileheight {
    height: 95vh;
  }

}

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