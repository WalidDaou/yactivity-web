<template>
    <div class="flex flex-col cursor-pointer input-form">
      <textarea :name="name" :id="name" v-model="inputValue" :placeholder="placeholder"
                @input="$emit('input', $event.target.value)" rows="3"></textarea>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    name: String,
    label: String,
    placeholder: String,
  });
  
  const inputValue = ref('');
  </script>
  
  <style lang="scss" scoped>
  textarea {
    padding: 10px;
    border: 1px solid #00000045;
    border-radius: 10px !important;
    resize: vertical; /* Allow vertical resizing of the textarea */
  }
  
  textarea::placeholder {
    @apply font-normal text-[13px];
  }
  </style>
  