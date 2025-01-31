<template>
  <div class="cursor-pointer ">
    <div class="relative ">
      <div id="carousel-image-1" class=" carousel-image-1 owl-carousel owl-theme">

        <div class="item item-image" v-for="(image, index) in images" :key="index">
          <div class="w-full">

          <ImageComponent classes="hiddenMdShow rounded-[10px]" :url="image" fit="cover" ratio="5-2" :overlay-second="true"
                          alt="Image Alt Text"/>
          <ImageComponent classes="showMdHidden" :url="image" fit="cover" ratio="2-1" :overlay-second="true"
                          alt="Image Alt Text"/>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'
import ImageComponent from '../ImageComponent.vue';

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },

})

onMounted(() => {

  $('.carousel-image-1').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
})
</script>

<style scoped>

/* .owl-carousel .item-image img {
  display: block;
  width: 100%;
  height: auto;
} */


.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: white !important;
}

.owl-theme .owl-dots .owl-dot span {
  border: 1.5px solid white !important;
  background-color: transparent;
  margin: 5px 5px;
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
  