<template>
    <div class="mx-auto w-full">

        <div class="overflow-x-auto w-full">

            <table class="min-w-[860px] w-full bg-white border-separate border-spacing-y-3 border border-transparent rounded-lg">

                <thead>
                    <tr class="bg-[#F7F7F7]">
                        <th class="py-2 px-4 border-l border-y border-[#00000026] text-left rounded-l-[10px]">Nom</th>
                        <th class="py-2 px-4 border-y border-[#00000026] text-left">Nombre de personnes</th>
                        <th class="py-2 px-4 border-y border-[#00000026] text-left ">
                            Réponse</th>
                        <th class="py-2 px-4 border-y border-r border-[#00000026] text-left rounded-r-[10px]">Date
                            inscription</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(row, index) in rows" :key="index" class="bg-white">
                        <td
                            class="py-2 bg-[#F7F7F7] px-4 border-l border-y border-[#00000026] text-left rounded-l-[10px] flex flex-row gap-4 items-center">
                            <div class="w-[2.5rem] h-[2.5rem] bg-[#DBDBDB] rounded-full flex items-center justify-center">
                    <ImageComponent :url="row.image" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text"
                        class="profile-pic" />
                </div>
                       
                            <div class="font-normal font-14px">{{ row.name }} - {{ row.age }} ans</div>

                        </td>
                        <td class="py-2 bg-[#F7F7F7] px-4 border-y border-[#00000026] text-left">{{ row.people }}</td>
                        <td class="py-2 bg-[#F7F7F7] px-4 border-y border-[#00000026] text-left">
                            <div v-if="row.attente" class="bg-[#E0F0E1] font-14px text-[#13AC1E] rounded-[29px] px-4 py-1 inline-block">En attente
                            </div>
                            <div v-else class="bg-[#F6E4E5] text-[#FF0000] font-14px rounded-[29px] px-4 py-1 inline-block">Non-intéressé
                            </div>
                        </td>
                        <td class="py-2 bg-[#F7F7F7] px-4 border-y border-r border-[#00000026] text-left rounded-r-[10px]">
                            {{ row.date }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>
  
<script setup>

const rows = [
    {
        image: '/images/profilepic.png',
        name: 'Johnny Doe',
        age: 23,
        attente: false,
        people: 5,
        date: '10-7-2024',
    },

    {
        image: '/images/profilepic.png',
        name: 'Johnny Doe',
        age: 23,
        attente: false,
        people: 1,
        date: '10-7-2024',
    },

    {
        image: '/images/profilepic.png',
        name: 'Johnny Doe',
        age: 23,
        attente: true,
        people: 1,
        date: '10-7-2024',
    },

    {
        image: '/images/profilepic.png',
        name: 'Johnny Doe',
        age: 23,
        attente: true,
        people: 1,
        date: '10-7-2024',
    },

];


</script>
  
<style>
.bg-beige {
    background-color: #f3e1d6;
}
</style>
  