<template>
    <div class="">
        <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
            <div class="font-normal font-18px pt-1 pb-1">Formules sélectionnées</div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Étudiants</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">36 £ <span class="font-medium text-black pl-2">1 personne</span></div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Classique</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">40 £ <span class="font-medium text-black pl-2">1 personne</span></div>
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