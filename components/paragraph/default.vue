<template>
    <div class="flex flex-col pb-20">
        <div class="font-semibold font-18px pb-2">
            {{ title }}
        </div>
        <div class="font-normal font-14px opacity-70">
            {{ paragraph }}
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MyComponent',
    props: {
        title: {
            type: String,
        },
        paragraph: {
            type: String,
        },
    }
}
</script>
  
  