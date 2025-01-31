<template>
    <div class="">
        <div class="flex flex-row gap-3 items-center pt-4 pl-4 pb-6 pr-9 ">
            <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                <img src="@/assets/svg/orange-phone.svg" alt="Edit Icon" />
            </div>
            <div class="font-normal font-14px">+33 (6) 86 57 90 14</div>
        </div>

        <div class="flex flex-row gap-3 items-center pl-4 pb-6 pr-2 ">
            <div class="font-semibold font-14px colored-icon-rev text-center text-white">
                <img src="@/assets/svg/small-location.svg" alt="Edit Icon" />
            </div>
            <div class="font-normal font-14px">20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
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