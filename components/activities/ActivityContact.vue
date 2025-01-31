<template>
  <div class="!p-4 flex flex-col gap-[25px]">

    <div class="flex flex-row gap-3 items-center  ">

      <div class="font-semibold font-14px colored-icon-rev text-center text-white">
        <img src="@/assets/svg/orange-phone.svg" alt="Edit Icon"/>
      </div>

      <div class="font-normal font-14px">+33 (6) 86 57 90 14</div>
    </div>

    <div class="flex flex-row gap-3 items-center ">

      <div class="font-semibold font-14px colored-icon-rev text-center text-white">
        <img src="@/assets/svg/small-location.svg" alt="Edit Icon"/>
      </div>

      <div class="font-normal font-14px">20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
    </div>

    <div class=" ">

      <div class="flex flex-row gap-2 justify-between ">
        <div class="flex rounded-[10px] w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/calender-small.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-12px text-center">Jan 10, 2024</div>
        </div>
        <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/colored-clock.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-12px text-center">13:00</div>
        </div>
        <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/colored-time.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-12px text-center">90 minutes</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue';
import Playground from '@/assets/images/playground.png';

export default {
  components: {
    ImageComponent
  },
  data() {
    return {
      Playground: Playground,

    };
  },

}
</script>

<style lang="scss" scoped></style>