<template>
    <div :class="['asp', fit, `asp-${ratio}`, classes]">
      <img class="b-lazy" :src="url" :data-src="url" :alt="alt">
      <div v-if="overlay" class="overlay rounded-[10px]"></div>
      <div v-if="overlaySecond" class="overlay"></div>
      <slot></slot>
    </div>
  </template>

  <script>
  export default {
    props: {
      url: {
        type: String,
        required: true
      },
      fit: {
        type: String,
        default: "cover"
      },
      ratio: {
        type: String,
        default: "1-1"
      },
      classes: {
        type: String,
        default: ""
      },
      alt: {
        type: String,
        default: ""
      },
      overlay: {
        type: Boolean,
        default: false
      },
      overlaySecond :{
        type: Boolean,
        default: false
      }
    }
  }
  </script>
