<template>
    <div class="text-center justify-center items-center partner mt-10 relative main-container ">


<!--      <ImageComponent classes="hidden md:block rounded-[10px]" :url="logoUrl" fit="cover" ratio="4-1" :overlay="false" alt="Image Alt Text" />-->
<!--      <ImageComponent classes="block md:hidden rounded-[10px]" :url="logoUrl" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text" />-->
<!--      <ImageComponent classes="block sm:hidden rounded-[10px]" :url="logoUrl" fit="cover" ratio="1-2" :overlay="false" alt="Image Alt Text" />-->

      <img :src="logoUrl" class="w-full h-[420px] object-cover rounded-[10px]" alt="">


      <div class="flex flex-col gap-7 absolute top-0 left-0 w-full h-full items-center pb-[20px]  pt-[60px] px-10 rounded-[10px]">
            <div class="font-semibold text-white font-25px">Êtes-vous un prestataire d’activités de loisir?</div>
            <div class="font-normal text-white flex justify-center  font-14px text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut <br>labore et
                dolore magna aliqua. Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus<br> laoreet. Mauris
                vitae ultricies leo integer malesuada. Ac odio tempor orci dapibus ultrices in.</div>

            <div class="mt-10">
                <NuxtLink to="/devenir-dartenaire" class="partner-btn px-2 lg:px-10 py-5 font-medium font-16px uppercase text-white">
                    POURQUOI DEVENIR PARTENAIRE
                </NuxtLink> 
            </div>
        </div>


    </div>
</template>
    
<script>
import ImageComponent from '../ImageComponent.vue';

import logoUrl from '@/assets/images/partner.png';
export default {
    components: {
        ImageComponent,

    },
    data() {
        return {
            logoUrl,
        }
    }
}
</script>