<template>
  <div class="cursor-pointer w-[35px] h-[35px] relative">
    <img class="w-full h-full" @click.stop="toggleClicked" v-if="!clicked" src="assets/svg/modifire-one.svg" alt="">
    <img class="w-full h-full"  @click.stop="toggleClicked" v-if="clicked" src="assets/svg/modifier-two.svg" alt="">

    <div v-if="clicked" @click.stop="toggleClicked"
         class="absolute top-[120%] right-0 border overflow-hidden bg-white rounded-[10px] w-[155px] h-fit min-h-[50px]">
      <div class="border-b w-full h-[50px] hover:bg-[#EDEDED] flex justify-center items-center">
        <p class="font-14px">Activer/Desactiver</p>
      </div>
      <div class="w-full h-[50px] hover:bg-[#EDEDED] flex justify-center items-center">
        <p class="font-14px">Supprimer</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineEmits, onMounted} from 'vue';

const clicked = ref(false);
const emit = defineEmits(['update:clicked']);

function toggleClicked() {
  clicked.value = !clicked.value;
  emit('update:clicked', clicked.value);
}

function resetCliked() {
  clicked.value = false
}

onMounted(() => {
  document.addEventListener('click', resetCliked);
});

onUnmounted(() => {
  document.removeEventListener('click', resetCliked);
});

</script>
