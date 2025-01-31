<template>
    <div class="main-container">

        <CreerUneActiviteHeaderVue />

        <div class="pt-3 pb-4 font-semibold text-[21px] text-center lg:px-0 px-2">Votre activité</div>


        <form class="activity-form pt-1">

            <div class="flex flex-col lg:flex-row gap-7 w-100 pb-5">
                <selectInput name="activityType" label="Activity Type" :options="activityTypes"
                    v-model="selectedActivityType" @change="handleActivityTypeChange" class="w-full" />
                <Input name="" label="Titre de l’activité*" class="w-full" placeholder="Titre de l’activité" />
            </div>
            <TextArea name="" label="Description de l’activité*" placeholder="Description de l’activité" class="pb-5" />
            <locationInput name="" label="Adresse" class="pb-5" />
            <selectInput name="activityType" label="Durée de l’activité*" :options="activityTypes"
                v-model="selectedActivityType" @change="handleActivityTypeChange" class="pb-5" />
            <div class="flex  flex-col lg:flex-row gap-7 w-100 pb-10">
                <Input name="" label="Nombre de participants total*" class="w-full"
                    placeholder="Nombre de participants total" />
                <Input name="" label="Nombre de participants déjà inscrites*" class="w-full"
                    placeholder="Nombre de participants déjà inscrites" />
            </div>

            <div class="pt-3 pb-4 font-semibold text-[23px] text-center lg:px-0 px-2">Type de l’Activité</div>
            <div class="flex flex-row justify-between gap-4 lg:gap-7 w-100 pb-10">
                <div :class="{ 'custom-radio': isChecked, 'normal-radio': !isChecked }" class="w-full">
                    <label class="flex flex-row item-center gap-2 font-normal text-[15px]">
                        <input type="radio" name="gratuite" value="gratuite" v-model="selectedRadio">
                        Gratuite
                    </label>
                </div>
                <div :class="{ 'custom-radio': !isChecked, 'normal-radio': isChecked }" class="w-full">
                    <label class="flex flex-row item-center gap-2">
                        <input type="radio" name="payante" value="payante1" v-model="selectedRadio">
                        Payante
                    </label>
                </div>
            </div>

            
            <div v-if="selectedRadio === 'payante1'" class="flex flex-col lg:flex-row gap-4 lg:gap-7 w-100 pb-10">

                <selectInput name="activityType" label="Devise* (Currency)" :options="activityTypes"
                    v-model="selectedActivityType" @change="handleActivityTypeChange" class="w-full lg:w-[25%]" />
              <div class="flex flex-row gap-4 lg:gap-7 w-full">

                <Input name="" label="Prix*" class="w-full" placeholder="Prix" />

                <normalSelect name="activityType" label="Par personne" :options="activityTypes"
                    v-model="selectedActivityType" @change="handleActivityTypeChange" class="w-full lg:w-[25%]" />
              </div>
            </div>

            <NuxtLink to="/Creer-une-activite/deuxieme-etape" class="flex items-center w-full justify-center pb-20">
                <button class="btn-form text-white uppercase font-medium font-14px  w-full lg:w-[25%] mb-8 py-4">SUIVANT</button>
            </NuxtLink>
        </form>
    </div>
</template>
  
<script>
import selectInput from '~/components/inputs/selectInput.vue';
import normalSelect from '~/components/inputs/normalSelect.vue';
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-activite-header.vue';
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
                { value: 'hiking', label: 'Hiking' },
                { value: 'cycling', label: 'Cycling' },
                { value: 'swimming', label: 'Swimming' }
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
  