// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from 'pathe'
export default defineNuxtConfig({
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
          'naive-ui',
          'vueuc',
          '@css-render/vue3-ssr',
          '@juggle/resize-observer'
        ]
        : ['@juggle/resize-observer']
  },
  alias: {
    '@': resolve(__dirname, '.'),
  },
  ssr: process.env.NODE_ENV !== "development",
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    },
    plugins: [
      vueJsx(),
    ],
  },
})