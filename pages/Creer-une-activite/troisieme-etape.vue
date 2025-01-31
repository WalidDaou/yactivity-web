<template>
  <div class="main-container">

    <CreerUneActiviteHeaderVue/>

    <form class="activity-form pt-1">

      <div class="pt-3 pb-5 font-semibold font-20px text-center lg:px-0 px-2">Visibilité de votre réservation</div>

      <div class="flex flex-row justify-between gap-4 lg:gap-7 w-100 pb-10">

        <div :class="{ 'custom-radio': isChecked2, 'normal-radio': !isChecked2 }" class="w-50">
          <label class="flex flex-row item-center gap-2 font-normal text-[15px]">
            <input type="radio" name="Privée" value="Privée" v-model="selectedRadio2"/>
            Privée
            <div class="tooltip">
              <img src="@/assets/svg/question-icon.svg" alt="Icon" class="mt-2px"/>
              <span class="tooltiptext font-normal text-[13px]">
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
            </div>
          </label>
        </div>


        <div :class="{ 'custom-radio': !isChecked2, 'normal-radio': isChecked2 }" class="w-50">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="public" value="public" v-model="selectedRadio2"/>
            Public
            <div class="tooltip">
              <img src="@/assets/svg/question-icon.svg" alt="Icon" class="mt-2px"/>
              <span class="tooltiptext font-normal text-[13px]">
                  Lorem ipsum dolor sit amet, consectetur adiping elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </span>
            </div>
          </label>
        </div>

      </div>

      <div class="pt-3 pb-5 font-semibold font-20px text-center lg:px-0 px-2">Mode d’acceptation</div>

      <div class="flex flex-row justify-between gap-4 lg:gap-7 w-100 pb-10">

        <div :class="{ 'custom-radio': isChecked, 'normal-radio': !isChecked }" class="w-50">
          <label class="flex flex-row item-center gap-2 font-normal text-[15px]">
            <input type="radio" name="gratuite" value="gratuite" v-model="selectedRadio"/>
            Automatique
          </label>
        </div>

        <div :class="{ 'custom-radio': !isChecked, 'normal-radio': isChecked }" class="w-50">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="payante" value="payante1" v-model="selectedRadio"/>
            Manuelle
          </label>
        </div>

      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-5 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Réservée à un niveau particulier?
        </div>
        <label class="switchSmall m5">
          <input type="checkbox"/>
          <small></small>
        </label>
      </div>

      <!--        <div class="flex flex-row justify-between gap-7 w-100 pb-10">-->

      <!--          <div :class="{ 'custom-radio': isCheckedBox, 'normal-radio': !isCheckedBox }" class="w-25 flex flex-row gap-3" @click="toggleCheckbox">-->
      <!--            <div @click.stop class="flex items-center">-->
      <!--              <input type="checkbox" id="customCheckbox1" class="hidden-checkbox" v-model="isCheckedBox" />-->
      <!--              <label for="customCheckbox1" class="custom-checkbox-label"></label>-->
      <!--            </div>-->
      <!--            <div class="font-normal font-14px">Débutant</div>-->
      <!--          </div>-->


      <!--          <div :class="{ 'custom-radio': isCheckedBox2, 'normal-radio': !isCheckedBox2 }" class="w-25 flex flex-row gap-3" @click="toggleCheckbox2">-->
      <!--            <div @click.stop class="flex items-center">-->
      <!--              <input type="checkbox" id="customCheckbox2" class="hidden-checkbox" v-model="isCheckedBox2" />-->
      <!--              <label for="customCheckbox2" class="custom-checkbox-label"></label>-->
      <!--            </div>-->
      <!--            <div class="font-normal font-14px">Bon</div>-->
      <!--          </div>-->

      <!--          <div :class="{ 'custom-radio': isCheckedBox3, 'normal-radio': !isCheckedBox3 }" class="w-25 flex flex-row gap-3" @click="toggleCheckbox3">-->
      <!--            <div @click.stop class="flex items-center">-->
      <!--              <input type="checkbox" id="customCheckbox3" class="hidden-checkbox" v-model="isCheckedBox3" />-->
      <!--              <label for="customCheckbox3" class="custom-checkbox-label"></label>-->
      <!--            </div>-->
      <!--            <div class="font-normal font-14px">Très Bon</div>-->
      <!--          </div>-->

      <!--          <div :class="{ 'custom-radio': isCheckedBox4, 'normal-radio': !isCheckedBox4 }" class="w-25 flex flex-row gap-3" @click="toggleCheckbox4">-->
      <!--            <div @click.stop class="flex items-center">-->
      <!--              <input type="checkbox" id="customCheckbox4" class="hidden-checkbox" v-model="isCheckedBox4" />-->
      <!--              <label for="customCheckbox4" class="custom-checkbox-label"></label>-->
      <!--            </div>-->
      <!--            <div class="font-normal font-14px">Expert</div>-->
      <!--          </div>-->

      <!--        </div>-->

      <div class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 lg:gap-7 w-100 pb-10">


        <div :class="{ 'custom-radio': isCheckedBox, 'normal-radio': !isCheckedBox }" class="w-full flex flex-row gap-3"
             @click="toggleCheckbox">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox1" class="hidden-checkbox" v-model="isCheckedBox"/>
            <label for="customCheckbox1" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Débutant</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox2, 'normal-radio': !isCheckedBox2 }"
             class="w-full flex flex-row gap-3"
             @click="toggleCheckbox2">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox2" class="hidden-checkbox" v-model="isCheckedBox2"/>
            <label for="customCheckbox2" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Bon</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox3, 'normal-radio': !isCheckedBox3 }"
             class="w-full flex flex-row gap-3"
             @click="toggleCheckbox3">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox3" class="hidden-checkbox" v-model="isCheckedBox3"/>
            <label for="customCheckbox3" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Très Bon</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox4, 'normal-radio': !isCheckedBox4 }"
             class="w-full flex flex-row gap-3"
             @click="toggleCheckbox4">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox4" class="hidden-checkbox" v-model="isCheckedBox4"/>
            <label for="customCheckbox4" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Expert</div>
        </div>
      </div>


      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Réservée à un genre particulier?
        </div>
        <label class="switchSmall m5">
          <input type="checkbox"/>
          <small></small>
        </label>
      </div>

      <div class="flex flex-row justify-between gap-4 lg:gap-7 w-100 pb-10">

        <div :class="{ 'custom-radio': isChecked3, 'normal-radio': !isChecked3 }" class="w-50">
          <label class="flex flex-row item-center gap-2 font-normal text-[15px]">
            <input type="radio" name="masculin" value="masculin" v-model="selectedRadio3"/>
            Masculin
          </label>
        </div>

        <div :class="{ 'custom-radio': !isChecked3, 'normal-radio': isChecked3 }" class="w-50">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="feminin" value="feminin" v-model="selectedRadio3"/>
            Féminin
          </label>
        </div>

      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Adapté aux personnes handicapées
        </div>
        <label class="switchSmall m5">
          <input type="checkbox"/>
          <small></small>
        </label>
      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Compatible pour les enfants
        </div>
        <label class="switchSmall m5">
          <input type="checkbox"/>
          <small></small>
        </label>
      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Autres remarques
        </div>
        <label class="switchSmall m5">
          <input type="checkbox"/>
          <small></small>
        </label>
      </div>

      <TextAreaNormal name="" label="Description de l’activité*" placeholder="Description de l’activité*" class="pb-5"/>

      <div class="flex flex-row gap-2 text-center justify-center pt-7">
        <div class="flex items-center">
          <input type="checkbox" id="customCheckbox5" class="hidden-checkbox" v-model="isCheckedBox5"/>
          <label for="customCheckbox5" class="custom-checkbox-label"></label>
        </div>
        <div class="font-medium font-14px">
          J’accepte les
          <NuxtLink to="/policies/conditions-generales" class="underline">Conditions Générales</NuxtLink>
          de Yactivity *
        </div>
      </div>


      <div class="flex flex-col lg:flex-row items-center pt-14 w-100 justify-center gap-7  pb-72">

        <div class="flex justify-center w-full lg:w-fit">
          <button type="button"
                  @click="openModal"
                  class="btn-form text-white uppercase font-medium font-14px px-24 w-full lg:w-fit lg:mb-8 py-4">SUIVANT
          </button>
        </div>

        <NuxtLink to="/Creer-une-activite/deuxieme-etape"
                  class="underline tracking-[0.8px] text-[#EE8436] font-14px">
          RETOURNER
        </NuxtLink>


      </div>



      <CustomModal :isOpen="isModalOpen" title="Êtes-vous sure de vouloir quitter cette page?" @close="closeModal">
        <div class="mt-10 mb-5 flex justify-center gap-5">
          <div
              class="default-btn py-5 px-10 font-medium font-14px tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]"
              @click="closeModal">
            OUI
          </div>
          <div
              class="default-btn2 py-5 px-10 font-medium font-14px tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]"
              @click="closeModal">
            NON
          </div>
        </div>
      </CustomModal>




    </form>


  </div>
</template>

<script>
import selectInput from '~/components/inputs/selectInput.vue';
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-activite-header.vue';
import Input from '~/components/inputs/input.vue';
import TextAreaNormal from '~/components/inputs/TextAreaNormal.vue';
import locationInput from '~/components/inputs/locationInput.vue';
import CustomModal from '../../components/popup/DefaultPopup.vue';

export default {
  components: {
    CreerUneActiviteHeaderVue,
    selectInput,
    Input,
    TextAreaNormal,
    locationInput,
    CustomModal
  },
  data() {
    return {
      selectedActivityType: '',
      selectedRadio: 'gratuite',
      selectedRadio2: 'public',
      selectedRadio3: 'feminin',
      isCheckedBox: false,
      isCheckedBox2: false,
      isCheckedBox3: false,
      isCheckedBox4: false,
      isCheckedBox5: false,
      isModalOpen: false,
    };
  },
  computed: {
    isChecked() {
      return this.selectedRadio === 'gratuite';
    },
    isChecked2() {
      return this.selectedRadio2 !== 'public';
    },
    isChecked3() {
      return this.selectedRadio3 !== 'feminin';
    },
    checkboxClass() {
      return this.isCheckedBox ? 'custom-radio' : 'normal-radio';
    }
  },
  methods: {
    toggleCheckbox() {
      this.isCheckedBox = !this.isCheckedBox;
    },
    toggleCheckbox2() {
      this.isCheckedBox2 = !this.isCheckedBox2;
    },
    toggleCheckbox3() {
      this.isCheckedBox3 = !this.isCheckedBox3;
    },
    toggleCheckbox4() {
      this.isCheckedBox4 = !this.isCheckedBox4;
    },
    toggleCheckbox5() {
      this.isCheckedBox5 = !this.isCheckedBox5;
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style scoped>
[type="radio"] {
  accent-color: #EC6760;
  width: 25px;
}


.switchSmall {
  display: inline-block;
}

.switchSmall input {
  display: none;
}

.switchSmall small {
  display: inline-block;
  width: 55px;
  height: 35px;
  background: #1E394C;
  border-radius: 30px;
  position: relative;
  cursor: pointer;

}

.switchSmall small:before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  top: 5px;
  left: 7px;
  transition: .3s;
  box-shadow: -3px 0 3px rgba(0, 0, 0, 0.1);
}

.switchSmall input:checked ~ small {
  background: #EE8436;
  transition: .3s;
  width: 55px;
  height: 35px;
}

.switchSmall input:checked ~ small:before {
  transform: translate(16px, 0px);
  transition: .3s;
}

.hidden-checkbox {
  display: none;
  /* Hide the default checkbox */
}

.custom-checkbox-label {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid #ED754C;
  cursor: pointer;
  position: relative;
  /* Positioning context for the tick */
}

.custom-checkbox-label::before {
  content: '';
  position: absolute;
  top: 44%;
  left: 50%;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 0.2em 0.2em 0;
  transform: translate(-50%, -50%) rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s;
}

.hidden-checkbox:checked + .custom-checkbox-label {
  background-color: #ec6760;
}

.hidden-checkbox:checked + .custom-checkbox-label::before {
  opacity: 1;
}
</style>
  