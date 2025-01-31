<template>
  <Header/>
  <div class="pt-[155px] xl:pt-24">
    <slot></slot>
  </div>
  <PopupAlertPopup title="Êtes-vous sure de vouloir se <br> déconnecter?" @close="store?.setLogoutTrue(false)"
                   :is-open="store?.logoutTrue">


    <div class="flex flex-row gap-[15px] pt-[20px] width600 ">

      <button @click="isOpen = false" class="default-btn w-full apply-padding text-white tohover ">
        Oui
      </button>

      <button @click="isOpen = false"
              class="border rounded-[10px] w-full apply-padding font-color border-color toChange">
        Non
      </button>

    </div>

  </PopupAlertPopup>

  <Footer/>
</template>

<script setup>
import Header from '../partials/header.vue';
import Footer from '../partials/footer.vue';
import {usePersistStore} from '~/stores/index.js';

const store = usePersistStore();

</script>

<script>
export default {
  meta: {
    hideForm: false
  }
};
</script>

