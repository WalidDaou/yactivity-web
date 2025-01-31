<template>

  <div class="w-full">

    <div class="w-full showLgHidden">

      <Carousel :images="[
                Playground,
                Playground,
                Playground
            ]"/>
    </div>

    <div class="w-full flex flex-col lg:flex-row pt-7 main-container overflow-hidden gap-7 pb-10 lg:pb-40">

      <div class="w-full lg:w-[29%] side-bar-activities h-50">
        <Sidebar/>
      </div>

      <div class="w-full lg:w-[69%] carousel-activities">

        <div class="w-full max-w-full">

          <NewCarousel class="hiddenLgShow" :images="[
                Playground,
                Playground,
                Playground
            ]"/>

        </div>

        <div class="flex flex-row justify-between pt-4">
                <span class="category-box font-normal font-14px"> <img src="@/assets/svg/small-sport.svg"
                                                                       alt="Edit Icon"/>&nbsp;Sport</span>
          <div class="flex flex-row gap-2 items-center">

            <div class="font-normal text-[13.5px]  text-[#13AC1E]">
              <span class="bg-[#E7F7E8] px-4 py-[5px] rounded-[18px]">Confirmée</span>
            </div>
            <a href="https://www.addtoany.com/share" class="border-sh p-2 font-normal font-14px a2a_dd">
              <img src="@/assets/svg/share.svg" alt="share Icon"/>
            </a>

            <span @click="openModal" class="cursor-pointer border-sh p-2 font-normal font-14px"> <img
                src="@/assets/svg/black-bell.svg" alt="Edit Icon"/></span>
            <span class="cursor-pointer border-sh p-2 font-normal font-14px"> <img
                src="@/assets/svg/black-heart.svg" alt="Edit Icon"/></span>
          </div>
        </div>
        <div class="font-semibold text-[26px] py-5">
          Foot Salle 5 x 5
        </div>
        <div class="font-normal text-[13.3px] pb-14">
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
            <label class="font-semibold text-[12px] pl-2 pb-1" :for="name">Quand souhaitez-vous être alerté?</label>
            <div class="flex flex-col lg:flex-row justify-between gap-7 w-100 pb-10 pt-1">
              <div :class="{ 'custom-radio': isChecked, 'normal-radio': !isChecked }" class="w-full">
                <label class="flex cursor-pointer flex-row items-center gap-2 font-normal text-[15px] w-50">
                  <input type="radio" name="activityType" value="gratuite" v-model="selectedRadio"/>
                  Toujours
                </label>
              </div>
              <div :class="{ 'custom-radio': !isChecked, 'normal-radio': isChecked }" class="w-full">
                <label class="flex cursor-pointer flex-row items-center gap-2">
                  <input type="radio" name="activityType" value="payante1" v-model="selectedRadio"/>
                  Durant mes horaires de disponibilités
                </label>
              </div>
            </div>

            <div v-if="selectedRadio === 'payante1'" class="pb-10">

              <div v-for="(input, index) in inputs" :key="input.id" class="flex-row flex items-center gap-[9px]">

                <div
                    class="flex flex-col lg:flex-row gap-4 lg:gap-7 w-full lg:w-[650px] pb-2 pt-2">
                  <!-- <DateInput :name="'date' + index" label="Date(s)" class="w-43" placeholder="Date(s)" /> -->
                  <MultiSelect class="w-full lg:w-[43%]"/>
                  <div class="w-full lg:w-[46%] flex flex-row gap-4 lg:gap-7">

                    <TimeInput :name="'time' + index" label="Heure de début" class="w-full"
                               placeholder="Saisissez l’heure"/>
                    <TimeInput :name="'time' + index" label="Heure de fin" class="w-full"
                               placeholder="Saisissez l’heure"/>
                  </div>

                  <div
                      :class="['w-10  hidden justify-center items-center lg:flex', inputs.length > 1 ? 'trash' : 'no-trash']"
                      @click.stop="inputs.length > 1 && removeInput(index)">
                    <img src="assets/svg/trash.svg" alt="">
                  </div>


                </div>

                <div
                    :class="['w-10 !h-[120px] flex justify-center items-center lg:hidden', inputs.length > 1 ? 'trash' : 'no-trash']"
                    @click.stop="inputs.length > 1 && removeInput(index)">
                  <img src="assets/svg/trash.svg" alt="">
                </div>

              </div>


              <div @click="addInput" class="add-json">
                <svg xmlns="http://www.w3.org/2000/svg" width="28.179" height="28.179"
                     viewBox="0 0 18.179 18.179">
                  <path id="Path_774" data-name="Path 774"
                        d="M27.325,18.236H20.967V11.877a1.366,1.366,0,0,0-2.731,0v6.358H11.877A1.308,1.308,0,0,0,10.512,19.6a1.322,1.322,0,0,0,1.366,1.366h6.358v6.358A1.323,1.323,0,0,0,19.6,28.69a1.359,1.359,0,0,0,1.366-1.366V20.967h6.358a1.366,1.366,0,0,0,0-2.731Z"
                        transform="translate(-10.512 -10.512)" fill="#ee8436"/>
                </svg>
              </div>


            </div>
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

  </div>

</template>

<script>


import Sidebar from '../../../components/activities/sidebar.vue';
import Carousel from '../../../components/activities/carousel.vue';
import Playground from '@/assets/images/playground.png';
import TabsComponent from '../../../components/activities/TabsComponent.vue';
import ReserveDate from '../../../components/activities/ReserveDate.vue';
import JoinReservation from '../../../components/activities/JoinReservation.vue';
import CustomModal from '../../../components/popup/alertPopup.vue';
import selectInput from '../../../components/inputs/selectInput.vue';
import DateInput from '../../../components/inputs/DatePicker.vue';
import MultiSelect from '../../../components/inputs/MultiSelect.vue';
import TimeInput from '../../../components/inputs/TimeInput.vue';
import NewCarousel from "~/components/activities/newCarousel.vue";

export default {
  components: {
    Sidebar,
    Carousel,
    TabsComponent,
    ReserveDate,
    JoinReservation,
    CustomModal,
    selectInput,
    DateInput,
    MultiSelect,
    TimeInput,
    NewCarousel
  },


  data() {
    return {
      Playground: Playground,
      tabs: [
        {label: 'Réserver une date', component: ReserveDate},
        {label: `Rejoindre une réservation (20)`, component: JoinReservation}
      ],
      isModalOpen: true,
      inputs: [{id: 0}],
      selectedRadio: 'gratuite'

    };
  },


  computed: {
    isChecked() {
      return this.selectedRadio === 'gratuite';
    }
  },


  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },

    addInput() {
      const newId = this.inputs.length ? this.inputs[this.inputs.length - 1].id + 1 : 0;
      this.inputs.push({id: newId});
    },
    removeInput(index) {
      if (this.inputs.length > 1) {
        this.inputs.splice(index, 1);
      }
    }
  }


}
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