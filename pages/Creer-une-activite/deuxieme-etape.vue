<template>
  <div class="main-container">
    <CreerUneActiviteHeaderVue/>
    <form class="activity-form pt-1">
      <div class="pt-3 pb-4 font-semibold text-[21px] text-center lg:px-0 px-2">Date de votre activité</div>
      <div class="flex flex-row justify-between gap-4 lg:gap-7 w-100 pb-10">
        <div :class="{ 'custom-radio': isChecked, 'normal-radio': !isChecked }" class="w-50">
          <label class="flex flex-row items-center gap-2 font-normal text-[15px] w-full">
            <input type="radio" name="activityType" value="gratuite" v-model="selectedRadio"/>
            Date précise
          </label>
        </div>
        <div :class="{ 'custom-radio': !isChecked, 'normal-radio': isChecked }" class="w-50">
          <label class="flex flex-row items-center gap-2">
            <input type="radio" name="activityType" value="payante1" v-model="selectedRadio"/>
            Activité récurrente
          </label>
        </div>
      </div>
      <div v-if="selectedRadio === 'gratuite'">

        <div class="flex remove-pr flex-col lg:flex-row gap-4 lg:gap-7  w-100 pb-5 pt-2">

          <DateInput name="date" label="Date" class="w-full" placeholder="Date"/>
          <TimeInput name="time" label="Saisissez l’heure*" class="w-full" placeholder="Saisissez l’heure"/>

        </div>


      </div>

      <div v-if="selectedRadio === 'payante1'">


        <div v-for="(input, index) in inputs" :key="input.id" class="flex-row w-full flex items-center gap-[9px]">

          <div
              class="flex flex-col lg:flex-row gap-4 lg:gap-7 w-full  pb-2 pt-2">
            <!-- <DateInput :name="'date' + index" label="Date(s)" class="w-43" placeholder="Date(s)" /> -->
            <MultiSelect class="w-full lg:w-[43%]"/>
            <div class="w-full lg:w-[46%] flex flex-row gap-4 lg:gap-7">

              <TimeInput :name="'time' + index" label="Saisissez l’heure*" class="w-full"
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
          <svg xmlns="http://www.w3.org/2000/svg" width="28.179" height="28.179" viewBox="0 0 18.179 18.179">
            <path id="Path_774" data-name="Path 774"
                  d="M27.325,18.236H20.967V11.877a1.366,1.366,0,0,0-2.731,0v6.358H11.877A1.308,1.308,0,0,0,10.512,19.6a1.322,1.322,0,0,0,1.366,1.366h6.358v6.358A1.323,1.323,0,0,0,19.6,28.69a1.359,1.359,0,0,0,1.366-1.366V20.967h6.358a1.366,1.366,0,0,0,0-2.731Z"
                  transform="translate(-10.512 -10.512)" fill="#ee8436"/>
          </svg>

        </div>
      </div>

      <div class="flex flex-col lg:flex-row items-center pt-14 w-100 justify-center gap-7  pb-72">


        <NuxtLink to="/Creer-une-activite/troisieme-etape" class="flex justify-center w-full lg:w-fit">
          <button type="button"
                  class="btn-form text-white uppercase font-medium font-14px px-24 w-full lg:w-fit lg:mb-8 py-4">SUIVANT
          </button>
        </NuxtLink>
        <NuxtLink to="/Creer-une-activite/premiere-etape"
                  class="underline tracking-[0.8px] text-[#EE8436] font-14px">
          RETOURNER
        </NuxtLink>


      </div>


    </form>
  </div>
</template>

<script>
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-activite-header.vue';
import DateInput from '~/components/inputs/DatePicker.vue';
import TimeInput from '~/components/inputs/TimeInput.vue';
import MultiSelect from "~/components/inputs/MultiSelect.vue";

export default {
  components: {
    MultiSelect,
    CreerUneActiviteHeaderVue,
    DateInput,
    TimeInput
  },
  data() {
    return {
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
};
</script>

<style scoped>
[type="radio"] {
  accent-color: #EC6760;
  width: 25px;
}

.trash {
  cursor: pointer;
}
</style>
  