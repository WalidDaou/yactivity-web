<template>
    <div class="">
        <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
            <div class="font-normal font-18px pt-1 pb-1">Réservation principale</div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Initialisateur de la réservation</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Johnny Doe</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Nombres de places restantes</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">5</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Mode de publication</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Privée</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Niveau souhaité</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Débutant</div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between "> 
                <div class="font-medium font-14px">Genre souhaité</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Filles uniquement</div>
            </div>
            <div class="flex flex-row gap-[25px] justify-between "> 
                <div class="font-medium font-14px">Remarques</div>
                <div class="font-semibold text-[15px] text-[#EE8436] underline uppercase text-end">Afficher les remarques</div>
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