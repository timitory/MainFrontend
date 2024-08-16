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
                <label for="firstname" class="block font-bold text-black py-2 text-xs lg:text-sm">Name (FIRST,
                  SURNAME)</label>
                <input type="text" name="firstname" v-model="data.firstname" @blur="validateName" placeholder="Shina"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.name" class="text-red-500 text-xs">{{ error.name }}</span>
              </div>
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 text-xs lg:text-sm">Email Address</label>
                <input type="email" name="email" v-model="data.email" placeholder="home@paddycover.com"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.email" class="text-red-500 text-xs">{{ error.email }}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="telephone" class="block font-bold text-black py-2 text-xs lg:text-sm">Phone Number</label>
                <input type="tel" name="telephone" :value="data.telephone"
                  @input="(e) => validatePhoneNumber(e.target.value)" placeholder="08123456789"
                  class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 text-xs lg:text-sm">Date of Birth</label>
                <input type="date" name="dob" v-model="data.dob" placeholder="DD/MM/YYYY" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.dob" class="text-red-500 text-xs">{{ error.dob }}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="address" class="block font-bold text-black py-2 text-xs lg:text-sm">Address</label>
                <input type="text" name="address" v-model="data.address" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.address" class="text-red-500 text-xs">{{ error.address }}</span>
              </div>
              <div class="block w-full">
                <label for="nationality" class="block font-bold text-black py-2 text-xs lg:text-sm">Nationality</label>
                <input type="text" name="nationality" v-model="data.nationality" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.nationality" class="text-red-500 text-xs">{{ error.nationality }}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="occupation" class="block font-bold text-black py-2 text-xs lg:text-sm">Occupation</label>
                <input type="text" name="occupation" v-model="data.occupation" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.occupation" class="text-red-500 text-xs">{{ error.occupation }}</span>
              </div>
              <div class="block w-full">
                <label for="customer_id_type" class="block font-bold text-black py-2 text-xs lg:text-sm">Id Type</label>
                <select v-model="data.customer_id_type" class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                  <option value="" disabled>Select ID</option>
                  <option value="passport">Passport</option>
                  <option value="National Id">National Id</option>
                  <option value="Driverlicense">Driver license</option>
                </select>
                <span v-if="error.customer_id_type" class="text-red-500 text-xs">{{ error.customer_id_type }}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="customer_id_number" class="block font-bold text-black py-2 text-xs lg:text-sm">Id Number</label>
                <input type="text" name="customer_id_number" v-model="data.customer_id_number" placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                <span v-if="error.customer_id_number" class="text-red-500 text-xs">{{ error.customer_id_number }}</span>
              </div>
              <div class="block w-full">
                <label for="id_image" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload image of Id
                  <span class="text-red-600 text-xs">*</span></label>
                <div class="rounded border border-custom flex">
                  <input hidden type="file" id="idImage" class="bg-customgreen py-3 border-0 text-white" ref="idImage"
                    @change="idUpload">
                  <label for="idImage"
                    class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:text-xs lg:w-7/12 w-7/12 cursor-pointer">
                    Choose File
                  </label>
                  <input type="text" placeholder="" class="bg-custom w-full custom-outline-none text-xs px-2"
                    v-model="imageUpload.idImage" readonly />
                </div>
                <p class="text-red-500 text-xs lg:text-sm" v-if="error.idImage">{{error.idImage}}</p>
              </div>
            </div>
            <div class="flex flex-col justify-center items-center py-3">
              <button type="button" class="bg-customgreen text-white rounded px-6 py-2 w-1/4" @click="validateForm">
                Next
              </button>
            </div>
          </div>
          <div v-else>
            <h1 class="text-customgreen font-bold">Gadgets Details</h1>
            <div v-if="policyType === 'Corporate'">
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="name_of_corporation" class="block font-bold text-black py-2 text-xs lg:text-sm">Name Of
                    Corporation</label>
                  <input type="text" name="name_of_corporation" v-model="data.name_of_corporation" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="corporation_number" class="block font-bold text-black py-2 text-xs lg:text-sm">Corporation
                    Number</label>
                  <input type="text" name="corporation_number" v-model="data.corporation_number" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="tax_id" class="block font-bold text-black py-2 text-xs lg:text-sm">Tax
                    Identification Number</label>
                  <input type="text" name="tax_id" v-model="data.tax_id" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="nature_of_business" class="block font-bold text-black py-2 text-xs lg:text-sm">Nature Of
                    Business</label>
                  <input type="text" name="nature_of_business" v-model="data.nature_of_business" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="country_of_corporation" class="block font-bold text-black py-2 text-xs lg:text-sm">Country
                    of Incorporation</label>
                  <input type="text" name="country_of_corporation" v-model="data.country_of_corporation" placeholder=""
                    class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
                <div class="block w-full">
                  <label for="registered_business_address"
                    class="block font-bold text-black py-2 text-xs lg:text-sm">Registered Business Address</label>
                  <input type="text" name="registered_business_address" v-model="data.registered_business_address"
                    placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="utility_type" class="block font-bold text-black py-2 text-xs lg:text-sm">Utility
                    Type</label>
                  <select v-model="data.utility_type"
                    class="bg-custom border border-custom rounded w-full px-3 py-2.5 text-xs lg:text-md">
                    <option value="">Select Utilty Type</option>
                    <option>Waste Bill</option>
                    <option>Land use</option>
                    <option>Tablet</option>
                  </select>
                </div>
                <div class="block w-full">
                  <label for="utility_bill_image" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload
                    utility bill <span class="text-red-600 text-xs">*</span></label>
                  <div class="rounded border border-custom flex">
                    <input hidden type="file" id="utility" class="bg-customgreen py-3 border-0 text-white" ref="utility"
                      @change="utilityUpload">
                    <label for="utility"
                      class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:w-7/12 w-7/12 cursor-pointer">
                      Choose File
                    </label>
                    <input type="text" placeholder="" class="bg-custom w-full custom-outline-none text-xs px-2"
                      v-model="imageUpload.utility" readonly />
                  </div>
                  <p class="text-red-500 text-xs lg:text-sm" v-if="error.utility">{{error.utility}}</p>
                </div>
              </div>
              <div class="flex justify-between gap-6 py-1">
                <div class="block w-full">
                  <label for="corporate_certificate" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload
                    Corporation Certificate <span class="text-red-600 text-xs">*</span></label>
                  <div class="rounded border border-custom flex">
                    <input hidden type="file" id="corporateCertificate" class="bg-customgreen py-3 border-0 text-white"
                      ref="corporateCertificate" @change="certificateUpload">
                    <label for="corporateCertificate"
                      class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:w-7/12 w-7/12 cursor-pointer">
                      Choose File
                    </label>
                    <input type="text" placeholder="" class="bg-custom w-full custom-outline-none text-xs px-2"
                      v-model="imageUpload.corporateCertificate" readonly />
                  </div>
                  <p class="text-red-500 text-xs lg:text-sm" v-if="error.passport">{{error.corporateCertificate}}</p>
                </div>
                <div class="block w-full">
                  <label for="corporate_certificate" class="block font-bold text-black py-2 text-xs lg:text-sm">Upload
                    populated excel file<span class="text-red-600 text-xs">*</span></label>
                  <div class="rounded border border-custom flex">
                    <input hidden type="file" id="excel" class="bg-customgreen py-3 border-0 text-white" ref="excel"
                      @change="excelUpload">
                    <label for="excel"
                      class="bg-customgreen py-3 px-3 border-0 text-white rounded-l text-xs lg:w-7/12 w-7/12 cursor-pointer">
                      Choose File
                    </label>
                    <input type="text" placeholder="" class="bg-custom w-full custom-outline-none text-xs px-2"
                      v-model="imageUpload.excel" readonly />
                  </div>
                  <p class="text-red-500 text-xs lg:text-sm" v-if="error.excel">{{error.excel}}</p>
                </div>
              </div>
            </div>
            <div v-if="policyType === 'Individual'">
              <div v-for="index in gadgetlist" :key="index">
                <div class="flex justify-between gap-6 py-1">
                  <div class="block w-full">
                    <label for="homeitem" class="block font-bold text-black py-2 text-xs lg:text-sm">Gadget Item</label>
                    <input type="text" name="registered_business_address" v-model="gadgetdetails['gadget_config_' + index]"
                           placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                  </div>
                  <div class="block w-full">
                    <label for="monetaryvalue" class="block font-bold text-black py-2 text-xs lg:text-sm">Monetary Value
                      (NGN)</label>
                    <money v-model="gadgetdetails['gadget_price_' + index]" v-bind="money"
                      class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md" required>
                    </money>
                  </div>
                </div>
                <div class="flex justify-between gap-6 py-1">
                  <div class="block w-full">
                    <label for="registered_business_address"
                           class="block font-bold text-black py-2 text-xs lg:text-sm">Serial Number</label>
                    <input type="text" name="registered_business_address" v-model="gadgetdetails['gadget_serial_' + index]"
                           placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                  </div>
                  <div class="block w-full">
                    <label for="registered_business_address"
                           class="block font-bold text-black py-2 text-xs lg:text-sm">Configuration</label>
                    <input type="text" name="registered_business_address" v-model="gadgetdetails['gadget_config_' + index]"
                           placeholder="" class="bg-custom border border-custom rounded w-full px-3 py-2 text-xs lg:text-md">
                  </div>
                </div>
              </div>
              <div class="flex gap-2 items-center py-1" @click="addnew">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="cancel">
                  <path
                    d="M18 4H6C4.897 4 4 4.897 4 6V18C4 19.103 4.897 20 6 20H18C19.103 20 20 19.103 20 18V6C20 4.897 19.103 4 18 4ZM6 18V6H18L18.002 18H6Z"
                    fill="black" />
                  <path d="M13 8H11V11H8V13H11V16H13V13H16V11H13V8Z" fill="black" />
                </svg>
                <h1 class=" font-bold">Add Item</h1>
              </div>
            </div>
            <div class="items-center flex gap-2 pt-3">
              <input type="checkbox" name="terms" class="border-2" />
              <p class="text-sm">I accept <button type="button" @click="$emit('terms')"
                  class="text-blue-500">terms and conditions</button></p>
            </div>
            <div class="flex justify-between items-center py-3">
              <p class="text-sm underline font-bold cursor-pointer" @click="next = false">Back</p>
              <button type="button" class="bg-customgreen text-white rounded px-6 py-2 w-1/4" @click="submit">
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
    </div>
<!--    <transition name="scale">-->
<!--      <TermsModal v-if="showTermsModal" v-on:close="showTermsModal = false" />-->
<!--    </transition>-->
  </div>
</template>

<script>
import { Money } from 'v-money'
import baseURL from "@/main";

export default {
  components: { Money},
  data() {
    return {
      next: false,
      showTermsModal: false,
      download: false,
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      imageUpload: {
        utility: '',
        corporateCertificate: '',
        idImage: '',
        serial_number: '',
        configuration: '',
        excel: '',
      },
      error: {
        idImage: '',
        utility: '',
        corporateCertificate: '',
        excel: '',
        name: '',
      },
      gadgetlist: 1,
      gadgetdetails: {},

    };
  },
  props: {
    policyType: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true,
    },
    term: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    validateName() {
      const nameParts = this.data.firstname.trim().split(' ');
      if (nameParts.length < 2) {
        this.error.name = 'Please enter both first name and surname.';
      } else {
        this.error.name = '';
      }
    },
    validateForm() {
      // Reset error messages
      this.error = {
        name: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        nationality: '',
        occupation: '',
        customer_id_type: '',
        customer_id_number: '',
        idImage: '',
        serial_number: '',
        configuration: '',
      };

      // Validate each field
      const nameParts = this.data.firstname.trim().split(' ');
      if (nameParts.length < 2) {
        this.error.name = 'Please enter both first name and surname.';
      }

      const emailPattern = /\S+@\S+\.\S+/;
      if (!emailPattern.test(this.data.email)) {
        this.error.email = 'Invalid email address';
      }
      // this.data.telephone = phoneNumber
      const digitsOnly = this.data.telephone.replace(/\D/g, '');
      const expectedLength = 11;
      if (digitsOnly.length !== expectedLength){
        this.error.phone = "Invalid Phone Number"
      }
      if (!this.data.dob) {
        this.error.dob = 'Date of Birth is required';
      }
      if (!this.data.address) {
        this.error.address = 'Address is required';
      }
      if (!this.data.nationality) {
        this.error.nationality = 'Nationality is required';
      }
      if (!this.data.occupation) {
        this.error.occupation = 'Occupation is required';
      }
      if (!this.data.customer_id_type) {
        this.error.customer_id_type = 'ID Type is required';
      }
      if (!this.data.customer_id_number) {
        this.error.customer_id_number = 'ID Number is required';
      }
      if (!this.imageUpload.idImage) {
        this.error.idImage = 'ID Image is required';
      }

      // Check if there are any errors
      const hasError = Object.values(this.error).some(error => error !== '');
      if (!hasError) {
        // Proceed to the next step if no errors
        this.next = true;
      }
    },
    async excelFormat(){
      const response = await fetch(`${baseURL}/gadget/policy/template/batch`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, '_blank');
      this.download = false

      // localStorage.setItem('xhrdownload', 'true')
    },
    idUpload() {
      const files = this.$refs.idImage.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      if (files.length > 0) {
        this.imageUpload.idImage = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.idImage = '';
          this.error.idImage = 'File size exceeds 2MB limit.'
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.idImage = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.id_image = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }

    },
    utilityUpload() {
      const files = this.$refs.utility.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.utility = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.utility = '';
          this.error.utility = 'File size exceeds 2MB limit.'
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.utility = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.utility_bill_image = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }

    },
    certificateUpload() {
      const files = this.$refs.corporateCertificate.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      console.log(files);
      if (files.length > 0) {
        this.imageUpload.corporateCertificate = files[0].name;
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.corporateCertificate = '';
          this.error.corporateCertificate = 'File size exceeds 2MB limit.'
          // console.log("File size exceeds 2MB limit");
          return;
        }

        this.error.corporateCertificate = ''
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.data.corporate_certificate = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(files[0]);
      }

    },
    excelUpload() {
      const files = this.$refs.excel.files;
      const maxSizeInBytes = 2 * 1024 * 1024;
      switch (this.$refs.excel.files[0].type) {
        case "application/vnd.ms-excel":
          this.error.excel = 'Please upload a valid excel file'
          break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          this.error.excel = 'Please upload a valid excel file'
          break;
        case "application/excel":
          this.error.excel = 'Please upload a valid excel file'
          break;
        case "application/x-excel":
          this.error.excel = 'Please upload a valid excel file'
          break;
        case "application/x-msexcel":
          this.error.excel = 'Please upload a valid excel file'
          break;
        default:
          this.error.excel = ''
      }
      if (files.length > 0) {
        this.imageUpload.excel = files[0].name;
        console.log(this.imageUpload.excel);
        if (files[0].size > maxSizeInBytes) {
          this.imageUpload.excel = '';
          this.error.excel = 'File size exceeds 2MB limit.'
          return;
        }
        this.error.excel = ''
        this.data.excel = files[0]
      }
    },
    // frontViewUpload(index) {
    //   const inputRef = this.$refs['frontview' + index];
    //   const files = inputRef[0].files;
    //   const maxSizeInBytes = 2 * 1024 * 1024;
    //   if (files.length > 0) {
    //     this.imageUpload['frontview' + index] = files[0].name
    //     if (files[0].size > maxSizeInBytes) {
    //       this.imageUpload['frontview' + index] = '';
    //       this.error['frontview' + index] = 'File size exceeds 2MB limit.'
    //       // console.log("File size exceeds 2MB limit");
    //       return;
    //     }
    //
    //     this.error['frontview' + index] = ''
    //     const fileReader = new FileReader();
    //     const vm = this;
    //     fileReader.onload = function (fileLoadedEvent) {
    //       vm.gadgetdetails['gadget_front_view_' + index] = fileLoadedEvent.target.result;
    //       vm.$nextTick(() => {});
    //     };
    //     fileReader.readAsDataURL(files[0]);
    //   }
    //
    // },
    // backViewUpload(index) {
    //   const inputRef = this.$refs['backview' + index];
    //   const files = inputRef[0].files;
    //   const maxSizeInBytes = 2 * 1024 * 1024;
    //   if (files.length > 0) {
    //     this.imageUpload['backview' + index] = files[0].name;
    //     if (files[0].size > maxSizeInBytes) {
    //       this.imageUpload['backview' + index] = '';
    //       this.error['backview' + index] = 'File size exceeds 2MB limit.'
    //       // console.log("File size exceeds 2MB limit");
    //       return;
    //     }
    //
    //     this.error['backview' + index] = ''
    //     const fileReader = new FileReader();
    //     const vm = this;
    //     fileReader.onload = function (fileLoadedEvent) {
    //       vm.gadgetdetails['gadget_back_view_' + index] = fileLoadedEvent.target.result;
    //     };
    //     fileReader.readAsDataURL(files[0]);
    //   }
    //
    // },
    validatePhoneNumber(phoneNumber) {
      this.data.telephone = phoneNumber
      const digitsOnly = phoneNumber.replace(/\D/g, '');

      const expectedLength = 11;
      if (digitsOnly.length === expectedLength){
        this.data.telephone = phoneNumber
        this.error.phone = ""
      }else {
        this.error.phone = "Invalid Phone Number"
      }
      return digitsOnly.length === expectedLength;
    },
    addnew() {
      this.gadgetlist = this.gadgetlist + 1
    },
    submit() {
      if(this.policyType === "Individual") {
        let result = []
        for (let key in this.gadgetdetails) {
          if (key.startsWith('gadget_name_')) {
            const index = key.slice('gadget_name_'.length); // Extract the index
            const valueKey = `gadget_price_${index}`; // Form the corresponding value key
            const frontViewKey = `gadget_front_view_${index}`; // Form the corresponding front view key
            const backViewKey = `gadget_back_view_${index}`; // Form the corresponding back view key

            // Check if the value key exists using safer Object.hasOwnProperty method
            if (Object.prototype.hasOwnProperty.call(this.gadgetdetails, valueKey)) {
              // Pair the name and value in an object and push it to the result array
              result.push({
                gadget_name: this.gadgetdetails[key],
                gadget_price: `${this.gadgetdetails[valueKey]}`,
                gadget_front_view: this.gadgetdetails[frontViewKey],
                gadget_back_view: this.gadgetdetails[backViewKey]
              });
            }
          }
        }
        this.data.gadget = result
        let fullName = this.data.firstname;
        let separatedNames = fullName.split(" ");
        this.data.firstname = separatedNames[0];
        this.data.lastname = separatedNames[1];
        this.$emit('submit', this.data)
      } else {
        let fullName = this.data.firstname;
        let separatedNames = fullName.split(" ");
        this.data.firstname = separatedNames[0];
        this.data.lastname = separatedNames[1];
        let data = new FormData()
        for (let key in this.data) {
          data.append(key, this.data[key]);
          console.log(key, this.data[key])
        }
        console.log('dgd', data)
        this.$emit('submit', data);
      }
    },
    checkDownload() {
      if (this.policyType === 'Corporate') {
        this.download = localStorage.getItem('xhrdownload') !== 'true';
      }

    }
  },
  mounted() {
    this.data.policy_type = this.policyType.toLowerCase()
    this.term ? this.next = true : this.next = false
    this.checkDownload()
  }

}
</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 600px;
  background-color: #f7f7f7;
  max-height: 600px;
  overflow: scroll;

}

.custom-outline-none:focus-visible {
  outline: none!important;
}

.cancel {
  width: auto !important;
}

.custom-border {
  border: 9px solid ;
  border-image-source: url(../../../assets/images/border.png);
  border-image-slice: 61 58 51 48;
  border-image-width: 30px 30px 30px 30px;
  border-image-repeat: stretch stretch;
}
</style>
