<template>
  <div>
    <div>
      <div>
        <vue-lottie :options="defaultOptions" loop=true autoplay="true" style="width: 50%; height: 100%;"></vue-lottie>
      </div>
    </div>
  </div>
</template>

<script>
import VueLottie from "vue-lottie";
import LottieArrow from "@/assets/Lottiearrow.json";
export default {
  components: {  VueLottie },
  data() {
    return {
      defaultOptions: {
        animationData: LottieArrow,
        renderer: 'svg',
        loop: true,
        autoplay: true
      },
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>
