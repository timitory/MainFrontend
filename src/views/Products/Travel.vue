<template>
  <section class=" ">
    <div class="mobileheight">
      <div class="relative">
        <div class="relative">
          <Travel class="lg:block hidden" />
          <TravelMobile class="lg:hidden block" />
          <div class="absolute h-1/2 lg:h-auto top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-5xl xl:text-7xl text-5xl font-light text-center py-4">Elevate your <span class="text-army">Travels</span> <br>
              <span class="font-bold" style="color: #3E4095">With Insurance</span>
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
                <div class="bg-gradient-to-b to-transparent gap-y-1.5 flex flex-col justify-center items-center"
                     :class="showDetails.Bronze ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full ' : ''">
                  <span class="rounded-full px-6 py-1 bg-custom text-white text-sm " style="background-color: #3E4095">FOR INDIVIDUAL</span>
                  <h1 class="text-lg font-black text-center" style="color: #3E4095">Paddy Travel</h1>
<!--                  <p class="text-sm">NGN 1,500 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Bronze ? 'block' : 'hidden'">
<!--                    <li class="text-sm">Fire: ₦400,000</li>-->
<!--                    <li class="text-sm">Burglary: ₦200,000</li>-->
<!--                    <li class="text-sm">One-off alternative rent benefit: ₦40,000</li>-->
<!--                    <li class="text-sm">2 Nights Hotel Accommodation: ₦4,000</li>-->
<!--                    <li class="text-sm">Sum Assured Limit: ₦400,000</li>-->
                  </ul>
                  <div :class="showDetails.Bronze ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/TravelInsurance.pdf" download="travel.pdf" target="_blank" rel="noopener noreferrer" >
                      <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6859 13.89C23.1396 9.5875 19.4546 6.25 15.0059 6.25C11.5609 6.25 8.56836 8.26375 7.20211 11.4375C4.51711 12.24 2.50586 14.775 2.50586 17.5C2.50586 20.9463 5.30961 23.75 8.75586 23.75H10.0059V21.25H8.75586C6.68836 21.25 5.00586 19.5675 5.00586 17.5C5.00586 15.745 6.50461 14.0538 8.34711 13.73L9.07336 13.6025L9.31336 12.905C10.1921 10.3413 12.3734 8.75 15.0059 8.75C18.4521 8.75 21.2559 11.5538 21.2559 15V16.25H22.5059C23.8846 16.25 25.0059 17.3713 25.0059 18.75C25.0059 20.1288 23.8846 21.25 22.5059 21.25H20.0059V23.75H22.5059C25.2634 23.75 27.5059 21.5075 27.5059 18.75C27.5044 17.6294 27.1273 16.5416 26.4348 15.6606C25.7423 14.7796 24.7744 14.1562 23.6859 13.89Z" fill="#00A859"/>
                        <path d="M16.2559 17.5V12.5H13.7559V17.5H10.0059L15.0059 23.75L20.0059 17.5H16.2559Z" fill="#00A859"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = false"
                   v-if="showDetails.Bronze">Collapse</p>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = true" v-else>Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"
                        style="background-color: #00A859" @click="$store.commit('setTravelModal', true); $store.commit('setTravelType', 'Individual')">
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
                <div class="bg-gradient-to-b to-transparent gap-y-1.5 flex flex-col justify-center items-center"
                     :class="showDetails.Silver ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full ' : ''">
                  <span class="rounded-full px-6 py-1 bg-custom text-white text-sm " style="background-color: #3E4095">FOR FAMILY</span>
                  <h1 class="text-lg font-black text-center" style="color: #3E4095">Paddy Travel Plus</h1>
<!--                  <p class="text-sm">NGN 1,500 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Silver ? 'block' : 'hidden'">
<!--                    <li class="text-sm">Fire: ₦800,000</li>-->
<!--                    <li class="text-sm">Burglary: ₦400,000</li>-->
<!--                    <li class="text-sm">One-off alternative rent benefit: ₦80,000</li>-->
<!--                    <li class="text-sm">2 Nights Hotel Accommodation: ₦8,000</li>-->
<!--                    <li class="text-sm">Sum Assured Limit: ₦800,000</li>-->
                  </ul>
                  <div :class="showDetails.Silver ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/TravelInsurance.pdf" download="travel.pdf" target="_blank" rel="noopener noreferrer" >
                      <svg  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.6859 13.89C23.1396 9.5875 19.4546 6.25 15.0059 6.25C11.5609 6.25 8.56836 8.26375 7.20211 11.4375C4.51711 12.24 2.50586 14.775 2.50586 17.5C2.50586 20.9463 5.30961 23.75 8.75586 23.75H10.0059V21.25H8.75586C6.68836 21.25 5.00586 19.5675 5.00586 17.5C5.00586 15.745 6.50461 14.0538 8.34711 13.73L9.07336 13.6025L9.31336 12.905C10.1921 10.3413 12.3734 8.75 15.0059 8.75C18.4521 8.75 21.2559 11.5538 21.2559 15V16.25H22.5059C23.8846 16.25 25.0059 17.3713 25.0059 18.75C25.0059 20.1288 23.8846 21.25 22.5059 21.25H20.0059V23.75H22.5059C25.2634 23.75 27.5059 21.5075 27.5059 18.75C27.5044 17.6294 27.1273 16.5416 26.4348 15.6606C25.7423 14.7796 24.7744 14.1562 23.6859 13.89Z" fill="#00A859"/>
                        <path d="M16.2559 17.5V12.5H13.7559V17.5H10.0059L15.0059 23.75L20.0059 17.5H16.2559Z" fill="#00A859"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = false"
                   v-if="showDetails.Silver">Collapse</p>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = true" v-else>Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"
                        style="background-color: #00A859" @click="$store.commit('setTravelModal', true); $store.commit('setTravelType', 'Family')">
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
    </div>
    <TravelQuote v-if="travelModal" :bookingType="travelType" v-on:show="$store.commit('setTravelModal', false)" v-on:getQuote="quote"  />
    <PreviewQuote v-if="previewQuote" :quoteDetails="quoteDetails" v-on:back="previewQuote = false; $store.commit('setTravelModal', true)" v-on:proceed="payNow" />
    <successModal v-if="success" type="Travel" v-on:continue="success = false; updateform = true" />
    <Complete type="Travel" v-if="complete" />
    <UpdateForm v-if="updateform" plans="" :quoteDetails="quoteDetails" v-on:updatePolicy="updatePolicy" />
    <Securitynotification v-if="securityNotification" />
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
  </section>
</template>

<script>
import Travel from "../../components/ProductImage/Travel.vue"
import TravelMobile from "../../components/ProductImage/travelmobileimage.vue"
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import TravelQuote from "./Modals/Travel/TravelQuote.vue";
import PreviewQuote from "./Modals/Travel/PreviewQuote.vue";
import axios from "axios";
import baseURL from "@/main";
import Paystack from "vue-paystack";
import SuccessModal from "./Modals/Success.vue";
import UpdateForm from "@/views/Products/Modals/Travel/UpdateForm.vue";
import Securitynotification from "@/views/Products/Modals/Securitynotification.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";
import Complete from "@/views/Products/Modals/Complete.vue";
import {mapState} from "vuex";
export default {
  components: {
    Complete,
    ArrowUp,
    Securitynotification, UpdateForm, SuccessModal, PreviewQuote, TravelQuote, BuyLine, Travel, TravelMobile, Paystack },
  data() {
    return {
      isDivVisible: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      complete: false,
      show: false,
      bookingType: '',
      previewQuote: false,
      mobileshow: false,
      quoteDetails: {},
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      showPaystack: false,
      travel_id: '',
      authToken: '',
      success: false,
      updateform: false,
      newUser: false,
      securityNotification: false
    }
  },
  computed: {
    ...mapState({
      travelModal: state => state.travelModal,
      travelType: state => state.travelType
    }),
  },
  mounted() {
    console.log('Component mounted!');
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
    async quote(data) {
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/allianz/travel/landing/quote`,data: data, method: 'POST'})
          .then(res => {
            console.log(res);
            // this.show = false;
            this.$store.commit('setTravelModal', false)
            this.previewQuote = true;
            this.quoteDetails = res.data.data
            this.travel_id = res.data.data.user_travel_id
            this.authToken = res.data.data.user_token
            this.$store.commit('endLoading')
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
    },
    payNow(){
      let data = {
        user_travel_id : this.travel_id,
        card_id : 0
      }
      axios({url: `${baseURL}/travel/payment/init`, data: data, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.previewQuote = false;
            this.showPaystack = true
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
      axios({url: `${baseURL}/travel/payment/landing/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            this.showPaystack = false
            this.success = true
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
    async updatePolicy(data){
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/travel/landing/update/individual`,data: data, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res => {
            console.log(res);
            this.$store.commit('endLoading')
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            if(this.newUser){
              this.updateform = false
              this.securityNotification = true
            }else {
              this.updateform = false
              this.complete = true
              // this.$router.push('/login')
            }
            // this.updateform = false
            // this.securityNotification = true
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
    }
  },
}
</script>

<style scoped>
@media screen and (max-width: 1280px) {
  .bottomstyle {
    bottom: 1rem !important;
  }
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
