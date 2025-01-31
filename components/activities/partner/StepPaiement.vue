<template>
  <div class="lg:pl-6 xl:pl-12 pt-6 xl:pt-12">

    <form class="">

      <h2 class="text-[21px] font-semibold mb-4 pt-4">Modes de paiment</h2>
      <div class="grid grid-cols-2 lg:grid-cols-3 justify-between gap-4 lg:gap-7 w-100 pb-10">

        <div :class="{ 'custom-radio': selectedRadio === 'gratuite', 'normal-radio': selectedRadio !== 'gratuite' }"
             class="w-full">
          <label class="flex flex-row item-center gap-2 font-normal font-14px">
            <input type="radio" name="payment" value="gratuite" v-model="selectedRadio" />
            En ligne
          </label>
        </div>
        <div :class="{ 'custom-radio': selectedRadio === 'payante1', 'normal-radio': selectedRadio !== 'payante1' }"
             class="w-full">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="payment" value="payante1" v-model="selectedRadio" />
            Acompte (50%)
          </label>
        </div>
        <div :class="{ 'custom-radio': selectedRadio === 'payante2', 'normal-radio': selectedRadio !== 'payante2' }"
             class="w-full">
          <label class="flex flex-row item-center gap-2">
            <input type="radio" name="payment" value="payante2" v-model="selectedRadio" />
            Sur place
          </label>
        </div>
      </div>
      <h2 class="text-[21px] font-semibold mb-3 pt-3">Conditions d’annulation</h2>
      <div class="pb-9 font-normal font-14px">
        Annulation possible jusqu’à 1 heures avant la date de la réservation
      </div>
      <div class="border-bottom-form"></div>
      <div class="bg-[#00000008] rounded-[10px] flex flex-row justify-between px-5 py-4 mt-10">
        <div class="font-bold font-18px">Paiement Total</div>
        <div class="font-bold font-18px text-[#EE8436]">76£ | 10 personnes</div>
      </div>

      <div class="flex flex-row gap-2 text-center pt-16">
        <div class="flex items-center">
          <input type="checkbox" id="customCheckbox5" class="hidden-checkbox" v-model="isCheckedBox5" />
          <label for="customCheckbox5" class="custom-checkbox-label"></label>
        </div>
        <div class="font-medium font-14px">
          Je comprends que cette réservation nécessite une confirmation préalable du partenaire*
        </div>
      </div>

      <div class="flex flex-row gap-2 text-center  pt-2">
        <div class="flex items-center">
          <input type="checkbox" id="customCheckbox6" class="hidden-checkbox" v-model="isCheckedBox6" />
          <label for="customCheckbox6" class="custom-checkbox-label"></label>
        </div>
        <div class="font-medium font-14px">
          J’accepte les <NuxtLink to="/policies/conditions-generales" class="underline">Conditions Générales
        </NuxtLink> de Yactivity *
        </div>
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
            isCheckedBox6: false,
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

.switchSmall input:checked~small {
    background: #EE8436;
    transition: .3s;
    width: 55px;
    height: 35px;
}

.switchSmall input:checked~small:before {
    transform: translate(16px, 0px);
    transition: .3s;
}

.hidden-checkbox {
    display: none;
    /* Hide the default checkbox */
}

.custom-checkbox-label {
    display: inline-block;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border-radius: 3px;
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
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
    transition: opacity 0.2s;
}

.hidden-checkbox:checked+.custom-checkbox-label {
    background-color: #ec6760;
}

.hidden-checkbox:checked+.custom-checkbox-label::before {
    opacity: 1;
}
</style>
  