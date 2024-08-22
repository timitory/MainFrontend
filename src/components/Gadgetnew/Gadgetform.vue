<template>
  <div class="mt-6">
    <div class="lg:w-3/4 lg:mx-auto">
      <p class="font-bold text-lg">Personal Information</p>
      <hr class="mt-4">

      <Gadgetkyc v-if="this.page === 2" :next="this.next"  :back="this.back" :page="this.page" :gadgetdata="this.gadgetdata" :paymentmode="this.paymentmode" />
      <completeForm v-if="this.page === 3" :next="this.next" :back="this.back" :page="this.page" :gadgetdata="this.gadgetdata" v-on:submitSingle="Buysinglegadget"  />
      <div v-show="showPaystack">
        <Paystack ref="paystackbutton"
          class=" hidden mt-6 w-full bg-green-500 text-white py-2 rounded outline-none focus:outline-none"
          :amount="paystackData.amount" :email="paystackData.email" :paystackkey="paystackData.public_key"
          :reference="paystackData.reference" :callback="verifyPayment" :close="closePayment"
          :channels="paystackData.channels">
        </Paystack>
      </div>
      <transition name="scale">
        <PaymentMethod v-if="showMethodModal" v-on:useCard="payWithCard" v-on:close="closePaymentmodal" />
      </transition>
      <transition name="scale">
        <Cardsmodal v-if="showCardsmodal" v-on:useCard="payWithCard" :user_id="user_gadget_id"  user_key="user_gadget_id" product="gadget"  :close="close" />
      </transition>
      <transition name="scale">
        <ReviewModal v-if="showReviewModal"  :close="closeReview" tett="/gadget/managegadget" />
      </transition>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
import baseURL from "@/main"
import { mapState } from 'vuex'
import Gadgetkyc from "./Gadgetkyc"
import completeForm from "./completeForm"
import PaymentMethod from "@/components/Vehicle/PaymentMethod"
import Cardsmodal from "@/components/Cardsmodal"
import Paystack from "vue-paystack";
import ReviewModal from '../Vehicle/ReviewModal.vue'
export default {
  components: {
    Gadgetkyc, PaymentMethod, completeForm, Paystack, Cardsmodal, ReviewModal
},
  data() {
    return {
      // paystackData: {
      //   public_key: '',
      //   email: '',
      //   amount: 0,
      //   reference: ''
      // },
      paystackData: {
        public_key: '',
        email: '',
        amount: 0,
        reference: '',
        subaccount: '',
        transactionCharge: 0
      },
      paystackChannels: ['card', 'bank', 'mobile_money', 'bank_transfer'],
      showPaystack: false,
      check: [],
      showError: false,
      showTermsModal: false,
      showMethodModal: false,
      user_gadget_id: 0,
      reference: '',
      showCardsmodal: false,
      showReviewModal: false,
    }
  },
  props: [
    'next',
    'page',
    'back',
    'gadgetdata',
    'callnext',
    'callback',
    'paymentmode'
  ],
  methods: {
    close() {
      this.showCardsmodal = false
    },
    closePaymentmodal() {
      this.showMethodModal = false
    },

    Buysinglegadget(data) {
      this.$store.commit('startLoading')
      axios({ url: `${baseURL}/gadget/policy/create`, data: data, method: 'POST' })
        .then(res => {
          // console.log(res)
          this.authToken = res.data.data.access_token
          this.user_gadget_id = res.data.data.user_gadget_id
          this.showDetails = res.data.data
          this.newUser = res.data.data.is_new_user
          this.$store.commit('endLoading')
          this.initiatePayment()

        })
        .catch(err => {
          this.$store.dispatch('handleError', err)
        })
    },

    
    initiatePayment() {
      this.showMethodModal = true

    },
    payWithCard(str) {
      this.showMethodModal = false
      if (str === 'old') {
        this.showCardsmodal = true
      } else if (str === 'new') {
        console.log('====================================');
        console.log('i got here');
        console.log('====================================');
        this.payNow()
      }
      return
    },
    payNow(){
      this.$store.commit('startLoading')
      let data = {
        user_gadget_id : this.user_gadget_id,
        card_id : 0
      }
      axios({url: `${baseURL}/gadget/payment/init`, data: data, method: 'POST',
       })
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
    // payNow() {
    //   this.$store.commit('startLoading')
    //   let data = {}

    //     data = {
    //     user_gadget_id: this.user_gadget_id,
    //     card_id: 0
    //     }

    //     axios({ url: `${baseURL}/gadget/payment/init`, data: data, method: 'POST' })
    //     .then(res => {
    //       console.log(res);
    //       this.showPaystack = true
    //       this.paystackData = res.data.data
    //       this.paystackData.channels = this.paystackChannels

    //       this.$refs.paystackbutton.payWithPaystack(this.paystackData)
    //     })
    //     .catch(err => {
    //       this.$store.dispatch('handleError', err)
    //     })
      
      
    // },
    verifyPayment() {
        axios({ url: `${baseURL}/gadget/payment/verify`, data: { 'reference': this.paystackData.reference }, method: 'POST' })
        .then(res => {
          this.$store.commit('endLoading')
          this.$store.commit('setSuccess', { status: true, msg: res.data.message })
          // this.$router.push('/pet/managepet')
          this.showReviewModal = true
        })
        .catch(err => {
          // console.log(err)
          this.$store.commit('endLoading')
          this.$store.commit('setError', { status: true, msg: err.response.data.message })
        })
     
    },
    closePayment() {
      this.$store.commit('endLoading')
      this.$store.commit('setError', { status: true, msg: "Payment cancelled" })
    }
  },

  computed: {
    ...mapState({
      self: state => state.user,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id
    }),
  },
  mounted() {
    // console.log(this.policytype);
  }
}
</script>
  
<style scoped></style>