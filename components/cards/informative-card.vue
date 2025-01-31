<template>
    <div class="card-content mb-[40px] !w-full !h-fit flex flex-1 flex-col gap-3 text-center justify-center items-center py-5 lg:px-[65px] px-[20px]">
      <img :src="icon" alt="Icon" class="cursor-pointer !w-fit" />
      <div class="text-[#EE8436] font-medium text-[21px] mt-5">{{ title }}</div>
      <div class="font-normal pb-2 px-6 font-14px">{{ description }}</div>
    </div>
  </template>

  <script>
  export default {
    name: 'MyComponent',
    props: {
      title: {
        type: String,
        default: 'Title'
      },
      description: {
        type: String,
        default: 'Description'
      },
      icon: {
        type: String,
        required: true
      }
    }
  }
  </script>

  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  </style>
  