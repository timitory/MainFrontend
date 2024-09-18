<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form>
          <div>
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Complete the Form </h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
                <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
              </svg>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Select Plan <span class="text-red-600 text-xs">*</span></label>
                <select  @change="handlePlanChange"  class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
                  <option value="">Select Plan</option>
                  <option v-for="(plan, index) in plans" :key="index" :value="plan.PlanId" :data-Id="plan.ID">
                    {{plan.Name}} - {{plan.MonthlyCost}}/{{plan.AnnualCost}}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Title <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.title"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Miss</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="surname" class="block font-bold text-black py-2 text-xs lg:text-sm">Surname <span class="text-red-600 text-xs">*</span></label>
                <input v-model="data.lastname" type="text" name="name" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="name" class="block font-bold text-black py-2 text-xs lg:text-sm">Firstname <span class="text-red-600 text-xs">*</span></label>
                <input v-model="data.firstname" type="text" name="name" placeholder="Shina" class="bg-custom lg:text-sm text-xs border border-custom rounded w-full px-3 py-2">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Gender <span class="text-red-600 text-xs">*</span></label>
                <select v-model.number="data.gender"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="">Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address <span class="text-red-600 text-xs">*</span></label>
                <input v-model="data.email" type="text" name="email" placeholder="paddycover@paddycover.com" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number <span class="text-red-600 text-xs">*</span></label>
                <input  v-model="data.phone" @input="(e) => validatePhoneNumber(e.target.value)" type="tel" name="phone" placeholder="08012345678" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
                <span class="block py-1.5 text-red-500 text-xs lg:text-sm">{{error.phone}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 text-xs lg:text-sm">Date of Birth <span class="text-red-600 text-xs">*</span></label>
                <input v-model="formattedDate" type="date" @change="formatDob" name="dob" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="country" class="block font-bold text-black py-2 text-xs lg:text-sm">Country <span class="text-red-600 text-xs">*</span></label>
                <input type="text" name="country" v-model="data.country" readonly placeholder="Nigeria" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="model" class="block font-bold text-black py-2 text-xs lg:text-sm">Marital Status <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.marital_status"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="occupation" class="block font-bold text-black py-2 text-xs lg:text-sm">Occupation <span class="text-red-600 text-xs">*</span></label>
                <input type="text" v-model="data.occupation" name="occupation" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="religion" class="block font-bold text-black py-2 text-xs lg:text-sm">Religion <span class="text-red-600 text-xs">*</span></label>
                <input type="text" v-model="data.religion" name="religion" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="nationality" class="block font-bold text-black py-2 text-xs lg:text-sm">Nationality <span class="text-red-600 text-xs">*</span></label>
                <input type="text" v-model="data.nationality" name="nationality" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="type" class="block font-bold text-black py-2 text-xs lg:text-sm">Blood Group</label>
                <select v-model="data.blood_group"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select blood group</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="issue" class="block font-bold text-black py-2 text-xs lg:text-sm">Genotype</label>
                <select v-model="data.genotype"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select genotype</option>
                  <option value="AA">AA</option>
                  <option value="AC">AC</option>
                  <option value="AS">AS</option>
                  <option value="CC">CC</option>
                  <option value="SC">SC</option>
                  <option value="SS">SS</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="type" class="block font-bold text-black py-2 text-xs lg:text-sm">State Of Origin <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.state_of_origin"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select state</option>
                  <option v-for="(state, index) in states" :key="index" :value="state.StateID">{{state.Name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="issue" class="block font-bold text-black py-2 text-xs lg:text-sm">Lga of Origin <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.lga_of_origin"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select Lga</option>
                  <option v-for="(lga, index) in lgaOrigin" :key="index" :value="lga.StateID">{{lga.Name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="company" class="block font-bold text-black py-2 text-xs lg:text-sm">Company Name</label>
                <input type="text" v-model="data.company" name="company" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="duration" class="block font-bold text-black py-2 text-xs lg:text-sm">Payment Duration <span class="text-red-600 text-xs">*</span></label>
                <select v-model.number="data.payment_frequency" class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="">Select Duration</option>
                  <option value="1">1 Month</option>
                  <option value="2">2 Months</option>
                  <option value="3">3 Months</option>
                  <option value="4">4 Months</option>
                  <option value="5">5 Months</option>
                  <option value="6">6 Months</option>
                  <option value="7">7 Months</option>
                  <option value="8">8 Months</option>
                  <option value="9">9 Months</option>
                  <option value="10">10 Months</option>
                  <option value="11">11 Months</option>
                  <option value="12">12 Months</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="address" class="block font-bold text-black py-2 text-xs lg:text-sm">Address <span class="text-red-600 text-xs">*</span></label>
                <input type="text" v-model="data.address" name="address" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-sm text-xs">
              </div>
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">State Of Residence <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.state_of_residence"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select state</option>
                  <option v-for="(state, index) in states" :key="index" :value="state.StateID">{{state.Name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Lga Of Residence <span class="text-red-600 text-xs">*</span></label>
                <select v-model="data.lga_of_residence"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select state</option>
                  <option v-for="(lga, index) in lgas" :key="index" :value="lga.LgaID">{{lga.Name}}</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="amount" class="block font-bold text-black py-2 text-xs lg:text-sm">Hospital <span class="text-red-600 text-xs">*</span></label>
                <select @change="(e) => data.hospital_id= e.target.value"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-sm text-xs">
                  <option value="" disabled selected>Select hospital</option>
                  <option v-for="(hospital, index) in hospitals" :key="index" :value="hospital.ID">{{hospital.HospitalName}}</option>
                </select>
                <p class="text-red-600 text-xs italic">{{ error.hospital }}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload image of Passport <span class="text-red-600 text-xs">*</span></label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="passport" class="bg-customgreen py-3 border-0 text-white"  ref="passport" @change="idUpload">
                  <label for="passport" class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:text-sm lg:w-1/4 w-2/5 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-full custom-outline-none text-xs px-2" v-model="imageUpload.passport" readonly/>
                </div>
                <p class="text-red-500 text-xs lg:text-sm" v-if="error.passport">{{error.passport}}</p>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="utility" class="block font-bold text-black py-2 text-xs lg:text-sm">Medical History</label>
                <textarea v-model="data.medical_history" class="bg-custom border border-custom rounded w-full px-3 py-3 focus-within:outline-none" rows="4" placeholder="medical history"></textarea>
              </div>
            </div>
            <div class="items-center flex gap-2">
              <input type="checkbox" v-model="check" :value="1">
              <p class="text-xs lg:text-sm">I accept <button type="button" @click="$emit('Term') " class="text-blue-500">terms and conditions</button></p>
            </div>
            <div class="flex flex-col justify-center items-center py-3">
              <button type="button" class=" text-white rounded px-6 py-2 w-2/4" :class="check.length > 0 ? 'bg-customgreen' : 'bg-grey'" @click="check.length > 0 ? $emit('Submit', data) : ''" >
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


import axios from "axios";
import baseURL from "@/main";
import {mapState} from "vuex";

export default {
  // components: {TermsModal},
  data() {
    return {
      next: false,
      showTermsModal: false,
      showError : false,
      check: [],
      // data: {
      //   "title": "",
      //   "lastname": "",
      //   "firstname": "",
      //   "underwriter_id": 1,
      //   "passport": "",
      //   "plan_id": "",
      //   "email": "",
      //   "phone": "",
      //   "dob": "",
      //   "gender": null,
      //   "marital_status": "",
      //   "occupation": "",
      //   "religion": "",
      //   "blood_group": "",
      //   "genotype": "",
      //   "company": "",
      //   "nationality": "",
      //   "country": "Nigeria",
      //   "state_of_origin": null,
      //   "lga_of_origin": null,
      //   "payment_frequency": null,
      //   "state_of_residence": null,
      //   "lga_of_residence": null,
      //   "address": "",
      //   "medical_history": "nill",
      //   "hospital_id": ""
      // },
      error: {
        hospital: '',
        phone: '',
        passport: '',
      },
      states: [],
      lgas: [],
      lgaOrigin: [],
      hospitals: [],
      imageUpload: {
        passport: '',
      },
      formattedDate: '',
      planID: '',
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  computed: {
    ...mapState({
      plans: state => state.plans,
    }),
  },
  methods: {
    handlePlanChange(event) {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const planId = event.target.value;
      const planDataId = selectedOption.getAttribute('data-id');

      this.data.plan_id = planDataId;
      this.planID = planId;

      console.log('Selected Plan ID:', planId);
      console.log('Selected Plan Data ID:', planDataId);
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
    getChiHMOStates(){
      axios.get(`${baseURL}/hmo/states`)
          .then(res=> {
            console.log(res.data.data)
            this.states = res.data.data
          })
          .catch(err=>{
            this.$store.dispatch('handleError', err)
          })
    },
    getLga(stateID){
      axios({url:`${baseURL}/hmo/lga`,data: {
          state_id: stateID
        } , method: 'POST'})
          .then((res)=> {
            console.log(res.data.data)
            this.lgas = res.data.data
          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    getLgaOrigin(stateID){
      axios({url:`${baseURL}/hmo/lga`,data: {
          state_id: stateID
        } , method: 'POST'})
          .then((res)=> {

            this.lgaOrigin = res.data.data

          })
          .catch((err)=> {
            console.log(err)
            this.$store.dispatch('handleError', err)
          })
    },
    idUpload() {
      const files = this.$refs.passport.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.passport = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.passport = '';
          this.error.passport = 'File size exceeds 2MB limit.'
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.passport = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.passport = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }

    },
    getHospital(planID, stateID, lgaID){
      axios({url:`${baseURL}/hmo/hospitals`,data: {
          PlanID: planID,
          StateId: stateID,
          LgaId: lgaID,
        } , method: 'POST'})
          .then((res)=> {
            console.log(res.data.data)
            console.log(res.data.data.hospitals)
            this.hospitals = res.data.data.hospitals
            this.error.hospital= ''
          })
          .catch((err)=> {
            console.log(err)
            this.error.hospital = err.response.data.message
            this.hospitals = []
            // this.$store.dispatch('handleError', err)
          })
    },
    formatDob(e){
      console.log(e.target.value)
      this.data.dob = e.target.value
      let parts = e.target.value.split('-');
      console.log(parts)
      let formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      console.log(formattedDate)
      this.data.dob = formattedDate
    },
     validate() {


      this.$emit('buyPolicy', this.data)

    },
  },
  watch: {
    'data.state_of_residence': {
      handler: function (newValue) {
          if (newValue) {
            console.log(newValue);
            this.getLga(newValue.toString());
          }
        },
        deep: true,
      },
    'data.state_of_origin':{
      handler: function (newValue) {
        if (newValue) {
          console.log(newValue);
          this.getLgaOrigin(newValue.toString());
        }
      },
      deep: true,
    },

    'data.lga_of_residence': {
      handler: function (newValue) {
        // console.log('New value of lga_of_residence:', newValue);
        if (newValue) {
          this.error.hospital= ''
          console.log(newValue);
          this.getHospital(this.planID.toString(), this.data.state_of_residence.toString(), this.data.lga_of_residence.toString());
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.getChiHMOStates()
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
