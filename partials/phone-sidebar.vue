<template>
  <div class="relative dropdown-container">

    <div class="w-full flex h-fit items-center pb-[20px] justify-center ">

      <div class="image-wrapper " @click="triggerFileInput">
        <ImageComponent :url="imageSrc" fit="cover" ratio="1-1" :overlay="false" alt="Image Alt Text"

                        class="avatar-image"/>
        <button @click.stop="triggerFileInput" class="edit-button">
          <img src="@/assets/svg/pen.svg" alt="Edit Icon"/>
        </button>

      </div>


    </div>

    <input type="file" ref="fileInput" @change="onFileChange" class="hidden"/>
    <!-- Selected option -->
    <!--    <div-->
    <!--        class="flex items-center justify-between px-4 py-2 border rounded cursor-pointer"-->
    <!--        @click="toggleDropdown"-->
    <!--    >-->

    <!--      <div class="flex items-center gap-3">-->
    <!--        <img :src="currentPage.icon" alt="Page Icon" class="w-5 h-5" />-->
    <!--        <span class="font-semibold font-14px">{{ currentPage.title }}</span>-->
    <!--      </div>-->
    <!--      <img src="@/assets/svg/arrow-down.svg" alt="Dropdown Icon" class="w-4 h-4" />-->

    <!--    </div>-->

    <div class="flex flex-row justify-between items-center bg-[#F8F8F8] border rounded-[10px] p-[10px]">

      <div @click="toggleDropdown" class="flex items-center gap-3 flex-row flex-1"
           :class="{ 'opacity-50': $route.path !== currentPage.path }">

        <div
            :class="{ 'active-icon text-center text-white': $route.path === currentPage.path, 'not-active-icon': $route.path !== currentPage.path }"
            class="font-semibold font-14px margin-none">
          <img :src="currentPage.icon" alt="Edit Icon"/>
        </div>

        <div class="font-semibold font-14px ">{{ currentPage.title }}</div>

      </div>

      <img
          src="@/assets/svg/arrow-up.svg"
          :class="isOpen ? 'rotate-180' : ''"
          class="transition-transform duration-300"
          alt="Arrow Icon"
      />


    </div>


    <!-- Dropdown menu -->
    <div
        v-if="isOpen"
        class="absolute left-0 w-full rounded-[10px] mt-2 bg-white border shadow-lg z-50"
    >
      <div
          v-for="(page, index) in pages"
          :key="index"
          :class="{'bg-[#F8F8F8]' : $route.path === page.path }"
          class="flex items-center px-[10px] border-b py-2 gap-3 cursor-pointer hover:bg-gray-100"
          @click="navigateToPage(page)"
      >

        <div
            :class="{ 'active-icon text-center text-white ': $route.path === page.path, 'not-active-icon': $route.path !== page.path }"
            class="font-semibold margin-none font-14px">

          <img :src="page.icon" alt="Edit Icon"/>

        </div>

        <span class="font-semibold font-14px">{{ page.title }}</span>


      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";
import smallList from "@/assets/svg/small-bell.svg";
import smallAvatar from "@/assets/svg/small-avatar.svg";
import smallHeart from "@/assets/svg/small-heart.svg";
import smallBell from "@/assets/svg/small-bell.svg";
import smallCalender from "@/assets/svg/small-calender.svg";
import smallLogout from "@/assets/svg/small-logout.svg";
import defaultImage from '@/assets/svg/white-avatar.svg';
import {usePersistStore} from "~/stores/index.js";

const store = usePersistStore();


const router = useRouter();
const route = useRoute();
const isOpen = ref(false);
const fileInput = ref(null);

const imageSrc = defaultImage;

const pages = ref([
  {
    title: "Détails du profil",
    icon: smallAvatar,
    path: "/account/profile",
  },
  {
    title: "Mes favoris",
    icon: smallHeart,
    path: "/account/favorite",
  },
  {
    title: "Mes alertes créées",
    icon: smallBell,
    path: "/account/alerts",
  },
  {
    title: "Mes activités créées",
    icon: smallCalender,
    path: "/account/activities",
  },
  {
    title: "Mes réservations",
    icon: smallList,
    path: "/account/reservations",
  },
  {
    title: "Se déconnecter",
    icon: smallLogout,
    path: "/account/logout",
  },
]);

const currentPage = ref(
    pages.value.find((page) => page.path === route.path) || pages.value[0]
);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const navigateToPage = (page) => {

  if (page.title !== 'Se déconnecter') {
    currentPage.value = page;
    isOpen.value = false;
    router.push(page.path);
  } else {
    store.setLogoutTrue(true)
  }
};

function triggerFileInput() {
  this.$refs.fileInput.click();
}

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}


</script>

<style scoped>
.dropdown-container {
  width: 100%;
}

.shadow-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hover\:bg-gray-100:hover {
  background-color: #f5f5f5;
}

.margin-none {
  margin-left: 0 !important;
}

.image-wrapper {
  position: relative;
  width: 130px;
}

.avatar-image {
  background-color: #e77e22;


  @apply rounded-full
}

.edit-button {
  position: absolute;
  bottom: 10px;
  right: 0;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 7px #00000012;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}


</style>
