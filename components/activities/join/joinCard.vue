<template>

  <nuxt-link
      to="/activities/a"
      :class="['w-full bg-black bg-opacity-[0.03]', { 'custom-radio': selectedRadio === item.radioValue, 'normal-radio': selectedRadio !== item.radioValue }]"
      @click="selectRadio(item.radioValue)"
  >


    <div class="flex flex-col  lg:flex-row lg:justify-between">

      <div class="w-full flex flex-row justify-between ">

        <label class="flex cursor-pointer  flex-row item-center gap-2 font-normal text-[15px]">
          {{ item.sessionDuration }}

          <div></div>

          <input
              type="radio"
              :name="item.radioValue"
              :value="item.radioValue"
              v-model="selectedRadio"
              class="opacity-0"
          />
        </label>

        <div class="!block lg:!hidden category-box font-normal text-[13px] bg-[#E7F7E8] text-[#13AC1E]">
          <span class="font-normal">continue</span>
        </div>

      </div>

      <div class="flex flex-row items-center py-[8px] ">

        <span class="text-[#EE8436]  font-14px">{{ item.price }}</span>
        <!--      <div class="pl-8">-->
        <!--        <div class="font-semibold font-14px text-white bg-[#E30000] px-1">{{ item.discount }}</div>-->
        <!--      </div>-->
      </div>

    </div>


    <div class="flex flex-col lg:flex-row gap-6">


      <div class="flex flex-row gap-4 items-center pt-[10px] h-fit">

        <div class="w-[2.6rem] h-[2.6rem] relative bg-[#DBDBDB] rounded-full flex items-center justify-center">
          <ImageComponent
              :url="item.image ?? ''"
              fit="cover"
              ratio="1-1"
              :overlay="false"
              alt="Image Alt Text"
              class="profile-pic"
          />
        </div>

        <div class="flex flex-col gap-[5px]">
          <div class="font-normal font-14px">
            <span>{{ item.name }}</span>
            <span>- {{ item.age }} ans</span>
          </div>

          <div class="flex flex-row items-center">

            <img class="w-[18px] lg:w-[22px]" src="assets/svg/star-rating.svg" alt="Star Rating"/>
            <img class="w-[18px] lg:w-[22px]" src="assets/svg/star-rating.svg" alt="Star Rating"/>
            <img class="w-[18px] lg:w-[22px]" src="assets/svg/star-rating.svg" alt="Star Rating"/>
            <img class="w-[18px] lg:w-[22px]" src="assets/svg/star-rating.svg" alt="Star Rating"/>
            <img class="w-[18px] lg:w-[22px]" src="assets/svg/star-rating.svg" alt="Star Rating"/>
            <p class="font-12px !pl-[5px]">({{ item.rating }})</p>

          </div>
        </div>
      </div>


      <div class="flex h-full items-center  gap-2 lg:gap-5 mt-4">
        <div class="flex items-center">
          <div
              class="font-semibold font-14px justify-center items-centerv !h-[30px] !w-[30px] non-active-icon text-center text-white">
            <img src="@/assets/svg/small-calender-colored.svg" alt="Edit Icon "/>
          </div>
          <span class="font-normal font-14px pl-1">Jan 10, 2024</span>
        </div>
        <div class="flex items-center">
          <div
              class="font-semibold font-14px flex justify-center items-center !h-[30px] !w-[30px] non-active-icon text-center text-white">
            <img src="@/assets/svg/small-clock.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal font-14px pl-1">13:00</span>
        </div>
        <div class="flex items-center">
          <div
              class="font-semibold font-14px justify-center items-center !w-[30px] !h-[30px] non-active-icon text-center text-white">
            <img src="@/assets/svg/small-timer.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal font-14px pl-1">90 minutes </span>
        </div>
      </div>

    </div>

    <div class="flex flex-row justify-between items-center">

      <div class="flex items-center  gap-3 my-5">
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span class="font-normal">Masculin</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span class="font-normal">Expert</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDEBEC] text-[#FF0000]">
          <span class="font-normal">10 Places restantes / 10</span>
        </div>
      </div>

      <div class="!hidden lg:!block category-box font-normal text-[13px] bg-[#E7F7E8] text-[#13AC1E]">
        <span class="font-normal">continue</span>
      </div>

    </div>

  </nuxt-link>


</template>

<script setup>

import {ref, defineProps} from 'vue';

// Props
defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({
      sessionDuration: '',
      price: '',
      image: '',
      name: '',
      age: 0,
      rating: 0,
      description: '',
      discount: '',
      participants: '',
      note: '',
      radioValue: '',
    }),
  },
});

// State for the selected radio button
const selectedRadio = ref('');

// Function to handle radio selection
const selectRadio = (value) => {
  selectedRadio.value = value;
};
</script>

<style scoped>
/* Add custom styles here */
.custom-radio {
  border: 2px solid #ee8436;
}

.normal-radio {
  border: 1px solid #ccc;
}

.font-14px {
  font-size: 14px;
}

.non-active-icon {
  width: 24px;
  height: 24px;
}

.active-icon {
  width: 30px;
  height: 30px;
}

.category-box {
  padding: 4px 8px;
  border-radius: 4px;
}
</style>
