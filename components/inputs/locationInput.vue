<template>
    <div class="flex flex-col cursor-pointer location-input-container">
      <label class="font-semibold text-[12px] pl-2 pb-1" :for="name">{{ label }}</label>
      <div class="input-wrapper">
        <input type="text" v-model="query" @input="fetchSuggestions" @focus="handleInputFocus"
              placeholder="Entrez l'emplacement souhaité" />
        <div class="location-svg">
          <img src="@/assets/svg/location.svg" alt="Icon" />
        </div>
      </div>
      <ul v-if="suggestions.length">
        <li v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
          {{ suggestion.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
      name: String,
      label: String,
  });
  
  const query = ref('');
  const suggestions = ref([]);
  
  async function fetchSuggestions() {
      if (query.value.length > 0) {
          try {
              const { data } = await useFetch('/api/places', {
                  params: {
                      input: query.value,
                  },
              });
              suggestions.value = data.value.predictions;
          } catch (error) {
              console.error('Error fetching suggestions:', error);
          }
      } else {
          suggestions.value = [];
      }
  }
  
  function selectSuggestion(suggestion) {
      query.value = suggestion.description;
      suggestions.value = [];
      addToRecentSearches(suggestion.description);
  }
  
  function handleInputFocus() {
      fetchSuggestions();
  }
  </script>
  
  <style scoped>
  .location-input-container {
    position: relative;
  }
  
  .input-wrapper {
    position: relative;
  }
  
  input {
    width: 100%;
      padding: 10px;
      border: 1px solid #00000045;
      border-radius: 10px !important;
      padding-right: 30px; /* Adjust padding to make space for the SVG */
  }
  
  .location-svg {
    position: absolute;
    top: 50%;
    right: 10px; /* Adjust right offset as needed */
    transform: translateY(-50%);
  }
  
  ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000; /* Set a high z-index value to ensure the dropdown appears above other elements */
}
  
  li {
      padding: 10px;
      cursor: pointer;
  }
  
  li:hover {
      background-color: #f0f0f0;
  }
  
  </style>
  