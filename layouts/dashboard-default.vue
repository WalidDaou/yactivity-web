<template>
  <Header/>
  <div class="pt-[155px] lg:pt-24 bg-white lg:bg-[#F8F8F8]">

    <div class="flex flex-col lg:flex-row pt-5 main-container gap-7 pb-10 lg:pb-40">

      <div class="hiddenLgShow lg:w-[24%]">
        <Sidebar/>
      </div>

      <div class="showLgHidden z-[100] w-full">
        <PhoneSidebar />
      </div>


      <div class="w-full lg:w-[76%] mt-3 bg-white rounded-[20px]  lg:px-16 py-4 lg:py-11">
        <slot></slot>
      </div>
    </div>

  </div>
  <Footer/>
</template>

<script>

import Sidebar from '../partials/dashboard-sidebar.vue';
import Header from '../partials/header.vue';
import Footer from '../partials/footer.vue';
import PhoneSidebar from "~/partials/phone-sidebar.vue";

export default {
  components: {
    PhoneSidebar,
    Header,
    Footer,
    Sidebar
  },

}
</script>