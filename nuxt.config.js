const isDev = process.env.NODE_ENV !== 'production';

export default {
  dev: isDev,
  head: {
    titleTemplate: '%s - mmpstudio',
    title: 'mmpstudio',
    htmlAttrs: {
      lang: 'pl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.scss'],

  plugins: [{ src: '~/plugins/vee-validate.js', ssr: false }],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/svg-sprite',
  ],
  loading: {
    color: '#40c4ff',
    height: '2px',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.mmpstudio.pl'
        : 'http://localhost:8000',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/options/vuetify.options.js',
    defaultAssets: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
