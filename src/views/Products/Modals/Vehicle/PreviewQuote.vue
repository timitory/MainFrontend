<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded pb-6">
        <div>
          <div class="border-b border-custom px-4 lg:px-8 py-7">
            <h1 class="text-customgreen font-bold text-lg lg:text-3xl">
              Quotation Summary
            </h1>
            <p class="lg:text-md text-sm">Vehicle Policy</p>
          </div>
          <div class="lg:px-8 px-4 py-7 ">
            <div class="flex flex-wrap gap-y-6 justify-between">
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Vehicle Make</span>
                  <span class="font-bold">{{ quoteDetails.vehicle_make }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Vehicle Model</span>
                  <span class="font-bold">{{ quoteDetails.vehicle_model }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Vehicle Type</span>
                  <span class="font-bold">{{ quoteDetails.vehicle_class }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Excess Buyback</span>
                  <span class="font-bold">{{ quoteDetails.excess_buyback === '' ? 'Not covered' : quoteDetails.excess_buyback }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Flood Damage</span>
                  <span class="font-bold">{{ quoteDetails.flood_cover === '' ? 'Not covered' : quoteDetails.flood_cover }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block"></span>
                  <span class="font-bold"></span>
                </p>
              </div>
            </div>
            <div class="flex py-6 justify-between">
              <div>
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block text-customgreen">Total Premium</span>
                  <span class="font-bold">{{ quoteDetails.financed_premium }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="px-4 lg:px-8 py-7 border-t border-custom flex-col flex gap-4">
            <div class="flex justify-between">
              <div>
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block text-customgreen">{{ quoteDetails.repayment_premium_text }}</span>
                  <span class="font-bold">{{ quoteDetails.price }}</span>
                </p>
              </div>
            </div>
            <div class="flex justify-between">
              <div>
                <div class="mt-4 flex items-center gap-2">
                  <input type="checkbox" v-model="check" :value="1">
                  <p class="text-xs lg:text-sm">I accept <button type="button" @click="showTermsModal = true; $emit('terms')" class="text-blue-500">terms and conditions</button></p>
                </div>
                <p class="text-red-500 text-xs mt-2" v-if="showError">Please accept terms</p>
              </div>
              <div class="flex gap-4">
                <button type="button" class="rounded text-sm lg:text-md py-3 px-3 lg:px-8 text-white font-bold" style="background-color: #ACB2B7" @click="$emit('back')">Back</button>
                <button type="button" class=" rounded text-sm lg:text-md py-3 px-3 lg:px-8 text-white font-bold" :class="check.length > 0 ? 'bg-army' : 'bg-grey'" @click="check.length > 0 ? $emit('proceed') : ''">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import TermsModal from "@/components/TermsModal.vue";

export default {
  components: {},
  data() {
    return {
      next: false,
      imageUpload: {
        utility: '',
        utilityBillName: '',
      },
      showTermsModal: false,
      showError : false,
      check: [],
      data: {
        "firstname": "",
        "lastname": "",
        "underwriter_id": null,
        "dob": "",
        "email": "",
        "telephone": "",
        "cover_begins": "",
        "cover_ends": "",
        "country_id": "",
        "purpose_of_travel": "",
        "booking_type_id": null,
        "is_round_trip": false,
        "no_of_people": null,
        "no_of_children": null
      }
    };
  },
  props: {
    quoteDetails: {
      type: Object,
      required: true,
    },
  },
  methods: {
    idUpload() {
      const files = this.$refs.utility.files;
      if (files.length > 0) {
        this.imageUpload.utilityBillName = files[0].name;
        const fileReader = new FileReader();
        const vm = this;
        fileReader.onload = function (fileLoadedEvent) {
          vm.imageUpload.utility = fileLoadedEvent.target.result; // <--- data: base64
        };
        fileReader.readAsDataURL(files[0]);
      }
    },

    addnew() {
      this.gadgetlist = this.gadgetlist + 1
    },
  }

}
</script>

<style scoped>
.loader {
  position: relative;
  top: 100px;
  max-width: 700px;
  background-color: #f7f7f7;
}
</style>