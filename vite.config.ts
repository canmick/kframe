import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    publicDir: command === 'build' ? false : undefined,
    plugins: [vue(), vueDevTools()],
    server: {
      port: 5656,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: fileURLToPath(new URL('./src/components/KFrame/index.ts', import.meta.url)),
        name: 'kframe',
        formats: ['es', 'umd'],
      },
      rollupOptions: {
        external: ['vue'],
      },
    },
  }
})
