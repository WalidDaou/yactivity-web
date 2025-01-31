<template>
  <div class="font-semibold font-20px pb-5">Mes alertes créées</div>

  <div class="flex flex-col gap-4 pb-56">

<!--    <ActivitiesCard-->
<!--        :image='defaultImage2'-->
<!--        :profileImage='profile'-->
<!--        organizer="Johnny Doe"-->
<!--        title="Foot salle 5 x 5"-->
<!--        location="Complexe Stadio Pizzeria"-->
<!--        date="Jan 10, 2024"-->
<!--        time="13:00"-->
<!--        timer="90"-->
<!--        :seatsLeft="5"-->
<!--        :totalSeats="10"-->
<!--        gender="Masculin"-->
<!--        level="Expert"-->
<!--        status="Activée"-->
<!--    />-->

    <div v-for="(item, index) in favorites" :key="'desktop-' + index">
      <EventCard
          :myCard="true"
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
      />
    </div>

  </div>

</template>


<script setup>


import defaultImage2 from "assets/images/favorite2.png";
import profile from "assets/images/profilepic.png";
import ActivitiesCard from "~/components/cards/profile/AcitvitieCard.vue";
import EventCard from "~/components/cards/alerts/defaultThree.vue";
import defaultImage from "assets/images/favorite.png";
import PlaceImage from "assets/svg/building.svg";

definePageMeta({
  layout: "dashboard-default"
})


const favorites = [

  {
    image: defaultImage2,
    profile: profile,
    organizer: "Johnny Doe",
    title: "Foot salle 5 x 5",
    location: "Complexe Stadio Pizzeria",
    date: "Jan 10, 2024",
    time: "13:00",
    timer: 90,
    seatsLeft: 5,
    totalSeats: 10,
    gender: "Masculin",
    level: "Expert",
    status: "Activée",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    layout: 2,
    from: 5,
    to: 10,
    placeImage: '',

  },
  {
    image: defaultImage,
    profile: '',
    organizer: "Johnny Doe",
    title: "Foot salle 5 x 5",
    location: "Complexe Stadio Pizzeria",
    date: "Jan 10, 2024",
    time: "13:00",
    timer: 90,
    seatsLeft: 5,
    totalSeats: 10,
    gender: "Masculin",
    level: "Expert",
    status: "Activée",
    minPersons: 10,
    interested: 60,
    reservations: 7,
    discount: 20,
    layout: 1,
    from: 5,
    to: 10,
    placeImage: PlaceImage,
  }
];

</script>