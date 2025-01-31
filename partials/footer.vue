<template>
  <div class="footer">
    <div class="main-container pt-10 lg:pb-7 pb-0 flex lg:flex-row flex-col  ">


      <div class="flex  flex-row  w-full">


        <div class="  w-full flex flex-col font-14px gap-1 lg:pb-0 pb-7">
          <div class="lg:font-semibold mb-3">
            Information
          </div>
          <NuxtLink to="/policies/mentions-legales">
            Mentions légales
          </NuxtLink>
          <NuxtLink to="/policies/conditions-generales">
            Conditions générales
          </NuxtLink>
        </div>


        <div class=" w-full flex flex-col font-14px gap-1 lg:pb-0 pb-7">
          <div class="lg:font-semibold mb-3">
            Pour les professionnels
          </div>
          <div>
            Devenir partenaire
          </div>
          <div>
            Mon espace partenaire
          </div>
        </div>


      </div>


      <div class="flex-col lg:flex-row flex w-full">

        <div class="w-full flex flex-col font-14px gap-1 lg:pb-0 pb-7">

          <div class="lg:font-semibold w-fit mb-3">
            Contactez-nous
          </div>

          <div class="grid to-grid w-full  gap-1">

            <a href="tel:+33619567872" target="_blank" class="flex flex-row gap-2 items-center mb-2">
              <img src="@/assets/svg/phone.svg" alt="Icon"/>
              <div>+33 6 19 56 78 72</div>
            </a>
            <a href="https://wa.me/33619567872" target="_blank" class="flex flex-row gap-2 items-center mb-2">
              <img src="@/assets/svg/whatsapp.svg" alt="Icon"/>
              <div>+33 6 19 56 78 72</div>
            </a>
            <a href="mailto:support@yactivity.com" target="_blank" class="flex flex-row gap-2 items-center mb-2">
              <img src="@/assets/svg/mail.svg" alt="Icon"/>
              <div>support@yactivity.com</div>
            </a>

          </div>
        </div>

        <div class="w-full flex flex-col font-14px gap-1 lg:pb-0 pb-7">
          <div class="font-semibold mb-3">
            Télécharger L’application
          </div>
          <div class="flex flex-row gap-4">
            <a href="#"><img src="@/assets/svg/apple-store.svg" alt="Icon"/></a>
            <a href="#"><img src="@/assets/svg/play-store.svg" alt="Icon"/></a>
          </div>
        </div>

      </div>

    </div>

    <div class="sec"></div>

    <div
        class="main-container flex lg:flex-row flex-col justify-between font-14px pt-5 pb-5 gap-4 lg:gap-0 lg:text-nowrap ">

      <div>
        ©{{ currentYear }} Yactivity - Tous Droits Réservés.
      </div>
      <div class="font-light">
        Web Design & Développement By Pur Développement &
        <a href="https://thewebaddicts.com/" target="_blank" class="hover:underline">The Web Addicts.</a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>