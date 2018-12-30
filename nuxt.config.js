module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'M Ilham Sabar',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-  scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'M Ilham Sabar, Web Developer'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  modules: [
    // provide path to the file with resources
    ['nuxt-sass-resources-loader', './assets/main.scss', '@nuxtjs/material-icons', ]
  ],

  css: [
    // { src: 'bulma/bulma.sass', lang: 'sass' },
    {
      src: 'font-awesome/scss/font-awesome.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: 'rgb(221, 209, 209)'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
