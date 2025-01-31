<template>
    <div>
        <div class="flex items-center gap-7 p-7 pb-8 border-hr">
            <div class="relative">
                <div class="w-[4.5rem] h-[4.5rem] bg-[#DBDBDB] rounded-full flex items-center justify-center">
                    <ImageComponent :url="Playground" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text"
                        class="profile-pic" />
                </div>
            </div>
            <div class="flex flex-col justify-between gap-3 pt-2">
                <div class="font-normal text-[13.5px]  text-white">
                    <span class="bg-[#06BCD4] px-4 py-[5px] rounded-[18px]">Particulier</span>
                </div>
                <div class="font-semibold font-18px">Johnny Doe - 23 ans</div>
            </div>
        </div>
        <div class="p-7 pt-8">
            <div class="flex flex-row gap-3 items-center">
                <div class="font-semibold font-14px colored-icon text-center text-white">
                    <img src="@/assets/svg/colored-phone.svg" alt="Edit Icon" />
                </div>
                <div>+33 (6) 86 57 90 14</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ImageComponent from '../ImageComponent.vue'
import Playground from '@/assets/images/profilepic.png'
</script>

<style lang="scss" scoped></style>