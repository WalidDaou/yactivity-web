<template>

  <div>
    <CalendarPickerVue/>
  </div>

  <div class="mt-[20px] grid grid-cols-1 ">
    <JoinCard :item="{
    sessionDuration: 'Séance de 60 minutes',
    price: '10£/par personne',
    image: 'path/to/image.jpg',
    name: 'Joe daw',
    age: 22,
    rating: 4.5,
    description: 'Lorem ipsum dolor sit amet...',
    discount: '-20%',
    participants: '10 pers',
    note: 'Partageable si incomplets',
    radioValue: 'gratuite',
  }"/>
  </div>


</template>

<script>
import CalendarPickerVue from './join/CalendarPicker.vue';
import JoinCard from "~/components/activities/join/joinCard.vue";

export default {
  components: {
    JoinCard,
    CalendarPickerVue
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
</style>
