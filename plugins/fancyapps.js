import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(nuxtApp => {
    if (process.client) {
        import('@fancyapps/ui').then(pkg => {
            const { Carousel } = pkg;
            nuxtApp.provide('carousel', Carousel);
        });
    }
});
