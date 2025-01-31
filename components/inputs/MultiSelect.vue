<template>
    <div class="multi-select-container" ref="multiSelect">
      <label class="font-semibold text-[12px] pl-2 pb-1" :for="date">Saisissez le(s) jours</label>
      <div class="multi-select-input border border-gray-300 rounded-lg flex items-center p-2" @click="toggleDropdown">
        <div class="selected-options flex space-x-2">
          <span v-if="selectedOptions.length === 0" class="placeholder py-1">- Select -</span>
          <span v-for="option in selectedOptions" :key="option" class="selected-option bg-orange-100 text-orange-600 py-1 px-3 rounded-full">
            {{ option }}
          </span>
        </div>
        <button @click.prevent="toggleDropdown" class="ml-auto text-orange-600">
          <img src="@/assets/svg/date-icon.svg" alt="Icon" />
        </button>
      </div>
      <div v-if="isDropdownOpen" class="dropdown-menu border border-gray-300 rounded-lg mt-1 bg-white shadow-lg">
        <div v-for="option in options" :key="option" @click="selectOption(option)" class="dropdown-item py-2 px-4 hover:bg-orange-100 cursor-pointer flex items-center">
          <input type="checkbox" v-model="selectedOptions" :value="option" class="mr-2">
          {{ option }}
        </div>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      options: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      selectedOptions: [],
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      } else {
        this.selectedOptions = this.selectedOptions.filter(item => item !== option);
      }
    },
    handleClickOutside(event) {
      const multiSelect = this.$refs.multiSelect;
      if (multiSelect && !multiSelect.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>  
<style scoped>
.multi-select-container {
  margin: 0 auto;
  position: relative; /* Add this to ensure the dropdown is positioned correctly */
}

.multi-select-input {
  margin-top: 2px;
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #00000045;
  border-radius: 10px !important;
  cursor: pointer; /* Add this to show the cursor pointer */
}

.selected-options {
  display: flex;
  flex-wrap: wrap;
}

.selected-option {
  background: #EE843620 0% 0% no-repeat padding-box;
  border-radius: 29px;
  color: black;
  font-size: 12px; /* Adjust font size */
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  z-index: 10;
}

.dropdown-item {
  padding: 8px 12px;
  display: flex;
  align-items: center;
}

.dropdown-item:hover {
  background-color: #EE843620;
}

.placeholder {
  padding: 2px;
}

.checkbox {
  margin-right: 8px;
}
</style>
