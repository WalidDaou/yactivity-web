<template>
  <div>
    <div class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-7 w-100 pb-3">

      <div :class="[{ 'custom-radio': selectedRadio === 'gratuite1', 'normal-radio': selectedRadio !== 'gratuite1' }]"
           @click="selectRadio('gratuite1')">

        <div class="flex  justify-between">
          <div>
            <label class="flex cursor-pointer flex-row item-center gap-2 font-normal font-16px">
              <input type="radio" name="gratuite" value="gratuite1" v-model="selectedRadio" @click.stop>
              11:00am
            </label>
          </div>
          <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
        </div>

        <div class="flex flex-row items-center justify-center pt-3">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-orange-bell.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[12px] pl-1">60 intéressés</span>
          </div>
        </div>

      </div>

      <div :class="[{ 'custom-radio': selectedRadio === 'gratuite2', 'normal-radio': selectedRadio !== 'gratuite2' }]"
           @click="selectRadio('gratuite2')">

        <div class="flex  justify-between">
          <div>
            <label class="flex cursor-pointer flex-row item-center gap-2 font-normal font-16px">
              <input type="radio" name="gratuite" value="gratuite2" v-model="selectedRadio" @click.stop>
              12:00pm
            </label>
          </div>
          <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
        </div>

        <div class="flex flex-row items-center justify-center pt-3">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-orange-bell.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[12px] pl-1">60 intéressés</span>
          </div>
        </div>

      </div>

      <div :class="[{ 'custom-radio': selectedRadio === 'gratuite3', 'normal-radio': selectedRadio !== 'gratuite3' }]"
           @click="selectRadio('gratuite3')">

        <div class="flex  justify-between">
          <div>
            <label class="flex cursor-pointer flex-row item-center gap-2 font-normal font-16px">
              <input type="radio" name="gratuite" value="gratuite3" v-model="selectedRadio" @click.stop>
              1:00pm
            </label>
          </div>
          <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
        </div>

        <div class="flex flex-row items-center justify-center pt-3">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-orange-bell.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[12px] pl-1">60 intéressés</span>
          </div>
        </div>

      </div>


      <div :class="[{ 'custom-radio': selectedRadio === 'gratuite4', 'normal-radio': selectedRadio !== 'gratuite4' }]"
           @click="selectRadio('gratuite4')">

        <div class="flex  justify-between">
          <div>
            <label class="flex cursor-pointer flex-row item-center gap-2 font-normal font-16px">
              <input type="radio" name="gratuite" value="gratuite4" v-model="selectedRadio" @click.stop>
              2:00pm
            </label>
          </div>
          <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
        </div>

        <div class="flex flex-row items-center justify-center pt-3">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-orange-bell.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[12px] pl-1">60 intéressés</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ReserveDate',
  data() {
    return {
      selectedRadio: 'gratuite1'
    };
  },
  methods: {
    selectRadio(value) {
      this.selectedRadio = value;
    }
  }
};
</script>
<style scoped>
[type="radio"] {
  accent-color: #EC6760;
  width: 20px;
}

.custom-radio {
  border: 1.5px solid #EE8336;
  border-radius: 10px;
  padding: 10px;
}

.normal-radio {
  border: 1.5px solid #ddd;
  border-radius: 10px;
  padding: 10px;
}
</style>
