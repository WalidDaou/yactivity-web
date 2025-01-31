<template>
  <div
      class="border rounded-lg shadow-md  flex flex-col lg:flex-row  p-2 hover:bg-[#F7F7F7] cursor-pointer gap-9">

    <div class="w-full lg:w-[250px] xl:w-[30%]  img-activity relative">

      <ImageComponent :url="image" fit="cover" ratio="5-3" :overlay="true" alt="Image Alt Text" class="w-1/3"/>

      <span v-if="profileImage && !myCard"
            class="absolute bottom-2 left-2 category-box2 font-normal font-14px bg-[#06BCD4] text-white gap-2">
                <img :src="profileImage" alt="Profile Image" class="w-8 h-8 rounded-full object-cover">
                <div class="text-[13px] font-normal">{{ organizer }}</div>
            </span>


      <div class="flexLgHidden absolute flex-row items-center top-[10px] right-[10px] flex gap-[10px]">

        <div v-if="discount">
          <div class="font-semibold text-white bg-[#E30000] px-1">-{{ discount }}%</div>
        </div>

        <div class="category-box font-normal text-[13px] bg-[#E7F7E8] text-[#13AC1E]">
          <span class="font-normal">{{ status }}</span>
        </div>

        <div class="cursor-pointer w-[35px] h-[35px] relative">
          <img class="w-full h-full" @click.stop="clicked = true" v-if="!clicked" src="assets/svg/modifire-one.svg"
               alt="">
          <img class="w-full h-full" v-if="clicked" src="assets/svg/modifier-two.svg" alt="">

          <div v-if="clicked"
               @click.stop="clicked = true"
               class="absolute top-[120%] right-0 border overflow-hidden  bg-white rounded-[10px] w-[155px] h-fit min-h-[50px]">

            <div class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex justify-center items-center ">
              <p class="font-14px">Activer/Desactiver</p>
            </div>

            <div class=" w-full h-[50px]  hover:bg-[#EDEDED] flex justify-center items-center ">
              <p class="font-14px">Supprimer</p>
            </div>

          </div>


        </div>


      </div>

    </div>

    <div class="flex-1 flex flex-col justify-between">

      <div>
        <div class="flex items-center justify-between ">
          <div class="flex items-center gap-5">
            <div v-if="placeImage" class="relative">
              <div
                  class="w-[3.5rem] h-[3.5rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
                <img :src="placeImage" alt="Edit Icon"/>
              </div>
              <div class="absolute top-[0px] right-[-2px]">
                <img src="@/assets/svg/verified-icon.svg" alt="Edit Icon"/>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <div class="font-18px font-semibold">{{ title }}</div>
              <div class="flex items-center gap-2 mt-2">
                <img src="@/assets/svg/small-location.svg" alt="Edit Icon"/>
                <span class="font-normal font-14px">{{ location }}</span>
              </div>
            </div>
          </div>
          <div class="hiddenLgFlex flex-row gap-[10px]">
            <div class="category-box font-normal text-[13px] bg-[#E7F7E8] text-[#13AC1E]">
              <span class="font-normal">{{ status }}</span>
            </div>

            <div class="cursor-pointer w-[35px] h-[35px] relative">
              <img class="w-full h-full" @click.stop="clicked = true" v-if="!clicked" src="assets/svg/modifire-one.svg"
                   alt="">
              <img class="w-full h-full" v-if="clicked" src="assets/svg/modifier-two.svg" alt="">

              <div v-if="clicked"
                   @click.stop="clicked = true"
                   class="absolute top-[120%] right-0 border overflow-hidden  bg-white rounded-[10px] w-[155px] h-fit min-h-[50px]">

                <div class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex justify-center items-center ">
                  <p class="font-14px">Activer/Desactiver</p>
                </div>

                <div class=" w-full h-[50px]  hover:bg-[#EDEDED] flex justify-center items-center ">
                  <p class="font-14px">Supprimer</p>
                </div>

              </div>


            </div>

          </div>


        </div>

      </div>

      <div v-if="layout === 1"
           class="flex flex-col lg:flex-wrap md:grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-5 mt-2">
        <div class="flex items-center">
          <div class="font-semibold font-14px non-active-icon text-center text-white">
            <img src="@/assets/svg/small-people.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal text-[12px] pl-1">{{ minPersons }} pers. min</span>
          <div class="pl-2">
            <div class="tooltip">
              <img src="@/assets/svg/question-icon.svg" alt="Icon" class="mt-2px"/>
              <span class="tooltiptext2 font-normal text-[12px]">
                  Patageable si incomplets
                </span>
            </div>
          </div>
        </div>

        <div class="flex flex-row h-fit gap-5">
          <div class="category-boxx font-normal text-[12px] bg-[#DEF1F4] text-black">
            <span>{{ interested }} intéressés</span>
          </div>

          <div class="category-boxx font-normal text-[12px] bg-[#F8F0DE] text-black">
            <span>{{ reservations }} réservations à compléter</span>
          </div>
        </div>

      </div>

      <div v-if="layout === 2" class="flex items-center gap-5 mt-2">
        <div class="flex items-center">
          <div class="font-semibold font-14px non-active-icon text-center text-white">
            <img src="@/assets/svg/small-calender-colored.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal text-[13px] pl-1">{{ date }}</span>
        </div>
        <div class="flex items-center">
          <div class="font-semibold font-14px non-active-icon text-center text-white">
            <img src="@/assets/svg/small-clock.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal text-[13px] pl-1">{{ time }}</span>
        </div>
        <div class="flex items-center">
          <div class="font-semibold font-14px non-active-icon text-center text-white">
            <img src="@/assets/svg/small-timer.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal text-[13px] pl-1">{{ timer }} minutes</span>
        </div>
      </div>

      <div v-if="layout === 2" class="flex items-center gap-3 mt-2">
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span class="font-normal">{{ gender }}</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
          <span class="font-normal">{{ level }}</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#FDEBEC] text-[#FF0000]">
          <span class="font-normal">{{ from }} Places restantes / {{ to }}</span>
        </div>
      </div>

    </div>

  </div>


</template>

<script setup>


const clicked = ref(false)

function resetCliked() {
  clicked.value = false
}

const props = defineProps({
  image: String || {},
  profileImage: String,
  organizer: String,
  title: String,
  location: String,
  gender: String,
  level: String,
  date: String,
  time: String,
  timer: String,
  seatsLeft: Number,
  totalSeats: Number,
  status: String,
  layout: {
    type: Number,
    default: 1
  },
  placeImage: String,
  myCard: {
    type: Boolean,
    default: false
  },
  discount: String
})
</script>

<style scoped>

</style>
  