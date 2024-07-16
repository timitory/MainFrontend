<template>
  <section class=" ">
    <div class="homecontent" >
      <div class="relative">
        <div class="relative">
          <HomeContent class="lg:block hidden" />
          <HomeContentMobile class="lg:hidden block"  />
          <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-4xl xl:text-7xl text-5xl font-light text-center">Flexible <span class="text-army">Home</span> <br>
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
<!--          <div class="relative lg:my-9 xl:my-8">-->
<!--            <BuyLine/>-->
<!--            <div class="absolute -bottom-5 w-full" v-if="showDetails">-->
<!--              <div class="mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">-->
<!--                <div class="bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center">-->
<!--                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">{{ firstPlan.name }}</h1>-->
<!--                  <p class="text-sm">As low as {{ firstPlan.cost }} Per Month</p>-->
<!--                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3" v-if="showDetails[index]">-->
<!--                    <li v-for="(detail, detailIndex) in firstPlan.benefits" :key="detailIndex" class="text-sm">{{ detail.name }}</li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="toggleDetails">{{ showDetails ? 'Collapse' : 'Details' }}</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded" style="background-color: #00A859" @click="selectPlan(firstPlan.id)">-->
<!--                  Buy-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="relative lg:my-9 xl:my-8 flex justify-center lg:block" v-for="(plan, index) in plans" :key="index">-->
<!--            <BuyLine/>-->
<!--            <div class="absolute -bottom-5 w-full">-->
<!--              <div class="mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">-->
<!--                <div :class="{ 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center': showDetails[index] }">-->
<!--                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">{{ plan.name }}</h1>-->
<!--                  <p class="text-sm">As low as {{ plan.cost }} Per Month</p>-->
<!--                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3" v-if="showDetails[index]">-->
<!--                    <li v-for="(detail, detailIndex) in plan.benefits" :key="detailIndex" class="text-sm">{{ detail.name }}</li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="toggleDetails(index)">{{ showDetails[index] ? 'Collapse' : 'Details' }}</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded" style="background-color: #00A859" @click="selectPlan(plan.id)">-->
<!--                  Buy-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->


          <div class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Bronze ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Bronze</h1>
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
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859" @click="show = true">-->
<!--                  Buy-->
<!--                </button>-->
<!--                <p class="text-sm text-army cursor-pointer" >Details</p>-->
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
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Silver</h1>
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
                <!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = false"-->
                <!--                   v-if="showDetails.Silver">Collapse</p>-->
                <!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = true" v-else>Details</p>-->
                <!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
                <!--                        style="background-color: #00A859">-->
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
                     :class="showDetails.Gold ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Gold</h1>
                  <!--                  <p class="text-sm">As low as NGN 1000 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Gold ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦1,600,000</li>
                    <li class="text-sm">Burglary: ₦800,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦160,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦16,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦1,600,000</li>
                  </ul>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = false"
                   v-if="showDetails.Gold">Collapse</p>
                <!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = true" v-else>Details</p>-->
                <!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
                <!--                        style="background-color: #00A859">-->
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
    </div>
    <HomeContent2 v-if="show" v-on:show="show = false; showPaystack = true" v-on:submit="buyHomeContent" :selectedPlan="selectedPlan" />
    <successModal v-if="success" type="Home Content" v-on:continue="success = false; showSecurity = true" />

    <Securitynotification v-if="showSecurity" />
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
import HomeContent from "../../components/ProductImage/Homecontent.vue"
import HomeContentMobile from "../../components/ProductImage/homecontentmobileimage.vue"
import BuyLine from "../../components/ProductImage/BuyLine.vue";
import HomeContent2 from "./Modals/Homecontent.vue"
import Securitynotification from "./Modals/Securitynotification.vue";
import axios from "axios";
import baseURL from "@/main";
import Paystack from "vue-paystack";
import SuccessModal from "@/views/Products/Modals/Success.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";

export default {
  components: {
    ArrowUp,
    SuccessModal, Securitynotification, BuyLine, HomeContent, HomeContentMobile, HomeContent2, Paystack},
  data() {
    return {
      isDivVisible: false,
      showDetails: {
      },
      show: false,
      showSecurity: false,
      home_id: '',
      authToken: '',
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      showPaystack: false,
      success: false,
      disco: [],
      frequency: [],
      gender: [],
      idmeans: [],
      lgas: [],
      plans: [],
      selectedPlan: null,
      mobileshow: false,
    }
  },
  mounted() {
    console.log('Component mounted!');
    this.getHomeResources()
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleDetails(index) {
      this.$set(this.showDetails, index, !this.showDetails[index]);
    },
    selectPlan(plan) {
      this.selectedPlan = plan;
      this.show = true;
    },
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
        this.isDivVisible = scrollY > 1;
      }
    },
    getHomeResources(){
      axios.get(`${baseURL}/homecontent/resources`)
          .then(res => {
            console.log(res.data.data)
            this.disco = res.data.data.disco
            this.frequency = res.data.data.frequency
            this.gender = res.data.data.gender
            this.idmeans = res.data.data.idmeans
            this.lgas = res.data.data.lgas
            this.plans = res.data.data.plans
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    buyHomeContent(data){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/home/policy/new`, data: data, method: 'POST'})
          .then((res) => {
            console.log(res.data.data)
            this.show = false
            this.authToken = res.data.data.access_token
            this.home_id = res.data.data.user_home_id
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
        user_home_id : this.home_id,
        card_id : 0
      }
      axios({url: `${baseURL}/homecontent/payment/init`, data: data, method: 'POST',
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
      axios({url: `${baseURL}/homecontent/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
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
  },
  computed: {
    firstPlan() {
      return this.plans.length > 0 ? this.plans[0] : null;
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

.homecontent {
  height: 82vh;
  //overflow: hidden;
}
svg {
  width: 100%; /* Adjust size for smaller screens */
  height: 100%;
}

@media screen and (max-width: 1280px) {
  .bottomstyle {
    bottom: 1rem !important;
  }
}

@media screen and (max-width: 1024px) {
  svg {
    width: 100%; /* Adjust size for smaller screens */
    height: 100%;
  }


}

.centernewshow {
  width: 96%;
  //left: 50%;
  //transform: translate(-50%, 0%);
}

@media (max-width: 912px) {
  .homecontent {
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