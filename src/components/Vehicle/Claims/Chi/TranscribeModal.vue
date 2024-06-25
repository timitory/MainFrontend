<template>
  <div class="l-modal" >
    <div class="loading-modal w-full">
      <div class="loaderssss bg-white w-2/4 mx-auto rounded px-4 lg:px-8 py-6">
        <div class="flex justify-end">
          <div  class="top-2" >
            <font-awesome-icon icon="times-circle" class="text-green-600" @click="$emit('close')" />
          </div>
        </div>
        <div class="flex justify-between p-2.5">
          <p class="text-green-500 font-bold">Speech Transcribe</p>
          <div class=" lg:w-3/4">
            <hr class="mt-2">
            <hr class="mt-2">
            <hr class="mt-2 border-green-500 bg-green-500 border-2">
          </div>
        </div>
        <div v-if="loading" class="flex flex-col items-center justify-center py-10">
          <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p>Please wait while audio is been processed</p>
        </div>
        <div v-else class="mt-4 md:w-full">
          <h1>Speech to text</h1>
          <div>
            <textarea  v-model="editableTranscribe"  rows='5' class="w-full p-1.5 leading-relaxed"/>
          </div>
          <div class="flex justify-end">
            <button class=" block w-full lg:w-auto lg:float-right bg-green-500 mt-12 text-white px-12 py-2 rounded focus:outline-none" @click="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  components: {},
  data(){
    return {
      editableTranscribe: '',
    }
  },
  props: {
    transcribe: {
      type: String,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    }
  },
  watch: {
    transcribe(newTranscribe) {
      // Update editableTranscribe when new transcribe data is available
      this.editableTranscribe = newTranscribe;
      console.log(this.editableTranscribe)
    }
  },
  methods: {
    submit() {
      console.log('gdggd')
      this.$emit('Submit', this.editableTranscribe)
    }
  }

}
</script>


<style scoped>

.loaderssss {
  position: relative;
  top: 100px;
  /* max-width: 600px; */
  background-color: #f7f7f7;
}

input {
  background-color: #e2f5ec;
}

.metaData_container div div {
  width: 25%;
}

.lds-default,
.lds-default div {
  box-sizing: border-box;
}
.lds-default {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
}
.lds-default div {
  position: absolute;
  width: 6.4px;
  height: 6.4px;
  background: #22C55E;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 36.8px;
  left: 66.24px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22.08px;
  left: 62.29579px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11.30421px;
  left: 51.52px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7.36px;
  left: 36.8px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11.30421px;
  left: 22.08px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22.08px;
  left: 11.30421px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 36.8px;
  left: 7.36px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 51.52px;
  left: 11.30421px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62.29579px;
  left: 22.08px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66.24px;
  left: 36.8px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 62.29579px;
  left: 51.52px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 51.52px;
  left: 62.29579px;
}
@keyframes lds-default {
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}


</style>