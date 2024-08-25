<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded p-5 lg:px-8 pb-6">
        <form>
          <div>
            <div class="flex justify-between">
              <h1 class="text-customgreen font-bold">Complete the Form </h1>
              <svg @click="$emit('show')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer cancel">
                <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
              </svg>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="firstname" class="block font-bold text-black py-2 lg:text-sm text-xs">First Name</label>
                <input type="text" v-model="data.firstname" name="firstname" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 lg:text-sm text-xs">Last Name</label>
                <input type="text" v-model="data.lastname" name="lastname" placeholder="Shina" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="email" class="block font-bold text-black py-2 lg:text-sm text-xs">Email Address</label>
                <input type="email" v-model="data.email" name="email" placeholder="home@paddycover.com" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="phone" class="block font-bold text-black py-2 lg:text-sm text-xs">Phone Number</label>
                <input type="tel" :value="data.telephone" @input="(e) => validatePhoneNumber(e.target.value)" name="phone" placeholder="08123456789" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
                <span class="block py-1.5 text-red-500 text-sm">{{error.phone}}</span>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 lg:text-sm text-xs">Date of Birth</label>
                <input type="date" v-model="data.dob" name="dob" placeholder="DD/MM/YYYY" :max="today" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="lastname" class="block font-bold text-black py-2 lg:text-sm text-xs">Country</label>
                <select :value="data.country_id" @change="(e) => data.country_id = e.target.value" class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-md text-xs">
                  <option value="" disabled selected>Select Country</option>
                  <option v-for="(country, index) in countries" :key="index" :value="country.id">{{country.name}}</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="depaturedate" class="block font-bold text-black py-2 lg:text-sm text-xs">Date of Departure</label>
                <input type="date" v-model="data.cover_begins" @input="validateDepatureDate" name="depaturedate" placeholder="DD/MM/YYYY" :min="today" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="arrivaldate" class="block font-bold text-black py-2 lg:text-sm text-xs">Date of Arrival</label>
                <input type="date" v-model="data.cover_ends" @input="validateDate" name="arrivaldate" placeholder="DD/MM/YYYY" :min="data.cover_begins" :disabled="data.cover_begins === ''" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1">
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 lg:text-sm text-xs">Purpose of Travel</label>
                <input type="text" v-model="data.purpose_of_travel" name="dob" placeholder="Vacation" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 lg:text-sm text-xs">Round Trip</label>
                <select v-model="data.is_round_trip" class="bg-custom border border-custom rounded w-full px-3 py-2.5 lg:text-md text-xs">
                  <option value="">Select Round Trip</option>
                  <option :value="false">No</option>
                  <option :value="true">Yes</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between gap-6 py-1" v-if='bookingType === "Family"'>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 lg:text-sm text-xs">Number Of People</label>
                <input type="number" name="dob" v-model.number="data.no_of_people" placeholder="0" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
              <div class="block w-full">
                <label for="dob" class="block font-bold text-black py-2 lg:text-sm text-xs">Number of Children</label>
                <input type="number" name="dob" v-model.number="data.no_of_children" placeholder="0" class="bg-custom border border-custom rounded w-full px-3 py-2 lg:text-md text-xs">
              </div>
            </div>
            <div class="flex flex-col justify-center items-center py-3">
              <button type="button" class="bg-customgreen text-white rounded px-6 py-2 w-1/4" @click="submitForm">
                Next
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
      data: {
        "firstname": "",
        "lastname": "",
        "underwriter_id": 6,
        "dob": "",
        "email": "",
        "telephone": "",
        "cover_begins": "",
        "cover_ends": "",
        "country_id": "",
        "purpose_of_travel": "",
        "booking_type_id": this.bookingType === "Individual" ? 1 : 2,
        "is_round_trip": false,
        "no_of_people": 1,
        "no_of_children": 0
      },
      countries: [],
      today: new Date(),
      error: {
        "phone": ""
      }
    };
  },
  props: {
    bookingType: {
      type: String,
      required: true,
    },
  },
  methods: {
      submitForm() {
        console.log("we have")
        this.$emit('getQuote', this.data)
      },
      getCountry() {
        axios({url: `${baseURL}/country`, method: 'GET'})
            .then(res => {
              console.log(res.data.data);
              this.countries = res.data.data;
            })
            .catch(err => {
              this.$store.dispatch('handleError', err)
            })
      },
    validateDepatureDate(event) {
      const inputDate = new Date(event.target.value);
      const minDate = new Date();
      if (inputDate < minDate) {
        // Reset input value to the minimum date
        event.target.value = this.minDate;
        // Update selectedDate data property
        return;
      }
      this.data.cover_begins = event.target.value;
    },
    validateDate(event) {
      const inputDate = new Date(event.target.value);
      const minDate = new Date(this.data.cover_begins);
      if (inputDate < minDate) {
        // Reset input value to the minimum date
        event.target.value = this.minDate;
        // Update selectedDate data property
        return;
      }
      this.data.cover_ends = event.target.value;
    },
      formttedDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is zero-indexed
        const day = String(today.getDate()).padStart(2, '0');
        console.log(`${year}-${month}-${day}`);
        this.today = `${year}-${month}-${day}`
        return `${year}-${month}-${day}`;
      },
      validatePhoneNumber(phoneNumber) {
        this.data.telephone = phoneNumber
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        const expectedLength = 11; // Adjust this based on the country or format
        if (digitsOnly.length === expectedLength){
          this.data.telephone = phoneNumber
          this.error.phone = ""
        }else {
          this.error.phone = "Invalid Phone Number"
        }
        return digitsOnly.length === expectedLength;
      }
  },
  mounted() {
    this.getCountry();
    this.formttedDate();
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