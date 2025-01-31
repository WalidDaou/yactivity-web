<template>
  <div class="bg-white lg:bg-[#F8F8F8]">

    <div class="flex flex-col lg:flex-row pt-7 main-container gap-7 pb-10 lg:pb-40">

      <div class="w-full lg:w-[24%] flex flex-col gap-3" style="min-width: 24%;">


        <Sidebar :currentStep="currentStep" class="side-bar-activities2"/>
        <ContactInfo class="chosen-activity"/>
        <ChosenActivity class="chosen-activity"/>
        <ReservatioPrincipale class="chosen-activity"/>
        <FormulesSelectionnees class="chosen-activity"/>
        <Paiement class="chosen-activity"/>


      </div>

      <div class="w-full lg:w-[76%] bg-white rounded-[20px] lg:px-5 pt-7">

        <div class="font-semibold font-20px lg:pl-12 pt-4">Évaluez votre expérience</div>

        <div class="lg:pl-11 pt-1">

          <div class="flex flex-row w-full  items-center gap-7">

            <div class="image-upload-container  pb-10">

              <div class="image-wrapper" @click="triggerFileInput">
                <ImageComponent :url="defaultImage" fit="cover" ratio="2-1" :overlay="false"
                                alt="Image Alt Text" class="avatar-image"/>
              </div>

              <input type="file" ref="fileInput" @change="onFileChange" class="hidden"/>

            </div>

            <div class="flex flex-col  gap-5">

              <div class="font-18px font-semibold">Johnny Doe - 23 ans</div>

              <Rating/>

            </div>

          </div>

          <div class="flex flex-row w-[100%] gap-7 pb-12 lg:pl-36 lg:pr-12">

            <TextArea name="" label="Commentaire" placeholder="Entrez votre commentaire ici" class="w-100"/>

          </div>

          <div class="flex lg:pl-36 w-100 gap-7 align-baseline pb-10 lg:pb-72">

            <button type="button"
                    class="btn-form text-white uppercase w-full  lg:w-fit font-medium font-14px px-20 mb-8 py-4">
              SOUMETTRE
            </button>

          </div>

        </div>

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
  