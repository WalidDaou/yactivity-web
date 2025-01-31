<template>
  <div>
    <div
        class="target"
        @click.stop="toggleState"
        :class="{ active: isActive }"
    >
      Click me!
    </div>
    <div
        class="target"
        @click.stop="toggleStateTrue"
        :class="{ active: isActive }"
    >
      Click me!
    </div>
    <p>The state is: {{ isActive }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Define the boolean state
const isActive = ref(false);

// Toggles the state when the div is clicked
const toggleState = () => {
  isActive.value = !isActive.value;
};

const toggleStateTrue = () => {
  isActive.value = true;
};

// Resets the state when clicking anywhere else
const resetState = () => {
  isActive.value = false;
};

// Add and clean up event listeners
onMounted(() => {
  document.addEventListener('click', resetState);
});

// onBeforeUnmount(() => {
//   document.removeEventListener('click', resetState);
// });

</script>

<style>
.target {
  cursor: pointer;
  padding: 10px;
  background-color: lightblue;
  border: 1px solid blue;
}

.target.active {
  background-color: lightgreen;
}
</style>
