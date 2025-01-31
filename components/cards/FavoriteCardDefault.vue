<template>


  <NuxtLink :to="link"
            class="restaurant-card items-center border rounded-[10px] shadow-md overflow-hidden flex flex-col  lg:flex-row  pl-2 py-2 hover:bg-[#F7F7F7] cursor-pointer gap-5 ">

    <div class="w-full lg:w-[250px] xl:w-[35%] img-activity">
      <ImageComponent :url="image" fit="cover" ratio="5-3" :overlay="true" alt="Image Alt Text" class="w-1/3"/>
    </div>

    <div class="p-4 flex flex-col justify-between w-full lg:w-[66%]">
      <div>
        <div class="flex items-center justify-between">
          <div class="flex gap-3">

                        <span class="category-box font-normal font-14px">
                          <img src="@/assets/svg/small-food.svg" alt="Edit Icon"/>&nbsp;
                          {{ category }}</span>

            <!--                        <span class="category-box font-normal font-14px bg-[#7CB780] text-white">{{ partner }}</span>-->
            <div class="category-box2  font-normal font-14px bg-[#06BCD4]  text-white gap-2 "
                 :class="!profile ? '!pl-[1rem] !bg-[#7CB780]' : ''">
              <img v-if="profile" :src="profile" alt="Profile Image" class="!w-8 !h-8 rounded-full object-cover">
              <div class="font-14px font-normal text-nowrap">{{ partner }}</div>
            </div>


          </div>


          <div class="font-semibold font-14px active-icon text-center text-white">
            <img src="@/assets/svg/small-heart.svg" alt="Edit Icon"/>
          </div>
        </div>
        <h2 class="font-18px font-semibold pt-2">{{ title }}</h2>
        <div class="flex flex-row justify-between w-100">

          <div class="font-14px font-normal pt-1 w-full">
            À partir de <span class="text-[#EE8436] font-semibold font-18px">{{ price }} /personne</span>
          </div>

          <div class="w-fit ">
            <div class="font-semibold text-white bg-[#E30000] w-[40px] px-1">-{{ discount }}%</div>
          </div>
        </div>
      </div>


      <div class="flex flex-row gap-10 pt-5">
        <div class="flex items-center gap-2">
          <img src="@/assets/svg/small-location.svg" alt="Edit Icon"/>
          <span class="font-normal font-14px">{{ location }}</span>
        </div>
        <div class="flex items-center gap-2">
          <img src="@/assets/svg/small-earth.svg" alt="Edit Icon"/>
          <span class="font-normal font-14px">{{ city }}</span>
        </div>
      </div>


      <div v-if="layout === 1" class="flex flex-wrap items-center gap-5 mt-2">
        <div class="flex items-center">
          <div class="font-semibold font-14px non-active-icon text-center text-white">
            <img src="@/assets/svg/small-people.svg" alt="Edit Icon"/>
          </div>
          <span class="font-normal text-[13px] pl-1">{{ minPersons }} pers. min</span>
          <div class="pl-2 ">
            <div class="tooltip">
              <img src="@/assets/svg/question-icon.svg" alt="Icon" class="mt-2px"/>
              <span class="tooltiptext2 font-normal text-[13px]">
                                Patageable si incomplets
                            </span>
            </div>
          </div>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#DEF1F4] text-black">
          <span>{{ interested }} intéressés</span>
        </div>
        <div class="category-box font-normal text-[13px] bg-[#F8F0DE] text-black">
          <span>{{ reservations }} réservations à compléter</span>
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


  </NuxtLink>
</template>

<script setup>
import ImageComponent from '../ImageComponent.vue';

const props = defineProps({
  link: {
    type: String,
    default: '#',
  },
  image: String,
  category: String,
  discount: String,
  partner: String,
  title: String,
  city: String,
  price: String,
  location: String,
  minPersons: Number,
  interested: Number,
  reservations: Number,
  profile: String,
  date: String,
  time: String,
  timer: String,
  gender: String,
  level: String,
  from: String,
  to: String,
  layout: {
    type: Number,
    default: 1
  },


})
</script>

<style scoped>
.restaurant-card {
  transition: background-color 0.2s ease;
}
</style>
  