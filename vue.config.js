module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  assetsDir: 'assets',
  outputDir: 'dist',
  devServer: {
    // https: process.env.VUE_APP_MODE === 'SIT',
    // host: process.env.VUE_APP_HOST_NAME,
    // port: process.env.VUE_APP_HOST_NAME_PORT,
    disableHostCheck: true
    // proxy: {
    //   '^/api': {
    //     target: process.env.VUE_APP_GATEWAY,
    //     ws: true,
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
        // https://github.com/iview/iview-admin/issues/841
      }
    }
  },
  transpileDependencies: [
    'axios',
    'core-js',
    'dsl-core',
    'fecha',
    'jsencrypt',
    'jsonwebtoken',
    'lodash',
    'moment',
    'prismjs',
    'string-mask',
    'tree-table-vue',
    'v-org-tree',
    'view-design',
    'vue-i18n',
    'vue-router',
    'vue',
    'vue2-editor',
    'vuex-persist',
    'vuex'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  }
}
