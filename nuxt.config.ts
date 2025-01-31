export default defineNuxtConfig({
    devtools: {enabled: false},

    // modules: ["@nuxtjs/tailwindcss"],
    css: ['~/assets/scss/tailwind.scss'],

    postcss: {

        plugins: {

            tailwindcss: {},
            autoprefixer: {},

        },

    },

    plugins: [

        {src: '~/plugins/vue-datepicker-next.js', mode: 'client'},
        '~/plugins/vue-tel-input.js',
        '~/plugins/vue-carousel.js',
        '~/plugins/fancyapps.js',

    ],

    runtimeConfig: {
        public: {
            googleApiKey: process.env.GOOGLE_API_KEY,
        },
    },

    app: {
        head: {
            script: [
                {src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"},
                {src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"},
                {src: "https://static.addtoany.com/menu/page.js", async: true},
                {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.umd.js"}
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
                },
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
                },
                {
                    rel: "stylesheet" ,
                    href : "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/carousel/carousel.css"
                }

            ],
        },
    },

    modules: [
        '@pinia/nuxt',
        'pinia-plugin-persistedstate/nuxt',
        '@nuxtjs/tailwindcss'
    ],

    compatibilityDate: "2025-01-04",

});