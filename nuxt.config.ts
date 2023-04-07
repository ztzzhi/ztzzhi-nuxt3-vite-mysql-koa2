// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from 'pathe'
import { loadEnv } from 'vite'

const envScript = process?.env?.npm_lifecycle_script?.split(' ')
const envName = envScript?.[envScript.length - 1] || "" // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as any

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: envData  // env下读取的数据
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: '小张很嚣张的博客',
      meta: [
        { name: 'description', content: '小张很嚣张的博客.' },
        { name: 'referrer', content: 'no-referrer' },
      ],
      script: ["https://at.alicdn.com/t/c/font_3998962_vqamfv3hut.js"]
    }
  },
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
  vite: {
    envDir: '~/env',
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