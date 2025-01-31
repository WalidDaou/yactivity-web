<template>
  <div>

    <div class="p-4 lg:p-7 border-hr">

      <div class="font-semibold font-14px pb-5"> Détails de l’activité</div>
      <div class="flex gap-2 pb-5">
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span>Masculin</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span>Expert</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDEBEC] text-[#FF0000]">
          <span>5 Places restantes / 10</span>
        </div>
      </div>

      <div class="flex flex-row gap-3 items-center pt-3">
        <div class="font-semibold font-14px colored-icon text-center text-white">
          <img src="@/assets/svg/colored-location.svg" alt="Edit Icon"/>
        </div>
        <div>20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
      </div>

      <div class="flex flex-row gap-2 pt-10 justify-between ">
        <div class="flex rounded-[10px] w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/calender-small.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-14px text-center">Jan 10, 2024</div>
        </div>
        <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/colored-clock.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-14px text-center">13:00</div>
        </div>
        <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
          <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
            <img src="@/assets/svg/colored-time.svg" alt="Edit Icon"/>
          </div>
          <div class="font-normal font-14px text-center">90 minutes</div>
        </div>
      </div>

    </div>

    <div class="px-7 pt-5">


      <div v-if="price > 0" class="text-[#EE8436] font-semibold font-18px">{{ price }}£ /par personne</div>
      <div v-if="price <= 0" class="text-[#EE8436] font-semibold font-18px">Gratuite</div>
      <div class="flex justify-center pb-0 pt-3">
        <button class="btn-partner text-white uppercase font-medium font-14px w-100 mt-5 mb-7 py-4">Supprimer la date</button>
      </div>
    </div>
  </div>

</template>

<script setup>

defineProps({
      price: Number
    })

</script>

<style lang="scss" scoped></style>