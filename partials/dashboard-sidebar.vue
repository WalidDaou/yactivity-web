<template>
  <div class="">

    <div class="image-upload-container pb-10">

      <div class="image-wrapper" @click="triggerFileInput">
        <ImageComponent :url="imageSrc" fit="cover" ratio="2-1" :overlay="false" alt="Image Alt Text"

                        class="avatar-image"/>
        <button @click.stop="triggerFileInput" class="edit-button">
          <img src="@/assets/svg/pen.svg" alt="Edit Icon"/>
        </button>
      </div>

      <input type="file" ref="fileInput" @change="onFileChange" class="hidden"/>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4">
      <NuxtLink to="/account/profile" class="flex items-center gap-3 flex-row flex-1"
                :class="{ 'opacity-50': $route.path !== '/account/profile' }">
        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/profile', 'not-active-icon': $route.path !== '/account/profile' }"
            class="font-semibold font-14px">
          <img src="@/assets/svg/small-avatar.svg" alt="Edit Icon"/>
        </div>
        <div class="font-semibold font-14px ">Détails du profil</div>
      </NuxtLink>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4">
      <NuxtLink to="/account/favorite" class="flex items-center gap-3 flex-row flex-1"
                :class="{ 'opacity-50': $route.path !== '/account/favorite' }">
        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/favorite', 'not-active-icon': $route.path !== '/account/favorite' }"
            class="font-semibold font-14px">
          <img src="@/assets/svg/small-heart.svg" alt="Edit Icon"/>
        </div>
        <div class="font-semibold font-14px ">Mes favoris</div>
      </NuxtLink>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4">
      <NuxtLink to="/account/alerts" class="flex items-center gap-3 flex-row flex-1"
                :class="{ 'opacity-50': $route.path !== '/account/alerts' }">
        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/alerts', 'not-active-icon': $route.path !== '/account/alerts' }"
            class="font-semibold font-14px">
          <img src="@/assets/svg/small-bell.svg" alt="Edit Icon"/>
        </div>
        <div class="font-semibold font-14px ">Mes alertes créées</div>
      </NuxtLink>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4">
      <NuxtLink to="/account/activities" class="flex items-center gap-3 flex-row flex-1"
                :class="{ 'opacity-50': $route.path !== '/account/activities' }">
        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/activities', 'not-active-icon': $route.path !== '/account/activities' }"
            class="font-semibold font-14px">
          <img src="@/assets/svg/small-calender.svg" alt="Edit Icon"/>
        </div>
        <div class="font-semibold font-14px ">Mes activités créées</div>
      </NuxtLink>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4">
      <NuxtLink to="/account/reservations" class="flex items-center gap-3 flex-row flex-1"
                :class="{ 'opacity-50': $route.path !== '/account/reservations' }">
        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/reservations', 'not-active-icon': $route.path !== '/account/reservations' }"
            class="font-semibold font-14px">
          <img src="@/assets/svg/small-list.svg" alt="Edit Icon"/>
        </div>
        <div class="font-semibold font-14px ">Mes réservations</div>
      </NuxtLink>

    </div>

    <div class="flex gap-2 flex-row flex-1 tab mb-4 cursor-pointer">

      <div class="flex items-center gap-3 flex-row flex-1"
           :class="{ 'opacity-50': $route.path !== '/account/logout' }"
           @click="store?.setLogoutTrue(true) "
      >

        <div
            :class="{ 'active-icon text-center text-white': $route.path === '/account/logout', 'not-active-icon': $route.path !== '/account/logout' }"
            class="font-semibold font-14px">

          <img src="@/assets/svg/small-logout.svg" alt="Edit Icon"/>
        </div>

        <div class="font-semibold font-14px ">Se déconnecter</div>

      </div>

    </div>


























  </div>


</template>

<script setup>
import {ref} from 'vue';
import defaultImage from '@/assets/svg/white-avatar.svg';
import ImageComponent from '../components/ImageComponent.vue';
import {usePersistStore} from '~/stores/index.js';

const store = usePersistStore();

const imageSrc = ref(defaultImage);
const isOpen = ref(false);

const triggerFileInput = () => {
  // Trigger file input click
  fileInput.value.click();
};

const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imageSrc.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const fileInput = ref(null); // Create a reference for the file input element
</script>


<style scoped>
.image-upload-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
}

.image-wrapper {
  position: relative;
}

.avatar-image {
  background-color: #e77e22;
  width: 160px;
  height: 160px;
  @apply rounded-full
}

.edit-button {
  position: absolute;
  bottom: 10px;
  right: 5px;
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

.hidden {
  display: none;
}</style>



