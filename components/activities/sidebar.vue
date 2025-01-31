<template>
    <div>
        <div class="flex items-center gap-7 p-7 pb-8 border-hr">
            <div class="relative">
                <div
                    class="w-[4.5rem] h-[4.5rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
                    <img src="@/assets/svg/large-building.svg" alt="Edit Icon" />
                </div>
                <div class="absolute top-[0px] right-[-4px]">
                    <img src="@/assets/svg/large-verify-icon.svg" alt="Edit Icon" />
                </div>
            </div>
            <div class="flex flex-col justify-between gap-3 pt-2">
                <div class="font-normal text-[13.5px]  text-white">
                    <span class="bg-[#7CB780] px-4 py-[5px] rounded-[18px]">Partenaire</span>
                </div>
                <div class="font-semibold font-18px">Complexe Stadio Pizzeria</div>
            </div>
        </div>
        <div class="p-7 pt-8 border-hr">
            <div class="flex flex-row gap-3 items-center mb-4">
                <div class="font-semibold font-14px colored-icon text-center text-white">
                    <img src="@/assets/svg/colored-phone.svg" alt="Edit Icon" />
                </div>
                <div>+33 (6) 86 57 90 14</div>
            </div>
            <div class="flex flex-row gap-3 items-center pt-3">
                <div class="font-semibold font-14px colored-icon text-center text-white">
                    <img src="@/assets/svg/colored-location.svg" alt="Edit Icon" />
                </div>
                <div>20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
            </div>
        </div>
        <div class="p-7">
            <div class="font-semibold font-14px pb-6">Conditions et paiement</div>
            <div class="flex flex-row items center gap-3 pb-6">
                <img src="@/assets/svg/credit.svg" alt="Edit Icon" />
                <div class="font-normal text-[12px]"> Paiement sur place ou en ligne (totalité ou acompte de 50%)</div>
            </div>
            <div class="flex flex-row items center gap-3">
                <img src="@/assets/svg/close.svg" alt="Edit Icon" />
                <div class="font-normal text-[12px]">Annulation gratuite jusqu’à 48 heures avant la date de l’activité</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>