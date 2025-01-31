<template>
  <div class="cursor-pointer w-full rounded-[10px]">
    <div class="relative w-full rounded-[10px]">
      <div ref="carouselTwo" id="" class="joint-carousel w-full">
        <div class="item f-carousel__slide" v-for="(image, index) in images" :key="index">
          <ImageComponent :url="image" fit="cover" ratio="5-2" :overlay="true" alt="Image Alt Text"/>
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

const initializeCarousel = (Carousel) => {

  if (carouselTwo.value) {

    carouselInstance = new Carousel(carouselTwo.value, {
      infinite: true,
      slidesPerPage: 1,
      autoplay: {delay: 5000},
      dots: true,
      on: {
        ready: (carouselTwo) => {
          console.log('Carousel is ready ', carouselTwo);
          stopInterval.value = true
        },
      },
    });

  }

};


// const initializeCarousel = () => {
//   if (carouselTwo.value && props.images.length > 0) {
//     const Carousel = useNuxtApp().$carousel;
//
//     if (Carousel) {
//       // Use carouselTwo.value consistently
//       carouselInstance = new Carousel(carouselTwo.value, {
//         infinite: true,
//         slidesPerPage: 1,
//         autoplay: { delay: 5000 },
//         dots: true,
//         on: {
//           ready: (carouselTwo) => {
//             console.log('Carousel is ready', carouselTwo);
//           },
//         },
//       });
//
//       console.log('FancyApps Carousel initialized:', carouselInstance);
//     }
//   }
// };

// watch(
//     () => props.images,
//     (newImages) => {
//       if (newImages.length > 0) {
//         initializeCarousel();
//       }
//     },
//     {immediate: true} // Trigger immediately in case images are already loaded
// );

// onMounted(() => {
//   if (props.images.length > 0) {
//     initializeCarousel();
//   }
// });

const stopInterval = ref(false);

onMounted(() => {

  const interval = setInterval(() => {
    if (stopInterval.value) {
      clearInterval(interval);
      return;
    }

    watchEffect(() => {
      const container = carouselTwo.value;
      const Carousel = useNuxtApp().$carousel;

      console.log('initialization');

      if (container && Carousel) {
        initializeCarousel(Carousel);
      }
    });
  }, 20);


  onUnmounted(() => {
    clearInterval(interval);
  });

});


watch(props.images, () => {

  const Carousel = useNuxtApp().$carousel;

  if (carouselInstance) {
    carouselInstance.destroy();
  }
  initializeCarousel(Carousel);
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
