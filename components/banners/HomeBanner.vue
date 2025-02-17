<template>

  <div class="relative container-center">

    <div class="">

      <div
          class="main-container z-[2] w-full absolute pt-[30px] text-center text-white font-semibold lg:text-[40px] text-[20px]">
        Envie de sortir ou de faire une activité ?<br/>Seul, en groupe ou avec notre communauté ?
      </div>

      <div class="w-full h-[1px]">

      </div>

      <div class="mt-[180px] mb-[300px] main-container forPr">

        <div id="owl-carousel-2" class="owl-carousel flex flex-row walid-carousel-1 owl-theme " ref="owlCarouselTwo">

          <div class="item h-[340px]" v-for="(card, index) in cards" :key="index">
            <CardComponent
                :title="card.title"
                :description="card.description"
                :icon="card.icon"
            />
          </div>

        </div>

      </div>

    </div>

    <div class="absolute  top-0 left-0   w-full sm:h-[80%]">

      <div class="hidden sm:block home-banner">
        <ImageComponent :url="logoUrl" fit="cover" ratio="4-1" :overlay="true" alt="Image Alt Text"/>
      </div>

      <!-- Banner for small screens -->
      <div class="to-hide-mini ">
        <ImageComponent :overlaySecond="true" :url="logoUrl" fit="cover" ratio="2-1" :overlay="false"
                        alt="Image Alt Text"/>
      </div>

      <div class="show-mini">
        <ImageComponent :overlaySecond="true" :url="logoUrl" fit="cover" ratio="1-1" :overlay="false"
                        alt="Image Alt Text"/>
      </div>


    </div>


  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import ImageComponent from '../ImageComponent.vue';
import CardComponent from '../cards/informative-card.vue';

import logoUrl from '@/assets/images/ybanner1.png';
import reserveIcon from '@/assets/svg/reserve.svg';
import rejoinIcon from '@/assets/svg/rejoin.svg';
import publishIcon from '@/assets/svg/publish.svg';

// Define props and data
const cards = [
  {
    title: 'Réservez',
    description: 'Une activité proposée par nos partenaires ou par la communauté',
    icon: reserveIcon,
  },
  {
    title: 'Rejoignez',
    description: 'Une réservation en cours privée ou public (matchs de foot, tennis, etc.)',
    icon: rejoinIcon,
  },
  {
    title: 'Publiez',
    description: 'Votre propre activité à partager avec vos amis ou avec notre communauté',
    icon: publishIcon,
  },
];

// Reference to the carousel element
const owlCarouselTwo = ref(null);

onMounted(async () => {
  // Check if we're running in the client-side environment

  $('#owl-carousel-2').owlCarousel({
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1.05,
      },
      640: {
        items: 1.05,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  })

})
</script>

<style scoped>


.owl-theme .owl-dots .owl-dot.active span,
.owl-theme .owl-dots .owl-dot:hover span {
  background: #e77e22 !important;
}

.owl-theme .owl-dots .owl-dot span {
  border: 1.5px solid white !important;
  background-color: #e77e22;
  margin: 5px 5px;
}

.item img {
  display: block;
  width: auto !important;
}


</style>
