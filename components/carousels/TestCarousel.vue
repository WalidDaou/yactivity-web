<template>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.green.min.css" />
  </head>
  <div class="story_carousel">
    <div class="owl-carousel owl-theme">
      <div class="card_carousel" >
        <ImageComponent :url="logoUrl" fit="cover" ratio="4-1" :overlay="true" alt="Image Alt Text" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageComponent from '../ImageComponent.vue';
import logoUrl from '@/assets/images/ybanner1.png';
export default {
  data() {
    return {

    };
  },

};
</script>
