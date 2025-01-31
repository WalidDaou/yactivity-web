<template>
    <div class="owl-carousel owl-theme">
      <div class="card_carousel">
        <ImageComponent :url="logoUrl" fit="cover" ratio="4-1" :overlay="true" alt="Image Alt Text" />
        <ImageComponent :url="logoUrl" fit="cover" ratio="4-1" :overlay="true" alt="Image Alt Text" />
        <ImageComponent :url="logoUrl" fit="cover" ratio="4-1" :overlay="true" alt="Image Alt Text" />
      </div>
    </div>
</template>

<script>
import ImageComponent from './ImageComponent.vue';
import logoUrl from '@/assets/images/ybanner1.png';

export default {
  data() {
    return {
      logoUrl
    };
  },
  mounted() {
    // Include scripts dynamically when the component is mounted
    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    document.head.appendChild(script2);

    // Include stylesheets dynamically when the component is mounted
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.green.min.css';
    document.head.appendChild(link2);
  },
  components: {
    ImageComponent
  },
};
</script>
