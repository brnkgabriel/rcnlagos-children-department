// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    manifest: {
      name: 'RCN Lagos - Children Department',
      short_name: 'RCN Lagos - Children Department',
      theme_color: '#ffffff',
      "icons": [
        {
          "src": "/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/icon-256x256.png",
          "sizes": "256x256",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
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
