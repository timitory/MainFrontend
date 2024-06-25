<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded pb-6">
        <div>
          <div class="border-b border-custom px-4 lg:px-8 py-7">
            <h1 class="text-customgreen font-bold text-lg lg:text-3xl">
              Quotation Summary
            </h1>
            <p class="lg:text-md text-sm">Pet Policy</p>
          </div>
          <div class="lg:px-8 px-4 py-7 ">
            <div class="flex flex-wrap gap-y-6 justify-between">
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Breed Type</span>
                  <span class="font-bold">{{ quoteDetails.country }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Age</span>
                  <span class="font-bold">{{ quoteDetails.cover_start }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Health Status</span>
                  <span class="font-bold">{{ quoteDetails.cover_end }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Medication Recieved</span>
                  <span class="font-bold">{{ quoteDetails.is_multi_trip }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Acquisition Cost</span>
                  <span class="font-bold">{{ quoteDetails.no_people }}</span>
                </p>
              </div>
              <div class="w-1/3">
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block">Maintenance Cost</span>
                  <span class="font-bold">{{ quoteDetails.no_children }}</span>
                </p>
              </div>
            </div>
            <div class="flex py-6 justify-between">
              <div>
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block text-customgreen">Total Premium</span>
                  <span class="font-bold">{{ quoteDetails.amount }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="px-8 py-7 border-t border-custom flex-col flex gap-4">
            <div class="flex justify-between">
              <div>
                <p class="font-bold lg:text-sm text-xs">
                  <span class="font-bold capitalize block text-customgreen">Monthly Premium</span>
                  <span class="font-bold">{{ quoteDetails.amount }}</span>
                </p>
              </div>
            </div>
            <div class="flex justify-end">
              <div class="flex gap-4">
                <button type="button" class="rounded text-sm lg:text-md py-3 px-3 lg:px-8 text-white font-bold" style="background-color: #ACB2B7" @click="$emit('back')">Back</button>
                <button type="button" class="bg-army rounded text-sm lg:text-md py-3 px-3 lg:px-8 text-white font-bold" @click="$emit('proceed')">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      next: false,
      imageUpload: {
        utility: '',
        utilityBillName: '',
      },
      gadgetlist: 1,
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