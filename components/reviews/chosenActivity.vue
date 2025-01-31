<template>
    <div class="">
        <div class="font-18px font-normal pl-4 pt-4">60 minutes</div>
        <div class="flex flex-row w-100 items-center pt-4">
            <div class="flex flex-row gap-3 items-center pl-3 pb-3 pr-9 w-50">
                <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                    <img src="@/assets/svg/reviews-group.svg" alt="Edit Icon" />
                </div>
                <div class="font-normal font-14px">05 / 10</div>
            </div>

            <div class="flex flex-row gap-3 items-center pl-5 pb-3 pr-2 w-50">
                <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                    <img src="@/assets/svg/reviews-date.svg" alt="Edit Icon" />
                </div>
                <div class="font-normal font-14px">Jan 10, 2024</div>
            </div>
        </div>
        <div class="flex flex-row w-100 items-center">
            <div class="flex flex-row gap-3 items-center pl-3 pb-6 pr-9 w-50">
                <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                    <img src="@/assets/svg/reviews-clock.svg" alt="Edit Icon" />
                </div>
                <div class="font-normal font-14px">13:00</div>
            </div>

            <div class="flex flex-row gap-3 items-center pl-5 pb-6 pr-2 w-50">
                <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                    <img src="@/assets/svg/reviews-time.svg" alt="Edit Icon" />
                </div>
                <div class="font-normal font-14px">90 minutes</div>
            </div>
        </div>

    </div>
</template>

<script >
import ImageComponent from '../ImageComponent.vue';
import Playground from '@/assets/images/playground.png';
export default {
    components: {
        ImageComponent
    },
    data() {
        return {
            Playground: Playground,

        };
    },

}
</script>

<style lang="scss" scoped></style>