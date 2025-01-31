<template>
  <div class="bg-[#F8F8F8]">

    <div class="flex flex-col lg:flex-row pt-7 main-container gap-7 pb-40">

      <div class="w-full lg:w-[24%] flex flex-col gap-3" style="min-width: 24%;">

        <div class="w-full relative h-fit ">

          <Sidebar :iAmAdmin="true" :currentStep="currentStep" class="side-bar-activities2"/>

          <div class="bg-white w-fit h-fit absolute top-[20px] right-[15px] rounded-[29px]">

            <div
                class="text-[#FFA500]  h-fit showLgHidden bg-[#FFA500] bg-opacity-[0.15] font-14px rounded-[29px] px-2 py-1 text-nowrap inline-block">
              À confirmer
            </div>

          </div>

        </div>


        <!--        <ContactInfo class="chosen-activity"/>-->


        <ActivityContact class="chosen-activity"/>

        <ChosenActivity class="chosen-activity"/>

        <ReservatioPrincipale class="chosen-activity"/>

        <FormulesSelectionnees class="chosen-activity"/>

        <Paiement class="chosen-activity"/>


        <div class="flex w-100 gap-7 pt-[10px] align-baseline ">
          <button type="button" class="btn-form text-white uppercase w-full font-medium font-14px  mb-8 py-4">
            Annuler la réservation
          </button>
        </div>

      </div>


      <div class="w-full lg:w-[76%] bg-white rounded-[20px] px-5 lg:px-7 pt-7">

        <div class="w-full flex flex-row justify-between">

          <div class="font-semibold font-20px pb-[18px] pt-4">Détails de la réservation</div>
          <div
              class="text-[#FFA500] h-fit hiddenLgShow bg-[#FFA500] bg-opacity-[0.15] font-14px rounded-[29px] px-2 py-1 text-nowrap inline-block">
            À confirmer
          </div>

        </div>

        <TabsComponent :tabs="tabs"/>

      </div>

    </div>

  </div>


</template>


<script setup>

import defaultImage from '@/assets/svg/white-avatar.svg';
import Sidebar from '../../components/reviews/sidebar.vue'
import ContactInfo from '../../components/reviews/contactinfo.vue'
import ChosenActivity from '../../components/reviews/chosenActivity.vue'
import ReservatioPrincipale from '../../components/reviews/reservatioPrincipale.vue'
import FormulesSelectionnees from '../../components/reviews/formulesSelectionnees.vue'
import Paiement from '../../components/reviews/paiement.vue'
import Rating from '../../components/reviews/rating.vue'
import TextArea from '~/components/inputs/textarea.vue'
import ActivityContact from "~/components/activities/ActivityContact.vue";
import TabsComponent from '../../../components/activities/TabsComponent.vue';

import ParticipantsPartnerTable from "~/components/activities/partner/ParticipantsPartnerTable.vue";
import InvitesTable from "~/components/activities/partner/InvitesTable.vue";
import InteressesTable from "~/components/activities/partner/InteressesTable.vue";
import Messages from "~/components/activities/partner/Messages.vue";


const tabs = [
  {label: `Participants (8)`, component: ParticipantsPartnerTable},
  {label: `Invités (15)`, component: InvitesTable},
  {label: `Intéressés (50)`, component: InteressesTable},
  {label: `Messages (5)`, component: Messages},
];

</script>
<style scoped>
.image-upload-container {
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 30px;
}

.image-wrapper {
  position: relative;
}

.avatar-image {
  background-color: #e77e22;
  width: 100px;
  height: 100px;
  @apply rounded-full
}


</style>
