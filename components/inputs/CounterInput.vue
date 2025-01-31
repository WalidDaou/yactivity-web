<template>
    <div class="flex flex-row gap-5 items-center cursor-pointer pr-5">
        <img :src="icon" alt="Icon" class="cursor-pointer"/>
        <div class="flex font-normal font-14px opacity-[0.4]">Participants</div>
    </div>
</template>
  
<script>
export default {
    name: 'InputWithIcon',
    props: {
        placeholder: {
            type: String,
            default: 'Enter text...'
        },
        icon: {
            type: String,
            required: true
        }
    },
}
</script>
<style scoped>

</style>