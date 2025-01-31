<template>
  <div class="lg:pl-6 xl:pl-12 pt-6 xl:pt-12">
    <h2 class="text-[21px] font-semibold mb-4">Formules</h2>
    <div class="options-container">
      <div v-for="option in options" :key="option.id"
           :class="['option p-4 mb-6 border border-[#00000026] rounded-[10px] cursor-pointer', { 'border-[#EE8436] bg-[#F7F7F7]': selectedOptions[option.id] }]"
           @click="toggleOption(option.id)">
        <div class="flex flex-col lg:flex-row justify-between w-100 items-center">

          <div class="w-full flex flex-col  lg:w-[65%]">
            <div class="flex items-center">

              <div class="flex flex-row items-center" @click.stop>

                <input type="checkbox" :id="`checkbox-${option.id}`" :value="option.id"
                       v-model="selectedOptions[option.id]" class="hidden-checkbox"/>

                <label :for="`checkbox-${option.id}`" class="custom-checkbox-label"></label>

                <label :for="`checkbox-${option.id}`" class="ml-2 font-normal font-18px">{{ option.name }}</label>

                <span
                    v-if="option.note" class="pl-4 hiddenLgShow italic text-black opacity-[0.5] font-normal font-14px">({{
                    option.note
                  }})

                </span>


              </div>

              <div class="pl-8">
                <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
              </div>


            </div>

            <span
                v-if="option.note" class="pl-4 pt-[4px] showLgHidden italic text-black opacity-[0.5] font-normal font-14px">({{
                option.note
              }})

                </span>

            <div class="details mt-2">
              <div class="text-[#EE8436] font-18px font-medium pl-4 lg:pl-7">{{ option.price }} / {{
                  option.unit
                }}
              </div>
            </div>

          </div>

          <div v-if="selectedOptions[option.id]" class="w-full lg:w-[35%]">

            <selectInput name="activityType" label="" :options="activityTypes" v-model="selectedActivityType"
                         @change="handleActivityTypeChange"/>

          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
import selectInput from '~/components/inputs/selectInput.vue';

export default {
  components: {
    selectInput,
  },
  data() {
    return {
      selectedOptions: {},
      selectedParticipants: {},
      options: [
        {id: 1, name: 'Étudiants', price: '20£', unit: 'par personne', note: 'You must show id on arrival'},
        {id: 2, name: 'Classique', price: '20£', unit: 'par personne', note: ''},
        {
          id: 3,
          name: 'Tarif pour 4 personnes',
          price: '70 €',
          unit: 'pour tout le groupe',
          note: '4 personnes minimum'
        },
        {
          id: 4,
          name: 'Tarif pour 6 personnes',
          price: '100 €',
          unit: 'pour tout le groupe',
          note: '6 personnes minimum'
        },
      ],
    };
  },
  methods: {
    toggleOption(id) {
      if (this.selectedOptions[id]) {
        this.$delete(this.selectedOptions, id);
        this.$delete(this.selectedParticipants, id);
      } else {
        this.$set(this.selectedOptions, id, true);
        this.$set(this.selectedParticipants, id, '');
      }
    },
  },
};
</script>

<style scoped>
.options-container {
  display: flex;
  flex-direction: column;
}

.option {
  transition: border-color 0.3s, box-shadow 0.3s;
}

.option:hover {
  border-color: #EE8436;
  background-color: #f7f7f7;
  /* box-shadow: 0 0 10px rgba(238, 132, 54, 0.2); */
}

.discount {
  background-color: #E30000;
}

.note {
  background-color: #FFDDC1;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 14px;
}

.border-orange-500 {
  border-color: #EE8436;
}

.hidden-checkbox {
  display: none;
}

.custom-checkbox-label {
  display: inline-block;
  width: 17px;
  height: 17px;
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #EE8536;
  cursor: pointer;
  position: relative;
}

.custom-checkbox-label::before {
  content: '';
  position: absolute;
  top: 38%;
  left: 50%;
  width: 6px;
  height: 11px;
  border: solid white;
  border-width: 0 0.15em 0.15em 0;
  transform: translate(-50%, -50%) rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}

.hidden-checkbox:checked + .custom-checkbox-label {
  background-color: #EE8536;
}

.hidden-checkbox:checked + .custom-checkbox-label::before {
  opacity: 1;
}

</style>
  