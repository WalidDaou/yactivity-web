<template>
  <div class="date-picker">
    <div class="header">
      <button @click="prevMonth" class="nav-button nav-button-prev">&lt;</button>
      <span>{{ monthYear }}</span>
      <button @click="nextMonth" class="nav-button nav-button-next">&gt;</button>
    </div>
    <div class="days-container">
      <div
        class="day"
        v-for="day in days"
        :key="day.format('YYYY-MM-DD')"
        :class="{ selected: isSelected(day), 'current-day': isCurrentDay(day) }"
        @click="selectDay(day)"
      >
        <div class="day-name">{{ day.format('ddd') }}</div>
        <div class="day-number">{{ day.format('D MMM') }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import moment from 'moment'

const currentDate = ref(moment())
const selectedDate = ref(moment())

const days = computed(() => {
  const start = currentDate.value.clone().startOf('month').startOf('week')
  const end = currentDate.value.clone().endOf('month').endOf('week')
  const daysArray = []
  let date = start.clone()
  while (date.isBefore(end)) {
    daysArray.push(date.clone())
    date.add(1, 'day')
  }
  return daysArray
})

const monthYear = computed(() => {
  return currentDate.value.format('MMMM YYYY')
})

const selectDay = (day) => {
  selectedDate.value = day
}

const isSelected = (day) => {
  return selectedDate.value.isSame(day, 'day')
}

const isCurrentDay = (day) => {
  return moment().isSame(day, 'day')
}

const scrollToCurrentDay = () => {
  nextTick(() => {
    const todayIndex = days.value.findIndex(day => isCurrentDay(day))
    if (todayIndex !== -1) {
      const container = document.querySelector('.days-container')
      const dayElement = container.children[todayIndex]
      container.scrollLeft = dayElement.offsetLeft - (container.clientWidth / 2) + (dayElement.clientWidth / 2)
    }
  })
}

const prevMonth = () => {
  currentDate.value = currentDate.value.subtract(1, 'month')
  scrollToCurrentDay()
}

const nextMonth = () => {
  currentDate.value = currentDate.value.add(1, 'month')
  scrollToCurrentDay()
}

onMounted(() => {
  scrollToCurrentDay()
})
</script>

<style scoped>
.date-picker {
  width: 100%;
  max-width: 800px;
  margin: auto;
  text-align: center;
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 18px;
}

.days-container {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 10px;
  scroll-behavior: smooth;
}

.day {
  flex: 0 0 auto;
  width: 100px;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
}

.day:hover {
  background-color: #f5f5f5;
}

.selected {
  border-color: orange;
  background-color: #f5f5f5;
}

.current-day {
  border-color: black;
}

.day-name {
  color: #888;
  font-weight: bold;
}

.day-number {
  font-weight: bold;
  color: black;
}

.nav-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  position: absolute;
  width: 100%;
  left: 0;
  padding: 10px 0;
}

.nav-button-prev {
  top: 0;
}

.nav-button-next {
  bottom: 0;
}
</style>
