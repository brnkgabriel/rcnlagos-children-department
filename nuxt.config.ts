// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ['@vite-pwa/nuxt'], 
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'RCN Lagos - Children Department',
      short_name: 'RCN Lagos - Children Department',
      theme_color: '#ffffff',
      "icons": [
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png"
        },
        {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
        {
          "src": "/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ]
    },
    // workbox: {
    //   navigateFallback: '/',
    //   globPatterns: ['src/**/*.{js,css,html,png,svg,ico}'],
    // },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: false,
      type: 'module',
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
