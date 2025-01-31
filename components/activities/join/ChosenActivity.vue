<template>
    <div class="">

        <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-7 border-hr">
            <div class="font-normal font-18px">60 minutes</div>
            <div class="flex items-center gap-5 mt-1">
                <div class="flex items-center">
                    <div class="font-semibold font-14px small-active text-center text-white">
                        <img src="@/assets/svg/small-people.svg" alt="Edit Icon" />
                    </div>
                    <span class="font-normal text-[13px] pl-1">10 pers</span>
                </div>
                <div class="category-box font-normal text-[13px] bg-[#EE843625] text-black">
                    <span>Partageable si incomplets</span>
                </div>

            </div>
        </div>
        <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
            <div class="font-normal font-18px pt-1 pb-1">Résumé</div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Participants</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">5 personnes</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Date</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">08 Février 2024, 14:30</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Formules</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Étudiants, 5 personnes</div>
            </div>
            <div class="border-hr flex flex-row gap-[37px] justify-between pb-2"> 
                <div class="font-medium font-14px">Visibilité</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Réservation public / Acceptation Manuelle / Niveau: Débutant / Féminin</div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between "> 
                <div class="font-medium font-14px">Total</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">76 £</div>
            </div>
        </div>

    </div>
</template>

<script >
import ImageComponent from '../../ImageComponent.vue';
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