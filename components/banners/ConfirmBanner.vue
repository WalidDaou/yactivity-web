<template>
    <div class="hidden sm:block partner-banner">
        <ImageComponent :url="logoUrl" fit="cover" ratio="5-1" :overlay="true" alt="Image Alt Text" />
    </div>
    <div class="block sm:hidden partner-banner">
        <ImageComponent :url="logoUrl" fit="cover" ratio="2-1" :overlay="true" alt="Image Alt Text" />
    </div>

</template>
   
<script>
import ImageComponent from '../ImageComponent.vue';
import logoUrl from '@/assets/images/confirm-football.png';

export default {
    components: {
        ImageComponent,
    },
    data() {
        return {
            logoUrl,

        }
    }
}
</script>
