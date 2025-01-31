<template>

  <div class="main-container ">

    <p class="font-16px py-[20px]">Sélectionnez le jour que vous souhaitez voir</p>

    <div @click.stop="store.setFilterNumber(5)" class="cursor-pointer relative w-full flex flex-row gap-[5px] lg:gap-[10px] pb-[20px]">

      <div class="relative modofyDatepicker w-full h-fit ">

        <CalendarInput @click.stop="showDate = !showDate" :options="[]" :icon="Calendar" :text="store.chooseTime"/>


        <DateTimePickerNew
            :class="showDate ? '' : 'hidden'"
            v-model="store.chooseTime"
        />


      </div>


      <div
          class="cursor-pointer relative flex flex-row  lg:gap-[10px] items-center lg:border-[1px] w-fit rounded-[10px] px-[8px]">


        <div class="cursor-pointer w-[35px] h-[35px] relative">

          <img class="w-full h-full" @click.stop="clicked = !clicked" v-if="!clicked" src="assets/svg/modifire-one.svg"
               alt="">
          <img class="w-full h-full" v-if="clicked" src="assets/svg/modifier-two.svg" alt="">

        </div>

        <p class="hiddenLgShow font-14px text-nowrap select-none ">Gérer toute l’activité récurrente</p>


      </div>

      <div v-if="clicked"
           @click.stop="clicked = true"
           class="absolute top-[120%] right-0 border overflow-hidden max-w-[260px] z-[100] bg-white rounded-[10px] w-full h-fit min-h-[50px]">

        <div class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex px-[10px] items-center ">
          <p class="font-14px">Modifier</p>
        </div>

        <div class=" w-full h-[50px]  hover:bg-[#EDEDED] flex px-[10px] items-center ">
          <p class="font-14px">Supprimer</p>
        </div>

      </div>



    </div>

  </div>

  <div class="w-full showLgHidden ">

    <CarouselSquare :images="[
                PartnerCarousel,
                Playground,
                Playground
            ]"/>

  </div>



  <div class="flex flex-col lg:flex-row pt-7 main-container gap-7 pb-40">

    <div class="w-full lg:w-[29%] h-50">

      <div class="side-bar-activities">
        <Sidebar/>
      </div>

      <div class="side-bar-activities mt-4">
        <ChosenActivity :price="price"/>
      </div>

    </div>

    <div class="w-full lg:w-[69%] carousel-activities">


      <div class="w-full hiddenLgShow">

        <Carousel

            :images="[
                PartnerCarousel,
                Playground,
                Playground
            ]"/>

      </div>

      <div class="flex flex-row justify-between pt-2">
                <span class="category-box font-normal font-14px"> <img :src="Gastronomie"
                                                                       alt="Edit Icon"/>&nbsp;Gastronomie</span>
        <div class="flex flex-row gap-2 items-center">

          <!--          <div class="font-normal text-[13.5px]  text-[#13AC1E]">-->
          <!--            <span class="bg-[#E7F7E8] px-4 py-[5px] rounded-[18px]">Confirmée</span>-->
          <!--          </div>-->

          <a href="https://www.addtoany.com/share" class="border-sh p-2 font-normal font-14px a2a_dd">
            <img src="@/assets/svg/share.svg" alt="share Icon"/>
          </a>

          <!--          <span @click="openModal" class="cursor-pointer border-sh p-2 font-normal font-14px"> <img-->
          <!--              src="@/assets/svg/black-bell.svg" alt="Edit Icon"/></span>-->

          <!--          <span class="cursor-pointer border-sh p-2 font-normal font-14px"> <img-->
          <!--              src="@/assets/svg/black-heart.svg" alt="Edit Icon"/></span>-->

        </div>
      </div>
      <div class="font-semibold text-[26px] py-5">
        Séance de 60 minutes
      </div>
      <div class="font-normal text-[13.3px] pb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. Mauris
        vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus
        euismod. Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in
        nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium.
      </div>

      <TabsComponent :tabs="tabs"/>

      <CustomModal :isOpen="isModalOpen" title="S’interesser" @close="closeModal">
        <div class="flex justify-center m-auto max-w-[420px] items-center text-center font-normal font-14px">
          Je souhaite recevoir une alerte en cas de désistement ou d’inscription de nouveaux participants pour
          m’inscrire par la suite.
        </div>

        <div class="md:px-4 lg:px-10 pt-12">
          <selectInput name="activityType" label="Combien seriez-vous" :options="activityTypes"
                       v-model="selectedActivityType" class="pb-5"/>

        </div>

        <div class="mt-2 mb-5 flex justify-center">
          <div
              class="default-btn py-4 px-20 font-medium font-14px tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]"
              @click="closeModal">
            S’INTERESSER
          </div>
        </div>

      </CustomModal>

    </div>
  </div>


</template>

<!--<script>-->
<!--import Sidebar from '../../../components/activities/partnerSidebar.vue';-->
<!--import ChosenActivity from '../../../components/activities/partner/ChosenActivity.vue'-->
<!--import Carousel from '../../../components/activities/carousel.vue';-->
<!--import Playground from '@/assets/images/playground.png';-->
<!--import TabsComponent from '../../../components/activities/TabsComponent.vue';-->
<!--import ParticipantsPartnerTable from '../../../components/activities/partner/ParticipantsPartnerTable.vue';-->
<!--import InvitesTable from '../../../components/activities/partner/InvitesTable.vue';-->
<!--import InteressesTable from '../../../components/activities/partner/InteressesTable.vue';-->
<!--import CustomModal from '../../../components/popup/alertPopup.vue';-->
<!--import selectInput from '../../../components/inputs/selectInput.vue';-->
<!--import DateInput from '../../../components/inputs/DatePicker.vue';-->
<!--import MultiSelect from '../../../components/inputs/MultiSelect.vue';-->
<!--import TimeInput from '../../../components/inputs/TimeInput.vue';-->
<!--import Messages from "~/components/activities/partner/Messages.vue";-->

<!--export default {-->
<!--  components: {-->
<!--    ChosenActivity,-->
<!--    Sidebar,-->
<!--    Carousel,-->
<!--    TabsComponent,-->
<!--    ParticipantsPartnerTable,-->
<!--    InvitesTable,-->
<!--    InteressesTable,-->
<!--    CustomModal,-->
<!--    selectInput,-->
<!--    DateInput,-->
<!--    MultiSelect,-->
<!--    TimeInput,-->
<!--    Messages-->
<!--  },-->
<!--  data() {-->
<!--    return {-->
<!--      Playground: Playground,-->
<!--      tabs: [-->
<!--        {label: `Participants (8)`, component: ParticipantsPartnerTable},-->
<!--        {label: `Invités (15)`, component: InvitesTable},-->
<!--        {label: `Intéressés (50)`, component: InteressesTable},-->
<!--        {label: `Messages (5)`, component: Messages}-->
<!--      ],-->
<!--      isModalOpen: false,-->
<!--      inputs: [{id: 0}],-->
<!--      selectedRadio: 'gratuite'-->

<!--    };-->
<!--  },-->
<!--  computed: {-->
<!--    isChecked() {-->
<!--      return this.selectedRadio === 'gratuite';-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    openModal() {-->
<!--      this.isModalOpen = true;-->
<!--    },-->
<!--    closeModal() {-->
<!--      this.isModalOpen = false;-->
<!--    },-->

<!--    addInput() {-->
<!--      const newId = this.inputs.length ? this.inputs[this.inputs.length - 1].id + 1 : 0;-->
<!--      this.inputs.push({id: newId});-->
<!--    },-->
<!--    removeInput(index) {-->
<!--      if (this.inputs.length > 1) {-->
<!--        this.inputs.splice(index, 1);-->
<!--      }-->
<!--    }-->

<!--  }-->
<!--}-->
<!--</script>-->


<script setup>

import {ref, computed, onMounted} from 'vue';
import Sidebar from '../../../components/activities/partnerSidebar.vue';
import ChosenActivity from '../../../components/activities/partner/ChosenActivity.vue';
import Carousel from '../../../components/activities/carousel.vue';
import Playground from '@/assets/images/playground.png';
import PartnerCarousel from '@/assets/images/partner-carousel.jpg'
import Gastronomie from '@/assets/svg/gastronomie.svg';
import TabsComponent from '../../../components/activities/TabsComponent.vue';
import ParticipantsPartnerTable from '../../../components/activities/partner/ParticipantsPartnerTable.vue';
import InvitesTable from '../../../components/activities/partner/InvitesTable.vue';
import InteressesTable from '../../../components/activities/partner/InteressesTable.vue';
import CustomModal from '../../../components/popup/alertPopup.vue';
import selectInput from '../../../components/inputs/selectInput.vue';
import DateInput from '../../../components/inputs/DatePicker.vue';
import MultiSelect from '../../../components/inputs/MultiSelect.vue';
import TimeInput from '../../../components/inputs/TimeInput.vue';
import Messages from '~/components/activities/partner/Messages.vue';
import CalendarInput from "~/components/inputs/CalendarInput.vue";
import Calendar from "~/assets/svg/calendar.svg"
import {usePersistStore} from "~/stores/index.js";
import {formatDate} from "~/utils/formatDate.js";
import DateTimePickerNew from "~/components/inputs/DateTimePickerNew.vue";
import CarouselSquare from "~/components/carousels/carouselSquare.vue";


const PlaygroundImage = Playground;
const store = useStore()

const tabs = [
  {label: `Participants (8)`, component: ParticipantsPartnerTable},
  {label: `Invités (15)`, component: InvitesTable},
  {label: `Intéressés (50)`, component: InteressesTable},
  {label: `Messages (5)`, component: Messages},
];

const price = ref(0)

const isModalOpen = ref(true);
const inputs = ref([{id: 0}]);
const selectedRadio = ref('gratuite');

const isChecked = computed(() => selectedRadio.value === 'gratuite');
const clicked = ref(false)
const selectedTime = ref(null);

const selectedDate = ref("2025-01-06");

const date = ref("select a date");
const time = ref("");
const showDate = ref(false)

const handleTimeUpdated = (updatedTime) => {
  time.value = updatedTime;
  console.log("Updated Time:", time.value);
};

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function addInput() {
  const newId = inputs.value.length ? inputs.value[inputs.value.length - 1].id + 1 : 0;
  inputs.value.push({id: newId});
}

function removeInput(index) {
  if (inputs.value.length > 1) {
    inputs.value.splice(index, 1);
  }
}

function resetCliked() {
  clicked.value = false
}


onMounted(() => {
  document.addEventListener('click', resetCliked);
});

onUnmounted(() => {
  document.removeEventListener('click', resetCliked);
});

</script>

<style lang="scss" scoped>
[type="radio"] {
  accent-color: #EC6760;
  width: 25px;
}

.trash {
  cursor: pointer;
}


</style>