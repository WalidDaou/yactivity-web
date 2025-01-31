<template>
  <div  @click.stop="handleClick" class="relative bg-white  rounded-[10px] flex flex-row gap-2 w-full h-full pl-[10px]">
    <img :src="icon" alt="Icon" class="cursor-pointer"/>

    <!--        @blur="handleBlur"-->
    <input

        ref="inputField2"
        type="text"
        :placeholder="placeholder"
        class="input-field font-normal font-14px rounded-[10px]"

    />

    <div :class="filter === store.filterNumber? 'opacity-1 header-tabs z-[200]' : 'opacity-0'"

         class="absolute top-[-3%] left-[-1%] bg-white rounded-[10px] flex flex-row gap-2 w-[105%] h-[105%] pl-[10px]">
      <img :src="icon" alt="Icon" class="cursor-pointer"/>
      <!--          @blur="handleBlur"-->

      <input

          ref="inputField2"
          type="text"
          :placeholder="placeholder"
          class="input-field font-normal font-14px rounded-[10px]"

      />
    </div>

    <div  class="absolute top-0 right-0 h-[60%] mt-[8px] w-[1px] bg-[black] opacity-[0.15]">

    </div>

  </div>
</template>

<script setup>


const props = defineProps({

  filter: Number,
  placeholder: String,
  icon: String

})

import {ref, onMounted, onBeforeUnmount} from 'vue';
import {useStore} from "~/stores/index.js";

const store = useStore()

// const emit = defineEmits(['updateFilter']);
const useFilter = props.filter

function handleClick() {
  store.setFilterNumber(useFilter)
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


<style scoped>
.input-field:focus {
  border-color: transparent;
  outline: none;
}
</style>

