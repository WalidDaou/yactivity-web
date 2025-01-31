<template>
  <div class="lg:pl-6 xl:pl-12 pt-6 xl:pt-12">
    <form class="">
      <h2 class="font-20px font-semibold mb-4">Visibilité de votre réservation</h2>

      <div class="grid grid-cols-2 justify-between gap-4 lg:gap-7 w-100 pb-10">

        <div :class="{ 'custom-radio': isChecked2, 'normal-radio': !isChecked2 }" class="w-full">
          <label class="flex flex-row item-center gap-2 font-normal font-14px">
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


        <div :class="{ 'custom-radio': !isChecked2, 'normal-radio': isChecked2 }" class="w-full">
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


      <h2 class="font-20px font-semibold mb-4 pt-4">Mode d’acceptation</h2>
      <div class="grid grid-cols-2 justify-between gap-4 lg:gap-7 w-100 pb-10">
        <div :class="{ 'custom-radio': isChecked, 'normal-radio': !isChecked }" class="w-full">
          <label class="flex flex-row item-center gap-2 font-normal font-14px">
            <input type="radio" name="gratuite" value="gratuite" v-model="selectedRadio"/>
            Automatique
          </label>
        </div>
        <div :class="{ 'custom-radio': !isChecked, 'normal-radio': isChecked }" class="w-full">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="payante" value="payante1" v-model="selectedRadio"/>
            Manuelle
          </label>
        </div>
      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Réservée à un niveau particulier?
        </div>
        <label class="switchSmall m5">
          <input type="checkbox" v-model="isCheckedNiveau"/>
          <small></small>
        </label>
      </div>

      <div v-if="isCheckedNiveau" class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 lg:gap-7 w-100 pb-10">


        <div :class="{ 'custom-radio': isCheckedBox, 'normal-radio': !isCheckedBox }" class="w-full flex flex-row gap-3"
             @click="toggleCheckbox">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox1" class="hidden-checkbox" v-model="isCheckedBox"/>
            <label for="customCheckbox1" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Débutant</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox2, 'normal-radio': !isCheckedBox2 }" class="w-full flex flex-row gap-3"
             @click="toggleCheckbox2">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox2" class="hidden-checkbox" v-model="isCheckedBox2"/>
            <label for="customCheckbox2" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Bon</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox3, 'normal-radio': !isCheckedBox3 }" class="w-full flex flex-row gap-3"
             @click="toggleCheckbox3">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox3" class="hidden-checkbox" v-model="isCheckedBox3"/>
            <label for="customCheckbox3" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Très Bon</div>
        </div>
        <div :class="{ 'custom-radio': isCheckedBox4, 'normal-radio': !isCheckedBox4 }" class="w-full flex flex-row gap-3"
             @click="toggleCheckbox4">
          <div @click.stop class="flex items-center">
            <input type="checkbox" id="customCheckbox4" class="hidden-checkbox" v-model="isCheckedBox4"/>
            <label for="customCheckbox4" class="custom-checkbox-label"></label>
          </div>
          <div class="font-normal font-14px">Expert</div>
        </div>
      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row  justify-between items-center">
        <div class="font-semibold font-20px">
          Réservée à un genre particulier?
        </div>
        <label class="switchSmall m5">
          <input type="checkbox" v-model="isCheckedGenre"/>
          <small></small>
        </label>
      </div>

      <div v-if="isCheckedGenre" class="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 lg:gap-7 w-100 pb-10">


        <div :class="{ 'custom-radio': isChecked3, 'normal-radio': !isChecked3 }" class="w-full">
          <label class="flex flex-row item-center gap-2 font-normal font-14px">
            <input type="radio" name="masculin" value="masculin" v-model="selectedRadio3"/>
            Masculin
          </label>
        </div>

        <div :class="{ 'custom-radio': !isChecked3, 'normal-radio': isChecked3 }" class="w-full">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="feminin" value="feminin" v-model="selectedRadio3"/>
            Féminin
          </label>
        </div>

      </div>

      <div class="border-bottom-form"></div>

      <div class="pt-10 pb-4 flex flex-row justify-between items-center">
        <div class="font-semibold font-20px">
          Autres remarques
        </div>
        <label class="switchSmall m5">
          <input type="checkbox" v-model="isCheckedRemarques"/>
          <small></small>
        </label>
      </div>

      <div v-if="isCheckedRemarques">
        <TextAreaNormal name="" label="Description de l’activité*" placeholder="Description de l’activité*"
                        class="pb-2"/>
      </div>

    </form>
  </div>
</template>

<script>
import selectInput from '~/components/inputs/selectInput.vue';
import Input from '~/components/inputs/input.vue';
import TextAreaNormal from '~/components/inputs/TextAreaNormal.vue';
import locationInput from '~/components/inputs/locationInput.vue';

export default {
  components: {
    selectInput,
    Input,
    TextAreaNormal,
    locationInput,
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
      isCheckedNiveau: false,
      isCheckedGenre: false,
      isCheckedRemarques: false,
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
  top: 42%;
  left: 50%;
  width: 6px;
  height: 11px;
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
  