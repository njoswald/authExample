// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@sidebase/nuxt-auth',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
    ],
    auth: {   
        enableGlobalAppMiddleware: true,
        origin: process.env.AUTH_ORIGIN
    },
    runtimeConfig: {
        GFORM_AUTH: process.env.GFORM_AUTH,
        public: {
            BASE_URL: process.env.BASE_URL,
        }
    }
})
