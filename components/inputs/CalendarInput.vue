<template>

  <div
      class="relative bg-[#EDEDED] border-color  border rounded-[10px] flex flex-row gap-2 w-full h-full pl-[10px]">

    <p

        class="input-field font-normal text-black font-14px rounded-[10px] bg-transparent"

    >
      {{ text }}
    </p>


    <!--      <option disabled value="">{{ placeholder }}</option>-->
    <!--      <option v-for="option in options" :key="option.value" :value="option.value">-->
    <!--        {{ option.label }}-->
    <!--      </option>-->

    <div class="h-full py-[12px] pr-[10px]">
      <img :src=icon alt="Icon" class="cursor-pointer"/>
    </div>

  </div>

</template>

<script setup>
const props = defineProps({
  // options: {
  //   type: Array,
  //   required: true,
  //   default: () => [],
  // },

  text: {
    type: String,
    default: "Select an option",
  },
  icon: String,
  defaultValue: {
    type: [String, Number],
    default: "",
  },
});

import {ref, watch} from "vue";

const emit = defineEmits(["sendData"]);

const selectedValue = ref(props.defaultValue); // Initialize with default value

// Watch for changes in selectedValue and emit the updated value
watch(selectedValue, (newValue) => {
  emit("sendData", newValue);
});
</script>

<style scoped>
.input-field:focus {
  border-color: transparent;
  outline: none;
}
</style>
