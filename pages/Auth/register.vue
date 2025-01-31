<template>
    <div class="auth-content pt-16 lg:px-0 main-container pb-64">
        <div class="font-semibold text-[25px] text-center pb-11">
            S’enregistrer
        </div>

        <div class="flex items-center gap-2 justify-center pb-7">
            <img src="@/assets/svg/mail-white.svg" alt="Icon" class="w-[12px]" />
            <div class="font-16px font-Montserrat">
                johnnydoe@gmail.com.
                <router-link to="/auth/login"
                    class="text-[#EE8436] uppercase underline font-medium tracking-[0.8px] font-Kanit font-14px">Choisis
                    un autre.</router-link>
            </div>
        </div>

        <form @submit.prevent="handleSubmit">

            <div class="flex justify-center items-center text-center mt-5">

                <div class="image-upload-container pb-10">
                    <div class="image-wrapper" @click="triggerFileInput">
                        <ImageComponent :url="imageSrc" fit="cover" ratio="2-1" :overlay="false" alt="Image Alt Text"
                            class="avatar-image" />
                        <div @click.stop="triggerFileInput" class="edit-button">
                            <img src="@/assets/svg/pen.svg" alt="Edit Icon" class="w-[52%]" />
                        </div>
                    </div>
                    <input type="file" ref="fileInput" @change="onFileChange" class="hidden" />
                </div>
            </div>

            <div class="flex flex-col w-full lg:flex-row gap-7 items-center pb-5">
                <selectInput name="activityType" label="Genre" :options="activityTypes" v-model="selectedActivityType"
                    @change="handleActivityTypeChange" class="w-full " />
                <DateInput :name="date" label="Année de naissance" class="w-full" placeholder="Année de naissance" />
            </div>

            <div class="flex flex-col lg:flex-row gap-7 items-center pb-5">
                <Input name="" label="Prénom*" class="w-full" placeholder="Prénom" />
                <Input name="" label="Nom*" class="w-full" placeholder="Nom" />
            </div>

            <div class="flex flex-row gap-7 items-center pb-5">
                <PhoneInput name="phone" label="Téléphone" placeholder="Téléphone" class="w-100" />
            </div>

            <div class="flex flex-col cursor-pointer input-form relative">

                <label for="password" class="font-semibold text-[12px] pl-2 pb-1">Mot de passe</label>
                <div class="relative">
                    <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                        class="p-3 pr-10 w-full" placeholder="*************" required @input="validatePassword"
                        @focus="onPasswordFocus" @blur="onPasswordBlur" />
                    <img v-if="showPassword" src="@/assets/svg/open-eye.svg" alt="Show Password"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer img"
                        @click="togglePassword" />
                    <img v-else src="@/assets/svg/closed-eye.svg" alt="Hide Password"
                        class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer img"
                        @click="togglePassword" />
                </div>

                <div v-if="passwordFocused" class="password-requirements">

                    <div class="flex flex-row">
                        <div v-if="passwordLength">
                            <img src="@/assets/svg/correct-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div v-else>
                            <img src="@/assets/svg/wrong-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div class="ml-7 font-Montserrat font-medium text-[12px] pb-2">
                            6 caractères minimum
                        </div>
                    </div>

                    <div class="flex flex-row">
                        <div v-if="passwordCapital">
                            <img src="@/assets/svg/correct-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div v-else>
                            <img src="@/assets/svg/wrong-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div class="ml-7 font-Montserrat font-medium text-[12px] pb-2 spacing-zero">1 majuscule </div>
                    </div>

                    <div class="flex flex-row">
                        <div v-if="passwordNumberSpecial">
                            <img src="@/assets/svg/correct-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div v-else>
                            <img src="@/assets/svg/wrong-tick.svg" alt="Icon" class="w-[6%] ticks" />
                        </div>
                        <div class="ml-7 font-Montserrat font-medium text-[12px] spacing-zero">1 chiffre ou caractère
                            spécial</div>
                    </div>

                </div>

            </div>
            <button class="btn-form text-white uppercase font-medium font-14px w-[100%] mt-8 mb-8 py-4 spacing-zero">SE
                S’ENREGISTRER</button>
        </form>
    </div>
</template>
  
<script>

import defaultImage from '@/assets/svg/register-white-avatar.svg';
import ImageComponent from '../../components/ImageComponent.vue';
import selectInput from '~/components/inputs/selectInput.vue';
import DateInput from '~/components/inputs/DatePickerRegister.vue';
import Input from '~/components/inputs/input.vue';
import PhoneInput from '~/components/inputs/PhoneInput.vue';


export default {
    components: {
        ImageComponent,
        selectInput,
        DateInput,
        Input,
        PhoneInput
    },

    data() {
        return {
            imageSrc: defaultImage,
            selectedOption: null,
            password: '',
            showPassword: false,
            passwordLength: false,
            passwordCapital: false,
            passwordNumberSpecial: false,
            passwordFocused: false,
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        handleSubmit() {
            console.log('Form submitted with password:', this.password);
        },
        validatePassword() {
            const lengthRegex = /^.{6,}$/;
            const capitalRegex = /[A-Z]/;
            const numberSpecialRegex = /[0-9!@#$%^&*]/;

            this.passwordLength = lengthRegex.test(this.password);
            this.passwordCapital = capitalRegex.test(this.password);
            this.passwordNumberSpecial = numberSpecialRegex.test(this.password);
        },


        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageSrc = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        onPasswordFocus() {
            this.passwordFocused = true;
        },
        onPasswordBlur() {
            this.passwordFocused = false;
        }

    },
};

</script>

<style scoped>
.input-form {
    position: relative;
}


.password-requirements {
    position: absolute;
    right: -230px;
    top: -5px;
    background-color: white;
    padding: 1rem;
    border: 1px solid #0000001A;
    border-radius: 0.5rem;
}

/* Add the indicator arrow on the left */
.password-requirements::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    transform: translateY(-50%);
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #E5E7EB;
}


.input-form input {
    width: 100%;
    padding-right: 2.5rem;
}

.input-form .img {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

.input-form .ticks {
    position: absolute;
    margin-top: 2.5px;
    cursor: pointer;
}

.custom-select {
    position: relative;
    width: 100%;
}

.custom-select select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
    padding: 10px;

}

.custom-arrow {
    position: absolute;
    top: 70%;
    right: 10px;
    transform: translateY(-50%);
    fill: #333;
    pointer-events: none;
}

.profile-picture-container {
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
}

.profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}



.edit-icon i {
    color: #333;
}

.image-upload-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-wrapper {
    position: relative;
}

.avatar-image {
    background-color: #e77e22;
    width: 100px;
    height: 100px;
    @apply rounded-full
}

.edit-button {
    position: absolute;
    bottom: 10px;
    right: 5px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 2px 7px #00000012;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.hidden {
    display: none;
}
</style>