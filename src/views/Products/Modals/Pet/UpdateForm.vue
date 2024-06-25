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
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="total_pens" class="block font-bold text-black py-2 text-xs lg:text-sm">Total Number of Pens</label>
                <input type="text" name="total_pens" v-model="data.total_pens"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="stocking_date" class="block font-bold text-black py-2 text-xs lg:text-sm">Date of Stocking</label>
                <input type="date" name="stocking_date" v-model="data.stocking_date"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Source of Pet</label>
                <select v-model="data.animal_source"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled>Select Source</option>
                  <option>Breeding</option>
                  <option>Purchase</option>
                  <option>Birth</option>
                </select>
              </div>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 text-xs lg:text-sm">Purpose of Pet</label>
                <select v-model="data.animal_purpose"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled>Select Purpose</option>
                  <option>Breeding</option>
                  <option>Security</option>
                  <option>Meat Production</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="location_of_pet" class="block font-bold text-black py-2 text-xs lg:text-sm">Pet Location</label>
                <input type="text" name="location_of_pet" v-model="data.location_of_pet" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="is_doctor_qualfied" class="block font-bold text-black py-2 text-xs lg:text-sm">Is there a qualified Vet Doctor you visit?</label>
                <select v-model="data.is_doctor_qualfied"  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled>Select </option>
                  <option :value=true>Yes</option>
                  <option :value=false>No</option>
                </select>
              </div>
            </div>
            <div v-if="data.is_doctor_qualfied">
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="doctor_name" class="block font-bold text-black py-2 text-xs lg:text-sm">Name</label>
                  <input type="text" name="doctor_name" v-model="data.doctor_name" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="doctor_qualification" class="block font-bold text-black py-2 text-xs lg:text-sm">Qualification</label>
                  <input type="text" name="doctor_qualification" v-model="data.doctor_qualification" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="doctor_vcn_no" class="block font-bold text-black py-2 text-xs lg:text-sm">VCN No</label>
                  <input type="text" name="doctor_vcn_no" v-model="data.doctor_vcn_no" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="doctor_vaccination_details" class="block font-bold text-black py-2 lg:text-sm text-xs">Give details of vaccinations and or medication administered in the last six months</label>
                  <input type="text" v-model="data.doctor_vaccination_details"  name="doctor_vaccination_details" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
                </div>
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
            <div class="pt-2">
              <h1 class="text-customgreen font-bold">PREVIOUS LOSS HISTORY</h1>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="loss_year" class="block font-bold text-black py-2 text-xs lg:text-sm">Year of Loss</label>
                <input type="text" name="loss_year" v-model="data.loss_year" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="loss_breed_pet" class="block font-bold text-black py-2 text-xs lg:text-sm">Breed Of Pet</label>
                <input type="text" name="loss_breed_pet" v-model="data.loss_breed_pet" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="loss_number" class="block font-bold text-black py-2 text-xs lg:text-sm">Total No of Pet Lost</label>
                <input type="text" name="loss_number" v-model="data.loss_number"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="loss_cause" class="block font-bold text-black py-2 text-xs lg:text-sm">Cause of Loss</label>
                <input type="text" name="loss_cause" v-model="data.loss_cause"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="loss_effort" class="block font-bold text-black py-2 text-xs lg:text-sm">Effort to minimize Loss</label>
                <input type="text" name="loss_effort" v-model="data.loss_effort"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="loss_value" class="block font-bold text-black py-2 text-xs lg:text-sm">Value of Loss</label>
                <money v-bind="money" v-model="data.loss_value"
                       class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md"
                       required></money>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="loss_threat" class="block font-bold text-black py-2 text-xs lg:text-sm">What do you consider to be the biggest threat to your Pet?</label>
                <input type="text" name="loss_threat" v-model="data.loss_threat"  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between items-center py-3">
              <p class="text-sm underline font-bold cursor-pointer" @click="next = false">Back</p>
              <button type="button" class=" text-white rounded px-6 py-2 w-2/4 bg-customgreen"  @click="submit">
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
      data: {
        "user_pet_id": "",
        "stocking_date": "",
        "animal_source": "",
        "animal_purpose": "",
        "is_doctor_qualfied": false,
        "total_pens": "",
        "doctor_name": "",
        "doctor_qualification": "",
        "doctor_vaccination_details": "",
        "location_of_pet": "",
        "loss_year": "",
        "loss_breed_pet": "",
        "loss_number": "",
        "loss_cause": "",
        "loss_effort": "",
        "loss_value": "",
        "loss_threat": ""
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
    quoteDetails: {
      type: Object,
      required: true
    }
  },
  methods: {
    submit() {
      this.$emit('submit', this.data);
    },
  },
  mounted() {
    this.data.user_pet_id = this.quoteDetails.user_pet_id;
  },
  watch: {
    'data.loss_value': function(newValue, oldValue) {
      console.log(oldValue)
      if (typeof newValue !== 'string') {
        this.data.loss_value = newValue.toString();
      }
    }
  },
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