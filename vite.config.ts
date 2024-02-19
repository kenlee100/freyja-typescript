import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      port: process.env.VITE_PORT,
      proxy: {
        '/api': {
          target: process.env.VITE_TARGET_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          followRedirects: true
        }
      }
    },
    plugins: [
      Components({
        dirs: ['src/components']
      }),
      vue()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
