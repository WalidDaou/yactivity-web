<template>
    <div class="auth-content pt-16 lg:px-0 px-[10px] pb-96">
        <div class="font-semibold text-[25px] text-center pb-12">
            Réinitialiser mot de passe
        </div>
        <form @submit.prevent="handleSubmit" class="pb-20">
            <div class="flex flex-col cursor-pointer input-form">
                <label for="password" class="font-semibold text-[13px] pl-2 pb-1">Nouveau mot de passe</label>
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

            <button class="btn-form text-white uppercase font-medium font-14px w-[100%] mt-8 mb-8 py-4">
                RÉINITIALISER</button>
        </form>
<br><br><br>
    </div>
</template>
    
<script>
export default {

    data() {
        return {
            password: '',
            showPassword: false,

        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        handleSubmit() {
            console.log('Form submitted with email:', this.email);
        },

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