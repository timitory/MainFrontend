<template>
  <form class="mt-6" @submit.prevent="validateForm" >
    <p class="text-green-500">Vehicle Cover</p>
    <div class="mt-4 lg:flex">
      <div class="lg:w-3/4 lg:mr-3">
        <div class="lg:flex">

        </div>
        <div class="mt-4 lg:flex">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">Plate Number</label>
            <input v-model="plate_number" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
          </div>
          <div class="lg:w-full lg:ml-3 lg:mr-3">
            <label class="text-sm font-bold">Driver's License no</label>
            <input v-model="driver_license_number" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
          </div>
          <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">Color of Vehicle</label>
            <input v-model="vehicle_color" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
          </div>
        </div>
        <div class="mt-4 lg:flex">
          <div class="lg:w-full lg:mr-3">
            <label class="text-sm font-bold">BVN</label>
            <input v-model="bvn" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
            <p class="text-red-500 text-sm" v-if="error.bvn">Please enter a valid BVN</p>
          </div>
          <div class="lg:w-full lg:ml-3 lg:mr-3">
            <label class="text-sm font-bold">Engine no</label>
            <input v-model="engine_no" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
          </div>
          <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
            <label class="text-sm font-bold">Year of make</label>
            <input v-model="year" type="date" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
          </div>
        </div>
        <!-- <div class="mt-4">
          <div class="platebox">
            <label class="text-sm font-bold">Vehicle Plate Number</label>
            <input v-model="plate_number" type="text" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" placeholder="" required>
          </div>
        </div> -->
      </div>
      <div class="lg:w-1/4 lg:ml-3 mt-4 lg:mt-0">
        <div class="mt-4 1" v-if="!(vehicle_category_id === 1 || vehicle_category_id === 2)">
          <label class="text-sm font-bold">Car Value (in Naira)</label>
          <money v-model="vehicle_value" v-bind="money" class="block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required></money>

          <p class="text-red-500 text-sm" v-if="error.value">Please enter a valid amount</p>
        </div>
        <div class="mt-4">
          <label class="text-sm font-bold">Chasis Number</label>
          <input v-model="chasis_no" type="text" class="rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
        </div>

      </div>
    </div>
    <div class="pt-6">
      <hr>
      <div class="mt-6">
        <div class="mt-8 lg:flex justify-between">
          <div class="mr-3">
            <div class="lg:flex">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">First Name</label>
                <div class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <p>{{beneficiary.firstname}}</p>
                </div>
              </div>
              <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                <label class="text-sm font-bold">Last Name</label>
                <div class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  {{beneficiary.lastname}}
                </div>
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">Email address</label>
              <div class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                {{beneficiary.email}}
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">Phone number</label>
              <div class="input rounded block mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                {{beneficiary.phone}}
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">Gender<span class="text-red-500">*</span></label>
              <div class="relative">
                <select v-model="gender_id" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                  <!-- <option disabled selected value="">Select Gender</option> -->
                  <option v-for="gender in data.gender" :key="gender.id" :value="gender.id">{{gender.name}}</option>
                </select>
                <p v-if="gender_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select Gender</p>
              </div>
            </div>
            <div class="mt-4">
              <div>
                <label class="text-sm font-bold">Means of ID</label>
                <div class="relative">
                  <select v-model="idmeans_id" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                    <!-- <option disabled selected value="">Select means of Identification</option> -->
                    <option v-for="means in data.idmeans" :key="means.id" :value="means.id">{{means.name}}</option>
                  </select>
                  <p v-if="idmeans_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select means of Identification</p>
                </div>
              </div>
              <div class="mt-4 ">
                <label class="text-sm font-bold">ID Number</label>
                <input v-model="id_number" type="text" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold mb-6 block">Upload Valid ID (Driver’s licence, Permanent Voter’s Card, Intl Passport <span class="text-red-500">*</span></label>
              <div class="">
                <div class="lg:w-full mt-2">
                  <label for="idImage" class="py-2 px-4 rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                  <p class="inline ml-3">{{idImageName}}</p>
                  <input id="idImage" type="file" ref="idImage" v-on:change="idUpload('idImage')" class="fileinput hidden">
                </div>
                <p class="text-red-500 text-sm mt-2" v-if="error.idImage">Please upload a valid image file</p>
              </div>
            </div>
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <label class="text-sm font-bold mb-6 block">Upload Chassis number image <span class="text-red-500">*</span></label>
              <div class="">
                <div class="lg:w-full mt-2">
                  <label for="chassisImage" class="py-2 px-4 rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                  <p class="inline ml-3">{{chassisImageName}}</p>
                  <input id="chassisImage" type="file" ref="chassisImage" v-on:change="idUpload('chassisImage')" class="fileinput hidden">
                </div>
                <p class="text-red-500 text-sm mt-2" v-if="error.chassisImage">Please upload a valid image file</p>
              </div>
            </div>
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <label class="text-sm font-bold mb-6 block">Upload selfie image with vehicle <span class="text-red-500">*</span></label>
              <div class="">
                <div class="lg:w-full mt-2">
                  <label for="selfieImage" class="py-2 px-4 rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                  <p class="inline ml-3">{{selfieImageName}}</p>
                  <input id="selfieImage" type="file" ref="selfieImage" v-on:change="idUpload('selfieImage')" class="fileinput hidden">
                </div>
                <p class="text-red-500 text-sm mt-2" v-if="error.selfieImage">Please upload a valid image file</p>
              </div>
            </div>
          </div>
          <div class="lg:ml-3">
            <div class="mt-4 lg:mt-0">
              <label class="text-sm font-bold">Date of birth</label>
              <input v-model="date_of_birth" type="date" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">Enter occupation</label>
              <input v-model="occupation" type="text" class="block mt-4 rounded bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
            </div>
            <div class="lg:flex mt-4">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">State of residence</label>
                <div class="relative">
                  <select v-model="state" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                    <!-- <option disabled selected :value="{}">Select State</option> -->
                    <option v-for="state in data.states" :key="state.id" :value="state">{{state.name}}</option>
                  </select>
                  <p v-if="Object.keys(state).length === 0" class="absolute text-gray-500" style="top: 8px; left: 8px">Select State</p>
                </div>
              </div>
              <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                <label class="text-sm font-bold">LGA</label>
                <div class="relative">
                  <select v-model="lga_id" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" required>
                    <!-- <option disabled selected value="">Select LGA</option> -->
                    <option v-for="model in stateModels" :key="model.id" :value="model.id">{{model.name}}</option>
                  </select>
                  <p v-if="lga_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select LGA</p>
                </div>
              </div>
            </div>
            <div class="mt-4"  v-if="vehicle_category_id != 1">
              <label class="text-sm font-bold mb-6 block">Upload vehicle picture showing the plate number of the Vehicle <span class="text-red-500">*</span></label>
              <div class="mt-2">
                <div class="lg:w-full mt-2">
                  <label for="regImage" class="py-2 px-4 rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                  <p class="inline ml-3">{{regImageName}}</p>
                  <input id="regImage" type="file" ref="regImage" v-on:change="regUpload" class="hidden fileinput" v-if="vehicle_category_id != 1">
                </div>
                <p class="text-red-500 text-sm mt-2" v-if="error.regImage">Please upload a valid image file</p>
              </div>
            </div>
            <div class="mt-4">
              <label class="text-sm font-bold">State of Vehicle Regristration - (state vehicle was registered)</label>
              <div class="relative">
                <select v-model="reg_state_id" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                  <!-- <option disabled selected value="">Select State</option> -->
                  <option v-for="state in data.states" :key="state.id" :value="state.id">{{state.name}}</option>
                </select>
                <p v-if="reg_state_id == ''" class="absolute text-gray-500" style="top: 8px; left: 8px">Select State</p>
              </div>
            </div>
            <div class="lg:flex mt-4">
              <div class="lg:w-full lg:mr-3">
                <label class="text-sm font-bold">Driver's License issue date</label>
                <div class="relative">
                  <input v-model="driver_license_issue_date" type="date" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                </div>
              </div>
              <div class="lg:w-full lg:ml-3 mt-4 lg:mt-0">
                <label class="text-sm font-bold">
                  Driver's License expire date
                </label>
                <div class="relative">
                  <input v-model="driver_license_expiry_date" :min="driver_license_issue_date" type="date" class="block rounded mt-4 bg-blue-100 px-4 py-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required>
                </div>
              </div>
            </div>
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <div class="lg:w-full ">
                <label class="text-sm font-bold mb-6 block">Upload Vehicle Rear View Image</label>
                <div class="">
                  <div class="lg:w-full mt-2">
                    <label for="rearImage" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                    <p class="inline ml-3">{{rearImageName}}</p>
                    <input id="rearImage" type="file" ref="rearImage" v-on:change="idUpload('rearImage')" class="fileinput hidden">
                  </div>
                  <p class="text-red-500 text-sm mt-2" v-if="error.rearImage">Please upload a valid image file</p>
                </div>
              </div>
            </div>
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <div class="lg:w-full mt-4 lg:mt-0">
                <label class="text-sm font-bold mb-6 block">
                  Upload Vehicle Right View Image
                </label>
                <div class="">
                  <div class="lg:w-full mt-2">
                    <label for="rightImage" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                    <p class="inline ml-3">{{rightImageName}}</p>
                    <input id="rightImage" type="file" ref="rightImage" v-on:change="idUpload('rightImage')" class="fileinput hidden">
                  </div>
                  <p class="text-red-500 text-sm mt-2" v-if="error.rightImage">Please upload a valid image file</p>
                </div>
              </div>
            </div>
            <div class="mt-4" v-if="vehicle_category_id === 2">
              <div class="lg:w-full mt-4 lg:mt-0">
                <label class="text-sm font-bold mb-6 block">
                  Upload Vehicle Left View Image
                </label>
                <div class="">
                  <div class="lg:w-full mt-2">
                    <label for="leftImage" class="py-2 px-4 text-white rounded-full cursor-pointer bg-green-100 text-green-500 font-semibold hover:bg-green-200">Choose File</label>
                    <p class="inline ml-3">{{leftImageName}}</p>
                    <input id="leftImage" type="file" ref="leftImage" v-on:change="idUpload('leftImage')" class="fileinput hidden">
                  </div>
                  <p class="text-red-500 text-sm mt-2" v-if="error.leftImage">Please upload a valid image file</p>
                </div>
              </div>
            </div>
           </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:flex justify-between mt-10">

      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
        <router-link to="/app/dashboard/buyvehicle/4" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
          <font-awesome-icon icon="arrow-left" class="mr-8" />
          Back
        </router-link>
      </button>
      <button @click="validateForm" class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
        Pay
        <font-awesome-icon icon="arrow-right" class="ml-3" />
      </button>
    </div>
    <div class="block lg:hidden mt-10">
      <button @click="validateForm" class="block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none">
        Pay
        <font-awesome-icon icon="arrow-right" class="ml-3" />
      </button>
      <button class="block w-full lg:w-auto lg:float-left py-2 rounded focus:outline-none">
        <router-link to="/app/dashboard/buyvehicle/4" class="w-full lg:w-auto text-green-500 lg:float-left px-12 mt-12 block text-center">
          <font-awesome-icon icon="arrow-left" class="mr-8" />
          Back
        </router-link>
      </button>
    </div>
  </form>
</template>

<script>
import {Money} from 'v-money'
import { mapState } from 'vuex'
import axios from 'axios'
import baseURL from "@/main"
export default {
  components: {
    Money
  },
  data() {
    return {
      money: {
        thousands: ',',
        prefix: '₦ ',
        precision: 0,
        masked: false
      },
      value: false,
      vehicle: {},
      vehicle_make_id: '',
      vehicle_model_id: '',
      vehicle_class_id: '',
      vehicle_usage_id: '',
      driver_license_issue_date: '',
      driver_license_expiry_date: '',
      driver_license_number: '',
      vehicle_color: '',
      vehicle_value: 0,
      date_of_birth: '',
      occupation: '',
      bvn: '',
      engine_no: '',
      year: '',
      chasis_no: '',
      gender_id: '',
      payment_frequency_id: '',
      state_id: '',
      reg_state_id: '',
      lga_id: '',
      models: [],
      state: {},
      stateModels: [],
      flood_cover: 0,
      idmeans_id: '',
      id_number: '',
      // idImage: '',
      // chassisImage: '',
      // selfieImage: '',
      // rearImage: '',
      // leftImage: '',
      // rightImage: '',
      idVideo: '',
      idImageName: '',
      rearImageName: '',
      chassisImageName: '',
      selfieImageName: '',
      rightImageName: '',
      leftImageName: '',
      idVideoName: '',
      regImageName: '',
      // regImage: '',
      plate_number: '',
      error: {
        regImage: false,
        idImage: false,
        idVideo: false,
        bvn: false,
        chassisImage: false,
        selfieImage: false,
        rearImage: false,
        leftImage: false,
        rightImage: false,
      },
    }
  },
  methods: {
    valueVerification() {
      if (this.data.vehicle_category_id === 1 || this.data.vehicle_category_id === 2) {
        this.value = true
      }

    },
    idUpload(refName) {
      console.log(refName)
      const fileInput = this.$refs[refName];
      const file = fileInput.files[0];

      if (file) {
        switch (refName) {
          case 'idImage':
            this.idImageName = file.name;
            this.error.idImage = false;
            break;
          case 'chassisImage':
            this.chassisImageName = file.name;
            this.error.chassisImage = false;
            break;
          case 'selfieImage':
            this.selfieImageName = file.name;
            this.error.selfieImage = false;
            break;
          case 'rearImage':
            this.rearImageName = file.name;
            this.error.rearImage = false;
            break;
          case 'rightImage':
            this.rightImageName = file.name;
            this.error.rightImage = false;
            break;
          case 'leftImage':
            this.leftImageName = file.name;
            this.error.leftImage = false;
            break;
        }

        let fileToLoad = file;
        let fileReader = new FileReader();
        let vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm[refName] = fileLoadedEvent.target.result;
        };
        fileReader.readAsDataURL(fileToLoad);
      } else {
        switch (refName) {
          case 'idImage':
            this.error.idImage = true;
            break;
          case 'chassisImage':
            this.error.chassisImage = true;
            break;
          case 'selfieImage':
            this.error.selfieImage = true;
            break;
          case 'rearImage':
            this.error.idImage = true;
            break;
          case 'rightImage':
            this.error.chassisImage = true;
            break;
          case 'leftImage':
            this.error.selfieImage = true;
            break;
        }
      }
      // this.idImageName = this.$refs.idImage.files[0].name
      // this.error.idImage = false
      // let fileToLoad = file;
      // let fileReader = new FileReader();
      // let vm = this
      // fileReader.onload = function (fileLoadedEvent) {
      //   vm.refName = fileLoadedEvent.target.result;
      // }
      // fileReader.readAsDataURL(fileToLoad);
    },
    regUpload() {
      this.regImageName = this.$refs.regImage.files[0].name
      this.error.regImage = false
      let fileToLoad = this.$refs.regImage.files[0];
      let fileReader = new FileReader();
      let vm = this
      fileReader.onload = function (fileLoadedEvent) {
        vm.regImage = fileLoadedEvent.target.result; // <--- data: base64
      }
      fileReader.readAsDataURL(fileToLoad);
    },
    validateForm(e) {
      console.log("i got here")
      e.preventDefault()
      if (this.idImageName === '') {
        this.error.idImage = true
      } else {// this.$store.commit('startLoading')
        this.$store.commit('setPaymentFrequencyId', this.payment_frequency_id)
        const data = {
          underwriter_id: this.underwriterId,
          enrollee_id: this.beneficiary.user_id,
          address: this.beneficiary.address,
          vehicle_make_id: this.vehicle_make_id,
          vehicle_model_id: this.vehicleInfo.vehicle_model_id,
          vehicle_class_id: this.vehicle_class_id,
          vehicle_usage_id: this.vehicle_usage_id,
          vehicle_category_id: this.vehicle_category_id,
          driver_license_number: this.driver_license_number,
          driver_license_issue_date: this.driver_license_issue_date,
          driver_license_expiry_date: this.driver_license_expiry_date,
          vehicle_color: this.vehicle_color,
          vehicle_value: this.vehicle_value,
          occupation: this.occupation,
          date_of_birth: this.date_of_birth,
          state_id: this.state_id,
          lga_id: this.lga_id,
          gender_id: this.gender_id,
          idmeans_id: this.idmeans_id,
          id_number: this.id_number,
          flood_cover: this.flood_cover,
          excess_buyback: 1,
          validid_image: this.idImage,
          regno_image: this.regImage,
          rearview_image: this.rearImage,
          selfie_image: this.selfieImage,
          leftview_image: this.leftImage,
          rightview_image: this.rightImage,
          chassis_image: this.chassisImage,
          bvn: this.bvn,
          engine_no: this.engine_no,
          chasis_no: this.chasis_no,
          year: this.year,
          reg_state_id: this.reg_state_id,
          plate_number: this.plate_number,
          payment_frequency_id: this.payment_frequency_id
        }
        console.log(data)
        if (data.vehicle_category_id === 1) {
          console.log('calling thirdparty')
          this.$store.commit('saveVehicleInfo', data)
          this.$emit('submitThirdParty', data)
        } else if (data.vehicle_category_id === 2) {
          // console.log('calling comprehensive')
          this.$store.commit('saveVehicleInfo', data)
          this.$emit('submitComprehensive', data)
        } else if (data.vehicle_category_id === 3) {
          console.log('calling chi prime bronze')
          this.$store.commit('saveVehicleInfo', data)
          this.$emit('submitPrime', data)
        } else if (data.vehicle_category_id === 4) {
          console.log('calling chi prime silver')
          this.$store.commit('saveVehicleInfo', data)
          this.$emit('submitPrime', data)
        } else if (data.vehicle_category_id === 5) {
          console.log('calling chi prime gold')
          this.$store.commit('saveVehicleInfo', data)
          this.$emit('submitPrime', data)
        }
      }
    },
    getResources() {
      this.$store.commit('startLoading')
      axios.get(`${baseURL}/vehicle/resources`)
          .then(res => {
            console.log(res.data.data)
            this.$store.commit('setChiVehicleResources', res.data.data)
            this.$store.commit('endLoading')
          })
          .catch(err => {
            this.$store.dispatch('handleError', err)
          })
    }
  },
  watch: {
    vehicle() {
      if (this.vehicle.id) {
        this.vehicle_make_id = this.vehicle.id
        this.models = this.vehicle.models
      }
    },
    vehicle_make_id() {
      this.vehicle_model_id = ''
    },
    state() {
      if (this.state.id) {
        console.log("this.state")
        console.log(this.state.models)
        this.state_id = this.state.id
        this.stateModels = this.state.lgas
      }
    },
    state_id() {
      this.lga_id = ''
    },
    vehicle_value() {
      if (/^\d*$/.test(this.vehicle_value)) {
        this.error.value = false
      } else {
        this.error.value = true
      }
    },
    bvn() {
      if (/^\d{11}$/.test(this.bvn)) {
        this.error.bvn = false
      } else {
        this.error.bvn = true
      }
    },
  },
  computed: {
    ...mapState({
      vehicle_category_id: state => state.vehicle_category_id,
      beneficiary: state => state.beneficiary,
      underwriterId: state => state.underwriter_id,
      data: state => state.vehicle.chiResources,
      vehicleInfo: state => state.vehicleQuoteInfo
    }),
  },
  mounted() {

    if (Object.keys(this.data).length == 0) {
      this.getResources()

    }
    // console.log(valueVerification)
    console.log(this.vehicle_category_id)
    this.vehicle_make_id = this.vehicleInfo.vehicle_make_id
    this.vehicle_model_id = this.vehicleInfo.vehicle_model_id
    this.vehicle_class_id = this.vehicleInfo.vehicle_class_id
    this.vehicle_usage_id = this.vehicleInfo.vehicle_usage_id
    this.vehicle_value = this.vehicleInfo.vehicle_value
    this.flood_cover = this.vehicleInfo.flood_cover
    this.payment_frequency_id = this.vehicleInfo.payment_frequency_id
  }
}
</script>

<style scoped>
input, select, .input {
  background-color: #e2f5ec;
}

.fileinput {
  background-color: #fff;
}

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 10px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ccc;
  border-radius: 50%;
}


/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

@media only screen and (min-width: 1024px) {
  .platebox {
    width: 193px
  }
}
</style>
