<template>
    <section class=" ">
      <div class="relative">
        <hero-bg />
        <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
          <h1 class="lg:text-7xl text-4xl text-center py-4 !leading-9 capitalize">
            <span class="text-army py-2 inline-block font-bold">Flexible</span> <span class="text-navy font-bold">insurance</span><br> for everyone
          </h1>
          <router-link  class="bg-customgreen flex items-center rounded-md px-4 py-3 text-white" to="/signup">
            Get Covered
            <span class="inline-block px-2 self-center">
                <svg class=" arrow1" width="45" height="15" viewBox="0 0 45 15" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <!-- First Left Arrow -->
                    <g transform="translate(0, 0)">
                        <path
                            d="M0.178146 9.16024L4.3113 5.13514L0.178146 1.08303C-0.389149 0.542749 0.529329 -0.375729 1.09662 0.164552L5.79707 4.75694C5.98617 4.94604 6.01319 5.29723 5.82409 5.48632L1.09662 10.0787C0.529329 10.619 -0.389149 9.70052 0.178146 9.16024Z"
                            fill="white"/>
                    </g>

                  <!-- Second Left Arrow -->
                    <g transform="translate(0, 0)">
                        <path
                            d="M7.67815 9.16024L11.8113 5.13514L7.67815 1.08303C7.11085 0.542749 8.02933 -0.375729 8.59663 0.164552L13.2971 4.75694C13.4862 4.94604 13.5132 5.29723 13.3241 5.48632L8.59663 10.0787C8.02933 10.619 7.11085 9.70052 7.67815 9.16024Z"
                            fill="white"/>
                    </g>

                  <!-- Third Left Arrow (Facing Left) -->
                    <g transform="translate(15, -4)">
                        <path
                            d="M0.178146 5.13514L4.3113 9.16024L0.178146 13.2124C-0.389149 13.7527 0.529329 14.6702 1.09662 14.1299L5.79707 9.53752C5.98617 9.34842 6.01319 8.99724 5.82409 8.80814L1.09662 4.21575C0.529329 3.67547 -0.389149 4.59395 0.178146 5.13514Z"
                            fill="white"/>
                    </g>
                </svg>
              </span>
          </router-link>
        </div>
      </div>
    </section>
</template>
  
<script>
// import HeroText from "./HeroText.vue"
import HeroBg from "./HeroBg.vue"
// import HomeBg from "@/assets/images/landingpage/home.svg"
export default {
    components: {HeroBg }
}
</script>
  
<style scoped>
.arrow1 {
    animation-name: arrow;
    animation-duration: 1s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
}

@keyframes arrow {
    0% {
        transform: translateX(-2px);
        opacity: 0
    }

    80% {
        transform: translateX(2px);
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translateX(0px);
    }
}


</style>