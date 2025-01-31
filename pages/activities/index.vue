<template>
  <div>
    <div class=" xl:pt-[15px] pb-7 font-semibold text-[25px] text-center lg:px-0 px-2">Explorer les activités</div>

    <div class="main-container hiddenXlShow flex justify-center pb-12">
      <FormSearch />
    </div>

    <div class="main-container showXlHidden pb-12">
      <FormsResponsiveSearchForm />
    </div>

    <div class="main-container flex justify-between flex-row pb-4 items-center">
      <div class="flex flex-wrap tags-container gap-1 lg:gap-2">
        <TagComponent v-for="(tag, index) in tags" :key="index" :tagName="tag" @remove="removeTag" />
      </div>
      <div class="font-normal font-14px hiddenXlShow opacity-[0.5]">Showing 9 out of 20</div>
    </div>

    <div class="main-container mx-auto pb-12">
      <div v-if="activities && activities.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RestaurantCard
            v-for="(activity, index) in activities"
            :key="index"
            :images="activity.images"
            :category="activity.category"
            :categoryIcon="activity.categoryIcon"
            :partner="activity.partner"
            :title="activity.title"
            :price="activity.price"
            :location="activity.location"
            :city="activity.city"
            :minPersons="activity.minPersons"
            :interested="activity.interested"
            :reservations="activity.reservations"
            :discount="activity.discount"
            :link="activity.link"
            :profile="profile"
        />
      </div>

      <div v-if="activities && activities.length > 0" class="flex gap-2 justify-center pt-10 cursor-pointer">
        <div class="pagination active-pag">1</div>
        <div class="pagination">2</div>
        <div class="pagination">3</div>
        <div class="pagination">4</div>
      </div>

      <div v-if="activities && activities.length <= 0" class="w-full flex-col h-fit justify-center items-center flex pt-[20px]">
        <img class="min-h-[230px]" src="assets/svg/not-found.svg" alt="">
        <p class="pt-[20px] font-16px">Aucune activité trouvée</p>
      </div>

    </div>
  </div>
</template>

<script>
import RestaurantCard from '~/components/cards/ActivityCard.vue';
import profile from '@/assets/images/profilepic.png';
import Homous from '@/assets/images/Homous.png';
import Party from '@/assets/images/party.png';
import Playground from '@/assets/images/playground.png';
import FormSearch from '../../components/forms/SearchForm.vue';
import TagComponent from '../../components/TagComponent.vue';

export default {
  components: {
    TagComponent,
    RestaurantCard,
    FormSearch,
  },
  data() {
    return {
      tags: ['Football', 'Basketball', '0£ - 250£'],
      profile,
      activities: [
        {
          images: [Homous, Homous, Homous],
          category: 'Gastronomie',
          categoryIcon: 'path/to/food-icon.svg',
          partner: 'Johnny Doe',
          title: 'Au Libanais',
          price: '10 €',
          location: 'Restaurant Au Libanais',
          city: 'Paris',
          minPersons: 10,
          interested: 60,
          reservations: 7,
          discount: 20,
          link: '/',
        },
        {
          images: [Playground, Playground, Playground],
          category: 'Sports',
          categoryIcon: 'path/to/sports-icon.svg',
          partner: 'Johnny Doe',
          title: 'Foot salle 5 x 5',
          price: '10 €',
          location: 'Complexe Stadio Pizzeria',
          city: 'Paris',
          minPersons: 10,
          interested: 60,
          reservations: 7,
          discount: 20,
          link: '/',
        },
        {
          images: [Party, Party, Party],
          category: 'Sorties Festives',
          categoryIcon: 'path/to/festive-icon.svg',
          partner: 'Johnny Doe',
          title: 'Soirée festive',
          price: '10 €',
          location: 'Complexe Stadio Pizzeria',
          city: 'Paris',
          minPersons: 10,
          interested: 60,
          reservations: 7,
          discount: 20,
          link: '/',
        },
      ],
    };
  },
  methods: {
    removeTag(tag) {
      this.tags = this.tags.filter((t) => t !== tag);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
