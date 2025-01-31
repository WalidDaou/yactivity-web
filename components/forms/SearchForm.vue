<template>

  <form class="w-full flex flex-row justify-center gap-4">

    <div class=" flex flex-row relative justify-center">

      <div class="search-border relative  flex ">


        <InputWithIcon

            :filter="1"

            placeholder="Rechercher des activités" :icon="searchIcon"
            class="right-in pl-4"/>


        <!--        <div v-if="firstFilter" class="bg-[black] w-[400px]">-->

        <!--        </div>-->

        <!--        <hr class="vertical-line pr-5">-->

        <div class="relative w-full h-full">
          <InputWithIcon
              :filter="2"
              placeholder="Autour de moi"
              :icon="addressIcon"/>

          <div v-if="store?.filterNumber === 2"
               @click.stop="store?.setFilterNumber(2)"
               class="min-h-0 p-[12px] w-full  min-w-none lg:min-w-[220px] lg:p-[18px] gap-[10px] lg:min-h-[110px] h-fit  bg-white absolute top-[110%] z-[100] rounded-[10px] left-0  shadow ">

            <div class="flex flex-col w-full">
              <p class="font-14px opacity-[0.5] whitespace-normal">Autour de moi</p>

              <div class="flex flex-col gap-[10px] pt-[10px] relative h-fit">

                <div class="relative pb-[10px] max-w-[230px]">
                  <p class="font-12px">Paris</p>
                  <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
                </div>

                <div class="relative pb-[10px] max-w-[230px]">
                  <p class="font-12px">Bordeaux</p>
                  <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
                </div>

                <div class="relative pb-[10px] max-w-[230px]">
                  <p class="font-12px">Lyon</p>
                  <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
                </div>

                <div class="relative pb-[10px] max-w-[230px]">
                  <p class="font-12px">Bordeaux</p>
                  <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
                </div>


                <div class="absolute bottom-0 left-0 h-[1px] w-full bg-white "></div>
              </div>

            </div>

          </div>

        </div>
        <!--        <div v-if="secondFilter" class="bg-[black] w-[400px]">-->

        <!--        </div>-->
        <!--        <hr class="vertical-line pr-5">-->

        <div class="relative w-full h-full">

          <DateWithIcon :filter="3"
                        placeholder="Date" :icon="dateIcon"/>


        </div>

        <DateWithIcon :filter="4"
                      placeholder="Participants" :icon="peopleIcon"/>


      </div>

      <div
          @click.stop="moreFilters = true"
          class="filters cursor-pointer">
        <img src="@/assets/svg/filter.svg" alt="Icon"/>
      </div>

      <div
          v-if="store?.filterNumber === 1"
          @click.stop="store?.setFilterNumber(1)"
          class="min-h-0 p-[12px] lg:p-[18px] gap-[10px] lg:min-h-[110px] h-fit grid grid-cols-3 bg-white absolute top-[110%] z-[100] rounded-[10px] left-0 w-full shadow ">

        <div class="flex flex-col">
          <p class="font-14px opacity-[0.5]">Catégories trouvées:</p>

          <div class="flex flex-col gap-[10px] pt-[10px] relative h-fit">
            <div class="relative pb-[10px] max-w-[230px]">
              <p class="font-12px">Football</p>
              <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
            </div>
            <div class="absolute bottom-0 left-0 h-[1px] w-full bg-white "></div>
          </div>
        </div>

        <div class="flex flex-col">
          <p class="font-14px opacity-[0.5]">Activités trouvées:</p>

          <div class="flex flex-col gap-[10px] pt-[10px] relative h-fit">

            <div class="relative pb-[10px] max-w-[230px]">
              <p class="font-12px">foot salle 5x5 - complexe stadia piz… </p>
              <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
            </div>

            <div class="relative pb-[10px] max-w-[230px]">
              <p class="font-12px">foot salle 5x5 - complexe stadia piz… </p>
              <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
            </div>


            <div class="absolute bottom-0 left-0 h-[1px] w-full bg-white "></div>
          </div>
        </div>

        <div class="flex flex-col">
          <p class="font-14px opacity-[0.5]">Partenaires trouvées:</p>

          <div class="flex flex-col gap-[10px] pt-[10px] relative h-fit">
            <div class="relative pb-[10px] max-w-[230px]">
              <p class="font-12px">Complexes stadia of football</p>
              <div class="absolute bottom-0 left-0 h-[1px] w-full bg-black opacity-[0.2]"></div>
            </div>
            <div class="absolute bottom-0 left-0 h-[1px] w-full bg-white "></div>
          </div>
        </div>


      </div>


      <div
          @click.stop="store.setFilterNumber(3)"
          :class="store?.filterNumber === 3 ? '' : 'hidden'"
          class="grid grid-cols-2 min-h-0 p-[12px] lg:p-[18px] gap-[10px] max-w-[500px] lg:min-h-[110px] h-fit  bg-white absolute top-[110%] z-[100] rounded-[10px] right-0 w-fit shadow ">

        <!--        <DatePicker v-model="date" :time-picker="true"/>-->

        <div>
          <p class="font-14px w-fit  opacity-[0.5] whitespace-normal pb-[5px]">Choisir la date</p>
          <Datepicker class="opacity-0 h-0" v-model="date" :format="format" :translations="translations"/>
        </div>

        <div>
          <p class="font-14px w-fit opacity-[0.5] whitespace-normal pb-[5px]">Choisir la date</p>

          <div class="time-picker h-full">

            <div class="time-section">
              <button type="button" @click="incrementHours">▲</button>
              <span>{{ selectedHours.toString().padStart(2, '0') }}</span>
              <button type="button" @click="decrementHours">▼</button>
            </div>

            <span>:</span>

            <div class="time-section">
              <button type="button" @click="incrementMinutes">▲</button>
              <span>{{ selectedMinutes.toString().padStart(2, '0') }}</span>
              <button type="button" @click="decrementMinutes">▼</button>
            </div>

          </div>

        </div>


        <!--        <div>-->
        <!--          <p class="font-14px  whitespace-normal pb-[5px]">Choisir la date</p>-->

        <!--          <Datepicker-->
        <!--              v-model="selectedDate"-->
        <!--              enableTimePicker-->
        <!--              timePickerFormat="HH:mm"-->
        <!--              :minute-increment="5"-->
        <!--              timePickerLabel="Choose Time"-->
        <!--              :auto-apply="true"-->
        <!--          />-->
        <!--        </div>-->

      </div>
      <!--          v-if="thirdFilter = store?.filterNumber"-->

      <!--           @click.stop="fourthFilter = true"-->
      <div v-if="store?.filterNumber === 4"
           @click.stop="store?.setFilterNumber(4)"
           class="min-h-0 p-[12px]   min-w-none lg:min-w-[300px] lg:p-[18px] gap-[10px] lg:min-h-[110px] h-fit  bg-white absolute top-[110%] right-0 w-auto z-[100] rounded-[10px]  shadow ">


        <div class="flex flex-col w-full">
          <p class="font-14px opacity-[0.5] whitespace-normal pb-[18px]">Nb de participants</p>

          <div
              class="flex justify-between p-[10px] border-[1px] border-black border-opacity-[0.4] rounded-[10px] gap-[10px]  relative h-fit">

            <button
                type="button"
                @click="count > 0 ? count = count - 1 : count "
                class="w-[20px] relative cursor-pointer h-[20px] rounded-[50%] border-[1px] border-[#EE8436] flex items-center justify-center">
              <img src="assets/svg/mines.svg" alt="">

            </button>

            <p>{{ count }}</p>

            <button
                type="button"
                @click=" count = count + 1 "
                class="w-[20px] h-[20px] rounded-[50%] cursor-pointer border-[1px] border-[#EE8436] flex items-center justify-center">
              <img src="assets/svg/plus.svg" alt="">

            </button>

          </div>
        </div>

      </div>

    </div>


    <button class="search-button">
      <img src="@/assets/svg/search-white.svg" alt="Icon"/>
    </button>

  </form>

  <div v-if="moreFilters"

       class="z-[999] flex items-center  justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.4]">

    <div
        class="z-[1000] w-fit overflow-scroll lg:min-w-[670px] bg-white rounded-[10px] min-h-[80%] lg:max-h-[85%] relative  py-[25px]">

      <div class="for-px">
        <p class="text-center font-30px ">Autres filtres</p>


        <p class="font-14px opacity-[0.5] whitespace-normal pt-[30px]">Sélectionner les catégories</p>

        <div class="w-full h-fit relative">

          <!--for mapping alert !-->


          <div class="py-[22px] flex flex-col gap-[18px] w-full relative">

            <div @click="checkedfirst = !checkedfirst"
                 class="cursor-pointer flex flex-row gap-[10px]  justify-between w-full">

              <div class="flex flex-row gap-[10px] ">
                <div class="flex items-center h-fit">
                  <input type="checkbox" id="customCheckbox5" class="hidden-checkbox" v-model="checkedfirst"/>
                  <label for="customCheckbox5" class="custom-checkbox-label"></label>
                </div>
                <p class="font-14px whitespace-normal">Sports</p>
              </div>

              <img

                  :class="checkedfirst ? 'rotate-me' : '' "
                  src="assets/svg/drop-down-filter.svg" alt="">

            </div>

            <transition name="fade-slide">
              <div v-if="checkedfirst" class="flex flex-col gap-[12px] px-[20px]">
                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant" class="hidden-checkbox" v-model="check2"/>
                    <label for="someDifferant" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>

                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant2" class="hidden-checkbox" v-model="check3"/>
                    <label for="someDifferant2" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>
              </div>
            </transition>

            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-black  bg-opacity-[0.1]"></div>

          </div>

          <div class="py-[22px] flex flex-col gap-[18px] w-full relative">

            <div @click="checkedfirst = !checkedfirst"
                 class="cursor-pointer flex flex-row gap-[10px]  justify-between w-full">

              <div class="flex flex-row gap-[10px] ">
                <div class="flex items-center h-fit">
                  <input type="checkbox" id="customCheckbox5" class="hidden-checkbox" v-model="checkedfirst"/>
                  <label for="customCheckbox5" class="custom-checkbox-label"></label>
                </div>
                <p class="font-14px whitespace-normal">Sports</p>
              </div>

              <img

                  :class="checkedfirst ? 'rotate-me' : '' "
                  src="assets/svg/drop-down-filter.svg" alt="">

            </div>

            <transition name="fade-slide">
              <div v-if="checkedfirst" class="flex flex-col gap-[12px] px-[20px]">
                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant" class="hidden-checkbox" v-model="check2"/>
                    <label for="someDifferant" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>

                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant2" class="hidden-checkbox" v-model="check3"/>
                    <label for="someDifferant2" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>
              </div>
            </transition>

            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-black  bg-opacity-[0.1]"></div>

          </div>

          <div class="py-[22px] flex flex-col gap-[18px] w-full relative">

            <div @click="checkedfirst = !checkedfirst"
                 class="cursor-pointer flex flex-row gap-[10px]  justify-between w-full">

              <div class="flex flex-row gap-[10px] ">
                <div class="flex items-center h-fit">
                  <input type="checkbox" id="customCheckbox5" class="hidden-checkbox" v-model="checkedfirst"/>
                  <label for="customCheckbox5" class="custom-checkbox-label"></label>
                </div>
                <p class="font-14px whitespace-normal">Sports</p>
              </div>

              <img

                  :class="checkedfirst ? 'rotate-me' : '' "
                  src="assets/svg/drop-down-filter.svg" alt="">

            </div>

            <transition name="fade-slide">
              <div v-if="checkedfirst" class="flex flex-col gap-[12px] px-[20px]">
                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant" class="hidden-checkbox" v-model="check2"/>
                    <label for="someDifferant" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>

                <div class="flex flex-row gap-[10px] ">
                  <div class="flex items-center h-fit">
                    <input type="checkbox" id="someDifferant2" class="hidden-checkbox" v-model="check3"/>
                    <label for="someDifferant2" class="custom-checkbox-label"></label>
                  </div>
                  <p class="font-14px whitespace-normal">Sports</p>
                </div>
              </div>
            </transition>

            <div class="absolute bottom-0 left-0 w-full h-[1px] bg-black  bg-opacity-[0.1]"></div>

          </div>


          <div class="absolute bottom-0 left-0 w-full h-[2px] bg-white"></div>

        </div>


      </div>

      <div class="py-[20px] border-y-[1px] border-black for-px">

        <label class="font-14px opacity-[0.5] whitespace-normal pt-[30px]">Distance maximum</label>

        <div class="slider-container pt-[20px] pb-[30px]">
          <div class="slider-wrapper">
            <input
                type="range"
                v-model="distance"
                :min="0"
                :max="200"
                :step="10"
                @input="updateThumbPosition"
                ref="slider"
            />
            <div
                class="distance-label"
                :style="{ left: thumbPosition + 10 + 'px'  }"
            >
              {{ distance }} km
            </div>
          </div>

        </div>

      </div>

      <div class="py-[20px] flex flex-col gap-[20px] border-b-[1px] border-black for-px">

        <div class="flex flex-row items-center justify-between">

          <label class="font-14px opacity-[0.5] whitespace-normal ">Distance maximum</label>
          <label class="switchSmall m5">
            <input type="checkbox" id="customCheckbox77"/>
            <small></small>
          </label>

        </div>

        <div class="flex flex-row items-center justify-between">

          <label class="font-14px opacity-[0.5] whitespace-normal ">Distance maximum</label>
          <label class="switchSmall m5">
            <input type="checkbox" id="customCheckbox77"/>
            <small></small>
          </label>

        </div>

      </div>

      <div class="py-[20px] border-b-[1px] border-black for-px">

        <label class="font-14px opacity-[0.5] whitespace-normal pt-[30px]">Price</label>

        <div class="slider-container pt-[20px] pb-[30px]">
          <div class="slider-wrapper">
            <input
                type="range"
                v-model="price"
                :min="0"
                :max="1000"
                :step="10"
                @input="updateThumbPosition"

            />
            <div class="absolute top-[30px] left-0 w-fit">
              0 £
            </div>

            <div class="absolute top-[30px] right-0 w-fit">
              1000 £
            </div>

          </div>

        </div>

      </div>

      <div @click="moreFilters = false"
           class="absolute top-0 left-0 w-fit h-fit cursor-pointer font-30px px-[30px] py-[25px] ">
        <img src="assets/svg/x-close.svg" alt="">
      </div>

    </div>

    <div @click="moreFilters = false"
         class="absolute top-0 left-0 w-full h-full z-[999]">

    </div>


  </div>

</template>

<style scoped>


.slider-container {
  width: 100%;
  text-align: center;
}

.slider-wrapper {
  position: relative;
  width: 100%;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  height: 1px;
  background: #e77e22;
  border-radius: 5px;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e77e22;
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.distance-label {
  position: absolute;
  top: 30px;
  color: #e77e22;
  font-size: 14px;
  font-weight: bold;
  z-index: 1;
  transform: translateX(-50%); /* Center the text under the thumb */
}


</style>

<script setup>
import {onMounted} from 'vue';


import {ref} from 'vue';

import InputWithIcon from '@/components/inputs/TextInput.vue';
import DateWithIcon from '@/components/inputs/DateInput.vue';
import Input from '~/components/inputs/input.vue';

import searchIcon from '@/assets/svg/search.svg';
import addressIcon from '@/assets/svg/address.svg';
import dateIcon from '@/assets/svg/date.svg';
import peopleIcon from '@/assets/svg/people.svg';
import DatePicker from "~/components/inputs/DatePicker.vue";

const date = ref(new Date());


const count = ref(1)
const myInput = ref(null)
const moreFilters = ref(false)
const checkedfirst = ref(false)
const check2 = ref(false)
const check3 = ref(false)
const distance = ref(0)
const price = ref(0)
const thumbPosition = ref(0); // Position of the text under the thumb
const slider = ref(null);

const selectedDate = ref(new Date());
const selectedHours = ref(14);
const selectedMinutes = ref(50);

const incrementHours = () => {
  selectedHours.value = (selectedHours.value + 1) % 24;
};

const decrementHours = () => {
  selectedHours.value = (selectedHours.value - 1 + 24) % 24;
};

const incrementMinutes = () => {
  selectedMinutes.value = (selectedMinutes.value + 5) % 60; // Increment by 5 minutes
};

const decrementMinutes = () => {
  selectedMinutes.value = (selectedMinutes.value - 5 + 60) % 60;
};


watch(checkedfirst, (newValue, oldValue) => {
  if (!newValue) {
    check2.value = false;
    check3.value = false;

  }
});

const updateThumbPosition = () => {
  const sliderElement = slider.value;
  if (sliderElement) {
    const sliderWidth = sliderElement.offsetWidth;
    ;
    const max = Number(sliderElement.max);
    const min = Number(sliderElement.min);
    const value = Number(distance.value);


    const percentage = (value) / (max);

    // Adjust position to account for thumb width
    const thumbWidth = 20; // Assumed thumb width
    thumbPosition.value = percentage * (sliderWidth - thumbWidth);

    console.log({
      sliderWidth,
      max,
      min,
      value,
      percentage,
      thumbPosition: thumbPosition.value,
    });
  }
};


import {useStore} from "~/stores/index.js";

const store = useStore()


</script>

