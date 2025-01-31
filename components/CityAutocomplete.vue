<template>
    <div>
        <input type="text" v-model="query" @input="fetchSuggestions" @focus="handleInputFocus"
            placeholder="Type a city name or click to search" />
        <ul v-if="suggestions.length">
            <li v-for="(suggestion, index) in suggestions" :key="index" @click="selectSuggestion(suggestion)">
                {{ suggestion.description }}
            </li>
        </ul>

        <h2>Recently Searched Locations</h2>
        <ul>
            <li v-for="(recentSearch, index) in recentSearches" :key="index" @click="selectRecentSearch(recentSearch)">
                {{ recentSearch }}
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

const query = ref('');
const suggestions = ref([]);
const recentSearches = ref([]);

onMounted(() => {
    // Load recent searches from session storage
    const savedRecentSearches = sessionStorage.getItem('recentSearches');
    if (savedRecentSearches) {
        recentSearches.value = JSON.parse(savedRecentSearches);
    }
});

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

function selectRecentSearch(recentSearch) {
    query.value = recentSearch;
    fetchSuggestions();
}

function addToRecentSearches(city) {
    if (!recentSearches.value.includes(city)) {
        recentSearches.value.unshift(city);
        if (recentSearches.value.length > 3) {
            recentSearches.value.pop(); // Keep only the last three searches
        }
        // Save recent searches to session storage
        sessionStorage.setItem('recentSearches', JSON.stringify(recentSearches.value));
    }
}

function handleInputFocus() {
    // Fetch suggestions when the input is focused
    fetchSuggestions();
}
</script>
  
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
}

li {
    padding: 10px;
    cursor: pointer;
}

li:hover {
    background-color: #f0f0f0;
}
</style>
  