I want to keep this code for now but how can I put faded color red to the image background like overlay, <template>
    <a
      href="#"
      @mouseover="hoverEffect"
      @mouseleave="removeHoverEffect"
      :class="['category-content', { 'hovered': hover }]"
      class="flex flex-col gap-3 text-center justify-center items-center py-5 w-full"
      :style="computedStyle"
    >
      <div v-html="svgContent" class="svg-container cursor-pointer"></div>
      <div class="text-[15px]">{{ title }}</div>
    </a>
  </template>
  
  <script>
  export default {
    name: 'CategoryCard',
    props: {
      title: {
        type: String,
        default: 'Category'
      },
      icon: {
        type: String,
        required: true
      },
      backgroundImage: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        svgContent: '',
        hover: false
      };
    },
    computed: {
      computedStyle() {
        return this.hover
          ? { background: `linear-gradient(267deg, rgba(236, 103, 96, 0.05) 0%, rgba(238, 132, 54, 0.05) 100%), url(${this.backgroundImage}) no-repeat center center`, backgroundSize: 'cover', transition: 'background 0.3s ease-in-out' }
          : { background: 'transparent linear-gradient(267deg, rgba(236, 103, 96, 0.05) 0%, rgba(238, 132, 54, 0.05) 100%) 0% 0% no-repeat padding-box' };
          
      }
    },
    mounted() {
      this.loadSVG(this.icon);
    },
    methods: {
      async loadSVG(url) {
        try {
          const response = await fetch(url);
          this.svgContent = await response.text();
        } catch (error) {
          console.error('Error loading SVG:', error);
        }
      },
      
      hoverEffect() {
        this.hover = true;
        this.$nextTick(() => {
          const svgPaths = this.$el.querySelectorAll('.svg-container path');
         
        });
      },

      removeHoverEffect() {
        this.hover = false;
        this.$nextTick(() => {
          const svgPaths = this.$el.querySelectorAll('.svg-container path');
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .cursor-pointer {
    cursor: pointer;
  }
  .category-content {
    transition: 'background 0.3s ease-in-out'
}
  
  </style>
  