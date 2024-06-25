<template>
  <section class=" ">
    <div class="mobileheight">
      <div class="relative">
        <div class="relative">
          <Life class="lg:block hidden"/>
          <div class="absolute top-20 lg:top-10 flex flex-col justify-center items-center w-full">
            <h1 class="lg:text-5xl xl:text-7xl text-4xl text-center">
              Protect the Future with<br>
              <span class="text-army">Life </span>
              <span class="font-bold" style="color: #3E4095">Insurance</span>
            </h1>
          </div>
          <MobileLife class="lg:hidden block"/>
        </div>
<!--        I want this div to expand up with animation when view more is clicked-->
        <div class="absolute w-full pt-2 py-5 lg:py-10 -bottom-0 lg:bottom-0 bg-custom flex lg:flex-row flex-col justify-center gap-y-12 lg:gap-4 z-10"
             :class="isDivVisible ? 'block expand-up': 'lg:hidden expand-down ' ">
          <div class="lg:hidden flex justify-center ">
            <span @click="isDivVisible = !isDivVisible; mobileshow = !mobileshow">
              <ArrowUp :class="isDivVisible ? '' : 'upsidedown'" />
            </span>
          </div>
          <div class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Bronze ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Bronze</h1>
<!--                  <p class="text-sm">As low as NGN 250 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Bronze ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦400,000</li>
                    <li class="text-sm">Burglary: ₦200,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦40,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦4,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦400,000</li>
                  </ul>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = false"
                   v-if="showDetails.Bronze">Collapse</p>
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Bronze = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859" @click="show = true">-->
<!--                  Buy-->
<!--                </button>-->
                <p class="text-sm text-army cursor-pointer" >Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">
                  coming soon
                </button>
              </div>
            </div>
          </div>
          <div :class="mobileshow ? 'block' : 'hidden'" class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Silver ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Silver</h1>
<!--                  <p class="text-sm">As low as NGN 500 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Silver ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦800,000</li>
                    <li class="text-sm">Burglary: ₦400,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦80,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦8,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦800,000</li>
                  </ul>
                </div>
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = false"-->
<!--                   v-if="showDetails.Silver">Collapse</p>-->
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Silver = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859">-->
<!--                  Buy-->
<!--                </button>-->
                <p class="text-sm text-army cursor-pointer" >Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">
                  coming soon
                </button>
              </div>
            </div>
          </div>
          <div :class="mobileshow ? 'block' : 'hidden'" class="relative flex justify-center lg:block">
            <BuyLine/>
            <div class="absolute -bottom-5 w-full">
              <div class=" mx-auto flex-col gap-y-1.5 centernewshow flex justify-center items-center w-full">
                <div class="bg-gradient-to-b to-transparent"
                     :class="showDetails.Gold ? 'bg-custom pt-4 rounded-lg rounded-b-none w-full flex flex-col justify-center items-center' : ''">
                  <h1 class="text-xl font-bold text-center" style="color: #3E4095">Gold</h1>
<!--                  <p class="text-sm">As low as NGN 1000 Per Month</p>-->
                  <ul class="list-disc w-7/12 mx-auto flex flex-col gap-y-1.5 py-3"
                      :class="showDetails.Gold ? 'block' : 'hidden'">
                    <li class="text-sm">Fire: ₦1,600,000</li>
                    <li class="text-sm">Burglary: ₦800,000</li>
                    <li class="text-sm">One-off alternative rent benefit: ₦160,000</li>
                    <li class="text-sm">2 Nights Hotel Accommodation: ₦16,000</li>
                    <li class="text-sm">Sum Assured Limit: ₦1,600,000</li>
                  </ul>
                </div>
                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = false"
                   v-if="showDetails.Gold">Collapse</p>
<!--                <p class="text-sm text-army cursor-pointer" @click="showDetails.Gold = true" v-else>Details</p>-->
<!--                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded"-->
<!--                        style="background-color: #00A859">-->
<!--                  Buy-->
<!--                </button>-->
                <p class="text-sm text-army cursor-pointer" >Details</p>
                <button class="py-2 px-12 text-white font-bold border-2 border-white rounded bg-grey">
                  coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Life from "../../components/ProductImage/Life.vue"
import MobileLife from "../../components/ProductImage/lifemobileimage.vue"
import BuyLine from "@/components/ProductImage/BuyLine.vue";
import ArrowUp from "@/assets/icons/arrowup.vue";
export default {
  components: {BuyLine, Life, MobileLife, ArrowUp },
  data() {
    return {
      isDivVisible: false,
      showDetails: {
        Bronze: false,
        Silver: false,
        Gold: false
      },
      show: false,
      showSecurity: false,
      mobileshow: false,
    }
  },
  mounted() {
    console.log('Component mounted!');
    window.addEventListener('scroll', this.handleScroll, true);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        this.isDivVisible = false;
      }else {
        if (!this.isScrolling) {
          console.log('Scroll initiated!');
          this.isScrolling = true;

          this.isDivVisible = true;
        }
        const scrollY =
            window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        console.log('Scroll Position:', scrollY);
        this.isDivVisible = scrollY > 2;
      }
    },
  },
}
</script>

<style scoped>
.arrow1 {
  animation-name: arrow;
  animation-duration: 1s;
  //animation-delay: 0;
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

.scroll-show-div {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  display: none;
}

.scroll-show-div.show {
  display: block;
}

.centernewshow {
  width: 96%;
  //left: 50%;
  //transform: translate(-50%, 0%);
}

.mobileheight {
  height: 82vh;
}

@media (max-width: 912px) {
  .mobileheight {
    height: 95vh;
  }

}

svg {
  width: 100%;
  height: 100%;
}

.upsidedown {
  transform: rotate(180deg);
}

.expand-up {
  animation: expandUp 0.5s ease forwards;
  padding-bottom: 4rem;
}

@keyframes expandUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.expand-down {
  animation: expandDown 0.5s ease forwards;
  padding-bottom: 4rem;
}

@keyframes expandDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

</style>