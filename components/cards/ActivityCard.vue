<template>
  <div class="overflow-hidden act-card cursor-pointer">
    <div class="relative overflow-hidden">


      <div ref="carousel" id="activity-carousel-1" @click.stop class="w-full  overflow-hidden image-carousel-fancy">


        <div
            class="f-carousel__slide"
            v-for="(image, index) in images"
            :key="index"
        >


          <ImageComponent
              :url="image"
              fit="cover"
              ratio="5-3"
              :overlay="true"
              alt="Image Alt Text"
          />


        </div>


      </div>

      <div class="absolute flex flex-wrap h-[30px] top-2 left-2 lg:left-5 gap-2  z-50 pt-2">

        <span class="category-box font-normal  text-nowrap font-14px bg-white">
          <img src="@/assets/svg/small-food.svg" class="!w-5 !h-5" alt="Edit Icon"/>&nbsp;{{ category }}</span>


        <span class="category-box2  font-normal font-14px bg-[#06BCD4]  text-white gap-2 "
              :class="!profile ? '!pl-[1rem] !bg-[#7CB780]' : ''">
          <img v-if="profile" :src="profile" alt="Profile Image" class="!w-8 !h-8 rounded-full object-cover">
          <div class="font-14px font-normal text-nowrap">{{ partner }}</div>

        </span>


      </div>

      <div class="absolute top-4 right-4 flex space-x-2 z-50">
        <button class="bg-white p-2 rounded-full shadow-md">
          <img src="@/assets/svg/small-bell-black.svg" alt="Edit Icon"/>
        </button>
        <button class="bg-white p-2 heart-pt rounded-full shadow-md">
          <img src="@/assets/svg/small-heart-black.svg" alt="Edit Icon"/>
        </button>
      </div>
      <div class="absolute bottom-4 left-2 lg:left-5 flex space-x-2 text-white z-50">

        <img src="@/assets/svg/chair.svg" alt="Edit Icon"/>
        <img src="@/assets/svg/baby.svg" alt="Edit Icon"/>
      </div>
    </div>

    <div class="pt-2 pb-3 px-2 lg:px-4">

      <NuxtLink :to="link">

        <h2 class="font-18px font-semibold pt-2">{{ title }}</h2>


        <div class="flex flex-row justify-between w-100">
          <div class="font-14px font-normal pt-1 ">
            À partir de <span class="text-[#EE8436] font-semibold font-18px">{{ price }} /personne</span>
          </div>
          <div>
            <div class="font-semibold text-white bg-[#E30000] px-1">-{{ discount }}%</div>
          </div>
        </div>


        <div class="flex flex-row gap-10 pt-5">
          <div class="flex items-center gap-2">
            <img src="@/assets/svg/small-location.svg" class="!w-[15px]" alt="Edit Icon"/>
            <span class="font-normal font-14px">{{ location }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img src="@/assets/svg/small-earth.svg" alt="Edit Icon"/>
            <span class="font-normal font-14px">{{ city }}</span>
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

      </NuxtLink>
    </div>


  </div>
</template>


<script setup>
import {ref, watch, onMounted, onUnmounted} from 'vue';


import ImageComponent from '../ImageComponent.vue';

const props = defineProps({
  images: {type: Array, default: () => []},
  category: String,
  link: {type: String, default: '#'},
  profile: String,
  categoryIcon: String,
  partner: String,
  title: String,
  price: String,
  location: String,
  city: String,
  minPersons: Number,
  interested: Number,
  reservations: Number,
  discount: String,
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

});

const carousel = ref(null);

let carouselInstance = null;

// const initializeCarousel = () => {
//   if (carousel.value && props.images.length > 0) {
//
//
//     carouselInstance = new (useNuxtApp().$carousel)(carousel.value, {
//       infinite: true,
//       slidesPerPage: 1,
//       autoplay: {delay: 5000},
//
//       dots: true,
//       on: {
//         ready: (carousel) => {
//           console.log('Carousel is ready', carousel);
//         },
//       },
//     });
//     console.log('FancyApps Carousel initialized:', carouselInstance);
//   }
// };


const initializeCarousel = (Carousel) => {

  if (carousel.value && props.images.length > 0) {

    if (Carousel) {

      carouselInstance = new Carousel(carousel.value, {
        infinite: true,
        slidesPerPage: 1,
        autoplay: {delay: 5000},
        dots: true,
        on: {
          ready: (Carousel) => {
            console.log('Carousel is ready homepage');
          },
        },
      });

    } else {
      console.error('Carousel not loaded properly');
    }

  }
};


onMounted(() => {


  watchEffect(() => {

    const container = carousel.value;
    const Carousel = useNuxtApp().$carousel;

    console.log('change')

    if (container && Carousel) {
      initializeCarousel(Carousel);
    }

  });

});

onUnmounted(() => {

  if (carouselInstance) {
    carouselInstance.destroy();
  }
});


watch(
    () => props.images,
    (newImages) => {
      if (newImages.length > 0) {
        const Carousel = useNuxtApp().$carousel;
        initializeCarousel(Carousel);
      }
    },
    {immediate: true}
);


</script>


<style scoped>
.carousel img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
