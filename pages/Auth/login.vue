<template>
    <div class="auth-content pt-16 lg:px-0 px-2.5">
        <div class="font-semibold font-25px text-center pb-12">
            Veuillez-vous connecter pour accéder à cette fonctionnalité
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="flex flex-col cursor-pointer input-form">
                <label for="email" class="font-semibold text-[13px] pl-2 pb-1">Adresse mail</label>
                <input type="email" id="email" v-model="email" class="p-3" placeholder="email@address.com" required>
            </div>
            <NuxtLink to="/auth/password">
                <button
                    class="btn-form text-white uppercase font-medium font-14px w-[100%] mt-8 mb-8 py-4">CONTINUER</button>
            </NuxtLink>
        </form>
        <div class="separator">
            <div class="line"></div>
            <div class="font-16px px-3 pb-1">ou</div>
            <div class="line"></div>
        </div>
        <div class="flex flex-col gap-4 pb-72 pt-8">
            <a href="#"
                class="flex flex-row justify-between w-[100%] social-btn py-3 px-4 items-center hover:bg-[#F4F4F5] hover:border-[#00000020]">
                <div class="">
                    <img src="@/assets/svg/facebook.svg" alt="Icon" class="" />
                </div>
                <div class="tracking-[0.8px] font-medium font-14px">SE CONNECTER AVEC FACEBOOK</div>
                <div></div>
            </a>
            <a href="#"
                class="flex flex-row justify-between w-[100%] social-btn py-3 px-4 items-center hover:bg-[#F4F4F5] hover:border-[#00000020]">
                <div class="">
                    <img src="@/assets/svg/google.svg" alt="Icon" class="" />
                </div>
                <div class="tracking-[0.8px] font-medium font-14px">SE CONNECTER AVEC GOOGLE</div>
                <div>
                </div>
            </a>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            email: ''
        };
    },
    meta: {
        hideForm: true
    },
    methods: {
        handleSubmit() {
            console.log('Form submitted with email:', this.email);
        }
    }

}
</script>