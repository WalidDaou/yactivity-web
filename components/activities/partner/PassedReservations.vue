<template>


  <div class="flex flex-col gap-4 pb-56">
    <div v-for="(item, index) in favorites" :key="'desktop-' + index">

      <EventCard
          :myCard="item.myCard"
          :profileImage="item.profile"
          :organizer="item.organizer"
          :title="item.title"
          :location="item.location"
          :date="item.date"
          :time="item.time"
          :timer="item.timer"
          :seatsLeft="item.seatsLeft"
          :totalSeats="item.totalSeats"
          :gender="item.gender"
          :level="item.level"
          :status="item.status"
          :layout="item.layout"
          :placeImage="item.placeImage"
          :image="item.image"
          :discount="item.discount"
      />

    </div>
  </div>

  <!--  <ReservationCard :items="[-->
  <!--    {-->
  <!--  myCard: true,-->
  <!--  profileImage: profile, // Can be overridden dynamically in Vue-->
  <!--  organizer: 'Organizer 1',-->
  <!--  title: 'Event 1',-->
  <!--  location: 'Location 1',-->
  <!--  gender: 'Male',-->
  <!--  level: 'Intermediate',-->
  <!--  date: '2025-01-15',-->
  <!--  time: '10:00 AM',-->
  <!--  timer: '30',-->
  <!--  seatsLeft: 5,-->
  <!--  totalSeats: 20,-->
  <!--  status: 'Open',-->
  <!--  activityType: 'location',-->
  <!--  placeImage: defaultImage , // Vue-bound or replace with a default if needed-->
  <!--  image: defaultImage // Can also be overridden dynamically-->
  <!--}, {-->
  <!--  myCard: false,-->
  <!--  profileImage: profile,-->
  <!--  organizer: 'Organizer 1',-->
  <!--  title: 'Event 1',-->
  <!--  location: 'Location 1',-->
  <!--  gender: 'Male',-->
  <!--  level: 'Intermediate',-->
  <!--  date: '2025-01-15',-->
  <!--  time: '10:00 AM',-->
  <!--  timer: '30',-->
  <!--  seatsLeft: 5,-->
  <!--  totalSeats: 20,-->
  <!--  status: 'Open',-->
  <!--  activityType: 'location',-->
  <!--  placeImage: defaultImage , // Vue-bound or replace with a default if needed-->
  <!--  image: defaultImage // Can also be overridden dynamically-->
  <!--},-->
  <!--  ]-->
  <!--"/>-->


</template>
<script setup lang="ts">
import ReservationCard from "~/components/cards/profile/ReservationCard.vue";
import defaultImage from '@/assets/images/favorite.png';
import defaultImage2 from '@/assets/images/favorite2.png';
import profile from '@/assets/images/profilepic.png';
import EventCard from "~/components/cards/alerts/defaultThree.vue";
import PlaceImage from "assets/svg/building.svg";

const favorites = [

  {
    image: defaultImage2,
    profile: '',
    organizer: "Johnny Doe",
    title: "Foot salle 5 x 5",
    location: "Complexe Stadio Pizzeria",
    date: "Jan 10, 2024",
    time: "13:00",
    timer: "90",
    seatsLeft: 5,
    totalSeats: 10,
    gender: "Masculin",
    level: "Expert",
    status: "Activée",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: "20",
    layout: 2,
    from: 5,
    to: 10,
    placeImage: defaultImage,
    myCard: false

  },
  {
    image: defaultImage,
    profile: defaultImage,
    organizer: "Johnny Doe",
    title: "Foot salle 5 x 5",
    location: "Complexe Stadio Pizzeria",
    date: "Jan 10, 2024",
    time: "13:00",
    timer: "90",
    seatsLeft: 5,
    totalSeats: 10,
    gender: "Masculin",
    level: "Expert",
    status: "Activée",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: "20",
    layout: 1,
    from: 5,
    to: 10,
    placeImage: PlaceImage,
    myCard: false
  }
];


</script>