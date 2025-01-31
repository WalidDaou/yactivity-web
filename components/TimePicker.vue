<template>
  <div>

    <Datepicker
        v-model="selectedDate"
        :format="dateFormat"
        @focus="showPicker = true"
        @blur="showPicker = false"
    />

  </div>
</template>

<script setup>
import {ref} from 'vue';
const selectedDate = ref(null);
const showPicker = ref(false);
const dateFormat = 'yyyy-MM-dd HH:mm';
</script>

<style scoped>
/* Add any custom styles to match your desired design */
.datepicker {
  /* Customize the date picker styles */
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.datepicker .datepicker-header {
  background-color: #f0f0f0;
}

.datepicker .datepicker-body {
  padding: 10px;
}

.datepicker .datepicker-footer {
  padding: 10px;
  text-align: center;
}

.datepicker .datepicker-footer button {
  margin: 0 5px;
}
</style>
  