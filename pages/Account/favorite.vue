<template>
  <div>
    <div class="font-semibold font-20px pb-5">Mes favoris</div>

    <div class="flex flex-col gap-4 pb-56">
      <!-- Desktop layout -->

      <div class="hiddenLgShow">
        <div v-for="(item, index) in favorites" :key="'desktop-' + index">
          <RestaurantCard
              class="mb-[40px]"
              :images="[item.image, item.image, item.image]"
              :link="item.link"
              :image="item.imageSrc"
              :category="item.category"
              :partner="item.partner"
              :title="item.title"
              :location="item.location"
              :price="item.price"
              :city="item.city"
              :minPersons="item.minPersons"
              :interested="item.interested"
              :reservations="item.reservations"
              :discount="item.discount"
              :layout="item.layout"
              :gender="item.gender"
              :level="item.level"
              :from="item.from"
              :to="item.to"
              :profile="item.profile"
              :time="item.time"
              :timer="item.timer"
              :date="item.date"
          />
        </div>
      </div>

      <!-- Mobile layout -->
      <div class="showLgHidden">
        <div v-for="(item, index) in favorites" :key="'mobile-' + index" class="relative">

          <ActivityCard

              class="mb-[40px]"

              :images="[item.image, item.image, item.image]"
              :link="item.link"
              :image="item.imageSrc"
              :category="item.category"
              :partner="item.partner"
              :title="item.title"
              :location="item.location"
              :price="item.price"
              :city="item.city"
              :minPersons="item.minPersons"
              :interested="item.interested"
              :reservations="item.reservations"
              :discount="item.discount"
              :layout="item.layout"
              :timer="item.timer"
              :gender="item.gender"
              :level="item.level"
              :from="item.from"
              :to="item.to"
              :profile="item.profile"
              :date="item.date"
              :time="item.time"

          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/images/favorite.png';
import defaultImage2 from '@/assets/images/favorite2.png';
import profile from '@/assets/images/profilepic.png';
import RestaurantCard from '../../components/cards/FavoriteCardDefault.vue';
import ActivityCard from '~/components/cards/ActivityCard.vue';
import Homous from 'assets/images/Homous.png';
import EventCard from "~/components/cards/alerts/defaultThree.vue";

definePageMeta({
  layout: 'dashboard-default'
});

export default {
  components: {

    EventCard,
    ActivityCard,
    RestaurantCard
  },
  data() {
    return {
      favorites: [
        {
          profile: profile,
          imageSrc: defaultImage,
          link: '#',
          category: 'Gastronomie',
          partner: 'Partenaire',
          title: 'Au Libanais',
          location: 'Restaurant Au Libanais',
          price: '10 €',
          city: 'Paris',
          minPersons: 10,
          interested: 60,
          reservations: 7,
          discount: 20,
          layout: 1,
          gender: 'Masculin',
          level: 'Expert',
          from: 5,
          to: 10,
          image: Homous,
          date : "Jan 10, 2024",
          time : "13:00",
          timer : 90,
        },
        {
          imageSrc: defaultImage2,
          link: '#',
          category: 'Gastronomie',
          partner: 'Partenaire',
          title: 'Au Libanais 2',
          location: 'Restaurant Au Libanais 2',
          price: '15 €',
          city: 'Lyon',
          minPersons: 5,
          interested: 30,
          reservations: 3,
          discount: 10,
          layout: 2,
          gender: 'Féminin',
          level: 'Débutant',
          from: 2,
          to: 6,
          image: Homous,
          date : "Jan 10, 2024",
          time : "13:00",
          timer : 90,
        }
      ]
    };
  }
};
</script>

<style scoped>
.asp .overlay {
  opacity: 0.4 !important;
}
</style>
