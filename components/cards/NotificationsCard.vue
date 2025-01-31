<template>


  <div
      class="w-full relative flex flex-row gap-[18px]  border h-fit bg-[#ededed] rounded-[10px] bg-opacity-[0.4] min-h-[70px] px-[10px] py-[10px]"
  >

    <div class="w-[5rem] h-[5rem] min-w-[5rem] rounded-[50%] overflow-hidden">

      <ImageComponent :url="profileImage" fit="cover" ratio="1-1" :overlay="true" alt="Image Alt Text"
                      class=""/>

    </div>

    <div class="flex justify-center pt-[20px] lg:pt-[0px]  flex-col gap-[15px]">

      <div v-if="message?.messageType !== 'message' && message.role !== 'owner'"
           class="flex items-center gap-[8px] pt-[10px]">

        <div class="relative">
          <div
              class="w-[3rem] h-[3rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
            <img src="@/assets/svg/building.svg" alt="Edit Icon"/>
          </div>
          <div class="absolute top-[0px] right-[-2px]">
            <img class="w-[12px]" src="@/assets/svg/verified-icon.svg" alt="Edit Icon"/>
          </div>
        </div>

        <div class="flex flex-col justify-between">
          <div class="font-14px ">{{ message.name }}</div>
          <div class="flex items-center gap-2 mt-[5px]">
            <div class="w-[12px]">
              <img src="@/assets/svg/small-location.svg" alt="Edit Icon"/>
            </div>
            <span class="font-normal font-12px">Complexe Stadio Pizzeria </span>
          </div>
        </div>
      </div>

      <div v-if="message?.messageType === 'error'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
           class="w-full flex flex-row  gap-[10px]">
        <div v-if="message?.role === 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/error-user.svg" alt="">
        </div>
        <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/error-user.svg" alt="">
        </div>
        <p class="font-14px text-[red]">{{ message?.message }}</p>

      </div>

      <div v-if="message?.messageType === 'creation'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
           class="w-full flex flex-row  gap-[10px]">
        <div v-if="message?.role === 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img w-[50px] src="assets/svg/creation-admin.svg" alt="">
        </div>
        <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/creation-admin.svg" alt="">
        </div>
        <p class="font-14px text-blue-700">{{ message?.message }}</p>

      </div>

      <div v-if="message?.messageType === 'warning'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
           class="w-full flex flex-row  gap-[10px]">
        <div v-if="message?.role === 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/warning-admin.svg" alt="">
        </div>
        <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/warning-admin.svg" alt="">
        </div>
        <p class="font-14px text-yellow-500">{{ message?.message }}</p>

      </div>

      <div v-if="message?.messageType === 'success'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
           class="w-full flex flex-row  gap-[10px]">
        <div v-if="message?.role === 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/success-owner.svg" alt="">
        </div>
        <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit min-w-[30px]">
          <img src="assets/svg/success-owner.svg" alt="">
        </div>
        <p class="font-14px ">{{ message?.message }}</p>

      </div>


      <div class="flex-row flex gap-[10px]" v-if="message?.messageType === 'message'">
        <p class="font-14px max-w-[680px]">{{ message?.message }}</p>

      </div>
      <div class="flex-row flex gap-[10px]" v-if="message?.messageType === 'message' && message.role === 'owner'">
        <p class="font-14px max-w-[680px]">{{ message?.message }}</p>
        <div v-if="message?.discount > 0" class="bg-[red] px-[4px] py-[2px] h-fit w-fit">
          <p class="font-14px max-w-[680px] text-white">-{{ message?.discount }}%</p>
        </div>
      </div>


      <div class="flex flex-wrap sm:flex-row gap-[10px]">


        <div class="flex flex-row gap-[10px] items-center">

          <div
              class="rounded-[10px] font-semibold w-[30px] h-[30px] font-14px bg-opacity-[0.3] colored-icon-confirm-2 p-[6px] text-center text-white">
            <img class="w-full h-full" src="@/assets/svg/people.svg" alt="Edit Icon"/>
          </div>
          <p>2 pers.</p>

        </div>


        <div class="flex flex-row gap-[10px] items-center">

          <div
              class="rounded-[10px] font-semibold w-[30px] h-[30px] font-14px bg-opacity-[0.3] colored-icon-confirm-2 p-[6px] text-center text-white">
            <img class="w-full h-full" src="@/assets/svg/calender-small.svg" alt="Edit Icon"/>
          </div>
          <p>Jan 10, 2024</p>

        </div>

        <div class="flex flex-row gap-[10px] items-center">

          <div
              class="rounded-[10px] font-semibold w-[30px] h-[30px] font-14px bg-opacity-[0.3] colored-icon-confirm-2 p-[6px] text-center text-white">
            <img class="" src="@/assets/svg/colored-clock.svg" alt="Edit Icon"/>
          </div>
          <p>13:00</p>
        </div>

        <div class="flex flex-row gap-[10px] items-center">

          <div
              class="rounded-[10px] font-semibold w-[30px] h-[30px] font-14px bg-opacity-[0.3] colored-icon-confirm-2 p-[6px] text-center text-white">
            <img src="@/assets/svg/colored-time.svg" alt="Edit Icon"/>
          </div>
          <p>90 minutes</p>

        </div>


      </div>


    </div>


    <div class="absolute top-0 left-[7rem] lg:left-[90%] lg:right-0 p-[5px]">
      <p class="opacity-[0.4] font-12px ">Jan 1, 2024</p>
    </div>

  </div>


</template>

<script setup>
import profileImage from '@/assets/images/profilepic.png'

defineProps({
  message: Object
})

</script>