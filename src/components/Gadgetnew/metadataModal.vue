<script >

import {mapState} from "vuex";


export default {
  components: {

  },
  props: [
    "close",
    'enrollee'
  ],
  data() {
    return {
      value: this.value,
      message: '',
    };
  },
  computed: {
    ...mapState({
      ratings: state => state.ratings
    })
  },
  methods: {

  }

}
</script>

<template>
  <div class="l-modal">
    <div class="loading-modal w-full">
      <div class="loader bg-white w-1/2 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-end">
          <div class="top-2" @click="this.close">
            <font-awesome-icon icon="times-circle" class="text-green-600 " />
          </div>
        </div>
        <div class="flex justify-between p-2.5">
          <p class="text-green-500 font-bold">Policy Details</p>

          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
        <div class="pt-6 relative metaData_container">
          <div class="flex justify-between p-2.5">
            <div>
              <label>First Name</label>
              <p class="font-semibold">{{this.enrollee.metadata.Firstname}}</p>
            </div>
            <div>
              <label>Last Name</label>
              <p class="font-semibold">{{this.enrollee.metadata.Lastname}}</p>
            </div>
            <div>
              <label>Email</label>
              <p class="font-semibold">{{this.enrollee.metadata.Email}}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">
            <div>
              <label>Date Of Birth</label>
              <p class="font-semibold">{{ this.enrollee.metadata.DateOfBirth}}</p>
            </div>
            <div>
              <label>Occupation</label>
              <p class="font-semibold">{{this.enrollee.metadata.Occupation}}</p>
            </div>
            <div>
              <label>Address</label>
              <p class="font-semibold">{{ this.enrollee.metadata.Address }}</p>
            </div>
          </div>
          <div class="flex justify-between p-2.5">

            <div>
              <label>Nationality</label>
              <p class="font-semibold">{{ this.enrollee.metadata.Nationality }}</p>
            </div>
            <div>
              <label>IdType</label>
              <p class="font-semibold">{{ this.enrollee.metadata.IdType }}</p>
            </div>
            <div>
              <label>ID Number</label>
              <p class="font-semibold">{{ this.enrollee.metadata.IdNumber }}</p>
            </div>
          </div>
          <hr class="p-2.5" />
          <section class="w-10/12">
            <div>
              <h1>Gadget Information</h1>
            </div>
            <div class="flex justify-between p-2.5" v-for="(gadget, index) in this.enrollee.metadata.Gadgets"
              :key="index">
              <div>
                <label>Gadget Name</label>
                <p>{{gadget.name}}</p>
              </div>
              <div>
                <label>Gadget Value</label>
                <p>{{gadget.amount}}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.loader {
  position: relative;
  top: 100px;
  //max-width: 600px;
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}

.metaData_container div div {
  width: 25%;
}
</style>