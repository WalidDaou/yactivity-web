<template>
    <div class="partner-form main-container ">
        <div class="text-center text-[26px] font-semibold pt-9">
            Demande d’inscription
        </div>
        <div class="text-center opacity-[0.6] font-14px pt-5 pb-12">
            Envoyez votre demande d’inscription et nous vous recontacterons dans les plus brefs délais :
        </div>
        <div class="tracking-[0.9px] uppercase text-[#EE8436] font-semibold text-[15px] text-center pb-6">
            INFORMATIONS DE VOTRE ÉTABLISSEMENT
        </div>
        <div class="flex flex-col lg:flex-row w-[100%] gap-7 pb-12">
            <Input name="" label="Nom de votre établissement" class="w-full lg:w-35" placeholder="Nom de votre établissement" />
            <locationInput name="" label="Adresse" class="w-full lg:w-65" />
        </div>
        <div class="tracking-[0.9px] uppercase text-[#EE8436] font-semibold text-[15px] text-center pb-6">
            INFORMATIONS DE CONTACT
        </div>
        <div class="flex flex-col lg:flex-row w-[100%] gap-7 pb-5">
            <Input name="" label="Prénom*" class="w-full lg:w-47" placeholder="Prénom" />
            <Input name="" label="Nom*" class="w-full lg:w-50" placeholder="Nom" />
        </div>
        <div class="flex flex-col lg:flex-row w-[100%] gap-7 pb-5">
            <Input name="" label="Adresse mail*" class="w-full lg:w-47" placeholder="Adresse mail" />
            <PhoneInput name="phone" label="Téléphone" placeholder="Téléphone" class="w-full lg:w-50" />
        </div>
        <div class="flex flex-row w-[100%] gap-7 pb-12">
            <TextArea name="" label="Commentaire*" placeholder="Commentaire" class="w-100" />
        </div>
        <div class="flex justify-center pb-0 pt-3">
            <button class="btn-partner   w-full lg:w-56 text-white uppercase font-medium font-14px  mb-7 py-4">VALIDER</button>
        </div>
        <div class="flex justify-center text-[13px] font-medium font-Montserrat tracking-[0.7px]">
            Déjà partenaire? <NuxtLink to="/" class="font-Kanit text-[#EE8436] uppercase pl-1 underline"> CONNECTEZ-VOUS À YACTIVITY MANAGER </NuxtLink>
        </div>
        <div class="flex text-center justify-center pt-5">
        <div class="separator w-45">
            <div class="line"></div>
            <div class="text-[15px] px-3 pb-1">ou</div>
            <div class="line"></div>
        </div>
    </div>
    <div class="font-semibold font-14px text-center pt-3 pb-4">Téléchargez l’application mobile Yactivity Manager</div>
    <div class="flex flex-row gap-4 text-center justify-center pb-16">
                    <a href="#"><img src="@/assets/svg/apple-store.svg" alt="Icon" /></a>
                    <a href="#"><img src="@/assets/svg/play-store.svg" alt="Icon" /></a>
                </div>
    </div>
</template>
  
<script>
import selectInput from '~/components/inputs/selectInput.vue';
import normalSelect from '~/components/inputs/normalSelect.vue';
import CreerUneActiviteHeaderVue from '~/partials/Creer-une-activite-header.vue';
import Input from '~/components/inputs/input.vue';
import TextArea from '~/components/inputs/textarea.vue';
import locationInput from '~/components/inputs/locationInput.vue';
import PhoneInput from '~/components/inputs/PhoneInput.vue';
export default {

    components: {
        CreerUneActiviteHeaderVue,
        selectInput,
        Input,
        TextArea,
        locationInput,
        normalSelect,
        PhoneInput
    },
    data() {
        return {
        };
    },
}
</script>

<style scoped></style>