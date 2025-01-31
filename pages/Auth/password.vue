<template>
    <div class="auth-content pt-16 lg:px-0 px-[10px] pb-64">
        <div class="font-semibold text-[25px] text-center pb-10">
            Saisissez votre mot de passe
        </div>
        <div class="flex items-center gap-2 justify-center pb-7">
            <img src="@/assets/svg/mail-white.svg" alt="Icon" class="mail-w" />
            <div class="text-[15px]">johnnydoe@gmail.com.
                <NuxtLink to="/auth/login" class="text-[#EE8436] uppercase underline font-medium tracking-[0.8px]">Choisis
                    un
                    autre.</NuxtLink>
            </div>
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col cursor-pointer input-form">
                <label for="password" class="font-semibold text-[13px] pl-2 pb-1">Mot de passe</label>
                <div class="relative">
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password" class="p-3 pr-10"
                        placeholder="*************" required />
                    <img v-if="showPassword" src="@/assets/svg/open-eye.svg" alt="Show Password"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        @click="togglePassword" />
                    <img v-else src="@/assets/svg/closed-eye.svg" alt="Hide Password"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        @click="togglePassword" />
                </div>
            </div>
            <div class="flex items-center gap-2 justify-center pt-7">
                <div class="text-[13px]">Mot de passe oublié?
                    <span @click="openModal"
                        class="text-[#EE8436] uppercase underline font-medium tracking-[0.8px] cursor-pointer">RÉINITIALISER</span>
                </div>
            </div>
            <button class="btn-form text-white uppercase font-medium font-14px w-[100%] mt-8 mb-8 py-4">SE
                CONNECTER</button>
        </form>

        <CustomModal :isOpen="isModalOpen"
            title="Veuillez cliquer sur le lien reçu par mail afin de réinitialiser votre mot de passe."
            @close="closeModal">
            <div class="mt-10 mb-5 flex justify-center">
                <div class="default-btn py-4 px-20 font-medium font-14px tracking-[0.8px] uppercase text-white cursor-pointer hover:text-[#ee8436]"
                    @click="closeModal">
                    OK, MERCI
                </div>
            </div>
        </CustomModal>
    </div>
</template>

<script>
import CustomModal from '../../components/popup/DefaultPopup.vue';

export default {
    components: {
        CustomModal
    },
    data() {
        return {
            password: '',
            showPassword: false,
            isModalOpen: false
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
}
</script>

<style scoped>
.input-form {
    position: relative;
}

.input-form input {
    width: 100%;
    padding-right: 2.5rem;
}

.input-form img {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}
</style>