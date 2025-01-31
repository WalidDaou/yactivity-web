<template>
  <div class="bg-[#F8F8F8]">

    <div class="showLgHidden w-full  main-container border-color border-t border-b ">

      <div @click="mobileShow = !mobileShow" class="flex flex-row justify-between items-center">
        <p class="font-12px pt-[15px] pb-[16px]">Booking Summary</p>
        <img
            src="@/assets/svg/arrow-up.svg"
            :class="mobileShow ? 'rotate-180' : ''"
            class="transition-transform duration-300"
            alt="Arrow Icon"
        />
      </div>


      <div v-if="mobileShow" class="flexLgHidden w-full lg:w-[24%] pb-[20px] flex-col gap-3" style="min-width: 24%;">

        <Sidebar :currentStep="currentStep" class="side-bar-activities2"/>

        <ChosenActivity class="chosen-activity"/>

      </div>

    </div>

    <div class="w-full flex flex-col lg:flex-row pt-7 main-container  bg-white lg:bg-transparent gap-7 pb-10  lg:pb-40">


      <div class="hiddenLgFlex w-full lg:w-[24%]  flex-col gap-3" style="min-width: 24%;">

        <Sidebar :currentStep="currentStep" class="side-bar-activities2"/>

        <ChosenActivity class="chosen-activity"/>

      </div>


      <div class="w-full lg:w-[76%] bg-white rounded-[20px] lg:px-5 lg:pt-7">

        <!--        <div class="tabs font-14px font-semibold overflow-scroll ">-->

        <!--          <div class="flex text-center items-center justify-center min-w-[150px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 1, disabled: currentStep < 1 }" @click="goToStep(1)">-->
        <!--            <div :class="[currentStep === 1 ? 'active-step' : 'non-active-step']">1</div>-->
        <!--            Participants-->
        <!--          </div>-->
        <!--          <div class="flex text-center items-center justify-center  min-w-[150px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 2, disabled: currentStep < 2 }" @click="goToStep(2)">-->
        <!--            <div :class="[currentStep === 2 ? 'active-step' : 'non-active-step']">2</div>-->
        <!--            Date-->
        <!--          </div>-->
        <!--          <div class="flex text-center items-center justify-center  min-w-[150px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 3, disabled: currentStep < 3 }" @click="goToStep(3)">-->
        <!--            <div :class="[currentStep === 3 ? 'active-step' : 'non-active-step']">3</div>-->
        <!--            Formules-->
        <!--          </div>-->
        <!--          <div v-if="showStep4" class="flex text-center items-center  min-w-[150px] justify-center gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 4, disabled: currentStep < 4 }" @click="goToStep(4)">-->
        <!--            <div :class="[currentStep === 4 ? 'active-step' : 'non-active-step']">4</div>-->
        <!--            Visibilité-->
        <!--          </div>-->
        <!--          <div class="flex text-center items-center justify-center  min-w-[150px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 5, disabled: currentStep < 5 }" @click="goToStep(5)">-->
        <!--            <div v-if="showStep4" :class="[currentStep === 5 ? 'active-step' : 'non-active-step']">5</div>-->
        <!--            <div :class="[currentStep === 5 ? 'active-step' : 'non-active-step']" v-else>4</div>-->
        <!--            Paiement-->
        <!--          </div>-->
        <!--        </div>-->

        <!--        <div class="tabs font-14px font-semibold overflow-scroll ">-->

        <!--          <div class="flex cursor-pointer text-center items-center justify-center min-w-[200px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 1, disabled: currentStep < 1 }" @click="goToStep(1)">-->
        <!--            <div v-if="currentStep <= 1" :class="[currentStep === 1 ? 'active-step' : 'non-active-step']">1</div>-->
        <!--            &lt;!&ndash;            <div v-if="currentStep > 1" :class="[currentStep === 1 ? 'active-step' : 'non-active-step']">&ndash;&gt;-->
        <!--            <div v-if="currentStep > 1" class="w-[27px] h-full">-->
        <!--              <img class=" w-full" src="public/svgs/step-done.svg" alt="">-->
        <!--            </div>-->
        <!--            &lt;!&ndash;            </div>&ndash;&gt;-->
        <!--           Participants-->
        <!--          </div>-->

        <!--          <div class="flex cursor-pointer text-center items-center justify-center  min-w-[200px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 2, disabled: currentStep < 2 }" @click="goToStep(2)">-->
        <!--            <div v-if="currentStep <= 2" :class="[currentStep === 2 ? 'active-step' : 'non-active-step']">2</div>-->
        <!--            <div v-if="currentStep > 2" class="w-[27px] h-full">-->
        <!--              <img class=" w-full" src="public/svgs/step-done.svg" alt="">-->
        <!--            </div>-->
        <!--           Date-->
        <!--          </div>-->

        <!--          <div class="flex cursor-pointer text-center items-center justify-center  min-w-[200px] gap-4 flex-1 active"-->
        <!--               :class="{ active: currentStep === 3, disabled: currentStep < 3 }" @click="goToStep(3)">-->
        <!--            <div v-if="currentStep <= 3" :class="[currentStep === 3 ? 'active-step' : 'non-active-step']">3</div>-->
        <!--            <div v-if="currentStep > 3" class="w-[27px] h-full">-->
        <!--              <img class=" w-full" src="public/svgs/step-done.svg" alt="">-->
        <!--            </div>-->
        <!--           Formules-->
        <!--          </div>-->

        <!--          <div-->
        <!--              class="cursor-pointer flex text-center items-center  min-w-[200px] justify-center gap-4 flex-1 active"-->
        <!--              :class="{ active: currentStep === 4, disabled: currentStep < 4 }" @click="goToStep(4)">-->
        <!--            <div v-if="currentStep <= 4" :class="[currentStep === 4 ? 'active-step' : 'non-active-step']">4</div>-->
        <!--            <div v-if="currentStep > 4" class="w-[27px] h-full">-->
        <!--              <img class=" w-full" src="public/svgs/step-done.svg" alt="">-->
        <!--            </div>-->
        <!--           Visibilité-->
        <!--          </div>-->

        <!--          <div-->
        <!--              class="cursor-pointer flex text-center items-center  min-w-[200px] justify-center gap-4 flex-1 active"-->
        <!--              :class="{ active: currentStep === 4, disabled: currentStep < 4 }" @click="goToStep(4)">-->
        <!--            <div v-if="currentStep <= 4" :class="[currentStep === 4 ? 'active-step' : 'non-active-step']">4</div>-->
        <!--            <div v-if="currentStep > 4" class="w-[27px] h-full">-->
        <!--              <img class=" w-full" src="public/svgs/step-done.svg" alt="">-->
        <!--            </div>-->

        <!--           Paiement-->

        <!--          </div>-->

        <!--        </div>-->


        <div class="tabs font-14px font-semibold overflow-scroll flex">

          <div
              v-for="(step, index) in ['Participants', 'Date', 'Formules', 'Visibilité', 'Paiement']"
              :key="index"
              ref="stepRefs"
              class="flex cursor-pointer text-center items-center justify-center min-w-[200px] gap-4 flex-1 active"
              :class="{ active: currentStep === index + 1, disabled: currentStep < index + 1 }"
              @click="goToStep(index + 1)"
          >
            <div v-if="currentStep <= index + 1"
                 :class="[currentStep === index + 1 ? 'active-step' : 'non-active-step']">
              {{ index + 1 }}
            </div>
            <div v-if="currentStep > index + 1" class="w-[27px] h-full">
              <img class="w-full" src="public/svgs/step-done.svg" alt="">
            </div>
            {{ step }}
          </div>
        </div>

        <div class="step-content">

          <StepParticipants v-if="currentStep === 1" @selectParticipants="setParticipants"/>
          <StepDate v-if="currentStep === 2"/>
          <StepFormules v-if="currentStep === 3"/>
          <StepVisibilite v-if="currentStep === 4 && showStep4"/>
          <StepPaiement v-if="currentStep === 5"/>

        </div>


        <div
            class="flex flex-col  lg:flex-row w-full pt-6  lg:pl-6 xl:pl-12 gap-4 lg:gap-7 align-baseline pb-5 lg:pb-10">

          <div v-if="currentStep === 5" class="flex w-full lg:w-fit">
            <button type="button" @click="nextStep" :disabled="currentStep === 5"
                    class="btn-form text-white uppercase font-medium font-14px px-10 mb-8 py-4">
              PROCÉDER AU PAIEMENT
            </button>
          </div>

          <div v-else class="flex w-full lg:w-fit">
            <button type="button" @click="nextStep" :disabled="currentStep === 5"
                    class="btn-form !w-full md:!w-fit text-white uppercase font-medium font-14px px-24 mb-8 py-4">
              SUIVANT
            </button>
          </div>
          <button @click="prevStep" :class="{ hidden: currentStep === 1 }"
                  class="underline text-center w-full lg:w-fit tracking-[0.8px] text-[#EE8436] font-14px">
            RETOURNER
          </button>
        </div>


      </div>


    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import Sidebar from '../../../components/activities/join/sidebar.vue'
import ChosenActivity from '../../../components/activities/join/ChosenActivity.vue'
import StepParticipants from '../../../components/activities/join/StepParticipants.vue'
import StepDate from '../../../components/activities/join/StepDate.vue'
import StepFormules from '../../../components/activities/join/StepFormules.vue'
import StepVisibilite from '../../../components/activities/join/StepVisibilite.vue'
import StepPaiement from '../../../components/activities/join/StepPaiement.vue'

const currentStep = ref(5)
const participants = ref(0)
const mobileShow = ref(false)

const showStep4 = computed(() => participants.value !== 12)

const nextStep = () => {
  if (currentStep.value < 5) {
    if (currentStep.value === 3 && !showStep4.value) {
      currentStep.value = 5
    } else {
      currentStep.value++
    }
  }
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value--
}

const goToStep = (step) => {
  if (step <= currentStep.value) {
    currentStep.value = step
  }
}

const setParticipants = (count) => {
  participants.value = count
  if (count === 12 && currentStep.value === 4) {
    currentStep.value = 3
  }
}

const stepRefs = ref([]);

watch(currentStep, async () => {
  await nextTick(); // Wait for the DOM to update
  const activeStep = stepRefs.value[currentStep.value - 1];
  if (activeStep) {
    activeStep.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"});
  }
});
</script>
<style scoped>
.tabs {
  @apply flex items-center flex-row justify-between gap-4;
}

.tabs .active {
  background: #00000008 0% 0% no-repeat padding-box;
  border: 1px solid #00000046;
  @apply rounded-[10px] py-2;
}

.tabs .disabled {
  pointer-events: none;
  color: #aaa;
  cursor: not-allowed;
}

.step-content {
  margin-bottom: 20px;
}

.navigation-buttons {
  display: flex;

}

.navigation-buttons button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.navigation-buttons button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}</style>
  