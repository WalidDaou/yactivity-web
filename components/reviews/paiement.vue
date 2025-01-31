<template>
    <div class="">
        <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
            <div class="font-normal font-18px pt-1 pb-1">Paiement</div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Mode</div>
                <div class="font-semibold font-14px text-end">Acompte en ligne (50%)</div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Montant payé</div>
                <div class="font-semibold font-14px  text-end">38 £</div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Reste à payer sur place</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">38 £</div>
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