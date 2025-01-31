<template>


  <!--  <div class="h-[80px]">-->

  <!--  </div>-->

  <div class="pb-[35px]">


    <HomeBanner/>

    <div class="mt-[-280px] main-container font-normal font-18px text-center py-3 text-white text-home">
      Zéro frais supplémentaires et parfois moins cher que sur place !
    </div>
    <Title title="Explorez les principales catégories"/>


    <div class="w-full forPr">

      <div
          class="main-container grid grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]   justify-between pb-5 lg:gap-5 gap-5">
        <CategoryCard title="Gastronomie" :icon="food" :backgroundImage="foodBg"/>
        <CategoryCard title="Sports" :icon="sport" :backgroundImage="foodBg"/>
        <CategoryCard title="Sorties festives" :icon="music" :backgroundImage="foodBg"/>
        <CategoryCard title="Art & Culture" :icon="art" :backgroundImage="foodBg"/>
        <CategoryCard title="Jeux Divers" :icon="diver" :backgroundImage="foodBg"/>
        <CategoryCard title="Bien-être" :icon="flower" :backgroundImage="foodBg"/>
      </div>

    </div>

    <Title title="Activités autour de moi"/>


    <ActivitiesSection/>

    <PartnerBanner/>


    <Title title="Les amitiés se nouent sur Yactivity"/>


    <div class="font-normal opacity-[0.6] text-center pb-10 main-container">
      Les membres ont utilisé Yactivity pour se faire de nouveaux amis, rencontrer des personnes partageant les
      mêmes idées, consacrer<br> du temps à leurs passe-temps et se connecter avec les locaux autour d'intérêts
      communs.
    </div>

    <div id="amitteeCarousel"
         class="owl-carousel forPr owl-theme flex lg:flex-row flex-col main-container gap-6 main-container pb-10">

      <BlogCard class="item" :logoUrl="Playground" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
                url="#"/>
      <BlogCard class="item" :logoUrl="Playground" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
                url="#"/>
      <BlogCard class="item" :logoUrl="Playground" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
                url="#"/>
      <BlogCard class="item" :logoUrl="Playground" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet."
                url="#"/>

    </div>


  </div>


</template>

<script setup>
import HomeBanner from '~/components/banners/HomeBanner.vue';
import Title from '~/components/titles/default.vue';

import CategoryCard from '../components/cards/CategoryCard.vue'
import profile from '@/assets/images/profilepic.png';

import Homous from '@/assets/images/Homous.png';
import Party from '@/assets/images/party.png';
import Playground from '@/assets/images/playground.png';
import food from '@/assets/svg/food.svg';
import foodBg from '@/assets/images/ybanner1.png';
import sport from '@/assets/svg/sport.svg';
import music from '@/assets/svg/music.svg';
import art from '@/assets/svg/art.svg';
import diver from '@/assets/svg/divers.svg';
import flower from '@/assets/svg/flower.svg';

import PartnerBanner from '../components/banners/PartnerComponent.vue';
import BlogCard from '../components/cards/BlogCard.vue'

import RestaurantCard from '~/components/cards/ActivityCard.vue'
import ActivitiesSection from "~/components/home-page/ActivitiesSection.vue";

onMounted(() => {


  $('#amitteeCarousel').owlCarousel({
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
  });


});
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

.owl-carousel .item img {
  display: block;
  width: fit-content !important;
}
</style>



