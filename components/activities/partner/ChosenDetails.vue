<template>
    <div>
        <div class="pt-5 pb-8 px-4 border-hr">
            <div class="flex flex-row gap-2 items-center pb-5">
                    <div class="font-normal text-[13.5px]  text-[#13AC1E]">
                    <span class="bg-[#DAEADB] px-4 py-[5px] rounded-[18px]">Confirmée</span>
                </div>
                </div>
            <div class="font-semibold font-14px pb-5"> Détails de l’activité </div>
            <div class="flex gap-2 pb-5">
                <div class="level-box font-normal text-[13px] bg-[#FDF2EB] text-black">
                    <span>Masculin</span>
                </div>
                <div class="level-box font-normal text-[13px] bg-[#FDF2EB] text-black">
                    <span>Expert</span>
                </div>
                <div class="level-box font-normal text-[13px] bg-[#F0DEDF] text-[#FF0000]">
                    <span>5 Places restantes / 10</span>
                </div>
            </div>
           
            <div class="flex flex-row gap-3 items-center pt-3">
                <div class="font-semibold font-14px colored-icon text-center text-white">
                    <img src="@/assets/svg/colored-location.svg" alt="Edit Icon" />
                </div>
                <div>20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
            </div>

            <div class="flex flex-row gap-2 pt-10 justify-between ">
                <div class="flex rounded-[10px] w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
                    <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
                        <img src="@/assets/svg/calender-small.svg" alt="Edit Icon" />
                    </div>
                    <div class="font-normal font-14px text-center">Jan 10, 2024</div>
                </div>
                <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
                    <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
                        <img src="@/assets/svg/colored-clock.svg" alt="Edit Icon" />
                    </div>
                    <div class="font-normal font-14px text-center">13:00</div>
                </div>
                <div class="flex rounded-[10px]  w-100 py-2 flex-col items-center justify-center gap-2 bg-[#FCEADD]">
                    <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
                        <img src="@/assets/svg/colored-time.svg" alt="Edit Icon" />
                    </div>
                    <div class="font-normal font-14px text-center">90 minutes</div>
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
                <div class="font-medium font-14px">Formules</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">Étudiants, 5 personnes</div>
            </div>
            <div class="flex flex-row gap-[37px] justify-between "> 
                <div class="font-medium font-14px">Total</div>
                <div class="font-semibold font-14px text-[#EE8436] text-end">76 £</div>
            </div>
        </div>
       
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>