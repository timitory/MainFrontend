<template>
  <section class=" ">
    <div class="mobileheight">
      <div class="relative">
        <div class="relative">
          <Vehicle/>
          <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-5xl xl:text-7xl text-5xl lg:p-0 px-0.5 text-center  lg:leading-relaxed">Renew your <span class="text-army">Vehicle</span> <br>
              <span class="font-bold" style="color: #3E4095">Insurance</span> with no Hassle
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
                     :class="showDetails.Bronze ? 'bg-customwhite pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Third Party</h1>
                  <p class="text-sm">NGN 15,000 Per Annum</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Bronze ? 'block' : 'hidden'">
                    <li class="text-sm">Pay with Ease</li>
                    <li class="text-sm">Legal Liability</li>
                    <li class="text-sm">Accidental Death</li>
                    <li class="text-sm">Up to ₦3million claim for a 3rd party damage</li>
                  </ul>
                  <div :class="showDetails.Bronze ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/thirdparty.png" download="vehicleThirdparty.png" target="_blank" rel="noopener noreferrer" >
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
                        style="background-color: #00A859" @click="show = true; $store.commit('setCoverType', 'Third Party') ">
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
                     :class="showDetails.Silver ? 'bg-customwhite pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Third Party Plus</h1>
                  <p class="text-sm">As low as NGN 25,000 Per Annum</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Silver ? 'block' : 'hidden'">


                    <li class="text-sm">Insured own damage repairs Ranging from 250k to 750k</li>
                    <li class="text-sm">Damage to third party property up to a limit of N3,000,000</li>
                    <li class="text-sm">Death of or bodily injury to third parties</li>
                    <li class="text-sm">Legal costs and expenses with written consent of insurer</li>
                  </ul>
                  <div :class="showDetails.Silver ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/vehicleCHIPRIME.png" download="vehicle.png" target="_blank" rel="noopener noreferrer" >
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
                        style="background-color: #00A859" @click="show = true; $store.commit('setCoverType', 'Chi-prime')  ">
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
                     :class="showDetails.Gold ? 'bg-customwhite pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Comprehensive</h1>
                  <p class="text-sm">Pay on a monthly basis</p>
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Gold ? 'block' : 'hidden'">


                    <li class="text-sm">Pay with ease</li>
                    <li class="text-sm">Fire Damage</li>
                    <li class="text-sm">Car Theft</li>
                    <li class="text-sm">Third party injury or death</li>
                    <li class="text-sm">Excess buyback</li>
                  </ul>
                  <div :class="showDetails.Gold ? 'block cursor-pointer' : 'hidden'">
                    <a href="/bronchure/VehicleComprehensive.png" download="VehicleComprehensive.png" target="_blank" rel="noopener noreferrer" >
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
                        style="background-color: #00A859" @click="show = true; $store.commit('setCoverType', 'Comprehensive')  ">
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
        <Autocheck v-if="show" v-on:show="show = false; $store.commit('startPlateVehicleForm', true)" v-on:cancel="show = false" />
        <VehicleForm v-if="plateVehicleForm"  v-on:show="$store.commit('startPlateVehicleForm',  false)" :coverType="coverType" v-on:getQuote="quote" />
        <Securitynotification v-if="showSecurity"  />
        <PreviewQuote v-if="previewQuote" :quoteDetails="quoteDetails" v-on:back="previewQuote = false; this.$store.commit('startPlateVehicleForm')" v-on:proceed="payNow" v-on:terms="previewQuote = false; showTermsModal = true"/>
        <transition name="scale">
          <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false; previewQuote = true "/>
        </transition>
        <successModal v-if="success" type="Vehicle" v-on:continue="success = false; updateform = true" />
        <Complete type="Vehicle" v-if="complete" />
        <UpdateForm v-if="updateform" plans="" :quoteDetails="quoteDetails" :paystack="paystackData"  :coverType="coverType"  v-on:updatePolicy="updatePolicy" />
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
      </div>
    </div>
  </section>
</template>

<script>
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import Autocheck from "@/views/Products/Modals/Vehicle/Autocheck.vue";
import VehicleForm from "@/views/Products/Modals/Vehicle/Vehicle.vue"
import Vehicle from "@/components/ProductImage/lottievehicle.vue";
import Securitynotification from "@/views/Products/Modals/Securitynotification.vue";
import LottieVehicle from "@/assets/Lottievehicle.json";
import axios from "axios";
import baseURL from "@/main";
import PreviewQuote from "@/views/Products/Modals/Vehicle/PreviewQuote.vue";
import SuccessModal from "@/views/Products/Modals/Success.vue";
import UpdateForm from "@/views/Products/Modals/Vehicle/UpdateForm.vue";
import Paystack from "vue-paystack";
import ArrowUp from "@/assets/icons/arrowup.vue";
import TermsModal from "@/components/TermsModal.vue";
import Complete from "@/views/Products/Modals/Complete.vue";
import {mapState} from "vuex";

export default {
  components: {
    Complete,
    TermsModal,
    ArrowUp,
    UpdateForm, SuccessModal, PreviewQuote, Securitynotification, Vehicle, Autocheck, BuyLine, VehicleForm, Paystack},
  data() {
    return {
      isDivVisible: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      show: false,
      vehicleForm: false,
      showSecurity:false,
      previewQuote: false,
      complete: false,
      mobileshow: false,
      quoteDetails: {},
      showPaystack: false,
      showTermsModal: false,
      vehicle_id: '',
      authToken: '',
      success: false,
      updateform: false,
      securityNotification: false,
      // coverType: '',
      defaultOptions: {
        animationData: LottieVehicle,
        renderer: 'svg',
        loop: true,
        autoplay: true
      },
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      newUser: false,
      error: {

      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.$store.commit('startPlateVehicleForm',  false)
    this.$store.commit('setCoverType', '')

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
      if (this.coverType === 'Third Party'){
        await axios({url: `${baseURL}/vehicle/thirdparty/buy`,data: data, method: 'POST'})
            .then(res => {
              // console.log(res);
              this.show = false;
              this.previewQuote = true;
              this.quoteDetails = res.data.data
              this.vehicle_id = res.data.data.user_vehicle_id
              this.authToken = res.data.data.token
              this.newUser = res.data.data.is_new_user
              this.$store.commit('endLoading')
            })
            .catch(err => {
              this.$store.dispatch('handleError', err)
              this.$store.commit('endLoading')
            })
      } else if (this.coverType === 'Comprehensive') {
        await axios({url: `${baseURL}/vehicle/comprehensive/buy`,data: data, method: 'POST'})
            .then(res => {
              // console.log(res);
              this.show = false;
              this.previewQuote = true;
              this.quoteDetails = res.data.data
              this.vehicle_id = res.data.data.user_vehicle_id
              this.authToken = res.data.data.token
              this.newUser = res.data.data.is_new_user
              this.$store.commit('endLoading')
            })
            .catch(err => {
              this.$store.dispatch('handleError', err)
              this.$store.commit('endLoading')
            })
      } else {
        await axios({url: `${baseURL}/vehicle/chiprime/buy`,data: data, method: 'POST'})
            .then(res => {
              // console.log(res);
              this.show = false;
              this.previewQuote = true;
              this.quoteDetails = res.data.data
              this.vehicle_id = res.data.data.user_vehicle_id
              this.authToken = res.data.data.token
              this.newUser = res.data.data.is_new_user
              this.$store.commit('endLoading')
            })
            .catch(err => {
              this.$store.dispatch('handleError', err)
              this.$store.commit('endLoading')
            })
      }
    },
    payNow(){
      let data = {
        user_vehicle_id : this.vehicle_id,
        card_id : 0
      }
      axios({url: `${baseURL}/vehicle/payment/init`, data: data, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.previewQuote = false;
            this.showPaystack = true
            // console.log(res.data.data)

            this.paystackData.public_key = res.data.data.public_key
            this.paystackData.email = res.data.data.email
            this.paystackData.amount = res.data.data.amount
            this.paystackData.reference = res.data.data.reference
            this.paystackData.subaccount = res.data.data.subaccount
            this.paystackData.transactionCharge = res.data.data.flatfee

            // console.log(this.paystackData)
            this.$refs.paystackbutton.payWithPaystack(this.paystackData)
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    verifyPayment(){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/vehicle/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res=>{
            this.$store.commit('endLoading')
            console.log(res)
            // this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            this.showPaystack = false
            this.success = true
          })
          .catch(err=>{
            console.log(err)
            this.success = true
          })
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    },
    async updatePolicy(data){
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/vehicle/update`,data: data, method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': 'application/json'
        }})
          .then(res => {
            // console.log(res);
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
            // // this.$store.commit('setSuccess', {status: true, msg: res.data.message})
            // this.securityNotification = true
          })
          .catch(err => {
            // this.$store.dispatch('handleError', err)
            console.log(err)
            this.$store.commit('endLoading')
          })
    },
    continueProcess() {
      if(this.newUser){
        this.updateform = false
        this.securityNotification = true
      }else {
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapState({
      plateVehicleForm: state => state.plateVehicleForm,
      coverType: state => state.coverType
    }),
  },
}
</script>

<style scoped>
.centernewshow {
  width: 96%;
  //left: 50%;
  //transform: translate(-50%, 0%);
}

@media (max-width: 912px) {
  .swis {
    //height: 100% !important;
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
