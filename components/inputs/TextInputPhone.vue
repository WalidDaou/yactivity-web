<template>
  <div @click.stop="handleClick"
       class="border relative bg-white  rounded-[10px] flex flex-row gap-2 w-full h-full pl-[10px]">
    <img :src="icon" alt="Icon" class="w-[15px] cursor-pointer"/>

    <!--        @blur="handleBlur"-->
    <input
        ref="inputField2"
        type="text"
        :placeholder="placeholder"
        class="input-field font-normal font-14px rounded-[10px]"
    />


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
.input-field:focus {
  border-color: transparent;
  outline: none;
}
</style>

