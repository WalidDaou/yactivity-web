<template>
  <NuxtLink :to="url" class="activity-content flex flex-col gap-3 lg:pb-20 pb-5 to-round">
    <ImageComponent classes="hidden md:block" :url="logoUrl" fit="cover" ratio="2-1" :overlay="false"
                    alt="Image Alt Text"/>
    <ImageComponent classes="block md:hidden" :url="logoUrl" fit="cover" ratio="4-2" :overlay="false"
                    alt="Image Alt Text"/>

    <div class="font-semibold text-[16px]">{{ title }}</div>
    <div class="font-normal text-[13.5px] opacity-60">{{ description }}</div>
    <div class="text-[#EE8436] font-semibold uppercase text-[15px] pt-3">Read More</div>
  </NuxtLink>
</template>

<script>
import ImageComponent from '../ImageComponent.vue';

export default {
  name: 'BlogCard',
  components: {
    ImageComponent,
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    },
    logoUrl: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      required: true,
      default: '#'
    }
  }
}
</script>

<style scoped>



</style>
