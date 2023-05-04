import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  vite: {
        plugins: [
          VueI18nVitePlugin({
            include: [
              resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
            ]
          })
        ]
      },



    modules: [
      '@nuxtjs/i18n'
    ],
    i18n: {
        
      vueI18n: './i18n.config.ts' // if you are using custom path, default 
    }
  })
  