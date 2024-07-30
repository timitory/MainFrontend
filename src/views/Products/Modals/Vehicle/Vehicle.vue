<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form @submit.prevent="submit">
          <div v-if="!next">
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Plate Number Details</h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
              </svg>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Name</label>
                <input v-model="data.firstname" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full" >
                <label for="issue" class="block font-bold text-black py-2 text-xs lg:text-sm">Cover Type</label>
                <input v-if="!botActivation" :value="$props.coverType === 'Chi-prime' ? 'Third Party Plus' : $props.coverType" readonly type="text" name="issue" placeholder="Third party" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
                <select v-else v-model="localCoverType" @change="(e) => $store.commit('setCoverType', e.target.value)"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs"
                        required>
                  <option disabled selected value="" class="text-opacity-10">Select Cover Type</option>
                  <option  class="text-opacity-10">Third Party</option>
                  <option value="Chi-prime"  class="text-opacity-10">Third Party Plus</option>
                  <option  class="text-opacity-10">Comprehensive</option>
                </select>
                <span class="block py-1.5 text-red-500 text-sm">{{error.coverType}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="regNo" class="block font-bold text-black py-2 text-xs lg:text-sm">Registration No</label>
                <input v-model="data.plate_number" readonly  type="text" name="regNo" placeholder="HYYG89809490 NK" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">New Registration No</label>
                <input v-model="data.plate_number" readonly type="text" name="phone" placeholder="KJKJ64668686 JK" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="chasis" class="block font-bold text-black py-2 text-xs lg:text-sm">Chasis No</label>
                <input v-model="data.chasis_no" type="text" name="chasis" placeholder="8789366677987" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="colour" class="block font-bold text-black py-2 text-xs lg:text-sm">Colour</label>
                <input v-model="data.vehicle_color" type="text" name="colour" placeholder="Blue" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
<!--              <div class="block w-full">-->
<!--                <label for="make" class="block font-bold text-black py-2 text-xs lg:text-sm">Car Make</label>-->
<!--                <input :value="autocheck.VehicleMake" type="text" name="make" placeholder="Toyota" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">-->
<!--              </div>-->
            </div>
<!--            <div class="flex justify-between gap-6 py-1">-->
<!--              <div class="block w-full">-->
<!--                <label for="model" class="block font-bold text-black py-2 text-xs lg:text-sm">Model</label>-->
<!--                <input :value="autocheck.VehicleModel" type="text" name="model" placeholder="Camry" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">-->
<!--              </div>-->
<!--              <div class="block w-full">-->
<!--                <label for="colour" class="block font-bold text-black py-2 text-xs lg:text-sm">Colour</label>-->
<!--                <input :value="autocheck.VehicleColor" type="text" name="colour" placeholder="Blue" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="flex justify-between gap-6 py-1">-->
<!--&lt;!&ndash;              <div class="block w-full">&ndash;&gt;-->
<!--&lt;!&ndash;                <label for="type" class="block font-bold text-black py-2 text-xs lg:text-sm">Vehicle Type</label>&ndash;&gt;-->
<!--&lt;!&ndash;                <input :value="autocheck.VehicleType" type="text" name="type" placeholder="Saloon" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">&ndash;&gt;-->
<!--&lt;!&ndash;              </div>&ndash;&gt;-->
<!--              <div class="block w-full">-->
<!--                <label for="issue" class="block font-bold text-black py-2 text-xs lg:text-sm">Cover Type</label>-->
<!--                <input :value="$props.coverType" type="text" name="issue" placeholder="Third party" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">-->
<!--              </div>-->
<!--              <div class="block w-full">-->
<!--                <label for="issue" class="block font-bold text-black py-2 text-xs lg:text-sm"></label>-->
<!--                <input :value="$props.coverType" type="hidden" name="issue" placeholder="Third party" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">-->
<!--              </div>-->
<!--            </div>-->
            <div class="flex flex-col justify-center items-center py-3">
              <span class="bg-customgreen text-white rounded px-6 py-2 w-1/4 cursor-pointer" @click="nextAuthentication">
                Next
              </span>
            </div>
          </div>
          <div v-else>
            <h1 class="text-customgreen font-bold">Additional Information</h1>
            <div class="flex justify-between gap-6 py-1" v-if="coverType === 'Chi-prime'">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Plan</label>
                <select v-model.number="data.vehicle_category_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="">Select Plan</option>
                  <option v-for="(plan, index) in plans" :key="index" :value="plan.id">{{plan.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address</label>
                <input type="email" v-model="data.email" name="email" placeholder="home@paddycover.com" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                <input type="tel" name="phone" v-model="data.telephone" @input="(e) => validatePhoneNumber(e.target.value)" placeholder="08123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label class=" font-bold lg:text-sm text-xs">Vehicle Make</label>
                <div class="relative">
                  <select @change="getVehicleModel"
                          class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs"
                          required>
                     <option disabled selected value="" class="text-opacity-10">Select Vehicle Make</option>
                    <option v-for="model in vehicle_make" :key="model.id" :value="model.id">{{ model.name }}</option>
                  </select>
                </div>
              </div>
              <div class="block w-full">
                <label class="font-bold lg:text-sm text-xs">Vehicle Model</label>
                <div class="relative">
                  <select v-model.number="data.vehicle_model_id"
                          class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs"
                          required>
                    <option disabled selected value="" class="text-opacity-10">Select Model</option>
                    <option v-for="type in vehicle_model" :key="type.id" :value="type.id">{{ type.name }}</option>
                  </select>
<!--                  <p v-if="vehicle_class_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select Type</p>-->
                </div>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="amount" class="block font-bold text-black py-2 text-xs lg:text-sm">Vehicle Value</label>
                <money v-model="adjustedVehicleValue" v-bind="money" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs" required></money>
              </div>
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Vehicle Class</label>
                <div class="relative">
                  <select v-model.number="data.vehicle_class_id"
                      class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs"
                      required>
                     <option disabled selected value="" class="text-opacity-10">Select Vehicle Class</option>
                    <option v-for="model in vehicle_class" :key="model.id" :value="model.id">{{ model.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Payment Frequency</label>
                <select v-if="coverType === 'Comprehensive'" v-model.number="data.payment_frequency_id" class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="">Select Payment Frequency</option>
                  <option v-for="model in payment_frequency" :key="model.id" :value="model.id">{{ model.name }}</option>
                </select>
                <input v-else value="Annually" readonly  name="issue" class="bg-custom text-black border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Vehicle Usage</label>
                <div class="relative">
                  <select v-model.number="data.vehicle_usage_id"
                          class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs"
                          required>
                     <option disabled selected value="" class="text-opacity-10">Select Usage</option>
                    <option v-for="model in vehicle_usage" :key="model.id" :value="model.id">{{ model.name }}</option>
                  </select>
                </div>
              </div>
            </div>
            <div v-if="coverType === 'Comprehensive'" class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Ads On</label>
                <div class="flex gap-4 py-3">
                  <div class="flex gap-2 items-center justify-center">
                    <input  v-model="data.flood_cover" @change="updateCheckboxValue('flood_cover', $event)" value="0"  type="checkbox" class="text-2xl font-bold text-black bg-black radio" />
                    <label class="lg:text-sm text-xs font-bold text-black">Flood</label>
                  </div>
                  <div class="flex gap-2 items-center justify-center">
                    <input v-model="data.excess_buyback" @change="updateCheckboxValue('excess_buyback', $event)" value="0" type="checkbox" class="pr-2">
                    <label class="lg:text-sm text-xs font-bold text-black" >Excess BuyBack</label>
                  </div>
                </div>
              </div>
            </div>
            <div v-else></div>

            <div class="flex justify-between items-center py-3">
              <p class="text-sm underline font-bold cursor-pointer" @click="next = false">Back</p>
              <button type="submit" class="bg-customgreen text-white rounded px-6 py-2 w-2/4 text-sm lg:text-md">
                Buy Policy
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {Money} from 'v-money'
import {mapState} from "vuex";
import axios from "axios";
import baseURL from "@/main";

export default {
  components: { Money },
  data() {
    return {
      next: false,
      data: {
        email: "",
        firstname: "",
        lastname: "",
        telephone: "",
        vehicle_make_id: null,
        vehicle_model_id: null,
        vehicle_class_id: null,
        vehicle_usage_id: null,
        vehicle_category_id: null,
        vehicle_category:[],
        vehicle_color: "",
        // vehicle_value: 0,
        plate_number: "",
        payment_frequency_id: null,
        chasis_no: ""
      },
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      localCoverType: this.coverType,
      vehicle_make: [],
      vehicle_model: [],
      vehicle_class: [],
      vehicle_usage: [],
      payment_frequency: [],
      cover: '',
      plans: [],
      error: {
        terms: false,
        phone: '',
        bvn: '',
        coverType: ''
      },
    };
  },
  props: {
    coverType: {
      type: String,
      required: true
    }
  },
  methods: {
    nextAuthentication() {
      if (this.coverType === '') {
        this.error.coverType = 'select cover type'
      }else {
        this.next = true
        this.error.coverType = ''
      }
    },
    validatePhoneNumber(phoneNumber) {
      // Remove non-digit characters
      this.data.telephone = phoneNumber
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
    getCoverType() {
      if (this.coverType === 'Chi-prime'){
        let chiPrimeArray = [];

        this.vehicle_category.forEach(category => {
          if (category.name === "CHI-PRIME") {
            switch (category.slug) {
              case "chi-prime":
                category.name = "Paddy Bronze";
                break;
              case "chi-prime-silver":
                category.name = "Paddy Silver";
                break;
              case "chi-prime-gold":
                category.name = "Paddy Gold";
                break;
            }
            chiPrimeArray.push(category);
          }
        });
        console.log(chiPrimeArray)
        this.plans = chiPrimeArray;
      }
    },
    getResources() {
      this.$store.commit('startLoading');
      axios.get(`${baseURL}/vehicle/resources`)
          .then(res => {
            this.vehicle_make = res.data.data.vehicle_make;
            this.vehicle_class = res.data.data.vehicle_class;
            this.vehicle_usage = res.data.data.vehicle_usage;
            this.payment_frequency = res.data.data.payment_frequency;
            this.vehicle_category = res.data.data.vehicle_category;
            if (this.coverType === 'Chi-prime'){
              let chiPrimeArray = [];

              res.data.data.vehicle_category.forEach(category => {
                if (category.name === "CHI-PRIME") {
                  switch (category.slug) {
                    case "chi-prime":
                      category.name = "Paddy Bronze";
                      break;
                    case "chi-prime-silver":
                      category.name = "Paddy Silver";
                      break;
                    case "chi-prime-gold":
                      category.name = "Paddy Gold";
                      break;
                  }
                  chiPrimeArray.push(category);
                }
              });
              console.log(chiPrimeArray)
              this.plans = chiPrimeArray;
            }
            this.$store.commit('endLoading');
          })
          .catch(err => {
            this.$store.dispatch('handleError', err);
          });
    },
    getVehicleModel(e) {
      this.data.vehicle_make_id = JSON.parse(e.target.value);
      if (e.target.value === "0") {
        this.vehicle_model = [];
      } else {
        const searchObject = this.vehicle_make.find(
            model => model.id === JSON.parse(e.target.value)
        );
        this.vehicle_model = searchObject ? searchObject.models : [];
      }
    },
    updateCheckboxValue(field, event) {
      if (field === 'excess_buyback') {
        this.data.excess_buyback = event.target.checked ? 1 : 0;
      } else {
        this.data.flood_cover = event.target.checked ? 1 : 0;
      }
    },
    validateForm(data) {
      const keys = Object.keys(data);
      const emptyFields = [];
      let allFieldsFilled = true;

      for (const key of keys) {
        if (!data[key]) {
          allFieldsFilled = false;
          emptyFields.push(key);
        }
      }

      if (allFieldsFilled) {
        this.emptyField = [];
        return true;
      } else {
        console.log(emptyFields)
        this.emptyField = emptyFields;
        return emptyFields;
      }
    },
    submit() {
      const validation = this.validateForm(this.data);
      if (validation === true) {
        this.$emit('getQuote', this.data);
        this.$emit('show')
      } else {
        console.log("Following fields are empty:", validation);
      }

    }
  },
  computed: {
    ...mapState({
      autocheck: state => state.autocheck,
      botActivation: state => state.botActivation
    }),
    adjustedVehicleValue: {
      get() {
        // Get the original value from data.vehicle_value and divide by 100
        return this.data.vehicle_value / 100;
      },
      set(value) {
        // Multiply the value by 100 before setting it to data.vehicle_value
        console.log(value * 100)
        this.data.vehicle_value = value * 100;
      }
    }

  },
  watch: {
    autocheck: {
      handler(newVal) {
        if (newVal) {
          this.data.firstname = newVal.OwnerName || "";
          this.data.lastname = newVal.OwnerName || ""; // Set lastname as well
          this.data.vehicle_color = newVal.VehicleColor || "";
          this.data.plate_number = newVal.VehicleRegistrationNo || "";
          this.data.chasis_no = newVal.VehicleChasisNo || "";
        }
      },
      immediate: true
    },
    coverType: {
      handler(newVal) {
        this.localCoverType = newVal;
        this.getCoverType()
        if (newVal === 'Comprehensive') {
          this.data.payment_frequency_id = ''
          this.data.vehicle_category_id = 2
        } else {
          this.data.payment_frequency_id = 3;
          if (newVal === 'Chi-prime') {
            this.data.vehicle_category_id = ''
          } else {
            this.data.vehicle_category_id = newVal === 'Third Party' ? 1 : newVal === 'Comprehensive' ? 2 : 0;
          }
        }

      },
      immediate: true
    },
  },
  mounted() {
    this.getResources();
  }
};

</script>

<style scoped>

.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
}

#radioButton:checked + label .bg-blue-500 {
  opacity: 1;
}

#radioButton:checked + label .scale-0 {
  transform: scale(1);
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
