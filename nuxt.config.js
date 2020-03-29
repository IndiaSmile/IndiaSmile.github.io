export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate(titleChunk) {
      if (
        titleChunk ===
        'IndiaSmile.org | Best things to do while stuck in quarantine'
      ) {
        return titleChunk
      } else {
        return titleChunk ? titleChunk + ' | IndiaSmile.org' : 'IndiaSmile.org'
      }
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'One-stop resource for the best things to do while stuck in quarantine, with a unique indian context. Shareable lists of content to consume and advice to follow',
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'IndiaSmile.org | Best things to do while stuck in quarantine',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=DM+Sans:400,700&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/_buefy.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/global.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/bazzite/nuxt-optimized-images
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/google-gtag',
  ],
  /*
   **
   */
  'google-gtag': {
    id: 'GTM-WGQZMD8',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  server: {
    port: 8000,
  },

  // @bazzite/nuxt-optimized-images
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'responsive-loader',
    responsive: {
      sizes: [400, 800, 1600],
      placeholder: false,
    },
  },
}
