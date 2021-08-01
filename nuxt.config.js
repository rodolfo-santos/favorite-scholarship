export default {
  head: {
    title: 'Quero Bolsa',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ hid: 'fontawesome', src: 'https://kit.fontawesome.com/35b4ab768d.js', defer: true, crossorigin: 'anonymous' }],
  },

  mode: 'spa',

  css: ['~/assets/scss/global.scss'],

  plugins: ['~plugins/filters.ts'],

  components: true,

  buildModules: ['@nuxt/typescript-build'],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  styleResources: {
    scss: ['~/assets/scss/*.scss'],
  },

  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
};
