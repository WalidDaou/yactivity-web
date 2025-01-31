<template>

  <div class="date-picker absolute top-0 left-0 w-full h-[50%]">
    <div class="flex items-start capitalize font-18px font-medium pt-1">{{ monthYear }}</div>
    <div ref="carouselContainer" class="fancy-carousel-choose-day days-container">
      <div
          v-for="day in days"
          :key="day.format('YYYY-MM-DD')"
          :class="['day p-[8px] lg:p-[10px] f-carousel__slide', { selected: isSelected(day), 'current-day': isCurrentDay(day) }]"
          @click="selectDay(day)"
      >
        <div class="font-semibold font-14px opacity-[0.4]">{{ day.format('ddd') }}</div>
        <div class="font-semibold font-18px day-selected">{{ day.format('D MMM') }}</div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {ref, computed, onMounted, nextTick, onUnmounted} from 'vue';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const currentDate = ref(moment());
const selectedDate = ref(moment());
const startDate = ref(moment());
const endDate = ref(moment().add(2, 'weeks'));
const carouselContainer = ref(null);
let carouselInstance = null;

const days = computed(() => {
  const daysArray = [];
  let date = startDate.value.clone();
  while (date.isBefore(endDate.value)) {
    daysArray.push(date.clone());
    date.add(1, 'day');
  }
  return daysArray;
});

const monthYear = computed(() => {
  return currentDate.value.format('MMMM YYYY');
});

const selectDay = (day) => {
  selectedDate.value = day;
  if (!day.isSame(currentDate.value, 'month')) {
    currentDate.value = day.clone();
  }
};

const isSelected = (day) => selectedDate.value.isSame(day, 'day');
const isCurrentDay = (day) => moment().isSame(day, 'day');


const Carousel = useNuxtApp().$carousel;

// onMounted(() => {
//
//   const stopWatcher = watch(
//       () => ({container: carouselContainer.value, Carousel: useNuxtApp().$carousel}),
//       ({container, Carousel}) => {
//         if (container && Carousel) {
//           initializeCarousel(Carousel);
//           stopWatcher();
//         }
//       },
//       {immediate: true}
//   );
//
// });


const initializeCarousel = (Carousel) => {
  if (carouselContainer.value) {
    carouselInstance = new Carousel(carouselContainer.value, {
      infinite: false,
      slidesPerPage: 7,
      autoplay: {delay: 5000},
      center: true,
      Dots: false,
      Navigation: true
    });
    // console.log('change')
    scrollToCurrentDay();
  }
};


onMounted(() => {

  watchEffect(() => {

    const container = carouselContainer.value;
    const Carousel = useNuxtApp().$carousel;

    console.log('change in carousel')

    if (container && Carousel) {
      initializeCarousel(Carousel);
    }

  });

});

onUnmounted(() => {

  if (carouselInstance) {
    carouselInstance.destroy();
  }

});

watch(days, () => {

  const Carousel = useNuxtApp().$carousel;

  if (carouselInstance) {
    carouselInstance.destroy();
  }

  initializeCarousel(Carousel);

});

const scrollToCurrentDay = () => {
  nextTick(() => {
    const todayIndex = days.value.findIndex((day) => isCurrentDay(day));
    if (todayIndex !== -1 && carouselInstance) {
      carouselInstance.slideTo(todayIndex);
    }
  });
};

// onMounted(() => {
//   initializeCarousel();
// });


// const Carousel = useNuxtApp().$carousel;
//
//
// const initializeCarousel = () => {
//   if (carouselContainer.value) {
//     // const Carousel = useNuxtApp().$carousel;
//
//     if (Carousel) {
//       carouselInstance = new Carousel(carouselContainer.value, {
//         // carouselInstance = new (useNuxtApp().$carousel)(carousel.value, {
//         infinite: false,
//         slidesPerPage: 7,
//         autoplay: {delay: 5000},
//         center: true,
//         Dots: false,
//       });
//       scrollToCurrentDay();
//     }
//   }
// };

</script>

<style scoped>
.date-picker {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
}

.days-container {
  display: flex;
  gap: 10px;
  scroll-behavior: smooth;
}

.day {
  flex: 0 0 auto;
  text-align: center;

  border: 1.5px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
}

.day:hover {
  background-color: #f5f5f5;
  border-color: #EE8436;
}

.day:hover .day-selected {
  color: #EE8436;
}

.selected {
  border-color: #EE8436;
  background-color: #f5f5f5;
}

.selected .day-selected {
  color: #EE8436;
}

.f-carousel-nav-prev,
.f-carousel-nav-next {
  background: #eee;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.f-carousel-nav-prev:hover,
.f-carousel-nav-next:hover {
  background: #EE8436;
  color: #fff;
}
</style>
