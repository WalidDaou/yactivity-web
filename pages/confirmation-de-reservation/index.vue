<template>
  <div>
    <div class="font-Kanit">
      <PartnerBanner/>
      <div class="mt-[-100px] lg:mt-[-195px] main-container pb-20">
        <ConfirmDetails/>
      </div>
    </div>
  </div>

  <alert-popup :is-open="popUp" @close="closePopUp" title="Remarques">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies
      leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce
      ut placerat orci nulla.

      Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus.
      Fusce id velit ut tortor pretium. Massa ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc
      lobortis. Faucibus ornare suspendisse sed nisi. Sagittis eu volutpat odio facilisis mauris sit amet massa. Erat
      velit scelerisque in dictum non consectetur a erat.</p>
  </alert-popup>

</template>
<script setup>

import alertPopup from "~/components/popup/alertPopup.vue";
import PartnerBanner from '../../components/banners/ConfirmBanner.vue';
import ConfirmDetails from '../../components/confirm/ConfirmDetails.vue'
import AlertPopup from "~/components/popup/alertPopup.vue";


const popUp = ref(true);

const closePopUp = () => {
  popUp.value = false;
}

</script>
