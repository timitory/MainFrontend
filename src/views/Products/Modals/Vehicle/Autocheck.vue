<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader  bg-white">
        <div class="custom-border bg-white w-full">
          <div class="flex justify-end py-2 px-4">
            <svg @click="$emit('cancel')" width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer">
              <path d="M4.79432 5.10789L4.94032 4.93989C5.19429 4.68585 5.531 4.53139 5.88922 4.5046C6.24744 4.47781 6.60337 4.58046 6.89232 4.79389L7.06031 4.93989L16.0003 13.8779L24.9403 4.93789C25.0788 4.79469 25.2443 4.68049 25.4274 4.60197C25.6104 4.52344 25.8073 4.48216 26.0064 4.48052C26.2056 4.47888 26.4031 4.51693 26.5874 4.59244C26.7717 4.66795 26.9391 4.7794 27.0799 4.92031C27.2207 5.06121 27.332 5.22874 27.4073 5.41312C27.4826 5.5975 27.5205 5.79504 27.5187 5.99421C27.5169 6.19337 27.4754 6.39018 27.3967 6.57315C27.318 6.75612 27.2036 6.92158 27.0603 7.05989L18.1223 15.9999L27.0623 24.9399C27.316 25.1941 27.4701 25.531 27.4966 25.8892C27.523 26.2474 27.42 26.6032 27.2063 26.8919L27.0603 27.0599C26.8063 27.3139 26.4696 27.4684 26.1114 27.4952C25.7532 27.522 25.3973 27.4193 25.1083 27.2059L24.9403 27.0599L16.0003 18.1219L7.06031 27.0619C6.77728 27.335 6.39831 27.486 6.00501 27.4824C5.61172 27.4788 5.23557 27.3209 4.95759 27.0426C4.67961 26.7644 4.52203 26.3881 4.5188 25.9948C4.51557 25.6015 4.66694 25.2227 4.94032 24.9399L13.8783 15.9999L4.93832 7.05989C4.68458 6.80566 4.53049 6.46882 4.50407 6.11061C4.47764 5.7524 4.58063 5.3966 4.79432 5.10789Z" fill="black"/>
            </svg>
          </div>
          <div class=" bg-white w-7/12 mx-auto rounded my-3 flex flex-col gap-y-2.5">
            <div class=" border-army flex flex-col gap-y-1.5">
              <label class="capitalize font-semibold text-sm">
                Enter Your car plate number
              </label>
              <input type="text" placeholder="Eg IKJ 355 VA" v-model="PlateNumber" class="text-black bg-custom p-2.5 border-0 rounded focus-within:outline-none"/>
            </div>
            <button class="rounded border-0 bg-army text-sm font-bold p-2.5 w-full text-white" @click="autoCheck">
              Submit
            </button>
          </div>
        </div>
      </div>
<!--KSF97GX-->
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
      PlateNumber: "",
    };
  },
  methods: {
    async autoCheck() {
      this.$store.commit('startLoading')
      await axios({url: `${baseURL}/vehicle/details/${this.PlateNumber}`, method: 'GET'})
          .then(res => {
            console.log(res);
            this.$store.commit('setAutoCheckData', res.data.data)
            this.$emit('show')
            this.$store.commit('endLoading')

          })
          .catch(err => {
            console.log(err)
            this.$store.dispatch('handleError', err)
            this.$store.commit('endLoading')
          })
      this.$store.commit('endLoading')

    }
  }

}
</script>

<style scoped>
.loader {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  max-width: 400px;
  background-color: #f7f7f7;
}
.custom-border {
  border: 9px solid ;
  border-image-source: url(../../../../assets/images/border.png);
  border-image-slice: 61 58 51 48;
  border-image-width: 30px 30px 30px 30px;
  border-image-repeat: stretch stretch;
}

</style>