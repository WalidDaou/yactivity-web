<template>
  <div
      class="grid date-change-condition min-h-0 p-[12px] lg:p-[18px] gap-[10px] max-w-[500px] lg:min-h-[110px] h-fit bg-white absolute top-[110%] z-[100] rounded-[10px] right-0 w-fit shadow"
  >
    <div>
      <p class="font-14px w-fit opacity-[0.5] whitespace-normal pb-[5px]">Choisir la date</p>
      <Datepicker
          class="opacity-0 h-0"
          v-model="store.chooseTime"
          :format="format"
          :translations="translations"
          @change="onDateChange"
      />
    </div>

<!--    <div class="time-picker h-full">-->
<!--      <div class="time-section">-->
<!--        <button type="button" @click="incrementHours">▲</button>-->
<!--        <span>{{ store.hour }}</span>-->
<!--        <button type="button" @click="decrementHours">▼</button>-->
<!--      </div>-->

<!--      <span>:</span>-->

<!--      <div class="time-section">-->
<!--        <button type="button" @click="incrementMinutes">▲</button>-->
<!--        <span>{{ store.minute }}</span>-->
<!--        <button type="button" @click="decrementMinutes">▼</button>-->
<!--      </div>-->
<!--    </div>-->

  </div>

</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useStore } from "~/stores/index.js";

const store = useStore();

// Props
defineProps({
  format: {
    type: String,
    default: "YYYY-MM-DD HH:mm",
  },
  modelValue: {
    type: String,
    required: true,
  },
  translations: {
    type: Object,
    default: () => ({
      selectDate: "Choisir la date",
      selectTime: "Choisir l'heure",
    }),
  },
});

const emit = defineEmits(["update:modelValue"]);

// Time State
const selectedHours = ref(14);
const selectedMinutes = ref(30);
const minute = ref(store.minute);
const hour = ref(store.hour);

// Watch for changes in selectedHours and selectedMinutes
watch([store.minute, store.hour], () => {
  store.setChooseTime(`${store.hour}:${store.minute}`);
});

// Handle date change
const onDateChange = (newDate) => {
  store.setChooseTime('');
  store.setChooseTime(`${store.hour}:${store.minute}`);
};

// Increment/Decrement Functions
const incrementHours = () => {
  // Ensure hours stay within the range 0-23
  const newHour = (store.hour + 1) % 24;
  store.setHour(newHour);
  console.log("Incremented Hours:", newHour);
};

const decrementHours = () => {
  // Ensure hours stay within the range 0-23
  const newHour = (store.hour - 1 + 24) % 24;
  store.setHour(newHour);
  console.log("Decremented Hours:", newHour);
};

const incrementMinutes = () => {
  // Increment minutes and handle wrap around
  const newMinute = (store.minute + 1) % 60;
  store.setMinute(newMinute);
  console.log("Incremented Minutes:", newMinute);
};

const decrementMinutes = () => {
  // Decrement minutes and handle wrap around
  const newMinute = (store.minute - 1 + 60) % 60;
  store.setMinute(newMinute);
  console.log("Decremented Minutes:", newMinute);
};

// Lifecycle hooks
onMounted(() => {
  // Reset the time when the component is mounted, if needed
  if (!store.hour || !store.minute) {
    store.setHour(14);  // Default hour
    store.setMinute(30);  // Default minute
  }
});

onBeforeUnmount(() => {
  store.setChooseTime('');
});
</script>

<style scoped>
.time-picker {
  display: flex;
  align-items: center;
  gap: 5px;
}

.time-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  cursor: pointer;
}
</style>
