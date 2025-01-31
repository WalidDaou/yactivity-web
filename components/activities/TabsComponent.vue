<template>
    <div>

      <div class="tabs">


        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tabb', { 'active-tab': currentTab === index }]"
          @click="currentTab = index"
          class="font-18px text-nowrap">


          {{ tab.label }}
        </button>
      </div>

      <div class="tab-content">

        <div class="w-full p-2 flex flex-row gap-[10px] bg-[#F8F8F8] uppercase border border-[#00000026] rounded-[10px] mb-[20px] items-center justify-center ">

          <div class="font-semibold font-14px colored-icon-rev text-center text-white">
            <img src="@/assets/svg/PLUS-NEW.svg" class="h-[15px]" alt="Edit Icon"/>
          </div>
          <p>Ajouter des participants</p>

        </div>

        <component :is="tabs[currentTab].component"></component>

      </div>

    </div>
  </template>
  
  <script>
  export default {
    props: {
      tabs: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentTab: 0
      };
    }
  };
  </script>
  
  <style scoped>
  .tabs {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #0000002A;
    @apply font-semibold text-[18px] gap-10 overflow-scroll;
  }
  
  .tabb {
    @apply py-3;
    cursor: pointer;
    opacity: 0.4;
  }
  
  .active-tab {
    opacity: 1;
    color: #EE8436;
    border-bottom: 2px solid #EE8436;
  }
  
  .tab-content {
@apply pt-8;
  }
  </style>
  