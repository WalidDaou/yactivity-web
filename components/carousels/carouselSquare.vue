<template>
  <div class="cursor-pointer w-full rounded-[10px]">
    <div class="relative w-full rounded-[10px]">

      <div ref="carouselTwo" id="" class="joint-carousel flex flex-row w-full">
        <div class="item  f-carousel__slide max-h-[280px]" v-for="(image, index) in images" :key="index">
          <!--          <ImageComponent :url="image" fit="cover" ratio="5-2" :overlay="true" alt="Image Alt Text"/>-->
          <div class="w-full h-fit relative">
            <img class="w-full h-full object-cover" :src="image" alt="">
            <div class="absolute top-0 left-0  w-full h-full bg-black opacity-20 "></div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {onMounted, ref, watch} from 'vue'
import ImageComponent from '../ImageComponent.vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },

})


const carouselTwo = ref(null);

let carouselInstance = null;

const Carousel = useNuxtApp().$carousel;


const initializeCarousel = (Carousel) => {
  if (carouselTwo.value) {
    // const Carousel = useNuxtApp().$carousel;


    carouselInstance = new Carousel(carouselTwo.value, {
      // carouselInstance = new (useNuxtApp().$carousel)(carousel.value, {
      infinite: true,
      slidesPerPage: 1,
      autoplay: {delay: 5000},
      dots: true,
      on: {
        ready: (carouselTwo) => {
          console.log('Carousel is ready', carouselTwo);
        },
      },
    });


  }
};


// onMounted(() => {
//   // Declare the watcher variable
//   let stopWatcher = null;
//
//   // Assign the watcher to stopWatcher
//   stopWatcher = watch(
//       () => ({ container: carouselTwo.value, Carousel: useNuxtApp().$carousel }),
//       ({ container, Carousel }) => {
//         if (container && Carousel) {
//           initializeCarousel();
//           if (stopWatcher) stopWatcher(); // Call stopWatcher to clean up
//         }
//       },
//       { immediate: true }
//   );
// });


// const initializeCarousel = () => {
//   if (carouselTwo.value && props.images.length > 0) {
//
//     const Carousel = useNuxtApp().$carousel;
//
//     if (Carousel) {
//       carouselInstance = new Carousel(carouselTwo.value, {
//
//         infinite: true,
//         slidesPerPage: 1,
//         autoplay: {delay: 5000},
//         dots: true,
//         on: {
//           ready: (carouselTwo) => {
//             console.log('Carousel is ready', carouselTwo);
//           },
//         },
//       });
//       console.log('FancyApps Carousel initialized:', carouselInstance);
//     }
//   }
// };


onMounted(() => {


  watchEffect(() => {

    const container = carouselTwo.value;
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



</script>

<style scoped>
#new-carousel-1 .item img {
  display: block;
  width: 100%;
  height: auto;
}

/* .owl-nav .owl-prev,
.owl-nav .owl-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 50%;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
} */
/* .owl-nav .owl-prev {
  left: -25px;
}
.owl-nav .owl-next {
  right: -25px;
} */
</style>
