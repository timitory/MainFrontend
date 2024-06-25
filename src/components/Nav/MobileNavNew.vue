<template>
  <div class="lg:hidden pt-6">
    <div class="bg-white px-3 flex justify-between items-center">
      <button @click="$store.commit('toggleHomeCollapse')" type="button">
        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 10.9999H25M1 1.3999H25M1 20.5999H25" stroke="#0F2217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <router-link to="/"><img src="@/assets/logo.svg" alt="" style="width: 50px" ></router-link>
      <router-link to="/login" class="text-customgreen text-sm">My account</router-link>
    </div>
    <transition name="slidedown">
      <div v-if="$store.state.homeCollapse" class="fixed w-full left-0 py-4 pb-6 bg-white mobilemenu h-full">
        <div class="px-4 flex justify-between items-center">
          <router-link to="/"><img src="@/assets/logo.svg" alt="" style="width: 80px"></router-link>
          <button @click="$store.commit('toggleHomeCollapse')" type="button">
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 25L24 1.5" stroke="#0F2217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 25L1 1.5" stroke="#0F2217" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <ul class="mt-14 px-3">
          <li class="text-lg py-2 font-medium text-center">
            <button type="button" @click="showProducts = !showProducts" class="text-darker focus:outline-none font-medium">Products
              <font-awesome-icon icon="angle-down" class="ml-2"/>
            </button>
            <transition name="fade">
              <ul v-if="showProducts" class="mt-4 py-4 text-left grid gap-6">
                <li>
                  <router-link to="/homecontent" class="flex items-start gap-4">
                    <svg class="self-center w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M15.8332 1.66666H7.4999C6.58074 1.66666 5.83324 2.41416 5.83324 3.33332V7.98832L1.91074 11.9108C1.79423 12.0274 1.71489 12.1758 1.68275 12.3375C1.65061 12.4991 1.66711 12.6666 1.73017 12.8189C1.79323 12.9711 1.90001 13.1013 2.03702 13.1928C2.17403 13.2844 2.33511 13.3333 2.4999 13.3333V17.5C2.4999 17.721 2.5877 17.933 2.74398 18.0892C2.90026 18.2455 3.11222 18.3333 3.33324 18.3333H16.6666C16.8876 18.3333 17.0995 18.2455 17.2558 18.0892C17.4121 17.933 17.4999 17.721 17.4999 17.5V3.33332C17.4999 2.41416 16.7524 1.66666 15.8332 1.66666ZM9.16657 16.6667H4.16657V12.0117L6.66657 9.51166L9.16657 12.0117V16.6667ZM15.8332 16.6667H10.8332V13.3333C10.9982 13.3337 11.1596 13.285 11.2968 13.1935C11.4341 13.102 11.5411 12.9718 11.6042 12.8194C11.6673 12.667 11.6838 12.4992 11.6514 12.3375C11.619 12.1757 11.5393 12.0272 11.4224 11.9108L7.4999 7.98832V3.33332H15.8332V16.6667Z"
                          fill="#454545" class="svg-path"/>
                      <path
                          d="M9.16659 5H10.8333V6.66667H9.16659V5ZM12.4999 5H14.1666V6.66667H12.4999V5ZM12.4999 8.35917H14.1666V10H12.4999V8.35917ZM12.4999 11.6667H14.1666V13.3333H12.4999V11.6667ZM5.83325 12.5H7.49992V14.1667H5.83325V12.5Z"
                          fill="#454545" class="svg-path"/>
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Home Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your Item </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/health" class="flex items-start gap-4">
                    <svg class="self-center w-auto" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M12.0994 2.52401L8.33338 4.69867V0.350006H5.66672V4.69867L1.90072 2.52401L0.567383 4.83401L4.33272 7.00801L0.567383 9.182L1.90072 11.492L5.66672 9.31801V13.6667H8.33338V9.31801L12.0994 11.492L13.4327 9.182L9.66738 7.00801L13.4327 4.83401L12.0994 2.52401Z"
                          fill="#454545" class="svg-path" />
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Health Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure yourself </p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/vehicle" class="flex items-start gap-4">
                    <svg class="self-center w-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M15.579 7.617L14.553 4.53825C14.4042 4.09011 14.1179 3.70028 13.7348 3.42413C13.3518 3.14799 12.8915 2.99958 12.4192 3H5.58075C5.10854 2.99958 4.64821 3.14799 4.26516 3.42413C3.88212 3.70028 3.59584 4.09011 3.447 4.53825L2.421 7.617C2.14846 7.73136 1.91571 7.92357 1.75188 8.16957C1.58806 8.41558 1.50044 8.70444 1.5 9V12.75C1.5 13.3148 1.81725 13.8015 2.27925 14.0573C2.2695 14.1068 2.25 14.1518 2.25 14.2035V15.75C2.25 15.9489 2.32902 16.1397 2.46967 16.2803C2.61032 16.421 2.80109 16.5 3 16.5H3.75C3.94891 16.5 4.13968 16.421 4.28033 16.2803C4.42098 16.1397 4.5 15.9489 4.5 15.75V14.25H13.5V15.75C13.5 15.9489 13.579 16.1397 13.7197 16.2803C13.8603 16.421 14.0511 16.5 14.25 16.5H15C15.1989 16.5 15.3897 16.421 15.5303 16.2803C15.671 16.1397 15.75 15.9489 15.75 15.75V14.2035C15.75 14.1518 15.7305 14.106 15.7207 14.0573C15.9558 13.9291 16.1521 13.7402 16.2892 13.5102C16.4263 13.2803 16.4991 13.0177 16.5 12.75V9C16.5 8.37825 16.119 7.84425 15.579 7.617ZM3 12.75V9H15L15.0015 12.75H3ZM5.58075 4.5H12.4185C12.7417 4.5 13.0282 4.7055 13.1302 5.013L13.9597 7.5H4.04025L4.869 5.013C4.91876 4.8636 5.01429 4.73365 5.14204 4.64157C5.26979 4.54949 5.42328 4.49996 5.58075 4.5Z"
                          fill="#454545" class="svg-path" />
                      <path
                          d="M4.875 12C5.49632 12 6 11.4963 6 10.875C6 10.2537 5.49632 9.75 4.875 9.75C4.25368 9.75 3.75 10.2537 3.75 10.875C3.75 11.4963 4.25368 12 4.875 12Z"
                          fill="#454545" class="svg-path" />
                      <path
                          d="M13.125 12C13.7463 12 14.25 11.4963 14.25 10.875C14.25 10.2537 13.7463 9.75 13.125 9.75C12.5037 9.75 12 10.2537 12 10.875C12 11.4963 12.5037 12 13.125 12Z"
                          fill="#454545" class="svg-path" />
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Vehicle Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your item</p>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/gadgets" class="flex items-start gap-4">
                    <svg class="self-center w-auto" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M2.00008 0.333344C1.26475 0.333344 0.666748 0.931343 0.666748 1.66668V12.3333C0.666748 13.0687 1.26475 13.6667 2.00008 13.6667H10.0001C10.7354 13.6667 11.3334 13.0687 11.3334 12.3333V1.66668C11.3334 0.931343 10.7354 0.333344 10.0001 0.333344H2.00008ZM2.00008 10.3333V2.33334H10.0001L10.0014 10.3333H2.00008Z"
                          fill="#454545" class="svg-path" />
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Gadget Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your item</p>
                    </div>
                  </router-link>
                </li>
                <li >
                  <router-link to="/travel" class="flex items-start gap-4">
                    <svg class="self-center w-auto" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M1.5605 8.33349L0.5 9.39399L4.21175 10.9847L5.80325 14.6972L6.86375 13.6367L6.3335 10.9847L8.81825 8.49999L11.5258 14.278L12.53 13.2737L11.6375 5.68149L13.7585 3.55974C13.9018 3.42137 14.016 3.25585 14.0947 3.07284C14.1733 2.88984 14.2146 2.69301 14.2164 2.49384C14.2181 2.29467 14.1802 2.09715 14.1047 1.91281C14.0293 1.72846 13.9179 1.56098 13.7771 1.42014C13.6363 1.27931 13.4688 1.16793 13.2844 1.0925C13.1001 1.01708 12.9026 0.97913 12.7034 0.980861C12.5042 0.982592 12.3074 1.02397 12.1244 1.10258C11.9414 1.1812 11.7759 1.29547 11.6375 1.43874L9.46025 3.61599L1.868 2.72274L0.91925 3.67224L6.65225 6.42474L4.2125 8.86449L1.5605 8.33349Z"
                          fill="#454545" class="svg-path" />
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Travel Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your journey</p>
                    </div>
                  </router-link>
                  <!-- <span class="border bg-white rounded px-3 py-2 hidden absolute top-0 right-0">coming soon</span> -->
                </li>
                <li class="relative">
                  <router-link to="/pets" class="flex items-start gap-4 ">
                    <svg class="self-center w-auto" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M17.5 4.99999H15.8333L14.775 3.94166C14.3922 3.55851 13.8748 3.34019 13.3333 3.33332H11.25C11.1332 2.86565 10.8662 2.44926 10.4898 2.14815C10.1134 1.84704 9.64851 1.67787 9.16663 1.66666V6.96666C9.20945 7.80826 9.54216 8.60913 10.1083 9.23332C11.0404 10.1294 12.2596 10.6667 13.55 10.75L16.425 9.59999C16.7623 9.46458 17.066 9.25724 17.315 8.99242C17.564 8.7276 17.7522 8.41168 17.8666 8.06666L18.3333 6.79166C18.346 6.70601 18.346 6.61897 18.3333 6.53332V5.83332C18.3333 5.61231 18.2455 5.40035 18.0892 5.24407C17.9329 5.08779 17.721 4.99999 17.5 4.99999ZM13.3333 6.66666C13.1685 6.66666 13.0074 6.61778 12.8703 6.52621C12.7333 6.43465 12.6265 6.3045 12.5634 6.15223C12.5003 5.99995 12.4838 5.8324 12.516 5.67075C12.5481 5.5091 12.6275 5.36061 12.744 5.24407C12.8606 5.12752 13.0091 5.04816 13.1707 5.016C13.3324 4.98385 13.4999 5.00035 13.6522 5.06342C13.8045 5.1265 13.9346 5.23331 14.0262 5.37035C14.1178 5.50739 14.1666 5.66851 14.1666 5.83332C14.1666 6.05434 14.0788 6.2663 13.9225 6.42258C13.7663 6.57886 13.5543 6.66666 13.3333 6.66666Z"
                          fill="#454545" class="svg-path"/>
                      <path
                          d="M9.48329 9.78333C8.90198 9.14668 8.52213 8.35219 8.39163 7.5H4.99996C4.77728 7.51473 4.55402 7.48172 4.34513 7.40317C4.13624 7.32462 3.94655 7.20236 3.78874 7.04455C3.63094 6.88675 3.50867 6.69705 3.43012 6.48816C3.35157 6.27927 3.31856 6.05601 3.33329 5.83333C3.33329 5.61232 3.2455 5.40036 3.08922 5.24408C2.93293 5.0878 2.72097 5 2.49996 5C2.27895 5 2.06698 5.0878 1.9107 5.24408C1.75442 5.40036 1.66663 5.61232 1.66663 5.83333C1.675 6.41164 1.81162 6.98088 2.06663 7.5C2.34775 8.0451 2.79005 8.49031 3.33329 8.775V18.3333H5.83329V14.1667H10.8333V18.3333H13.3333V11.5583C11.8796 11.4438 10.5144 10.8144 9.48329 9.78333Z"
                          fill="#454545" class="svg-path"/>
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Pet Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your pet</p>
                    </div>
                  </router-link>
                </li>
                <li class="relative">
                  <router-link to="/life" class="flex items-start gap-4 ">
                    <svg class="self-center w-auto" width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.00007 1.06332C6.27367 0.395394 5.32288 0.0246892 4.33607 0.0246582C3.81376 0.025202 3.29672 0.129031 2.81469 0.33017C2.33267 0.53131 1.89518 0.825788 1.5274 1.19666C-0.0412649 2.77199 -0.0405982 5.23599 1.52874 6.80466L6.41674 11.6927C6.53007 11.892 6.74874 12.0207 7.00007 12.0207C7.10327 12.0197 7.20479 11.9945 7.29649 11.9471C7.38819 11.8998 7.46751 11.8316 7.52807 11.748L12.4714 6.80466C14.0407 5.23532 14.0407 2.77199 12.4701 1.19399C12.1025 0.823803 11.6653 0.529923 11.1838 0.329247C10.7022 0.128571 10.1858 0.0250579 9.66407 0.0246582C8.67729 0.0248195 7.72654 0.395507 7.00007 1.06332ZM11.5274 2.13666C12.5694 3.18399 12.5701 4.81999 11.5287 5.86199L7.00007 10.3907L2.4714 5.86199C1.43007 4.81999 1.43074 3.18399 2.47007 2.13932C2.97674 1.63532 3.6394 1.35799 4.33607 1.35799C5.03274 1.35799 5.69274 1.63532 6.1954 2.13799L6.52874 2.47132C6.59059 2.53329 6.66406 2.58245 6.74494 2.61599C6.82582 2.64953 6.91251 2.66679 7.00007 2.66679C7.08762 2.66679 7.17432 2.64953 7.2552 2.61599C7.33607 2.58245 7.40954 2.53329 7.4714 2.47132L7.80474 2.13799C8.81274 1.13199 10.5207 1.13466 11.5274 2.13666Z"
                            fill="#454545" class="svg-path" />
                    </svg>
                    <div>
                      <p class="text-darker font-semibold text-base">Welfare Insurance</p>
                      <p class="mt-2 text-current text-sm">Insure your life</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="mt-6 text-lg text-center text-darker font-medium">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="text-lg mt-6 py-2 text-center text-darker font-medium">
            <router-link to="/impact">Impact</router-link>
          </li>
          <li class="text-lg mt-6 py-2 text-center text-darker font-medium">
            <router-link to="/faq">FAQ</router-link>
          </li>
          <li class="mt-6 text-center font-medium">
            <router-link to="/login" class="text-army text-sm py-3 px-10 bg-white border border-solid border-army rounded-md">Sign in</router-link>
          </li>
          <li class="mt-10 text-center font-medium">
            <router-link to="/signup" class="text-white text-sm py-3 px-2 bg-army rounded-md">Create an Account</router-link>
          </li>
        </ul>
      </div>
    </transition>
    <transition name="scale">
      <Gadgetmodal v-if="comingsoon"  :close="closeReview" tett="managevehicle" :notification="opennotification" />
    </transition>
    <transition name="scale">
      <Gadgetnotification v-if="notification"  :close="closeReview" tett="managevehicle" />
    </transition>
  </div>
</template>

<script>
import Gadgetmodal from '../Gadgetmodal.vue'
import Gadgetnotification from '../Gadgetnotification.vue';

export default {
  data() {
    return {
      showProducts: false,
      comingsoon: false,
      notification: false
    };
  },
  methods: {
    opengadget() {
      this.showProduct = false;
      this.$store.commit('toggleHomeCollapse')
      this.comingsoon = true;
    },
    closeReview() {
      this.comingsoon = false;
      this.notification = false;
    },
    opennotification() {
      this.comingsoon = false;
      this.notification = true;
    }
  },
  components: { Gadgetmodal, Gadgetnotification }
}
</script>

<style>
li:nth-child(4):hover span{
  display: block;
}
li:nth-child(5):hover span{
  display: block;
}
.mobilemenu{
  top: 0;
  width: 100%;
  left: 0;
  box-shadow: 0px 9px 45px #00000090;
  z-index: 1002
}
.slidedown-enter-active{
  animation-name: slide-down;
  animation-duration: .5s;
}
.slidedown-leave-active{
  animation: slide-down .5s reverse;
  /* transition: opacity .1s ease-out; */
}
.fade-enter-active{
  animation-name: fadeIn;
  animation-duration: .5s;
}
.fade-leave-active{
  animation: fadeIn .5s reverse;
}
@keyframes slide-down {
  0%{
    transform: translateY(-300px);
  }
  100%{
    transform: translateY(0);
  }
}
@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>