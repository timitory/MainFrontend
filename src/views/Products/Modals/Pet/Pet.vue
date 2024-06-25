<template>
  <div class="l-modal">
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form class="relative">
          <div v-if="!next">
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Complete the Form </h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel">
                <path
                  d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z"
                  fill="black" />
              </svg>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="customer_name" class="block font-bold text-black py-2 text-xs lg:text-sm">Name (FIRST,
                  SURNAME)</label>
                <input type="text" name="customer_name" v-model="data.customer_name" placeholder="Shina"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address</label>
                <input type="email" name="email" v-model="data.email" placeholder="home@paddycover.com"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                <input type="tel" name="phone" :value="data.phone" @input="(e) => validatePhoneNumber(e.target.value)"
                  placeholder="08123456789"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 text-xs lg:text-sm">Date of Birth</label>
                <input type="date" name="dob" v-model="data.dob" placeholder="DD/MM/YYYY"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="address" class="block font-bold text-black py-2 text-xs lg:text-sm">Address</label>
                <input type="text" name="address" v-model="data.address" placeholder=""
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="nationality" class="block font-bold text-black py-2 text-xs lg:text-sm">Nationality</label>
                <input type="text" name="nationality" v-model="data.nationality" placeholder=""
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="occupation" class="block font-bold text-black py-2 text-xs lg:text-sm">Occupation</label>
                <input type="text" name="occupation" v-model="data.occupation" placeholder=""
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="customer_id_type" class="block font-bold text-black py-2 text-xs lg:text-sm">Id Type</label>
                <select v-model="data.customer_id_type"
                  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled>Select ID</option>
                  <option value="passport">Passport</option>
                  <option value="National Id">National Id</option>
                  <option value="Driverlicense">Driver license</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="customer_id_number" class="block font-bold text-black py-2 text-xs lg:text-sm">Id
                  Number</label>
                <input type="text" name="customer_id_number" v-model="data.customer_id_number" placeholder=""
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
              </div>
              <div class="block w-full">
                <label for="customer_id_issue_date" class="block font-bold text-black py-2 lg:text-sm text-xs">Id Issue
                  Date</label>
                <input type="date" v-model="data.customer_id_issue_date" name="customer_id_issue_date"
                  placeholder="DD/MM/YYYY"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="id_expiry_date" class="block font-bold text-black py-2 lg:text-sm text-xs">Id Expire
                  Date</label>
                <input type="date" v-model="data.id_expiry_date" @input="validateDate" name="id_expiry_date"
                  placeholder="DD/MM/YYYY" :min="data.customer_id_issue_date"
                  :disabled="data.customer_id_issue_date === ''"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Payment
                  Frequency</label>
                <select v-model.number="data.payment_frequency"
                  class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="">Select Frequency</option>
                  <option v-for="(payment, index) in frequency" :key="index" :value="payment.id">{{payment.name}}
                  </option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload image of Id
                  <span class="text-red-600 text-xs">*</span></label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="passport" class="bg-customgreen py-3 border-0 text-white" ref="passport"
                    @change="idUpload">
                  <label for="passport"
                    class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:text-sm lg:w-1/4 w-2/5 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" class="bg-custom w-full custom-outline-none text-xs px-2"
                    v-model="imageUpload.idmeansName" readonly />
                </div>
                <p class="text-red-500 text-xs lg:text-sm" v-if="error.passport">{{error.passport}}</p>
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
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel">
                <path
                  d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z"
                  fill="black" />
              </svg>
            </div>
            <div v-if="selectedPlan === 2">
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="company_name" class="block font-bold text-black py-2 text-xs lg:text-sm">Company
                    Name</label>
                  <input type="text" name="company_name" v-model="data.company_name" placeholder="paddycover"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="incorporation_number"
                    class="block font-bold text-black py-2 text-xs lg:text-sm">Incorpration/Rc Number</label>
                  <input type="text" name="incorporation_number" v-model="data.incorporation_number" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="phone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                  <input type="tel" name="phone" :value="data.phone" @input="(e) => validatePhoneNumber(e.target.value)"
                    placeholder="08123456789"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                  <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
                </div>
                <div class="block w-full">
                  <label for="incorporation_date"
                    class="block font-bold text-black py-2 text-xs lg:text-sm">Incorpration Date</label>
                  <input type="date" name="incorporation_date" v-model="data.incorporation_date"
                    placeholder="DD/MM/YYYY"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="tax_id" class="block font-bold text-black py-2 text-xs lg:text-sm">Tax Id Number</label>
                  <input type="text" name="tax_id" v-model="data.tax_id" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="incorporation_state"
                    class="block font-bold text-black py-2 text-xs lg:text-sm">Incorpration State</label>
                  <input type="text" name="incorporation_state" v-model="data.incorporation_state" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="office_address" class="block font-bold text-black py-2 text-xs lg:text-sm">Office
                    Address</label>
                  <input type="text" name="office_address" placeholder="" v-model="data.office_address"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="business_type" class="block font-bold text-black py-2 text-xs lg:text-sm">Business
                    Type</label>
                  <input type="text" name="business_type" v-model="data.business_type" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
            </div>
            <div v-if="selectedPlan === 1">
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="dog_color" class="block font-bold text-black py-2 text-xs lg:text-sm">Color</label>
                  <input type="text" name="dog_color" v-model="data.dog_color"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="breed_type" class="block font-bold text-black py-2 text-xs lg:text-sm">Breed Type</label>
                  <input type="text" name="breed_type" v-model="data.breed_type"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="breed_age" class="block font-bold text-black py-2 text-xs lg:text-sm">Age(Years)</label>
                  <input type="text" name="breed_age" v-model="data.breed_age"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="health_status" class="block font-bold text-black py-2 text-xs lg:text-sm">Health
                    Status</label>
                  <input type="text" name="health_status" v-model="data.health_status"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="acquisition_amount" class="block font-bold text-black py-2 text-xs lg:text-sm">Acquisition
                    Cost</label>
                  <money v-bind="money" v-model="data.acquisition_amount"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" required></money>
                </div>
                <div class="block w-full">
                  <label for="maintenance_cost" class="block font-bold text-black py-2 text-xs lg:text-sm">Maintenance
                    Cost(Feed, Medication, Vaccine)</label>
                  <money v-bind="money" v-model="data.maintenance_cost"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" required></money>
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="medication_received" class="block font-bold text-black py-2 text-xs lg:text-sm">Medication
                    Received</label>
                  <input type="text" name="medication_received" v-model="data.medication_received"
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
            </div>
            <div v-if="selectedPlan === 2">
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="lastname" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload populated
                    excel file<span class="text-red-600 text-xs">*</span></label>
                  <div class="rounded border border-custom flex">
                    <input hidden type="file" id="passport" class="bg-customgreen py-3 border-0 text-white"
                      ref="passport" @change="excelUpload">
                    <label for="passport"
                      class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:text-sm lg:w-1/4 w-2/5 cursor-pointer">
                      Choose File
                    </label>
                    <input type="text" class="bg-custom w-full custom-outline-none text-xs px-2"
                      v-model="imageUpload.utilityBillName" readonly />
                  </div>
                  <p class="text-red-500 text-xs lg:text-sm" v-if="error.passport">{{error.passport}}</p>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center gap-2">
              <input type="checkbox" v-model="check" :value="1">
              <p class="text-sm">I accept <button type="button" @click="showTermsModal = true"
                  class="text-blue-500">terms and conditions</button></p>
            </div>
            <p class="text-red-500 text-xs mt-2" v-if="showError">Please accept terms</p>
            <div class="flex justify-between items-center py-3">
              <p class="text-sm underline font-bold cursor-pointer" @click="next = false">Back</p>
              <button type="button" class=" text-white rounded px-6 py-2 w-2/4"
                :class="check.length > 0 ? 'bg-customgreen' : 'bg-grey'" @click="check.length > 0 ? submit() : ''">
                Buy Policy
              </button>
            </div>
          </div>
          <div v-if="download">
            <div class="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>
            <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center pointer-events-auto">
              <div class="custom-border bg-white w-1/2">
                <div class=" bg-white mx-auto w-10/12 rounded my-3 flex flex-col gap-y-2.5">
                  <div class="flex justify-end">
                    <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none"
                      xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel z-10">
                      <path
                        d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z"
                        fill="black" />
                    </svg>
                  </div>
                  <div class=" border-army flex flex-col gap-y-1.5">
                    <a @click="excelFormat" download="excel"
                      class="text-center font-semibold text-sm text-blue-500 underline cursor-pointer">
                      Before Proceeding, Please download the sample excel sheet template
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
      <transition name="scale">
        <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false" />
      </transition>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
import TermsModal from "@/components/TermsModal.vue";
import baseURL from "@/main";

export default {
  components: {TermsModal, Money},
  data() {
    return {
      next: false,
      download: false,
      showError : false,
      check: [],
      showTermsModal: false,
      imageUpload: {
        utility: '',
        utilityBillName: '',
        idmeans: '',
        idmeansName: '',
      },
      data: {
        "pet_type_id": 1,
        "pet_category_id":  0,
        "customer_name": "",
        "phone": "",
        "dob": "",
        "nationality": "",
        "address": "",
        "email": "",
        "occupation": "",
        "customer_id_type": "",
        "customer_id_number": "",
        "customer_id_issue_date": "",
        "id_expiry_date": "",
        "id_upload": "",
        "dog_color": "",
        "breed_type": "",
        "breed_age": "",
        "acquisition_amount": 0,
        "maintenance_cost": 0,
        "medication_received": "",
        "health_status": "",
        "payment_frequency": 0,
      },
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
    // Define props here
    selectedPlan: {
      type: Number,
      required: true
    },
    frequency: {
      type: Array,
      required: true
    }
  },
  methods: {
    async excelFormat(){
      const response = await fetch(`${baseURL}/pet/policy/template/batch`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
      this.download = false
      // localStorage.setItem('download', 'true')
    },
    idUpload() {
      const files = this.$refs.passport.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.idmeansName = files[0].name;
        console.log(this.imageUpload.idmeansName);
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.idmeansName = '';
          this.error.passport = 'File size exceeds 2MB limit.'
          return;
        }

        this.error.passport = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.id_upload = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }

    },
    excelUpload() {
      const files = this.$refs.passport.files;
      console.log(files)
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.utilityBillName = files[0].name;
        console.log(this.imageUpload.utilityBillName);
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.utilityBillName = '';
          this.error.passport = 'File size exceeds 2MB limit.'
          return;
        }
        this.error.passport = ''
        this.data.excel = files[0]
      }

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
    validateDate(event) {
      const inputDate = new Date(event.target.value);
      const minDate = new Date(this.data.customer_id_issue_date);
      if (inputDate < minDate) {
        // Reset input value to the minimum date
        event.target.value = this.minDate;
        // Update selectedDate data property
        return;
      }
      this.data.id_expiry_date = event.target.value;
    },
    submit() {
      if (this.selectedPlan === 2){
        let data = new FormData()
        for (let key in this.data) {
          data.append(key, this.data[key]);
          console.log(key, this.data[key])
        }
        console.log('dgd', data)
        this.$emit('submit', data);

      }else {
        this.$emit('submit', this.data);
      }
    },
    checkDownload() {
      if (this.selectedPlan === 2) {
        if (localStorage.getItem('download') === 'true') {
          this.download = false
        } else {
          this.download = true
        }
      }
    }
  },
  mounted() {
    this.data.pet_category_id = this.selectedPlan
    this.checkDownload()
  },
  // watch: {
  //   'data.acquisition_amount': function(newValue, oldValue) {
  //     console.log(oldValue)
  //     if (newValue != null && typeof newValue !== 'string') {
  //       this.data.acquisition_amount = newValue.toString();
  //     }
  //   },
  //   'data.maintenance_cost': function(newValue, oldValue) {
  //     console.log(oldValue)
  //     if (newValue != null && typeof newValue !== 'string') {
  //       this.data.maintenance_cost = newValue.toString();
  //     }
  //   }
  //   // Other watchers if needed
  // },
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

.custom-border {
  border: 9px solid ;
  border-image-source: url(../../../../assets/images/border.png);
  border-image-slice: 61 58 51 48;
  border-image-width: 30px 30px 30px 30px;
  border-image-repeat: stretch stretch;
}
</style>