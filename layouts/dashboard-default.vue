<template>
  <Header/>
  <div class="pt-[155px] lg:pt-24 bg-white lg:bg-[#F8F8F8]">

    <div class="flex flex-col lg:flex-row pt-5 main-container gap-7 pb-10 lg:pb-40">

      <div class="hiddenLgShow lg:w-[24%]">
        <Sidebar/>
      </div>

      <div class="showLgHidden z-[100] w-full">
        <PhoneSidebar/>
      </div>


      <div class="w-full lg:w-[76%] mt-3 bg-white rounded-[20px]  lg:px-16 py-4 lg:py-11">
        <slot></slot>
      </div>
    </div>

    <PopupAlertPopup title="Êtes-vous sure de vouloir se <br> déconnecter?" @close="store?.setLogoutTrue(false)"
                     :is-open="store?.logoutTrue">


      <div class="flex flex-row gap-[15px] pt-[20px] width600 ">

        <button @click="isOpen = false" class="default-btn w-full apply-padding text-white tohover ">
          Oui
        </button>

        <button @click="isOpen = false" class="border rounded-[10px] w-full apply-padding font-color border-color toChange" >
          Non
        </button>

      </div>

    </PopupAlertPopup>


  </div>
  <Footer/>
</template>

<script setup>

import Sidebar from '../partials/dashboard-sidebar.vue';
import Header from '../partials/header.vue';
import Footer from '../partials/footer.vue';
import PhoneSidebar from "~/partials/phone-sidebar.vue";
import {usePersistStore} from "~/stores/index.js";

const store = usePersistStore();

</script>