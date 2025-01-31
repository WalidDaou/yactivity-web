<template>
  <div class="main-container">
    <div class="font-semibold text-[25px] text-center pt-14 pb-12">
      Notifications
    </div>
    <div class="notifications gap-4 flex flex-col items-center pb-[40px]">

      <div class="w-full" v-for="(item , index) in notifications">
        <NotificationsCard :message="item"/>
      </div>

    </div>
  </div>
</template>

<script setup>

import NotificationsCard from "~/components/cards/NotificationsCard.vue";

const notifications = [

  {
    name: "Complexe Stadio Pizzeria",
    age: 2023,
    message: "Refus de la demande de réservation",
    messageType: "error",
    who: "me",
    image: "/images/profilepic.png",
    time: "Hier à 09:14",
    role: "owner",
    reason: "Raison: Fermeture exceptionnelle ce jour (oublié de fermer en ligne désolé les gars.. à la prochaine j’espère !",
    discount : 20
  },
  {
    name: "Bob",
    age: 2024,
    message: "Your subscription will expire soon.",
    messageType: "warning", // For warnings
    who: "others",
    image: "/images/profilepic.png",
    time: "Hier à 10:30",
    role: "admin",
  },
  {
    name: "Bob",
    age: 2025,
    message: "A new feature has been added to your dashboard.",
    messageType: "creation", // For general creationrmation
    who: "others",
    image: "/images/profilepic.png",
    time: "Hier à 08:00", // Time field added
    role: "admin",
  },
  {
    name: "Julia",
    age: 2024,
    message: "Acceptation de la demande de réservation: Your reservation has been accepted!",
    messageType: "message", // For accepted reservations
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 14:00", // Time field added
    role: "owner",
    discount : 20
  },
  {
    name: "Charlie",
    age: 2023,
    message: "Payment successful! Thank you.",
    messageType: "success", // For successful actions
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 12:45", // Time field added
    role: "user",
  },
  {
    name: "Diana",
    age: 2024,
    message: "Failed to update your profile.",
    messageType: "message",
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 13:00",
    role: "user",
  },

  {
    name: "Frank",
    age: 2023,
    message: "Please verify your email to continue.",
    messageType: "warning", // For warnings
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 09:45", // Time field added
    role: "user",
  },
  {
    name: "George",
    age: 2023,
    message: "Refus de la demande de réservation: Unfortunately, your request was declined.",
    messageType: "error", // For rejections
    who: "others",
    image: "/images/profilepic.png",
    time: "Hier à 11:00", // Time field added
    role: "user",
  },
  {
    name: "Hannah",
    age: 2024,
    message: "Nouvelle inscription: Welcome aboard, you are now registered!",
    messageType: "creation", // For new registrations
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 10:00", // Time field added
    role: "user",
  },
  {
    name: "Isaac",
    age: 2023,
    message: "Désistement: Your cancellation request has been processed.",
    messageType: "warning", // For cancellations
    who: "others",
    image: "/images/profilepic.png",
    time: "Hier à 16:30", // Time field added
    role: "user",
  },

  {
    name: "Kevin",
    age: 2023,
    message: "Annulation de la réservation: Your reservation has been cancelled.",
    messageType: "error",
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 15:45", // Time field added
    role: "user",
  },
  {
    name: "Laura",
    age: 2025,
    message: "Création de la réservation: Your reservation has been successfully created.",
    messageType: "success", // For new reservations
    who: "others",
    image: "/images/profilepic.png",
    time: "Hier à 17:30", // Time field added
    role: "user",
  },
];

</script>

<style lang="scss" scoped>

</style>