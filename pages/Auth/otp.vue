<template>
    <div class="auth-content pt-14 lg:px-0 px-[10px] pb-96">
      <div class="font-semibold text-[25px] text-center pb-12">
        Verifier ton adresse mail
      </div>
      <div class="flex items-center gap-2 justify-center pb-7">
        <img src="@/assets/svg/mail-white.svg" alt="Icon" class="w-[3%]" />
        <div class="text-[15px] font-Montserrat">
          johnnydoe@gmail.com.
          <router-link to="/auth/login" class="text-[#EE8436] uppercase underline font-medium tracking-[0.8px] font-Kanit font-14px">Choisis un autre.</router-link>
        </div>
      </div>
      <div class="text-center font-bold text-[11.5px] uppercase pt-4 tracking-code pb-2">
        Enter verification code
      </div>
      <div class="font-normal uppercase text-center my-2"> {{ formattedTime }}</div>
      <form @submit.prevent="handleSubmit" class="flex flex-col items-center mt-10 pb-40">
        <div class="flex items-center space-x-2">
          <input
            v-for="(digit, index) in otp"
            :key="index"
            v-model="otp[index]"
            type="tel"
            maxlength="1"
            class="border-b-2 border-[#7D7C7C] p-2 rounded-[10px] text-center text-lg tracking-widest w-[45px] h-[45px] bg-[#EEEEEE] focus:w-[50px] focus:h-[50px] focus:outline-none"
            @input="moveFocus(index)"
            @keydown.backspace="handleBackspace(index, $event)"
            ref="otpInput"
          />
        </div>       
      </form>
    </div>
  </template>
  
    
<script>
export default {
  data() {
    return {
      otp: ['', '', '', ''],
      timeLeft: 60,
      timer: null,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.timeLeft / 60);
      const seconds = this.timeLeft % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    resetTimer() {
      this.timeLeft = 60;
      clearInterval(this.timer);
      this.startTimer();
    },
    handleSubmit() {
      console.log('Form submitted with otp:', this.otp.join(''));
    },
    moveFocus(index) {
      if (this.otp[index].length === 1 && index < this.otp.length - 1) {
        this.$refs.otpInput[index + 1].focus();
      }
    },
    handleBackspace(index, event) {
      if (event.key === 'Backspace' && !this.otp[index] && index > 0) {
        this.$refs.otpInput[index - 1].focus();
      }
    },
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
};

</script>

