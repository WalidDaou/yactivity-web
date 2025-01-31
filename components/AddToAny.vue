<template>
    <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a class="a2a_button_facebook"></a>
      <a class="a2a_button_mastodon"></a>
      <a class="a2a_button_email"></a>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      if (window.a2a) {
        window.a2a.init_all();
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can add custom styles for your share buttons here */
  </style>
  