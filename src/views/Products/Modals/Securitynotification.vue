<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loader bg-white w-11/12 lg:w-8/12 mx-auto rounded px-0 ">
        <div class="text-center py-5 border-b border-custom">
          <h1 class="text-customgreen font-bold text-xl">Security Notification</h1>
        </div>

        <p class="text-center w-7/12 mx-auto py-14 text-sm lg:text-md">
          A password has been created for your account. Please check your email and follow the details.
        </p>
        <router-link to="/login" >
          <div class="text-center py-5 border-t border-custom">
            <button class="bg-customgreen font-bold py-2 px-6 text-white border-0 text-sm lg:text-md rounded">Proceed</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      loader: false
    };
  },
  methods: {
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

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #a5a5a5;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #a5a5a5 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>