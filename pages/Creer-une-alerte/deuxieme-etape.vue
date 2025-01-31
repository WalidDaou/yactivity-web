<template>


  <div class="main-container">
    <CreerUneActiviteHeaderVue/>
    <form class="activity-form pt-1">
      <div class="pt-3 pb-5 font-semibold font-20px text-center lg:px-0 px-2">Secteur lié à l’alerte</div>
      <locationInput name="activityType" label="Location" :options="activityTypes"
                     v-model="selectedActivityType" @change="handleActivityTypeChange" class="pb-5"/>
      <div class="pt-3 pb-12 font-semibold font-20px text-center lg:px-0 px-2">Distance max</div>

      <div class="wrapper">

        <div class="slider">
          <div class="slider-track"></div>
          <div class="slider-progress"></div>
          <input type="range" min="1" max="1000" step="1" value="500" id="rangeInput">
        </div>

        <output class="font-medium font-14px" for="rangeInput" id="rangeOutput">500 km</output>

      </div>



      <div class="flex flex-col lg:flex-row items-center pt-14 w-100 justify-center gap-7  pb-20 lg:pb-72">


        <NuxtLink to="/Creer-une-alerte/troisieme-etape" class="flex justify-center w-full lg:w-fit">
          <button type="button"
                  class="btn-form text-white uppercase font-medium font-14px px-24 w-full lg:w-fit lg:mb-8 py-4">SUIVANT
          </button>
        </NuxtLink>
        <NuxtLink to="/Creer-une-alerte/premiere-etape"
                  class="underline tracking-[0.8px] text-[#EE8436] font-14px">
          RETOURNER
        </NuxtLink>


      </div>


    </form>
  </div>
</template>

<script>
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-alerte-header.vue';
import locationInput from '~/components/inputs/selectLocation.vue';

export default {
  components: {
    CreerUneActiviteHeaderVue,
    locationInput
  },
  mounted() {
    const inputRange = document.querySelector('input[type="range"]');
    const valueBubble = document.querySelector('output');
    const sliderProgress = document.querySelector('.slider-progress');

    function updateValueBubble() {
      const value = inputRange.value;
      const max = inputRange.max;
      const percentage = (value / max) * 100;
      const thumbWidth = 24;
      const rangeWidth = inputRange.offsetWidth - thumbWidth;
      const left = (value - inputRange.min) / (inputRange.max - inputRange.min) * rangeWidth;

      valueBubble.style.left = `${left}px`;
      valueBubble.innerHTML = `${value} km`;
      sliderProgress.style.width = `${percentage}%`;
    }

    inputRange.addEventListener('input', updateValueBubble);
    inputRange.addEventListener('mousemove', updateValueBubble);

    updateValueBubble();
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  margin: 0 auto;
  padding-bottom: 30px;
}

.slider {
  position: relative;
  width: 100%;
}

.slider-track {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 1px;
  background: #e0e0e0;
  border-radius: 2px;
}

.slider-progress {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 2px;
  background: #e77e22;
  border-radius: 2px;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 2;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 15px;
  width: 15px;
  background: #e77e22;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-top: 5px;
}

input[type="range"]::-moz-range-track {
  height: 2px;
  background: transparent;
  border-radius: 2px;
}

input[type="range"]::-moz-range-thumb {
  height: 24px;
  width: 24px;
  background: #e77e22;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-ms-track {
  height: 2px;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input[type="range"]::-ms-fill-lower {
  background: transparent;
}

input[type="range"]::-ms-thumb {
  height: 24px;
  width: 24px;
  background: #e77e22;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-ms-fill-upper {
  background: transparent;
}

output {
  position: absolute;
  top: 23px;
  transform: translateX(-30%);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  color: #e77e22;
  white-space: nowrap;
}
</style>
  