<template>
  <div>
    <div class="flex flex-col lg:flex-row justify-between gap-7 w-100 pb-10">

      <div
          :class="['w-full', { 'custom-radio': selectedRadio === 'gratuite', 'normal-radio': selectedRadio !== 'gratuite' }]"
          @click="selectRadio('gratuite')">

        <label class="flex cursor-pointer flex-row item-center gap-2 font-normal text-[15px]">
          <input type="radio" name="gratuite" value="gratuite" v-model="selectedRadio">
          60 minutes
          <div></div>
        </label>

        <div class="pt-5 pl-1 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua bibendum est.
        </div>
        <div class="flex flex-row items-center pt-5 pl-1">
          <span class="text-[#EE8436] font-semibold font-14px">10£/par personne</span>
          <div class="pl-8">
            <div class="font-semibold font-14px text-white bg-[#E30000] px-1">-20%</div>
          </div>
        </div>
        <div class="flex flex-row items-center pt-5 pl-1">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-people.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[13px] pl-1">10 pers</span>
            <div class="category-box font-normal text-[13px] bg-[#F6EBE4] text-black ml-6">
              <span>Partageable si incomplets</span>
            </div>
          </div>
        </div>
      </div>

      <div
          :class="['w-full', { 'custom-radio': selectedRadio === 'payante1', 'normal-radio': selectedRadio !== 'payante1' }]"
          @click="selectRadio('payante1')">
        <label class="flex cursor-pointer flex-row item-center gap-2">
          <input type="radio" name="payante" value="payante1" v-model="selectedRadio">
          1h30 minutes
        </label>
        <div class="pt-5 pl-1 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua bibendum est.
        </div>
        <div class="flex flex-row items-center pt-5 pl-1">
          <span class="text-[#EE8436] font-semibold font-14px">10£/par personne</span>
        </div>
        <div class="flex flex-row items-center pt-5 pl-1">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-people.svg" alt="Edit Icon">
            </div>
            <span class="font-normal text-[13px] pl-1">10 pers</span>
            <div class="category-box font-normal text-[13px] bg-[#F6EBE4] text-black ml-6">
              <span>Partageable si incomplets</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nuxt-link to="join/a">
      <button class="btn-form text-white uppercase font-medium font-14px w-full lg:w-[24%] mt-4 mb-8 py-4 spacing-zero">
        RÉSERVER
      </button>
    </nuxt-link>

  </div>
</template>

<script>
export default {
  name: 'ReserveDate',
  data() {
    return {
      selectedRadio: 'gratuite'
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
  width: 25px;
}

.custom-radio {
  /* Add your custom radio styles here */
}

.normal-radio {
  /* Add your normal radio styles here */
}
</style>
  