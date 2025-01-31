<template>
  <div
       class="relative bg-white border rounded-[10px] flex flex-row gap-2 w-full h-full pl-[10px]">

    <!--        @blur="handleBlur"-->
    <input

        ref="input"
        type="text"
        :placeholder="placeholder"
        class="input-field font-normal font-14px rounded-[10px]"

    />

    <div class="h-full py-[8px] pr-[10px]">
      <img :src="icon" alt="Icon" class="cursor-pointer  "/>
    </div>


  </div>
</template>

<script setup>


const props = defineProps({

  data: Number ,
  placeholder: String,
  icon: String

})

import {ref, onMounted, onBeforeUnmount} from 'vue';

import {useStore} from "~/stores/index.js";

const store = useStore()

const emit = defineEmits(['sendData']);


</script>
<style scoped>

</style>


<style scoped>
.input-field:focus {
  border-color: transparent;
  outline: none;
}
</style>

