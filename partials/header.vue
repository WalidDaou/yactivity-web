<template>


  <div class="header flex flex-col fixed-header " :class="isMenuOpen ? 'full-header' : ''">

    <div class="main-container items-center h-fit flex flex-row gap-4 justify-between py-5" ref="headerContent">

      <NuxtLink to="/">
        <img class="header-logo" src="@/assets/svg/logo.svg" alt="Icon"/>
      </NuxtLink>
      <div class="hiddenXlShow" v-if="!isLoginRoute">

        <FormSearch/>

      </div>


      <div class="flex flex-row relative gap-3 h-full items-center">

        <div class="flex items-center justify-center h-[50px]  font-14px uppercase text-white cursor-pointer"
             :class="{ 'btn-shadow': isButtonOpen, 'search-button': !isButtonOpen }" @click="toggleButton">

          <div class="w-full h-full flex items-center justify-center ">
            <p>
              CRÉER &nbsp;
            </p>

          </div>

          <img v-if="!isButtonOpen" src="@/assets/svg/arrow-down.svg" alt="Icon"/>
          <img v-else src="@/assets/svg/arrow-up.svg" alt="Icon"
               :style="{ transform: 'rotate(180deg)' }"/>

        </div>

        <div class="menu-button relative flex flex-row gap-3 cursor-pointer h-full min-w-[28px] w-fit "
             :class="{ 'menu-shadow': isMenuOpen }"
             @click="toggleMenu">

          <div class="w-[28px] min-w-[28px] h-full flex items-center justify-center">
            <img class='w-[28px] h-fit' src="@/assets/svg/menu.svg" alt="Icon"/>
          </div>

          <div class="avatar hiddenLgShow">
            <img src="@/assets/svg/avatar.svg" alt="Icon"/>
          </div>


        </div>

        <!--        <div v-if="!userLogin" class="menu flex flex-col" v-show="isMenuOpen" >-->
        <!--          <NuxtLink to="/auth/login" class="font-normal h-[35px] font-14px">-->
        <!--            Login-->
        <!--          </NuxtLink>-->
        <!--        </div>-->

        <div v-show="isMenuOpen"
             v-if="!userLogin"
             style="top: 160%;"
             class="absolute hiddenLgShow right-0 shadow border overflow-hidden w-full rounded-[10px] h-fit min-h-[50px] bg-white">

          <nuxt-link href="/auth/login"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <div class="font-14px">Login</div>
          </nuxt-link>

        </div>


        <div v-show="isMenuOpen"
             v-if="userLogin"
             style="top: 160%;"
             class="absolute z-[1000] hiddenLgShow right-0 shadow border overflow-hidden w-full rounded-[10px] h-fit min-h-[50px]  bg-white">

          <nuxt-link href="/notifications"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Notifications</p>
          </nuxt-link>

          <nuxt-link to="/account/profile"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Details du profil</p>
          </nuxt-link>

          <nuxt-link to="/account/favorite"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Mes favoris</p>
          </nuxt-link>

          <nuxt-link to="/account/alerts"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Mes alertes créées</p>
          </nuxt-link>

          <nuxt-link to="/account/activities"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Mes activités créées</p>
          </nuxt-link>

          <nuxt-link to="/account/reservations"
                     class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Mes réservations</p>
          </nuxt-link>


          <div @click="store.setLogoutTrue(true)"
               class=" w-full h-[50px]  hover:bg-[#EDEDED] flex  items-center px-[20px]">
            <p class="font-14px">Se déconnecter</p>
          </div>


        </div>

        <div class="btn-menu left-[-10px] lg:right-0 flex flex-col" v-show="isButtonOpen" @click="handleButtonClick">

          <NuxtLink to="/Creer-une-activite/premiere-etape" class="font-normal font-14px border-bottom-btn px-5 pb-3">
            Créer et publier mon activité
          </NuxtLink>

          <NuxtLink to="/Creer-une-alerte/premiere-etape" class="font-normal font-14px px-5 pt-3">
            Créer une alerte selon mes disponibilités
          </NuxtLink>

        </div>


      </div>


    </div>

    <div class="main-container  h-full flex flex-col gap-[10px]">

      <ResponsiveSearchForm v-if="!isLoginRoute"/>


      <div v-if="!userLogin && isMenuOpen" class=" w-full showLgHidden">
        <nuxt-link href="/auth/login"
                   class="border-b flex w-full text-white  h-[50px] hover:bg-[#EDEDED] btn-form  items-center px-[20px]">
          Login
        </nuxt-link>
      </div>


      <div
          v-if="userLogin  && isMenuOpen"
          style="top: 160%;"
          class=" z-[800] h-full showLgHidden  overflow-hidden w-full rounded-[10px]  min-h-[50px]  bg-white">


        <div class="flex flex-row gap-[15px] items-center py-[20px]">
          <img src="assets/svg/JD.svg" alt="">
          <p>Johnny Doe</p>
        </div>


        <nuxt-link href="/notifications" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Notifications</p>
        </nuxt-link>

        <nuxt-link to="/account/profile" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Details du profil</p>
        </nuxt-link>

        <nuxt-link to="/account/favorite" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Mes favoris</p>
        </nuxt-link>

        <nuxt-link to="/account/alerts" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Mes alertes créées</p>
        </nuxt-link>

        <nuxt-link to="/account/activities" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Mes activités créées</p>
        </nuxt-link>

        <nuxt-link to="/account/reservations" class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Mes réservations</p>
        </nuxt-link>

        <div @click="store.setLogoutTrue(true)" class=" w-full h-[50px]  hover:bg-[#EDEDED] flex  items-center">
          <p class="font-14px">Se déconnecter</p>
        </div>


      </div>


    </div>


  </div>


</template>

<script setup>
import {usePersistStore} from '~/stores/index.js';

const store = usePersistStore();
const userLogin = ref(true);

</script>

<script>
import InputWithIcon from '@/components/inputs/TextInput.vue';
import DateWithIcon from '@/components/inputs/DateInput.vue';
import CounterInput from '@/components/inputs/CounterInput.vue';

import searchIcon from '@/assets/svg/search.svg';
import addressIcon from '@/assets/svg/address.svg';
import dateIcon from '@/assets/svg/date.svg';
import peopleIcon from '@/assets/svg/people.svg';
import FormSearch from '../components/forms/SearchForm.vue';
import {usePersistStore} from '~/stores/index.js';
import ResponsiveSearchForm from "~/components/forms/ResponsiveSearchForm.vue";

export default {
  components: {
    ResponsiveSearchForm,
    InputWithIcon,
    DateWithIcon,
    CounterInput,
    FormSearch,
  },
  data() {
    return {
      searchIcon,
      addressIcon,
      dateIcon,
      peopleIcon,
      isMenuOpen: false,
      isButtonOpen: false,
    };
  },
  computed: {
    isLoginRoute() {
      return this.$route.path === '/activities';
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  unmounted() { // Correct lifecycle hook for Vue 3
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    handleLinkClick() {
      this.isMenuOpen = false;
    },
    handleButtonClick() {
      this.isButtonOpen = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      this.isButtonOpen = false;
    },
    toggleButton() {
      this.isButtonOpen = !this.isButtonOpen;
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      const headerContent = this.$refs.headerContent;
      if (headerContent && !headerContent.contains(event.target)) {
        this.isMenuOpen = false;
        this.isButtonOpen = false;
      }
    },
  },
  setup() {
    const store = usePersistStore();
    const userLogin = ref(true);

    return {
      userLogin,
    };
  },
};
</script>


<style scoped>


.menu {
  position: absolute;
  z-index: 999;
  transform: translateX(0%) translateY(110%);
  padding: 14px 0px 14px 25px;
  width: 213px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000012;
  border: 1px solid #0000001A;
  border-radius: 10px;
}

.btn-menu {

  @apply top-0 left-[26px];
  position: absolute;
  z-index: 999;
  width: 200%;
  max-width: 308px;
  transform: translateX(-61%) translateY(82%);
  padding: 14px 0px 14px 0px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #00000012;
  border: 1px solid #0000001A;
  border-radius: 10px;

}

.fixed-header {

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

}


</style>
