<template>
  <div class="lg:pl-6 xl:pl-12 pt-6 xl:pt-12">

    <div class="font-semibold font-20px">Nombre de personnes</div>

    <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-2 xl:gap-5 pb-10 pt-4">

      <div v-for="number in 10" :key="number"
           :class="[selectedRadio === number ? 'custom-radio-join' : 'normal-radio-join']" class="w-full  mr-[7px]">
        <label class="flex flex-row items-center gap-2 font-normal text-[15px] cursor-pointer">
          <input type="radio" :name="`person${number}`" :value="number" v-model="selectedRadio"
                 @click="selectNumber(number)"/>
          <div class="font-normal font-14px">
            {{ number }} <span v-if="number > 1">personnes</span><span v-else>personne</span></div>
        </label>
      </div>

    </div>


    <div class="flex pt-5">
      <div class="flex flex-row gap-2 items-center rounded-[18px] bg-[#FFF7E5] px-3 py-1">
        <div><img src="@/assets/svg/danger.svg" alt="Edit Icon"/></div>
        <div class="text-[#FFA500] font-14px font-normal"> Cette séance nécessite minimum 10 pers.</div>
      </div>
      <div></div>
    </div>


    <div class="flex flex-row gap-2 px-2 lg:px-0 pt-4">
      <div class="flex items-center">
        <input type="checkbox" id="customCheckbox5" class="hidden-checkbox"/>
        <label for="customCheckbox5" class="custom-checkbox-label"></label>
      </div>
      <div class="font-medium font-14px">
        Je souhaite quand même réserver et j’accepte le règlement du complément si nous arrivons incomplets
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedRadio: 1,
      currentStep: 1,
    };
  },
  methods: {
    selectNumber(number) {
      this.selectedRadio = number;
      this.$emit('selectParticipants', number);
    },
  },
};
</script>
<style scoped>
[type="radio"] {
  accent-color: #ec6760;
  width: 25px;
  height: 20px;
}


.hidden-checkbox {
  display: none;
}

.custom-checkbox-label {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 3px;
  border: 2px solid #EE8536;
  cursor: pointer;
  position: relative;

}

.custom-checkbox-label::before {
  content: '';
  position: absolute;
  top: 44%;
  left: 50%;
  width: 4px;
  height: 8px;
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
  