<template>


    <div class="">

        <div class="font-semibold font-20px pb-5">Informations personnelles</div>
        <div class="flex flex-col lg:flex-row gap-7 w-100 pb-5 pt-2">
            <selectInput name="activityType" label="Genre" :options="activityTypes" v-model="selectedActivityType"
                @change="handleActivityTypeChange" class="w-full lg:w-[49%]" />
            <DateInput  name="date" label="Année de naissance" class="w-full lg:w-[49%] change-input-w" placeholder="Date" />
        </div>

        <div class="flex flex-col lg:flex-row gap-7 w-100 pb-5">
            <Input name="" label="Prénom" class="w-full" placeholder="Prénom" />
            <Input name="" label="Nom" class="w-full" placeholder="Nom" />
        </div>
        <div class="flex flex-col lg:flex-row gap-7 w-100 pb-5">
            <Input name="" label="Email" class="w-full" placeholder="marcdoe@gmail.com" />
            <PhoneInput name="phone" label="Téléphone" placeholder="Téléphone" class="w-full" />
        </div>


        <NuxtLink to="#" class="flex pt-5 pb-5">
            <button class="btn-form text-white uppercase font-medium font-14px w-full lg:w-[24%] mb-8 py-4">SAUVEGARDER</button>
        </NuxtLink>

        <div class="font-semibold font-20px pb-5">Changer mot de passe</div>
        <div class="flex flex-col cursor-pointer input-form w-full lg:w-50">
            <label for="password" class="font-semibold text-[13px] pl-2 pb-1">Nouveau mot de passe</label>
            <div class="relative">
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="p-3 pr-10 w-100"
                    placeholder="*************" required />
                <img v-if="showPassword" src="@/assets/svg/open-eye.svg" alt="Show Password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword" />
                <img v-else src="@/assets/svg/closed-eye.svg" alt="Hide Password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword" />
            </div>
        </div>


        <div @click="openModal" class="flex pt-9 pb-5 lg:pb-20">
            <button class="btn-form text-white uppercase font-medium font-14px w-full lg:w-[24%] mb-8 py-4">CHANGER MOT DE
                PASSE</button>
        </div>



        <CustomModal :isOpen="isModalOpen" title="Veuillez saisir votre mot de passe actuel afin de valider vos modifications" @close="closeModal">

            <div class="flex flex-col cursor-pointer input-form pt-6">
            <label for="password" class="font-semibold text-[13px] pl-2 pb-1">Votre mot de passe actuel</label>
            <div class="relative">
                <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="p-3 pr-10 w-100"
                    placeholder="*************" required />
                <img v-if="showPassword" src="@/assets/svg/open-eye.svg" alt="Show Password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword" />
                <img v-else src="@/assets/svg/closed-eye.svg" alt="Hide Password"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" @click="togglePassword" />
            </div>
        </div>

            <div class="mt-10 mb-5 flex justify-center gap-5">
                <div class="default-btn py-5 px-16 font-medium font-14px tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]"
                    @click="closeModal">
                    SAUVEGARDER
                </div>
               
            </div>

        </CustomModal>

    </div>
</template>
  
<script>

import selectInput from '~/components/inputs/selectInput.vue';
import DateInput from '~/components/inputs/DatePicker.vue';
import Input from '~/components/inputs/input.vue';
import PhoneInput from '~/components/inputs/PhoneInput.vue';
import CustomModal from '~/components/popup/DefaultPopup.vue';

definePageMeta({
    layout: 'dashboard-default'
})

export default {
    components: {
        selectInput,
        DateInput,
        Input,
        PhoneInput,
        CustomModal
    },
    data() {
        return {
            password: '',
            showPassword: false,
            isModalOpen: true
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        handleSubmit() {
            console.log('Form submitted with email:', this.email);
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
.input-form input,
.input-form select {
    border: 1px solid rgba(0, 0, 0, 0.2705882353);
    border-radius: 10px;
}
</style>
  