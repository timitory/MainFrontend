<template>
  <section class=" ">
    <div class="homecontent" >
      <div class="relative">
        <div class="relative">
          <Pet class="lg:block hidden"/>
          <PetMobile class="lg:hidden block" />
          <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-5xl xl:text-7xl text-5xl font-light text-center">Your <span class="text-army">Pets Need</span> <br>
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
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Pet</h1>
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
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = false"-->
<!--                   v-if="showDetails.Bronze">Collapse</p>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859" @click="show = true; petCategory = 1;">-->
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
                  <span class="rounded-full px-6 py-1 bg-custom text-white text-xs " style="background-color: #3E4095">FOR CORPORATE</span>
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Paddy Pet Plus</h1>
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
<!--                        style="background-color: #00A859"  @click="show = true; petCategory = 2; ">-->
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
    <PetForm v-if="show" v-on:show="show = false;" v-on:submit="buyPet"  :selected-plan="petCategory" :frequency='frequency'/>
    <successModal v-if="success" type="Pet" v-on:continue="success = false; updateform = true" />
    <PreviewQuote v-if="previewQuote" quote-details="showDetails" />
    <UpdateForm v-if="updateform" v-on:show="updateform = false;" v-on:submit="updatePolicy" :quote-details="showDetails" />
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
import Pet from "../../components/ProductImage/Pet.vue"
import PetMobile from "@/components/ProductImage/petmobileimage.vue";
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";
import PetForm from "@/views/Products/Modals/Pet/Pet.vue";
import PreviewQuote from "@/views/Products/Modals/Pet/PreviewQuote.vue";
import UpdateForm from "@/views/Products/Modals/Pet/UpdateForm.vue";
import SuccessModal from "@/views/Products/Modals/Success.vue";
import Securitynotification from "@/views/Products/Modals/Securitynotification.vue";
import axios from "axios";
import baseURL from "@/main";
import Paystack from "vue-paystack";

export default {
  components: {Paystack, Securitynotification, SuccessModal, PetForm, ArrowUp, BuyLine, Pet, PetMobile, PreviewQuote, UpdateForm },
  data() {
    return {
      isDivVisible: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      show: false,
      showSecurity: false,
      mobileshow: false,
      pet_id: '',
      authToken: '',
      previewQuote: false,
      updateform: false,
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
      petCategory: 0,
      frequency: [],
      user_pet_id: 0,
      reference: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
    this.PetType();
    this.Category();
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
    async Category() {
      await axios({url: `${baseURL}/pet/categories`, method: 'GET'})
          .then(res => {
            this.frequency = res.data.data.payment_frequency
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
    },
    async PetType() {
      await axios({url: `${baseURL}/pet/types`, method: 'GET'})
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
    },
    buyPet(data){
      this.$store.commit('startLoading')
      axios({url: `${baseURL}/pet/new/policy/${this.petCategory}`, data: data, method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.authToken}`,
          'Content-Type': this.petCategory === 1 ? 'application/json' : 'multipart/form-data'
        }})
          .then((res) => {
            console.log(res.data.data)
            this.show = false
            this.authToken = res.data.data.token
            this.user_pet_id = res.data.data.user_pet_id
            this.reference = res.data.data.reference
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
      if (this.petCategory === 1) {
        let data = {
          user_pet_id : this.user_pet_id,
          card_id : 0
        }
        axios({url: `${baseURL}/pet/payment/init`, data: data, method: 'POST',
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
      } else {
        let data = {
          "reference": this.reference
        }
        axios({url: `${baseURL}/pet/payment/bulk/init`, data: data, method: 'POST',
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
      }
    },
    verifyPayment(){
      if(this.petCategory === 1){
        axios({url: `${baseURL}/pet/payment/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.authToken}`,
            'Content-Type': 'application/json'
          }})
            .then(res=>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: res.data.message})
              this.showPaystack = false
              this.success = true
              // this.$router.push('/app/dashboard/managehealth')
              // this.$store.commit('setReviewmodal', true)
            })
            .catch(err=>{
              this.$store.commit('endLoading')
              this.$store.commit('setError', {status: true, msg: err.response.data.message})
            })
      }else {
        axios({url: `${baseURL}/pet/payment/bulk/verify`, data:{'reference': this.paystackData.reference}, method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.authToken}`,
            'Content-Type': 'application/json'
          }})
            .then(res=>{
              this.$store.commit('endLoading')
              this.$store.commit('setSuccess', {status: true, msg: res.data.message})
              this.showPaystack = false
              this.success = true
              // this.$router.push('/app/dashboard/managehealth')
              // this.$store.commit('setReviewmodal', true)
            })
            .catch(err=>{
              this.$store.commit('endLoading')
              this.$store.commit('setError', {status: true, msg: err.response.data.message})
            })
      }
    },
    closePayment(){
      this.$store.commit('endLoading')
      this.$store.commit('setError', {status: true, msg: "Payment cancelled"})
    },
    async updatePolicy(data){
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/pet/policy/update`,data: data, method: 'POST',
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
        this.success = false;
        this.securityNotification = true
      }else {
        this.$router.push('/login')
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

.centernewshow {
  width: 96%;
  //left: 50%;
  //transform: translate(-50%, 0%);
}

svg {
  width: 100%; /* Adjust size for smaller screens */
  height: 100%;
}

.homecontent {
  height: 82vh;
  //overflow: hidden;
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