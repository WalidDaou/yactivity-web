<template>
  <div>
    <div
        v-for="(item, index) in items"
        :key="index"
        class="border rounded-lg shadow-md  flex p-2 hover:bg-[#F7F7F7] cursor-pointer gap-9"
    >
      <div class="w-[30%] img-activity relative">
        <ImageComponent :url="item.image" fit="cover" ratio="5-3" :overlay="true" alt="Image Alt Text" class="w-1/3"/>
        <span v-if="item.organizer !== 'Organizer 1'"
              class="absolute bottom-2 left-2 category-box2 font-normal font-14px bg-[#06BCD4] text-white gap-2">
          <img :src="item.profileImage" alt="Profile Image" class="w-8 h-8 rounded-full object-cover">
          <div class="text-[13px] font-normal">{{ item.organizer }}</div>
        </span>
      </div>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-5">
              <div v-if="item.activityType !== 'user'" class="relative">
                <div
                     class="w-[3.5rem] h-[3.5rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
                  <img src="@/assets/svg/building.svg" alt="Edit Icon"/>
                </div>
                <div class="absolute top-[0px] right-[-2px]">
                  <img src="@/assets/svg/verified-icon.svg" alt="Edit Icon"/>
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div class="font-18px font-semibold">{{ item.title }}</div>
                <div class="flex items-center gap-2 mt-2">
                  <img src="@/assets/svg/small-location.svg" alt="Edit Icon"/>
                  <span class="font-normal font-14px">{{ item.location }}</span>
                </div>
              </div>
            </div>

            <div class="flex flex-row gap-[10px]">
              <div class="category-box font-normal text-[13px] bg-[#E7F7E8] text-[#13AC1E]">
                <span class="font-normal">{{ item.status }}</span>
              </div>
              <div v-if="item.organizer === 'Organizer 1'">
                <AdminButton v-model:clicked="clicked"/>
              </div>
            </div>
          </div>


        </div>
        <div class="flex items-center gap-5 mt-2">
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-calender-colored.svg" alt="Edit Icon"/>
            </div>
            <span class="font-normal text-[13px] pl-1">{{ item.date }}</span>
          </div>
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-clock.svg" alt="Edit Icon"/>
            </div>
            <span class="font-normal text-[13px] pl-1">{{ item.time }}</span>
          </div>
          <div class="flex items-center">
            <div class="font-semibold font-14px non-active-icon text-center text-white">
              <img src="@/assets/svg/small-timer.svg" alt="Edit Icon"/>
            </div>
            <span class="font-normal text-[13px] pl-1">{{ item.timer }} minutes</span>
          </div>
        </div>
        <div class="flex items-center gap-3 pt-[20px] mb-5">
          <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
            <span class="font-normal">{{ item.gender }}</span>
          </div>
          <div class="category-box font-normal text-[13px] bg-[#FDF2EB] text-black">
            <span class="font-normal">{{ item.level }}</span>
          </div>
          <div class="category-box font-normal text-[13px] bg-[#FDEBEC] text-[#FF0000]">
            <span class="font-normal">{{ item.seatsLeft }} Places restantes / {{ item.totalSeats }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdminButton from "~/components/profile/AdminButton.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const clicked = ref(false);

</script>

<style scoped>
/* Add your styles here */
</style>
