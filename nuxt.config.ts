export default defineNuxtConfig({
  ssr:false,
    modules: [
      '@nuxtjs/i18n'
    ],
    i18n: {
        
      vueI18n: './i18n.config.ts' // if you are using custom path, default 
    }
  })
  