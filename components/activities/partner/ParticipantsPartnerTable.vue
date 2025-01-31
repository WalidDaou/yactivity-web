<template>
  <div class="mx-auto">
    <div class="overflow-x-auto">

      <div
          class="min-w-[860px]  flex flex-col gap-[10px] bg-white border-separate border-spacing-y-3 border border-transparent rounded-lg">

        <div>
          <div class="bg-[#F7F7F7] flex flex-row mb-[10px] overflow-hidden rounded-[10px]">
            <div class="w-full py-2 px-4 border-l border-y border-[#00000026] text-left rounded-l-[10px]">Nom</div>
            <div class="w-full py-2 px-4 border-y border-[#00000026] text-left">Nombre de personnes</div>
            <div class="w-full py-2 px-4 border-y border-r border-[#00000026] text-left rounded-r-[10px]">Date
              inscription
            </div>
          </div>
        </div>


        <div v-for="(row, index) in rows" :key="index"
             class=" w-full flex flex-col border-[#00000026] border-[1px] rounded-[10px] bg-[#F7F7F7] h-fit ">

          <div class="flex flex-row w-full ">

            <div
                class="w-full py-2 bg-[#F7F7F7] px-4  text-left rounded-l-[10px] flex flex-row gap-4 items-center">

              <div class="w-[2.5rem] h-[2.5rem] bg-[#DBDBDB] rounded-full flex items-center justify-center">
                <ImageComponent :url="row.image" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text"
                                class="profile-pic"/>
              </div>

              <div class="font-normal font-14px">{{ row.name }} - {{ row.age }} ans</div>
              <div v-if="row.creator" class="bg-[#F6EBE4] font-14px rounded-[29px] px-2 py-1 inline-block">Créateur
              </div>

              <div v-if="!row.confirmed"
                   class="text-[#FFA500] bg-[#FFA500] bg-opacity-[0.15] font-14px rounded-[29px] px-2 py-1 text-nowrap inline-block">
                À confirmer
              </div>

            </div>

            <div class="w-full py-2 bg-[#F7F7F7] px-4  text-left">{{ row.people }}</div>
            <div class="w-full py-2 bg-[#F7F7F7] px-4  text-left rounded-r-[10px]">
              {{ row.date }}
            </div>

          </div>

          <div v-if="!row.confirmed" class="flex flex-row w-full margin-auto gap-[20px] pl-[65px] pb-[10px] pt-[20px]">

            <button class="btn-main">
              Accepter
            </button>

            <button class="btn-main-white">
              refuser
            </button>

          </div>


        </div>

      </div>

    </div>


  </div>
</template>

<script setup>
const rows = [
  {
    image: '/images/profilepic.png',
    name: 'Johnny Doe',
    age: 23,
    creator: true,
    people: 5,
    date: '10-7-2024',
    confirmed: true
  },
  {
    image: '/images/profilepic.png',
    name: 'Johnny Doe',
    age: 23,
    creator: false,
    people: 1,
    date: '10-7-2024',
    confirmed: false
  },
  {
    image: '/images/profilepic.png',
    name: 'Johnny Doe',
    age: 23,
    creator: false,
    people: 1,
    date: '10-7-2024',
    confirmed: true
  },
  {
    image: '/images/profilepic.png',
    name: 'Johnny Doe',
    age: 23,
    creator: false,
    people: 1,
    date: '10-7-2024',
    confirmed: true
  },
];
</script>

<style>
.bg-beige {
  background-color: #f3e1d6;
}
</style>
