

<template>
    <div class="lg:pl-6 xl:pl-12 pt-6 xl:pt-12">
        <div class="font-semibold text-[21px]">Sélectionnez la date</div>
        <CalendarPickerVue class="pt-[20px] lg:pt-0" />

        <div class="font-semibold text-[21px] pt-10 pb-5">Les heures disponibles</div>
        <DatePickerVue />
    </div>
</template>

<script setup>
import CalendarPickerVue from './CalendarPicker.vue';
import DatePickerVue from './DatePicker.vue';
</script>

<style lang="scss" scoped></style>