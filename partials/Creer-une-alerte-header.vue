<template>
  <div class="mt-5">
    <div class="pt-7 pb-4 font-semibold text-[26px] text-center lg:px-0 px-2">Créer une alerte</div>
    <div class="font-normal text-[13px] center-to-start  pb-10 lg:px-0 ">
      Afin de recevoir des propositions pour compléter des réservations selon vos disponibilités
    </div>

    <div class="pt-0 flex flex-row overflow-scroll justify-between items-center gap-7 mb">

      <div class="flex justify-center gap-2 flex-row flex-1 tab">
        <button :disabled="$route.path !== '/Creer-une-alerte/premiere-etape'"
                class="flex justify-center items-center gap-2 flex-row flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-alerte/premiere-etape', 'not-active-num': $route.path !== '/Creer-une-alerte/premiere-etape' }"
              class="font-semibold font-14px">1
          </div>
          <div class="font-semibold font-14px">Activité</div>
        </button>
      </div>
      <div class="flex justify-center gap-2 flex-row flex-1 tab">
        <button :disabled="$route.path !== '/Creer-une-alerte/deuxieme-etape'"
                class="flex justify-center items-center gap-2 flex-row flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-alerte/deuxieme-etape', 'not-active-num': $route.path !== '/Creer-une-alerte/deuxieme-etape' }"
              class="font-semibold font-14px">2
          </div>
          <div class="font-semibold font-14px">Lieu</div>
        </button>
      </div>
      <div class="flex justify-center gap-2 flex-row flex-1 tab">
        <button :disabled="$route.path !== '/Creer-une-alerte/troisieme-etape'"
                class="flex justify-center items-center gap-2 flex-row flex-1">
          <div
              :class="{ 'active-num text-center text-white': $route.path === '/Creer-une-alerte/troisieme-etape', 'not-active-num': $route.path !== '/Creer-une-alerte/troisieme-etape' }"
              class="font-semibold font-14px">3
          </div>
          <div class="font-semibold font-14px">Dates</div>
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

<style>
.mb {
  @apply mb-10;
}
</style>