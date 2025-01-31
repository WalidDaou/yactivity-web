<template>
  <div class="mt-5">
    <div class="pt-7 pb-4 font-semibold text-[26px] text-center lg:px-0 px-2">Créer une activité</div>

    <div class="font-normal font-14px center-to-start pb-10 lg:px-0 ">
      Permet de créer et proposer une activité aux utilisateurs de l’application et/ou à votre entourage.
    </div>


    <div class="pt-0 flex flex-row overflow-scroll justify-between items-center gap-7 pb-10">

      <div class="flex justify-center gap-2 flex-row w-full  tab">
        <button :disabled="$route.path !== '/Creer-une-activite/premiere-etape'"
                class="flex justify-center items-center gap-2 flex-row min-w-[160px]  flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-activite/premiere-etape', 'not-active-num': $route.path !== '/Creer-une-activite/premiere-etape' }"
              class="font-semibold font-14px">1
          </div>
          <div class="font-semibold font-14px">Activité</div>
        </button>
      </div>

      <div class="flex justify-center gap-2 flex-row w-full min-w-[160px] tab">
        <button :disabled="$route.path !== '/Creer-une-activite/deuxieme-etape'"
                class="flex justify-center items-center gap-2 flex-row min-w-[160px] flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-activite/deuxieme-etape', 'not-active-num': $route.path !== '/Creer-une-activite/deuxieme-etape' }"
              class="font-semibold font-14px">2
          </div>
          <div class="font-semibold font-14px">Dates</div>
        </button>
      </div>

      <div class="flex justify-center gap-2 flex-row w-full min-w-[160px] tab">
        <button :disabled="$route.path !== '/Creer-une-activite/troisieme-etape'"
                class="flex justify-center items-center gap-2 flex-row min-w-[160px] flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-activite/troisieme-etape', 'not-active-num': $route.path !== '/Creer-une-activite/troisieme-etape' }"
              class="font-semibold font-14px">3
          </div>
          <div class="font-semibold font-14px">Visibilité</div>
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>