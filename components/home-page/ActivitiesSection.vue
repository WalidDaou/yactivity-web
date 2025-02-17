<template>
  <div class="main-container mx-auto ">
    <!-- Grid for small to medium screens -->
    <div class="hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid gap-6">

      <RestaurantCard

          v-for="(card, index) in cards"
          :key="index"
          :images="card.images"
          :category="card.category"
          :categoryIcon="card.categoryIcon"
          :partner="card.partner"
          :title="card.title"
          :price="card.price"
          :location="card.location"
          :city="card.city"
          :minPersons="card.minPersons"
          :interested="card.interested"
          :reservations="card.reservations"
          :discount="card.discount"
          :link="card.link"
          :profile="card.profile"
          :layout="card.layout"
          :date="card.date"
          :time="card.time"
          :timer="card.timer"
          :gender="card.gender"
          :level="card.level"
          :from="card.from"
          :to="card.to"

      />

    </div>

    <!-- Carousel for large screens -->
    <div class="block md:hidden ">
      <div id="restaurant-carousel"
           class="restaurant-carousel owl-carousel owl-theme flex flex-row overflow-hidden max-h-[550px]"
           ref="restaurantCarousel">
        <div v-for="(card, index) in cards" :key="index" class="item">

          <RestaurantCard class="mb-[40px]"
                          :images="card.images"
                          :category="card.category"
                          :categoryIcon="card.categoryIcon"
                          :partner="card.partner"
                          :title="card.title"
                          :price="card.price"
                          :location="card.location"
                          :city="card.city"
                          :minPersons="card.minPersons"
                          :interested="card.interested"
                          :reservations="card.reservations"
                          :discount="card.discount"
                          :link="card.link"
                          :profile="card.profile"
                          :layout="card.layout"
                          :date="card.date"
                          :time="card.time"
                          :timer="card.timer"
                          :gender="card.gender"
                          :level="card.level"
                          :from="card.from"
                          :to="card.to"
          />
        </div>
      </div>
    </div>

    <div class="mt-5 mb-5 flex justify-center gap-5">

      <NuxtLink
          to="/activities"
          class="default-btn py-4 px-12 font-medium text-[13px] tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]">

        DÉCOUVRIR TOUTES LES ACTIVITÉS

      </NuxtLink>

    </div>

  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

import profile from "@/assets/images/profilepic.png";
import Homous from "@/assets/images/Homous.png";
import Party from "@/assets/images/party.png";
import Playground from "@/assets/images/playground.png";

import RestaurantCard from "~/components/cards/ActivityCard.vue";

// Carousel data
const cards = [
  {
    images: [Homous, Homous, Homous],
    category: "Gastronomie",
    categoryIcon: "path/to/food-icon.svg",
    partner: "Johnny Doe",
    title: "Au Libanais",
    price: "10 €",
    location: "Restaurant Au Libanais",
    city: "Paris",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    link: "/",
    layout: 2,
    date: 'Jan 10, 2024',
    time: '13:00',
    timer: '90 minutes',
    gender: 'Masculin',
    level: 'Expert',
    from: '5',
    to: '10',
    profile : profile
  },
  {
    images: [Playground, Playground, Playground],
    category: "Sports",
    categoryIcon: "path/to/sports-icon.svg",
    partner: "Johnny Doe",
    title: "Foot salle 5 x 5",
    price: "10 €",
    location: "Complexe Stadio Pizzeria",
    city: "Paris",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    link: "/",
    layout: 1 ,
    date: 'Jan 10, 2024',
    time: '13:00',
    timer: '90 minutes',
    gender: 'Masculin',
    level: 'Expert',
    from: '5',
    to: '10',
    profile: ''
  },
  {
    images: [Party, Party, Party],
    category: "Sorties Festives",
    categoryIcon: "path/to/festive-icon.svg",
    partner: "Johnny Doe",
    title: "Soirée festive",
    price: "10 €",
    location: "Complexe Stadio Pizzeria",
    city: "Paris",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    link: "/",
    layout: 1 ,
    date: 'Jan 10, 2024',
    time: '13:00',
    timer: '90 minutes',
    gender: 'Masculin',
    level: 'Expert',
    from: '5',
    to: '10',
    profile: ''
  },
  {
    images: [Party, Party, Party],
    category: "Sorties Festives",
    categoryIcon: "path/to/festive-icon.svg",
    partner: "Johnny Doe",
    title: "Soirée festive",
    price: "10 €",
    location: "Complexe Stadio Pizzeria",
    city: "Paris",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    link: "/",
    layout: 2 ,
    date: 'Jan 10, 2024',
    time: '13:00',
    timer: '90 minutes',
    gender: 'Masculin',
    level: 'Expert',
    from: '5',
    to: '10',
    profile: profile

  },
  {
    images: [Party, Party, Party],
    category: "Sorties Festives",
    categoryIcon: "path/to/festive-icon.svg",
    partner: "Johnny Doe",
    title: "Soirée festive",
    price: "10 €",
    location: "Complexe Stadio Pizzeria",
    city: "Paris",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    link: "/",
    layout: 2 ,
    date: 'Jan 10, 2024',
    time: '13:00',
    timer: '90 minutes',
    gender: 'Masculin',
    level: 'Expert',
    from: '5',
    to: '10',
    profile: profile

  },

];

// Owl Carousel reference
const restaurantCarousel = ref(null);

onMounted(() => {
  $('#restaurant-carousel').owlCarousel({

    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    items: 3,
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {items: 1.05},
      640: {items: 1.05},
      768: {items: 2},
      1024: {items: 3},
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

.restaurant-carousel .owl-carousel .item img {
  display: block;
  width: fit-content !important;
}
</style>
