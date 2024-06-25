<template>
  <div class="">
    <MobileNav />
    <NavBar />
  </div>
</template>

<script>
import MobileNav from "./MobileNavNew.vue"
// import WebNav from "./WebNav.vue"
import NavBar from "@/components/Nav/NavBar.vue";
export default {
  components:{NavBar, MobileNav},
 
}
</script>

<style scoped>

@media only screen and (min-width: 1024px){
  .showAbout{
    z-index: 100000
  }
  .logo{
    width: 70px
  }
  /* .router-link-active{
    color: #00381D;
    font-weight: bold;
    position: relative
  } */
  
}
</style>