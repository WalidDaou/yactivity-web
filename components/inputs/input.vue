<template>
  <div class="flex flex-col cursor-pointer">
    <label class="font-semibold text-[13px] pl-2 pb-1" :for="name">{{ label }}</label>
    <input :type="type" :name="name" :id="name" v-model="inputValue" :placeholder="placeholder"
           @input="$emit('input', $event.target.value)">
  </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
  name: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,

});


const inputValue = ref('');


</script>

<style lang="scss" scoped>
input {
  padding: 10px;
  border: 1px solid #00000045;
  border-radius: 10px !important;
}

input::placeholder {
  @apply font-normal text-[13px];
}
</style>
  