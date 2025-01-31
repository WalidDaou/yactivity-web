<template>
  <div class="confirm-form border shadow  px-4 lg:px-10 bg-white">

    <div class="flex justify-center pt-10">
      <img src="@/assets/svg/confirm.svg" alt="Icon"/>
    </div>

    <div class="text-center font-20px lg:font-semibold pt-5">
      Confirmation de réservation
    </div>

    <div class="flex  bg-[#FFF7E5] gap-3 rounded-[10px] px-1 mt-[10px] py-[10px] justify-center">
      <div class="min-w-[25px] h-fit "><img class="w-full" src="@/assets/svg/caution.svg" alt="Icon"/></div>
      <div class="font-normal font-14px w-full ">Nous avons transmis votre réservation à notre partenaire. Nous vous
        enverrons une notification dès la confirmation.
      </div>
    </div>

    <div class="chosen-activity my-5 ">


      <div class="flex items-center border-b  lg:border-none gap-3 p-2 px-5 pt-3 pb-5">

        <div class="relative">
          <div
              class="w-[3.5rem] h-[3.5rem] bg-[#DBDBDB] pb-[2px] pl-[2px] rounded-full flex items-center justify-center">
            <img src="@/assets/svg/building.svg" alt="Edit Icon"/>
          </div>
          <div class="absolute top-[0px] right-[-2px]">
            <img src="@/assets/svg/verified-icon.svg" alt="Edit Icon"/>
          </div>
        </div>


        <div class="flex flex-col justify-between pt-2 gap-1">
          <div class="font-medium text-[13.5px]  text-black">
            Complexe Stadio Pizzeria
          </div>
          <div class="font-semibold font-18px">Foot Salle 5 x 5</div>
        </div>


      </div>


      <div class="flex flex-col  lg:flex-row gap-4 lg:gap-10    pt-3 pb-5">


        <div class="flex flex-col w-full gap-3 border-b  px-5 lg:border-none  pb-7">
          <div class="flex flex-row gap-3 items-center">
            <div class="font-semibold font-14px colored-icon text-center text-white">
              <img src="@/assets/svg/small-phone.svg" alt="Edit Icon"/>
            </div>
            <div>+33 (6) 86 57 90 14</div>
          </div>
          <div class="flex flex-row gap-3 items-center lg:pr-20">
            <div class="font-semibold font-14px colored-icon text-center text-white min-w-[30px] ">
              <img src="@/assets/svg/small-location-colored.svg" class="h-[15px]" alt="Edit Icon"/>
            </div>
            <div>20 rue Georges Clemenceau, 10000 Aix-en-Provence</div>
          </div>
        </div>

        <div class="flex flex-row h-full px-5 gap-4 lg:gap-10 w-full ">


          <div class="flex rounded-[10px] p-2 w-full lg:w-[25%] flex-col items-center justify-center gap-2 bg-[#F5E3D6]">
            <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
              <img src="@/assets/svg/calender-small.svg" alt="Edit Icon"/>
            </div>
            <div class="font-normal font-14px text-center">Jan 10, 2024</div>
          </div>

          <div class="flex rounded-[10px] p-2 w-full lg:w-[25%] flex-col items-center justify-center gap-2 bg-[#F5E3D6]">
            <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
              <img src="@/assets/svg/colored-clock.svg" alt="Edit Icon"/>
            </div>
            <div class="font-normal font-14px text-center">13:00</div>
          </div>

          <div class="flex rounded-[10px] p-2 w-full lg:w-[25%] flex-col items-center justify-center gap-2 bg-[#F5E3D6]">
            <div class="rounded-[10px] font-semibold font-14px colored-icon-confirm text-center text-white">
              <img src="@/assets/svg/colored-time.svg" alt="Edit Icon"/>
            </div>
            <div class="font-normal font-14px text-center">90 minutes</div>
          </div>

        </div>

      </div>

    </div>

    <div class="chosen-activity my-5">
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3">
        <div class="font-normal font-18px">Réservation principale</div>
      </div>
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Initialisateur de la réservation</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">Johnny Doe</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Nombre de personnes</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">10</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Nombres de places restantes</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">5</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Mode de publication</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">Privée</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Niveau souhaité</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">Débutant</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Genre souhaité</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">Filles uniquement</div>
        </div>
        <div class="flex flex-row gap-[37px] justify-between ">
          <div class="font-medium font-14px">Remarques</div>
          <div class="font-medium tracking-[0.8px] uppercase underline font-14px text-[#EE8436] text-end">
            AFFICHER LES REMARQUES
          </div>
        </div>
      </div>

    </div>

    <div class="chosen-activity my-5">
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3">
        <div class="font-normal font-18px">Formules sélectionnées</div>
      </div>
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Étudiants</div>
          <div class="font-semibold font-14px text-end flex gap-5 flex-row items-center">
            <div class="text-[#EE8436]">36 £</div>
            <div class="#000000">1 personne</div>
          </div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Étudiants</div>
          <div class="font-semibold font-14px text-end flex gap-5 flex-row items-center">
            <div class="text-[#EE8436]">40 £</div>
            <div class="#000000">1 personne</div>
          </div>
        </div>
      </div>
    </div>

    <div class="chosen-activity my-5">
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3">
        <div class="font-normal font-18px">Paiement</div>
      </div>
      <div class="flex flex-col  gap-3 p-2 px-5 pt-3 pb-3 border-hr">
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Mode</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">Acompte en ligne (50%)</div>
        </div>
        <div class="border-hr flex flex-row gap-[37px] justify-between pb-1">
          <div class="font-medium font-14px">Montant payé</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">38 £</div>
        </div>

        <div class="flex flex-row gap-[37px] justify-between ">
          <div class="font-medium font-14px">Reste à payer sur place</div>
          <div class="font-semibold font-14px text-[#EE8436] text-end">38 £</div>
        </div>
      </div>
    </div>


    <div class="flex justify-center pt-3">
      <button class="btn-partner text-white uppercase font-medium font-14px mb-7 py-4 px-12">AFFICHER LES DÉTAILS DE
        RÉSERVATION
      </button>
    </div>
    <div class="flex justify-center text-[13px] font-medium font-Montserrat tracking-[0.8px] pb-10">
      <NuxtLink to="/" class="font-Kanit text-[#EE8436] uppercase pl-1 underline">RETOURNER À LA PAGE D’ACCUEIL
      </NuxtLink>
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
    return {};
  },
}
</script>

<style scoped></style>