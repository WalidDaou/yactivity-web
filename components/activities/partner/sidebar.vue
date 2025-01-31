<template>
    <div class="">
        <div class="flex items-center gap-7 p-2 img-join relative">
            <ImageComponent :url="Playground" fit="cover" ratio="5-2" :overlay="true" alt="Image Alt Text" />
            <div v-if="currentStep == 1" class="absolute top-3 left-5 flex space-x-2 z-50 pt-2">
                <img src="@/assets/svg/left-arrow.svg" alt="Edit Icon" />
            </div>
            <span class="absolute bottom-4 left-profile category-box2 font-normal font-14px bg-[#06BCD4] text-white gap-2">
                <img :src="profileImage" alt="Profile Image" class="w-8 h-8 rounded-full border-imp object-cover">
                <div class="text-[13px] font-normal"> Johnny Doe</div>
            </span>
        </div>
        <div class="flex items-center gap-3 p-2 px-5 pt-3 pb-4">
            <div class="relative">
                <div
                    class="w-[3.5rem] h-[3.5rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
                    <img src="@/assets/svg/building.svg" alt="Edit Icon" />
                </div>
                <div class="absolute top-[0px] right-[-2px]">
                    <img src="@/assets/svg/verified-icon.svg" alt="Edit Icon" />
                </div>
            </div>
            <div class="flex flex-col justify-between pt-2 gap-1">
                <div class="font-medium text-[13.5px]  text-black">
                    Complexe Stadio Pizzeria
                </div>
                <div class="font-semibold font-18px">Foot Salle 5 x 5</div>
            </div>
        </div>


    </div>
</template>

<script>
import ImageComponent from '../../ImageComponent.vue'
import Playground from '@/assets/images/playground.png'
import profileImage from '@/assets/images/profilepic.png'
export default {
  components: {
    ImageComponent,    
  },
  props: {
    currentStep: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      Playground,
      profileImage
    }
  }
}
</script>


<style lang="scss" scoped></style>