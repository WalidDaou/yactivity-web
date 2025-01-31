<script setup>
import { ref } from 'vue';





</script>

<template>
  <div>
    <!-- Date Picker -->
    <Datepicker
        v-model="selectedDate"
        :auto-apply="true"
        :show-time-picker="false"

    />

    <!-- Custom Time Picker -->
    <div class="time-picker">
      <div class="time-section">
        <button @click="incrementHours">▲</button>
        <span>{{ selectedHours.toString().padStart(2, '0') }}</span>
        <button @click="decrementHours">▼</button>
      </div>
      <span>:</span>
      <div class="time-section">
        <button @click="incrementMinutes">▲</button>
        <span>{{ selectedMinutes.toString().padStart(2, '0') }}</span>
        <button @click="decrementMinutes">▼</button>
      </div>
    </div>

    <p>
      Selected Date & Time:
      {{ selectedDate }} {{ selectedHours.toString().padStart(2, '0') }}:{{ selectedMinutes.toString().padStart(2, '0') }}
    </p>
  </div>
</template>

