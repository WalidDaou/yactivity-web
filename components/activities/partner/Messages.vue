<template>

  <div class="w-full h-fit relative">

    <div class="w-full h-[450px] flex flex-col gap-[15px]  "
         :class="voireTous ? 'overflow-scroll' : 'overflow-hidden' "
         ref="refer"
    >


      <div v-for="(message, index) in messages" :key="index"

           class="py-[10px] bg-[#F7F7F7] w-full md:w-[70%] px-4 border max-h-none min-h-none  border-[#00000026] text-left rounded-[10px] flex flex-col gap-4 "
           :class="[ message.role === 'user'   ? 'ml-auto' : '']">

        <div class="flex flex-row justify-between items-center w-full h-fit">

          <div class="flex flex-row gap-4 items-center h-fit">

            <div class="w-[2.5rem] h-[2.5rem] relative bg-[#DBDBDB] rounded-full flex items-center justify-center">


              <ImageComponent :url="message?.image" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text"
                              class="profile-pic"/>

              <img v-if="message?.role === 'owner'" src="assets/svg/verified-owner.svg"
                   class="absolute top-0 right-0 w-fit h-fit" alt="">


            </div>


            <div class="font-normal font-14px">
            <span>
            {{ message?.name }}
            </span>

              <span v-if="message?.role !== 'owner'">
                 - {{ message?.age }} ans
            </span>
            </div>

          </div>

          <div class="font-normal font-14px">{{ message?.time }}</div>


        </div>

        <div v-if="message?.messageType === 'error'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
             class="w-full flex flex-row  gap-[10px]">
          <div v-if="message?.role === 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/refus-owner.svg" alt="">
          </div>
          <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/error-user.svg" alt="">
          </div>

          <p class="font-14px text-[red]">{{ message?.message }}</p>

        </div>

        <div v-if="message?.messageType === 'creation'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
             class="w-full flex flex-row  gap-[10px]">
          <div v-if="message?.role === 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/creation-admin.svg" alt="">
          </div>
          <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/creation-admin.svg" alt="">
          </div>
          <p class="font-14px text-blue-700">{{ message?.message }}</p>

        </div>

        <div v-if="message?.messageType === 'warning'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
             class="w-full flex flex-row  gap-[10px]">
          <div v-if="message?.role === 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/warning-admin.svg" alt="">
          </div>
          <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/warning-admin.svg" alt="">
          </div>
          <p class="font-14px text-yellow-500">{{ message?.message }}</p>

        </div>

        <div v-if="message?.messageType === 'success'" :class="message?.role === 'owner' ? 'mt-[10px]' : 'mb-[10px]' "
             class="w-full flex flex-row  gap-[10px]">
          <div v-if="message?.role === 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/success-owner.svg" alt="">
          </div>
          <div v-if="message?.role !== 'owner'" class="relative w-fit h-fit">
            <img src="assets/svg/success-owner.svg" alt="">
          </div>
          <p class="font-14px ">{{ message?.message }}</p>

        </div>

        <div v-if="message?.messageType === 'message'">
          <p class="font-14px ">{{ message?.message }}</p>
        </div>

        <p v-if="message?.reason" class="font-14px w-full max-w-[90%]">{{ message.reason }}</p>


        <!--      <p class="py-2 bg-[#F7F7F7] px-4 border-y border-[#00000026] text-left">{{ message?.message }}</p>-->
        <!--      <p class="py-2 bg-[#F7F7F7] px-4 border-y border-r border-[#00000026] text-left rounded-r-[10px]">-->
        <!--        {{ message?.messageType }}-->
        <!--      </p>-->


      </div>


    </div>


    <div v-if="!voireTous"
         @click="voireTous = true"
         class="absolute bottom-0 cursor-pointer left-0 h-[40px] w-full bg-gradient-to-t from-white to-transparent bg-opacity-[0.8]">
      <p class="text-center font-18px underline  font-color">
        Voir tous les messages
      </p>
    </div>


  </div>
  <div class="pt-[30px]">
    <MessageInput v-model="data" type="text" placeholder="Saisissez ici votre message " :icon="sendIcon"/>
  </div>


</template>
<script setup>
import {ref} from 'vue';
import MessageInput from "~/components/inputs/MessageInput.vue";

import searchIcon from "assets/svg/search.svg";
import sendIcon from "assets/svg/send-icon.svg";

const messages = [
  {
    name: "Complexe Stadio Pizzeria",
    age: 2023,
    message: "Refus de la demande de réservation",
    messageType: "error",
    who: "me",
    image: "/images/profilepic.png",
    time: "Hier à 09:14",
    role: "owner",
    reason: "Raison: Fermeture exceptionnelle ce jour (oublié de fermer en ligne désolé les gars.. à la prochaine j’espère !"
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
    messageType: "success", // For accepted reservations
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 14:00", // Time field added
    role: "owner",
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
    messageType: "message", // For errors
    who: "others",
    image: "/images/profilepic.png",
    time: "Aujourd'hui à 13:00", // Time field added
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

const voireTous = ref(false);
const refer = ref(null)
const data = ref('data');

watch(voireTous, (newV, old) => {
  if (newV) {
    // refer.value.scrollTo(0, refer.value.scrollHeight);
    refer.value.scrollTo({
      top: refer.value.scrollHeight,
      behavior: 'smooth'
    });
  }

});

</script>

<style>
.bg-beige {
  background-color: #f3e1d6;
}
</style>
