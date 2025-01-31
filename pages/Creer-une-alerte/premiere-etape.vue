<template>
  <div class="main-container">
    <CreerUneActiviteHeaderVue/>

    <div class="pt-3 pb-4 font-semibold text-[21px] text-center lg:px-0 px-2">Votre activité</div>

    <form class="activity-form pt-1">
      <selectInput name="activityType" label="Catégories d’activités*" :options="activityTypes"
                   v-model="selectedActivityType" @change="handleActivityTypeChange" class="pb-5"/>
      <selectInput name="activityType" label="Combien seriez-vous ?" :options="activityTypes"
                   v-model="selectedActivityType" @change="handleActivityTypeChange" class="pb-16"/>


      <NuxtLink to="/Creer-une-alerte/deuxieme-etape" class="flex justify-center pb-20 lg:pb-64">
        <button class="btn-form text-white uppercase font-medium font-14px w-full lg:w-[25%] mb-8 py-4">SUIVANT</button>
      </NuxtLink>
    </form>


  </div>
</template>

<script>
import selectInput from '~/components/inputs/selectInput.vue';
import normalSelect from '~/components/inputs/normalSelect.vue';
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-alerte-header.vue';
import Input from '~/components/inputs/input.vue';
import TextArea from '~/components/inputs/textarea.vue';
import locationInput from '~/components/inputs/locationInput.vue';

export default {
  components: {
    CreerUneActiviteHeaderVue,
    selectInput,
    Input,
    TextArea,
    locationInput,
    normalSelect
  },
  data() {
    return {
      activityTypes: [
        {value: 'hiking', label: 'Hiking'},
        {value: 'cycling', label: 'Cycling'},
        {value: 'swimming', label: 'Swimming'}
      ],
      selectedActivityType: '',
      selectedRadio: 'gratuite'
    };
  },
  computed: {
    isChecked() {
      return this.selectedRadio === 'gratuite';
    }
  },
  methods: {
    handleActivityTypeChange(value) {
      console.log('Selected activity type:', value);
    }
  }
};
</script>

<style scoped>
[type="radio"] {
  accent-color: #EC6760;
  width: 25px;
}
</style>
  