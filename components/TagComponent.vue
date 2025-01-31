<template>
    <div class="tag">
      <span>{{ tagName }}</span>
      <button @click="removeTag">
        <img src="@/assets/svg/x.svg" alt="Icon" /></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tagName: {
        type: String,
        required: true
      }
    },
    methods: {
      removeTag() {
        this.$emit('remove', this.tagName);
      }
    }
  }
  </script>
  
  <style scoped>
  .tag {
    display: flex;
    align-items: center;
    background-color: #EE843620;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
    font-size: 14px;
    gap: 5px;
  }
  
  .tag button {
    background: none;
    border: none;
    margin-left: 10px;
    font-size: 14px;
    cursor: pointer;
  }
  </style>
  