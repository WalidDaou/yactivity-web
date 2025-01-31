<template>
  <div class="font-semibold font-20px pb-5">Mes réservations</div>


  <TabsComponent :tabs="tabs"/>


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

  </div>

</template>


<script setup>


import defaultImage2 from "assets/images/favorite2.png";
import profile from "assets/images/profilepic.png";
import ActivitiesCard from "~/components/cards/profile/AcitvitieCard.vue";
import TabsComponent from '../../../components/activities/TabsComponent.vue';
import ReserveDate from "~/components/activities/ReserveDate.vue";
import JoinReservation from "~/components/activities/JoinReservation.vue";
import PassedReservations from "~/components/activities/partner/PassedReservations.vue";
import FutureReservations from "~/components/activities/partner/FutureReservations.vue";

const tabs = [
  {label: 'Réservations passées', component: PassedReservations},
  {label: `Réservations à venir`, component: FutureReservations}
]
definePageMeta({
  layout: "dashboard-default"
})

</script>