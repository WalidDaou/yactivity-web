<template>
  <div @click.stop="handleClick"
       class="border relative bg-white items-center rounded-[10px] flex flex-row gap-4 w-full h-full pl-[10px]">
    <img :src="icon" alt="Icon" class="cursor-pointer w-[15px] "/>
    <div class="flex font-normal font-14px opacity-[0.4]">{{ placeholder }}</div>

    <input
        type="date" class="cursor-pointer w-full h-full top-0 left-0 hidden">

    <!--    <div :class="filter === store.filterNumber ? 'opacity-1 header-tabs z-[100]' : 'opacity-0' "-->
    <!--         @click="resetFilter"-->
    <!--         class="absolute top-[-5%] left-[-3%] w-[105%] h-[110%] bg-[white] rounded-[10px] flex flex-row gap-5 items-center cursor-pointer pr-14">-->
    <!--      <img :src="icon" alt="Icon" class="cursor-pointer ml-[10px]"/>-->
    <!--      <div class="flex font-normal font-14px opacity-[0.4]">{{ placeholder }}</div>-->
    <!--      <input @click.stop="handleClick"-->
    <!--             type="text" class="cursor-pointer absolute w-full h-full top-0 left-0 opacity-0">-->
    <!--    </div>-->

    <!--    <div class="absolute top-0 right-0 h-[60%] mt-[8px] w-[1px] bg-[black] opacity-[0.15]">-->
    <!--    </div>-->


  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';
import {useStore} from "~/stores/index.js";

const store = useStore()

const props = defineProps({
  filter: Number,
  placeholder: String,
  icon: String
});

// const emit = defineEmits(['updateFilter']);
const useFilter = props.filter

function handleClick() {
  if (store.filterNumber === useFilter) {
    store.setFilterNumber(0)
  } else {
    store.setFilterNumber(useFilter)
  }
  console.log(useFilter)
  // emit('updateFilter', true);
}

function resetFilter() {
  store.setFilterNumber(0)
  // emit('updateFilter', false);

}

onMounted(() => {
  document.addEventListener('click', resetFilter);
});


onBeforeUnmount(() => {
  document.removeEventListener('click', resetFilter);
});

</script>

<style scoped>
</style>
