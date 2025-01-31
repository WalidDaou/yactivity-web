<template>
    <div class="flex flex-col cursor-pointer">
      <label class="font-semibold text-[12px] pl-2 pb-1" :for="name">{{ label }}</label>
      <div class="custom-select">
        <select :name="name" :id="name" v-model="selectedValue" @change="$emit('change', selectedValue)">
          <option value="" disabled selected>- Select -</option>
          <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
        <div class="select-arrow">
            <img src="@/assets/svg/location.svg" alt="Icon" />
        </div> 
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    name: String,
    label: String,
    options: Array,
  });
  
  const selectedValue = ref('');
  </script>
  
  <style lang="scss" scoped>

  .custom-select {
    position: relative;
    width: 100%;
  }
  
  select {
    padding: 10px;
    appearance: none; 
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 30px; 
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #00000045;
    border-radius: 10px !important;
  }
  
  .select-arrow {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

  }
  </style>
  