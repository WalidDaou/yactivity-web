<template>
    <div class="flex flex-col cursor-pointer">
        <label class="font-semibold text-[12px] pl-2 pb-1" :for="name">{{ label }}</label>
        <vue-tel-input 
        v-model="phone" 
        :name="name"
        :id="name"
        defaultCountry="FR"
        :placeholder="placeholder"
      />
    </div>
</template>
  
<script setup>

import { ref } from 'vue'

const props = defineProps({
    name: String,
    label: String,
    placeholder: String,
})

const phone = ref('')

</script>
  

<style lang="scss" scoped>

.vue-tel-input {
    padding: 5px !important;
    border: 1px solid #00000045 !important;
    border-radius: 10px !important;
}
.vue-tel-input:focus-within {
    box-shadow: none !important;
}
</style>

  
<!-- 
  <template>
    <div class="flex flex-col cursor-pointer">
      <label class="font-semibold text-[13px] pl-2 pb-1" :for="name">{{ label }}</label>
      <vue-tel-input 
        v-model="phone" 
        :name="name"
        :id="name"
        defaultCountry="FR"
        :placeholder="placeholder"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import VueTelInput from 'vue-tel-input'
  
  const props = defineProps({
    name: String,
    label: String,
    placeholder: String,
  })
  
  const phone = ref('')
  </script>
  
  <style lang="scss" scoped>
  /* Styling the input field */
  .vue-tel-input input {
    padding: 10px;
    border: 1px solid #00000045;
    border-radius: 10px !important;
    width: 100%;
  }
  
  /* Styling the placeholder */
  .vue-tel-input input::placeholder {
    @apply font-normal text-[13px];
  }
  
  /* Optional: Customize other parts of the component as needed */
  .vue-tel-input .vti__dropdown {
    border: 1px solid #00000045;
    border-radius: 10px !important;
  }
  
  .vue-tel-input .vti__dropdown .vti__dropdown-item {
    padding: 10px;
  }
  </style>
   -->