
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: process.env.NODE_ENV === "production",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cheeta-landing-page',
    htmlAttrs: {
      lang: 'fa-IR',
      dir: 'rtl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
      // { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

    loaders: {
      scss: {
        additionalData: `@import "./assets/vars.scss";`,
      },
    },

    postcss: {
      plugins: {
        // tailwindcss: path.join(__dirname, 'tailwind.config.js'),
        tailwindcss: {},
        autoprefixer: {},
        cssnano: {},
      }
    }
  }

}
