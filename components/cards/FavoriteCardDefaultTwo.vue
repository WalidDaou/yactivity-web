<template>
    <NuxtLink :to="link"
        class="restaurant-card items-center border rounded-[10px] shadow-md overflow-hidden flex pl-2 py-2 hover:bg-[#F7F7F7] cursor-pointer gap-5 ">
        <div class="w-35 img-activity">
            <ImageComponent :url="image" fit="cover" ratio="5-3" :overlay="true" alt="Image Alt Text" class="w-1/3" />
        </div>
        <div class="p-4 flex flex-col justify-between w-2/3">
            <div>
                <div class="flex items-center justify-between">
                    <div class="flex gap-3">
                        <span class="category-box font-normal font-14px"> <img src="@/assets/svg/small-sport.svg"
                                alt="Edit Icon" />&nbsp;{{ category
                                }}</span>

                        <span class="category-box2 font-normal font-14px bg-[#06BCD4] text-white gap-2">
                            <img :src="profile" alt="Profile Image" class="w-8 h-8 rounded-full object-cover">
                            <div class="14px font-normal">{{ partner }}</div>
                        </span>
                    </div>
                    <div class="font-semibold font-14px active-icon text-center text-white">
                        <img src="@/assets/svg/small-heart.svg" alt="Edit Icon" />
                    </div>
                </div>
                <h2 class="font-18px font-semibold pt-2">{{ title }}</h2>
                <div class="flex flex-row justify-between w-100">
                    <div class="font-14px font-normal pt-1 w-50">
                        À partir de <span class="text-[#EE8436] font-semibold font-18px">{{ price }} /personne</span>
                    </div>
                    <div class="w-50 pl-16">
                        <div class="font-semibold text-white bg-[#E30000] w-17 px-1">-{{ discount }}%</div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-5 mt-2">
                <div class="flex items-center">
                    <div class="font-semibold font-14px non-active-icon text-center text-white">
                        <img src="@/assets/svg/small-calender-colored.svg" alt="Edit Icon" />
                    </div>
                    <span class="font-normal text-[13px] pl-1">{{ date }}</span>
                </div>
                <div class="flex items-center">
                    <div class="font-semibold font-14px non-active-icon text-center text-white">
                        <img src="@/assets/svg/small-clock.svg" alt="Edit Icon" />
                    </div>
                    <span class="font-normal text-[13px] pl-1">{{ time }}</span>
                </div>
                <div class="flex items-center">
                    <div class="font-semibold font-14px non-active-icon text-center text-white">
                        <img src="@/assets/svg/small-timer.svg" alt="Edit Icon" />
                    </div>
                    <span class="font-normal text-[13px] pl-1">{{ timer }} minutes</span>
                </div>
            </div>

            <div class="flex items-center gap-3 mt-2">
                <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
                    <span class="font-normal">{{ gender }}</span>
                </div>
                <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
                    <span class="font-normal">{{ level }}</span>
                </div>
                <div class="category-box font-normal text-[13px] bg-[#FDEBEC] text-[#FF0000]">
                    <span class="font-normal">{{ from }} Places restantes / {{ to }}</span>
                </div>
            </div>


        </div>
    </NuxtLink>
</template>
  
<script setup>
import ImageComponent from '../ImageComponent.vue';
const props = defineProps({
    link: {
        type: String,
        default: '#',
    },
    profile: String,
    image: String,
    category: String,
    discount: String,
    partner: String,
    title: String,
    city: String,
    price: String,
    location: String,
    date: String,
    time: String,
    timer: String,
    gender: String,
    level: String,
    from: String,
    to: String,
    interested: Number,
    reservations: Number,
})
</script>
  
<style scoped>
.restaurant-card {
    transition: background-color 0.2s ease;
}
</style>
  