<template>
    <div class="pt-10 lg:pt-20 pb-7 font-semibold font-25px main-container text-center ">
       {{ title }}
    </div>
</template>
  
<script>
export default {
    name: 'MyComponent',
    props: {
        title: {
            type: String,
            default: 'Enter title...'
        },
    }
}
</script>
  
  