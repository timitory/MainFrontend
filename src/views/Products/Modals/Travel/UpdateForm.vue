<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form @submit.prevent="validate">
          <div>
            <h1 class="text-customgreen font-bold">Complete the Form </h1>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Title</label>
                <select v-model="data.title_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled selected>Select Title</option>
                  <option v-for="(title, index) in titles" :key="index" :value="title.id">{{title.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="surname" class="block font-bold text-black py-2 text-xs lg:text-sm">Surname</label>
                <input v-model="data.lastname" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" readonly>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Firstname</label>
                <input v-model="data.firstname" type="text" readonly name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Middlename</label>
                <input v-model="data.middlename" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address</label>
                <input type="email" v-model="data.email" readonly name="email" placeholder="home@paddycover.com" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                <input type="tel" v-model="data.phone" readonly name="phone" placeholder="+2348123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">

              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Gender</label>
                <select v-model.number="data.gender_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled selected>Select Gender</option>
                  <option v-for="(gender, index) in genders" :key="index" :value="gender.id">{{gender.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="country" class="block font-bold text-black py-2 text-xs lg:text-sm">Nationality</label>
                <input type="text" name="country" v-model="data.nationality" placeholder="Nigeria" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="model" class="block font-bold text-black py-2 text-xs lg:text-sm">Marital Status</label>
                <select v-model="data.marital_status_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled selected>Select Status</option>
                  <option v-for="(status, index) in maritalStatus" :key="index" :value="status.id">{{status.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="occupation" class="block font-bold text-black py-2 text-xs lg:text-sm">Occupation</label>
                <input type="text" v-model="data.occupation" name="occupation" placeholder="Doctor" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="address" class="block font-bold text-black py-2 text-xs lg:text-sm">Address</label>
                <input type="text" v-model="data.address" name="address" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">State Of Residence</label>
                <select v-model="data.state_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled selected>Select state</option>
                  <option v-for="(state, index) in states" :key="index" :value="state.id">{{state.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="company" class="block font-bold text-black py-2 text-xs lg:text-sm">Zipcode</label>
                <input type="text" v-model="data.zip_code" name="company" placeholder="23401" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="duration" class="block font-bold text-black py-2 text-xs lg:text-sm">Passport Number</label>
                <input type="text" :value="data.passport_no" @input="(e) => validatePassportNo(e.target.value)" name="company" placeholder="BA8d933" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span class="block py-1.5 text-red-500 text-sm">{{error.passportNo}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="address" class="block font-bold text-black py-2 text-xs lg:text-sm">Pre Existing Medical Condition</label>
                <select v-model="data.pre_exisiting_medical_condition"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled selected>Select</option>
                  <option :value=true>Yes</option>
                  <option :value=false>No</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Medical Condition</label>
                <input type="text" v-model="data.medical_condition" name="company"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Full name (Next of Kin) </label>
                <input v-model="data.next_of_kin_name" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="surname" class="block font-bold text-black py-2 text-xs lg:text-sm">Relationship with next of kin</label>
                <input v-model="data.next_of_kin_relationship" type="text" name="name"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Address (Next of kin)</label>
                <input v-model="data.next_of_kin_address" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Telephone (Next of Kin)</label>
                <input type="tel" name="name" :value="data.next_of_kin_phone" @input="(e) => validatePhoneNumber(e.target.value)" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
            </div>
<!--            <div class="items-center flex gap-2">-->
<!--              <input type="checkbox" name="terms" class="border-2" />-->
<!--              <label for="terms" class="font-bold text-black py-2 text-sm">I have read and agree to the terms and conditions</label>-->
<!--            </div>-->
            <div class="flex flex-col justify-center items-center py-3">
              <button type="submit" class="bg-customgreen text-white rounded px-6 py-2 w-2/4" >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";
import baseURL from "@/main";

export default {
  components: {},
  data() {
    return {
      next: false,
      data: {
        'title': '',
        "firstname": '',
        "lastname": '',
        "middlename": "",
        "email": '',
        "quote_id": '',
        "user_travel_id": '',
        "phone": '',
        "gender_id": null,
        "title_id": null,
        "dob": '',
        "state_id": null,
        "address": "",
        "zip_code": "",
        "nationality": "",
        "passport_no": "",
        "occupation": "",
        "marital_status_id": null,
        "pre_exisiting_medical_condition": null,
        "medical_condition": "",
        "next_of_kin_name": "",
        "next_of_kin_address": "",
        "next_of_kin_relationship": "",
        "next_of_kin_phone": ""
      },
      error: {
        passportNo: null,
        phone: null
      },
      states: [],
      genders: [],
      titles: [],
      maritalStatus: [],
    };
  },
  props: {
    quoteDetails: {
      type: Object,
      required: true,
    }
  },
  methods: {
    validatePhoneNumber(phoneNumber) {
      this.data.next_of_kin_phone = phoneNumber
      const digitsOnly = phoneNumber.replace(/\D/g, '');

      const expectedLength = 11; // Adjust this based on the country or format
      if (digitsOnly.length === expectedLength){
        this.data.next_of_kin_phone = phoneNumber
        this.error.phone = ""
      }else {
        this.error.phone = "Invalid Phone Number"
      }
      return digitsOnly.length === expectedLength;
    },
    update() {
      console.log(this.quoteDetails)
          this.data.firstname = this.quoteDetails.quote.firstname,
          this.data.lastname = this.quoteDetails.quote.lastname,
          this.data.email = this.quoteDetails.quote.email,
          this.data.quote_id = this.quoteDetails.travel_quote_id,
          this.data.user_travel_id = this.quoteDetails.user_travel_id,
          this.data.phone = this.quoteDetails.quote.telephone,
          this.data.dob = this.quoteDetails.quote.firstname
    },
    getStates(){
      axios.get(`${baseURL}/states`)
          .then(res=> {
            console.log(res.data.data)
            this.states = res.data.data.states
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    getGender(){
      axios({url:`${baseURL}/gender`, method: 'GET'})
          .then((res)=> {
            console.log(res.data.data)
            this.genders = res.data.data
          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    getTitle(){
      axios({url:`${baseURL}/titles`, method: 'GET'})
          .then((res)=> {
            this.titles = res.data.data
          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    getMaritalStatus(){
      axios({url:`${baseURL}/marital-status`, method: 'GET'})
          .then((res)=> {
            console.log(res.data.data)
            this.maritalStatus = res.data.data
          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    validatePassportNo(value) {
      const regex = /^[A-Za-z][0-9]{8}$/i;

      if (regex.test(value)) {
        this.data.passport_no = value.toUpperCase();
        this.error.passportNo = ""
      } else {
        this.data.passport_no = '';
        this.error.passportNo = "Invalid Passport Number"

      }
    },
    validate(){
      this.$emit('updatePolicy', this.data)
    },
  },
  mounted() {
    this.update();
    this.getTitle();
    this.getStates();
    this.getMaritalStatus();
    this.getGender();
  },
};


</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 700px;
  background-color: #f7f7f7;
  max-height: 600px;
  overflow: scroll;
}

#radioButton:checked + label .bg-blue-500 {
  opacity: 1;
}

#radioButton:checked + label .scale-0 {
  transform: scale(1);
}

.custom-outline-none:focus-visible{
  outline: none;
}

.radio::after {
  //--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: black !important;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
}
</style>