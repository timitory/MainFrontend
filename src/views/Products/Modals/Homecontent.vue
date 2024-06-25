<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form>
          <div v-if="!next">
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Complete the Form </h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel">
                <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
              </svg>
            </div>
<!--            <div class="flex justify-between gap-6 py-1">-->
<!--              <div class="block w-full">-->
<!--                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Plan</label>-->
<!--                <select v-model.number="data.plan_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">-->
<!--                  <option value="">Select Plan</option>-->
<!--                  <option v-for="(plan, index) in plans" :key="index" :value="plan.id">{{plan.name}} - {{plan.cost}}</option>-->
<!--                </select>-->
<!--              </div>-->
<!--            </div>-->
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="firstname" class="block font-bold text-black py-2 text-xs lg:text-sm">First Name</label>
                <input type="text" name="firstname" v-model="data.firstname" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Last Name</label>
                <input type="text" name="lastname" v-model="data.lastname" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address</label>
                <input type="email" name="email" v-model="data.email" placeholder="home@paddycover.com" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                <input type="tel" name="phone" :value="data.phone" @input="(e) => validatePhoneNumber(e.target.value)"  placeholder="08123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 text-xs lg:text-sm">Date of Birth</label>
                <input type="date" name="dob" v-model="data.dob" placeholder="DD/MM/YYYY" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Gender</label>
                <select v-model.number="data.gender_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Gender</option>
                  <option v-for="(sex, index) in gender" :key="index" :value="sex.id">{{sex.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Disco Id</label>
                <select v-model.number="data.disco_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Disco</option>
                  <option v-for="(disc, index) in disco" :key="index" :value="disc.id">{{disc.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Meter No</label>
                <input v-model="data.meter_no" type="text" name="phone" placeholder="123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">States</label>
                <select @change="getLga" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Frequency</option>
                  <option v-for="(state, index) in states" :key="index" :value="state.id">{{state.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">LGA</label>
                <select v-model.number="data.lga_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Lga</option>
                  <option v-for="(lga, index) in lgas" :key="index" :value="lga.id">{{lga.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
<!--              <div class="block w-full">-->
<!--                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">LGA</label>-->
<!--                <select v-model.number="data.lga_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">-->
<!--                  <option value="">Select Lga</option>-->
<!--                  <option v-for="(lga, index) in lgas" :key="index" :value="lga.id">{{lga.name}}</option>-->
<!--                </select>-->
<!--              </div>-->
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Payment Frequency</label>
                <select v-model.number="data.payment_frequency_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Frequency</option>
                  <option v-for="(payment, index) in frequency" :key="index" :value="payment.id">{{payment.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center py-3">
              <button type='button' class="bg-customgreen text-white rounded px-6 py-2 w-1/4" @click="next = true">
                Next
              </button>
            </div>
          </div>
          <div v-else>
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Additional Information</h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel">
                <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
              </svg>
            </div>

            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Utility Bill Type</label>
                <input v-model="data.utilitybill_name" type="text" name="phone" placeholder="123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <select v-model.number="data.utilitybill_name" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option disabled="disabled" selected="selected" value="">Select Bill type</option>
                  <option value="electric">Electric Bill</option>
                  <option value="waste">Waste Bill</option>
                  <option value="water">Water Bill</option>
                </select>
              </div>
              <div class="block w-full">
                <label class="block font-bold text-black py-2 text-xs lg:text-sm">Upload Image of Utility Bill</label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="utility" class="bg-customgreen py-3 border-0 text-white"  ref="utility" @change="utilityUpload">
                  <label for="utility" class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-sm w-5/12 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-7/12 text-xs px-2" v-model="imageUpload.utilityBillName" readonly/>
                </div>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Means Of Id</label>
                <select v-model="data.identification_name" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Means of Id</option>
                  <option v-for="(idmean, index) in idmeans" :key="index" :value="idmean.name">{{idmean.name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload image of Preferred Means of ID</label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="idmeans" class="bg-customgreen py-3 border-0 text-white"  ref="idmeans" @change="idUpload">
                  <label for="idmeans" class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-sm w-5/12 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-7/12 text-xs px-2" v-model="imageUpload.idmeansName" readonly/>
                </div>
              </div>
            </div>
            <div>
              <h1 class="text-customgreen font-bold">Home Contents to be Insured</h1>
            </div>
            <div class="flex justify-between gap-6 py-1" v-for="index in homelist" :key="index">
              <div class="block w-full">
                <label for="homeitem" class="block font-bold text-black py-2 text-xs lg:text-sm">Home Item</label>
                <input :value="homedetails['home_name_' + index]"
                       @input="(e) => homedetails['home_name_' + index] = e.target.value" type="text" name="homeitem" placeholder="Eg.TV" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="monetaryvalue" class="block font-bold text-black py-2 text-xs lg:text-sm">Monetary Value (NGN)</label>
                <money v-model="homedetails['home_value_' + index]" v-bind="money"
                       class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md"
                       required></money>
              </div>
            </div>
            <div class="flex gap-2 items-center py-1" @click="addnew">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cancel">
                <path d="M18 4H6C4.897 4 4 4.897 4 6V18C4 19.103 4.897 20 6 20H18C19.103 20 20 19.103 20 18V6C20 4.897 19.103 4 18 4ZM6 18V6H18L18.002 18H6Z" fill="black"/>
                <path d="M13 8H11V11H8V13H11V16H13V13H16V11H13V8Z" fill="black"/>
              </svg>
              <h1 class=" font-bold">Add Item</h1>
            </div>
<!--            <div class="items-center flex gap-2">-->
<!--              <input type="checkbox" name="terms" class="border-2" />-->
<!--              <label for="terms" class="font-bold text-black py-2 text-sm">I have read and agree to the terms and conditions</label>-->
<!--            </div>-->
            <div class="mt-4 flex items-center gap-2">
              <input type="checkbox" v-model="check" :value="1">
              <p class="text-sm">I accept <button type="button" @click="showTermsModal = true" class="text-blue-500">terms and conditions</button></p>
            </div>
            <p class="text-red-500 text-xs mt-2" v-if="showError">Please accept terms</p>
            <div class="flex justify-between items-center py-3">
              <p class="text-sm underline font-bold cursor-pointer" @click="next = false">Back</p>
              <button type="button" class=" text-white rounded px-6 py-2 w-2/4" :class="check.length > 0 ? 'bg-customgreen' : 'bg-grey'" @click="check.length > 0 ? submit() : ''">
                Buy Policy
              </button>
            </div>
          </div>
        </form>
      </div>
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
import axios from "axios";
import baseURL from "@/main";
import TermsModal from "@/components/TermsModal.vue";

export default {
  components: {TermsModal, Money},
  data() {
    return {
      next: false,
      showError : false,
      check: [],
      showTermsModal: false,
      imageUpload: {
        utility: '',
        utilityBillName: '',
        idmeans: '',
        idmeansName: '',
      },
      disco: [],
      frequency: [],
      gender: [],
      idmeans: [],
      lgas: [],
      plans: [],
      states: [],
      homelist: 1,
      data: {
        "firstname": "",
        "lastname": "",
        "email": "",
        "phone": "",
        "gender_id": 0,
        "plan_id": 0,
        "payment_frequency_id": 0,
        "disco_id": 0,
        "meter_no": "",
        "lga_id": 0,
        "dob": "",
        "utilitybill_name": "",
        "utilitybill_file": "",
        "identification_name": "",
        "identification_file": "",
        "home_items": []
      },
      homedetails: {},
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      error: {
        phone: '',
      }
    };
  },
  props: {
    selectedPlan: {
      type: Number,
      required: true
    }
  },
  methods: {
    getLga(e) {
      // this.data.state_id = JSON.parse(e.target.value);
      if (e.target.value === "0") {
        this.lgas = [];
      } else {
        const searchObject = this.states.find(
            model => model.id === JSON.parse(e.target.value)
        );
        this.lgas = searchObject ? searchObject.lgas : [];
      }
    },
    utilityUpload() {
      console.log('this was triggered')
      const files = this.$refs.utility.files;
      console.log(files)
      if (files.length > 0) {
        this.imageUpload.utilityBillName = files[0].name;
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.utilitybill_file = fileLoadedEvent.target.result; // <--- data: base64
        };
        fileReader.readAsDataURL(files[0]);
      }
    },
    idUpload() {
      console.log('this was triggered')
      const files = this.$refs.idmeans.files;
      console.log(files)
      if (files.length > 0) {
        this.imageUpload.idmeansName = files[0].name;
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.identification_file = fileLoadedEvent.target.result; // <--- data: base64
        };
        fileReader.readAsDataURL(files[0]);
      }
    },
    addnew() {
      this.homelist = this.homelist + 1
    },
    getHomeResources(){
      axios.get(`${baseURL}/homecontent/resources`)
          .then(res => {
            console.log(res.data.data)
            this.disco = res.data.data.disco
            this.frequency = res.data.data.frequency
            this.gender = res.data.data.gender
            this.idmeans = res.data.data.idmeans
            // this.lgas = res.data.data.lgas
            this.plans = res.data.data.plans
            this.states = res.data.data.states
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    validatePhoneNumber(phoneNumber) {
      // Remove non-digit characters
      this.data.phone = phoneNumber
      const digitsOnly = phoneNumber.replace(/\D/g, '');

      const expectedLength = 11; // Adjust this based on the country or format
      if (digitsOnly.length === expectedLength){
        this.data.phone = phoneNumber
        this.error.phone = ""
      }else {
        this.error.phone = "Invalid Phone Number"
      }
      // Check if the length is valid
      return digitsOnly.length === expectedLength;
    },
    submit() {
      let result = []
      for (let [key, value] of Object.entries(this.homedetails)) {
        if (key.startsWith('home_name_')) {
          const index = key.slice('home_name_'.length); // Extract the index
          const valueKey = `home_value_${index}`; // Form the corresponding value key

          // Check if the value key exists using safer Object.hasOwnProperty method
          if (Object.prototype.hasOwnProperty.call(this.homedetails, valueKey)) {
            // Pair the name and value in an object and push it to the result array
            result.push({
              item_name: value,
              cost: this.homedetails[valueKey]
            });
          }
        }
      }
      console.log(result);
      this.data.home_items = result;
      console.log(this.data);
      this.$emit('submit', this.data);
    },
  },
  mounted() {
    this.getHomeResources()
    console.log(this.selectedPlan)
    this.data.plan_id = this.selectedPlan
  }
}
</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
}

.cancel {
  width: auto !important;
}
</style>