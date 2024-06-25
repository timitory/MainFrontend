<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-10/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form class=" items-center justify-center flex" @submit.prevent="validate">
          <div>
            <h1 class="text-customgreen font-bold lg:text-lg">Complete the Form </h1>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Driver’s Licence no.</label>
                <input v-model="data.driver_license_number" type="text" name="name" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" >
                <p class="text-red-500 text-sm" v-if="error.driver_license_number">Please enter a valid Driver license number</p>
                <p class="text-red-500 text-xs" v-if="!error.driver_license_number">{{ fieldErrors['driver_license_number'] }}</p>
              </div>
              <div class="block w-full">
                <label for="surname" class="block font-bold text-black py-2 text-xs lg:text-sm">BVN</label>
                <input v-model="data.bvn" type="number" name="name"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" >
                <p class="text-red-500 text-sm" v-if="error.bvn">Please enter a valid BVN</p>
                <p class="text-red-500 text-xs" v-if="!error.bvn">{{ fieldErrors['bvn'] }}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Date Of Birth</label>
                <input v-model="data.date_of_birth" type="date" name="name" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <p class="text-red-500 text-xs">{{ fieldErrors['date_of_birth'] }}</p>

              </div>
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Gender</label>
                <select v-model="data.gender_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg: text-md text-xs">
                  <option value="" disabled selected>Select Gender</option>
                  <option v-for="(gender, index) in genders" :key="index" :value="gender.id">{{gender.name}}</option>
                </select>
                <p class="text-red-500 text-xs">{{ fieldErrors['gender_id'] }}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">State of residence</label>
                <select v-model="data.state_id" @change="getLga"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg: text-md text-xs">
                  <option value="" disabled selected>Select State</option>
                  <option v-for="(state, index) in states" :key="index" :value="state.id">{{state.name}}</option>
                </select>
                <p class="text-red-500 text-xs">{{ fieldErrors['state_id'] }}</p>
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">LGA</label>
                <select v-model="data.lga_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg: text-md text-xs">
                  <option value="" disabled selected>Select Lga</option>
                  <option v-for="(lgs, index) in lga" :key="index" :value="lgs.id">{{lgs.name}}</option>
                </select>
                <p class="text-red-500 text-xs">{{ fieldErrors['lga_id'] }}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="country" class="block font-bold text-black py-2 text-xs lg:text-sm">Year of Make</label>
                <input type="text" name="country" v-model="data.year" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <p class="text-red-500 text-xs">{{ fieldErrors['year'] }}</p>

              </div>
              <div class="block w-full">
                <label for="model" class="block font-bold text-black py-2 text-xs lg:text-sm">ID Type</label>
                <select v-model="data.idmeans_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg: text-md text-xs">
                  <option value="" disabled selected>Select Id</option>
                  <option v-for="(idmean, index) in idMeans" :key="index" :value="idmean.id">{{idmean.name}}</option>
                </select>
                <p class="text-red-500 text-xs">{{ fieldErrors['idmeans_id'] }}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Id Number</label>
                <input type="text" name="country" v-model="data.id_number" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <p class="text-red-500 text-xs">{{ fieldErrors['id_number'] }}</p>
              </div>
              <div class="block w-full">
                <label for="occupation" class="block font-bold text-black py-2 text-xs lg:text-sm">State of vehicle Regristration</label>
                <select v-model="data.reg_state_id"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg: text-md text-xs">
                  <option value="" disabled selected>Select State</option>
                  <option v-for="(status, index) in states" :key="index" :value="status.id">{{status.name}}</option>
                </select>
                <p class="text-red-500 text-xs">{{ fieldErrors['reg_state_id'] }}</p>
              </div>
            </div>
            <div class="flex lg:flex-row flex-col justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload Picture of Plate No.</label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="idmeans" class="bg-customgreen py-3 border-0 text-white"  ref="idmeans" @change="idUpload">
                  <label for="idmeans" class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:w-5/12  w-2/5 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-7/12 text-xs px-2" v-model="imageUpload.idmeansName" readonly/>
                </div>
                <p class="text-red-500 text-sm" v-if="error.regno_image">{{error.regno_image}}</p>
                <p class="text-red-500 text-xs" v-if="!error.regno_image">{{ fieldErrors['regno_image'] }}</p>
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload picture of valid ID</label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="utility" class="bg-customgreen py-3 border-0 text-white"  ref="utility" @change="utilityUpload">
                  <label for="utility" class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs w-5/12 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-7/12 text-xs px-2" v-model="imageUpload.utilityBillName" readonly/>
                </div>
                <p class="text-red-500 text-sm" v-if="error.validid_image">{{error.validid_image}}</p>
                <p class="text-red-500 text-xs" v-if="!error.validid_image">{{ fieldErrors['validid_image'] }}</p>
              </div>
            </div>
<!--            <div class="py-1">-->
<!--              <p v-for="(empty, index) in emptyField" :key="index" class="text-red-600 text-xs italic">{{empty}} is not filled</p>-->
<!--            </div>-->
            <div class="flex flex-col justify-center items-center mt-10">
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
        "reference": "",
        "user_vehicle_id": "",
        "driver_license_number": "",
        "date_of_birth": "",
        "state_id": "",
        "lga_id": "",
        "gender_id": "",
        "idmeans_id": "",
        "id_number": "",
        "validid_image": "",
        "regno_image": "",
        "bvn": "",
        "reg_state_id": "",
        "year": ""
      },
      error: {
        passportNo: null,
        bvn: '',
        driver_license_number: '',
        regno_image: '',
        validid_image: '',
      },
      states: [],
      genders: [],
      idMeans: [],
      lga: [],
      imageUpload: {
        utility: '',
        utilityBillName: '',
        idmeans: '',
        idmeansName: '',
      },
      emptyField: [],
    };
  },
  props: {
    quoteDetails: {
      type: Object,
      required: true,
    },
    paystack: {
      type: Object,
      required: true,
    }
  },
  methods: {
    update() {
      // console.log(this.quoteDetails)
      // this.data.firstname = this.quoteDetails.quote.firstname,
      //     this.data.lastname = this.quoteDetails.quote.lastname,
      //     this.data.email = this.quoteDetails.quote.email,
      //     this.data.quote_id = this.quoteDetails.travel_quote_id,
      //     this.data.user_travel_id = this.quoteDetails.user_travel_id,
      //     this.data.phone = this.quoteDetails.quote.telephone,
      //     this.data.dob = this.quoteDetails.quote.firstname
    },
    getResources() {
      this.$store.commit('startLoading');
      axios.get(`${baseURL}/vehicle/resources`)
          .then(res => {
            this.genders = res.data.data.gender;
            this.states = res.data.data.states;
            this.idMeans = res.data.data.idmeans;
            this.$store.commit('endLoading');
          })
          .catch(err => {
            this.$store.dispatch('handleError', err);
          });
    },
    utilityUpload() {
      const files = this.$refs.utility.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.utilityBillName = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.error.validid_image = "File size exceeds 2MB limit"
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.validid_image = ""
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.validid_image = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
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
    idUpload() {
      const files = this.$refs.idmeans.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.idmeansName = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.error.regno_image = 'File size exceeds 2MB limit.'
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.regno_image = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.regno_image = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }
    },
    getLga(e) {
      this.data.state_id = JSON.parse(e.target.value);
      if (e.target.value === "0") {
        this.lga = [];
      } else {
        const searchObject = this.states.find(
            model => model.id === JSON.parse(e.target.value)
        );
        this.lga = searchObject ? searchObject.lgas : [];
      }
    },
    validate(){
      const validation = this.validateForm(this.data);
      if (validation === true) {
        console.log("All fields are filled.");
        this.$emit('updatePolicy', this.data)
      } else {
        console.log("Following fields are empty:", validation);
      }
    },
  },
  watch: {
    quoteDetails: {
      handler(newVal) {
        this.data.user_vehicle_id = newVal.user_vehicle_id;
      },
      deep: true,
      immediate: true
    },
    paystack: {
      handler(newVal) {
        this.data.reference = newVal.reference;
      },
      deep: true,
      immediate: true
    },
    'data.bvn': function(newVal) {
      this.error.bvn = !/^\d{11}$/.test(newVal);
      // if (this.error.bvn) {
      //   this.data.bvn = '';
      // }
    },
    'data.driver_license_number': function(newVal) {
      this.error.driver_license_number = !/^[a-zA-Z0-9]{11}$/.test(newVal);
    }
  },
  computed: {
    fieldErrors() {
      const errors = {};
      this.emptyField.forEach(fieldName => {
        // Associate each empty field with its error message
        switch (fieldName) {
          case 'driver_license_number':
            errors[fieldName] = 'Driver license number is empty';
            break;
          case 'bvn':
            errors[fieldName] = 'BVN is empty';
            break;
          case 'date_of_birth':
            errors[fieldName] = 'Please enter a valid Date of Birth';
            break;
          case 'state_id':
            errors[fieldName] = 'Please select a State';
            break;
          case 'lga_id':
            errors[fieldName] = 'Please select a Lga';
            break;
          case 'gender_id':
            errors[fieldName] = 'Please select a Gender';
            break;
          case 'id_number':
            errors[fieldName] = 'Please enter a valid Id number';
            break;
          case 'year':
            errors[fieldName] = 'Please enter a valid year';
            break;
          case 'reg_state_id':
            errors[fieldName] = 'Please select a state';
            break;
          case 'validid_image':
            errors[fieldName] = 'Please upload a valid Id image';
            break;
          case 'regno_image':
            errors[fieldName] = 'Please upload a image of plate number';
            break;
          case 'idmeans_id':
            errors[fieldName] = 'Please select a Id Type';
            break;
            // Add cases for other fields as needed
          default:
            errors[fieldName] = `${fieldName} is not filled`;
            break;
        }
      });
      return errors;
    }
  },
  mounted() {
    this.update();
    this.getResources()
  },
};


</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 700px;
  background-color: #f7f7f7;
  //max-height: 600px;
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