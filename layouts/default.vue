<template>
  <Header />
  <div class="pt-[155px] xl:pt-24">
    <slot></slot>
  </div>
  <Footer />
</template>

<script>
import Header from '../partials/header.vue';
import Footer from '../partials/footer.vue';

export default {
  components: {
    Header,
    Footer
  },
  meta: {
    hideForm: false
  }
}
</script>
