<!-- <template>
  <div>
    <datepicker :value="selectedDate" @input="handleDateChange"></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vue-datepicker';

export default {
  components: {
    Datepicker,
  },
  data() {
    return {
      selectedDate: null,
    };
  },
  methods: {
    handleDateChange(date) {
      this.selectedDate = date;
    },
  },
};
</script> -->


<template>
    <div class="flex flex-col cursor-pointer relative">
      <label class="font-semibold text-[12px] pl-2 pb-1" :for="date">{{ label }}</label>
      <div class="input-wrapper">
        <input
          :type="type"
          :name="date"
          :id="date"
          v-model="inputValue"
          :placeholder="placeholder"
          @input="$emit('input', $event.target.value)">
        <div class="icon">
          <img src="@/assets/svg/date-icon.svg" alt="Icon" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    name: String,
    label: String,
    type: {
      type: String,
      default: 'date'
    },
    placeholder: String,
  });
  
  const inputValue = ref('');
  </script>
  
  <style lang="scss" scoped>
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  input {
    padding: 10px;
    padding-right: 40px;
    border: 1px solid #00000045;
    border-radius: 10px !important;
    width: 98%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;


  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    width: 70px;
    cursor: pointer;
    pointer-events: auto; 
  }

  
    &::placeholder {
      @apply font-normal text-[13px];
    }
  }
  
  .icon {
    position: absolute;
    right: 30px;
    pointer-events: none;
  }
  
  .icon img {
    pointer-events: all;
  }
  </style>
  